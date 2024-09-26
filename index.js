#!/usr/bin/env node


const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json'
const input = process.argv[2] || 1

const DOMPA_PRICE = 189
const CRYSTAL_PRICE = 219
const CHEEZE_BURGER = 1

async function getBTCRate() {
  const res = await fetch(URL)
  try {
    const json = await res.json()
    return json.bpi.USD.rate_float
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

getBTCRate()
  .then(rate => rate * input)
  .then(
    usd => `
🥂  ${input} BTC =
🍾  ${Number(usd / DOMPA_PRICE).toFixed(0)} x Dom Pérignon
🍾  ${Number(usd / CRYSTAL_PRICE).toFixed(0)} x Crystal
🍔  ${Number(usd / CHEEZE_BURGER).toFixed(0)} x Cheese burgers
`,
  )
  .then(console.log)
  .catch(error => console.error(error))
