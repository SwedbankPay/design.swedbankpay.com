import React, { Component } from "react";

import ComponentPreview, { Attribute } from "../../utils/ComponentPreview";
import DocToc from "../../utils/DocToc";

import { datepicker } from "../../../../px-script";
import { Datepicker as DatepickerComponent } from "../../../components/FormComponents";

const SimpleDatepicker = () => (
    <>
        <h2 id="simple-datepicker">Simple datepicker</h2>
        <p>Simple datepicker..<Attribute data={true} name="datepicker" value="true" />.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <DatepickerComponent />
        </ComponentPreview>
    </>
);

const InitialValue = () => (
    <>
        <h2 id="initial-value">Initial value</h2>
        <p>Initial value..<Attribute data={true} name="datepicker-init-value" />.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <DatepickerComponent value="2018-04-20" />
        </ComponentPreview>
        <p>Keep in mind that the datepicker will not format the initial value based on the format you pass, so if you want it to match the format, you will need to pass in the correctly formatted date.</p>
    </>
);

const CustomFormat = () => (
    <>
        <h2 id="custom-format">Custom format</h2>
        <p>Custom format..<Attribute data={true} name="datepicker-format" value="[nb|sv|da|en|iso8601(default)]" />.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeList={true}>
            <ul className="list">
                <li className="mb-md"><DatepickerComponent value="20.04.2018" format="nb" /></li>
                <li className="mb-md"><DatepickerComponent value="2018-04-20" format="sv" /></li>
                <li className="mb-md"><DatepickerComponent value="20-04-2018" format="da" /></li>
                <li className="mb-md"><DatepickerComponent value="2018-04-20" format="en" /></li>
            </ul>
        </ComponentPreview>
    </>
);

const IncludeTime = () => (
    <>
        <h2 id="include-time">Include time</h2>
        <p>Include time.. <Attribute data={true} name="datepicker-time" value="true" />.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeList={true}>
            <ul className="list">
                <li className="mb-md"><DatepickerComponent time={true} value="13:37 20.04.2018" format="nb" /></li>
                <li className="mb-md"><DatepickerComponent time={true} value="13:37 2018-04-20" format="sv" /></li>
                <li className="mb-md"><DatepickerComponent time={true} value="13:37 20-04-2018" format="da" /></li>
                <li className="mb-md"><DatepickerComponent time={true} value="13:37 2018-04-20" format="en" /></li>
            </ul>
        </ComponentPreview>
    </>
);

const DateRange = () => (
    <>
        <h2 id="date-range">Date range</h2>
        <p>Date range with <Attribute data={true} name="datepicker-min" /> and <Attribute data={true} name="datepicker-max" />...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <DatepickerComponent value="18.04.2018" min="17.04.2018" max="24.04.2018" format="nb" />
        </ComponentPreview>
    </>
);

const Options = () => (
    <>
        <h2 id="available-options">Available options</h2>
        <p>Options available through <Attribute data={true} name="datepicker" />...</p>
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
                        <Attribute data={true} name="datepicker-init-value" />
                    </td>
                    <td>
                        <Attribute value="null" />
                    </td>
                    <td>
                        Value used to initialize calendar.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Attribute data={true} name="datepicker-format" />
                    </td>
                    <td>
                        <Attribute value="iso8601" />
                    </td>
                    <td>
                        <p>
                            Format string used for the input field. All have the same time format (HH:mm), and starts the week on monday (1), except <Attribute value="en" />, which starts on sunday (0).
                        </p>
                            The following options are available:
                        <ul className="list">
                            <li className="mb-sm"><Attribute value="nb" />: DD.MM.YYYY</li>
                            <li className="mb-sm"><Attribute value="sv" />: YYYY-MM-DD</li>
                            <li className="mb-sm"><Attribute value="da" />: DD-MM-YYYY</li>
                            <li className="mb-sm"><Attribute value="en" />: YYYY-MM-DD</li>
                            <li className="mb-sm"><Attribute value="iso8601" />: YYYY-MM-DD (default)</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Attribute data={true} name="datepicker-time" />
                    </td>
                    <td>
                        <Attribute value="false" />
                    </td>
                    <td>
                        If the calendar shows the current time and allows you to change it using a dropdown.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Attribute data={true} name="datepicker-min" />
                    </td>
                    <td>
                        <Attribute value="false" />
                    </td>
                    <td>
                        Disallow dates before min.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Attribute data={true} name="datepicker-max" />
                    </td>
                    <td>
                        <Attribute value="false" />
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
        <InitialValue />
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
export { SimpleDatepicker, InitialValue, CustomFormat, IncludeTime, DateRange, Options, DatepickersText };
