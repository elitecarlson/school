import { useState } from "react";

function Shuffle(){
    const correct = 'elon musk';
    const wrong1 = 'andrew tate';
    const wrong2 = 'donald trump';
    const wrong3 = 'kanye west';
    const [shuffledarr, setShuffledarr] = useState([]);

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
    const ansArray = [correct, wrong1, wrong2, wrong3];
    console.log(shuffle(ansArray));
    return(
        <>
            <p>{ansArray[0]}</p>
            <p>{ansArray[1]}</p>
            <p>{ansArray[2]}</p>
            <p>{ansArray[3]}</p>
        </>
    )
}

export default Shuffle;