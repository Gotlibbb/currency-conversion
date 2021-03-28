import React, {useEffect, useState} from "react"
import classes from "../App.module.css";
import RublesInput from "./RublesInput";
import ResultInput from "./ResultInput";
import Summa from "./Summa";
import {conversionApi} from "../dal/conversionApi";

const CurrencyContainer = () => {

    let [rates, setRates] = useState<{ [key: string]: number }| null>(null)


    let [valuta, setValuta] = useState<string>("USD")
    let [rubles, setRubles] = useState<number|null>(0)
    let [inputValutaValue, setInputValutaValue] = useState<number| null>(0)

    inputValutaValue===0&& setInputValutaValue(null)
    rubles===0&& setRubles(null)

    useEffect(() => {
        rates === null && conversionApi.getCurrentCurrency().then(res => setRates(res.rates))

        setInterval(() => conversionApi.getCurrentCurrency().then(res => setRates(res.rates)), 10000)

        if (rates) {
            setInputValutaValue(Number(((rubles || 0) * (rates[valuta])).toFixed(2)))
        }


    }, [valuta, rubles, rates])


    return <>

        <div className={classes.conversionContainer__inputBlock}>
            <div className={classes.conversionContainer__inputBlock__input}>
                <RublesInput
                    rubles={rubles}
                    setRubles={setRubles}
                    inputValutaValue={inputValutaValue}
                    rates={rates}
                    setInputValutaValue={setInputValutaValue}
                    valuta={valuta}
                />
            </div>
            <span className={classes.conversionContainer__inputBlock__span}>⇆</span>
            <div className={classes.conversionContainer__inputBlock__input}>
                <ResultInput
                    valuta={valuta}
                    inputValutaValue={inputValutaValue}
                    setInputValutaValue={setInputValutaValue}
                    setValuta={setValuta}
                    rubles={rubles}
                    rates={rates}
                    setRubles={setRubles}
                />
            </div>
        </div>

        <div className={classes.conversionContainer__summaBlock}>
            <Summa
                inputValutaValue={inputValutaValue}
                valuta={valuta}
            />
        </div>

    </>
}

export default React.memo(CurrencyContainer)