<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixRequire;

use Fi1a\BitrixRequire\Result;
use PHPUnit\Framework\TestCase;

use const PHP_EOL;

/**
 * Результат выполнения
 */
class ResultTest extends TestCase
{
    /**
     * Результат выполнения
     */
    public function testResultSuccess(): void
    {
        $result = new Result(true, 'clear[1G[2Koutput');

        $this->assertTrue($result->isSuccess());
        $this->assertEquals('output' . PHP_EOL, $result->getOutput());
    }

    /**
     * Результат выполнения
     */
    public function testResultNotSuccess(): void
    {
        $result = new Result(false, '');

        $this->assertFalse($result->isSuccess());
        $this->assertEquals('' . PHP_EOL, $result->getOutput());
    }
}
