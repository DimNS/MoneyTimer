/**
 * Функция отображения окна подтверждения действия
 *
 * @param {string}   body              HTML-Содержимое
 * @param {string}   confirmButtonText Текст кнопки "OK"
 * @param {string}   cancelButtonText  Текст кнопки "Cancel
 * @param {function} callbackConfirm   Функция при нажатии confirmButton
 * @param {function} callbackCancel    Функция при нажатии cancelButton
 *
 * @type {function}
 *
 * @version 28.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
app.showConfirm = function (body, confirmButtonText, cancelButtonText, callbackConfirm, callbackCancel) {
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