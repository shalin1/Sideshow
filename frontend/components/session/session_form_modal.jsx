import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SessionForm from './session_form';
import SigninForm from './signin_form';
import SigninFormContainer from './signin_form_container';

class sessionModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: true
		};
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
		this.setState({ isOpen: true });
	}

	closeModal() {
		this.props.history.push('/');
		this.setState({ isOpen: false });
	}

	render() {
		let form;
		if (this.props.formType === 'Sign Up') {
			form = (
				<SessionForm
					validEmail={this.props.validEmail}
					history={this.props.history}
					action={this.props.action}
					errors={this.props.errors}
					formType={this.props.formType}
					resetErrors={this.props.resetErrors}
					ui={this.props.ui}
					currentUser={this.props.currentUser}
				/>
			);
		} else if (this.props.formType === 'Login') {
			form = (
				<SessionForm
					validEmail={this.props.validEmail}
					history={this.props.history}
					action={this.props.action}
					errors={this.props.errors}
					formType={this.props.formType}
					resetErrors={this.props.resetErrors}
					ui={this.props.ui}
					currentUser={this.props.currentUser}
				/>
			);
		} else {
			form = (
				<SigninFormContainer
					ui={this.props.ui}
					errors={this.props.errors}
					resetErrors={this.props.resetErrors}
					demoLogin={this.props.demoLogin}
					currentUser={this.props.currentUser}
				/>
			);
		}

		return (
			<div>
				<Modal
					className="Modal"
					ariaHideApp={false}
					overlayClassName="Overlay"
					isOpen={this.state.isOpen}
					onRequestClose={this.closeModal}
					afterOpen={this.afterOpen}
					contentLabel="Sign In">
					<div onClick={this.closeModal}>
						<span className="close-modal">X</span>
					</div>

					{form}
				</Modal>
			</div>
		);
	}
}

export default sessionModal;
