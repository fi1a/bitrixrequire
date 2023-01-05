<?php

declare(strict_types=1);

namespace Fi1a\BitrixRequire\ORM;

use Bitrix\Main\Entity\DataManager;
use Bitrix\Main\ORM\Fields\IntegerField;
use Bitrix\Main\ORM\Fields\StringField;

/**
 * Зависимости модулей
 *
 * @codeCoverageIgnore
 */
class RequireTable extends DataManager
{
    /**
     * @inheritDoc
     */
    public static function getTableName(): string
    {
        return 'fbr_require';
    }

    /**
     * @inheritDoc
     */
    public static function getMap(): array
    {
        return [
            'ID' => new IntegerField('ID', [
                'primary' => true,
                'autocomplete' => true,
            ]),
            'MODULE_ID' => new StringField('MODULE_ID', [
                'required' => true,
            ]),
            'PACKAGE' => new StringField('PACKAGE', [
                'required' => true,
            ]),
            'VERSION' => new StringField('VERSION', [
                'nullable' => true,
            ]),
        ];
    }

    /**
     * @inheritDoc
     */
    public static function getObjectClass(): string
    {
        return RequireObject::class;
    }
}
