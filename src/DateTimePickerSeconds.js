import React, { Component, PropTypes } from "react";
import Constants from "./Constants.js";

export default class DateTimePickerSeconds extends Component {
    static propTypes = {
        setSelectedSecond: PropTypes.func.isRequired,
        onSwitch: PropTypes.func.isRequired,
        mode: PropTypes.string.isRequired
    }

    renderSwitchButton = () => {
        return this.props.mode === Constants.MODE_TIME ?
            (
                <ul className="list-unstyled">
                    <li>
                        <span className="btn picker-switch" onClick={this.props.onSwitch} style={{width: "100%"}}><span className="glyphicon glyphicon-time" /></span>
                    </li>
                </ul>
            ) :
            null;
    }

    render() {
        return (
            <div className="timepicker-seconds" data-action="selectSecond" style={{display: "block"}}>
                {this.renderSwitchButton()}
                <table className="table-condensed">
                    <tbody>
                    <tr>
                        <td className="second" onClick={this.props.setSelectedSecond}>00</td>

                        <td className="second" onClick={this.props.setSelectedSecond}>05</td>

                        <td className="second" onClick={this.props.setSelectedSecond}>10</td>

                        <td className="second" onClick={this.props.setSelectedSecond}>15</td>
                    </tr>

                    <tr>
                        <td className="second" onClick={this.props.setSelectedSecond}>20</td>

                        <td className="second" onClick={this.props.setSelectedSecond}>25</td>

                        <td className="second" onClick={this.props.setSelectedSecond}>30</td>

                        <td className="second" onClick={this.props.setSelectedSecond}>35</td>
                    </tr>

                    <tr>
                        <td className="second" onClick={this.props.setSelectedSecond}>40</td>

                        <td className="second" onClick={this.props.setSelectedSecond}>45</td>

                        <td className="second" onClick={this.props.setSelectedSecond}>50</td>

                        <td className="second" onClick={this.props.setSelectedSecond}>55</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

