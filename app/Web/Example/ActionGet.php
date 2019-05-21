<?php
/**
 * Возвращение переданного параметра
 *
 * @version 19.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

namespace MicroSPA\App\Web\Example;

use MicroSPA\Core\Helpers\Response;

/**
 * Class ActionGet
 *
 * @package MicroSPA\App\Web\Example
 */
class ActionGet
{
    /**
     * Выполним действие
     *
     * @param integer $id ИД записи
     *
     * @return array
     *
     * @version 19.05.2019
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    public function run($id)
    {
        return Response::data([
            'id' => $id,
        ]);
    }
}
