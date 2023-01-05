<?php

declare(strict_types=1);

namespace Fi1a\BitrixRequire;

/**
 * Пакеты модуля
 */
interface ModulePackagesInterface
{
    /**
     * Установить пакет для модуля
     */
    public function require(string $moduleId, string $package, ?string $version = null): ResultInterface;

    /**
     * Удалить пакет для модуля
     */
    public function remove(string $moduleId, string $package): ResultInterface;
}
