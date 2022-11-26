import css from "../Assets/css/q-selectAdmin.module.css";
import { db, storage } from "../firebase-config";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { BeatLoader } from "react-spinners";


function QselectAdmin(){
    const [video, setVideo] = useState(null);
    const [question, setQuestion] = useState(null);
    const [correct, setCorrect] = useState(null);
    const [wrong1, setWrong1] = useState(null);
    const [wrong2, setWrong2] = useState(null);
    const [wrong3, setWrong3] = useState(null);
    const [step, setStep] = useState(0);
    const [disabled, setDisabled] = useState(true)
    const [disabledtwo, setDisabledtwo] = useState(true);
    const [uploadState, setuploadState] = useState(false);
    const [usdiv, setUsdiv] = useState(false);
    const [usstate, setUsstate] = useState(false);
    console.log(video)
    const filechange = (event) => {
        setVideo(event.target.files[0])
        setDisabled(false)
    }
    const dragover = (event) => {
        event.preventDefault();
    }
    const dropped = (event) => {
        event.preventDefault();
        setVideo(event.dataTransfer.files[0])
        setDisabled(false)
    }
    const uploadvid = async () => {
        try{   
            setuploadState(true);
                const vid = v4();
                const qid = v4();
                const videoRef = ref(storage, `videos/${vid}`);
                await setDoc(doc(db, "Questions", qid), {
                    Type: 'selection',
                    video: vid,
                    question: question,
                    correct: correct,
                    wrong1: wrong1,
                    wrong2: wrong2,
                    wrong3: wrong3
                });
                uploadBytes(videoRef, video).then(() => {
                    setuploadState(false);
                })
        }catch(error){
            console.log(error);
        }
    }
    if(uploadState === false){
        var btnVal = 'UPLOAD';
    }else if(uploadState === true){
        var btnVal = <BeatLoader color={"#ffffff"}size={10}/>;
    }
    if(question != null && correct != null && wrong1 != null && wrong2 != null && wrong3 != null){
        setState({disabledtwo : false})
    }
    if(step == 1){
        return(
            <>
            <div className={css.uploadsuccessDiv}>
                <div className={usstate ? css.line : css.linered}></div>
                <p>{usstate ? 'Upload was successfull' : 'Upload failed'}</p>
            </div>
            <div className={css.container}>
                <div className={css.centered}>
                    <p className={css.title}>Question and answer's</p><br /> 
                <input 
                    type="text"
                    className={css.inputquestion}
                    placeholder="Question"
                    onChange={(event) => {
                        setQuestion(event.target.value);
                    }}
                    /><br />
                    <div className={css.answerfieldscont}>
                    <input 
                        type="text"
                        className={css.inputanswer}
                        placeholder="Correct answer"
                        onChange={(event) => {
                            setCorrect(event.target.value);
                    }}
                    /><br />
                    <input 
                        type="text"
                        className={css.inputanswer}
                        placeholder="Wrong answer one"
                        onChange={(event) => {
                            setWrong1(event.target.value);
                    }}
                    />
                    </div>
                    <div className={css.answerfieldscont}>
                    <input 
                        type="text"
                        className={css.inputanswer}
                        placeholder="Wrong answer two"
                        onChange={(event) => {
                            setWrong2(event.target.value);
                    }}
                    /><br />
                    <input 
                        type="text"
                        className={css.inputanswer}
                        placeholder="Wrong answer three"
                        onChange={(event) => {
                            setWrong3(event.target.value);
                    }}
                    />
                    </div>
                    <div className={css.vidinfodiv}>
                        <div className={css.vidinfoleft}>
                            <div className={css.vidFile}></div>
                            <p className={css.vidname}>{video.name}</p>
                        </div>
                        <div className={css.edit} onClick={() => {
                            setStep(0);
                            setVideo(null);
                            setDisabled(true)
                        }}></div>
                    </div><br /><br />
                    <button 
                        disabled={disabledtwo}
                        onClick={uploadvid}
                        className={disabledtwo ? css.submitbtndisabled : css.submitbtn}>{btnVal}</button>
                </div>
            </div>
            </>
        )
    }else if(step == 0){
        return(
            <>
            <div className={css.container}>
                <div className={css.centered}>
                    <p className={css.title}>Video Upload</p><br />
                    {disabled ? <Dropzone dragover={dragover} dropped={dropped} filechange={filechange}/> : <Droped/>}
                    <br />
                    <button 
                        disabled={disabled}
                        onClick={() => {
                        setStep(1)
                    }} className={disabled ? css.submitbtndisabled : css.submitbtn}>NEXT</button>
                </div>
            </div>
            </>
        )
    }
}

function Dropzone (props){
    return(
        <>
        <div className={css.dragzone} onDragOver={props.dragover} onDrop={props.dropped}>
            <div className={css.addvidIcon}></div><br />
            <p>Drop video file here or 
            <label htmlFor="file" className={css.label}> browse</label>
            </p>
            <input type="file" id="file" onChange={props.filechange}/>
        </div>
        </>
    );
}

function Droped (){
    return(
        <>
        <div className={css.dragzone} >
            <div className={css.uploaded}></div><br />
            <p>Almost there press next to continue</p>
        </div>
        </>
    );
}

export default QselectAdmin;