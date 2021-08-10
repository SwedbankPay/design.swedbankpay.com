import React, { Component } from "react";

import { ComponentPreview, DocContainer, JavascriptDocs, JavascriptDocElement } from "@docutils";
import TabsComponent from "@components/Tabs";
import CodeTags from "@components/CodeTags";

import { tabs } from "@src/scripts/main";

const tabItems = ["Selected", "Unselected", "Unselected", "Unselected", "Unselected", "Unselected"];

const Overview = () => (
    <section>
        <h2 id="overview">Overview</h2>
        <div className="showcase-panel p-5">
            <div className="w-75 m-auto">
                <TabsComponent id="tabs-example" items={[...tabItems.slice(0, 3)]}/>
            </div>
        </div>
        <div className="component-description border-left border-right p-4 pb-2">
            <span className="h3 d-inline-block mb-2">Tabs</span>
            <p className="mb-0">
                The tabs component has three different states, the selected state for the category currently displayed. Unselected state for all the other categories not currently selected and lastly there the hover state when the user hover over an unselected state.
            </p>
        </div>
        <ComponentPreview language="html" codeFigure>
            <TabsComponent id="tabs-example" items={[...tabItems.slice(0, 3)]}/>
        </ComponentPreview>

        <section>
            <h3>When to consider something else</h3>
            <ul className="list list-bullet">
                <li>It is important to consider whether or not dividing the content into sub-categories is helpful for the user. Using Tabs isn’t always the best solution and can create more fragmented experience and leading to issues where the user might miss out on content. Similarly, this is also not idea if the user needs to compare the content. In those cases it is better to present the content on a page with proper headlines and structure.</li>
            </ul>
        </section>

        <section>
            <h3>Scrollable tabs</h3>
            <div className="slab slab-plain">
                <div className="w-75 m-auto">
                    <TabsComponent id="tabs-scroll-example" ulId="tabs-scroll-example-ul" items={tabItems} scroll/>
                </div>
            </div>
            <p>The tab component also includes scrollable behaviour with the addition of a clickable chevron arrow when the size of the viewport no longer can display all the tab categories at once. The user can navigate inside the tabs menu.</p>
        </section>

        <section id="how-to-use-tabs">
            <h3>How to use tabs</h3>
            <div className="slab slab-plain slab-border-success">
                <span className="h3">Do</span>
                <div className="px-5 py-3">
                    <TabsComponent id="tabs-scroll-example" ulId="tabs-scroll-example-ul" items={[...tabItems.slice(0, 3)]}/>
                    <div className="slab slab-default p-5"></div>
                </div>
            </div>
            <div className="slab slab-plain slab-border-error">
                <span className="h3">Don&apos;t</span>
                <div className="px-5 py-3">
                    <TabsComponent id="tabs-scroll-example" ulId="tabs-scroll-example-ul" items={[...tabItems.slice(0, 3)]} scroll/>
                    <div className="slab slab-default p-5"></div>
                </div>
            </div>
            <p>The tab component should always fill the full container of the content it governs. As seen on the examples above, the length of the underline for tab isn’t determined by the amount of tabs/length of the text. But should instead indicate the content that it anchors to and contains.</p>
        </section>
    </section>
);

const ContentGuidelines = () => (
    <section>
        <h2 id="content-guidelines">Content guidelines</h2>
        <div className="slab slab-plain px-5">
            <div className="w-75 m-auto">
                <TabsComponent id="tabs-scroll-example" ulId="tabs-scroll-example-ul" items={["Selected Label", "Unselected Label", "Unselected Label"]}/>
            </div>
        </div>
        <ul className="list list-bullet">
            <li>The <b>Label</b> for tabs should state the name of the category and division. This should be short and to the point making is as easy as possible for the user to find their desired category.</li>
            <li>The <b>order of labels</b> should always be arranged according the content, sorted after relevance. However, in cases where there is not a preferred order, the tabs should be arrange the tabs in alphabetical order instead.</li>
        </ul>
    </section>
);

const SetScrollStateJavaScript = ({ componentName }) => (
    <>
        <JavascriptDocElement
            code={<CodeTags type="secondary" code={`dg.${componentName}.setScrollState(<${componentName.toLowerCase()}-id>, scrollState)`} />}
            description={
                <>
                    Moves the scroll position of the {componentName} to the user specified position. The value to be passed to <CodeTags type="secondary" code="scrollState" /> is
                    the object <CodeTags type="secondary" code="{ scrollStart, scrollTotalAmount }" />. <CodeTags type="secondary" code="scrollStart" /> is the current scroll
                    position, <CodeTags type="secondary" code="scrollTotalAmount" /> is the amount to be scrolled from the current scroll position (negative values for left scroll,
                    positive values for right scroll). Note: <CodeTags type="primary" code={"<ul>"} /> is the scrollable element.
                </>
            }
        />
    </>
);

const DeveloperDocumentation = () => (
    <>
        <h2 id="developer-documentation">Developer documentation</h2>
        <span className="h3">Javascript methods</span>
        <JavascriptDocs componentName="tabs" others={[SetScrollStateJavaScript]} />
    </>
);

class Tabs extends Component {
    componentDidMount () {
        tabs.init();
    }

    render () {
        return (
            <DocContainer docToc>
                <p className="lead">
                Tabs component separates content into groups within a single content, it lets the user navigate and quickly switch between section within the same content.
                </p>
                <Overview />
                <ContentGuidelines />
                <DeveloperDocumentation />
            </DocContainer>
        );
    }
}

export default Tabs;

/* For testing */
export { Overview, ContentGuidelines, DeveloperDocumentation };
