<?php
declare(strict_types=1);

namespace Vendor\Name\Test\Unit;

use Vendor\Name\Sample;
use PHPUnit\Framework\TestCase;

class SampleTest extends TestCase
{
    public function test_createSample(): void
    {
        $sample = new Sample('hello');
        self::assertSame('hello', $sample->getStr());
    }
}
