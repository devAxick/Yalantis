import React, {useState} from "react";
import styles from "./Month.module.css";

function Month(props) {
    const [display, toggleDisplay] = useState("none");



    return(
        <React.Fragment>
            <li onMouseOver={() => {toggleDisplay("block")}}
                onMouseOut={() => toggleDisplay("none")}
                className={styles.month}
                style={{backgroundColor: props.color}}
            >{props.month}
            </li>


            <ul className={styles.nameList}>
                {props.users.map((user) =>{
                    return <li key={user.id} style={{display: display, backgroundColor: props.color}}>{user.firstName}</li>
                })}
            </ul>
        </React.Fragment>
    )
}

export default Month;