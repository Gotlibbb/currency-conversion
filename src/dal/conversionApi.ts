import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://www.cbr-xml-daily.ru/',
});

export const conversionApi = {
    getCurrentCurrency() {
        return instance.get<CurrencyResponseType>('latest.js').then(res => res.data)
    }
}

type CurrencyResponseType = {
    date: string
    rates: RatesType
}

export type RatesType = {
    "AUD": number
    "AZN": number
    "GBP": number
    "AMD": number
    "BYN": number
    "BGN": number
    "BRL": number
    "HUF": number
    "HKD": number
    "DKK": number
    "USD": number
    "EUR": number
    "INR": number
    "KZT": number
    "CAD": number
    "KGS": number
    "CNY": number
    "MDL": number
    "NOK": number
    "PLN": number
    "RON": number
    "XDR": number
    "SGD": number
    "TJS": number
    "TRY": number
    "TMT": number
    "UZS": number
    "UAH": number
    "CZK": number
    "SEK": number
    "CHF": number
    "ZAR": number
    "KRW": number
    "JPY": number
}