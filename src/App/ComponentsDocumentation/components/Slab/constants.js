import React from "react";

const basename = process.env.basename;

const Slab = () => (
    <div className="slab slab-default">
        <p>Do you want to sign up for the slab mailing list?</p>
        <form action="#" noValidate data-validate>
            <div className="form-group">
                <label htmlFor="validation-email-2">Email</label>
                <div className="input-group">
                    <span className="input-group-addon"><i className="material-icons" aria-hidden="true">email</i></span>
                    <input type="email" className="form-control" id="validation-email-2" placeholder="bob.corlsan@example.com" required />
                </div>
                <div className="help-block" data-success="Right!" data-error="Wrong!">This one might be a little tricky</div>
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    </div>
);

export const overviewSlabs = {
    id: "overviewCards",
    tabsId: "overviewButtonsTabs",
    elements: [
        {
            component: <Slab/>,
            options: {
                radio: [
                    {
                        id: "shadow-type",
                        title: "Shadow type",
                        values: [
                            {
                                name: "Drop shadow 15%",
                                value: {
                                    // icon: null
                                }
                            },
                            {
                                name: "Drop shadow 25%",
                                default: true,
                                value: {
                                    // icon: <i className="material-icons material-icons-outlined" aria-hidden="true">shopping_basket</i>
                                }
                            },
                            {
                                name: "Without shadow",
                                value: {
                                    // imgSrc: `${basename}img/documentation/cards/img-example.png`,
                                    // icon: null
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Standard cards",
            description: "The standard card component can be customized either icon or picture in order to make it easier for users to scan the content. Mixing simple card without icon should mostly be done when separating the cards functionality such as when there are more cards to be displayed or when appropriate icons can not be found."
        }
    ]
};
