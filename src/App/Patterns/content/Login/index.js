import React from "react";
import { Link } from "react-router-dom";
import { DocContainer } from "@docutils";
import { ComponentPreview } from "~/src/App/docutils";

import InputGroup from "@components/InputGroup";
import LoginForm from "../../components/LoginForm/index";

import { guidelineList } from "./constants";

const basename = process.env.basename;

const Overview = () => (
    <section>
        <h2 id="overview">Overview</h2>

        <img src={`${basename}img/documentation/patterns/login-pattern-example.png`} className="d-none d-md-block w-100 border-left border-right border-bottom" alt="Image for login screen" />
        <div className="container-fluid d-block d-md-none border-left border-right border-bottom border-top-brand py-3">
            <LoginForm passwordId="login-password-example" emailId="login-email-example" checkboxId="login-checkbox-example" additionalText helpDesk logo alternativeLogins title="h1" productLabel="Merchant Admin" />
        </div>
        <div className="border-left border-right p-3">
            <div className="m-3">
                <h3>Login</h3>
                The login page is customizable and components can be removed or added to fit a specific products needs.
            </div>
        </div>
        <ComponentPreview language="html" codeFigure>
            <div className="container-fluid border-top-brand">
                <div className="row">
                    <div className="col-lg-5 col-12 d-flex p-0">
                        <div className="col-sm-9 col-12 m-auto">
                            <LoginForm passwordId="password-input-example" emailId="email-input-example" checkboxId="checkbox-example" additionalText helpDesk logo alternativeLogins title="h1" productLabel="Merchant Admin" />
                        </div>
                    </div>{"\n"}
                    <img src={`${basename}img/documentation/patterns/login-img-example.png`} alt="Image for login screen" className="d-none d-lg-block col-7 px-0" />
                </div>
            </div>
        </ComponentPreview>
    </section>
);

const ContentGuidelines = () => (
    <section>
        <h2 id="content-guidelines">Content guidelines</h2>
        <div className="showcase-panel p-0 mb-4">
            <div className="border-top-brand py-5">
                <div className="col-sm-8 col-12 m-auto">
                    <LoginForm placeholder="Placeholder text"
                        title="h1"
                        checkboxId="guideline-checkbox-example"
                        passwordId="guideline-password-example"
                        passwordLabel="Required input field" emailId="guideline-email-example"
                        emailLabel="Required input field"
                        alternativeLogins
                        additionalText="Additional help text"
                        productLabel="Product Label"
                        logo />
                </div>
            </div>
        </div>
        <ul className="list list-bullet">
            {guidelineList.map((text, i) => <li key={i}>{text}</li>)}
        </ul>
        <section>
            <h3>Image</h3>
            <img src={`${basename}img/documentation/patterns/login-img-collection-example.png`} alt="Fitting images for login screen" className="w-100 mb-3" />
            <p>The login form is always accompanied by a image on the right side on desktop devices, the image is hidden on smaller devices. Above are an example of some images that would be fitting to be used as login images, the most important thing to look out for is telling a story, especially when it comes to the product. “Who is this product for?” If it is an product for consumers outside of our organization, try to relate the image to that segment of the user. For more guidance on how to design with images and find our image library, refer to the <Link to="/identity/imagery">Imagery section</Link>.
            </p>
        </section>

    </section>
);

const DeveloperDocumentation = () => (
    <section>
        <h2 id="developer-documentation">Developer documentation</h2>
        <h3>Errors and validation</h3>
        <p>Not being able to log in to an application is very frustrating for the user, therefore error messages should be used to help the user understand what went wrong and how to solve the problem.</p>

        <section>
            <h4>Client-side validation</h4>
            <p>Use client-side validation to validate as much data as possible inline before the user submits the form. Common inline errors include empty required fields, invalid characters or incorrect input format. </p>
            <ComponentPreview language="html" codeFigure showCasePanel>
                <div className="col-sm-6 col-12 m-auto px-0 pt-3">
                    <InputGroup type="email" validationState="error" label="Email" helpBlock errorMessage="Email is required" />
                </div>
            </ComponentPreview>
        </section>
        <section>
            <h4>Server-side validation</h4>
            <p>Use server side validation when the user submits the form. Display a local error alert after the page has reloaded if an error has occurred. Incorrect email or password are the most common servers errors. </p>
            <ComponentPreview language="html" codeFigure showCasePanel>
                <div className="col-sm-6 col-12 m-auto px-0 py-3">
                    <LoginForm error defaultPassword defaultEmail
                        passwordId="validation-password-example"
                        emailId="validation-email-example"
                        checkboxId="checkbox-example"
                        title="h2" />
                </div>
            </ComponentPreview>
        </section>
    </section>
);

const Login = () => (
    <DocContainer>
        <p className="lead">The login page allow users to gain access to an application by entering login credentials to a form.</p>
        <Overview />
        <ContentGuidelines />
        <DeveloperDocumentation />
    </DocContainer>
);

export default Login;

export { Overview, ContentGuidelines, DeveloperDocumentation };
