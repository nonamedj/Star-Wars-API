import React from "react";

function Join() {
    var intro = new Audio('https://www.mboxdrive.com/John%20Williams%20-%20March%20of%20the%20Resistance%20(Audio%20Only).mp3');
    intro.play();
    
    return(
            <div className="star-wars-intro">
                <p className="intro-text">
                    It's the Resistance!
                </p>
                <h2 className="main-logo">
                    <img src="https://i.ibb.co/jvy7BPS/swapi.png" alt="swapi 1.0.0." />
                </h2>
                <div className="main-content">
                    <div className="title-content">
                        <p className="content-header">Join The Resistance!</p>
                        <br/>
                        <p className="content-body">
                        The Resistance (28 ABY–), also known as the Rebellion or the Resistance military, was a military resistance movement that fought against the First Order to both preserve democracy and to restore the New Republic. Emerging as a private military force and splinter of the New Republic Defense Force during the cold war between the New Republic and the First Order, a mysterious Imperial remnant located in the Unknown Regions. The Resistance was founded by General Leia Organa to protect the New Republic. Modeled to an extent on the Alliance to Restore the Republic, which Organa served with in the Galactic Civil War, the Resistance was composed of human and alien members that shared Organa's views on the threat that the First Order posed to the Republic and the galaxy at large. Among the organization's personnel were members of the New Republic military, such as the pilots Poe Dameron and Kazuda Xiono, who supported the Resistance in lieu of direct action from the Galactic Senate, while others like Paige and Rose Tico rallied to Organa's cause as a result of the First Order's exploitation of their homeworld.
                        </p>
                        <a href="/" className="space-button">Use SW API!</a>   
                    </div>
                </div>
            </div>
    )
}
export default Join;