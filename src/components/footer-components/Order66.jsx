import React from "react";

function Order66() {
    
    var intro = new Audio('https://vignette.wikia.nocookie.net/starwars/images/1/16/Execute_Order_66.ogg/revision/latest?cb=20090520162231');
    intro.play();
    setTimeout(play,2500);
    var march = new Audio('https://www.mboxdrive.com/Jedi%20temple%20march%20loop%20[marching%20sound%20edit].mp3');
    function play(){
        march.play();
    }
    
    return(
            <div className="star-wars-intro">
                <p className="intro-text">
                    Execute Order 66…
                </p>
                <h2 className="main-logo">
                    <img src="https://i.ibb.co/jvy7BPS/swapi.png" alt="swapi 1.0.0"  />
                </h2>
                <div className="main-content">
                    <div className="title-content">
                        <p className="content-header">Order 66</p>
                        <br/>
                        <p className="content-body">
                        Order 66, also known as Clone Protocol 66, was a top secret order identifying all Jedi as traitors to the Galactic Republic and, therefore, subject to summary execution by the Grand Army of the Republic. The order was programmed into the Grand Army clone troopers through the behavioral modification biochips implanted in their brains, making it impossible for the clones to disobey the command to turn against their Jedi Generals. The Kaminoan scientists who designed the clone troopers believed it was only to be used as a contingency protocol against renegade Jedi. In secret, Order 66 was the means by which the Sith intended to bring about the long awaited fall of the Jedi Order.During the Clone Wars, the Sith agenda was progressing relatively unnoticed until a premature activation of Order 66 resulted in the death of General Tiplar at the hands of CT-5385 "Tup", a defective clone whose malfunctioning chip caused him to turn against his Jedi officer. Another soldier, CT-5555 "Fives" conducted his own investigation into the matter, believing the incident to be a Separatist plot against the Republic. On the galactic capital Coruscant, however, he learned that the chips conditioned the clones to become hostile against the Jedi. Furthermore, he discovered to an extent Supreme Chancellor Sheev Palpatine's involvement in the conspiracy and attempted to assassinate him. Fives told what he knew to his Jedi superior Anakin Skywalker; but before the clone could prove it, he was killed by clone shock troopers of the Coruscant Guard.
                        </p>
                        <a href="/" className="space-button">Use SW API!</a>   
                    </div>
                </div>
            </div>
    )
}
export default Order66;