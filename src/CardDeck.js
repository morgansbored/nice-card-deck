import React, { Component } from 'react';
import Card from './Card';
import {Suits} from "./Suits";


export default class CardDeck extends Component {
    getCards() {
        let cardList = [];
        Object.keys(Suits).map((suit)=>{
            for (let i = 1; i < 14; i++) {
                cardList.push(<Card number={i} suit={suit} />); 
            }
          })
          return cardList;    
    }
    render() {
        return (
            <div class="cards-wrapper">
                {this.getCards()}
            </div>
        );
    }
}
