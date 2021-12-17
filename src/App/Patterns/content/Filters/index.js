import React, { useState } from "react";
import { DocContainer } from "@docutils";

import { ComponentPreview } from "~/src/App/docutils";

import { filtersShowCase } from "./constants";

import { Link } from "react-router-dom";

const Overview = () => (
    <section>
        <h2 id="overview">Overview</h2>
        <p>There are different options in terms positioning and setup of a filter. For example it can be placed in a vertical sidebar, a horizontal topbar or within a Sheet component. Depending on your context different setups might be better suited.
        </p>
        <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={filtersShowCase} noOptions removeOuterTag/>
    </section>
);

const ContentGuidelines = () => (
    <section>
        <h2 id="content-guidelines">Content guidelines</h2>
        <p>When building filters, you need to be very aware of your data structure and how you can help your user to find what they are looking for. Different type of data require different types of selection inputs. These components can be relevant when building a filter: </p>
        <ul>
            <li><Link to="/components/checkbox">Checkbox group</Link> to narrow results by selecting zero or more options from a category.</li>
            <li><Link to="/components/radio-button">Radio button group </Link> to narrow results by selecting only one option a category.</li>
            <li><Link to="/components/input-field">Input field</Link> to narrow results by free input, two fields can for example be used for creating a range, e.g from amount X to amount Y.</li>
            <li><Link to="/components/datepicker">Date Picker</Link> to narrow results by time frames, such as before a date, after a date, or between two dates.</li>
            <li>Search to allow the user to input a word or phrase to find something specific or to narrow down to more relevant data.</li>
            <li>Popover to work as menu containers for any input components like checkbox groups or input fields.</li>
            <li>Tag to show a summary of selected filter values.</li>
            <li><Link to="/components/buttons">Buttons</Link> for actions, e.g trigger popovers or sheets and to clear and apply filters.</li>
            <li>Tabs to separate data into views where only one view can be opened at a time.</li>
        </ul>
    </section>
);

const HowToDesignFilters = () => (
    <section>
        <section>
            <h2 id="layout">How to design filters</h2>
            <p>Consider the following when creating a filter:</p>
            <ul>
                <li><b>Filter prioritization:</b> Take some time to prioritize the order you’ll display your filters in. The filter categories which are modified most often deserves quicker access and higher visibility. Also think about the prioritization of the filter values within a category, statuses are for example better prioritized in order of urgency whereas countries are more easily scannable in alphabetical order.</li>
                <li><b>Clear all:</b> Always include the option to clear all filters at once. From the user’s perspective, a “Clear Filters” button is also a reminder that filters are applied.</li>
                <li><b>Tags for selected filters:</b> If the filters values will be hidden from the user e.g in a popover menu or in a sheet, use tags to show the selected filter values in proximity to the result list. Otherwise, it’s easy for a user to forget they activated filters.</li>
                <li><b>Live VS batch filtering:</b> Test the loading time of your filter! This is important since it determines if your filters can be applied instantly or if you need to implement a batch “Apply filters” button to spare the user from long loading time after every selection.</li>
            </ul>
        </section>
        <section>
            <h2>Accessibility considerations</h2>
            <p>To ensure that the filtering you build is accessible as a whole, a user should:</p>
            <ul>
                <li>be able to identify and understand labels for all controls.</li>
                <li>be notified of state changes.</li>
                <li>be able to complete all actions with the keyboard.</li>
            </ul>
        </section>
        <section>
            <h2>Do&#x27;s and Dont&#x27;s</h2>
            <p>Try to avoid multiple lines in topbar filters due to many filter categories. Instead, promote the most used filters and include all others in a filter sheet.</p>
            <div className="slab slab-plain slab-border-success">
                <span className="h3">Do</span>
                <div className="d-flex flex-column align-items-center">
                    <div className="pt-3 pb-4">
                        SOME CONTENT
                    </div>
                </div>
            </div>
            <div className="slab slab-plain slab-border-error">
                <span className="h3">Don&#x27;t</span>
                <div className="d-flex flex-column align-items-center">
                    <div className="pt-3 pb-3">
                        SOME CONTENT
                    </div>
                </div>
            </div>
            <p>If a sidebar filter or filter sheet has many filter categories and require scrolling, it’s recommended to use <Link to="/components/accordion">Accordions</Link> for the filter categories. You can have the first accordions expanded by default and the others collapsed to make the filter more scannable. </p>
            <div className="slab slab-plain slab-border-success">
                <span className="h3">Do</span>
                <div className="d-flex flex-column align-items-center">
                    <div className="pt-3 pb-4">
                        SOME CONTENT WITH PICTURE OF MOBILE<br/>
                        SOME CONTENT WITH PICTURE OF MOBILE<br/>
                        SOME CONTENT WITH PICTURE OF MOBILE<br/>
                        SOME CONTENT WITH PICTURE OF MOBILE<br/>
                        SOME CONTENT WITH PICTURE OF MOBILE<br/>
                        SOME CONTENT WITH PICTURE OF MOBILE<br/>
                        SOME CONTENT WITH PICTURE OF MOBILE<br/>
                    </div>
                </div>
            </div>
            <p>When using a Tag component to show a selected filter value, use the filter category name if the name of the value is not clear on its own.</p>
            <div className="row">
                <div className="col-6">
                    <div className="slab slab-plain slab-border-success">
                        <span className="h3">Do</span>
                        <div className="d-flex flex-column align-items-center">
                            <div className="pt-3 pb-4">
                                FilterTags
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="slab slab-plain slab-border-error">
                        <span className="h3">Don&#x27;t</span>
                        <div className="d-flex flex-column align-items-center">
                            <div className="pt-3 pb-4">
                                FilterTags
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </section>
);

const DeveloperDocumentation = () => (
    <section>
        <h2 id="developer-documentation">Developer documentation</h2>
    </section>
);

const Filters = () => (
    <DocContainer>
        <p className="lead">Filtering allows users to trim down visible items in a list or table by using a combination of certain options and attributes.</p>
        <Overview />
        <ContentGuidelines />
        <HowToDesignFilters />
        <DeveloperDocumentation />
    </DocContainer>
);

export default Filters;

export { Overview, ContentGuidelines, HowToDesignFilters, DeveloperDocumentation };
