<?php
/**
 * Параметры БД
 *
 * @version 28.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

namespace MicroSPA\App\Configs;

use PDO;

/**
 * Class SettingsDatabase
 *
 * @package MicroSPA\App\Configs
 */
class SettingsDatabase
{
    /**
     * Нужно ли подключаться к БД
     *
     * @var boolean
     */
    const NEED_CONNECT = true;

    /**
     * Имя источника данных
     *   MySQL: mysql:host=hostname;port=portnum;dbname=databasename
     *   SQLite: sqlite:path/to/database/file
     *
     * @var string
     */
    const SQLITE_FILE = SettingsPath::ROOT . 'database.sqlite3';

    /**
     * Имя источника данных
     *   MySQL: mysql:host=hostname;port=portnum;dbname=databasename
     *   SQLite: sqlite:path/to/database/file
     *
     * @var string
     */
    const PDO_DSN = 'sqlite:' . SettingsDatabase::SQLITE_FILE;

    /**
     * Имя пользователя
     *   MySQL: string
     *   SQLite: null
     *
     * @var string
     */
    const PDO_USERNAME = null;

    /**
     * Пароль
     *   MySQL: string
     *   SQLite: null
     *
     * @var string
     */
    const PDO_PASSWORD = null;

    /**
     * Параметры драйвера БД
     *
     * @var array
     */
    const PDO_DRIVER_OPTIONS = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ];

    /**
     * Сбор выполняемых запросов
     *   ORM::get_last_query() (Возвращает строку)
     *   ORM::get_query_log() (Возвращает массив)
     *
     * @var boolean
     */
    const LOGGING = true;
}
