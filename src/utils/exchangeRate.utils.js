import fetch from 'node-fetch';

export const getExchangeRate = async() =>{
    try {
        const response = await fetch('https://api.frankfurter.app/latest?to=USD,EUR');
        const exchangeRateData = await response.json();
        const exchangeRate = exchangeRateData.rates.USD;
        return exchangeRate;
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        throw new Error('Could not fetch exchange rate');
    }
}