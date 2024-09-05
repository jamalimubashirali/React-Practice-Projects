import { useState } from "react"
import { InputBox } from "./components"
import useCurrencyConvertor from "./hooks/useCurrencyConverter"

function App() {
  const BackgroundImage = "https://www.pexels.com/photo/person-holding-debit-card-50987/";
  const [amount , setAmount] = useState(0);
  const [from , setFrom] = useState("USD");
  const [to , setTo] = useState("PKR");
  const [convertedAmount , setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyConvertor(from);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }
  const currencyOptions = useCurrencyConvertor(from);
  const options = Object.keys(currencyOptions);

  const convert = () => {
    setConvertedAmount ( amount * currencyInfo[to] )
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage : `url('https://www.pexels.com/photo/person-holding-debit-card-50987/')`,
            backgroundColor : 'black'
        }}
        
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => {
                              setAmount(currency);
                            }}
                            selectedCurrency={from}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectedCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert 
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App;
