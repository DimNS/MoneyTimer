/**
 * Функция отображения ошибки из приложения
 *
 * @param {{status: string, code: string, title: string}} error
 *
 * @type {function}
 *
 * @version 29.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
app.showError = function (error) {
    microspa.alert(error.status, error.title, error.code);
};