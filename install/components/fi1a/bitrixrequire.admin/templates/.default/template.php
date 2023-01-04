<?php

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

/**
 * @var array $arParams
 * @var array $arResult
 */

?>
<script>
    window.I18N_LOCALE = '<?= $arResult['LANGUAGE_ID']?>';
</script>
<?php

include __DIR__ . '/dist/index.html';
