<?php
declare(strict_types=1);

namespace Vendor\Name;

class Sample
{
    private string $str;
    public function __construct(string $str)
    {
        $this->str = $str;
    }

    public function getStr(): string
    {
        return $this->str;
    }
}
