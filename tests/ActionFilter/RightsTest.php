<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixRequire\ActionFilter;

use Bitrix\Main\Event;
use Bitrix\Main\EventResult;
use Fi1a\BitrixRequire\ActionFilter\Rights;
use Fi1a\Unit\BitrixRequire\TestCases\ModuleTestCase;

/**
 * Префильтр проверки прав на модуль
 */
class RightsTest extends ModuleTestCase
{
    /**
     * Проверка прав на модуль
     */
    public function testOnBeforeAction(): void
    {
        $right = new Rights(static::MODULE_ID, 'D');
        $this->assertNull($right->onBeforeAction(new Event(static::MODULE_ID, '')));

        $right = new Rights(static::MODULE_ID, 'E');
        $this->assertInstanceOf(
            EventResult::class,
            $right->onBeforeAction(new Event(static::MODULE_ID, ''))
        );
    }
}
