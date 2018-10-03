import rome from "rome";

import formats from "./formats";

// 080989◢◤200418
const datepicker = (() => {
    window.moment = window.moment || rome.moment;

    const _createDatepicker = datepicker => {
        const {
            datepickerFormat,
            datepickerTime,
            datepickerMin,
            datepickerMax,
            datepickerValue,
            datepickerMonths,
            required
        } = datepicker.dataset;
        const { dateFormat, hourFormat, locale } = formats[datepickerFormat] || formats.iso8601;

        if (datepickerFormat && !formats[datepickerFormat]) {
            console.warn(`${datepickerFormat} is not a recognised date format, using default date format instead.`);
        }

        rome.moment.updateLocale(datepickerFormat || "iso8601", locale);

        const options = {
            weekStart: 1,
            inputFormat: `${datepickerTime ? `${hourFormat} ` : ""}${dateFormat}`,
            time: !!datepickerTime || false,
            min: datepickerMin || null,
            max: datepickerMax || null,
            initialValue: datepickerValue || null,
            required: !!required || false,
            monthsInCalendar: parseInt(datepickerMonths) || 1
        };

        rome(datepicker, options);

        // This is for getting around an issue with rome not displaying the datepicker when clicking label.
        // https://github.com/bevacqua/rome/issues/102
        if (datepicker.id) {
            const label = document.querySelector(`label[for=${datepicker.id}]`);

            label.addEventListener("click", e => {
                e.preventDefault();
                setTimeout(() => datepicker.focus(), 10);
            });
        }
    };

    const init = () => {
        const datepickers = document.querySelectorAll("[data-datepicker]");

        datepickers.forEach(picker => {
            _createDatepicker(picker);
        });
    };

    return { init };
})();

export default datepicker;
