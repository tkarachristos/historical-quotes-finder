import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            companySymbol: "",
            companySymbolValid: false,
            startDate: new Date(),
            startDateValid: true,
            endDate: new Date(),
            endDateValid: true,
            email: "",
            emailValid: false
        };

        this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
        this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
    }

    handleChangeStartDate(date) {
        this.setState({
            startDate: date // ISO String, ex: "2016-11-19T12:00:00.000Z"
        });
    }

    handleChangeEndDate(date) {
        this.setState({
            endDate: date // ISO String, ex: "2016-11-19T12:00:00.000Z"
        });
    }

    render() {
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
                        <DatePicker id="startDate" selected={this.state.startDate} onChange={this.handleChangeStartDate} />
                    </Form.Group>

                    <Form.Group controlId="formEndDate">
                        <Form.Label>End Date</Form.Label>
                        <DatePicker id="endDate" selected={this.state.endDate} onChange={this.handleChangeEndDate} />
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
    };
}