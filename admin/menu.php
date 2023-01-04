<?php

namespace Fi1a\BitrixRequire;

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

use Bitrix\Main\Localization\Loc;

global $APPLICATION;

$moduleId = 'fi1a.bitrixrequire';

$rightForModule = $APPLICATION->GetGroupRight($moduleId);

// Если нет прав - не продолжаем
if ('D' == $rightForModule) {
    return false;
}

Loc::loadMessages(__FILE__);

$menuItem = [
    [
        'parent_menu' => 'global_menu_settings',
        'sort' => 2000,
        'text' => Loc::getMessage('FBR_MENU_TEXT'),
        'url'  => 'fi1a_bitrixrequire.php?lang='.LANGUAGE_ID,
        'title'=> Loc::getMessage('FBR_MENU_TITLE'),
        'icon' => 'fi1a_bitrixrequire_menu_icon',
    ]
];

return $menuItem;

