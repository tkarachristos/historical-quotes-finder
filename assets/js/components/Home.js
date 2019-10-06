import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>Yo yo Theofilos - welcome to Encore!</h3>

                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                </Form>
            </div>
        )
    };
}