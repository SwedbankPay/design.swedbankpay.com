import React from "react";
import ButtonComponent from "@components/Button";
import InputGroup from "@components/InputGroup";

const payments = [
    {
        referenceNumber: 10022,
        amount: 567,
        paymentMethod: "Swish",
        status: "Successful",
        operation: "Purchase"
    },
    {
        referenceNumber: 10022,
        amount: 567,
        paymentMethod: "Swish",
        status: "Successful",
        operation: "Purchase"
    },
    {
        referenceNumber: 10022,
        amount: 567,
        paymentMethod: "Swish",
        status: "Successful",
        operation: "Purchase"
    },
    {
        referenceNumber: 10022,
        amount: 567,
        paymentMethod: "Swish",
        status: "Successful",
        operation: "Purchase"
    }
];

const FilterDemonstration = type => (
    <>
        <div className="filter-demonstration">
            <h3 className="mb-4">Payments ({payments.length})</h3>
            <div className="d-flex flex-row">
                <InputGroup placeholder="Search reference number " prefixValue="search" prefixType="icon"/>
                <ButtonComponent type="primary" label="Do something" />
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Reference number</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Payment method</th>
                        <th scope="col">Status</th>
                        <th scope="col">Operation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Sven</td>
                        <td>Svensson</td>
                        <td>Visby</td>
                        <td>Visby</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Sven</td>
                        <td>Svensson</td>
                        <td>Visby</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Sven</td>
                        <td>Svensson</td>
                        <td>Visby</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Sven</td>
                        <td>Svensson</td>
                        <td>Visby</td>
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

                </tbody>
            </table>
        </div>
    </>
);

export default FilterDemonstration;
