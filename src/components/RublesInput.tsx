import React from "react"
import InputValuta from "./assets/InputValuta";

type RublesInputPropsType = {
    rubles: number | null
    setRubles: (rubles: number| null) => void
    setInputValutaValue: (inputValutaValue: number| null) => void
    inputValutaValue: number| null
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