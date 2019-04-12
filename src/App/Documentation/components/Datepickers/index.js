import React, { Component } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";

import { ComponentPreview, Attribute, Property, DocContainer } from "#";
import { Datepicker as DatepickerComponent } from "@/FormComponents";
import Alert from "@/Alert";

const AboutDatepickers = () => (
    <>
        <h2 id="about-datepickers">About</h2>
        <p>
            Datepickers give a visual presentation of days, months and years. By utilizing the datepicker you can be assured the given input is in the format you
            expect without having to deal with too much client-side validation. Datepickers should be used for recent dates to avoid having the user click a lot of times to find the required date.
            If you need a date of birth or something similarly far back, an input field with proper validation will be easier to use.
        </p>
    </>
);

const SimpleDatepicker = () => (
    <>
        <h2 id="simple-datepicker">Simple datepicker</h2>
        <p>
            A basic datepicker can be made by applying the attribute <Attribute data name="datepicker" /> to an input element inside a <Property value=".form-group" />.
            The basic datepicker has a read-only input field.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <DatepickerComponent
                label="Date"
                prefixType="icon"
                prefixValue="event"
                id="simple-datepicker"
            />
        </ComponentPreview>
    </>
);

const AllowInput = () => (
    <>
        <h2 id="allow-input">Allow input</h2>
        <p>
            By default datepickers do not allow input but you can use <Attribute data name="datepicker-allowinput" />. When
            you allow input then the given date has to match the datepicker format (<Attribute value="iso8601"/> if you have not specified a format).
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <DatepickerComponent
                label="Date"
                prefixType="icon"
                prefixValue="event"
                id="simple-datepicker"
                allowinput
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
                value="1972-12-28"
                label="Date"
                prefixType="icon"
                prefixValue="event"
                id="init-value-datepicker"
            />
        </ComponentPreview>
    </>
);

const HumanReadable = () => (
    <>
        <h2 id="human-readable">Human readable date</h2>
        <p>
            If you wish to make the date more readable to humans you can add <Attribute data value="true" name="datepicker-fulldate" />
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <DatepickerComponent
                value="1972-12-28"
                label="Date"
                prefixType="icon"
                prefixValue="event"
                fulldate
                id="init-value-datepicker"
            />
        </ComponentPreview>
    </>
);

const CustomFormat = () => (
    <>
        <h2 id="custom-format">Custom format</h2>
        <p>
            To use a custom format include <Attribute data name="datepicker-format" value="[nb|sv|da|fi|en|iso8601(default)]" />. If no
            format is provided then datepicker will default to <Attribute value="iso8601" />. Same behaviour applies if you try to set an invalid date.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <DatepickerComponent
                label="nb (norwegian):"
                value="28.12.1972"
                format="nb"
                prefixType="icon"
                prefixValue="event"
                id="nb-datepicker"
            />
            <DatepickerComponent
                label="sv (swedish):"
                value="1972-12-28"
                format="sv"
                prefixType="icon"
                prefixValue="event"
                id="sv-datepicker"
            />
            <DatepickerComponent
                label="da (danish):"
                value="28.12.1972"
                format="da"
                prefixType="icon"
                prefixValue="event"
                id="da-datepicker"
            />
            <DatepickerComponent
                label="fi (finnish):"
                value="28.12.1972"
                format="fi"
                prefixType="icon"
                prefixValue="event"
                id="fi-datepicker"
            />
            <DatepickerComponent
                label="en (english):"
                value="28/12/1972"
                format="en"
                prefixType="icon"
                prefixValue="event"
                id="en-datepicker"
            />
            <DatepickerComponent
                label="iso8601 (robotic):"
                value="1972-12-28"
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
        <p>
            Adding time to your datepicker is as easy as using <Attribute data name="datepicker-time" value="true" />. If you wish to set
            a default time for the time picker just include it in the <Attribute data name="datepicker-value" /> attribute.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <DatepickerComponent
                value="28.12.1972 12:00"
                time
                format="nb"
                label="Date"
                prefixType="icon"
                prefixValue="event"
                id="include-time-datepicker"
            />
        </ComponentPreview>
    </>
);

