let gulp = require('gulp'),
    iconv = require('gulp-iconv'),
    clean = require('gulp-clean'),
    git = require('gulp-git'),
    path = require('path'),
    zip = require('gulp-zip'),
    source = require('vinyl-source-stream'),
    os = require('os'),
    moment = require('moment'),
    sequence = require('gulp4-run-sequence'),
    flatten = require('gulp-flatten'),
    nrc = require('node-run-cmd');

const buildFolder = 'runtime/release';
const distrFolder = 'dist';

let lastVersion = null;
let previousVersion = null;

/**
 * Проверка на число
 * @param n
 * @returns {boolean}
 */
const isNumeric = n => {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

/**
 * Принимает строку или массив. Превращает в массив, и дополняет его glob шаблонами для исключения лишних файлов сборки
 * @param glob
 * @returns {Array}
 */
const extendGlob = glob => {
    let globs = [];
    if (typeof glob === 'string') {
        globs.push(glob);
    } else {
        globs = glob.filter((el) => {
            return el !== null && el !== '';
        });
    }

    globs.push('!{**/node_modules,**/node_modules/**}');
    globs.push('!{runtime,runtime/**}');
    globs.push('!{dist,dist/**}');
    globs.push('!{.idea,.idea/**}');
    globs.push('!{.git,.git/**}');
    globs.push('!phpunit.xml');
    globs.push('!composer.lock');
    globs.push('!**/package-lock.json');
    globs.push('!.phpunit.result.cache');
    globs.push('!.gitignore');
    globs.push('!{vendor/bin,vendor/bin/**}');
    globs.push('!{installers,installers/**}');

    return globs;
};

/**
 * Возвращает промис, в котором можно получить доступ к выводу команды git tag
 */
const getTags = () => {
    return new Promise(resolve => {
        git.exec({args: 'tag --sort=-creatordate --format=\'%(creatordate:rfc)%09%(refname)\''}, (error, output) => {
            if (error) {
                throw error;
            }

            resolve(output);
        });
    });
};

/**
 * Парсит вывод от команды git tag
 * @param log
 */
const parseVersions = log => {

    let tags = log.trim().split(os.EOL).filter((item) => {
        return item !== '';
    });

    if (!tags.length) {
        // Если версий нет, то подменим вывод
        tags.push(moment().format() + '\trefs/tags/0.0.1');
    }

    return tags.map((tag) => {
        let match = tag.split('\t');

        if (match.length > 1) {
            let date = moment(match[0].trim()).format('YYYY-MM-DD HH:mm:ss');
            let version = match[1].replace('refs/tags/', '');

            const versionArray = version.split('.');

            if (versionArray.length < 2 || versionArray.length > 3) {
                return null;
            }

            if (versionArray.length === 2) {
                versionArray[2] = 0;
            }

            if (!isNumeric(versionArray[0]) || !isNumeric(versionArray[1]) || !isNumeric(versionArray[2])) {
                return null;
            }

            version = versionArray.join('.');

            return {
                version: version,
                date: date
            };
        }
    }).filter(tag => {
        return tag !== null;
    });
};

/**
 * Возвращает название для архива сборки в зависимости от ОС
 * @returns {string}
 */
const getVersionArchiveName = () => {
    if (lastVersion.version === previousVersion.version) {
        if (os.platform() === 'darwin') {
            return 'last_version'
        }

        return '.last_version';
    }

    return lastVersion.version;
};

/**
 * Возвращает название директории сборки в зависимости от ОС
 * @returns {string}
 */
const getVersionFolderName = () => {
    const folderName = getVersionArchiveName();
    if (lastVersion.version === previousVersion.version && os.platform() === 'darwin') {
        return '.' + folderName;
    }

    return folderName;
};

/**
 * Создает содержимое для файла версии
 *
 * @param version
 * @param date
 * @returns {string}
 */
const createVersionFileContent = (version, date) => {
    return `<?
$arModuleVersion = array(
\t"VERSION" => "${ version }",
\t"VERSION_DATE" => "${ date }"
);
?>`;
};

// Очистка директории со сборкой
gulp.task('clean', () => {
    return gulp.src(buildFolder, {allowEmpty: true}).pipe(clean());
});

// Копирование всех файлов модуля в директорию сборки
gulp.task('move', () => {
    const version = getVersionFolderName();

    return gulp.src(extendGlob('./**'), {base: './', dot: true})
        .pipe(gulp.dest(path.join(buildFolder, version)));
});

// Кодирование в 1251
gulp.task('encode', () => {
    const version = getVersionFolderName();

    return gulp.src([
        path.join(buildFolder, version, '**/lang/**/*.php'),
        path.join(buildFolder, version, 'description.*')
    ], {dot: true})
        .pipe(iconv({encoding: 'win1251'}))
        .pipe(gulp.dest(path.join(buildFolder, version)));
});

// Архивирует в zip
gulp.task('archive', () => {
    const version = getVersionArchiveName();

    return gulp.src(path.join(buildFolder, '**/*'), {dot: true})
        .pipe(zip(version + '.zip', {compress: true}))
        .pipe(gulp.dest(buildFolder));
});

// Переносит в директорию с дистрибутивом
gulp.task('dist', () => {
    return gulp.src([
        path.join(buildFolder, '*.zip')
    ], {dot: true})
        .pipe(gulp.dest(distrFolder));
});

// Заменяет файл с версией модуля
gulp.task('version', () => {
    const version = getVersionFolderName();
    const fileContent = createVersionFileContent(lastVersion.version, lastVersion.date);

    let stream = source(path.join(buildFolder, version, 'install', 'version.php'));
    stream.end(fileContent)

    return stream.pipe(gulp.dest('.'));
});

// Копируем файлы update
gulp.task('update', () => {
    const version = getVersionFolderName();

    return gulp.src([
        path.join('.', 'installers', 'versions', version, 'updater.php'),
        path.join('.', 'installers', 'versions', version, 'version_control.txt'),
        path.join('.', 'installers', 'versions', version, 'description.*')
    ], {dot: true, allowEmpty: true})
        .pipe(flatten({ includeParents: 0 }))
        .pipe(
            gulp.dest(path.join(buildFolder, version))
        );
});

// Перенос последней версии модуля в директорию сборки
gulp.task('diff', (callback) => {
    git.exec({args: `diff ${previousVersion.version} --name-only`}, (error, output) => {
        if (error) {
            callback(error);
        }

        const globs = extendGlob(output.split(os.EOL));

        gulp.src(globs, {base: './', allowEmpty: true})
            .pipe(gulp.dest(path.join(buildFolder, getVersionFolderName())))
            .on('end', callback);
    });
});

// Сборка зависимостей с помощью composer
gulp.task('composer_no_dev', (callback) => {
    nrc.run('./vendor/bin/composer install --no-dev', { onDone: callback });
});

// Сборка зависимостей с помощью composer
gulp.task('composer', (callback) => {
    nrc.run('./vendor/bin/composer install', { onDone: callback });
});

// Сборка текущей версии модуля
gulp.task('build_last_version', (callback) => {
    getTags().then(function(output) {
        const versions = parseVersions(output);
        lastVersion = previousVersion = versions[0];
        sequence('clean', 'composer_no_dev', 'move', 'version', 'encode', 'archive', 'dist', 'clean', 'composer', callback);
    }).catch((error) => {
        console.log(error);
    });
});


// Сборка обновления модуля (разница между последней и предпоследней версией по тегам git)
gulp.task('build_update', (callback) => {
    getTags().then(function(output) {
        const versions = parseVersions(output);
        lastVersion = versions[0];
        previousVersion = versions[1];

        if (!previousVersion) {
            return callback();
        }

        sequence('clean', 'diff', 'version', 'update', 'encode', 'archive', 'dist', 'clean', callback)
    }).catch((error) => {
        console.log(error);
    });
});

// Дефолтная задача. Собирает все по очереди
gulp.task('default', (callback) => {
    sequence('build_last_version', 'build_update', callback);
});
