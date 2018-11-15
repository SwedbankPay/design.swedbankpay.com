import React, { Component } from "react";

import { ComponentPreview, DocToc, ExperimentalComponentAlert, Property } from "#";
import { tabs } from "$/px-script";
import TabsComponent from "@/Tabs";

const DefaultSlab = () => (
    <>
        <h2 id="default-slab">Default slab</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab">
                <p>Do you want to sign up for the slab mailing list?</p>
                <form action="#" noValidate data-validate>
                    <div className="form-group">
                        <label htmlFor="validation-email-2">Email</label>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="material-icons">email</i></span>
                            <input type="email" className="form-control" id="validation-email-2" placeholder="bob.corlsan@example.com" required />
                        </div>
                        <div className="help-block" data-success="Right!" data-error="Wrong!">This one might be a little tricky</div>
                    </div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        </ComponentPreview>
    </>
);

const SlabElevated = () => (
    <>
        <h2 id="elevated-slab">Elevated slab</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-elevated">
                <p>Look ma, im elevated!</p>
            </div>
        </ComponentPreview>
    </>
);

const SlabWell = () => (
    <>
        <h2 id="slab-well">Slab well</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-well">
                Look ma, im in a well!
            </div>
        </ComponentPreview>
    </>
);

const tabItems = ["Kort", "Rabatter", "Transaksjoner", "Faktura", "Instillinger", "Audit trail"];

const SlabWhite = () => (
    <>
        <h2 id="slab-white">Slab white</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-white">
                <h4 className="text-center">This slab can fit so many tabs in it.</h4>
                <TabsComponent mode="xl" items={tabItems}/>
            </div>
        </ComponentPreview>
    </>
);

const SlabSizes = () => (
    <>
        <h2 id="well-sizes">Well sizes</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-sm">
                This was kind of tight.
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-white slab-lg">
                This is so spacious I can hardly believe it!
            </div>
        </ComponentPreview>
    </>
);

const SlabText = () => (
    <div className="col-lg-10 doc-body">
        <ExperimentalComponentAlert />
        <p className="lead">
            Slabs are meant to be used as container components,
            therefore it works with whatever you want to put in it.
        </p>
        <DefaultSlab />
        <SlabElevated />
        <SlabWell />
        <SlabWhite />
        <SlabSizes />
    </div>
);

class Slab extends Component {
    componentDidMount () {
        tabs.init();
    }

    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <SlabText />
                    <DocToc component={SlabText} />
                </div>
            </div>
        );
    }
}

export default Slab;

/* For testing */
export { DefaultSlab, SlabElevated, SlabWell, SlabWhite, SlabSizes, SlabText };
