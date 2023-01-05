<?php

declare(strict_types=1);

namespace Fi1a\BitrixRequire;

use const PHP_EOL;

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
        $filter = explode(PHP_EOL, $this->output);
        $result = '';
        foreach ($filter as $item) {
            if ($pos = mb_strrpos($item, '[1G[2K')) {
                $item = mb_substr($item, $pos + mb_strlen('[1G[2K'));
            }
            $result .= $item . PHP_EOL;
        }

        return $result;
    }
}
