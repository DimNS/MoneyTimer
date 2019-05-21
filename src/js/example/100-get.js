/**
 * Получение результата
 *
 * @param {int} id ИД записи
 *
 * @version 19.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
example.get = function (id) {
    $('#js-example-result').text('...');

    app.lightajax.get(true, app.pathAPI + 'example/' + id, {}, function (result) {
        app.lightajax.preloader('hide');

        if (result.hasOwnProperty('error')) {
            app.showError(result.error);
        } else {
            $('#js-example-result').text(result.data.id);
        }
    });
};