import React, { useState, useEffect } from "react";
import axios from "axios"

import "./App.css";

const dummyData = {
  date: "2023-05-07",
explanation: "Will our Sun look like this one day?  The Helix Nebula is one of brightest and closest examples of a planetary nebula, a gas cloud created at the end of the life of a Sun-like star. The outer gasses of the star expelled into space appear from our vantage point as if we are looking down a helix. The remnant central stellar core, destined to become a white dwarf star, glows in light so energetic it causes the previously expelled gas to fluoresce. The Helix Nebula, given a technical designation of NGC 7293, lies about 700 light-years away towards the constellation of the Water Bearer (Aquarius) and spans about 2.5 light-years. The featured picture was taken with the Canada-France-Hawaii Telescope (CFHT) located atop a dormant volcano in Hawaii, USA. A close-up of the inner edge of the Helix Nebula shows complex gas knots of unknown origin.",
hdurl: "https://apod.nasa.gov/apod/image/2305/Helix2_CFHT_1917.jpg",
title: "The Helix Nebula from CFHT"
}

function App() {
  const [data, setData] = useState(dummyData);

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(res => {
      console.log(res);
    })
    .catch(err => console.error(err))
  }, [])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;

//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

/**
 * 
 * date: "2023-05-07"
explanation: "Will our Sun look like this one day?  The Helix Nebula is one of brightest and closest examples of a planetary nebula, a gas cloud created at the end of the life of a Sun-like star. The outer gasses of the star expelled into space appear from our vantage point as if we are looking down a helix. The remnant central stellar core, destined to become a white dwarf star, glows in light so energetic it causes the previously expelled gas to fluoresce. The Helix Nebula, given a technical designation of NGC 7293, lies about 700 light-years away towards the constellation of the Water Bearer (Aquarius) and spans about 2.5 light-years. The featured picture was taken with the Canada-France-Hawaii Telescope (CFHT) located atop a dormant volcano in Hawaii, USA. A close-up of the inner edge of the Helix Nebula shows complex gas knots of unknown origin."
hdurl: "https://apod.nasa.gov/apod/image/2305/Helix2_CFHT_1917.jpg"
title: "The Helix Nebula from CFHT"

 */
