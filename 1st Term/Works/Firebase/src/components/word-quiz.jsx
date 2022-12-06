import css2 from "../Assets/css/wordSelect.module.css";
import correctsound from "../Assets/Audio/correct.m4a";
import { useState } from "react";
import { useRef } from "react";

function Wselect(props){
    const[disable, setDisable] = useState(false);
    const[enable, setEnable] = useState(false);
    const[answered,setAnswered] = useState(false);
    const answer1 = useRef();
    const answer2 = useRef();
    const answer3 = useRef();
    const answer4 = useRef();
    const answer = props.correct;
    const audioRef = useRef();

    const showanswer = () => {
        if(answer1.current.value == answer){
            let theanswer = answer1;
            theanswer.current.className = css2.answertrue;
        }else if(answer2.current.value == answer){
            let theanswer = answer2;
            theanswer.current.className = css2.answertrue;
        }else if(answer3.current.value == answer){
            let theanswer = answer3;
            theanswer.current.className = css2.answertrue;
        }else if(answer4.current.value == answer){
            let theanswer = answer4;
            theanswer.current.className = css2.answertrue;
        }
    }
    const verifyanswer1 = () => {
        if(answer1.current.value == answer){
            answer1.current.className = css2.answertrue;
            audioRef.current.play();
            audioRef.current.volume = 0.3;
        }else{
            answer1.current.className = css2.answerfalse;
            setAnswered(true);
            showanswer();
        }
        setDisable(true);
        setEnable(true);
    }
    const verifyanswer2 = () => {
        if(answer2.current.value == answer){
            answer2.current.className = css2.answertrue;
            audioRef.current.play();
            audioRef.current.volume = 0.3;
        }else{
            answer2.current.className = css2.answerfalse;
            setAnswered(true);
            showanswer();
        }
        setDisable(true);
        setEnable(true);
    }
    const verifyanswer3 = () => {
        if(answer3.current.value == answer){
            answer3.current.className = css2.answertrue;
            audioRef.current.play();
            audioRef.current.volume = 0.3;
        }else{
            answer3.current.className = css2.answerfalse;
            setAnswered(true);
            showanswer();
        }
        setDisable(true);
        setEnable(true);
    }
    const verifyanswer4 = () => {
        if(answer4.current.value == answer){
            answer4.current.className = css2.answertrue;
            audioRef.current.play();
            audioRef.current.volume = 0.3;
        }else{
            answer4.current.className = css2.answerfalse;
            setAnswered(true);
            showanswer();
        }
        setDisable(true);
        setEnable(true);
    }
    return(
        <>
        <div className={css2.navbar}>
        <audio src={correctsound} ref={audioRef} className={css2.audio}></audio>
            <div className={css2.close}></div>
            <div className={css2.centercontrols}>
                <div className={css2.back}></div>
                <div className={css2.courseprogress} data-label="."></div>
                <div className={css2.next}></div>
            </div>
            <div className={css2.profilecard}>
                <div className={css2.profile}></div>
            </div>
        </div>
        <div className={css2.wordselectCont}>
            <div className={css2.wordcontCentered}>
                <p className={css2.questiontxt}>{props.q}</p>
                <div className={css2.anserContainer}>
                    <button className={css2.word} disabled={disable} value={`${props.ans1}`} onClick={verifyanswer1} ref={answer1}>
                        <p className={css2.wordtxt}>{props.ans1}</p>
                    </button>
                    <button className={css2.word} disabled={disable} value={`${props.ans2}`} onClick={verifyanswer2} ref={answer2}>
                        <p className={css2.wordtxt}>{props.ans2}</p>
                    </button>
                    <button className={css2.word} disabled={disable} value={`${props.ans3}`} onClick={verifyanswer3} ref={answer3}>
                        <p className={css2.wordtxt}>{props.ans3}</p>
                    </button>
                    <button className={css2.word} disabled={disable} value={`${props.ans4}`} onClick={verifyanswer4} ref={answer4}>
                        <p className={css2.wordtxt}>{props.ans4}</p>
                    </button>
                </div>
            </div>
            <button disabled={enable} className={enable ? css2.conrinuelearning : css2.conrinuelearningdisabled}>Learn on</button>
        </div>
        </>
    );
}

export default Wselect;