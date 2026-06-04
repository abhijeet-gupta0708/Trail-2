import { useId } from "react";

export default function InputBox({
    label,
    amount,
    currency = [],
    onchangecurrency,
    onchangeamount,
    selectcurrency = "usd",
    amountdisable = false,
    currencydisable = false,
}) {

    const amount_input = useId();

    return (

        <div
            className="InputBox relative flex rounded-lg md:w-full justify-between items-center text-black p-8 border border-white/30 bg-white/20 backdrop-blur-3xl"
           
        >

            <div className="leftside flex flex-col">

                <label
                    className="text-3xl text-red-500 ml-8"
                    htmlFor={amount_input}
                >
                    {label}
                </label>

                <input
                    type="number"
                    id={amount_input}
                    placeholder="Enter Amount"
                    value={amount || ""}
                    min={0}
                    disabled={amountdisable}
                    onChange={(e) =>
                        onchangeamount &&
                        onchangeamount(Number(e.target.value))
                    }
                    className="bg-amber-600 m-4 text-lg text-center"
                />

            </div>

            <div className="rightside m-6 flex flex-col gap-2 justify-center items-center">

                <h1 className="text-xl border-black border-2">
                    Currency Type
                </h1>

                <select
                    value={selectcurrency}
                    onChange={(e) => onchangecurrency(e.target.value)}
                >
                    {currency.map((curr) => (
                        <option
                            key={curr}
                            value={curr}
                        >
                            {curr}
                        </option>
                    ))}
                </select>

            </div>

        </div>
    );
}