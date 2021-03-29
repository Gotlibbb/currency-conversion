import React from "react"
import {MenuItem, TextField} from "@material-ui/core";

type SelectCurrencyPropsType = {
    currency: string
    setCurrency: (currency: string) => void
    rates: { [key: string]: number } | null
}

const SelectCurrency = (props: SelectCurrencyPropsType) => {

    const currencies: { value: string, rates?: number }[] = [
        {value: "AUD"},
        {value: "AZN"},
        {value: "GBP"},
        {value: "AMD"},
        {value: "BYN"},
        {value: "BGN"},
        {value: "BRL"},
        {value: "HUF"},
        {value: "HKD"},
        {value: "DKK"},
        {value: "USD"},
        {value: "EUR"},
        {value: "INR"},
        {value: "KZT"},
        {value: "CAD"},
        {value: "KGS"},
        {value: "CNY"},
        {value: "MDL"},
        {value: "NOK"},
        {value: "PLN"},
        {value: "RON"},
        {value: "XDR"},
        {value: "SGD"},
        {value: "TJS"},
        {value: "TRY"},
        {value: "TMT"},
        {value: "UZS"},
        {value: "UAH"},
        {value: "CZK"},
        {value: "SEK"},
        {value: "CHF"},
        {value: "ZAR"},
        {value: "KRW"},
        {value: "JPY"},
    ]
    const sortArray = currencies.map((el: { value: string, rates?: number }) => {
        return props.rates &&  {...el, rates: props.rates[el.value]};
    })
        .sort((a, b) => {
             if (a && b) {
                 return  a.rates - b.rates
            }  else return  0
        })


    return <TextField
        id="outlined-select-currency"
        select
        label="Select"
        value={props.currency}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            debugger
            props.setCurrency(event.target.value)
        }}
        helperText="Please select your currency"
        variant="outlined"
        style={{width: "200px"}}
    >
        {sortArray.map((option, index) => (
            option !== null && <MenuItem key={index} value={option.value}>
        1 {option.value} -  {(1 / (option.rates || 0)).toFixed(3)} RUB
            </MenuItem>
        ))}
    </TextField>
}

export default React.memo(SelectCurrency)