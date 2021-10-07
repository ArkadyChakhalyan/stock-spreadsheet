import React, { useEffect, useState, Fragment } from 'react';
import { Spinner, Tabs } from '../../../../ui/';
import { Route, Switch, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Monthly } from './monthly';
import { Yearly } from './yearly';
import styles from './dividends-period.module.css';

/**
 * Dividends by month/year chart.
 * @param {object} props - Props.
 * @param {boolean} props.empty - True if there is no dividend data in redux state.
 * @param {Array} props.dividends - Dividend data from redux state.
 * @returns {Element} DividendsPeriod component.
 */
export const DividendsPeriod = ({ empty, dividends }) => {

    let [loading, setLoading] = useState(true);

    const load = () => {
        setTimeout(() => {
            setLoading(false)
        }, 400);
        return <Spinner />;
    };

    const history = useHistory();

    useEffect(() => {
        setLoading(true);
        history.replace('/dividends/');
    }, [dividends])

    const content = empty ?
        <p className={styles.text}>Add dividends that you have recieved recently, to start seeing more data</p>
        :
        loading ? load()
            :
            (<Fragment>
                <span className={styles.switch}>
                    <Tabs options={['monthly', 'yearly']} small />
                </span>
                <h2 className={styles.title}>dividends recieved</h2>
                <Switch>
                    <Route path='/(dividends/monthly|dividends/)'>
                        <Monthly data={dividends} />
                    </Route>
                    <Route path='/dividends/yearly'>
                        <Yearly data={dividends} />
                    </Route>
                </Switch>
            </Fragment >)

    return (
        <div className={styles.container}>
            {content}
        </div>
    );
}

DividendsPeriod.propTypes = {
    empty: PropTypes.bool,
    dividends: PropTypes.array
}