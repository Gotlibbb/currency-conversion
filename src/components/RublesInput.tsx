import React from "react"
import InputValuta from "./assets/InputValuta";

type RublesInputPropsType = {
    rubles: number
    setRubles: (rubles: number) => void
    setInputValutaValue: (inputValutaValue: number) => void
    inputValutaValue: number
    rates: { [key: string]: number }
    valuta: string
}

const RublesInput = (props: RublesInputPropsType) => {


    return <InputValuta
        valuta={"RUB"}
        inputValue={props.rubles}
        setInputValue={props.setRubles}
    />
}

export default React.memo(RublesInput)