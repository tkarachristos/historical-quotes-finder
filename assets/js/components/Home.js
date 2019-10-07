import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

export default function Home () {
    const [companySymbol, setCompanySymbol] = useState("");
    const [companySymbolValid, setCompanySymbolValid] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [startDateValid, setStartDateValid] = useState(true);
    const [endDate, setEndDate] = useState(new Date());
    const [endDateValid, setEndDateValid] = useState(true);
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(false);

    const handleChangeStartDate = (date) => {
        setStartDate(date);
    }

    const handleChangeEndDate = (date) => {
        setEndDate(date);
    }

    return (
        <div>
            <h2>Historical Quotes Finder</h2>

            <Form noValidate >
                <Form.Group controlId="formCompanySymbol">
                    <Form.Label>Company Symbol</Form.Label>
                    <Form.Control placeholder="Enter company symbol" />
                </Form.Group>

                <Form.Group controlId="formStartDate">
                    <Form.Label>Start Date</Form.Label>
                    <DatePicker id="startDate" selected={startDate} onChange={handleChangeStartDate} />
                </Form.Group>

                <Form.Group controlId="formEndDate">
                    <Form.Label>End Date</Form.Label>
                    <DatePicker id="endDate" selected={endDate} onChange={handleChangeEndDate} />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>           
        </div>
    )
}