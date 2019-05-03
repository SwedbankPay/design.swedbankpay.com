import formats from "./formats";
import flatpickr from "flatpickr";

import { hashId } from "../utils";

const SELECTORS = {
    DATEPICKER: "[data-datepicker]"
};

const _datepickers = _datepickers || [];

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

    return flatpickr(datepicker, options);
};

const init = id => {
    const datepickerId = hashId(id);
    const datepickers = datepickerId ? document.querySelectorAll(datepickerId) : document.querySelectorAll(SELECTORS.DATEPICKER);

    if (datepickers.length) {
        const datepickerObjects = [...datepickers].map(picker => {
            const datepickerObject = _createDatepicker(picker);

            _datepickers.push(datepickerObject);

            return datepickerObject;
        });

        return datepickerObjects.length === 1 ? datepickerObjects[0] : datepickerObjects;
    }

    return null;
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

    return true;
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

    return true;
};

export default {
    init,
    open,
    close
};
