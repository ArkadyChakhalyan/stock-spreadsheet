import React, { useEffect, useState } from 'react';
import { Spinner, Tabs } from '../../../../ui/';
import { Route, Switch, useHistory } from 'react-router-dom';
import styles from './dividends-period.module.css';
import { Fragment } from 'react';
import { Monthly } from './monthly';
import { Yearly } from './yearly';

/**
 * Dividends by month/year chart.
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
                        <Monthly dividends={dividends} />
                    </Route>
                    <Route path='/dividends/yearly'>
                        <Yearly dividends={dividends} />
                    </Route>
                </Switch>
            </Fragment >)

    return (
        <div className={styles.container}>
            {content}
        </div>
    );
}