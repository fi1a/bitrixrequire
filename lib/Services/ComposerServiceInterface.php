<?php

declare(strict_types=1);

namespace Fi1a\BitrixRequire\Services;

use Fi1a\BitrixRequire\ResultInterface;

/**
 * Сервис
 */
interface ComposerServiceInterface
{
    /**
     * Добавить пакет
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

    /**
     * Показать установленные пакеты
     *
     * @return string[]
     */
    public function installed(): array;

    /**
     * Показать все установленные пакеты
     *
     * @return string[]
     */
    public function all(): array;

    /**
     * Пакеты предложенные для добавления
     *
     * @return string[]
     */
    public function suggest(): array;
}
