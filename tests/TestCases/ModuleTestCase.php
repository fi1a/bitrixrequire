<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixRequire\TestCases;

use Bitrix\Main\Application;
use Bitrix\Main\Loader;
use CModule;
use Fi1a\BitrixRequire\Helpers\ModuleRegistry;
use PHPUnit\Framework\TestCase;

use function ExecuteModuleEventEx;
use function GetModuleEvents;

/**
 * Тесты модуля
 */
class ModuleTestCase extends TestCase
{
    protected const MODULE_ID = 'fi1a.bitrixrequire';

    /**
     * @var bool
     */
    private static $isInstalled = false;

    /**
     * До начала вызова тестов
     */
    public static function setUpBeforeClass(): void
    {
        $module = CModule::CreateModuleObject(self::MODULE_ID);
        if (!$module->IsInstalled()) {
            self::$isInstalled = true;
            $connection = Application::getConnection();
            if (
                strtolower($connection->getType()) === 'mysql'
                && defined('MYSQL_TABLE_TYPE')
                && strlen(MYSQL_TABLE_TYPE) > 0
            ) {
                $connection->queryExecute('SET storage_engine = "' . MYSQL_TABLE_TYPE . '"');
            }
            foreach (GetModuleEvents('main', 'OnModuleInstalled', true) as $arEvent) {
                ExecuteModuleEventEx($arEvent, [self::MODULE_ID, true]);
            }
            if ($module->DoInstall() === false) {
                $application = ModuleRegistry::getGlobals('APPLICATION');

                throw new \ErrorException(
                    $application->GetException()->GetString() ?: 'Can\'t install module.'
                );
            }
        }

        Loader::includeModule(self::MODULE_ID);
    }

    /**
     * После вызова тестов
     */
    public static function tearDownAfterClass(): void
    {
        if (self::$isInstalled) {
            $module = CModule::CreateModuleObject(self::MODULE_ID);
            if ($module->IsInstalled()) {
                foreach (GetModuleEvents('main', 'OnModuleInstalled', true) as $arEvent) {
                    ExecuteModuleEventEx($arEvent, [self::MODULE_ID, false]);
                }
                if ($module->DoUninstall() === false) {
                    throw new \ErrorException('Can\'t uninstall module');
                }
            }
        }
    }
}
