import React, { Component } from "react";


export default class ListCharacters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      truths: [
        "If you had to trade lives with someone who shares your first name for both to stay alive, who would you choose and why?",
        "What's your biggest pit peeve?",
        "Do you like someone in this game?",
        "What was the last thing you searched on your phone?",
        "After you've dropped a piece of food, What's the longest time you've left it on the ground and then ate it?",
        "Have you ever played Cards Against Humanity with your parents?",
        "Have you had adventure with someone way more older than you?",
        "What's your most embarrassing moment in public?",
        "Do you drool in your sleep?",
        "How would you rate your looks on a scale of 1 to 10?",
        "What is most illegal thing you have done?",
        "If you were rescuing people from a burning building and you had to leave one person behind from this room, who would it be?",
        "If you could go back in time in erase one thing you said or did, what would it be?",
        "Have you ever taken a selfie in the shower?",
        "Have you ever waved at someone thinking they saw you when really they didn't? What did you do when you realized it??",
        "What is the most childish thing that you still do?",
        "Tell us about a time you embarrassed yourself in front of a person, whom you admire.",
        "Do you have bad foot odor?",
        "If you had to make out with any Disney character, who would it be?",
        "Have you ever wanted to try LARP (Live Action Role-Play)?",
        "Have you ever pretended to be sick to get out of something? If so, what was it?",
        "Do you dance when you’re by yourself?",
        "Have you tried tequila and soda?",
        "What song on the radio do you sing with every time it comes on? ",
        "Have you cried while watching a moviee?",
        "Have you cried in a public place?",
        "Have you ever got caught doing something you shouldn’t?,        ",
        "Have you taken the initiative to talk to someone you like?",
        "Have you had a family crush?",
        "Have you tried weed?",
        "Have you broken a bone?",
        "Is it better to use shampoo as soap or soap as shampoo?",
      ],
      dares: ["Remove your socks with your teeth.",
        "After the group chooses one word, sing a song and insert that word once into every line of the song.",
        " Do pushups until you can’t do any more, wait 5 seconds, and then do one more.",
        "You cant talk during 5 minutes or you drink the whole beer",
        "Dance for 10 seconds",
        "You have to to lick peanut butter, chocolate sauce, whipped cream etc. off the person in front of you's finger,cheek and knees",
        " Let the group give you a new hairstyle.",
        "Try to drink a glass water while standing on your hands.",
        "Give someone your phone and let them send one text to anyone in your contacts.",
        "Let the person to your left draw on your face with a pen.",
        " Make up a 30 second opera about a person or people in the group and perform it.",
        "Imagine something in your room. Now spell it with your nose and keep spelling it with your nose until someone from the group guesses what you are trying spell.",
        " Call the 7th contact in your phone and sing them 30 seconds of a song that the group chooses.",
        " No talking. Pretend to be a food. Don’t pretend to eat the food, pretend to be the food.Keep pretending until someone in the group guesses the food you are.",
         ],
      players: [
        "Player 3",
        "Player 1",
        "Player 4",
        "Player 2",
      ],
      displaying: "Click a button."
    };
    this.displayDare = this.displayDare.bind(this);
  }

  displayDare(e) { 
    const val = e.target.value;
    const newState = this.state[val][
      Math.floor(Math.random() * this.state[val].length)
    ];
    this.setState({ displaying: newState })
  
  }
  
  

  render() {
    return (
      <div>
        <div className="Buttons"><button
         className="selectplayer"
        value="players"
        onClick={this.displayDare}
        >
          Select player

        </button>
          <button
            className="gameButton"
            value="dares"
            onClick=
            {this.displayDare}
          >
            Dare
          </button>
          <button
            className="gameButton"
            value="truths"
            onClick= {this.displayDare}
            
          >
            Truth
          </button>

          <div className="Response">
            <h1>{this.state.displaying}</h1>
          </div>
        </div>
      </div>
    );
  }
}
