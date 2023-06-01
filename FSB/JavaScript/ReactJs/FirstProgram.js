class FirstProgram extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: ""
        }
    }

    render() {
        return (
            <div>
                <div className="top">
                    <input
                        type="text"
                        id="inputFld"
                        onChange={(e) => this.setState({ txt: e.target.value })}
                    />
                </div>

                <div className="bottom">
                    <span>
                        {
                            this.state.txt.split("").reverse().join("")
                        }
                    </span>
                </div>
            </div>
        );
    }
}



ReactDOM.render(<FirstProgram />, document.getElementById("app"));


