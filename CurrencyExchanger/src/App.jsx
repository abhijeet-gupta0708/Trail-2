import InputBox from "./components/InputBox";
import useFunctionality from "./components/useFunctionality";

function App() {

    const {
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
    } = useFunctionality();

    return (
        <>
        <div className="fullscreen mb-0 min-h-screen flex justify-center items-center" style={{
                backgroundImage:`url('https://akm-img-a-in.tosshub.com/businesstoday/images/story/202602/69952e4644005-gold-was-02-per-cent-weaker-to-around-4-867-per-ounce-and-silver-was-down-by-around-the-same-margi-181259135-16x9.jpg?size=948:533')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }} >
          

            

            <div className="w-full flex justify-center ">

                <div className="glasscontainer text-black bg-white/20 backdrop-blur-3xl w-[90%] border border-white/30 p-8 rounded-xl max-w-4xl relative">

                    <h1 className="text-center text-4xl mb-8">
                        CURRENCY EXCHANGE
                    </h1>

                    <InputBox
                        label="From"
                        amount={amount}
                        currency={options}
                        selectcurrency={from}
                        onchangeamount={setamount}
                        onchangecurrency={setfrom}
                        />

                    <div className="flex justify-center relative h-0">

                        <button
                            className="absolute -top-5 text-3xl text-center w-fit p-4 bg-blue-500 rounded-2xl border-2 border-white hover:cursor-pointer"
                            onClick={swap}
                            >
                            Swap
                        </button>

                    </div>

                    <div className="mt-10">

                        <InputBox
                            label="To"
                            amount={change_amount}
                            currency={options}
                            selectcurrency={to}
                            onchangeamount={setchange_amount}
                            onchangecurrency={setto}
                            amountdisable
                            />

                    </div>

                    <div className="flex justify-center mt-6">

                        <button
                            className="text-4xl bg-blue-600 text-black px-6 py-2 rounded-lg hover:cursor-pointer"
                            onClick={convert}
                        >
                            CONVERT
                        </button>

                    </div>

                </div>

            </div>

       </div>
        </>
    );
}

export default App;