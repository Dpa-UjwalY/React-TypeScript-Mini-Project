const CURRENCY_FORMAT = new Intl.NumberFormat(undefined, {
    currency:"INR",
    style:"currency",
})

export function formatCurrency(number: number){
        return CURRENCY_FORMAT.format(number);
}