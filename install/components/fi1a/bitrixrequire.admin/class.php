<?php

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

use Bitrix\Main\Loader;
use Bitrix\Main\Engine\Contract\Controllerable;
use Bitrix\Main\Errorable;
use Bitrix\Main\Error;
use Bitrix\Main\ErrorCollection;
use Bitrix\Main\Engine\ActionFilter\Authentication;
use Bitrix\Main\Engine\ActionFilter\HttpMethod;
use Bitrix\Main\Localization\Loc;
use Fi1a\BitrixRequire\ActionFilter\Rights;
use Fi1a\BitrixRequire\Helpers\ModuleRegistry;
use Fi1a\BitrixRequire\Services\ComposerService;

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
            'require' => [
                'prefilters' => [
                    new Authentication(),
                    new Rights(static::MODULE_ID, 'F'),
                    new HttpMethod(
                        [HttpMethod::METHOD_POST,]
                    ),
                ],
                'postfilters' => []
            ],
            'remove' => [
                'prefilters' => [
                    new Authentication(),
                    new Rights(static::MODULE_ID, 'F'),
                    new HttpMethod(
                        [HttpMethod::METHOD_POST,]
                    ),
                ],
                'postfilters' => []
            ],
            'update' => [
                'prefilters' => [
                    new Authentication(),
                    new Rights(static::MODULE_ID, 'F'),
                    new HttpMethod(
                        [HttpMethod::METHOD_POST,]
                    ),
                ],
                'postfilters' => []
            ],
            'install' => [
                'prefilters' => [
                    new Authentication(),
                    new Rights(static::MODULE_ID, 'F'),
                    new HttpMethod(
                        [HttpMethod::METHOD_POST,]
                    ),
                ],
                'postfilters' => []
            ],
            'show' => [
                'prefilters' => [
                    new Authentication(),
                    new Rights(static::MODULE_ID, 'E'),
                    new HttpMethod(
                        [HttpMethod::METHOD_POST,]
                    ),
                ],
                'postfilters' => []
            ],
            'suggest' => [
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
     *
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
     *
     * @return Error[]
     */
    public function getErrors()
    {
        return $this->errorCollection;
    }

    /**
     * Getting once error with the necessary code.
     *
     * @param string $code Code of error.
     *
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
        $this->arResult = [
            'STATUS' => '',
            'ERRORS' => [],
            'LANGUAGE_ID' => LANGUAGE_ID,
            'RIGHT' => ModuleRegistry::getApplication()->GetGroupRight(static::MODULE_ID),
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
        if ($this->arResult['RIGHT'] < 'E') {
            $this->arResult['STATUS'] = 'ERROR';
            $this->arResult['ERRORS'][] = Loc::getMessage('FBR_NO_RIGHTS');

            $this->IncludeComponentTemplate();

            return;
        }

        $this->IncludeComponentTemplate();
    }

    /**
     * Добавить пакет
     *
     * @return mixed[]|null
     */
    public function requireAction(string $package, ?string $version = null): ?array
    {
        $service = new ComposerService();

        try {
            $result = $service->require($package, $version);
        } catch (InvalidArgumentException $exception) {
            $this->addError(new Error($exception->getMessage()));

            return null;
        }

        return [
            'success' => $result->isSuccess(),
            'output' => nl2br($result->getOutput()),
            'installed' => $service->installed(),
            'all' => $service->all(),
        ];
    }

    /**
     * Установленные пакеты
     *
     * @return mixed[]|null
     */
    public function showAction(): array
    {
        $service = new ComposerService();

        return [
            'installed' => $service->installed(),
            'all' => $service->all(),
        ];
    }

    /**
     * Удаление
     */
    public function removeAction(string $package): ?array
    {
        $service = new ComposerService();

        try {
            $result = $service->remove($package);
        } catch (InvalidArgumentException $exception) {
            $this->addError(new Error($exception->getMessage()));

            return null;
        }

        return [
            'success' => $result->isSuccess(),
            'output' => nl2br($result->getOutput()),
            'installed' => $service->installed(),
            'all' => $service->all(),
        ];
    }

    /**
     * Обновление зависимостей
     */
    public function updateAction(): ?array
    {
        $service = new ComposerService();

        try {
            $result = $service->update();
        } catch (InvalidArgumentException $exception) {
            $this->addError(new Error($exception->getMessage()));

            return null;
        }

        return [
            'success' => $result->isSuccess(),
            'output' => nl2br($result->getOutput()),
            'installed' => $service->installed(),
            'all' => $service->all(),
        ];
    }

    /**
     * Установка зависимостей из файла
     */
    public function installAction(): ?array
    {
        $service = new ComposerService();

        try {
            $result = $service->install();
        } catch (InvalidArgumentException $exception) {
            $this->addError(new Error($exception->getMessage()));

            return null;
        }

        return [
            'success' => $result->isSuccess(),
            'output' => nl2br($result->getOutput()),
            'installed' => $service->installed(),
            'all' => $service->all(),
        ];
    }

    /**
     * Предложенные пакеты
     *
     * @return mixed[]
     */
    public function suggestAction(): array
    {
        $service = new ComposerService();

        return [
            'suggest' => $service->suggest(),
        ];
    }

}