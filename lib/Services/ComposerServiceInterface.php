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
}
