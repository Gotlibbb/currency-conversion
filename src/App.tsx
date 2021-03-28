import React, {useEffect} from 'react';
import classes from './App.module.css';
import CurrencyContainer from "./components/CurrencyContainer";
import {conversionApi} from "./dal/conversionApi";

const App = () => {


    return <div className={classes.conversionContainer}>

        <div className={classes.conversionContainer__titleBlock}>
            <h1 className={classes.conversionContainer__titleBlock__title}>
                Currency Conversion
            </h1>
        </div>

        <CurrencyContainer/>


    </div>;
}

export default React.memo(App);
