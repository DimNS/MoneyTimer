<?php
/**
 * Приложение
 *
 * @version 28.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

namespace MicroSPA\App;

use MicroSPA\App\Configs\SettingsDatabase;
use MicroSPA\Core\Helpers\LoggerFactory;
use PDO;
use PDOException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * App
 *
 * @package MicroSPA\App
 */
class App
{
    /**
     * Запуск приложения
     *
     * @param Request      $request  Объект запроса
     * @param JsonResponse $response Объект ответа
     *
     * @version 28.05.2019
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    public function start($request, $response)
    {
        date_default_timezone_set('UTC');

        DB::init();
        Headers::init($response);

        if (
            SettingsDatabase::NEED_CONNECT
            &&
            !is_file(SettingsDatabase::SQLITE_FILE)
            &&
            !is_readable(SettingsDatabase::SQLITE_FILE)
        ) {
            $this->createDatabase();
        }
    }

    /**
     * Создание БД
     *
     * @version 28.05.2019
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    protected function createDatabase()
    {
        try {
            $file_db = new PDO(SettingsDatabase::PDO_DSN);

            $file_db->exec("
                CREATE TABLE IF NOT EXISTS clients (
                    id INTEGER PRIMARY KEY,
                    name TEXT,
                    created_at TEXT,
                    updated_at TEXT,
                    deleted_at TEXT
                )
            ");

            $file_db->exec("
                CREATE TABLE IF NOT EXISTS projects (
                    id INTEGER PRIMARY KEY,
                    client_id INTEGER,
                    name TEXT,
                    price REAL,
                    created_at TEXT,
                    updated_at TEXT,
                    deleted_at TEXT
                )
            ");

            $file_db->exec("
                CREATE TABLE IF NOT EXISTS times (
                    id INTEGER PRIMARY KEY,
                    project_id INTEGER,
                    start INTEGER,
                    end INTEGER,
                    interval INTEGER,
                    created_at TEXT,
                    updated_at TEXT,
                    deleted_at TEXT
                )
            ");
        } catch (PDOException $e) {
            $log = LoggerFactory::create('PDO');
            $log->error($e->getMessage());
        }
    }
}
