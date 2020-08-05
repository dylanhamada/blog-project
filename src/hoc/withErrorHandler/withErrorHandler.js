import React, { Component } from 'react';

import Aux from '../_Aux/_Aux';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Modal from '../../components/UI/Modal/Modal';

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

        render() {
            let errorModal = null;
            if (this.state.error) {
                errorModal = <Modal newStyle={{ top: "100px" }}>{this.state.error.message}</Modal>;
            }

            return (
                <Aux>
                    {errorModal}
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
};

export default withErrorhandler;