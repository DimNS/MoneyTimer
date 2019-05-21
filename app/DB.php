<?php
/**
 * Инициализация ORM для запросов к БД
 *
 * @version 19.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

namespace MicroSPA\App;

use MicroSPA\App\Configs\SettingsDatabase;
use ORM;

/**
 * Class DB
 *
 * @package MicroSPA\App
 */
class DB
{
    /**
     * Инициализация
     *
     * @version 19.05.2019
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    static function init()
    {
        if (SettingsDatabase::NEED_CONNECT) {
            ORM::configure('connection_string', SettingsDatabase::PDO_DSN);
            ORM::configure('username', SettingsDatabase::PDO_USERNAME);
            ORM::configure('password', SettingsDatabase::PDO_PASSWORD);
            ORM::configure('logging', SettingsDatabase::LOGGING);
            ORM::configure('driver_options', SettingsDatabase::PDO_DRIVER_OPTIONS);
        }
    }
}
