import React, { Component, useEffect } from "react";
import PropTypes from "prop-types";
import { DocContainer, ComponentPreview } from "@docutils";

import InputGroup from "@components/InputGroup";
import ButtonComponent from "@components/Button";
import { Rangeslider, Radio } from "@components/FormComponents";
import MediaObjectComponent from "@components/MediaObject";

const { rangeslider } = window.dg;

const SettingsBasic = () => (
    <>
        <div className="row">
            <div className="col-lg-6">
                <InputGroup
                    id="validation-firstname"
                    type="text"
                    label="First name"
                    placeholder="John"
                />
            </div>
            <div className="col-lg-6">
                <InputGroup
                    id="validation-lastname"
                    type="text"
                    label="Last name"
                    placeholder="Smith"
                />
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <InputGroup
                    id="validation-email"
                    type="email"
                    label="Email"
                    placeholder="john.smith@email.com"
                    prefixType="icon"
                    prefixValue="email"
                />
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <InputGroup
                    id="validation-password"
                    type="password"
                    label="Password"
                    placeholder="***********"
                    prefixType="icon"
                    prefixValue="vpn_key"
                />
            </div>
            <div className="col-lg-6">
                <InputGroup
                    id="validation-confirm-password"
                    type="password"
                    label="Confirm password"
                    placeholder="***********"
                    prefixType="icon"
                    prefixValue="vpn_key"
                />
            </div>
        </div>
    </>
);

const SettingsEmailNotification = ({ emailNotif, toggleEmailNotif }) => {

    useEffect(() => {
        rangeslider.init();
    });

    return (
        <div className="row mt-5">
            <div className="col-lg-6">
                <div className="togglebox" >
                    <input type="checkbox" id="togglebox-settings-email" checked={emailNotif} onChange={toggleEmailNotif} />
                    <label htmlFor="togglebox-settings-email">Email notifications</label>
                </div>
            </div>
            <div className="col-lg-6">
                <label className="d-none d-lg-block">Email notification frequency</label>
                <Rangeslider min={1} max={50} step={1} value={7} valueLabel valueLabelPrefix="Every" valueLabelPostfix="days" disabled={!emailNotif} />
            </div>
        </div>

    );
};

const SettingsDescription = () => (
    <>
        <fieldset className="mt-5 mb-5">
            <legend>Public settings</legend>
            <InputGroup
                id="settings-description"
                type="textarea"
                label="Profile description"
                placeholder="This profile description is an example to be followed"
                prefixType="icon"
                prefixValue="format_quote"
            />
            <InputGroup
                label="User Status"
                type="select"
                selectOptions={["Available", "Away", "On break", "Not Available"]}
                prefixValue="Status"
            />
            <label>Profile visibility</label>
            <Radio label="Visible to all" id="settings-radio-1" name="settings-radio" checked />
            <Radio label="Visible to accepted contacts only" id="settings-radio-2" name="settings-radio" />
            <Radio label="Hidden" id="settings-radio-3" name="settings-radio" />
        </fieldset>
    </>
);

const SettingsHeader = () => (
    <header>
        <div className="row">
            <div className="col-auto mr-auto">
                <h2 className="panel-title">Profile settings</h2>
            </div>
            <div className="col-auto">
                <MediaObjectComponent size="sm" icon="account_circle" heading="John Smith" text="john.smith@email.com" />
            </div>
        </div>
    </header>
);

class Settings extends Component {
    constructor (props) {
        super(props);
        this.state = {
            emailNotif: true
        };

    }

    toggleEmailNotif () {
        this.setState({ emailNotif: !this.state.emailNotif });
    }

    render () {
        return (
            <DocContainer>
                <ComponentPreview language="html" showCasePanel codeFigure>
                    <section className="panel panel-brand">
                        <SettingsHeader />
                        <div className="panel-body">
                            <div className="container">
                                <form>
                                    <SettingsBasic />
                                    <SettingsEmailNotification emailNotif={this.state.emailNotif} toggleEmailNotif={() => this.toggleEmailNotif()} />
                                    <SettingsDescription />
                                    <ButtonComponent type="primary" label="Save changes" icon="save" btnType="submit" />
                                </form>
                            </div>
                        </div>
                    </section>
                </ComponentPreview>
            </DocContainer>
        );
    }
}

SettingsEmailNotification.propTypes = {
    emailNotif: PropTypes.bool.isRequired,
    toggleEmailNotif: PropTypes.func.isRequired
};

export default Settings;

export { SettingsHeader, SettingsBasic, SettingsEmailNotification, SettingsDescription };
