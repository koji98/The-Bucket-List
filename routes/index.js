const express = require("express"),
      router = express.Router();

const connections = {
  "Adventure": {
    "image": "/images/adventure.jpeg",
    "desc": "",
    "suggestion_images": [
      "/images/adventure/hiking.jpeg",
      "/images/adventure/horseback_riding.jpeg",
      "/images/adventure/kayaking.jpeg",
      "/images/adventure/snorkeling.jpeg",
      "/images/adventure/surfing.jpeg"
    ],
    "suggestion_names": [
      "Hiking",
      "Horseback Riding",
      "Kayaking",
      "Snorkeling",
      "Surfing"
    ]
  },
  "Art": {
    "image": "/images/art.jpeg",
    "desc": "",
    "suggestion_images": [
      "/images/art/ceramic.jpeg",
      "/images/art/drawing.jpeg",
      "/images/art/painting.jpeg",
      "/images/art/photography.jpeg"
    ],
    "suggestion_names": [
      "Ceramics",
      "Drawing",
      "Painting",
      "Photography"
    ]
  },
  "Eating": {
    "image": "/images/eating.jpeg",
    "desc": "",
    "suggestion_images": [
      "/images/eating/chinese_food.jpeg",
      "/images/eating/cooking.jpeg",
      "/images/eating/dessert.jpeg",
      "/images/eating/hard_drinks.jpeg",
      "/images/eating/japanese_food.jpeg",
      "/images/eating/pizza.jpeg",
      "/images/eating/seafood.jpeg",
      "/images/eating/soft_drinks.jpeg"
    ],
    "suggestion_names": [
      "Chinese Food",
      "Cooking",
      "Dessert",
      "Hard Drinks",
      "Japanese Food",
      "Pizza",
      "Seafood",
      "Soft Drinks"
    ]
  },
  "Gaming": {
    "image": "/images/gaming.jpeg",
    "desc": "",
    "suggestion_images": [
      "/images/gaming/arcades.jpeg",
      "/images/gaming/board.jpeg",
      "/images/gaming/card.jpeg",
      "/images/gaming/playstation.jpeg",
      "/images/gaming/xbox.jpeg"
    ],
    "suggestion_names": [
      "Arcades",
      "Board",
      "Card",
      "Playstation",
      "Xbox"
    ]
  },
  "Music": {
    "image": "/images/music.jpeg",
    "desc": "",
    "suggestion_images": [
      "/images/music/concerts.jpeg",
      "/images/music/music_festival.jpeg",
      "/images/music/playing_instruments.jpeg",
      "/images/music/raves.jpeg",
      "/images/music/singing.jpeg"
    ],
    "suggestion_names": [
      "Concerts",
      "Music Fetivals",
      "Playing Instruments",
      "Raves",
      "Singing"
    ]
  },
  "Sports": {
    "image": "/images/sports.jpeg",
    "desc": "",
    "suggestion_images": [
      "/images/sports/1v1.jpeg",
      "/images/sports/excercise.jpeg",
      "/images/sports/team.jpeg",
      "/images/sports/yoga.jpeg"
    ],
    "suggestion_names": [
      "1v1",
      "Excercise",
      "Team",
      "Yoga"
    ]
  },
  "Technology": {
    "image": "/images/technology.jpeg",
    "desc": "",
    "suggestion_images": [
      "/images/technology/hackathon.jpeg",
      "/images/technology/learning.jpeg",
      "/images/technology/project_partners.jpeg",
      "/images/technology/tech_talks.jpeg"
    ],
    "suggestion_names": [
      "Hackathons",
      "Learning",
      "Project Partners",
      "Tech Talks"
    ]
  },
  "Thrill": {
    "image": "/images/thrill_seeking.jpeg",
    "desc": [
      "Are you looking for something that will make your heart rush?",
      "That will make for the best story?",
      "That will make you appreciate life?"
    ],
    "suggestion_images": [
      "/images/thrill_seeking/bungee_jumping.jpg",
      "/images/thrill_seeking/hang_gliding.jpg",
      "/images/thrill_seeking/hot_air_balloon.jpeg",
      "/images/thrill_seeking/para_gliding.jpeg",
      "/images/thrill_seeking/rock_climbing.jpeg",
      "/images/thrill_seeking/sky_diving.jpeg",
      "/images/thrill_seeking/ziplining.jpeg",
      "/images/thrill_seeking/theme_park.jpeg",
      "/images/thrill_seeking/rafting.jpeg"
    ],
    "suggestion_names": [
      "Bungee Jumping",
      "Hang Gliding",
      "Hot Air Ballooning",
      "Paragliding",
      "Rock Climbing",
      "Sky Diving",
      "Ziplining",
      "Theme Park",
      "Rafting"
    ]
  },
}

router.get("/", (req, res) => res.render('landing', {
  names: Object.keys(connections),
  images: Object.values(connections).map(x => x["image"]),
}));

router.get("/:topic", (req, res) => res.render('topic', {
    image: connections[req.params.topic[0].toUpperCase() + req.params.topic.substring(1)]["image"],
    name: req.params.topic[0].toUpperCase() + req.params.topic.substring(1),
    description: connections[req.params.topic[0].toUpperCase() + req.params.topic.substring(1)]["desc"],
    names: connections[req.params.topic[0].toUpperCase() + req.params.topic.substring(1)]["suggestion_names"],
    images: connections[req.params.topic[0].toUpperCase() + req.params.topic.substring(1)]["suggestion_images"],
  }));

module.exports = router;
