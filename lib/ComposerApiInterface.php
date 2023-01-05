<?php

declare(strict_types=1);

namespace Fi1a\BitrixRequire;

/**
 * API к командам composer
 */
interface ComposerApiInterface
{
    /**
     *  Возвращает папку с vendor
     */
    public function getVendorDir(): string;

    /**
     * Установить пакет
     */
    public function require(string $package, ?string $version = null): ResultInterface;

    /**
     * Удалить пакет
     */
    public function remove(string $package): ResultInterface;

    /**
     * Обновление зависимостей
     */
    public function update(): ResultInterface;

    /**
     * Установка зависимостей из файла
     */
    public function install(): ResultInterface;
}
