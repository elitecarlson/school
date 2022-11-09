import vid from "../Assets/videos/vertical.mp4";
import css from "../Assets/css/q.module.css";
import lewis from "../Assets/images/lewis.jpg"
import { useState } from "react";
import { useRef } from "react";

function Questions(){
    const[btnVis, setBtnVis] = useState(true);
    const[mute, setMute] = useState(false);
    const[paused, setPaused] = useState(false);
    const[disable, setDisable] = useState(false);
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
            showanswer();
        }
        setDisable(true);
    }
    const verifyanswer2 = () => {
        if(answer2.current.value == answer){
            answer2.current.className = css.answertrue;
        }else{
            answer2.current.className = css.answerfalse;
            showanswer();
        }
        setDisable(true);
    }
    const verifyanswer3 = () => {
        if(answer3.current.value == answer){
            answer3.current.className = css.answertrue;
        }else{
            answer3.current.className = css.answerfalse;
            showanswer();
        }
        setDisable(true);
    }
    const verifyanswer4 = () => {
        if(answer4.current.value == answer){
            answer4.current.className = css.answertrue;
        }else{
            answer4.current.className = css.answerfalse;
            showanswer();
        }
        setDisable(true);
    }
    return(
        <>
        <div className={css.Container}>
            {/* Video container  */}
            <div className={css.vidCont}>
                <div className={btnVis ? css.Hidden : css.topNav}>
                    <div className={paused ? css.play : css.pause} onClick={pauseVid}></div>
                    <div className={mute ? css.mute : css.volume} onClick={muteUnmute}></div>
                </div>
                <video src={vid} className={css.vid} ref={vidRef} onTimeUpdate={timeUpdate}></video>
                <div className={btnVis ? css.playBtn : css.Hidden} onClick={playVid}>
                    <div className={css.playIcon}></div>
                </div>
                <div className={css.invisiblePause} onClick={pauseVid}></div>
                <div className={btnVis ? css.Hidden : css.rangeCont}>
                    <input type="range" value="0" class="progressbar" className={css.range} ref={vidProgressBar} onInput={progress_seek}></input>
                </div>
            </div>

            {/* Questions container  */}
            <div className={css.qContainer}>
                <div className={css.profileBtn}>
                    <img src={lewis} className={css.profilPic}/>
                    <p className="displayName">Lewis Hamilton</p>
                </div>
                <p className={css.questionTxt}>What negative artist trop does Dooby refernce</p>
                <div className={css.answers}>
                    <div className={css.answerSepartor}>
                    <button className={css.answer} disabled={disable} value="true" onClick={verifyanswer1} ref={answer1}>Hardwork</button>
                    <button className={css.answer} disabled={disable} value="false" onClick={verifyanswer2} ref={answer2}>Struggle</button>
                    </div><br />
                    <div className={css.answerSepartor}>
                    <button className={css.answer} disabled={disable} value="maybe" onClick={verifyanswer3} ref={answer3}>Patience</button>
                    <button className={css.answer} disabled={disable} value="plaossibe" onClick={verifyanswer4} ref={answer4}>Lazyness</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Questions;