import React, {useEffect, useState} from "react"
import classes from "../App.module.css";
import RublesInput from "./RublesInput";
import ResultInput from "./ResultInput";
import Summa from "./Summa";
import {conversionApi} from "../dal/conversionApi";

const CurrencyContainer = () => {

    let [rates, setRates] = useState<{ [key: string]: number }>({})


    let [valuta, setValuta] = useState<string>("USD")
    let [rubles, setRubles] = useState<number>(0)
    let [inputValutaValue, setInputValutaValue] = useState<number>(0)
    useEffect(() => {
        conversionApi.getCurrentCurrency().then(res => setRates(res.rates))

        setInputValutaValue(Number((rubles * rates[valuta]).toFixed(2)))


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