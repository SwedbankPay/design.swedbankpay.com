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
            datepickerAltinput,
            datepickerMode,
            datepickerAllowinput
        } = datepicker.dataset;

        const format = (datepickerFormat && !!formats[datepickerFormat]) ? formats[datepickerFormat] : formats.iso8601;
        const options = {
            allowInput: !!datepickerAllowinput,
            altInput: !!datepickerAltinput,
            altFormat: datepickerAltinput ? datepickerAltinput : "",
            defaultDate: datepickerValue || null,
            dateFormat: format.dateFormat,
            enableTime: !!datepickerTime || "",
            locale: format,
            maxDate: datepickerMax || null,
            mode: datepickerMode || "single",
            minDate: datepickerMin || null,
            showMonths: datepickerMonths || 1,
            time_24hr: true // eslint-disable-line camelcase
        };

        if (format && options.enableTime) {
            options.dateFormat = format.dateFormat.concat(" ", format.hourFormat);
        }

        flatpickr(datepicker, options);
    };

    const init = () => {
        const datepickers = document.querySelectorAll("[data-datepicker]");

        if (datepickers) {
            datepickers.forEach(picker => {
                _createDatepicker(picker);
            });
        }
    };

    return { init };
})();

export default datepicker;
