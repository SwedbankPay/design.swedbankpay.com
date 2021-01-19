import React from "react";
import * as tableData from "./table-list";

import { ComponentPreview, DocContainer } from "@docutils";
import IconPreview from "@components/IconPreview";
import CodeTags from "@components/CodeTags";

const MaterialIcons = () => (
    <section>
        <h2 id="material-rounded-icons">Material Rounded Icons</h2>
        <p className="mb-0">We primarily use the version called Rounded in the Material icons. To aviod a to heavy look, we strive to look for outlined icons. If an icon isn’t available as outlined or filled we can search for it in the Outlined category aswell. For a full overview of the available icons, please, visit the Material.io. </p>

        <a href="https://material.io/resources/icons/?style=round" className="icon-link" target="_blank" rel="noopener noreferrer">
            <i className="material-icons" aria-hidden="true">open_in_new</i>
            <span className="ml-2">Material Icons Overview</span>
        </a>

        <h3>Example of how to implement icons</h3>
        <p>To use an icon, provide the following markup: <CodeTags type="primary" code={"<i class=\"material-icons\" aria-hidden=\"true\">{icon_name}</i>"} /></p>
        <div className="d-flex justify-content-between p-4">
            <IconPreview preview type="material-icons" name="insert_invitation" />
            <IconPreview preview type="material-icons" name="cake" />
            <IconPreview preview type="material-icons" name="mood" />
            <IconPreview preview type="material-icons" name="thumb_up_alt" />
            <IconPreview preview type="material-icons" name="whatshot" />
        </div>
        <ComponentPreview language="html" codeFigure>
            <i className="material-icons" aria-hidden="true">insert_invitation</i>{"\n"}
            <i className="material-icons" aria-hidden="true">cake</i>{"\n"}
            <i className="material-icons" aria-hidden="true">mood</i>{"\n"}
            <i className="material-icons" aria-hidden="true">thumb_up_alt</i>{"\n"}
            <i className="material-icons" aria-hidden="true">whatshot</i>
        </ComponentPreview>
    </section>
);

