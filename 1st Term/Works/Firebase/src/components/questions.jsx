import vid from "../Assets/videos/vertical.mp4";
import css from "../Assets/css/q.module.css"
import { useState } from "react";
import { useRef } from "react";

function Questions(){
    const[btnVis, setBtnVis] = useState(true);
    const[mute, setMute] = useState(false);
    const vidRef = useRef();
    const vidProgressBar = useRef();
    function playVid(){
        setBtnVis(false);
        vidRef.current.play();
    }
    function pauseVid(){
        setBtnVis(true);
        vidRef.current.pause();
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
    return(
        <>
        <div className={css.vidCont}>
            <div className={btnVis ? css.Hidden : css.topNav}>
                <div className={css.pause} onClick={pauseVid}></div>
                <div className={mute ? css.mute : css.volume} onClick={muteUnmute}></div>
            </div>
        <video src={vid} className={css.vid} ref={vidRef} onTimeUpdate={timeUpdate}></video>
        <div className={btnVis ? css.playBtn : css.Hidden} onClick={playVid}>
            <div className={css.playIcon}></div>
        </div>
        <div className={btnVis ? css.Hidden : css.rangeCont}>
            <input type="range" class="progressbar" className={css.range} ref={vidProgressBar} onInput={progress_seek}></input>
        </div>
        </div>
        </>
    )
}

export default Questions;