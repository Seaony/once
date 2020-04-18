<?php

$count = file_get_contents('count');
$count += 1;
file_put_contents('count', $count);

$data = json_decode(file_get_contents(__DIR__ . '/data.json'), true);

require_once __DIR__ . '/template.php';
