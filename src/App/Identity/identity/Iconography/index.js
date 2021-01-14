import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import IconPreview from "@components/IconPreview";
import CodeTags from "@components/CodeTags";

const MaterialIcons = () => (
    <section>
        <h2>Material Rounded Icons</h2>
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
        <h2>Card icons</h2>
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
                <tr>
                    <td><IconPreview type="payment-icon" name="payment-card" /></td>
                    <td>Payment card</td>
                    <td><CodeTags type="secondary" code="payment-card"/></td>
                </tr>
                <tr>
                    <td><IconPreview type="payment-icon" name="amex" /></td>
                    <td>American Express</td>
                    <td><CodeTags type="secondary" code="amex"/></td>
                </tr>
                <tr>
                    <td><IconPreview type="payment-icon" name="bank-axept" /></td>
                    <td>Bank Accept</td>
                    <td><CodeTags type="secondary" code="bank-axept"/></td>
                </tr>
                <tr>
                    <td><IconPreview type="payment-icon" name="coop" /></td>
                    <td>Coop</td>
                    <td><CodeTags type="secondary" code="coop"/></td>
                </tr>
                <tr>
                    <td><IconPreview type="payment-icon" name="dankort" /></td>
                    <td>Dankort</td>
                    <td><CodeTags type="secondary" code="dankort"/></td>
                </tr>
                <tr>
                    <td><IconPreview type="payment-icon" name="diners" /></td>
                    <td>Diners Club</td>
                    <td><CodeTags type="secondary" code="diners"/></td>
                </tr>
                <tr>
                    <td><IconPreview type="payment-icon" name="finax" /></td>
                    <td>Finax</td>
                    <td><CodeTags type="secondary" code="finax"/></td>
                </tr>
                <tr>
                    <td><IconPreview type="payment-icon" name="forbrugsforeningen" /></td>
                    <td>Forbrugsforeningen</td>
                    <td><CodeTags type="secondary" code="forbrugsforeningen"/></td>
                </tr>
                <tr>
                    <td><IconPreview type="payment-icon" name="ica" /></td>
                    <td>ICA</td>
                    <td><CodeTags type="secondary" code="ica"/></td>
                </tr>
                <tr>
                    <td><IconPreview type="payment-icon" name="ica-banken" /></td>
                    <td>ICA Banken</td>
                    <td><CodeTags type="secondary" code="ica-banken"/></td>
                </tr>
                <tr>
                    <td><IconPreview type="payment-icon" name="ikano-bank" /></td>
                    <td>Ikano Bank</td>
                    <td><CodeTags type="secondary" code="ikano-bank"/></td>
                </tr>
                <tr>
                    <td><IconPreview type="payment-icon" name="jcb" /></td>
                    <td>JCB</td>
                    <td><CodeTags type="secondary" code="jcb"/></td>
                </tr>
                <tr>
                    <td><IconPreview type="payment-icon" name="lindex" /></td>
                    <td>Lindex</td>
                    <td><CodeTags type="secondary" code="lindex"/></td>
                </tr>
                <tr>
                    <td><IconPreview type="payment-icon" name="maestro" /></td>
                    <td>Maestro</td>
                    <td><CodeTags type="secondary" code="maestro"/></td>
                </tr>
                <tr>
                    <td><IconPreview type="payment-icon" name="mastercard" /></td>
                    <td>Mastercard</td>
                    <td><CodeTags type="secondary" code="mastercard"/></td>
                </tr>
                <tr>
                    <td><IconPreview type="payment-icon" name="visa" /></td>
                    <td>Visa</td>
                    <td><CodeTags type="secondary" code="visa"/></td>
                </tr>
            </tbody>
        </table>
    </section>
);

const PaymentIcons = () => (
    <section>
        <h2>Payment icons</h2>
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
                <tr>
                    <td><IconPreview type="payment-icon" name="viabill" size="large" /></td>
                    <td>Viabill</td>
                    <td><CodeTags type="secondary" code="viabill"/></td>
                </tr>
                <tr>
                    <td><IconPreview type="payment-icon" name="vipps" size="large" /></td>
                    <td>Vipps</td>
                    <td><CodeTags type="secondary" code="vipps"/></td>
                </tr>
                <tr>
                    <td><IconPreview type="payment-icon" name="swish" size="large" /></td>
                    <td>Swish</td>
                    <td><CodeTags type="secondary" code="swish"/></td>
                </tr>
                <tr>
                    <td><IconPreview type="payment-icon" name="mobilpay" size="large" /></td>
                    <td>MobilPay</td>
                    <td><CodeTags type="secondary" code="mobilpay"/></td>
                </tr>
                <tr>
                    <td><IconPreview type="payment-icon" name="carpay" size="large" /></td>
                    <td>CarPay</td>
                    <td><CodeTags type="secondary" code="carpay"/></td>
                </tr>
                <tr>
                    <td><IconPreview type="payment-icon" name="trustly" size="large" /></td>
                    <td>Trustly</td>
                    <td><CodeTags type="secondary" code="trustly"/></td>
                </tr>
            </tbody>
        </table>
    </section>
);

const Flags = () => (
    <section>
        <h2>Flags</h2>
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
                <tr>
                    <td><IconPreview type="flag-icon" name="no" size="medium" /></td>
                    <td>Norway</td>
                    <td><CodeTags type="secondary" code="no"/></td>
                </tr>
                <tr>
                    <td><IconPreview type="flag-icon" name="se" size="medium" /></td>
                    <td>Sweden</td>
                    <td><CodeTags type="secondary" code="se"/></td>
                </tr>
                <tr>
                    <td><IconPreview type="flag-icon" name="dk" size="medium" /></td>
                    <td>Denmark</td>
                    <td><CodeTags type="secondary" code="dk"/></td>
                </tr>
                <tr>
                    <td><IconPreview type="flag-icon" name="fi" size="medium" /></td>
                    <td>Finland</td>
                    <td><CodeTags type="secondary" code="fi"/></td>
                </tr>
                <tr>
                    <td><IconPreview type="flag-icon" name="eu" size="medium" /></td>
                    <td>EU</td>
                    <td><CodeTags type="secondary" code="eu"/></td>
                </tr>
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
