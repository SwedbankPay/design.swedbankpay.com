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
    id: "overviewSlabs",
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
            title: "Overview slabs",
            description: "Slab component is basically a content frame which is used as graphic element background in order to display different types of content on it surface. Slab component uses drop shadows to be more visible and noticeable on the UI. Drop shadows can be an amazing way to add depth and emphasis to your designs, creating an image of floating UI elements. Shadows are a way of creating a container for content without making it feel boxed in."
        }
    ]
};
