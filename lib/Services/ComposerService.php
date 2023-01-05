<?php

declare(strict_types=1);

namespace Fi1a\BitrixRequire\Services;

use Bitrix\Main\Data\Cache;
use Bitrix\Main\Web\HttpClient;
use Fi1a\BitrixRequire\ComposerApi;
use Fi1a\BitrixRequire\ComposerApiInterface;
use Fi1a\BitrixRequire\ResultInterface;
use InvalidArgumentException;

/**
 * Сервис
 */
class ComposerService implements ComposerServiceInterface
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
    public function require(string $package, ?string $version = null): ResultInterface
    {
        if (!$package) {
            throw new InvalidArgumentException('Название пакета не может быть пустым');
        }

        return $this->composerApi->require($package, $version);
    }

    /**
     * @inheritDoc
     */
    public function remove(string $package): ResultInterface
    {
        if (!$package) {
            throw new InvalidArgumentException('Название пакета не может быть пустым');
        }

        return $this->composerApi->remove($package);
    }

    /**
     * @inheritDoc
     */
    public function installed(): array
    {
        $result = [];

        $jsonFile = $this->composerApi->getVendorDir() . '/composer.json';
        if (!is_file($jsonFile) || !is_readable($jsonFile)) {
            return $result;
        }

        $json = json_decode(file_get_contents($jsonFile), true);

        if (is_array($json['require'])) {
            $jsonInstalledFile = $this->composerApi->getVendorDir() . '/vendor/composer/installed.json';
            if (!is_file($jsonInstalledFile) || !is_readable($jsonInstalledFile)) {
                return $result;
            }

            $jsonInstalled = json_decode(file_get_contents($jsonInstalledFile), true);

            foreach (array_keys($json['require']) as $package) {
                foreach ($jsonInstalled['packages'] as $item) {
                    if ($package !== $item['name']) {
                        continue;
                    }

                    $result[] = [
                        'package' => $item['name'],
                        'installedVersion' => $item['version'],
                        'description' => $item['description'] ?? null,
                        'homepage' => $item['homepage'] ?? null,
                    ];
                }
            }
        }

        return $result;
    }

    /**
     * @inheritDoc
     */
    public function all(): array
    {
        $result = [];

        $jsonFile = $this->composerApi->getVendorDir() . '/vendor/composer/installed.json';
        if (!is_file($jsonFile) || !is_readable($jsonFile)) {
            return $result;
        }

        $json = json_decode(file_get_contents($jsonFile), true);

        foreach ($json['packages'] as $item) {
            $result[] = [
                'package' => $item['name'],
                'installedVersion' => $item['version'],
                'description' => $item['description'] ?? null,
                'homepage' => $item['homepage'] ?? null,
            ];
        }

        return $result;
    }

    /**
     * @inheritDoc
     */
    public function suggest(): array
    {
        $cache = Cache::createInstance();

        if ($cache->initCache(60 * 60 * 60 * 48, 'composer-suggest')) {
            return $cache->getVars();
        }

        $result = [];

        $httpClient = new HttpClient();
        $response = $httpClient->get(
            'https://packagist.org/packages/list.json?vendor=fi1a&fields[]=type'
        );

        if ($httpClient->getStatus() !== 200) {
            return $result;
        }

        $packages = json_decode($response, true);

        foreach ($packages['packages'] as $packageName => $type) {
            if ($type['type'] === 'bitrix-d7-module' || $packageName === 'fi1a/installer') {
                continue;
            }

            $response = $httpClient->get(
                'https://repo.packagist.org/p2/' . $packageName . '.json'
            );

            if ($httpClient->getStatus() !== 200) {
                continue;
            }

            $package = json_decode($response, true);
            $item = reset($package['packages'][$packageName]);

            if (!$item) {
                continue;
            }

            $result[] = [
                'package' => $item['name'],
                'version' => $item['version'],
                'description' => $item['description'] ?? null,
                'homepage' => $item['homepage'] ?? null,
            ];
        }

        if ($cache->startDataCache()) {
            $cache->endDataCache($result);
        }

        return $result;
    }
}
