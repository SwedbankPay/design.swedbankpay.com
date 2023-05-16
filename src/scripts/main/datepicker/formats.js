// Languages codes are specified in ISO 639-1
// https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

export default {
	nb: {
		dateFormat: "d.m.Y",
		hourFormat: "H:i",
		fulldate: "j. F Y",
		firstDayOfWeek: 1,
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
		rangeSeparator: " til ",
		scrollTitle: "Scroll for å endre",
		toggleTitle: "Klikk for å veksle",
		weekAbbreviation: "Uke",
		ordinal: () => ".",
	},
	sv: {
		dateFormat: "Y-m-d",
		hourFormat: "H:i",
		fulldate: "j. F Y",
		firstDayOfWeek: 1,
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
		rangeSeparator: " till ",
		weekAbbreviation: "v",
		ordinal: () => ".",
	},
	da: {
		dateFormat: "d.m.Y",
		hourFormat: "H:i",
		fulldate: "j. F Y",
		firstDayOfWeek: 1,
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
		rangeSeparator: " til ",
		weekAbbreviation: "uge",
		ordinal: () => ".",
	},
	fi: {
		dateFormat: "d.m.Y",
		hourFormat: "H:i",
		fulldate: "j. F Y",
		firstDayOfWeek: 1,
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
		rangeSeparator: " että ",
		ordinal: () => ".",
	},
	en: {
		dateFormat: "d/m/Y",
		hourFormat: "H:i",
		fulldate: "F J, Y",
		daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
		firstDayOfWeek: 0,
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
		ordinal(nth) {
			if (nth > 3 && nth < 21) {
				return "th";
			}

			switch (nth % 10) {
				case 1:
					return "st";
				case 2:
					return "nd";
				case 3:
					return "rd";
				default:
					return "th";
			}
		},
		rangeSeparator: " to ",
		weekAbbreviation: "Wk",
		scrollTitle: "Scroll to increment",
		toggleTitle: "Click to toggle",
		yearAriaLabel: "Year",
	},
	iso8601: {
		dateFormat: "Y-m-d",
		hourFormat: "H:i",
		fulldate: "F J, Y",
		daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
		firstDayOfWeek: 0,
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
		ordinal(nth) {
			if (nth > 3 && nth < 21) {
				return "th";
			}

			switch (nth % 10) {
				case 1:
					return "st";
				case 2:
					return "nd";
				case 3:
					return "rd";
				default:
					return "th";
			}
		},
		rangeSeparator: " to ",
		weekAbbreviation: "Wk",
		scrollTitle: "Scroll to increment",
		toggleTitle: "Click to toggle",
		yearAriaLabel: "Year",
	},
};
