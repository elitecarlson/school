import vid from "../Assets/videos/vertical 2.mp4";
import css from "../Assets/css/q.module.css";
import Player from "../components/player";
import QselectDiv from "../components/q-selectDiv";
import { db, storage } from "../firebase-config";
import { getDoc, doc } from "firebase/firestore";
import { useState } from "react";
import PageNotFound from "../components/404";
import Loading from "../components/loading";
import { getDownloadURL, ref } from "firebase/storage";

function Qselect(){
    let url = window.location.href;
    let split = url.split("q=");
    const [question, setQuestion] = useState(null);
    const [correct, setCorrect] = useState(null);
    const [videourl, setUrl] = useState(null);
    const [wrong1, setWrong1] = useState(null);
    const [wrong2, setWrong2] = useState(null);
    const [wrong3, setWrong3] = useState(null);
    const [page, setPage] = useState("Loading");

    if (split.length > 1) {
        const qid = split[1]
        if (qid == "") {
            return(
                <PageNotFound/>
            )
        }else{
            const getquiz = async () => {
                try{
                    const docRef = doc(db, 'Questions', qid);
                    const docSnap = await getDoc(docRef)
                        if(docSnap.exists()) {
                            let data = docSnap.data();
                            let qtype = data.Type;
                            if (qtype == "selection") {
                                const video = data.video;
                                setQuestion(data.question);
                                setCorrect(data.correct);
                                setWrong1(data.wrong1);
                                setWrong2(data.wrong2);
                                setWrong3(data.wrong3);
                                setPage("Select");
                                getDownloadURL(ref(storage, `videos/${video}`))
                                .then((url) => {
                                    setUrl(url);
                                });
                            }
                        } else {
                            return(
                                setPage("Nonexistant")
                            )
                        }
                }catch(error){
                    console.log(error);
                }
            }
            getquiz();
        }
    }else{
        return(
            <PageNotFound/>
        )
    }
    if(page == "Loading"){
        return(
            <Loading/>
        )
    }else if(page == "Select"){
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
    }
}

export default Qselect;