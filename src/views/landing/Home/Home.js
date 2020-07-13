import React, {Component} from "react";

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hasMessage: false
        }
    }

    render() {
        return (
            <div>
                <h1>Hey There</h1>
            </div>
        );
    }

}

export default Home