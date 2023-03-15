<?php

declare(strict_types=1);

namespace Fi1a\BitrixRequire\Helpers;

use CMain;

/**
 * Реестр
 */
class ModuleRegistry
{
    /**
     * @var \CMain
     */
    protected static $application;

    /**
     * Конструктор
     */
    public static function configure(CMain $application)
    {
        static::$application = $application;
    }

    /**
     * Возвращает \CMain
     */
    public static function getApplication(): CMain
    {
        return static::$application;
    }

    /**
     * Возвращает значение из $GLOBALS
     *
     * @return mixed
     */
    public static function getGlobals(string $key)
    {
        return $GLOBALS[$key];
    }

    /**
     * Устанавливает значение в $GLOBALS
     *
     * @param mixed $value
     *
     * @return mixed
     */
    public static function setGlobals(string $key, $value): void
    {
        $GLOBALS[$key] = $value;
    }
}
