<?php

declare(strict_types=1);

namespace Fi1a\BitrixRequire\Services;

use Bitrix\Main\Data\Cache;
use Bitrix\Main\Localization\Loc;
use Bitrix\Main\Web\HttpClient;
use CModule;
use Fi1a\BitrixRequire\ComposerApi;
use Fi1a\BitrixRequire\ComposerApiInterface;
use Fi1a\BitrixRequire\ORM\RequireTable;
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
            throw new InvalidArgumentException(Loc::getMessage('FBR_PACKAGE_NAME_EMPTY_ERROR'));
        }

        return $this->composerApi->require($package, $version);
    }

    /**
     * @inheritDoc
     */
    public function remove(string $package): ResultInterface
    {
        if (!$package) {
            throw new InvalidArgumentException(Loc::getMessage('FBR_PACKAGE_NAME_EMPTY_ERROR'));
        }

        $count = RequireTable::GetList([
            'select' => ['*'],
            'filter' => [
                'PACKAGE' => $package,
            ],
            'count_total' => true,
        ])->getCount();

        if ($count > 0) {
            throw new InvalidArgumentException(Loc::getMessage('FBR_NEED_REMOVE_MODULE_ERROR'));
        }

        return $this->composerApi->remove($package);
    }

    /**
     * @inheritDoc
     */
    public function update(): ResultInterface
    {
        return $this->composerApi->update();
    }

    /**
     * @inheritDoc
     */
    public function install(): ResultInterface
    {
        return $this->composerApi->install();
    }

    /**
     * @inheritDoc
     */
    public function installed(): array
    {
        $result = [];

        $jsonFile = $this->composerApi->getVendorDir() . '/composer.json';
        if (!is_file($jsonFile) || !is_readable($jsonFile)) {
            // @codeCoverageIgnoreStart
            return $result;
            // @codeCoverageIgnoreEnd
        }

        $json = json_decode(file_get_contents($jsonFile), true);

        if (is_array($json['require'])) {
            $jsonInstalledFile = $this->composerApi->getVendorDir() . '/vendor/composer/installed.json';
            if (!is_file($jsonInstalledFile) || !is_readable($jsonInstalledFile)) {
                // @codeCoverageIgnoreStart
                return $result;
                // @codeCoverageIgnoreEnd
            }

            $jsonInstalled = json_decode(file_get_contents($jsonInstalledFile), true);

            $iterator = RequireTable::query()
                ->setSelect(['*'])
                ->exec();

            $modulesByPackage = [];
            $modules = [];

            while ($requireModule = $iterator->fetchObject()) {
                if (!isset($modulesByPackage[$requireModule->get('PACKAGE')])) {
                    $modulesByPackage[$requireModule->get('PACKAGE')] = [];
                }

                if (!isset($modules[$requireModule->get('MODULE_ID')])) {
                    $module = CModule::CreateModuleObject($requireModule->get('MODULE_ID'));

                    $modules[$requireModule->get('PACKAGE')] = [
                        'moduleId' => $requireModule->get('MODULE_ID'),
                        'name' => $module ? $module->MODULE_NAME : null,
                        'description' => $module ? $module->MODULE_DESCRIPTION : null,
                        'version' => $requireModule->get('VERSION'),
                    ];
                }

                $modulesByPackage[$requireModule->get('PACKAGE')][] = $modules[$requireModule->get('PACKAGE')];
            }

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
                        'modules' => $modulesByPackage[$item['name']] ?? [],
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
            // @codeCoverageIgnoreStart
            return $result;
            // @codeCoverageIgnoreEnd
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
     * @codeCoverageIgnore
     */
    public function suggest(): array
    {
        $cache = Cache::createInstance();

        if ($cache->initCache(60 * 60 * 48, 'package-suggests')) {
            return (array) $cache->getVars();
        }

        $httpClient = new HttpClient();
        $response = $httpClient->get(
            'https://raw.githubusercontent.com/fi1a/bitrixrequire/main/resources/suggest.json'
        );

        if ($httpClient->getStatus() !== 200 || !$response) {
            return [];
        }

        $result = json_decode($response, true);

        if ($cache->startDataCache()) {
            $cache->endDataCache($result);
        }

        return $result;
    }
}
