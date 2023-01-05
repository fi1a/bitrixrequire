<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixRequire\Services;

use Fi1a\BitrixRequire\Services\ComposerService;
use Fi1a\BitrixRequire\Services\ComposerServiceInterface;
use InvalidArgumentException;
use PHPUnit\Framework\TestCase;

/**
 * Сервис
 */
class ComposerServiceTest extends TestCase
{
    /**
     * Возвращает сервис
     */
    private function getService(): ComposerServiceInterface
    {
        return new ComposerService();
    }

    /**
     * Добавление пакета
     */
    public function testRequire(): void
    {
        $service = $this->getService();
        $result = $service->require('fi1a/format', '^2.0');
        $this->assertTrue($result->isSuccess());
    }

    /**
     * Исключение при пустом названии пакета
     */
    public function testRequireException(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $service = $this->getService();
        $service->require('', '^2.0');
    }

    /**
     * Установленные пакеты
     *
     * @depends testRequire
     */
    public function testInstalled(): void
    {
        $service = $this->getService();
        $this->assertCount(1, $service->installed());
    }

    /**
     * Все пакеты
     *
     * @depends testRequire
     */
    public function testAll(): void
    {
        $service = $this->getService();
        $this->assertCount(3, $service->all());
    }

    /**
     * Уадаление пакета
     *
     * @depends testRequire
     */
    public function testRemove(): void
    {
        $service = $this->getService();
        $result = $service->remove('fi1a/format');
        $this->assertTrue($result->isSuccess());
    }

    /**
     * Исключение при пустом названии пакета
     */
    public function testRemoveException(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $service = $this->getService();
        $service->remove('');
    }

    /**
     * Предложенные для добавления пакеты
     */
    public function testSuggest(): void
    {
        $service = $this->getService();
        $this->assertIsArray($service->suggest());
    }
}
