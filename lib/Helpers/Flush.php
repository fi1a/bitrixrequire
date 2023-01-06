<?php

declare(strict_types=1);

namespace Fi1a\BitrixRequire\Helpers;

use Bitrix\Main\Application;

/**
 * Хелпер
 */
class Flush
{
    /**
     * Установить значение
     *
     * @param mixed $value
     */
    public static function set(string $key, $value): bool
    {
        if (!$key) {
            return false;
        }
        $session = Application::getInstance()->getSession();
        $session->set($key, $value);

        return true;
    }

    /**
     * Возвращает значение
     *
     * @return mixed
     */
    public static function get(string $key)
    {
        $session = Application::getInstance()->getSession();
        $value = $session->get($key);
        $session->remove($key);

        return $value;
    }
}
