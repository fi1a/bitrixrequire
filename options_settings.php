<?php

namespace Fi1a\BitrixRequire;

use Bitrix\Main\Config\Option;
use Bitrix\Main\Localization\Loc;

$composerApi = new ComposerApi();

?><tr>
    <td valign="top" width="100%">
        <table class="adm-detail-content-table edit-table">
            <tbody>
            <tr>
                <td class="adm-detail-content-cell-l">
                    <label for="COMPOSER_HOME"><?= Loc::getMessage('FBR_COMPOSER_HOME')?>:</label>
                </td>
                <td class="adm-detail-content-cell-r">
                    <input type="text" name="COMPOSER_HOME" size="60" value="<?= Option::get('fi1a.bitrixrequire', 'COMPOSER_HOME', 'local')?>">
                    <?php
                    echo BeginNote();
                    echo 'Путь: ' . $composerApi->getVendorDir();
                    echo EndNote();
                    ?>
                </td>
            </tr>
            </tbody>
        </table>
    </td>
</tr>
