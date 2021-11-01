import React from "react";
import PropTypes from "prop-types";

import ActionLink from "@components/ActionLink";
import Alert from "@components/Alert";
import Button from "@components/Button";
import Checkbox from "@components/FormComponents/Checkbox";
import InputGroup from "@components/InputGroup";
import LinkComponent from "@components/Link";
import Logotype from "@components/Logotype";

const LoginForm = ({ additionalText,
    alternativeLogins,
    checkboxId,
    defaultEmail,
    defaultPassword,
    emailId,
    emailLabel,
    error,
    helpDesk,
    logo,
    passwordId,
    passwordLabel,
    placeholder,
    productLabel,
    title }) => {

    const basename = process.env.basename;
    const brand = process.env.brand;

    const emailProps = {
        defaultValue: defaultEmail ? "name@mail.com" : null,
        id: emailId,
        label: emailLabel ? emailLabel : "Email",
        placeholder: placeholder ? placeholder : null,
        type: "email"
    };

    const passwordProps = {
        defaultValue: defaultPassword ? "qwerty1234" : null,
        errorMessage: error ? "Incorrect password" : null,
        id: passwordId,
        helpBlock: error ? error : false,
        label: passwordLabel ? passwordLabel : "Password",
        type: "password",
        validationState: error ? "error" : null
    };

    const AlternativeLogins = () => (
        <>
            <ActionLink linkText="Login with Azure" />{"\n"}
            <ActionLink linkText="Login with Curity" />
            <div className="row no-gutters align-items-center mb-3">
                <hr className="col-5 border-top" />{"\n"}
                <span className="col-2 text-center">or</span>
                <hr className="col-5 border-top" />
            </div>
        </>
    );

    return (
        <>
            {productLabel && <span className="extra-small text-brown">{productLabel}</span>}{"\n"}
            {title && <span className={`${title} mb-4 mt-2 d-block`}>Log in</span>}{"\n"}
            {alternativeLogins && <AlternativeLogins />}
            {error && <Alert icon="cancel" type="danger" text={<p><b>Error.</b> Incorrect password</p>}/>}
            <InputGroup {...emailProps}/>
            <InputGroup {...passwordProps}/>
            <div className="d-sm-flex d-block justify-content-between mb-3">
                <Checkbox id={checkboxId} label="Remember me"/>{"\n"}
                <LinkComponent linkText="Forgot your password?" className="d-block mb-3"/>
            </div>{"\n"}
            <Button type="primary" label="Log in" fullWidth/>
            {additionalText &&
                <p className="small mt-3">
                    {helpDesk && <>
                        <LinkComponent linkText="Contact helpDesk" /> if you are having trouble signing in.
                    </>}
                    {additionalText}
                </p>}{"\n"}
            {logo &&
            <Logotype type="vertical d-none d-sm-block mx-auto mt-5" src={`${basename}designguide/assets/${brand}-logo-v.svg`} size="lg" alt={`${brand}-logo`} />}
        </>);
};

LoginForm.protoTypes = {
    additionalText: PropTypes.string,
    alternativeLogins: PropTypes.bool,
    checkboxId: PropTypes.string,
    defaultEmail: PropTypes.string,
    defaultPassword: PropTypes.string,
    emailLabel: PropTypes.string,
    emailId: PropTypes.string,
    error: PropTypes.bool,
    helpDesk: PropTypes.bool,
    logo: PropTypes.bool,
    passwordLabel: PropTypes.string,
    placeholder: PropTypes.string,
    productLabel: PropTypes.string,
    title: PropTypes.string
};

export default LoginForm;

