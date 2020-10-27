import React from "react";

function Policies() {
    var intro = new Audio('https://www.mboxdrive.com/Star%20Wars%20Intro%20HD%201080p.mp3');
    intro.play();
    
    return(
            <div className="star-wars-intro">
                <p className="intro-text">
                    Not really a long time ago, in a city called Debrecen …
                </p>
                <h2 className="main-logo">
                    <img src="https://i.ibb.co/jvy7BPS/swapi.png" alt="swapi 1.0.0." />
                </h2>
                <div className="main-content">
                    <div className="title-content">
                        <p className="content-header">OUR PRIVACY POLICY</p>
                        <br/>
                        <p className="content-body">
                            In this Privacy Policy, 'us' 'we' or 'our' means SW API Pty Ltd ACN 613 271 220.  Our Privacy Policy sets out how we collect, use, store and disclose your personal information. 1. Purpose of this Policy Subject to exceptions, the Privacy Act 1988 (Cth) (Privacy Act) and the Hungarian Privacy Principles govern the handling of personal information in Hungary. If you are located in, or are a citizen of the European Union, you may have additional rights under the European Union General Data Protection Regulation (GDPR).  If you are located in another jurisdiction, additional local requirements will comply. In addition to the above, we also comply with the Hungarian Spam Act 2003 (Cth) (Spam Act), which deals with restrictions on sending unsolicited emails. We are committed to complying with our obligations detailed above. This Policy sets out:
                        </p>
                        <a href="/" className="space-button">Use SW API!</a>   
                    </div>
                </div>
            </div>
    )
}
export default Policies;