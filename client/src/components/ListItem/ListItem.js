import React from 'react';
import styles from './ListItem.module.sass';
import {connect} from 'react-redux';

class ListItem extends React.Component {
    /**
     *
     * @description Creates prices list element
     * @return {JSX.Element} - Prices list element
     */
    renderCurrencyItem = () => {
        const {ticker, price, change, change_percent, last_trade_time, dividend} = this.props.data;
        return (
            <div className={styles.priceMainContainer}>
                <div className={styles.descriptionContainer}>
                    <span className={styles.title}>{ticker}</span>
                    <span className={styles.title}>{price}</span>
                    <span className={styles.title}>{change}</span>
                    <span className={styles.title}>{change_percent}</span>
                    <span className={styles.title}>{dividend}</span>
                    <span className={styles.title}>{last_trade_time}</span>
                </div>
            </div>
        );
    };

    render() {
        return (
            <>
                {this.renderCurrencyItem()}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return state.pricesStore;
};

export default connect(mapStateToProps, null)(ListItem);
