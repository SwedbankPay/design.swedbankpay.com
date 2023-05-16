import formats from "./formats";

describe("scripts: datepicker - formats", () => {
	it("is defined", () => {
		expect(formats).toBeDefined();
		expect(formats).toBeInstanceOf(Object);
	});

	describe("all formats", () => {
		it("has dateFormat property of type string", () => {
			for (const format in formats) {
				expect(formats[format].dateFormat).toBeDefined();
				expect(typeof formats[format].dateFormat).toBe("string");
			}
		});

		it("has hourFormat property of type string", () => {
			for (const format in formats) {
				expect(formats[format].hourFormat).toBeDefined();
				expect(typeof formats[format].hourFormat).toBe("string");
			}
		});

		it("has locale property of right type and content", () => {
			for (const format in formats) {
				expect(formats[format].dateFormat).toBeDefined();
				expect(formats[format].hourFormat).toBeDefined();
				expect(formats[format].firstDayOfWeek).toBeDefined();
				expect(formats[format].rangeSeparator).toBeDefined();
				expect(formats[format].months).toBeDefined();
				expect(formats[format].weekdays).toBeDefined();
				expect(formats[format].ordinal).toBeDefined();
				expect(formats[format].months).toBeInstanceOf(Object);
				expect(formats[format].weekdays).toBeInstanceOf(Object);
				expect(formats[format].ordinal).toBeInstanceOf(Function);

				// Months
				expect(formats[format].months.shorthand).toBeDefined();
				expect(formats[format].months.longhand).toBeDefined();
				expect(formats[format].months.shorthand).toHaveLength(12);
				expect(formats[format].months.longhand).toHaveLength(12);

				// // Weekdays
				expect(formats[format].weekdays.shorthand).toBeDefined();
				expect(formats[format].weekdays.longhand).toBeDefined();
				expect(formats[format].weekdays.shorthand).toHaveLength(7);
				expect(formats[format].weekdays.longhand).toHaveLength(7);
			}
		});
	});

	describe("norwegian (nb)", () => {
		const testVariables = {
			months: {
				shorthand: [
					"jan",
					"feb",
					"mar",
					"apr",
					"mai",
					"jun",
					"jul",
					"aug",
					"sep",
					"okt",
					"nov",
					"des",
				],
				longhand: [
					"januar",
					"februar",
					"mars",
					"april",
					"mai",
					"juni",
					"juli",
					"august",
					"september",
					"oktober",
					"november",
					"desember",
				],
			},
			weekdays: {
				shorthand: ["søn", "man", "tir", "ons", "tor", "fre", "lør"],
				longhand: [
					"søndag",
					"mandag",
					"tirsdag",
					"onsdag",
					"torsdag",
					"fredag",
					"lørdag",
				],
			},
		};

		it("is defined", () => {
			expect(formats.nb).toBeDefined();
			expect(formats.nb).toBeInstanceOf(Object);
		});

		it("has dateFormat property of right type and value", () => {
			expect(formats.nb.dateFormat).toBeDefined();
			expect(typeof formats.nb.dateFormat).toBe("string");
			expect(formats.nb.dateFormat).toBe("d.m.Y");
		});

		it("has hourFormat property of right type and value", () => {
			expect(formats.nb.hourFormat).toBeDefined();
			expect(typeof formats.nb.hourFormat).toBe("string");
			expect(formats.nb.hourFormat).toBe("H:i");
		});

		it("has firstDayOfWeek of right type", () => {
			expect(formats.nb.firstDayOfWeek).toBeDefined();
			expect(typeof formats.nb.firstDayOfWeek).toBe("number");
		});

		it("has correct shorthand month values", () => {
			expect(
				testVariables.months.shorthand.every((month) =>
					formats.nb.months.shorthand.includes(month)
				)
			).toBeTruthy();
		});

		it("has correct longhand month values", () => {
			expect(
				testVariables.months.longhand.every((month) =>
					formats.nb.months.longhand.includes(month)
				)
			).toBeTruthy();
		});

		it("has correct shorthand weekdays values", () => {
			expect(
				testVariables.months.shorthand.every((weekdays) =>
					formats.nb.months.shorthand.includes(weekdays)
				)
			).toBeTruthy();
		});

		it("has correct longhand weekdays values", () => {
			expect(
				testVariables.months.longhand.every((weekdays) =>
					formats.nb.months.longhand.includes(weekdays)
				)
			).toBeTruthy();
		});

		it("ordinal returns the correct value", () => {
			expect(formats.nb.ordinal()).toBe(".");
		});
	});

	describe("swedish (sv)", () => {
		const testVariables = {
			months: {
				shorthand: [
					"jan",
					"feb",
					"mar",
					"apr",
					"maj",
					"jun",
					"jul",
					"aug",
					"sep",
					"okt",
					"nov",
					"dec",
				],
				longhand: [
					"januari",
					"februari",
					"mars",
					"april",
					"maj",
					"juni",
					"juli",
					"augusti",
					"september",
					"oktober",
					"november",
					"december",
				],
			},
			weekdays: {
				shorthand: ["sön", "mån", "tis", "ons", "tor", "fre", "lör"],
				longhand: [
					"söndag",
					"måndag",
					"tisdag",
					"onsdag",
					"torsdag",
					"fredag",
					"lördag",
				],
			},
		};

		it("is defined", () => {
			expect(formats.sv).toBeDefined();
			expect(formats.sv).toBeInstanceOf(Object);
		});

		it("has dateFormat property of right type and value", () => {
			expect(formats.sv.dateFormat).toBeDefined();
			expect(typeof formats.sv.dateFormat).toBe("string");
			expect(formats.sv.dateFormat).toBe("Y-m-d");
		});

		it("has hourFormat property of right type and value", () => {
			expect(formats.sv.hourFormat).toBeDefined();
			expect(typeof formats.sv.hourFormat).toBe("string");
			expect(formats.sv.hourFormat).toBe("H:i");
		});

		it("has firstDayOfWeek of right type", () => {
			expect(formats.sv.firstDayOfWeek).toBeDefined();
			expect(typeof formats.sv.firstDayOfWeek).toBe("number");
		});

		it("has correct shorthand month values", () => {
			expect(
				testVariables.months.shorthand.every((month) =>
					formats.sv.months.shorthand.includes(month)
				)
			).toBeTruthy();
		});

		it("has correct longhand month values", () => {
			expect(
				testVariables.months.longhand.every((month) =>
					formats.sv.months.longhand.includes(month)
				)
			).toBeTruthy();
		});

		it("has correct shorthand weekdays values", () => {
			expect(
				testVariables.months.shorthand.every((weekdays) =>
					formats.sv.months.shorthand.includes(weekdays)
				)
			).toBeTruthy();
		});

		it("has correct longhand weekdays values", () => {
			expect(
				testVariables.months.longhand.every((weekdays) =>
					formats.sv.months.longhand.includes(weekdays)
				)
			).toBeTruthy();
		});

		it("ordinal returns the correct value", () => {
			expect(formats.sv.ordinal()).toBe(".");
		});
	});

	describe("danish (da)", () => {
		const testVariables = {
			months: {
				shorthand: [
					"jan",
					"feb",
					"mar",
					"apr",
					"maj",
					"jun",
					"jul",
					"aug",
					"sep",
					"okt",
					"nov",
					"dec",
				],
				longhand: [
					"januar",
					"februar",
					"marts",
					"april",
					"maj",
					"juni",
					"juli",
					"august",
					"september",
					"oktober",
					"november",
					"december",
				],
			},
			weekdays: {
				shorthand: ["søn", "man", "tir", "ons", "tor", "fre", "lør"],
				longhand: [
					"søndag",
					"mandag",
					"tirsdag",
					"onsdag",
					"torsdag",
					"fredag",
					"lørdag",
				],
			},
		};

		it("is defined", () => {
			expect(formats.da).toBeDefined();
			expect(formats.da).toBeInstanceOf(Object);
		});

		it("has dateFormat property of right type and value", () => {
			expect(formats.da.dateFormat).toBeDefined();
			expect(typeof formats.da.dateFormat).toBe("string");
			expect(formats.da.dateFormat).toBe("d.m.Y");
		});

		it("has hourFormat property of right type and value", () => {
			expect(formats.da.hourFormat).toBeDefined();
			expect(typeof formats.da.hourFormat).toBe("string");
			expect(formats.da.hourFormat).toBe("H:i");
		});

		it("has firstDayOfWeek of right type", () => {
			expect(formats.da.firstDayOfWeek).toBeDefined();
			expect(typeof formats.da.firstDayOfWeek).toBe("number");
		});

		it("has correct shorthand month values", () => {
			expect(
				testVariables.months.shorthand.every((month) =>
					formats.da.months.shorthand.includes(month)
				)
			).toBeTruthy();
		});

		it("has correct longhand month values", () => {
			expect(
				testVariables.months.longhand.every((month) =>
					formats.da.months.longhand.includes(month)
				)
			).toBeTruthy();
		});

		it("has correct shorthand weekdays values", () => {
			expect(
				testVariables.months.shorthand.every((weekdays) =>
					formats.da.months.shorthand.includes(weekdays)
				)
			).toBeTruthy();
		});

		it("has correct longhand weekdays values", () => {
			expect(
				testVariables.months.longhand.every((weekdays) =>
					formats.da.months.longhand.includes(weekdays)
				)
			).toBeTruthy();
		});

		it("ordinal returns the correct value", () => {
			expect(formats.da.ordinal()).toBe(".");
		});
	});

	describe("finnish (fi)", () => {
		const testVariables = {
			weekdays: {
				shorthand: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
				longhand: [
					"Sunnuntai",
					"Maanantai",
					"Tiistai",
					"Keskiviikko",
					"Torstai",
					"Perjantai",
					"Lauantai",
				],
			},
			months: {
				shorthand: [
					"Tammi",
					"Helmi",
					"Maalis",
					"Huhti",
					"Touko",
					"Kesä",
					"Heinä",
					"Elo",
					"Syys",
					"Loka",
					"Marras",
					"Joulu",
				],
				longhand: [
					"Tammikuu",
					"Helmikuu",
					"Maaliskuu",
					"Huhtikuu",
					"Toukokuu",
					"Kesäkuu",
					"Heinäkuu",
					"Elokuu",
					"Syyskuu",
					"Lokakuu",
					"Marraskuu",
					"Joulukuu",
				],
			},
		};

		it("is defined", () => {
			expect(formats.fi).toBeDefined();
			expect(formats.fi).toBeInstanceOf(Object);
		});

		it("has dateFormat property of right type and value", () => {
			expect(formats.fi.dateFormat).toBeDefined();
			expect(typeof formats.fi.dateFormat).toBe("string");
			expect(formats.fi.dateFormat).toBe("d.m.Y");
		});

		it("has hourFormat property of right type and value", () => {
			expect(formats.fi.hourFormat).toBeDefined();
			expect(typeof formats.fi.hourFormat).toBe("string");
			expect(formats.fi.hourFormat).toBe("H:i");
		});

		it("has firstDayOfWeek of right type", () => {
			expect(formats.fi.firstDayOfWeek).toBeDefined();
			expect(typeof formats.fi.firstDayOfWeek).toBe("number");
		});

		it("has correct shorthand month values", () => {
			expect(
				testVariables.months.shorthand.every((month) =>
					formats.fi.months.shorthand.includes(month)
				)
			).toBeTruthy();
		});

		it("has correct longhand month values", () => {
			expect(
				testVariables.months.longhand.every((month) =>
					formats.fi.months.longhand.includes(month)
				)
			).toBeTruthy();
		});

		it("has correct shorthand weekdays values", () => {
			expect(
				testVariables.months.shorthand.every((weekdays) =>
					formats.fi.months.shorthand.includes(weekdays)
				)
			).toBeTruthy();
		});

		it("has correct longhand weekdays values", () => {
			expect(
				testVariables.months.longhand.every((weekdays) =>
					formats.fi.months.longhand.includes(weekdays)
				)
			).toBeTruthy();
		});

		it("ordinal returns the correct value", () => {
			expect(formats.fi.ordinal()).toBe(".");
		});
	});

	describe("english (en)", () => {
		const testVariables = {
			weekdays: {
				shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
				longhand: [
					"Sunday",
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday",
				],
			},
			months: {
				shorthand: [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
					"Oct",
					"Nov",
					"Dec",
				],
				longhand: [
					"January",
					"February",
					"March",
					"April",
					"May",
					"June",
					"July",
					"August",
					"September",
					"October",
					"November",
					"December",
				],
			},
		};

		it("is defined", () => {
			expect(formats.en).toBeDefined();
			expect(formats.en).toBeInstanceOf(Object);
		});

		it("has dateFormat property of right type and value", () => {
			expect(formats.en.dateFormat).toBeDefined();
			expect(typeof formats.en.dateFormat).toBe("string");
			expect(formats.en.dateFormat).toBe("d/m/Y");
		});

		it("has hourFormat property of right type and value", () => {
			expect(formats.en.hourFormat).toBeDefined();
			expect(typeof formats.en.hourFormat).toBe("string");
			expect(formats.en.hourFormat).toBe("H:i");
		});

		it("has firstDayOfWeek of right type", () => {
			expect(formats.en.firstDayOfWeek).toBeDefined();
			expect(typeof formats.en.firstDayOfWeek).toBe("number");
		});

		it("has correct shorthand month values", () => {
			expect(
				testVariables.months.shorthand.every((month) =>
					formats.en.months.shorthand.includes(month)
				)
			).toBeTruthy();
		});

		it("has correct longhand month values", () => {
			expect(
				testVariables.months.longhand.every((month) =>
					formats.en.months.longhand.includes(month)
				)
			).toBeTruthy();
		});

		it("has correct shorthand weekdays values", () => {
			expect(
				testVariables.months.shorthand.every((weekdays) =>
					formats.en.months.shorthand.includes(weekdays)
				)
			).toBeTruthy();
		});

		it("has correct longhand weekdays values", () => {
			expect(
				testVariables.months.longhand.every((weekdays) =>
					formats.en.months.longhand.includes(weekdays)
				)
			).toBeTruthy();
		});

		it("ordinal returns the correct value", () => {
			expect(formats.en.ordinal(1)).toBe("st");
			expect(formats.en.ordinal(2)).toBe("nd");
			expect(formats.en.ordinal(3)).toBe("rd");
			expect(formats.en.ordinal(4)).toBe("th");
			expect(formats.en.ordinal(21)).toBe("st");
			expect(formats.en.ordinal(22)).toBe("nd");
			expect(formats.en.ordinal(23)).toBe("rd");
			expect(formats.en.ordinal(24)).toBe("th");
		});
	});

	describe("robotic (iso8601)", () => {
		const testVariables = {
			weekdays: {
				shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
				longhand: [
					"Sunday",
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday",
				],
			},
			months: {
				shorthand: [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
					"Oct",
					"Nov",
					"Dec",
				],
				longhand: [
					"January",
					"February",
					"March",
					"April",
					"May",
					"June",
					"July",
					"August",
					"September",
					"October",
					"November",
					"December",
				],
			},
		};

		it("is defined", () => {
			expect(formats.iso8601).toBeDefined();
			expect(formats.iso8601).toBeInstanceOf(Object);
		});

		it("has dateFormat property of right type and value", () => {
			expect(formats.iso8601.dateFormat).toBeDefined();
			expect(typeof formats.iso8601.dateFormat).toBe("string");
			expect(formats.iso8601.dateFormat).toBe("Y-m-d");
		});

		it("has hourFormat property of right type and value", () => {
			expect(formats.iso8601.hourFormat).toBeDefined();
			expect(typeof formats.iso8601.hourFormat).toBe("string");
			expect(formats.iso8601.hourFormat).toBe("H:i");
		});

		it("has firstDayOfWeek of right type", () => {
			expect(formats.iso8601.firstDayOfWeek).toBeDefined();
			expect(typeof formats.iso8601.firstDayOfWeek).toBe("number");
		});

		it("has correct shorthand month values", () => {
			expect(
				testVariables.months.shorthand.every((month) =>
					formats.iso8601.months.shorthand.includes(month)
				)
			).toBeTruthy();
		});

		it("has correct longhand month values", () => {
			expect(
				testVariables.months.longhand.every((month) =>
					formats.iso8601.months.longhand.includes(month)
				)
			).toBeTruthy();
		});

		it("has correct shorthand weekdays values", () => {
			expect(
				testVariables.months.shorthand.every((weekdays) =>
					formats.iso8601.months.shorthand.includes(weekdays)
				)
			).toBeTruthy();
		});

		it("has correct longhand weekdays values", () => {
			expect(
				testVariables.months.longhand.every((weekdays) =>
					formats.iso8601.months.longhand.includes(weekdays)
				)
			).toBeTruthy();
		});

		it("ordinal returns the correct value", () => {
			expect(formats.iso8601.ordinal(1)).toBe("st");
			expect(formats.iso8601.ordinal(2)).toBe("nd");
			expect(formats.iso8601.ordinal(3)).toBe("rd");
			expect(formats.iso8601.ordinal(4)).toBe("th");
			expect(formats.iso8601.ordinal(21)).toBe("st");
			expect(formats.iso8601.ordinal(22)).toBe("nd");
			expect(formats.iso8601.ordinal(23)).toBe("rd");
			expect(formats.iso8601.ordinal(24)).toBe("th");
		});
	});
});
