import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';


export default class Ratings extends Component {
    constructor() {
        super();
        this.state = {
            rating: 1
        };
    }
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }
    render(){
        const { rating } = this.state;
        return (
            <div>
           <h2 style={{ paddingTop: "260px", color: "white"}}>Rate us</h2>
        <StarRatingComponent
        name="rate1"
        starCount={5}
        value={rating}
        onStarClick={this.onStarClick.bind(this)} />
           
  </div>
        );
    }
}
