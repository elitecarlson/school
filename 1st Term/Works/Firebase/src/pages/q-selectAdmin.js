import css from "../Assets/css/q-admin.module.css";
import { db } from "../firebase-config";
import { getDoc, doc } from "firebase/firestore";


function QselectAdmin(){
    return(
        <>
            <form action="">
                <input type="text" placeholder="Video name" /><br />
                <input type="text" placeholder="Question"/><br />
                <input type="text" placeholder="Correct answer"/><br />
                <input type="text" placeholder="Wrong answer"/><br />
                <input type="text" placeholder="Wrong answer"/><br />
                <input type="text" placeholder="Wrong answer"/><br />
                <button>Submit</button>
            </form>
        </>
    )
}

export default QselectAdmin;