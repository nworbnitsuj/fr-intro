import * as React from "react";
import "./Main.scss";

const frLogo = require("../../assets/logo.png");

export default class Main extends React.Component {
    public state = { // do not edit
        view: 0,
        resource: null
    };

    private _toggleView() {
        this.setState({
            view: this.state.view == 0 ? 1 : 0,
        })
    }

    public viewSample(e, resource) {
        this.state.resource = resource;
        this._toggleView();
    }

    public viewTable(e, resource) {
        this._toggleView();
    }

    public renderContent() {

    }

    render() {
        return (
            <div className="main">
                <div className="header-row">
                    <img src={frLogo}/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="container">
                            {/*CONTENT GOES HERE*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
