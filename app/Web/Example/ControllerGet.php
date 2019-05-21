<?php
/**
 * Возвращение переданного параметра
 *
 * @version 19.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

namespace MicroSPA\App\Web\Example;

use MicroSPA\Core\Abstracts\Controller;

/**
 * Class ControllerGet
 *
 * @package MicroSPA\App\Web\Example
 */
class ControllerGet extends Controller
{
    /**
     * Стартовый метод
     *
     * @version 19.05.2019
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    public function start()
    {
        $result = (new ActionGet())->run(
            $this->request->get('id')
        );

        $this->response->setData($result);
        $this->response->send();
    }
}
