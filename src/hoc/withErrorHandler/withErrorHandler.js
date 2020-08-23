import React, { Component } from 'react';

import Aux from '../_Aux/_Aux';
import Modal from '../../components/Layout/Modal/Modal';

const withErrorhandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentDidMount() {
            axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            });
        }

        errorCloseHandler = () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} closeModal={this.errorCloseHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
};

export default withErrorhandler;