<?php

declare(strict_types=1);

namespace Fi1a\BitrixRequire;

use Composer\Console\Application;
use Composer\Console\HtmlOutputFormatter;
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
        return realpath(__DIR__ . '/../resources');
    }

    /**
     * @inheritDoc
     */
    public function require(string $package, ?string $version = null): ResultInterface
    {
        $requirePacket = $package;
        if ($version) {
            $requirePacket .= ':' . $version;
        }

        $input = new ArrayInput([
            'command' => 'require',
            'packages' => [$requirePacket],
            '--working-dir' => realpath(__DIR__ . '/../resources'),
        ]);

        return $this->runCommand($input);
    }

    /**
     * @inheritDoc
     */
    public function remove(string $package): ResultInterface
    {
        $input = new ArrayInput([
            'command' => 'remove',
            'packages' => [$package],
            '--working-dir' => realpath(__DIR__ . '/../resources'),
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
            '--working-dir' => realpath(__DIR__ . '/../resources'),
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
            '--working-dir' => realpath(__DIR__ . '/../resources'),
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
