import React, { useEffect } from "react";
import ButtonComponent from "@components/Button";
import InputGroup from "@components/InputGroup";
import Sheet from "@components/Sheet";
import { sheet } from "@src/scripts/main";

const payments = [
    {
        referenceNumber: 10022,
        amount: 16,
        paymentMethod: "Invoice",
        status: "Successful",
        operation: "Purchase"
    },
    {
        referenceNumber: 10021,
        amount: 0,
        paymentMethod: "Swish",
        status: "Failed",
        operation: "Verify"
    },
    {
        referenceNumber: 10020,
        amount: 75,
        paymentMethod: "Card",
        status: "Successful",
        operation: "Purchase"
    },
    {
        referenceNumber: 10019,
        amount: 840,
        paymentMethod: "Card",
        status: "Cancelled",
        operation: "Purchase"
    },
    {
        referenceNumber: 10018,
        amount: 123,
        paymentMethod: "Swish",
        status: "Successful",
        operation: "Purchase"
    },
    {
        referenceNumber: 10017,
        amount: 432,
        paymentMethod: "Invoice",
        status: "Failed",
        operation: "Purchase"
    },
    {
        referenceNumber: 10016,
        amount: 0,
        paymentMethod: "Card",
        status: "Successful",
        operation: "Purchase"
    },
    {
        referenceNumber: 10015,
        amount: 56777,
        paymentMethod: "Swish",
        status: "Failed",
        operation: "Purchase"
    },
    {
        referenceNumber: 10014,
        amount: 65,
        paymentMethod: "Swish",
        status: "Successful",
        operation: "Verify"
    },
    {
        referenceNumber: 10013,
        amount: 677,
        paymentMethod: "Card",
        status: "Cancelled",
        operation: "Verify"
    },
    {
        referenceNumber: 10012,
        amount: 690,
        paymentMethod: "Invoice",
        status: "Successful",
        operation: "Verify"
    },
    {
        referenceNumber: 10011,
        amount: 86,
        paymentMethod: "Swish",
        status: "Successful",
        operation: "Purchase"
    },
    {
        referenceNumber: 10010,
        amount: 567,
        paymentMethod: "Card",
        status: "Successful",
        operation: "Purchase"
    },
    {
        referenceNumber: 10009,
        amount: 443,
        paymentMethod: "Invoice",
        status: "Failed",
        operation: "Verify"
    },
    {
        referenceNumber: 10008,
        amount: 33345,
        paymentMethod: "Card",
        status: "Successful",
        operation: "Purchase"
    },
    {
        referenceNumber: 10007,
        amount: 567000,
        paymentMethod: "Card",
        status: "Cancelled",
        operation: "Verify"
    },
    {
        referenceNumber: 10006,
        amount: 33345,
        paymentMethod: "Card",
        status: "Successful",
        operation: "Purchase"
    },
    {
        referenceNumber: 10005,
        amount: 5600,
        paymentMethod: "Card",
        status: "Cancelled",
        operation: "Successful"
    }
];

const FilterDemonstration = ({ type }) => {

    useEffect(() => {
        sheet.init();
    });

    return (
        <>
            <div className="filter-demonstration">
                <h3 className="mb-4 container">Payments ({payments.length})</h3>
                <div className={`filter-container container d-flex ${type === "vertical" ? " flex-row" : "flex-column"}`}>
                    <div className={`filter-types-container d-flex ${type === "vertical" ? " flex-column  col-3" : " flex-row"}`}>
                        {type === "sheet" ?
                            <>
                                <InputGroup size type="text" placeholder="Search reference number " prefixValue="search" prefixType="icon"/>
                                <button id="open-demo" className="btn btn-secondary" type="button" data-sheet-open="sheet_example"><i className="material-icons pr-1" aria-hidden="true">filter_alt</i>{"\n"}Filters{"\n"}</button>
                                <Sheet id="sheet_example">
                                    <h1>Filters</h1>
                                    <div className=" d-flex flex-column">
                                        <InputGroup size type="text" placeholder="Search reference number " prefixValue="search" prefixType="icon"/>
                                        <ButtonComponent type="primary" label="Do something" />
                                        <ButtonComponent type="primary" label="Do something" />
                                        <ButtonComponent type="primary" label="Do something" />
                                    </div>
                                </Sheet>
                            </>
                            :
                            <>
                                <InputGroup size type="text" placeholder="Search reference number " prefixValue="search" prefixType="icon"/>
                                <ButtonComponent type="primary" label="Do something" />
                                <ButtonComponent type="primary" label="Do something" />
                                <ButtonComponent type="primary" label="Do something" />
                            </>
                        }
                    </div>
                    <table className={`table ${type === "vertical" ? "col-9" : ""}`}>
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
                            {payments.map(item => <tr key={item.referenceNumber}>
                                <td>{item.referenceNumber}</td>
                                <td>{item.amount}</td>
                                <td>{item.paymentMethod}</td>
                                <td>{item.status}</td>
                                <td>{item.operation}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default FilterDemonstration;
