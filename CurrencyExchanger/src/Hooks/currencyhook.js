import { useEffect, useState } from "react";

export default function useCurrency(currency) {

    const [data, setdata] = useState({});

    useEffect(() => {

        fetch(
            `https://api.frankfurter.dev/v1/latest?base=${currency}`
        )
            .then((res) => res.json())
           .then((res)=>{setdata(res.rates)})
           .catch((err)=>console.log(err));
    },[currency]);


    return data;
}