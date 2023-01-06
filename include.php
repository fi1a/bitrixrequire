<?php

namespace Fi1a\BitrixRequire;

use Bitrix\Main\Loader;
use Bitrix\Main\Localization\Loc;
use Fi1a\BitrixRequire\Helpers\ModuleRegistry;

require_once __DIR__ . '/vendor/autoload.php';

$composerApi = new ComposerApi();

$autoloadPath = $composerApi->getVendorDir() . '/vendor/autoload.php';
if (is_file($autoloadPath)) {
    require_once $autoloadPath;
}

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
        'Fi1a\BitrixRequire\Helpers\Flush' => 'lib/Helpers/Flush.php',

        // Сервисы
        '\Fi1a\BitrixRequire\Services\ComposerServiceInterface' => 'lib/Services/ComposerServiceInterface.php',
        '\Fi1a\BitrixRequire\Services\ComposerService' => 'lib/Services/ComposerService.php',

        // Composer API
        '\Fi1a\BitrixRequire\ComposerApiInterface' => 'lib/ComposerApiInterface.php',
        '\Fi1a\BitrixRequire\ComposerApi' => 'lib/ComposerApi.php',
    ]
);

global $APPLICATION;

ModuleRegistry::configure($APPLICATION, $GLOBALS);
