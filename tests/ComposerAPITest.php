<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixRequire;

use Fi1a\BitrixRequire\ComposerApi;
use Fi1a\Unit\BitrixRequire\TestCases\ModuleTestCase;

/**
 * API к командам composer
 */
class ComposerAPITest extends ModuleTestCase
{
    /**
     * Установить пакет
     */
    public function testRequire(): void
    {
        $composer = new ComposerApi();
        $result = $composer->require('fi1a/format', '^2.0');
        $this->assertTrue($result->isSuccess());
    }

    /**
     * Ошибка установки пакета
     *
     * @depends testRequire
     */
    public function testFail(): void
    {
        $composer = new ComposerApi();
        $result = $composer->require('fi1a/collection', '^1.0');
        $this->assertFalse($result->isSuccess());
    }

    /**
     * Удалить пакет
     *
     * @depends testRequire
     */
    public function testRemove(): void
    {
        $composer = new ComposerApi();
        $result = $composer->remove('fi1a/format');
        $this->assertTrue($result->isSuccess());
    }
}
