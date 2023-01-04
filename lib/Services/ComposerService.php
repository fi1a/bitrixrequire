<?php

declare(strict_types=1);

namespace Fi1a\BitrixRequire\Services;

use Fi1a\BitrixRequire\ComposerApi;
use Fi1a\BitrixRequire\ResultInterface;
use InvalidArgumentException;

/**
 * Сервис
 */
class ComposerService implements ComposerServiceInterface
{
    /**
     * @inheritDoc
     */
    public function require(string $package, ?string $version = null): ResultInterface
    {
        if (!$package) {
            throw new InvalidArgumentException('Название пакета не может быть пустым');
        }

        $composerApi = new ComposerApi();

        return $composerApi->require($package, $version);
    }
}
