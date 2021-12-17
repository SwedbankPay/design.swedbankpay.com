import React, { useState } from "react";
import Button from "~/src/App/components/Button";

import "./filterDemonstration.less";

const FilterDemonstration = () => {
    const [showDemo, setShowDemo] = useState(true); // Change to false

    return (
        <>
            <div className={`filter-demonstration ${showDemo ? "show" : "hide"}`}>
                <section>
                    <Button label="Close demo" className="filter-demo-close-button" type="secondary" icon="fullscreen"></Button>
                    <div className="filer-demo-container">
                        <header className="filer-demo-header">Payments</header>
                        <div className="filters">
                            <p className="tempTest">Et filter</p>
                            <p className="tempTest">Et filter</p>
                            <p className="tempTest">Et filter</p>
                            <p className="tempTest">Et filter</p>
                            <p className="tempTest">Et filter</p>
                        </div>
                        <div className="table-demo">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Sven</td>
                                        <td>Svensson</td>
                                        <td>Visby</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Sara</td>
                                        <td>Svensson</td>
                                        <td>Stockholm</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Ola</td>
                                        <td>Nordmann</td>
                                        <td>Oslo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Holger</td>
                                        <td>Danske</td>
                                        <td>Copenhagen</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Matti</td>
                                        <td>Meikäläinen</td>
                                        <td>Lahti</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Sven</td>
                                        <td>Svensson</td>
                                        <td>Visby</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Sara</td>
                                        <td>Svensson</td>
                                        <td>Stockholm</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Ola</td>
                                        <td>Nordmann</td>
                                        <td>Oslo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Holger</td>
                                        <td>Danske</td>
                                        <td>Copenhagen</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Matti</td>
                                        <td>Meikäläinen</td>
                                        <td>Lahti</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default FilterDemonstration;
