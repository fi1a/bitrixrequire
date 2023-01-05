<?php

declare(strict_types=1);

namespace Fi1a\BitrixRequire\ORM;

use Bitrix\Main\ORM\Objectify\EntityObject;

/**
 * Зависимости модулей
 */
class RequireObject extends EntityObject
{
    public static $dataClass = RequireTable::class;
}
