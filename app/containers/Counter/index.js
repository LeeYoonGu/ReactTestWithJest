
/**
 * 테스트 페이지 입니다.
 */

// region NPM 라이브러리 import

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

// endregion

// Redux 관련 유틸 import
import injectReducer from '../../utils/injectReducer';
import reducer from './reducer';

// Actions
import { addNumber, subNumber } from './actions';

// Selector
import { makeSelectCounter } from './selectors';

import './Counter.css';

export class Counter extends React.PureComponent {
    render() {
        const {
            onAddNumber, onSubNumber, counter
        } = this.props;


        return (
            <div>
                <Helmet>
                    <title>Jest : Counter</title>
                    <meta name="description" content="Counter" />
                </Helmet>

                <div className="backButton">
                    <Link to="/">
                        <i className="fa fa-arrow-left fa-3x" />
                    </Link>
                </div>
                <div className="counter">
                    {counter}
                </div>
                <div className="btnGroup">
                    <button className="btn" onClick={onAddNumber}>
                        <i className="fa fa-plus" />
                    </button>
                    <button className="btn" onClick={onSubNumber}>
                        <i className="fa fa-minus" />
                    </button>
                </div>
            </div>
        );
    }
}

/**
 * PropType 정의
 */
Counter.propTypes = {
    // Value Props
    counter: PropTypes.number,

    // Functions Props
    onAddNumber: PropTypes.func,
    onSubNumber: PropTypes.func,
};

/**
 * mapDispatchToProps
 */
export function mapDispatchToProps(dispatch) {
    return {
        onAddNumber: () => dispatch(addNumber()),
        onSubNumber: () => dispatch(subNumber()),
    };
}

/**
 * mapStateToProps
 */
const mapStateToProps = createStructuredSelector({
    counter: makeSelectCounter(),
});

/**
 * 프로퍼티 바인딩
 */
const withConnect = connect(mapStateToProps, mapDispatchToProps);

/**
 * 리듀서
 */
const withReducer = injectReducer({ key: 'counter', reducer });


/**
 * compose
 */
export default compose(
    withReducer,
    withConnect,
)(Counter);
