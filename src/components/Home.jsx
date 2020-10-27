import React from "react";
import Random from "./Random";

function LightTheme() {
  document.getElementById("body").style.backgroundColor = "white";
  var fbox = document.getElementsByClassName("feature-box");
  for (let i = 0; i < fbox.length; i++) {
    fbox[i].style.backgroundColor = "white";
    fbox[i].style.color = "#1b1c1d";
  }
  document.getElementsByClassName("fa-chevron-circle-right")[0].style.color =
    "black";
  document.getElementsByClassName("fa-chevron-circle-left")[0].style.color =
    "black";
  document.getElementById("sign-up-section").style.backgroundColor = "#f8f8f8";
  document.getElementById("sign-up-section").style.color = "#1b1c1d";
  var h2 = document.getElementsByClassName("text-center mb-5");
  for (let i = 0; i < h2.length; i++) {
    document.getElementsByClassName("text-center mb-5")[i].style.color =
      "#1b1c1d";
  }
  document.getElementById("choose-side").style.color = "#1b1c1d";
  document.getElementsByClassName("random-div")[0].style.color = "#1b1c1d";
}

function DarkTheme() {
  document.getElementById("body").style.backgroundColor = "black";
  var fbox = document.getElementsByClassName("feature-box");
  for (let i = 0; i < fbox.length; i++) {
    fbox[i].style.backgroundColor = "black";
    fbox[i].style.color = "#f8f8f8";
  }
  document.getElementsByClassName("fa-chevron-circle-right")[0].style.color =
    "#f8f8f8";
  document.getElementsByClassName("fa-chevron-circle-left")[0].style.color =
    "#f8f8f8";
  document.getElementById("sign-up-section").style.backgroundColor = "#1b1c1d";
  document.getElementById("sign-up-section").style.color = "#f8f8f8";
  var h2 = document.getElementsByClassName("text-center mb-5");
  for (let i = 0; i < h2.length; i++) {
    document.getElementsByClassName("text-center mb-5")[i].style.color =
      "#f8f8f8";
  }
  document.getElementById("choose-side").style.color = "#f8f8f8";
  document.getElementsByClassName("random-div")[0].style.color = "#f8f8f8";
}

function Home() {
  return (
    <div className="home-div">
      <div id="hero-div">
        <img
          id="hero-img"
          src="https://i.ibb.co/n7Htg7V/star-wars-cyberpunk-ap.jpg"
          alt="hero"
        />
      </div>
      <div className="theme-div">
        <button
          type="button"
          onClick={LightTheme}
          className="btn btn-outline-light btn-lg download-button"
        >
          {" "}
          <i className="fas fa-jedi"></i> Light Theme
        </button>
        <button
          type="button"
          onClick={DarkTheme}
          className="btn btn-dark btn-lg download-button"
        >
          <i className="fab fa-galactic-republic"></i> Dark Theme
        </button>
      </div>
      <div id="features" className="row">
        <div className="feature-box  col-sm-4">
          <i className="fas fa-jedi fa-4x"></i>
          <h3>Jedi order/Rebels</h3>
          <p>The good people</p>
        </div>
        <div className="feature-box col-sm-4">
          <i className="fab fa-galactic-republic fa-4x"></i>
          <h3>Empire</h3>
          <p>The dark side</p>
        </div>
        <div className="feature-box col-sm-4">
          <i className="fab fa-galactic-senate fa-4x"></i>
          <h3>Galactic Senate</h3>
          <p>Palpatine is the senate</p>
        </div>
      </div>

      <div
        id="carouselControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://vignette.wikia.nocookie.net/starwars/images/4/47/Rebels-TantiveIVConceptArt-CroppedBackground.png/revision/latest?cb=20150215073634"
              className="d-block"
              alt="wine1-slideshow"
              title="slide1"
            />
            <h3 className="text-center mb-5">CR90 corvette</h3>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.pngkit.com/png/full/162-1626848_star-destroyer-clipart-star-wars-star-destroyer-png.png"
              className="d-block"
              alt="wine2-slideshow"
              title="slide2"
            />
            <h3 className="text-center mb-5">Star Destroyer</h3>
          </div>
          <div className="carousel-item">
            <img
              src="https://vignette.wikia.nocookie.net/starwars/images/8/81/Y-wing.png/revision/latest?cb=20161110013308"
              className="d-block"
              alt="wine2-slideshow"
              title="slide2"
            />
            <h3 className="text-center mb-5">Y-Wing</h3>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselControls"
          role="button"
          data-slide="prev"
          title="previous slide"
        >
          <i className="fa fa-chevron-circle-left fa-2x"></i>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselControls"
          role="button"
          data-slide="next"
          title="next slide"
        >
          <i className="fa fa-chevron-circle-right fa-2x"></i>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <h1 id="choose-side">Choose Side</h1>
      <div className="dark-light-div">
        <div className="box">
          <div className="imgBox">
            <img
              id="dark-side"
              src="https://i.ibb.co/G0n2yhS/the-darkside-and-the-light-starwars-lastjedi-wallpapers-4000x2250.jpg"
              alt="dark-side"
              onClick={DarkTheme}
            />
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <img
              id="light-side"
              src="https://i.ibb.co/JRqspFt/light.jpg"
              alt="light-side"
              onClick={LightTheme}
            />
          </div>
        </div>
      </div>
      <Random />
    </div>
  );
}
export default Home;
