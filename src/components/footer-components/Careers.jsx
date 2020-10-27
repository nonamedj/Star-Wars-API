import React from "react";

function Careers() {
 
  return (
    <>
      <h2>Careers for Imperial Stromtroopers!</h2>
      <h3>Click play to see how it looks</h3>
      <iframe
        className="return-iframe"
        title="careers"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/O2F91Up9fT8?start=15"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </>
  );
}
export default Careers;
