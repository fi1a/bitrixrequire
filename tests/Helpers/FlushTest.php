<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixRequire\Helpers;

use Fi1a\BitrixRequire\Helpers\Flush;
use Fi1a\Unit\BitrixRequire\TestCases\ModuleTestCase;

/**
 * Тестировоанме хелпера
 */
class FlushTest extends ModuleTestCase
{
    /**
     * Тестирование set и get методов
     */
    public function testSetGet(): void
    {
        $this->assertFalse(Flush::set('', ''));
        $this->assertNull(Flush::get('FUS_TEST_FLUSH'));
        $this->assertTrue(Flush::set('FUS_TEST_FLUSH', 'value'));
        $this->assertEquals('value', Flush::get('FUS_TEST_FLUSH'));
        $this->assertNull(Flush::get('FUS_TEST_FLUSH'));
    }
}
