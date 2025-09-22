import React from "react";
import { NewComponent } from "./App.js"; // Import the FollowButton component

// Import all images
import benImage from 'img/ben.jpeg';
import gokuImage from 'img/goku.jpeg';
import narutoImage from 'img/naruto.jpeg';
import spidermanImage from 'img/spiderman.jpeg';
import supermanImage from 'img/superman.jpeg';
import ironmanImage from 'img/ironman.jpeg';
import wonderwomanImage from 'img/wonderwoman.jpeg';

export function App() {
  // Array of objects with data for each FollowButton
  const followData = [
    { image: benImage, title: "Ben 10 All Alien's", initialCount: 101 },
    { image: gokuImage, title: "Goku's Adventures", initialCount: 120 },
    { image: narutoImage, title: "Naruto's Journey", initialCount: 130 },
    { image: spidermanImage, title: "Spider-Man's Web", initialCount: 140 },
    { image: supermanImage, title: "Superman's Strength", initialCount: 150 },
    { image: ironmanImage, title: "Iron Man's Tech", initialCount: 160 },
    { image: wonderwomanImage, title: "Wonder Woman's Power", initialCount: 170 }
  ];

  return (
    <div>
      {/* Map over the array and render a FollowButton for each item */}
      {followData.map((item, index) => (
        <FollowButton
          key={index}
          image={item.image}
          title={item.title}
          initialCount={item.initialCount}
        />
      ))}
    </div>
  );
}

export default App;
