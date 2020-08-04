import React, { Component } from 'react';

import Aux from '../_Aux/_Aux';
import Modal from '../../components/UI/Modal/Modal';

const withErrorhandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentDidMount() {
            console.log('componentDidMount');
            axios.interceptors.request.use(req => {
                console.log('request interceptor');
                this.setState({ error: null });
                return req;
            });
            axios.interceptors.response.use(res => res, error => {
                console.log('response error interceptor');
                this.setState({ error: error });
            });
        }

        componentDidUpdate() {
            console.log('componentDidUpdate');
            console.log(this.state.error + ' componentDidUpdate');
        }

        render() {
            let errorModal = <h1>Error Modal Works</h1>;
            if (this.state.error) {
                errorModal = <h1>Yup! Error!</h1>;
            }

            return (
                <Aux>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
};

export default withErrorhandler;