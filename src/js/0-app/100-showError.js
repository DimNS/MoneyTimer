/**
 * Инициализация приложения
 *
 * @param {{status: string, code: string, title: string}} error
 *
 * @type {function}
 *
 * @version 19.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
app.showError = function (error) {
    alert('status: ' + error.status + '\ncode: ' + error.code + '\ntitle: ' + error.title);
};