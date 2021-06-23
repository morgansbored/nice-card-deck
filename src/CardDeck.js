import React, { Component } from 'react';
import Card from './Card';
import {Suits} from "./Suits";


export default class CardDeck extends Component {
    getCards() {
        let cardList = [];
        Object.keys(Suits).map((suit)=>{
            for (let i = 1; i < 14; i++) {
                const str = i.toString();
                const key = `${suit}-${str}`;
                cardList.push(<Card number={str} suit={suit} key={key} />); 
            }
            return true;
        })
        return cardList;    
    }
    render() {
        return (
            <div className="cards-wrapper">
                {this.getCards()}
            </div>
        );
    }
}