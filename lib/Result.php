<?php

declare(strict_types=1);

namespace Fi1a\BitrixRequire;

/**
 * Результат выполнения
 */
class Result implements ResultInterface
{
    /**
     * @var bool
     */
    private $success;

    /**
     * @var string
     */
    private $output;

    public function __construct(bool $success, string $output)
    {
        $this->success = $success;
        $this->output = $output;
    }

    /**
     * @inheritDoc
     */
    public function isSuccess(): bool
    {
        return $this->success;
    }

    /**
     * @inheritDoc
     */
    public function getOutput(): string
    {
        return $this->output;
    }
}
