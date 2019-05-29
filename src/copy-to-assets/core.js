/**
 * Ядро приложения
 *
 * @version 29.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект приложения
 *
 * @type {object}
 */
var microspa = {};

/**
 * Путь до каталога скрипта index.php
 *
 * @type {string}
 */
microspa.pathAPI = '/app/';

/**
 * Инициализируем плагин jQuery.LightAjax
 *
 * @type {LightAjax}
 */
microspa.lightajax = new LightAjax();

/**
 * Удалить класс у элемента по маске
 *
 * @param {HTMLElement} el Элемент
 * @param {string}      m  Маска
 *
 * @return {HTMLElement}
 *
 * @type {function}
 *
 * @version 29.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
microspa.removeClassByMask = function (el, m) {
    var re = new RegExp('\\b' + m.replace(/\*/g, '\\S+') + '', 'g');

    el.className = Array.from(el.classList).filter(cl => !re.test(cl)).join(' ');

    return el;
};

/**
 * Функция отображения ошибки из приложения
 *
 * @param {string} title Заголовок
 * @param {string} body  HTML-содержимое
 * @param {string} code  Код фона (success|danger|warning|info)
 *
 * @type {function}
 *
 * @version 29.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
microspa.alert = function (title, body, code) {
    var modal = $('#js-modal__alert');

    microspa.removeClassByMask(modal.find('.modal-header'), 'bg-*').addClass('bg-' + code);

    modal.find('.modal-title').html(title);
    modal.find('.modal-body').html(body);

    modal.modal({
        backdrop: 'static',
        keyboard: false,
    });
};

/**
 * Функция отображения окна подтверждения действия
 *
 * @param {string}   body              HTML-содержимое
 * @param {string}   confirmButtonText Текст кнопки "OK"
 * @param {string}   cancelButtonText  Текст кнопки "Cancel
 * @param {function} callbackConfirm   Функция при нажатии confirmButton
 * @param {function} callbackCancel    Функция при нажатии cancelButton
 *
 * @type {function}
 *
 * @version 29.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
microspa.confirm = function (body, confirmButtonText, cancelButtonText, callbackConfirm, callbackCancel) {
    var modal = $('#js-modal__confirm');

    modal.find('.modal-body').html(body);

    modal.find('.js-button__confirm')
        .html(confirmButtonText)
        .unbind('click')
        .bind('click', function () {
            modal.modal('hide');

            if (typeof callbackConfirm === 'function') {
                callbackConfirm();
            }
        });

    modal.find('.js-button__cancel')
        .html(cancelButtonText)
        .unbind('click')
        .bind('click', function () {
            modal.modal('hide');

            if (typeof callbackCancel === 'function') {
                callbackCancel();
            }
        });

    modal.modal({
        backdrop: 'static',
        keyboard: false,
    });
};