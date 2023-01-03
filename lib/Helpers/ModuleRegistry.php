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
    private static $application;

    private static $globals;

    /**
     * Конструктор
     *
     * @param mixed[] $globals
     */
    public static function configure(CMain $application, array &$globals)
    {
        static::$application = $application;
        static::$globals = $globals;
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
        return static::$globals[$key];
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
        static::$globals[$key] = $value;
    }
}
