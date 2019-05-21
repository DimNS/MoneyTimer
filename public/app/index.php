<?php
/**
 * Запуск приложения
 *
 * @version 19.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

use MicroSPA\Core\Core;

require '../../vendor/autoload.php';

$core = new Core();
$core->start();
