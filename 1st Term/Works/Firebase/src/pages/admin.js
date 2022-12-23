import { doc, setDoc } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import css from '../Assets/css/admin.module.css';
import { db } from '../firebase-config';
import { BeatLoader } from "react-spinners";


function Admin(props) {
    const addlanguagediv = useRef();
    const [language, setLanguage] = useState(null);
    const [loadState, setLoadingState] = useState(false);
    const showlanguagediv = () => {
        addlanguagediv.current.style.right = 0;
    }
    const hidelanguagediv = () => {
        addlanguagediv.current.style.right = '-500px';
    }
    const addlanguage = async () => {
        if (language == null || language == "") {
            alert('Null input')
        }else{
            const lang = language.toLowerCase();
            try{
                await setDoc(doc(db, "Languages", lang), {});
                await setDoc(doc(db, lang, "Courses"), {
                    Numofcourses: '0'
                });
                setLoadingState(false)
            }catch(error){
                console.log(error);
            }
        }
    }
    if(loadState === false){
        var btnVal = 'ADD';
    }else if(loadState === true){
        var btnVal = <BeatLoader color={"#ffffff"}size={7}/>;
    }
    return (
        <>
        <button onClick={showlanguagediv}>Add Language</button>
        <div className={css.addlanguage} ref={addlanguagediv}>
            <div className={css.hidelangdiv} onClick={hidelanguagediv}>
                <div className={css.leftarrow}/>
            </div>
            <input
                className={css.langform}
                placeholder='Type new language here'
                onChange={(event) => {
                    setLanguage(event.target.value);
                }}></input>
            <button className={css.langbtn} onClick={()=>{
                setLoadingState(true);
                addlanguage()}}>{btnVal}</button>
        </div>
        </>
    );
}

export default Admin;