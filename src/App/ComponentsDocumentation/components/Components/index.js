import React from "react";
import { Link } from "react-router-dom";

import { DocContainer } from "@docutils";

const MenuOverview = () => (
    <section className="component-overview hide-arrow-icon">
        <Link to="/components/accordion" className="cards cards-primary cards-wide">
            <div className="cards-content flex-row align-items-center m-0 ">
                <i className="material-icons material-icons-outlined mr-3">calendar_view_day</i>
                <span className="h3 m-0">Accordion</span>
            </div>
            <i className="material-icons material-icons-outlined">arrow_forward</i>
        </Link>
        <Link to="/components/action-list" className="cards cards-primary cards-wide">
            <div className="cards-content flex-row align-items-center m-0 ">
                <i className="material-icons mr-3">list</i>
                <span className="h3 m-0">Action List</span>
            </div>
            <i className="material-icons material-icons-outlined">arrow_forward</i>
        </Link>
        <Link to="/components/alerts" className="cards cards-primary cards-wide">
            <div className="cards-content flex-row align-items-center m-0 ">
                <i className="material-icons material-icons-outlined mr-3">error</i>
                <span className="h3 m-0">Alerts</span>
            </div>
            <i className="material-icons material-icons-outlined">arrow_forward</i>
        </Link>
        <Link to="/components/badge" className="cards cards-primary cards-wide">
            <div className="cards-content flex-row align-items-center m-0 ">
                <i className="material-icons material-icons-outlined mr-3">more</i>
                <span className="h3 m-0">Badges</span>
            </div>
            <i className="material-icons material-icons-outlined">arrow_forward</i>
        </Link>
        <Link to="/components/breadcrumb" className="cards cards-primary cards-wide">
            <div className="cards-content flex-row align-items-center m-0 ">
                <i className="material-icons material-icons-outlined mr-3">last_page</i>
                <span className="h3 m-0">BreadCrumb</span>
            </div>
            <i className="material-icons material-icons-outlined">arrow_forward</i>
        </Link>
        <Link to="/components/buttons" className="cards cards-primary cards-wide">
            <div className="cards-content flex-row align-items-center m-0 ">
                <i className="material-icons material-icons-outlined mr-3">touch_app</i>
                <span className="h3 m-0">Buttons</span>
            </div>
            <i className="material-icons material-icons-outlined">arrow_forward</i>
        </Link>
        <Link to="/components/cards" className="cards cards-primary cards-wide">
            <div className="cards-content flex-row align-items-center m-0 ">
                <i className="material-icons material-icons-outlined mr-3">view_agenda</i>
                <span className="h3 m-0">Cards</span>
            </div>
            <i className="material-icons material-icons-outlined">arrow_forward</i>
        </Link>
        <Link to="/components/charts" className="cards cards-primary cards-wide">
            <div className="cards-content flex-row align-items-center m-0 ">
                <i className="material-icons material-icons-outlined mr-3">bar_chart</i>
                <span className="h3 m-0">Charts</span>
            </div>
            <i className="material-icons material-icons-outlined">arrow_forward</i>
        </Link>
        <Link to="/components/code-tags" className="cards cards-primary cards-wide">
            <div className="cards-content flex-row align-items-center m-0 ">
                <i className="material-icons material-icons-outlined mr-3">code</i>
                <span className="h3 m-0">Code Tags</span>
            </div>
            <i className="material-icons material-icons-outlined">arrow_forward</i>
        </Link>
        <Link to="/components/datepickers" className="cards cards-primary cards-wide">
            <div className="cards-content flex-row align-items-center m-0 ">
                <i className="material-icons material-icons-outlined mr-3">event</i>
                <span className="h3 m-0">Datepicker</span>
            </div>
            <i className="material-icons material-icons-outlined">arrow_forward</i>
        </Link>
        <Link to="/components/dialog" className="cards cards-primary cards-wide">
            <div className="cards-content flex-row align-items-center m-0 ">
                <i className="material-icons material-icons-outlined mr-3">picture_in_picture</i>
                <span className="h3 m-0">Dialog</span>
            </div>
            <i className="material-icons material-icons-outlined">arrow_forward</i>
        </Link>
        <Link to="/components/footer" className="cards cards-primary cards-wide">
            <div className="cards-content flex-row align-items-center m-0 ">
                <i className="material-icons material-icons-outlined mr-3">call_to_action</i>
                <span className="h3 m-0">Footer</span>
            </div>
            <i className="material-icons material-icons-outlined">arrow_forward</i>
        </Link>
        <Link to="/components/lists" className="cards cards-primary cards-wide">
            <div className="cards-content flex-row align-items-center m-0 ">
                <i className="material-icons material-icons-outlined mr-3">sort</i>
                <span className="h3 m-0">List</span>
            </div>
            <i className="material-icons material-icons-outlined">arrow_forward</i>
        </Link>
        <Link to="/components/loaders" className="cards cards-primary cards-wide">
            <div className="cards-content flex-row align-items-center m-0 ">
                <i className="material-icons material-icons-outlined mr-3">loop</i>
                <span className="h3 m-0">Loader</span>
            </div>
            <i className="material-icons material-icons-outlined">arrow_forward</i>
        </Link>
        <Link to="/components/links" className="cards cards-primary cards-wide">
            <div className="cards-content flex-row align-items-center m-0 ">
                <i className="material-icons material-icons-outlined mr-3">link</i>
                <span className="h3 m-0">Links</span>
            </div>
            <i className="material-icons material-icons-outlined">arrow_forward</i>
        </Link>
        <Link to="/components/nav" className="cards cards-primary cards-wide">
            <div className="cards-content flex-row align-items-center m-0 ">
                <i className="material-icons material-icons-outlined mr-3">explore</i>
                <span className="h3 m-0">Navigation</span>
            </div>
            <i className="material-icons material-icons-outlined">arrow_forward</i>
        </Link>
        <Link to="/components/pagination" className="cards cards-primary cards-wide">
            <div className="cards-content flex-row align-items-center m-0 ">
                <i className="material-icons material-icons-outlined mr-3">power_input</i>
                <span className="h3 m-0">Pagination</span>
            </div>
            <i className="material-icons material-icons-outlined">arrow_forward</i>
        </Link>
        <Link to="/components/progress-steps" className="cards cards-primary cards-wide">
            <div className="cards-content flex-row align-items-center m-0 ">
                <i className="material-icons material-icons-outlined mr-3">hdr_strong</i>
                <span className="h3 m-0">Progress Steps</span>
            </div>
            <i className="material-icons material-icons-outlined">arrow_forward</i>
        </Link>
        <Link to="/components/forms" className="cards cards-primary cards-wide">
            <div className="cards-content flex-row align-items-center m-0 ">
                <i className="material-icons material-icons-outlined mr-3">text_snippet</i>
                <span className="h3 m-0">Forms</span>
            </div>
            <i className="material-icons material-icons-outlined">arrow_forward</i>
        </Link>
        <Link to="/components/sheet" className="cards cards-primary cards-wide">
            <div className="cards-content flex-row align-items-center m-0 ">
                <i className="material-icons material-icons-outlined mr-3">vertical_split</i>
                <span className="h3 m-0">Sheet</span>
            </div>
            <i className="material-icons material-icons-outlined">arrow_forward</i>
        </Link>
        <Link to="/components/status" className="cards cards-primary cards-wide">
            <div className="cards-content flex-row align-items-center m-0 ">
                <i className="material-icons material-icons-outlined mr-3">check_circle</i>
                <span className="h3 m-0">Status</span>
            </div>
            <i className="material-icons material-icons-outlined">arrow_forward</i>
        </Link>
        <Link to="/components/tabs" className="cards cards-primary cards-wide">
            <div className="cards-content flex-row align-items-center m-0 ">
                <i className="material-icons material-icons-outlined mr-3">folder</i>
                <span className="h3 m-0">Tabs</span>
            </div>
            <i className="material-icons material-icons-outlined">arrow_forward</i>
        </Link>
        <Link to="/components/tables" className="cards cards-primary cards-wide">
            <div className="cards-content flex-row align-items-center m-0 ">
                <i className="material-icons material-icons-outlined mr-3">view_list</i>
                <span className="h3 m-0">Tables</span>
            </div>
            <i className="material-icons material-icons-outlined">arrow_forward</i>
        </Link>
        <Link to="/components/toast" className="cards cards-primary cards-wide">
            <div className="cards-content flex-row align-items-center m-0 ">
                <i className="material-icons material-icons-outlined mr-3">picture_in_picture</i>
                <span className="h3 m-0">Toast</span>
            </div>
            <i className="material-icons material-icons-outlined">arrow_forward</i>
        </Link>
        <Link to="/components/tooltips" className="cards cards-primary cards-wide">
            <div className="cards-content flex-row align-items-center m-0 ">
                <i className="material-icons material-icons-outlined mr-3">filter_frames</i>
                <span className="h3 m-0">Tooltips</span>
            </div>
            <i className="material-icons material-icons-outlined">arrow_forward</i>
        </Link>
    </section>
);

const Components = () => (
    <DocContainer>
        <p className="lead mb-5">
        This is the Swedbank Pay component library. Here we’ve listed all the components in the Swedbank Pay design system. Feel free to look around!
        </p>
        <MenuOverview />
    </DocContainer>
);

export default Components;

export { MenuOverview };
