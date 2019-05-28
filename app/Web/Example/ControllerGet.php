<?php
/**
 * Возвращение переданного параметра
 *
 * @version 28.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

namespace MicroSPA\App\Web\Example;

use MicroSPA\Core\Abstracts\Controller;
use Symfony\Component\HttpFoundation\Response;

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
     * @return Response
     *
     * @version 28.05.2019
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    public function start()
    {
        $result = (new ActionGet())->run(
            $this->request->get('id')
        );

        $this->response->setData($result);

        return $this->response;
    }
}
