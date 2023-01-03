<?php

namespace Fi1a\BitrixRequire;

use Bitrix\Main\Loader;
use Bitrix\Main\Localization\Loc;
use Fi1a\BitrixRequire\Helpers\ModuleRegistry;

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
    ]
);

global $APPLICATION;

ModuleRegistry::configure($APPLICATION, $GLOBALS);
