<?php
/**
 * Приложение
 *
 * @version 19.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

namespace MicroSPA\App;

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
     * @version 19.05.2019
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    public function start($request, $response)
    {
        date_default_timezone_set('UTC');

        DB::init();
        Headers::init($response);
    }
}
