<?php

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

/**
 * @var array $arParams
 * @var array $arResult
 * @var string $templateFolder
 */

$module = CModule::CreateModuleObject('fi1a.bitrixrequire');

?>
<div data-right="<?= $arResult['RIGHT']?>" data-locale="<?= $arResult['LANGUAGE_ID']?>" id="app"></div>

<link rel="stylesheet" type="text/css" href="<?= $templateFolder?>/dist/style.css?v=<?= $module->MODULE_VERSION?>">
<script type="module" src="<?= $templateFolder?>/dist/bitrixrequire.admin.js?v=<?= $module->MODULE_VERSION?>"></script>