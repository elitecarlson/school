import { auth } from "../firebase-config";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup(){
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const creatuser = async () => {
        try{
            const user =await createUserWithEmailAndPassword(
                auth,
                emailValue,
                passwordValue
            );
            console.log(user);
        }catch(error){
            console.log(error.message);
        }
    }
    console.log(emailValue);
    return(
        <>
        <h1>Signup page</h1><br />
            <input 
                type="email"
                name="email" 
                placeholder="Email"
                onChange={(event) => {
                    setEmailValue(event.target.value)
                }}/><br /><br />
            <input
                type="password"
                name="password" 
                placeholder="Password"
                onChange={(event) => {
                    setPasswordValue(event.target.value)
                }}/><br /><br />
            <button onClick={creatuser}>Sign Up</button>
        </>
    );
}

export default Signup