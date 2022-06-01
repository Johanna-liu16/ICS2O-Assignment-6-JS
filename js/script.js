// Copyright (c) 2020 Johanna Liu All rights reserved
//
// Created by: Johanna Liu
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

;("use strict")
/**
 * Get API info.
*/
// code from: https://www.youtube.com/watch?v=670f71LTWpM

const getImage = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    const feeling = jsonData.url
    
    
    console.log(jsonData[0].url)
    document.getElementById("api-image").innerHTML = '<img src="' + jsonData[0].url + '" alt="Cat image" class="center" width="40%" ' + ">"; 

  } catch (err) {
    console.log(err);
  };
};
getImage("https://api.thecatapi.com/v1/images/search")
