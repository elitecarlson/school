import vid from "../Assets/videos/vertical 2.mp4";
import css from "../Assets/css/q_admin.module.css";
import { useState } from "react";
import { useRef } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

function Questions_admin(){
    const[btnVis, setBtnVis] = useState(true);
    const[mute, setMute] = useState(false);
    const[paused, setPaused] = useState(false);
    const[disable, setDisable] = useState(false);
    const[enable, setEnable] = useState(false);
    const[answered,setAnswered] = useState(false);
    const vidRef = useRef();
    const vidProgressBar = useRef();
    const answer1 = useRef();
    const answer2 = useRef();
    const answer3 = useRef();
    const answer4 = useRef();
    const answer = "false";
    function playVid(){
        setBtnVis(false);
        vidRef.current.play();
    }
    function pauseVid(){
        if (vidRef.current.paused == false) {
            vidRef.current.pause();
            setPaused(true);
        } else {
            setBtnVis(false);
            vidRef.current.play();
            setPaused(false);
        }
    }
    function muteUnmute(){
        if (vidRef.current.muted == false) {
            vidRef.current.muted = true;
            setMute(true)
        } else {
            vidRef.current.muted = false;
            setMute(false)
        }
    }
    function timeUpdate(){
        progressbar_move();
        if(vidRef.current.currentTime == vidRef.current.duration){
            setBtnVis(true)
        }
    }
    function progressbar_move(){
        vidProgressBar.current.value = vidRef.current.currentTime;
        vidProgressBar.current.max = Math.floor(vidRef.current.duration);           
    }
    function progress_seek(){
        vidRef.current.currentTime = vidProgressBar.current.value;
        vidProgressBar.current.max = Math.floor(vidRef.current.duration);
    }
    const showanswer = () => {
        if(answer1.current.value == answer){
            let theanswer = answer1;
            theanswer.current.className = css.answertrue;
        }else if(answer2.current.value == answer){
            let theanswer = answer2;
            theanswer.current.className = css.answertrue;
        }else if(answer3.current.value == answer){
            let theanswer = answer3;
            theanswer.current.className = css.answertrue;
        }else if(answer4.current.value == answer){
            let theanswer = answer4;
            theanswer.current.className = css.answertrue;
        }
    }
    const verifyanswer1 = () => {
        if(answer1.current.value == answer){
            answer1.current.className = css.answertrue;
        }else{
            answer1.current.className = css.answerfalse;
            setAnswered(true);
            showanswer();
        }
        setDisable(true);
        setEnable(true);
    }
    const verifyanswer2 = () => {
        if(answer2.current.value == answer){
            answer2.current.className = css.answertrue;
        }else{
            answer2.current.className = css.answerfalse;
            setAnswered(true);
            showanswer();
        }
        setDisable(true);
        setEnable(true);
    }
    const verifyanswer3 = () => {
        if(answer3.current.value == answer){
            answer3.current.className = css.answertrue;
        }else{
            answer3.current.className = css.answerfalse;
            setAnswered(true);
            showanswer();
        }
        setDisable(true);
        setEnable(true);
    }
    const verifyanswer4 = () => {
        if(answer4.current.value == answer){
            answer4.current.className = css.answertrue;
        }else{
            answer4.current.className = css.answerfalse;
            setAnswered(true);
            showanswer();
        }
        setDisable(true);
        setEnable(true);
    }
    const keyDownEvents = (event) => {
        if(answered === false){
            if(event.key === '1'){
                verifyanswer1();
            }else if(event.key === '2'){
                verifyanswer2();
            }else if(event.key === '3'){
                verifyanswer3();
            }else if(event.key === '4'){
                verifyanswer4();
            }
        }
    }
    document.addEventListener('keyup', keyDownEvents)
    return(
        <>
        {/* <Navbar fixed="false"></Navbar> */}
        <div className={css.Container}>
            {/* Video container  */}
                <div className={css.upload}>
                    <label htmlFor="file">
                        <div className={css.uploadgif}></div>
                    </label>
                    <div className={css.choosefile}>
                        <input type="file" id="file"/>
                        <div className={css.attachment}></div>
                        <p className={css.filetxt}>No file selected</p>
                        <label htmlFor="file">
                            <p className={css.filebtn}>Choose file</p>
                        </label>
                    </div>
                </div>
                {/* <div className={btnVis ? css.Hidden : css.topNav}>
                    <div className={paused ? css.play : css.pause} onClick={pauseVid}></div>
                    <div className={mute ? css.mute : css.volume} onClick={muteUnmute}></div>
                </div>
                <video src={vid} className={css.vid} ref={vidRef} onTimeUpdate={timeUpdate}></video>
                <div className={btnVis ? css.playBtn : css.Hidden} onClick={playVid}>
                    <div className={css.playIcon}></div>
                </div>
                <div className={css.invisiblePause} onClick={pauseVid}></div>
                <div className={btnVis ? css.Hidden : css.rangeCont}>
                    <input type="range" class="progressbar" className={css.range} ref={vidProgressBar} onInput={progress_seek}></input>
                </div> */}

            {/* Questions container  */}
            <div className={css.qContainer}>
                <div className={css.centered}>
                    <div className={css.header}>
                        <div className={css.courseprogress} data-label="."></div>
                        <Link to='/'>
                        <div className={css.closeicon}></div>
                        </Link>
                    </div>
                    <input type="text" />
                    <div className={css.answers}>
                        <div className={css.answerSepartor}>
                            <input type="text" className={css.correctform}/>
                        <button className={css.answer} disabled={disable} value="false" onClick={verifyanswer2} ref={answer2}>
                            <div className={css.numpadAnswer}>2</div>
                            <div className={css.answerTxt}>Struggle</div></button>
                        </div><br />
                        <div className={css.answerSepartor}>
                        <button className={css.answer} disabled={disable} value="maybe" onClick={verifyanswer3} ref={answer3}>
                            <div className={css.numpadAnswer}>3</div>
                            <div className={css.answerTxt}>Patience</div></button>
                        <button className={css.answer} disabled={disable} value="plaossibe" onClick={verifyanswer4} ref={answer4}>
                            <div className={css.numpadAnswer}>4</div>
                            <div className={css.answerTxt}>Lazyness</div></button>
                        </div>
                    </div>
                    <div className={css.bottomBtns}>
                        <button className={css.relearn}>Rewatch Lesson</button>
                        <button disabled={enable} className={enable ? css.conrinuelearning : css.conrinuelearningdisabled}>Learn on</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Questions_admin;