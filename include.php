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
