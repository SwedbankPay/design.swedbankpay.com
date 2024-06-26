import accordion from "./accordion";
import actionList from "./action-list";
import alert from "./alert";
import datepicker from "./datepicker";
import dropdown from "./dropdown";
import dialog from "./dialog";
import expandable from "./expandable";
import nav from "./nav";
import paginate from "./pagination";
import rangeslider from "./rangeslider";
import sheet from "./sheet";
import sidebar from "./sidebar";
import script from "./script";
import tabs from "./tabs";
import toast from "./toast";
import tooltips from "./tooltips";
import topbar from "./topbar";
import utils from "./utils";
import validation from "./validation";

window.addEventListener("popstate", () => {
	if (document.body.className.includes("has-vscroll")) {
		document.body.classList.remove("has-vscroll");
	}
});

const dg = {
	accordion,
	actionList,
	alert,
	dropdown,
	datepicker,
	dialog,
	expandable,
	nav,
	paginate,
	rangeslider,
	sheet,
	sidebar,
	script,
	tabs,
	toast,
	tooltips,
	topbar,
	utils,
	validation,
};

const CDNSetup = () => {
	const currentScript = document.querySelector("script[src$='dg.js']");

	if (currentScript) {
		if (currentScript.getAttribute("global")) {
			window.dg = window.dg ? Object.assign(dg, window.dg) : dg;
		}

		if (currentScript.getAttribute("autoload")) {
			dg.script.initAll();
		}
	}
};

document.readyState !== "loading"
	? CDNSetup()
	: document.addEventListener("DOMContentLoaded", CDNSetup());

export default dg;

export {
	accordion,
	actionList,
	alert,
	dropdown,
	datepicker,
	dialog,
	expandable,
	nav,
	paginate,
	rangeslider,
	sheet,
	sidebar,
	script,
	tabs,
	toast,
	tooltips,
	topbar,
	utils,
	validation,
};
