import React from "react";
import reactDOM from "react-dom";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: props.word
        }
    }


    render() {
        return (
            <div>
                <p>Hello {this.state.word} </p>
            </div>
        )
    }


}
export default App;

reactDOM.render(<App word="there" />, document.getElementById("app"));

