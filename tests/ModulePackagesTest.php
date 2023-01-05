<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixRequire;

use Fi1a\BitrixRequire\ModulePackages;
use Fi1a\BitrixRequire\ORM\RequireTable;
use Fi1a\Unit\BitrixRequire\TestCases\ModuleTestCase;
use InvalidArgumentException;

/**
 * Пакеты модуля
 */
class ModulePackagesTest extends ModuleTestCase
{
    /**
     * Установить пакеты модуля
     */
    public function testRequire()
    {
        $package = 'fi1a/format';

        $modulePackages = new ModulePackages();
        $result = $modulePackages->require(self::MODULE_ID, $package, '^2.0');
        $this->assertTrue($result->isSuccess());
        $result = $modulePackages->require(self::MODULE_ID, $package, '^2.0');
        $this->assertTrue($result->isSuccess());

        $count = RequireTable::GetList([
            'select' => ['*'],
            'filter' => [
                'MODULE_ID' => self::MODULE_ID,
                'PACKAGE' => $package,
            ],
            'count_total' => true,
        ])->getCount();

        $this->assertEquals(1, $count);
    }

    /**
     * Исключение при пустом модуле
     */
    public function testRequireModuleIdEmptyException()
    {
        $this->expectException(InvalidArgumentException::class);
        $modulePackages = new ModulePackages();
        $modulePackages->require('', 'fi1a/format', '^2.0');
    }

    /**
     * Исключение при пустом пакете
     */
    public function testRequirePackageEmptyException()
    {
        $this->expectException(InvalidArgumentException::class);
        $modulePackages = new ModulePackages();
        $modulePackages->require(self::MODULE_ID, '', '^2.0');
    }

    /**
     * Удалить пакеты модуля
     *
     * @depends testRequire
     */
    public function testRemove()
    {
        $package = 'fi1a/format';

        $modulePackages = new ModulePackages();
        $result = $modulePackages->remove(self::MODULE_ID, $package);
        $this->assertTrue($result->isSuccess());
        $result = $modulePackages->remove(self::MODULE_ID, $package);
        $this->assertTrue($result->isSuccess());

        $count = RequireTable::GetList([
            'select' => ['*'],
            'filter' => [
                'MODULE_ID' => self::MODULE_ID,
                'PACKAGE' => $package,
            ],
            'count_total' => true,
        ])->getCount();

        $this->assertEquals(0, $count);
    }

    /**
     * Исключение при пустом модуле
     */
    public function testRemoveModuleIdException()
    {
        $this->expectException(InvalidArgumentException::class);
        $modulePackages = new ModulePackages();
        $modulePackages->remove('', 'fi1a/format');
    }

    /**
     * Исключение при пустом пакете
     */
    public function testRemovePackageException()
    {
        $this->expectException(InvalidArgumentException::class);
        $modulePackages = new ModulePackages();
        $modulePackages->remove(self::MODULE_ID, '');
    }
}
