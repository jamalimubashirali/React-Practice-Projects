import { useState , useEffect } from "react";

const useCurrencyConvertor = (currency) => {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/775efe16a2318626e480ee49/latest/${currency}`)
        .then((res) => {
            res.json().then((res) => setData(res.conversion_rates)); // Access the correct key
        });
    }, [currency]); 
    console.log(data)
    return data;
}

export default useCurrencyConvertor;
