<?php

declare(strict_types=1);

namespace Fi1a\BitrixRequire;

/**
 * API к командам composer
 */
interface ComposerApiInterface
{
    /**
     * Установить пакет
     */
    public function require(string $package, string $version): ResultInterface;

    /**
     * Удалить пакет
     */
    public function remove(string $package): ResultInterface;
}
