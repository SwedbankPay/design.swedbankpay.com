import formats from "./formats";

describe("px-script: datepicker - formats", () => {
    it("is defined", () => {
        expect(formats).toBeDefined();
        expect(formats).toBeInstanceOf(Object);
    });

    // describe("all formats", () => {
    //     it("has dateFormat property of type string", () => {
    //         for (const format in formats) {
    //             expect(formats[format].dateFormat).toBeDefined();
    //             expect(typeof formats[format].dateFormat).toBe("string");
    //         }
    //     });

    //     it("has hourFormat property of type string", () => {
    //         for (const format in formats) {
    //             expect(formats[format].hourFormat).toBeDefined();
    //             expect(typeof formats[format].hourFormat).toBe("string");
    //         }
    //     });

    //     it("has locale property of right type and content", () => {
    //         for (const format in formats) {
    //             expect(formats[format].locale).toBeDefined();
    //             expect(formats[format].locale).toBeInstanceOf(Object);

    //             // Months
    //             expect(formats[format].locale.months).toBeDefined();
    //             expect(formats[format].locale.months).toHaveLength(12);
    //             expect(formats[format].locale.monthsShort).toBeDefined();
    //             expect(formats[format].locale.monthsShort).toHaveLength(12);

    //             // Weekdays
    //             expect(formats[format].locale.weekdays).toBeDefined();
    //             expect(formats[format].locale.weekdays).toHaveLength(7);
    //             expect(formats[format].locale.weekdaysShort).toBeDefined();
    //             expect(formats[format].locale.weekdaysShort).toHaveLength(7);
    //             expect(formats[format].locale.weekdaysMin).toBeDefined();
    //             expect(formats[format].locale.weekdaysMin).toHaveLength(7);
    //         }
    //     });
    // });

    // describe("norwegian (nb)", () => {
    //     it("is defined", () => {
    //         expect(formats.nb).toBeDefined();
    //         expect(formats.nb).toBeInstanceOf(Object);
    //     });

    //     it("has dateFormat property of right type and value", () => {
    //         expect(formats.nb.dateFormat).toBeDefined();
    //         expect(typeof formats.nb.dateFormat).toBe("string");
    //         expect(formats.nb.dateFormat).toBe("DD.MM.YYYY");
    //     });

    //     it("has hourFormat property of right type and value", () => {
    //         expect(formats.nb.hourFormat).toBeDefined();
    //         expect(typeof formats.nb.hourFormat).toBe("string");
    //         expect(formats.nb.hourFormat).toBe("HH:mm");
    //     });

    //     it("has locale property of right type and content", () => {
    //         expect(formats.nb.locale).toBeDefined();
    //         expect(formats.nb.locale).toBeInstanceOf(Object);

    //         // Months
    //         expect(formats.nb.locale.months).toBeDefined();
    //         expect(formats.nb.locale.months).toHaveLength(12);
    //         expect(formats.nb.locale.monthsShort).toBeDefined();
    //         expect(formats.nb.locale.monthsShort).toHaveLength(12);

    //         // Weekdays
    //         expect(formats.nb.locale.weekdays).toBeDefined();
    //         expect(formats.nb.locale.weekdays).toHaveLength(7);
    //         expect(formats.nb.locale.weekdaysShort).toBeDefined();
    //         expect(formats.nb.locale.weekdaysShort).toHaveLength(7);
    //         expect(formats.nb.locale.weekdaysMin).toBeDefined();
    //         expect(formats.nb.locale.weekdaysMin).toHaveLength(7);
    //     });
    // });

    // describe("swedish (sv)", () => {
    //     it("is defined", () => {
    //         expect(formats.sv).toBeDefined();
    //         expect(formats.sv).toBeInstanceOf(Object);
    //     });

    //     it("has dateFormat property of right type and value", () => {
    //         expect(formats.sv.dateFormat).toBeDefined();
    //         expect(typeof formats.sv.dateFormat).toBe("string");
    //         expect(formats.sv.dateFormat).toBe("YYYY-MM-DD");
    //     });

    //     it("has hourFormat property of right type and value", () => {
    //         expect(formats.sv.hourFormat).toBeDefined();
    //         expect(typeof formats.sv.hourFormat).toBe("string");
    //         expect(formats.sv.hourFormat).toBe("HH:mm");
    //     });

    //     it("has locale property of right type and content", () => {
    //         expect(formats.sv.locale).toBeDefined();
    //         expect(formats.sv.locale).toBeInstanceOf(Object);

    //         // Months
    //         expect(formats.sv.locale.months).toBeDefined();
    //         expect(formats.sv.locale.months).toHaveLength(12);
    //         expect(formats.sv.locale.monthsShort).toBeDefined();
    //         expect(formats.sv.locale.monthsShort).toHaveLength(12);

    //         // Weekdays
    //         expect(formats.sv.locale.weekdays).toBeDefined();
    //         expect(formats.sv.locale.weekdays).toHaveLength(7);
    //         expect(formats.sv.locale.weekdaysShort).toBeDefined();
    //         expect(formats.sv.locale.weekdaysShort).toHaveLength(7);
    //         expect(formats.sv.locale.weekdaysMin).toBeDefined();
    //         expect(formats.sv.locale.weekdaysMin).toHaveLength(7);
    //     });
    // });

    // describe("danish (da)", () => {
    //     it("is defined", () => {
    //         expect(formats.da).toBeDefined();
    //         expect(formats.da).toBeInstanceOf(Object);
    //     });

    //     it("has dateFormat property of right type and value", () => {
    //         expect(formats.da.dateFormat).toBeDefined();
    //         expect(typeof formats.da.dateFormat).toBe("string");
    //         expect(formats.da.dateFormat).toBe("DD.MM.YYYY");
    //     });

    //     it("has hourFormat property of right type and value", () => {
    //         expect(formats.da.hourFormat).toBeDefined();
    //         expect(typeof formats.da.hourFormat).toBe("string");
    //         expect(formats.da.hourFormat).toBe("HH:mm");
    //     });

    //     it("has locale property of right type and content", () => {
    //         expect(formats.da.locale).toBeDefined();
    //         expect(formats.da.locale).toBeInstanceOf(Object);

    //         // Months
    //         expect(formats.da.locale.months).toBeDefined();
    //         expect(formats.da.locale.months).toHaveLength(12);
    //         expect(formats.da.locale.monthsShort).toBeDefined();
    //         expect(formats.da.locale.monthsShort).toHaveLength(12);

    //         // Weekdays
    //         expect(formats.da.locale.weekdays).toBeDefined();
    //         expect(formats.da.locale.weekdays).toHaveLength(7);
    //         expect(formats.da.locale.weekdaysShort).toBeDefined();
    //         expect(formats.da.locale.weekdaysShort).toHaveLength(7);
    //         expect(formats.da.locale.weekdaysMin).toBeDefined();
    //         expect(formats.da.locale.weekdaysMin).toHaveLength(7);
    //     });
    // });

    // describe("finnish (fi)", () => {
    //     it("is defined", () => {
    //         expect(formats.fi).toBeDefined();
    //         expect(formats.fi).toBeInstanceOf(Object);
    //     });

    //     it("has dateFormat property of right type and value", () => {
    //         expect(formats.fi.dateFormat).toBeDefined();
    //         expect(typeof formats.fi.dateFormat).toBe("string");
    //         expect(formats.fi.dateFormat).toBe("DD.MM.YYYY");
    //     });

    //     it("has hourFormat property of right type and value", () => {
    //         expect(formats.fi.hourFormat).toBeDefined();
    //         expect(typeof formats.fi.hourFormat).toBe("string");
    //         expect(formats.fi.hourFormat).toBe("HH:mm");
    //     });

    //     it("has locale property of right type and content", () => {
    //         expect(formats.fi.locale).toBeDefined();
    //         expect(formats.fi.locale).toBeInstanceOf(Object);

    //         // Months
    //         expect(formats.fi.locale.months).toBeDefined();
    //         expect(formats.fi.locale.months).toHaveLength(12);
    //         expect(formats.fi.locale.monthsShort).toBeDefined();
    //         expect(formats.fi.locale.monthsShort).toHaveLength(12);

    //         // Weekdays
    //         expect(formats.fi.locale.weekdays).toBeDefined();
    //         expect(formats.fi.locale.weekdays).toHaveLength(7);
    //         expect(formats.fi.locale.weekdaysShort).toBeDefined();
    //         expect(formats.fi.locale.weekdaysShort).toHaveLength(7);
    //         expect(formats.fi.locale.weekdaysMin).toBeDefined();
    //         expect(formats.fi.locale.weekdaysMin).toHaveLength(7);
    //     });
    // });

    // describe("english (en)", () => {
    //     it("is defined", () => {
    //         expect(formats.en).toBeDefined();
    //         expect(formats.en).toBeInstanceOf(Object);
    //     });

    //     it("has dateFormat property of right type and value", () => {
    //         expect(formats.en.dateFormat).toBeDefined();
    //         expect(typeof formats.en.dateFormat).toBe("string");
    //         expect(formats.en.dateFormat).toBe("DD/MM/YYYY");
    //     });

    //     it("has hourFormat property of right type and value", () => {
    //         expect(formats.en.hourFormat).toBeDefined();
    //         expect(typeof formats.en.hourFormat).toBe("string");
    //         expect(formats.en.hourFormat).toBe("HH:mm");
    //     });

    //     it("has locale property of right type and content", () => {
    //         expect(formats.en.locale).toBeDefined();
    //         expect(formats.en.locale).toBeInstanceOf(Object);

    //         // Months
    //         expect(formats.en.locale.months).toBeDefined();
    //         expect(formats.en.locale.months).toHaveLength(12);
    //         expect(formats.en.locale.monthsShort).toBeDefined();
    //         expect(formats.en.locale.monthsShort).toHaveLength(12);

    //         // Weekdays
    //         expect(formats.en.locale.weekdays).toBeDefined();
    //         expect(formats.en.locale.weekdays).toHaveLength(7);
    //         expect(formats.en.locale.weekdaysShort).toBeDefined();
    //         expect(formats.en.locale.weekdaysShort).toHaveLength(7);
    //         expect(formats.en.locale.weekdaysMin).toBeDefined();
    //         expect(formats.en.locale.weekdaysMin).toHaveLength(7);
    //     });
    // });

    // describe("robotic (iso8601)", () => {
    //     it("is defined", () => {
    //         expect(formats.iso8601).toBeDefined();
    //         expect(formats.iso8601).toBeInstanceOf(Object);
    //     });

    //     it("has dateFormat property of right type and value", () => {
    //         expect(formats.iso8601.dateFormat).toBeDefined();
    //         expect(typeof formats.iso8601.dateFormat).toBe("string");
    //         expect(formats.iso8601.dateFormat).toBe("YYYY-MM-DD");
    //     });

    //     it("has hourFormat property of right type and value", () => {
    //         expect(formats.iso8601.hourFormat).toBeDefined();
    //         expect(typeof formats.iso8601.hourFormat).toBe("string");
    //         expect(formats.iso8601.hourFormat).toBe("HH:mm");
    //     });

    //     it("has locale property of right type and content", () => {
    //         expect(formats.iso8601.locale).toBeDefined();
    //         expect(formats.iso8601.locale).toBeInstanceOf(Object);

    //         // Months
    //         expect(formats.iso8601.locale.months).toBeDefined();
    //         expect(formats.iso8601.locale.months).toHaveLength(12);
    //         expect(formats.iso8601.locale.monthsShort).toBeDefined();
    //         expect(formats.iso8601.locale.monthsShort).toHaveLength(12);

    //         // Weekdays
    //         expect(formats.iso8601.locale.weekdays).toBeDefined();
    //         expect(formats.iso8601.locale.weekdays).toHaveLength(7);
    //         expect(formats.iso8601.locale.weekdaysShort).toBeDefined();
    //         expect(formats.iso8601.locale.weekdaysShort).toHaveLength(7);
    //         expect(formats.iso8601.locale.weekdaysMin).toBeDefined();
    //         expect(formats.iso8601.locale.weekdaysMin).toHaveLength(7);
    //     });
    // });
});
