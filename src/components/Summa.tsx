import React from "react"

type SummaPropsType ={
    inputValutaValue: number
    valuta: string
}

const Summa = (props: SummaPropsType) => {
    return <h2>{props.inputValutaValue?props.inputValutaValue : 0}({props.valuta})</h2>
}

export default React.memo(Summa)