const ShowingMultipleMonths = () => (
    <>
        <h2 id="showing-multiple-months">Showing multiple months</h2>
        <p>If you need to show more than one month in your date picker use the attribute <Attribute data name="datepicker-months" value="{number}" />.</p>
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

const ValidDates = () => (
    <>
        <h2 id="valid-dates">Valid dates</h2>
        <p>
            You can set a range of available dates to select from by using <Attribute data name="datepicker-min" /> and <Attribute data name="datepicker-max" />.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <DatepickerComponent
                value="28.12.1972"
                min="28.12.1972"
                max="10.05.2017"
                format="nb"
                label="Date"
                prefixType="icon"
                prefixValue="event"
                id="valid-dates-datepicker"
            />
        </ComponentPreview>
    </>
);

const DateRange = () => (
    <>
        <h2 id="date-range">Date range</h2>
        <p>
            You can make it possible to select a range of dates with <Attribute data name="datepicker-mode" value="range" />.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <DatepickerComponent
                min="10.12.1972"
                label="date"
                prefixType="icon"
                prefixValue="event"
                id="date-range-datepicker"
                mode="range"
                format="nb"
            />
        </ComponentPreview>
    </>
);

const MultipleDates = () => (
    <>
        <h2 id="multiple-dates">Multiple dates</h2>
        <p>
            Set mode to <Attribute value="multiple" /> for multiple date selection.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <DatepickerComponent
                min="10.12.1972"
                label="date"
                prefixType="icon"
                prefixValue="event"
                id="date-range-datepicker"
                mode="multiple"
                format="nb"
            />
        </ComponentPreview>
        <Alert type="warning">
            <h5>Max number of dates</h5>
            <p>
                The <Attribute value="multiple" /> variation of datepicker does not have an upper limit of dates. Use <NavLink to="#date-range">range</NavLink> if
                you want to select a continuous range of dates.
            </p>
        </Alert>
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
                    <td>
                        <Attribute value="null" />
                    </td>
                    <td>
                        Value used to initialize calendar. Set this value with the same format currently set for the datepicker (including time if you have enabled that).
                    </td>
                </tr>
                <tr>
                    <td>
                        <Attribute data name="datepicker-allowinput" />
                    </td>
                    <td></td>
                    <td>
                        This allows the user to write in the input field. The dates given must match the format of the datepicker.
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
                    <td>
                        <Attribute value="false" />
                    </td>
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
                    <td>
                        <Attribute value="null" />
                    </td>
                    <td>
                        Disallow dates before min.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Attribute data name="datepicker-max" />
                    </td>
                    <td>
                        <Attribute value="null" />
                    </td>
                    <td>
                        Disallow dates past max.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Attribute data name="datepicker-altinput" />
                    </td>
                    <td></td>
                    <td>
                        Use a custom format to display the selected date(s) shown in the input field.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Attribute data name="datepicker-mode" />
                    </td>
                    <td>
                        <Attribute value="single" />
                    </td>
                    <td>
                        Different variations of date selection. Available options are:
                        <ul className="list">
                            <li className="mb-sm"><Attribute value="single" />User can select one date</li>
                            <li className="mb-sm"><Attribute value="multiple" />User can select multiple dates</li>
                            <li className="mb-sm"><Attribute value="range" />User can select a range of continuous dates</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </>
);

class Datepickers extends Component {
    componentDidMount () {
        px.datepicker.init();
    }

    render () {
        return (
            <DocContainer docToc>
                <p className="lead">
                    Datepickers makes it easy to get dates from your users. With datepickers you do not have to worry about how your users
                    write the given date, alleviating the need to do format validation.
                </p>
                <AboutDatepickers />
                <SimpleDatepicker />
                <AllowInput />
                <HumanReadable />
                <InitialValue />
                <CustomFormat />
                <IncludeTime />
                <ShowingMultipleMonths />
                <ValidDates />
                <DateRange />
                <MultipleDates />
                <Options />
            </DocContainer>
        );
    }
}

export default Datepickers;

/* For testing */
export { AboutDatepickers, SimpleDatepicker, AllowInput, HumanReadable, InitialValue, CustomFormat, IncludeTime, ShowingMultipleMonths, ValidDates, DateRange, MultipleDates, Options };
