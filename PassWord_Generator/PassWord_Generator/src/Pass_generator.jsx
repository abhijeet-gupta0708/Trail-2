import { useState,useCallback,useEffect} from "react";
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

    return (
        <>
        <div className="completebox bg-gray-600 max-w-full flex justify-center items-center">
        <input 
        type="text" 
        placeholder="PASSWORD " 
        value={password}
        className=" justify-center items-center w-full max-w-md p-2 border rounded"
         />
        <button className="bg-blue-600 border-4 mx-auto  shadow-amber-300 rounded-lg">Copy</button>

        </div>
        <input
         type="range"
         min={6}
         max={50} 
         value={length}
         className="cursor-pointer"
         onChange={(e)=>{setlength(e.target.value)}}
         
         />
         <label>Length {length}</label>
    

        </>
    )
}