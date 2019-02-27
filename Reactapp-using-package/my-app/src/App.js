import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return ( <
            div className = "App" >
            <
            div >
            <
            div >
            <
            label
            for = "usr" > Name < /label> <
            input type = "text"
            className = "form-control"
            id = "usr" / >
            <
            /div> <
            div >
            <
            label
            for = "pwd" > Pswd < /label> <
            input type = "password"
            className = "form-control"
            id = "pwd" / >
            <
            /div> <
            button type = "submit"
            className = "btn" > click me < /button> < /
            div > <
            /div>
        );
    }
}

export default App;