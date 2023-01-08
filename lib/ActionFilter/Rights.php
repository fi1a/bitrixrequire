<?php

declare(strict_types=1);

namespace Fi1a\BitrixRequire\ActionFilter;

use Bitrix\Main\Engine\ActionFilter\Base;
use Bitrix\Main\Error;
use Bitrix\Main\Event;
use Bitrix\Main\EventResult;
use Bitrix\Main\Localization\Loc;
use Fi1a\BitrixRequire\Helpers\ModuleRegistry;

/**
 * Префильтр проверки прав на модуль
 */
class Rights extends Base
{
    /**
     * @var string
     */
    private $moduleId;

    /**
     * @var string
     */
    private $right;

    /**
     * Конструктор
     */
    public function __construct(string $moduleId, string $right)
    {
        $this->moduleId = $moduleId;
        $this->right = $right;
        parent::__construct();
    }

    /**
     * @inheritDoc
     */
    public function onBeforeAction(Event $event)
    {
        $right = ModuleRegistry::getApplication()->GetGroupRight($this->moduleId);

        if ($right < $this->right) {
            $this->addError(new Error(Loc::getMessage('FBR_NO_RIGHTS')));

            return new EventResult(EventResult::ERROR, null, null, $this);
        }

        return null;
    }
}
