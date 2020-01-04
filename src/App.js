import React from 'react';
import './App.css';

import Month from "./components/Month/Month";

import {connect} from "react-redux";
import {fetchData} from "./actions/testTastAction";


class App extends React.Component {

    componentDidMount() {
        this.props.toProps("https://yalantis-react-school.herokuapp.com/api/task0/users")
    }


    render() {

        const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        return (
            <ul className="monthList">
                {monthList.map((item, index) => {
                    let users = [], color;
                    this.props.data.map((data) => {
                        // let dataDOB = new Date(data.dob).getMonth();  IT DOESN'T WORK!!!!!!
                        let dataDOB = +data.dob.substr(5,2);
                        console.log(data.dob, dataDOB)
                        if (index + 1 === dataDOB) {
                            console.log(index, dataDOB)
                            users.push(data)
                        }
                    });
                    switch (true) {
                        case users.length >= 0 && users.length <= 2:
                            color = 'lightgray';
                            break;
                        case users.length >= 3 && users.length <= 6:
                            color = 'lightblue';
                            break;
                        case users.length >= 7 && users.length <= 10:
                            color = 'lightgreen';
                            break;
                        case users.length >= 11:
                            color = 'lightcoral';
                            break;
                        default: color = 'lightgray';
                    }
                    return (
                        <Month color={color} key={index} month={item} users={users}/>
                    )
                })}

            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        data: state.testTask
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        toProps: (data) => dispatch(fetchData(data))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
