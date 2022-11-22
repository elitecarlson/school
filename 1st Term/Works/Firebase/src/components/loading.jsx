import css from "../Assets/css/loading.module.css";
import { BarLoader } from "react-spinners";

function Loading(){
    return(
        <>
        <div className={css.page}>
            <div className={css.centered}>
                <div className={css.logo}></div>
                <BarLoader color={"#349aff"} width="60"/>
            </div>
        </div>
        </>
    );
}
export default Loading