/**
 * Загрузочный скрипт приложения
 *
 * @version 29.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект приложения
 *
 * @type {object}
 */
var app = {};

/**
 * Инициализация приложения
 *
 * @type {function}
 *
 * @version 29.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
app.init = function () {
    $('#js-app-result').text('Приложение успешно запущено');
};

$(function () {
    app.init();
});