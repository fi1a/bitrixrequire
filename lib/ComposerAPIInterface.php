<?php

declare(strict_types=1);

namespace Fi1a\BitrixRequire;

/**
 * API к командам composer
 */
interface ComposerAPIInterface
{
    /**
     * Установить пакет
     */
    public function require(string $packet, string $version): ResultInterface;

    /**
     * Удалить пакет
     */
    public function remove(string $packet): ResultInterface;
}