const CardIcons = () => (
    <section>
        <h2 id="card-icons">Card icons</h2>
        <p>Card icons are typically used to show users which card providers that are available. The payment-card icon can be used as a placeholder and/or when the card is not recognized. </p>
        <table className="table table-plain">
            <thead>
                <tr>
                    <th>Icon</th>
                    <th>Card type</th>
                    <th>Code</th>
                </tr>
            </thead>
            <tbody>
                {tableData.cardIcons.map(icon => (
                    <tr key={icon.code}>
                        <td><IconPreview type="payment-icon" name={icon.code} /></td>
                        <td>{icon.title}</td>
                        <td><CodeTags type="secondary" code={icon.code}/></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
);

const PaymentIcons = () => (
    <section>
        <h2 id="payment-icons">Payment icons</h2>
        <p>Below is a list of payment icons that we use in our products. Be mindful when using payment logotypes. Try to make the payment icon feel more secondary in combination with the Swedbank Pay logotype. We always want the Swedbank Pay logotype to be primary.</p>

        <table className="table table-plain">
            <thead>
                <tr>
                    <th>Icon</th>
                    <th>Payment method</th>
                    <th>Code</th>
                </tr>
            </thead>
            <tbody>
                {tableData.paymentIcons.map(icon => (
                    <tr key={icon.code}>
                        <td><IconPreview type="payment-icon" name={icon.code} size="large"/></td>
                        <td>{icon.title}</td>
                        <td><CodeTags type="secondary" code={icon.code}/></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
);

const Flags = () => (
    <section>
        <h2 id="flags">Flags</h2>
        <p>Below is a list of flag icons that we use in our system, To use the flag icons add the classes <CodeTags type="secondary" code=".flag-icon"/> and  <CodeTags type="secondary" code=".flag-icon-xx"/>  (where xx is the ISO_3166-1-alpha-2-code of a country) to an empty <CodeTags type="secondary" code="<i>"/></p>
        <table className="table table-plain">
            <thead>
                <tr>
                    <th>Icon</th>
                    <th>Country</th>
                    <th>Code</th>
                </tr>
            </thead>
            <tbody>
                {tableData.flags.map(icon => (
                    <tr key={icon.code}>
                        <td><IconPreview type="flag-icon" name={icon.code} size="medium"/></td>
                        <td>{icon.title}</td>
                        <td><CodeTags type="secondary" code={icon.code}/></td>
                    </tr>
                ))}
            </tbody>
        </table>
        <ComponentPreview language="html" codeFigure >
            <i className="flag-icon flag-icon-no" aria-hidden="true"></i>{"\n"}
            <i className="flag-icon flag-icon-se" aria-hidden="true"></i>{"\n"}
            <i className="flag-icon flag-icon-dk" aria-hidden="true"></i>{"\n"}
            <i className="flag-icon flag-icon-fi" aria-hidden="true"></i>{"\n"}
            <i className="flag-icon flag-icon-eu" aria-hidden="true"></i>{"\n"}
        </ComponentPreview>

        <h3>Sizes</h3>
        <p>All size available for the flags are pre-defined and are shown below. Tiny is the default size and for example is used input fields. </p>
        <div className="d-flex justify-content-between align-items-end p-4">
            <IconPreview previewSize type="flag-icon" name="se" size="tiny" />
            <IconPreview previewSize type="flag-icon" name="no" size="small" />
            <IconPreview previewSize type="flag-icon" name="dk" size="medium" />
            <IconPreview previewSize type="flag-icon" name="fi" size="large" />
            <IconPreview previewSize type="flag-icon" name="eu" size="huge" />
        </div>
        <ComponentPreview language="html" codeFigure>
            <i className="flag-icon flag-icon-no flag-icon-tiny" aria-hidden="true"></i>{"\n"}
            <i className="flag-icon flag-icon-se flag-icon-small" aria-hidden="true"></i>{"\n"}
            <i className="flag-icon flag-icon-dk flag-icon-medium" aria-hidden="true"></i>{"\n"}
            <i className="flag-icon flag-icon-fi flag-icon-large" aria-hidden="true"></i>{"\n"}
            <i className="flag-icon flag-icon-eu flag-icon-huge" aria-hidden="true"></i>{"\n"}
        </ComponentPreview>

        <h3>Squared</h3>
        <p>All flags can be used in a square format. In the example we see squared flags in the size tiny. All predefined sizes are available in combination with <CodeTags type="secondary" code=".flag-icon-squared"/>. </p>
        <div className="d-flex justify-content-between align-items-end p-4">
            <IconPreview previewSize type="flag-icon" squaredFlag name="se" size="tiny" />
            <IconPreview previewSize type="flag-icon" squaredFlag name="no" size="small" />
            <IconPreview previewSize type="flag-icon" squaredFlag name="dk" size="medium" />
            <IconPreview previewSize type="flag-icon" squaredFlag name="fi" size="large" />
            <IconPreview previewSize type="flag-icon" squaredFlag name="eu" size="huge" />
        </div>
        <ComponentPreview language="html" codeFigure>
            <i className="flag-icon flag-icon-squared flag-icon-no flag-icon-tiny" aria-hidden="true"></i>{"\n"}
            <i className="flag-icon flag-icon-squared flag-icon-sv flag-icon-small" aria-hidden="true"></i>{"\n"}
            <i className="flag-icon flag-icon-squared flag-icon-dk flag-icon-medium" aria-hidden="true"></i>{"\n"}
            <i className="flag-icon flag-icon-squared flag-icon-fi flag-icon-large" aria-hidden="true"></i>{"\n"}
            <i className="flag-icon flag-icon-squared flag-icon-eu flag-icon-huge" aria-hidden="true"></i>{"\n"}
        </ComponentPreview>
    </section>
);

const Iconography = () => (
    <DocContainer>
        <p className="lead">
        At Swedbank Pay we use Material icons from Material Design, but we also include icons for well-known payment providers, and flags for most nations in the world. All icons are integraded and are available in HTML and CSS.
        </p>
        <MaterialIcons />
        <CardIcons />
        <PaymentIcons />
        <Flags />
    </DocContainer>
);

export default Iconography;

export { MaterialIcons, CardIcons, PaymentIcons, Flags };
