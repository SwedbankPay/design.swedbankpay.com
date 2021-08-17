import formats from "./formats";
import flatpickr from "flatpickr";

const SELECTORS = {
    DATEPICKER: "[data-datepicker]"
};

let _datepickers = [];

// 080989◢◤200418
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

    const datepickerObj = flatpickr(datepicker, options);

    _datepickers.push(datepickerObj);

    return datepickerObj;
};

const _destroyDatepickers = () => {
    _datepickers = _datepickers.filter(datepicker => datepicker.destroy());
};

const init = id => {
    if (id) {
        const datepicker = document.getElementById(id);

        if (!datepicker) {
            console.warn(`No datepicker with id ${id} found`);

            return null;
        }

        _datepickers.forEach((d, i) => (d.element.id === id
            ? _datepickers.splice(i, 1)[0].destroy()
            : null)
        );

        return _createDatepicker(datepicker);
    } else {
        const datepickers = document.querySelectorAll(SELECTORS.DATEPICKER);

        if (!datepickers.length) {
            console.warn("No datepickers found");

            return null;
        }

        _destroyDatepickers();

        return [...datepickers].map(datepicker => _createDatepicker(datepicker));
    }
};

const open = id => {
    let datepicker = null;

    _datepickers.forEach(d => d.element.id === id ? datepicker = d : null);

    try {
        datepicker.open();
    } catch (e) {
        console.error(`datepicker.open: No datepicker with id ${id} found.`);

        return false;
    }

    return datepicker;
};

const close = id => {
    let datepicker = null;

    _datepickers.forEach(d => {
        d.element.id === id ? datepicker = d : null;
    });

    try {
        datepicker.close();
    } catch (e) {
        console.error(`datepicker.close: No datepicker with id ${id} found.`);

        return false;
    }

    return datepicker;
};

export default {
    init,
    open,
    close
};
