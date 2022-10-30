import { doc, setDoc } from "firebase/firestore"; 
import { useState } from "react";
import { db } from "../firebase-config"
import "../Assets/css/crud.css"
import { BeatLoader } from "react-spinners";

function Crud(){
    const [loadState, setLoadingState] = useState(false);
    const [name, setName] = useState("");
    const addName = async () => {
        try{
            if(name.split)
            await setDoc(doc(db, "names", name), {
                name: name
            });
            setLoadingState(false)
        }catch(error){
            console.log(error);
        }
    }
    if(loadState === false){
        var btnVal = 'Add Name';
    }else if(loadState === true){
        var btnVal = <BeatLoader color={"#ffffff"}size={8}/>;
    }
    return(
        <>
        <div className="cont">
            <input
                className="nameField"
                type="text"
                placeholder="Enter name"
                onChange={(event) => {
                    setName(event.target.value);
                }}/>
            <button 
                className="btn"
                onClick={()=>{
                    setLoadingState(true);
                    addName()
                }}
            >{btnVal}</button>
        </div>
        </>
    );
}

export default Crud;