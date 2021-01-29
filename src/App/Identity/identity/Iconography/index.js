import React from "react";
import * as tableData from "./constants";

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
            {tableData.materialIcons.map(icon => (
                <IconPreview key={icon} preview type="material-icons" name={icon} />
            ))}
        </div>
        <ComponentPreview language="html" codeFigure>
            {tableData.materialIcons.map(icon => (
                <React.Fragment key={icon}>
                    <i className="material-icons" aria-hidden="true">{icon}</i>{"\n"}
                </React.Fragment>
            ))}
        </ComponentPreview>
    </section>
);

const CardIcons = () => (
    <section>
        <h2 id="card-icons">Card icons</h2>
        <p>Card icons are typically used to show users which card providers that are available. The payment-card icon can be used as a placeholder and/or when the card is not recognized. </p>

        <h3>Example of how to implement card icons</h3>
        <p>To use an icon, provide the following markup: <CodeTags type="primary" code={"<i class=\"payment-icon payment-icon-{icon-name}\" aria-hidden=\"true\" /i>"} /></p>

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
        <ComponentPreview language="html" codeFigure>
            {tableData.cardIcons.map(icon => (
                <React.Fragment key={icon.code}>
                    <i className={`payment-icon payment-icon-${icon.code}`} aria-hidden="true" />{"\n"}
                </React.Fragment>
            ))}
        </ComponentPreview>
    </section>
);

const PaymentIcons = () => (
    <section>
        <h2 id="payment-icons">Payment icons</h2>
        <p>Below is a list of payment icons that we use in our products. Be mindful when using payment logotypes. Try to make the payment icon feel more secondary in combination with the Swedbank Pay logotype. We always want the Swedbank Pay logotype to be primary.</p>

        <h3>Example of how to implement payment icons</h3>
        <p>To use an icon, provide the following markup: <CodeTags type="primary" code={"<i class=\"payment-icon payment-icon-{icon-name}\" aria-hidden=\"true\" /i>"} /></p>

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
        <ComponentPreview language="html" codeFigure>
            {tableData.paymentIcons.map(icon => (
                <React.Fragment key={icon.code}>
                    <i className={`payment-icon payment-icon-${icon.code}`} aria-hidden="true" />{"\n"}
                </React.Fragment>
            ))}
        </ComponentPreview>
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
            {tableData.flags.map(flag => (
                <React.Fragment key={flag.code}>
                    <i className={`flag-icon flag-icon-${flag.code}`} aria-hidden="true" />{"\n"}
                </React.Fragment>
            ))}
        </ComponentPreview>

        <h3>Sizes</h3>
        <p>All size available for the flags are pre-defined and are shown below. Tiny is the default size and for example is used input fields. </p>
        <div className="d-flex justify-content-between align-items-end p-4">
            {tableData.flags.map((flag, i) => (
                <React.Fragment key={flag.code}>
                    <IconPreview previewSize type="flag-icon" name={flag.code} size={tableData.flagSizes[i]} />{"\n"}
                </React.Fragment>
            ))}
        </div>
        <ComponentPreview language="html" codeFigure>
            {tableData.flags.map((flag, i) => (
                <React.Fragment key={flag.code}>
                    <i className={`flag-icon flag-icon-${flag.code} flag-icon-${tableData.flagSizes[i]}`} aria-hidden="true" />{"\n"}
                </React.Fragment>
            ))}
        </ComponentPreview>

        <h3>Squared</h3>
        <p>All flags can be used in a square format. In the example we see squared flags in the size tiny. All predefined sizes are available in combination with <CodeTags type="secondary" code=".flag-icon-squared"/>. </p>
        <div className="d-flex justify-content-between align-items-end p-4">
            {tableData.flags.map((flag, i) => (
                <React.Fragment key={flag.code}>
                    <IconPreview previewSize type="flag-icon" squaredFlag name={flag.code} size={tableData.flagSizes[i]} />
                </React.Fragment>
            ))}
        </div>
        <ComponentPreview language="html" codeFigure>
            {tableData.flags.map((flag, i) => (
                <React.Fragment key={flag.code}>
                    <i className={`flag-icon flag-icon-squared flag-icon-${flag.code} flag-icon-${tableData.flagSizes[i]}`} aria-hidden="true" />{"\n"}
                </React.Fragment>
            ))}
        </ComponentPreview>
    </section>
);

const Iconography = () => (
    <DocContainer>
        <p className="lead">
        At Swedbank Pay we use Material icons from Material Design, but we also include icons for well-known payment providers, and flags for most nations in the world. All icons are integrated and are available in HTML and CSS.
        </p>
        <MaterialIcons />
        <CardIcons />
        <PaymentIcons />
        <Flags />
    </DocContainer>
);

export default Iconography;

export { MaterialIcons, CardIcons, PaymentIcons, Flags };
