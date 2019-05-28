/**
 * Загрузочный скрипт приложения
 *
 * @version 28.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект приложения
 *
 * @type {object}
 */
var app = {};

/**
 * Путь до скрипта api.php
 *
 * @type {string}
 */
app.pathAPI = '/app/';

/**
 * Инициализируем плагин jQuery.LightAjax
 *
 * @type {LightAjax}
 */
app.lightajax = new LightAjax();

/**
 * Инициализация приложения
 *
 * @type {function}
 *
 * @version 28.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
app.init = function () {
    app.initJqueryRemoveClassWild();

    $('#js-app-result').text('Приложение успешно запущено');
};

$(function () {
    app.init();
});