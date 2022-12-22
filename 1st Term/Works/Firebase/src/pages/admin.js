import React from 'react';
import css from '../Assets/css/admin.module.css';

const addlanguage = () => {
}
function Admin(props) {
    return (
        <>
        <button onClick={addlanguage}>Add Language</button>
        <div className={css.addlanguage}>
            <div className={css.hidelangdiv}>
                <div className={css.leftarrow}/>
            </div>
            <input className={css.langform} placeholder='Type new language here'></input>
            <button className={css.langbtn}>ADD</button>
        </div>
        </>
    );
}

export default Admin;