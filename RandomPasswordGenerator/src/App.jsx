import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  // Reqiured varibales for state and its functions to manage them
  const [length , setLength] = useState(8);
  const [isNumberAllowed , setIsNumberAllowed] = useState(false);
  const [isCharacterAllowed , setIsCharacterAllowed] = useState(false);
  const [password , setPassword] = useState("");

  // Password Generator Function
  const strongPassword = useCallback(() => {
    let password = "";
    let passString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isNumberAllowed) {
      passString += "0123456789";
    }
    if (isCharacterAllowed) {
      passString += "`~!@#$%^&*()_+{}[]|\\/?><:;'";
    }

    for (let index = 0; index < length; index++) {
      const char = Math.floor(Math.random() * passString.length);
      password += passString.charAt(char);
    }
    setPassword(password);
  }, [length , isNumberAllowed , isCharacterAllowed , password]);

  // useEffect for using the functionlality of memoized function.
  useEffect(() => {
    strongPassword();
  }, [length , isCharacterAllowed , isNumberAllowed]);

  // To add Refernce of Password field and copy button
  const passRef = useRef(null);

  // Fucntion for useRef implementaiton
  const copyPassword = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])
  return (
    <>
    {/* Html code for the simple field and related components to generator the strong password */}
      <div className="w-6/12 mt-4 mx-auto my-auto p-4 rounded-2xl bg-slate-500
      flex flex-col justify-center ">
        <h1 className="text-4xl text-center">Passwor Generator</h1>
        <div className="mt-4">
          <input 
          type="text" 
          className="outline-none w-full rounded-2xl p-3"
          value={password}
          placeholder="Password" 
          readOnly
          ref={passRef}/>
          <button 
          onClick={copyPassword}
          className="bg-blue-400 p-3 rounded-2xl mt-3"
          >Copy</button>
        </div>
        <div className="space-x-4 text-center w-full">
          <span>
            <label htmlFor="range" className="mr-2">
              Lenght : {length}
            </label>
            <input type="range" 
            name="passwordlength" 
            id=""
            min={0}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)} />
          </span>
          <span>
            <label htmlFor="checkbox" className="mr-2">
              Numbers
            </label>
            <input 
            type="checkbox" 
            name="characters" 
            id="Characters"
            defaultChecked = {isNumberAllowed}
            onChange={
              () => {
                setIsNumberAllowed((prev) => !prev);
              }
            } />
          </span>
          <span>
            <label htmlFor="checkbox" className="mr-2">
              Characters
            </label>
            <input 
            type="checkbox"
            name="characters" 
            defaultChecked = {isCharacterAllowed} 
            id="" 
            onChange={() => {
              setIsCharacterAllowed((prev) => !prev)
            }}/>
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
