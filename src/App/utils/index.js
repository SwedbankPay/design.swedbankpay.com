import LoadingComponent from "./LoadingComponent/index";
import RenderRoutes from "./RenderRoutes/index";
import SelectPanel from "./SelectPanel/index";
import RenderPage from "./RenderPage/index";

const setTitle = title => {
    document.title = `${title} | Swedbank Pay DesignGuide`;
};

export {
    setTitle,
    LoadingComponent,
    RenderRoutes,
    SelectPanel,
    RenderPage
};
