import logo from "../Assets/images/logo.png";
import css from "../Assets/css/navbar.module.css";
import lewis from "../Assets/images/lewis.jpg";
import { Link } from "react-router-dom";


function Navbar(props){
    let position = props.fixed;
    if (position == "true") {
        position = true;
    }else if(position == "false"){
        position = false;
    }
    return(
        <>
        <div className={position ? css.navbarfixed : css.navbarnotfixed}>
            <div className={css.navbarlinks}>
                <Link to='/'>
                    <img src={logo} className={css.logo}/>
                </Link>
                <Link to='/'><p className={css.navlink}>Courses</p></Link>
                <Link to='/'><p className={css.navlink}>My Library</p></Link>
                <Link to='/'><p className={css.navlink}></p></Link>
            </div>
            <div className={css.profileBtn}>
                <img src={lewis} className={css.profilPic}/>
                <p className={css.displayName}>Lewis Hamilton</p>
            </div>
        </div>
        </>
    );
}

export default Navbar;