<?php

declare(strict_types=1);

namespace Fi1a\BitrixRequire;

use Fi1a\BitrixRequire\ORM\RequireTable;
use InvalidArgumentException;

/**
 * Пакеты модуля
 */
class ModulePackages implements ModulePackagesInterface
{
    /**
     * @var ComposerApiInterface
     */
    private $composerApi;

    public function __construct(?ComposerApiInterface $composerApi = null)
    {
        if (!$composerApi) {
            $composerApi = new ComposerApi();
        }
        $this->composerApi = $composerApi;
    }

    /**
     * @inheritDoc
     */
    public function require(string $moduleId, string $package, ?string $version = null): ResultInterface
    {
        if (!$moduleId) {
            throw new InvalidArgumentException('$moduleId не может быть пустым');
        }
        if (!$package) {
            throw new InvalidArgumentException('$package не может быть пустым');
        }

        $result = $this->composerApi->require($package, $version);

        if ($result->isSuccess()) {
            $require = RequireTable::query()
                ->setSelect(['*'])
                ->where('MODULE_ID', $moduleId)
                ->where('PACKAGE', $package)
                ->setLimit(1)
                ->exec()
                ->fetchObject();

            if (!$require) {
                $require = RequireTable::createObject();
                $require->set('MODULE_ID', $moduleId);
                $require->set('PACKAGE', $package);
            }

            $require->set('VERSION', $version);

            $require->save();
        }

        return $result;
    }

    /**
     * @inheritDoc
     */
    public function remove(string $moduleId, string $package): ResultInterface
    {
        if (!$moduleId) {
            throw new InvalidArgumentException('$moduleId не может быть пустым');
        }
        if (!$package) {
            throw new InvalidArgumentException('$package не может быть пустым');
        }

        $require = RequireTable::query()
            ->setSelect(['*'])
            ->where('MODULE_ID', $moduleId)
            ->where('PACKAGE', $package)
            ->setLimit(1)
            ->exec()
            ->fetchObject();

        if ($require) {
            $require->delete();
        }

        return new Result(true, '');
    }
}
