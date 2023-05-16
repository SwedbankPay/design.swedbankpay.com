import LoadingComponent from "./LoadingComponent/index";
import renderRoutes from "./RenderRoutes/index";
import SelectPanel from "./SelectPanel/index";
import RenderPage from "./RenderPage/index";
import RemoveVscroll from "./RemoveVscroll/index";
import ToggleLightbox from "./ToggleLightbox/index";

const brandTitle = process.env.brandTitle;

const setTitle = (title) => {
	document.title = `${title} | ${brandTitle} Design Guide`;
};

const removeTrailingSlash = (str) => {
	if (str.length <= 1) {
		return str;
	} else if (str.endsWith("/")) {
		return str.slice(0, -1);
	} else {
		return str;
	}
};

export {
	setTitle,
	LoadingComponent,
	renderRoutes,
	SelectPanel,
	RenderPage,
	RemoveVscroll,
	ToggleLightbox,
	removeTrailingSlash,
};
