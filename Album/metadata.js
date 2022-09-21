let fs = require("fs");
let axios = require("axios");

let songs = ["blablabla", "ohYeahMusic"];
let durations = ["00:24", "00:15"];
let ipfsArray = [];

for (let i = 0; i < songs.length; i++) {
  ipfsArray.push({
    path: `metadata/${i}.json`,
    content: {
      image: `ipfs://xxx`, //xxx = hash    ****NODE MUSIC.JS  only take the hash..
      name: songs[i],
      animation_url: `ipfs://xxx/`, //xxx = hash /media/${i}
      duration: durations[i],
      artist: "viva music",
      year: "2022"
    },
  });
}

// in IPFS we have a json file with the songs and image of the NF (******NODE METADATA.js)

axios.post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", ipfsArray, {
    headers: {
      "X-API-KEY":
        "<API Key Here>",
      "Content-Type": "application/json",
      accept: "application/json",
    },
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.log(error);
  });