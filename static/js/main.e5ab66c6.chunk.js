(this["webpackJsonpgreen-test"]=this["webpackJsonpgreen-test"]||[]).push([[0],{16:function(e,t,n){e.exports={conversionContainer:"App_conversionContainer__1FzQY",conversionContainer__titleBlock:"App_conversionContainer__titleBlock__R-VPN",conversionContainer__titleBlock__title:"App_conversionContainer__titleBlock__title__1v0-W",conversionContainer__inputBlock:"App_conversionContainer__inputBlock__1iqfI",conversionContainer__inputBlock__input:"App_conversionContainer__inputBlock__input__116Qz",conversionContainer__inputBlock__span:"App_conversionContainer__inputBlock__span__1gLMW",conversionContainer__summaBlock:"App_conversionContainer__summaBlock__2UG26"}},67:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var a=n(0),u=n.n(a),l=n(8),r=n.n(l),c=(n(67),n(16)),i=n.n(c),o=n(29),s=n(123),v=n(129),_=n(130),j=n(132),p=n(5),b=function(e){return Object(p.jsxs)(s.a,{fullWidth:!0,variant:"outlined",style:{width:"250px"},children:[Object(p.jsx)(v.a,{htmlFor:"outlined-adornment-amount",children:"Amount"}),Object(p.jsx)(_.a,{type:"number",id:"outlined-adornment-amount",value:e.inputValue,onChange:function(t){return e.setInputValue(Number(t.currentTarget.value))},startAdornment:Object(p.jsx)(j.a,{position:"start",children:e.valuta}),labelWidth:60})]})},d=u.a.memo(b),m=function(e){return Object(p.jsx)(d,{valuta:"RUB",inputValue:e.rubles,setInputValue:e.setRubles})},O=u.a.memo(m),C=n(41),h=n(127),x=n(128),f=function(e){var t=[{value:"AUD"},{value:"AZN"},{value:"GBP"},{value:"AMD"},{value:"BYN"},{value:"BGN"},{value:"BRL"},{value:"HUF"},{value:"HKD"},{value:"DKK"},{value:"USD"},{value:"EUR"},{value:"INR"},{value:"KZT"},{value:"CAD"},{value:"KGS"},{value:"CNY"},{value:"MDL"},{value:"NOK"},{value:"PLN"},{value:"RON"},{value:"XDR"},{value:"SGD"},{value:"TJS"},{value:"TRY"},{value:"TMT"},{value:"UZS"},{value:"UAH"},{value:"CZK"},{value:"SEK"},{value:"CHF"},{value:"ZAR"},{value:"KRW"},{value:"JPY"}].map((function(t){return Object(C.a)(Object(C.a)({},t),{},{rates:e.rates[t.value]})})).sort((function(e,t){return e.rates-t.rates}));return Object(p.jsx)(h.a,{id:"outlined-select-currency",select:!0,label:"Select",value:e.currency,onChange:function(t){e.setCurrency(t.target.value)},helperText:"Please select your currency",variant:"outlined",style:{width:"150px"},children:t.map((function(e,t){return Object(p.jsxs)(x.a,{value:e.value,children:[e.value," - ",(e.rates||0).toFixed(3)]},t)}))})},V=u.a.memo(f),B=function(e){var t=Object(a.useCallback)((function(t){e.setRubles(Number((t/e.rates[e.valuta]).toFixed(2))),e.setInputValutaValue(t)}),[e.setRubles,e.rates,e.valuta,e.setInputValutaValue]);return Object(p.jsxs)("div",{children:[Object(p.jsx)(d,{valuta:e.valuta,setInputValue:t,inputValue:e.inputValutaValue}),Object(p.jsx)(V,{currency:e.valuta,setCurrency:e.setValuta,rates:e.rates})]})},k=u.a.memo(B),N=function(e){return Object(p.jsxs)("h2",{children:[e.inputValutaValue?e.inputValutaValue:0,"(",e.valuta,")"]})},R=u.a.memo(N),g=n(57),A=n.n(g).a.create({baseURL:"https://www.cbr-xml-daily.ru/"}),y=function(){return A.get("latest.js").then((function(e){return e.data}))},S=function(){var e=Object(a.useState)({}),t=Object(o.a)(e,2),n=t[0],u=t[1],l=Object(a.useState)("USD"),r=Object(o.a)(l,2),c=r[0],s=r[1],v=Object(a.useState)(0),_=Object(o.a)(v,2),j=_[0],b=_[1],d=Object(a.useState)(0),m=Object(o.a)(d,2),C=m[0],h=m[1];return Object(a.useEffect)((function(){y().then((function(e){return u(e.rates)})),h(Number((j*n[c]).toFixed(2)))}),[c,j,n]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:i.a.conversionContainer__inputBlock,children:[Object(p.jsx)("div",{className:i.a.conversionContainer__inputBlock__input,children:Object(p.jsx)(O,{rubles:j,setRubles:b,inputValutaValue:C,rates:n,setInputValutaValue:h,valuta:c})}),Object(p.jsx)("span",{className:i.a.conversionContainer__inputBlock__span,children:"\u21c6"}),Object(p.jsx)("div",{className:i.a.conversionContainer__inputBlock__input,children:Object(p.jsx)(k,{valuta:c,inputValutaValue:C,setInputValutaValue:h,setValuta:s,rubles:j,rates:n,setRubles:b})})]}),Object(p.jsx)("div",{className:i.a.conversionContainer__summaBlock,children:Object(p.jsx)(R,{inputValutaValue:C,valuta:c})})]})},F=u.a.memo(S),I=function(){return Object(a.useEffect)((function(){setInterval((function(){return y().then((function(e){return e}))}),1e4)})),Object(p.jsxs)("div",{className:i.a.conversionContainer,children:[Object(p.jsx)("div",{className:i.a.conversionContainer__titleBlock,children:Object(p.jsx)("h1",{className:i.a.conversionContainer__titleBlock__title,children:"Currency Conversion"})}),Object(p.jsx)(F,{})]})},D=u.a.memo(I),U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,133)).then((function(t){var n=t.getCLS,a=t.getFID,u=t.getFCP,l=t.getLCP,r=t.getTTFB;n(e),a(e),u(e),l(e),r(e)}))};r.a.render(Object(p.jsx)(D,{}),document.getElementById("root")),U()}},[[92,1,2]]]);
//# sourceMappingURL=main.e5ab66c6.chunk.js.map