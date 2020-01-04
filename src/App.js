import React from 'react';
import './App.css';

import UserItem from "./components/UserItem";

import {connect} from "react-redux";
import {fetchData} from "./actions/testTastAction";
import {testTaskReducer} from "./reducer/testTaskReducer";


class App extends React.Component{


    // changeValue(){
    //     let url = "https://yalantis-react-school.herokuapp.com/api/task0/users";
    //     let value = this.text.value;
    //     this.props.toProps(url)
    // }

    componentDidMount() {
        this.props.toProps("https://yalantis-react-school.herokuapp.com/api/task0/users")
    }

    render() {
        return(
            <React.Fragment>
                <h1>user list:</h1>
                {this.props.data.map((data) => {
                    let dataDOB = new Date(data.dob);
                    return(
                        <h5 key={dataDOB}>{dataDOB.getMonth()}</h5>
                    )
                })}
                <input type="text" />
                <button></button>
            </React.Fragment>

        )
    }
}

const mapStateToProps = (state) => {
    return({
        data: state.testTask
    })
};

const mapDispatchToProps = (dispatch) => {
    return({
        toProps: (data) => dispatch(fetchData(data))
    })
};



export default connect(mapStateToProps, mapDispatchToProps)(App);
