import {FormControl, InputAdornment, InputLabel, OutlinedInput} from "@material-ui/core"
import React, {ChangeEvent} from "react"

type InputValutaPropsType = {
    valuta: string
    inputValue: number
    setInputValue: (inputValue: number)=> void


}

const InputValuta = (props: InputValutaPropsType ) => {
    return <FormControl fullWidth variant="outlined" style={{width: "250px"}}>
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
            type="number"
            id="outlined-adornment-amount"
            value={props.inputValue}
            onChange={(event: ChangeEvent<HTMLInputElement>)=>props.setInputValue(Number(event.currentTarget.value))}
            startAdornment={<InputAdornment position="start">{props.valuta}</InputAdornment>}
            labelWidth={60}

        />
    </FormControl>
}

export default React.memo(InputValuta)