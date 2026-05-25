import { useState,useCallback,useEffect, useRef} from "react";
export default function Pass_generator()
{   
    const [length,setlength]=useState(8);
    const [charAllowed,setcharAllowed]=useState(false);
    const [numberAllowed, setnumberAllowed]=useState(false);
    const [password,setpassword]=useState("");

    // Using Call Back FUnction to store the password and so not recreating from scretch
    const passwordgenrator =useCallback(() =>
    {
        let pass="";
        let str="ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstuvwxyz";
        if(charAllowed)
        {
            str +="#@$%^&*";
        }
        if (numberAllowed)
        {
            str +="1234567890";
        }
        for(let i=1;i<=length;i++)
        {
            let char=Math.floor((Math.random()*str.length)+1);
            pass+=str.charAt(char);
            console.log(pass);
        }
        setpassword(pass)
    },[length,setpassword,charAllowed,numberAllowed]);
    
    useEffect(()=>{passwordgenrator()},[passwordgenrator,length,charAllowed,numberAllowed])
    const copytoclipboard =useCallback(()=>{
        window.navigator.clipboard.writeText(password)
        passref.current?.select();
    },[password])

    const passref=useRef(null)

    return (
    <>
    <div className="completebox w-full min-h-screen flex flex-col justify-center items-center p-4">
        {/* Main Wrapper to hold both blocks at an identical width */}
        <div className="w-full max-w-2xl  shadow-md rounded-lg overflow-hidden">
            
            {/* Top Block */}
            <div className="topblock bg-[#FCDEBE] p-6 flex flex-col items-center">
                <h2 className="text-center text-2xl font-semibold mb-4 text-[#5E5768]">
                    Password Generator
                </h2>
                
                {/* Fixed Flex container for Input and Button */}
                <div className="password-block flex w-full  md:flex-row flex-col  max-w-md">
                    <input 
                        type="text" 
                        placeholder="PASSWORD" 
                        value={password}
                        ref={passref}
                        readOnly
                        className="bg-[#5E5768] text-white flex-grow p-2 border border-slate-400 rounded-l outline-none"
                    />
                    <button 
                        onClick={copytoclipboard}
                        className="bg-[#23469e] hover:bg-blue-700 text-white px-4 py-2 rounded-r font-medium transition-colors cursor-pointer"
                    >
                        Copy
                    </button>
                </div>
            </div>
            
            {/* Bottom Controls Block */}
            <div id="checkbox" className="bg-[#928779] text-white flex flex-wrap flex-col md:flex-row gap-4 justify-center items-center p-6 w-full">
                <div className="flex items-center gap-2">
                    <input 
                        type="range"
                        min={6}
                        max={50} 
                        value={length}
                        className="cursor-pointer"
                        onChange={(e)=>{setlength(Number(e.target.value))}}
                    />
                    <label className="p-1">Length: {length}</label>
                </div>

                <div className="flex items-center gap-1.5">
                    <input 
                        type="checkbox" 
                        checked={numberAllowed}
                        onChange={()=>{setnumberAllowed((prev)=>!prev)}}
                        id="number" 
                        className="cursor-pointer"
                    />
                    <label htmlFor="number" className="cursor-pointer select-none">Number Allowed</label>
                </div>

                <div className="flex items-center gap-1.5">
                    <input 
                        type="checkbox" 
                        checked={charAllowed}
                        onChange={()=>{setcharAllowed((prev)=>!prev)}}
                        id="char" 
                        className="cursor-pointer"
                    />
                    <label htmlFor="char" className="cursor-pointer select-none">Character Allowed</label>
                </div>
            </div>
        </div>
    </div>
    </>
);

}