import React, { Component } from "react";

import { ComponentPreview, Attribute, Property, DocContainer } from "#";
import { Datepicker as DatepickerComponent } from "@/FormComponents";
import { datepicker } from "$/px-script/main";
import Alert from "@/Alert";

const moment = window.moment;

const SimpleDatepicker = () => (
    <>
        <h2 id="simple-datepicker">Simple datepicker</h2>
        <p>A basic datepicker can be made by applying the attribute <Attribute data name="datepicker" /> to an input tag inside a <Property value=".form-group" />.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <DatepickerComponent
                label="Date"
                prefixType="icon"
                prefixValue="event"
                id="simle-datepicker"
            />
        </ComponentPreview>
    </>
);

const InitialValue = () => (
    <>
        <h2 id="initial-value">Initial value</h2>
        <p>If you want to set an initial value for your datepicker use <Attribute data value="{your-date}" name="datepicker-value" />.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <DatepickerComponent
                value={moment().format("YYYY-MM-DD")}
                label="Date"
                prefixType="icon"
                prefixValue="event"
                id="init-value-datepicker"
            />
        </ComponentPreview>
        <Alert type="warning">
            <h5>Inintial value and format</h5>
            <p>Keep in mind that the datepicker will not insert the initial value if it does not correctly match the set format (iso8601 if you have not specified a format).</p>
        </Alert>
    </>
);

const CustomFormat = () => (
    <>
        <h2 id="custom-format">Custom format</h2>
        <p>
            To use a custom format include <Attribute data name="datepicker-format" value="[nb|sv|da|fi|en|iso8601(default)]" />.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <DatepickerComponent
                label="nb (norwegian):"
                value={moment().format("DD.MM.YYYY")}
                format="nb"
                prefixType="icon"
                prefixValue="event"
                id="nb-datepicker"
            />
            <DatepickerComponent
                label="sv (swedish):"
                value={moment().format("YYYY-MM-DD")}
                format="sv"
                prefixType="icon"
                prefixValue="event"
                id="sv-datepicker"
            />
            <DatepickerComponent
                label="da (danish):"
                value={moment().format("DD.MM.YYYY")}
                format="da"
                prefixType="icon"
                prefixValue="event"
                id="da-datepicker"
            />
            <DatepickerComponent
                label="fi (finnish):"
                value={moment().format("DD.MM.YYYY")}
                format="fi"
                prefixType="icon"
                prefixValue="event"
                id="fi-datepicker"
            />
            <DatepickerComponent
                label="en (english):"
                value={moment().format("DD/MM/YYYY")}
                format="en"
                prefixType="icon"
                prefixValue="event"
                id="en-datepicker"
            />
            <DatepickerComponent
                label="iso8601 (robotic):"
                value={moment().format("YYYY-MM-DD")}
                format="iso8601"
                prefixType="icon"
                prefixValue="event"
                id="iso8601-datepicker"
            />
        </ComponentPreview>
    </>
);

const IncludeTime = () => (
    <>
        <h2 id="include-time">Include time</h2>
        <p>Adding time to your datepicker is as easy as using <Attribute data name="datepicker-time" value="true" />.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <DatepickerComponent
                time
                value={moment().format("HH:mm DD.MM.YYYY")}
                format="nb"
                label="Date"
                prefixType="icon"
                prefixValue="event"
                id="include-time-datepicker"
            />
        </ComponentPreview>
    </>
);

const Required = () => (
    <>
        <h2 id="required">Required</h2>
        <p>If you set <Attribute data name="required" value="true" /> to true it will autopopulate the input after clicking it if no date is selected. Keep in mind that if you do not pass a value to the datepicker it will remain blank if the user does not click the input.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <DatepickerComponent
                required label="Date"
                prefixType="icon"
                prefixValue="event"
                id="required-datepicker"
            />
        </ComponentPreview>
    </>
);

const ShowingMultipleMonths = () => (
    <>
        <h2 id="showing-multiple-months">Showing multiple months</h2>
        <p>If you need to show more than one month in your date picker user attribute <Attribute data name="datepicker-months" value="[number]" />.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <DatepickerComponent
                months="2"
                label="Date"
                prefixType="icon"
                prefixValue="event"
                id="multiple-months-datepicker"
            />
        </ComponentPreview>
    </>
);

