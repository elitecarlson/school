import { useParams } from "react-router-dom";

function Account(){
    const {id} = useParams();
    return(
        <>
        <h1>Hey there {id}</h1>
        </>
    );
}

export default Account