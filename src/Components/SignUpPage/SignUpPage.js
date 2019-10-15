import React, { Component } from 'react';
import { Card, Form, InputGroup } from 'react-bootstrap';

/**
 *
 *
 * @export
 * @class SignUpForm
 * @extends {Component}
 */
export class SignUpPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Card>
				<Card.Body className="register-card-body">
					<p className="login-box-msg">Registration form for new members</p>
					<Form>
						<InputGroup className="mb-3">
							<input
								placeholder="Full name"
								required
								className="form-control"
								defaultValue="fullName"
							/>
							<InputGroup.Append>
								<InputGroup.Text>
									<span className="fa fa-user"></span>
								</InputGroup.Text>
							</InputGroup.Append>
						</InputGroup>
					</Form>
				</Card.Body>
			</Card>
		);
	}
}
