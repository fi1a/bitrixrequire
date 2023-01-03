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
class ComposerAPI implements ComposerAPIInterface
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
        putenv('COMPOSER_HOME=' . realpath(__DIR__ . '/../resources/vendor/bin/composer'));
    }

    /**
     * @inheritDoc
     */
    public function require(string $packet, ?string $version = null): ResultInterface
    {
        $requirePacket = $packet;
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
    public function remove(string $packet): ResultInterface
    {
        $input = new ArrayInput([
            'command' => 'remove',
            'packages' => [$packet],
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
