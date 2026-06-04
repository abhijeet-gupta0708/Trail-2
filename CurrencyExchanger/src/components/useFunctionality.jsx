import { useState } from "react";
import useCurrency from "../Hooks/currencyhook";

export default function useFunctionality() {

    const [amount, setamount] = useState(0);
    const [change_amount, setchange_amount] = useState(0);

    const [from, setfrom] = useState("usd");
    const [to, setto] = useState("inr");

    const currencyInfo = useCurrency(from);

    console.log(currencyInfo);
    const options = Object.keys(currencyInfo);
console.log(options);

    const convert = () => {

        setchange_amount(
            amount * currencyInfo[to]
        );
    };

    const swap = () => {

        setfrom(to);
        setto(from);

        setamount(change_amount);
        setchange_amount(amount);
    };

    return {
        amount,
        setamount,
        change_amount,
        setchange_amount,
        from,
        setfrom,
        to,
        setto,
        convert,
        swap,
        options
    };
}