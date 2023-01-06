<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixRequire\Services;

use Fi1a\BitrixRequire\ModulePackages;
use Fi1a\BitrixRequire\Services\ComposerService;
use Fi1a\BitrixRequire\Services\ComposerServiceInterface;
use Fi1a\Unit\BitrixRequire\TestCases\ModuleTestCase;
use InvalidArgumentException;

/**
 * Сервис
 */
class ComposerServiceTest extends ModuleTestCase
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

        $modulePackages = new ModulePackages();
        $result = $modulePackages->require(self::MODULE_ID, 'fi1a/collection');
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
     * Установка
     */
    public function testInstall(): void
    {
        $service = $this->getService();
        $result = $service->install();
        $this->assertTrue($result->isSuccess());
    }

    /**
     * Обновление
     */
    public function testUpdate(): void
    {
        $service = $this->getService();
        $result = $service->update();
        $this->assertTrue($result->isSuccess());
    }

    /**
     * Установленные пакеты
     *
     * @depends testRequire
     */
    public function testInstalled(): void
    {
        $service = $this->getService();
        $this->assertCount(2, $service->installed());
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
    public function testRemoveModuleException(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $service = $this->getService();
        $service->remove('fi1a/collection');
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

        $modulePackages = new ModulePackages();
        $result = $modulePackages->remove(self::MODULE_ID, 'fi1a/collection');
        $this->assertTrue($result->isSuccess());

        $result = $service->remove('fi1a/collection');
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
