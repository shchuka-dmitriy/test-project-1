import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
// eslint-disable-next-line no-unused-vars
import styles from '../../styles/CurrencyList.scss';
import {getPricesAction} from '../../actions/actionCreator';
import Spinner from '../Spinner/Spinner';
import TryAgain from '../TryAgain/TryAgain';
// eslint-disable-next-line no-unused-vars
import classNames from 'classnames';

const stockSymbol1 = ['Euro', 'USD', 'Rub'];

const CurrencyList = (props) => {
    // const [pricesData, setPricesData] = useState(props.prices);

    /**
     *
     * @description Get new prices data from server
     */
    const {getPrices} = props;

    useEffect(() => {
        getPrices(stockSymbol1);
    });

    /**
     * @description Create list of html elements
     * @return {void[]}
     */
    const setPricesList = () => {
        const { prices } = props;

        // For example
        const pricesList = [];
        for(const item of prices.values()) {
            pricesList.push(
                <div key={item.price + 1}>PRICE: {item.price}</div>
            );
        }

        return pricesList;

        // This cool
        // return [...prices.values()].map( (priceItem) =>
        //     <ListItem id={priceItem.last_trade_time.parse('YYYY-MM-DDT:HH:mm:ss.sss')} key={priceItem.price + 1} data={priceItem}/>
        // );
    };

    const show = () => {
        setPricesList();
    };

    const { error, isFetching } = props;

    return (
        <>
             <div className={styles.mainInfoContainer}>
                {error ? <div className={styles.tryContainer}><TryAgain getData={getPrices()}/></div> :
                    (
                        <div className={styles.superheroesContainerWrapper}>
                            {
                                isFetching
                                    ?
                                    <div className={styles.containerSpinner}>
                                        <Spinner/>
                                    </div>
                                    :
                                    <>
                                        {setPricesList()}
                                    </>
                            }
                        </div>
                    )
                }
             </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return state.pricesStore;
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPrices: (stockSymbol) => dispatch(getPricesAction(stockSymbol)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyList);
