<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixRequire\Helpers;

use Fi1a\BitrixRequire\Helpers\ModuleRegistry;
use Fi1a\Unit\BitrixRequire\TestCases\ModuleTestCase;
use ReflectionClass;

/**
 * Тестирование реестра
 */
class ModuleRegistryTest extends ModuleTestCase
{
    /**
     * Тестирование методов
     */
    public function testConfigure(): void
    {
        $reflection = new ReflectionClass(ModuleRegistry::class);
        $application = $reflection->getProperty('application');
        $application->setAccessible(true);
        $applicationValue = $application->getValue();
        ModuleRegistry::configure($applicationValue);
        $this->assertInstanceOf(get_class($applicationValue), ModuleRegistry::getApplication());
        ModuleRegistry::setGlobals('FBV_TEST_GLOBAL', 'value');
        $this->assertEquals('value', ModuleRegistry::getGlobals('FBV_TEST_GLOBAL'));
    }
}
