<?php

namespace Fi1a\BitrixRequire;

use Bitrix\Main\Loader;
use Bitrix\Main\Localization\Loc;
use Fi1a\BitrixRequire\Helpers\ModuleRegistry;

require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/resources/vendor/autoload.php';

$classLocFilePaths = [
];

foreach ($classLocFilePaths as $classLocFilePath) {
    Loc::loadMessages($classLocFilePath);
}

Loader::registerAutoloadClasses(
    'fi1a.bitrixrequire',
    [
        // Хелперы
        '\Fi1a\BitrixRequire\Helpers\ModuleRegistry' => 'lib/Helpers/ModuleRegistry.php',

        // Composer API
        '\Fi1a\BitrixRequire\ComposerAPIInterface' => 'lib/ComposerAPIInterface.php',
        '\Fi1a\BitrixRequire\ComposerAPI' => 'lib/ComposerAPI.php',
    ]
);

global $APPLICATION;

ModuleRegistry::configure($APPLICATION, $GLOBALS);
