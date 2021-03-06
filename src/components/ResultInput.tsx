import React, {useCallback} from "react"
import InputValuta from "./assets/InputValuta"
import SelectCurrency from "./assets/SelectCurrency"

type ResultInputPropsType = {
    setInputValutaValue: (inputValutaValue: number | null) => void
    inputValutaValue: number| null
    setValuta: (valuta: string) => void
    valuta: string
    rubles: number| null
    rates: { [key: string]: number } | null
    setRubles: (rubles: number| null) => void
}

const ResultInput = (props: ResultInputPropsType) => {

    const onChangeHandler = useCallback((inputValutaValue : number | null) => {
        props.rates && props.setRubles(Number(((inputValutaValue || 0) / props.rates[props.valuta]).toFixed(2)))
        props.setInputValutaValue(inputValutaValue)
    },[props.setRubles,props.rates, props.valuta , props.setInputValutaValue])

    return <div>

        <InputValuta
            valuta={props.valuta}
            setInputValue={onChangeHandler}
            inputValue={props.inputValutaValue}

        />
        <SelectCurrency
            currency={props.valuta}
            setCurrency={props.setValuta}
            rates={props.rates}
        />

    </div>
}

export default React.memo(ResultInput)