import React, { Component } from 'react';
import PropTypes from "prop-types";
import {Suits} from "./Suits";
import './_cards.scss';

export default class Card extends Component {
    getCardClasses() {
        const { number, suit } = this.props;
        const buttonClasses = [
            "card",
            `${suit}-${number}`
        ];

        return buttonClasses.join(" ");
    }
    render() {
        return (
            <div
             className={this.getCardClasses()}
            >
            </div>
        );
    }
}
Card.propTypes = {
    number: PropTypes.string.isRequired,
    suit: PropTypes.oneOf(Object.keys(Suits))
};

Card.defaultProps = {
    number: "1",
    suit: Suits.DIAMONDS
};