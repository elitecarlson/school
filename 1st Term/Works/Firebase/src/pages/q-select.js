import vid from "../Assets/videos/vertical 2.mp4";
import css from "../Assets/css/q.module.css";
import css2 from "../Assets/css/wordSelect.module.css"
import Player from "../components/player";
import QselectDiv from "../components/q-selectDiv";
import { db, storage } from "../firebase-config";
import { getDoc, doc } from "firebase/firestore";
import { useState } from "react";
import PageNotFound from "../components/404";
import Loading from "../components/loading";
import { getDownloadURL, ref } from "firebase/storage";

function Qselect(){
    // let url = window.location.href;
    // let split = url.split("q=");
    // const [question, setQuestion] = useState(null);
    // const [correct, setCorrect] = useState(null);
    // const [videourl, setUrl] = useState(null);
    // const [wrong1, setWrong1] = useState(null);
    // const [wrong2, setWrong2] = useState(null);
    // const [wrong3, setWrong3] = useState(null);
    const [page, setPage] = useState("wordSelect");

    // if (split.length > 1) {
    //     const qid = split[1]
    //     if (qid == "") {
    //         return(
    //             <PageNotFound/>
    //         )
    //     }else{
    //         const getquiz = async () => {
    //             try{
    //                 const docRef = doc(db, 'Questions', qid);
    //                 const docSnap = await getDoc(docRef)
    //                     if(docSnap.exists()) {
    //                         let data = docSnap.data();
    //                         let qtype = data.Type;
    //                         if (qtype == "videoSelection") {
    //                             const video = data.video;
    //                             setQuestion(data.question);
    //                             setCorrect(data.correct);
    //                             setWrong1(data.wrong1);
    //                             setWrong2(data.wrong2);
    //                             setWrong3(data.wrong3);
    //                             setPage("videoSelect");
    //                             getDownloadURL(ref(storage, `videos/${video}`))
    //                             .then((url) => {
    //                                 setUrl(url);
    //                             });
    //                         }
    //                     } else {
    //                         return(
    //                             setPage("Nonexistant")
    //                         )
    //                     }
    //             }catch(error){
    //                 console.log(error);
    //             }
    //         }
    //         getquiz();
    //     }
    // }else{
    //     return(
    //         <PageNotFound/>
    //     )
    // }
    /*if(page == "Loading"){
        return(
            <Loading/>
        )
    }else if(page == "videoSelect"){
        //Fisher Yates shuffle algo
        function shuffle(array) {
            let newPos,temp;
            for(let i = array.length -1; i > 0; i--){
                newPos = Math.floor(Math.random() * (i + 1));
                temp = array[i];
                array[i] = array[newPos];
                array[newPos] = temp;
            }
            return array;
        }
        // Shuffle & Disguise Answers
        const ansArray = shuffle([correct, wrong1, wrong2, wrong3]);
        return(
            <>
            <div className={css.Container}>
                <Player vid={videourl}></Player>
                <QselectDiv 
                    q={question} 
                    ans1={ansArray[0]}
                    ans2={ansArray[1]}
                    ans3={ansArray[2]}
                    ans4={ansArray[3]}
                    correct={correct}
                ></QselectDiv>
            </div>
            </>
        )
    }else if(page == "Nonexistant"){
        return(
            <PageNotFound/>
        )
    }else */if(page == "wordSelect"){
        return(
            <>
            <div className={css2.navbar}>
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
                    <p className={css2.questiontxt}>What greeting is used after launch?</p>
                    <div className={css2.anserContainer}>
                        <div className={css2.word}>
                            <p className={css2.wordtxt}>Good-Morning</p>
                        </div>
                        <div className={css2.word}>
                            <p className={css2.wordtxt}>Good-Afternoon</p>
                        </div>
                        <div className={css2.word}>
                            <p className={css2.wordtxt}>Good-Night</p>
                        </div>
                        <div className={css2.word}>
                            <p className={css2.wordtxt}>Good-Evening</p>
                        </div>
                    </div>
                </div>
                <button className={css2.conrinuelearning}>Continue Learning</button>
            </div>
            </>
        );
    }
}

export default Qselect;