/**
 * Получение результата
 *
 * @param {int} id ИД записи
 *
 * @version 29.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
example.get = function (id) {
    $('#js-example-result').text('...');

    microspa.lightajax.get(true, microspa.pathAPI + 'example/' + id, {}, function (result) {
        microspa.lightajax.preloader('hide');

        if (result.hasOwnProperty('error')) {
            app.showError(result.error);
        } else {
            $('#js-example-result').text(result.data.id);
        }
    });
};