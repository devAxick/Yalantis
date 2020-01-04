import React from "react";
import styles from "./UserItem.module.css";

function UserItem(props) {
    return(
        <React.Fragment>
            <h5 className={styles.name}>props.firstName</h5>
        </React.Fragment>
    )
}

export default UserItem;