<?php

declare(strict_types=1);

namespace Fi1a\BitrixRequire;

/**
 * Результат выполнения
 */
interface ResultInterface
{
    public function __construct(bool $success, string $output);

    /**
     * Успешно или нет
     */
    public function isSuccess(): bool;

    /**
     * Вывод операции
     */
    public function getOutput(): string;
}
