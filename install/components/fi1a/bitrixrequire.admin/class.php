<?php

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

use Bitrix\Main\Application;
use Bitrix\Main\Loader;
use Bitrix\Main\Engine\Contract\Controllerable;
use Bitrix\Main\Errorable;
use Bitrix\Main\Error;
use Bitrix\Main\ErrorCollection;
use Bitrix\Main\Engine\ActionFilter\Authentication;
use Bitrix\Main\Engine\ActionFilter\HttpMethod;
use Bitrix\Main\Localization\Loc;
use Fi1a\BitrixRequire\ActionFilter\Rights;

class Fi1aBitrixRequireAdminComponent extends CBitrixComponent implements Controllerable, Errorable
{
    const MODULE_ID = 'fi1a.bitrixrequire';

    /** @var  ErrorCollection */
    protected $errorCollection;

    /**
     * @return array
     */
    public function configureActions()
    {
        return [
            'getList' => [
                'prefilters' => [
                    new Authentication(),
                    new Rights(static::MODULE_ID, 'E'),
                    new HttpMethod(
                        [HttpMethod::METHOD_POST,]
                    ),
                ],
                'postfilters' => []
            ],
        ];
    }

    /**
     * Конструктор
     *
     * @param null $component
     */
    public function __construct($component = null)
    {
        Loader::includeModule(static::MODULE_ID);
        $this->errorCollection = [];
        parent::__construct($component);
    }

    /**
     * Adds error to error collection.
     * @param Error $error Error.
     *
     * @return $this
     */
    protected function addError(Error $error)
    {
        $this->errorCollection[] = $error;

        return $this;
    }

    /**
     * Getting array of errors.
     * @return Error[]
     */
    public function getErrors()
    {
        return $this->errorCollection;
    }

    /**
     * Getting once error with the necessary code.
     * @param string $code Code of error.
     * @return Error
     */
    public function getErrorByCode($code)
    {
        return $this->errorCollection->getErrorByCode($code);
    }

    /**
     * @inheritDoc
     */
    public function haveErrors(): bool
    {
        return !empty($this->getErrors());
    }

    /**
     * @inheritDoc
     */
    public function onPrepareComponentParams($arParams)
    {
        return $arParams;
    }

    /**
     * @inheritDoc
     */
    public function executeComponent()
    {
        global $APPLICATION;

        $this->arResult = [
            'STATUS' => '',
            'ERRORS' => [],
            'LANGUAGE_ID' => LANGUAGE_ID,
        ];
        $moduleMode = Loader::includeSharewareModule(static::MODULE_ID);

        // Проверка установлен модуль или нет
        if (!in_array($moduleMode, [Loader::MODULE_DEMO, Loader::MODULE_INSTALLED])) {
            $this->arResult['STATUS'] = 'ERROR';
            $this->arResult['ERRORS'][] = Loc::getMessage('FBR_MODULE_NOT_INSTALL');

            $this->IncludeComponentTemplate();

            return;
        }

        // Проверка прав
        $right = $APPLICATION->GetGroupRight(static::MODULE_ID);
        if ($right < 'E') {
            $this->arResult['STATUS'] = 'ERROR';
            $this->arResult['ERRORS'][] = Loc::getMessage('FBR_NO_RIGHTS');

            $this->IncludeComponentTemplate();

            return;
        }

        $this->IncludeComponentTemplate();
    }
}