/**
 * Функция отображения ошибки из приложения
 *
 * @param {{status: string, code: string, title: string}} error
 *
 * @type {function}
 *
 * @version 28.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
app.showError = function (error) {
    var modal = $('#js-modal__alert');

    modal.find('.modal-header').removeClassWild('bg-*').addClass('bg-' + error.code);
    modal.find('.modal-title').html(error.status);
    modal.find('.modal-body').html(error.title);

    modal.modal({
        backdrop: 'static',
        keyboard: false,
    });
};