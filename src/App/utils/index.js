import LoadingComponent from "./LoadingComponent/index";
import RenderRoutes from "./RenderRoutes/index";
import SelectPanel from "./SelectPanel/index";
import RenderPage from "./RenderPage/index";
import RemoveVscroll from "./RemoveVscroll/index";
import ToggleLightbox from "./ToggleLightbox/index";

const brandTitle = process.env.brandTitle;

const setTitle = title => {
    document.title = `${title} | ${brandTitle} Design Guide`;
};

export {
    setTitle,
    LoadingComponent,
    RenderRoutes,
    SelectPanel,
    RenderPage,
    RemoveVscroll,
    ToggleLightbox
};
