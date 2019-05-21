<?php
/**
 * Инициализация заголовков
 *
 * @version 19.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

namespace MicroSPA\App;

use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Class Headers
 *
 * @package MicroSPA\App
 */
class Headers
{
    /**
     * Инициализация
     *
     * @param JsonResponse $response Объект ответа
     *
     * @version 19.05.2019
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    static function init($response)
    {
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->headers->set('Content-Type', 'text/html; charset=utf-8');
    }
}
