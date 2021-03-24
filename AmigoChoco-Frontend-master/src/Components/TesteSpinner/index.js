import React from "react";
import { BeatLoader } from "react-spinners";

export default class TesteSpinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    render() {
        return (
            <div className="sweet-loading">
                <BeatLoader
                    size={15}
                    color={"white"}
                    loading={this.state.loading}
                />
            </div>
        );
    }
}