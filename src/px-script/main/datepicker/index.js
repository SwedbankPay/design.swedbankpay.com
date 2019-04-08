import formats from "./formats";
import flatpickr from "flatpickr";

// 080989◢◤200418
const datepicker = (() => {
    const _createDatepicker = datepicker => {
        const {
            datepickerFormat,
            datepickerTime,
            datepickerMin,
            datepickerMax,
            datepickerValue,
            datepickerMonths,
            datepickerFulldate,
            datepickerMode,
            datepickerAllowinput
        } = datepicker.dataset;
        let format = "";

        if (datepickerFormat && !!formats[datepickerFormat]) {
            format = formats[datepickerFormat];
        } else if (datepickerFormat && !formats[datepickerFormat]) {
            format = formats.iso8601;
            console.warn(`${datepickerFormat} is not a recognized value, using standard format instead (iso8601)`);
        } else {
            format = formats.iso8601;
        }

        const options = {
            allowInput: !!datepickerAllowinput,
            altFormat: datepickerFulldate ? format.fulldate : "",
            altInput: !!datepickerFulldate,
            defaultDate: datepickerValue || null,
            dateFormat: format.dateFormat,
            enableTime: !!datepickerTime || "",
            locale: format,
            maxDate: datepickerMax || null,
            mode: datepickerMode || "single",
            minDate: datepickerMin || null,
            showMonths: parseInt(datepickerMonths) || 1,
            time_24hr: true // eslint-disable-line camelcase
        };

        if (format && options.enableTime) {
            options.dateFormat = format.dateFormat.concat(" ", format.hourFormat);
        }

        return flatpickr(datepicker, options);
    };

    const init = () => {
        const datepickers = document.querySelectorAll("[data-datepicker]");

        const _datepickers = _datepickers || [];

        if (datepickers.length) {
            datepickers.forEach(picker => _datepickers.push(_createDatepicker(picker)));
        }
    };

    return { init };
})();

export default datepicker;
