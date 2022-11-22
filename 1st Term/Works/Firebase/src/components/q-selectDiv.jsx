import css from "../Assets/css/q-selectDiv.module.css";
import { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

function QselectDiv(props){
    const[disable, setDisable] = useState(false);
    const[enable, setEnable] = useState(false);
    const[answered,setAnswered] = useState(false);
    const answer1 = useRef();
    const answer2 = useRef();
    const answer3 = useRef();
    const answer4 = useRef();
    const answer = props.correct;
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
            <div className={css.qContainer}>
                <div className={css.centered}>
                    <div className={css.header}>
                        <div className={css.courseprogress} data-label="."></div>
                        <Link to='/'>
                        <div className={css.closeicon}></div>
                        </Link>
                    </div>
                    <p className={css.questionTxt}>{props.q}</p>
                    <div className={css.answers}>
                        <div className={css.answerSepartor}>
                        <button className={css.answer} disabled={disable} value={`${props.ans1}`} onClick={verifyanswer1} ref={answer1}>
                            <div className={css.numpadAnswer}>1</div>
                            <div className={css.answerTxt}>{props.ans1}</div>
                        </button>
                        <button className={css.answer} disabled={disable} value={`${props.ans2}`} onClick={verifyanswer2} ref={answer2}>
                            <div className={css.numpadAnswer}>2</div>
                            <div className={css.answerTxt}>{props.ans2}</div></button>
                        </div><br />
                        <div className={css.answerSepartor}>
                        <button className={css.answer} disabled={disable} value={`${props.ans3}`} onClick={verifyanswer3} ref={answer3}>
                            <div className={css.numpadAnswer}>3</div>
                            <div className={css.answerTxt}>{props.ans3}</div></button>
                        <button className={css.answer} disabled={disable} value={`${props.ans4}`} onClick={verifyanswer4} ref={answer4}>
                            <div className={css.numpadAnswer}>4</div>
                            <div className={css.answerTxt}>{props.ans4}</div></button>
                        </div>
                    </div>
                    <div className={css.bottomBtns}>
                        <button className={css.relearn}>Rewatch Lesson</button>
                        <button disabled={enable} className={enable ? css.conrinuelearning : css.conrinuelearningdisabled}>Learn on</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QselectDiv;