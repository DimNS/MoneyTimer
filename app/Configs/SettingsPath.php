<?php
/**
 * Основные параметры
 *
 * @version 19.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

namespace MicroSPA\App\Configs;

/**
 * Class SettingsPath
 *
 * @package MicroSPA\App\Configs
 */
class SettingsPath
{
    /**
     * Полный путь до корня
     *
     * @var string
     */
    const ROOT = __DIR__ . '/../../';

    /**
     * Путь до каталога log-файлов (относительно корня приложения)
     *
     * @var string
     */
    const LOGS = SettingsPath::ROOT . 'logs/';

    /**
     * Путь до каталога с файлом "routes.yaml"
     *
     * @var string
     */
    const ROUTES = __DIR__;
}
