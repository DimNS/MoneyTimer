/**
 * Подключение функции удаления классов по маске
 *
 * @type {function}
 *
 * @version 28.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
app.initJqueryRemoveClassWild = function () {
    $.fn.removeClassWild = function (mask) {
        return this.removeClass(function (index, cls) {
            var re = mask.replace(/\*/g, '\\S+');

            return (cls.match(new RegExp('\\b' + re + '', 'g')) || []).join(' ');
        });
    };
};