import rome from "rome";

// 080989◢◤200418
const datepicker = (() => {
    const _createDatepicker = datepicker => {
        const { datepickerFormat, datepickerTime, datepickerMin, datepickerMax } = datepicker.dataset;

        const options = {
            weekStart: 1,
            inputFormat: datepickerFormat || "DD.MM.YYYY",
            time: !!datepickerTime || false,
            min: datepickerMin || null,
            max: datepickerMax || null
        };

        rome(datepicker, options);

        datepicker.addEventListener("click", () => {
            console.log(datepicker.value);
        });
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

const OPTIONS = {
    weekStart: 1,
    inputFormat: "DD.MM.YYYY",
    time: false,
    min: "01.01.2001",
    max: "02.01.2001"
};