const DateRange = () => (
    <>
        <h2 id="date-range">Date range</h2>
        <p>
            You can set a range of available dates to select from by using <Attribute data name="datepicker-min" /> and <Attribute data name="datepicker-max" />
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            {/* eslint-disable newline-per-chained-call*/}
            <DatepickerComponent
                value={moment().format("DD.MM.YYYY")}
                min={moment().subtract(5, "d").format("DD.MM.YYYY")}
                max={moment().add(5, "d").format("DD.MM.YYYY")}
                months="2"
                format="nb"
                label="Date"
                prefixType="icon"
                prefixValue="event"
                id="date-range-datepicker"
            />
            {/* eslint-enable newline-per-chained-call*/}
        </ComponentPreview>
        <p><b>NOTE:</b> Using range with required and no initial value will make the datepicker select current date if a user clicks the input and does not select a date within the range.</p>
    </>
);

const Options = () => (
    <>
        <h2 id="available-options">Available options</h2>
        <p>Options available through <Attribute data name="datepicker" />...</p> Keep in mind that setting any of these values will render them true, so setting an attribute to <Attribute value="false" /> will still render it true.
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
                        <Attribute data name="datepicker-value" />
                    </td>
                    <td></td>
                    <td>
                        Value used to initialize calendar. Set this value with the same format currently set for the datepicker (including time if you have enabled that).
                    </td>
                </tr>
                <tr>
                    <td>
                        <Attribute data name="datepicker-format" />
                    </td>
                    <td>
                        <Attribute value="iso8601" />
                    </td>
                    <td>
                        <p>
                            Format string used for the input field and names for days and months. All have the same time format (HH:mm), and starts the week on monday (1).
                        </p>
                        <p>
                            The following options are available:
                        </p>
                        <ul className="list">
                            <li className="mb-sm"><Attribute value="nb" />: DD.MM.YYYY</li>
                            <li className="mb-sm"><Attribute value="sv" />: YYYY-MM-DD</li>
                            <li className="mb-sm"><Attribute value="da" />: DD.MM.YYYY</li>
                            <li className="mb-sm"><Attribute value="fi" />: DD.MM.YYYY</li>
                            <li className="mb-sm"><Attribute value="en" />: DD/MM/YYYY</li>
                            <li className="mb-sm"><Attribute value="iso8601" />: YYYY-MM-DD (default)</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Attribute data name="datepicker-time" />
                    </td>
                    <td></td>
                    <td>
                        If the calendar shows the current time and allows you to change it using a dropdown.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Attribute data name="datepicker-months" />
                    </td>
                    <td>
                        <Attribute value="1" />
                    </td>
                    <td>
                        Number of months to display in the datepicker.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Attribute data name="datepicker-min" />
                    </td>
                    <td></td>
                    <td>
                        Disallow dates before min.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Attribute data name="datepicker-max" />
                    </td>
                    <td></td>
                    <td>
                        Disallow dates past max.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Attribute data name="required" />
                    </td>
                    <td></td>
                    <td>
                        Forces a value in the input field, but only if an initial value is set or the user clicks/tabs the input.
                    </td>
                </tr>
            </tbody>
        </table>
    </>
);

class Datepickers extends Component {
    componentDidMount () {
        datepicker.init();
    }

    render () {
        return (
            <DocContainer docToc>
                <p className="lead">
                    Datepickers should be used for recent dates. If you need a date of birth or
                    something similar then it is easier to just use an input field with validation.
                </p>
                <SimpleDatepicker />
                <InitialValue />
                <CustomFormat />
                <IncludeTime />
                <Required />
                <ShowingMultipleMonths />
                <DateRange />
                <Options />
            </DocContainer>
        );
    }
}

export default Datepickers;

/* For testing */
export { SimpleDatepicker, InitialValue, CustomFormat, IncludeTime, Required, ShowingMultipleMonths, DateRange, Options };
