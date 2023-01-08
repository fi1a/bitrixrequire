<?php

declare(strict_types=1);

namespace Fi1a\BitrixRequire;

use Bitrix\Main\Config\Option;
use Bitrix\Main\HttpApplication;
use Bitrix\Main\Localization\Loc;
use Composer\Console\Application;
use Composer\Console\HtmlOutputFormatter;
use InvalidArgumentException;
use Symfony\Component\Console\Formatter\WrappableOutputFormatterInterface;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\StreamOutput;

/**
 * API к командам composer
 */
class ComposerApi implements ComposerApiInterface
{
    /**
     * @var WrappableOutputFormatterInterface
     */
    private $formatter;

    public function __construct(?WrappableOutputFormatterInterface $formatter = null)
    {
        if (!$formatter) {
            $formatter = new HtmlOutputFormatter();
        }
        $this->formatter = $formatter;
        putenv('COMPOSER_HOME=' . $this->getVendorDir());
    }

    /**
     * @inheritDoc
     */
    public function getVendorDir(): string
    {
        $path = Option::get('fi1a.bitrixrequire', 'COMPOSER_HOME', 'local');

        if (
            preg_match('/^([a-zA-Z]+)\:\\\*/mi', $path) === 0
            && mb_substr($path, 0, 1) !== '/'
        ) {
            $path = HttpApplication::getDocumentRoot() . '/' . $path;
        }

        if (!is_dir($path)) {
            // @codeCoverageIgnoreStart
            mkdir($path, defined('BX_DIR_PERMISSIONS') ? BX_DIR_PERMISSIONS : 0776, true);
            // @codeCoverageIgnoreEnd
        }
        if (!is_file($path . '/composer.json')) {
            // @codeCoverageIgnoreStart
            copy(__DIR__ . '/../resources/composer.json', $path . '/composer.json');
            @chmod($path . '/composer.json', defined('BX_FILE_PERMISSIONS') ? BX_FILE_PERMISSIONS : 0665);
            // @codeCoverageIgnoreEnd
        }

        return realpath($path);
    }

    /**
     * @inheritDoc
     */
    public function require(string $package, ?string $version = null): ResultInterface
    {
        if (!$package) {
            throw new InvalidArgumentException(Loc::getMessage('FBR_PACKAGE_CAN_NOT_BE_EMPTY'));
        }
        $requirePacket = $package;
        if ($version) {
            $requirePacket .= ':' . $version;
        }

        $input = new ArrayInput([
            'command' => 'require',
            'packages' => [$requirePacket],
            '--working-dir' => $this->getVendorDir(),
        ]);

        return $this->runCommand($input);
    }

    /**
     * @inheritDoc
     */
    public function remove(string $package): ResultInterface
    {
        if (!$package) {
            throw new InvalidArgumentException(Loc::getMessage('FBR_PACKAGE_CAN_NOT_BE_EMPTY'));
        }

        $input = new ArrayInput([
            'command' => 'remove',
            'packages' => [$package],
            '--working-dir' => $this->getVendorDir(),
        ]);

        return $this->runCommand($input);
    }

    /**
     * @inheritDoc
     */
    public function update(): ResultInterface
    {
        $input = new ArrayInput([
            'command' => 'update',
            '--working-dir' => $this->getVendorDir(),
        ]);

        return $this->runCommand($input);
    }

    /**
     * @inheritDoc
     */
    public function install(): ResultInterface
    {
        $input = new ArrayInput([
            'command' => 'install',
            '--working-dir' => $this->getVendorDir(),
        ]);

        return $this->runCommand($input);
    }

    /**
     * Выполняет команду
     */
    private function runCommand(InputInterface $input): ResultInterface
    {
        $stream = fopen('php://memory', 'rw');
        $output = new StreamOutput($stream, StreamOutput::VERBOSITY_NORMAL, true, $this->formatter);
        $application = new Application();
        $application->setAutoExit(false);
        $code = $application->run($input, $output);
        rewind($stream);
        $content = stream_get_contents($stream);
        fclose($stream);

        return new Result($code === 0, $content);
    }
}
