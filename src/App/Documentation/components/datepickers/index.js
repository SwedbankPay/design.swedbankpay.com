import React, { Component } from "react";

import ComponentPreview, { Attribute } from "../../utils/ComponentPreview";
import DocToc from "../../utils/DocToc";

import { datepicker } from "../../../../px-script";
import { Datepicker as DatepickerComponent } from "../../../components/FormComponents";

const SimpleDatepicker = () => (
    <>
        <h2 id="simple-datepicker">Simple datepicker</h2>
        <p>Simple datepicker..<Attribute data={true} name="datepicker" value="true" />.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} hideValue={true}>
            <DatepickerComponent value="20.04.2018" />
        </ComponentPreview>
    </>
);

const CustomFormat = () => (
    <>
        <h2 id="custom-format">Custom format</h2>
        <p>Custom format..<Attribute data={true} name="datepicker-format" value="[FORMAT]" />.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} hideValue={true}>
            <DatepickerComponent value="2018-04-20" format="YYYY-MM-DD" />
        </ComponentPreview>
    </>
);

const IncludeTime = () => (
    <>
        <h2 id="include-time">Include time</h2>
        <p>Include time.. <Attribute data={true} name="datepicker-time" value="true" />.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} hideValue={true}>
            <DatepickerComponent value="13:37 05.05.2018" format="HH:mm DD.MM.YYYY" time={true} />
        </ComponentPreview>
    </>
);

const DateRange = () => (
    <>
        <h2 id="date-range">Date range</h2>
        <p>Date range with <code><span className="token attr-name">data-datepicker-min</span></code> and <code><span className="token attr-name">data-datepicker-max</span></code>...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} hideValue={true}>
            <DatepickerComponent value="18.04.2018" min="17.04.2018" max="24.04.2018" />
        </ComponentPreview>
    </>
);

const Options = () => (
    <>
        <h2 id="available-options">Available options</h2>
        <p>Options available through <code><span className="token attr-name">data-datepicker</span></code>...</p>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Attribute</th>
                    <th>Default value</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <code><span className="token attr-name">data-datepicker-format</span></code>
                    </td>
                    <td>
                        DD.MM.YYYY
                    </td>
                    <td>
                        Format string used for the input field. H for hour, m for minute, D for day, M for month and Y for year.
                    </td>
                </tr>
                <tr>
                    <td>
                        <code><span className="token attr-name">data-datepicker-time</span></code>
                    </td>
                    <td>
                        false
                    </td>
                    <td>
                        If the calendar shows the current time and allows you to change it using a dropdown.
                    </td>
                </tr>
                <tr>
                    <td>
                        <code><span className="token attr-name">data-datepicker-min</span></code>
                    </td>
                    <td>
                        false
                    </td>
                    <td>
                        Disallow dates before min.
                    </td>
                </tr>
                <tr>
                    <td>
                        <code><span className="token attr-name">data-datepicker-max</span></code>
                    </td>
                    <td>
                        false
                    </td>
                    <td>
                        Disallow dates past max.
                    </td>
                </tr>
            </tbody>
        </table>
    </>
);

const DatepickersText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Datepickers...</p>
        <SimpleDatepicker />
        <CustomFormat />
        <IncludeTime />
        <DateRange />
        <Options />
    </div>
);

class Datepickers extends Component {
    componentDidMount () {
        datepicker.init();
    }

    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <DatepickersText />
                    <DocToc component={DatepickersText} />
                </div>
            </div>
        );
    }
}

export default Datepickers;

/* for testing */
export { SimpleDatepicker };
