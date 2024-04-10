/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */


const artists = [
    {
        name: "BURNA BOY",
        imageURL: "assets/burna_boy.jpg",
        traits: {
            mostPopularSong: "On the Low",
            followersOnIG: "17.1M",
            age: 32
        }
        
    },
    {
        name: "DAVIDO",
        imageURL: "assets/davido.jpg",
        traits: {
            mostPopularSong: "Fall",
            followersOnIG: "29.1M",
            age: 31
        }
        
    },
    {
        name: "TEMS",
        imageURL: "assets/tems.jpg",
        traits: {
            mostPopularSong: "Free Mind",
            followersOnIG: "5.5M",
            age: 28
        }
        
    },
    {
        name: "WIZKID",
        imageURL: "assets/wizkid.jpg",
        traits: {
            mostPopularSong: "Essence",
            followersOnIG: "18.5M",
            age: 33
        }
        
    },
    {
        name: "OLAMIDE",
        imageURL: "assets/olamide.jpg",
        traits: {
            mostPopularSong: "Infinity",
            followersOnIG: "11.6M",
            age: 35
        }
        
    },
    {
        name: "BNXN",
        imageURL: "assets/buju.jpg",
        traits: {
            mostPopularSong: "Finesse",
            followersOnIG: "1.9M",
            age: 26
        }
        
    },
    {
        name: "ODUMODUBLACK",
        imageURL: "assets/odumodublvck.jpg",
        traits: {
            mostPopularSong: "Blood on The Dancefloor",
            followersOnIG: "1.4M",
            age: 30
        }
        
    },
    {
        name: "FLAVOUR",
        imageURL: "assets/flavour.jpg",
        traits: {
            mostPopularSong: "Ashawo",
            followersOnIG: "5.1M",
            age: 40
        }
        
    },
    {
        name: "PHYNO",
        imageURL: "assets/phyno.jpg",
        traits: {
            mostPopularSong: "Do I",
            followersOnIG: "8.5M",
            age: 37
        }
        
    },
    {
        name: "AYRA STARR",
        imageURL: "assets/ayrastar.jpg",
        traits: {
            mostPopularSong: "Rush",
            followersOnIG: "5.1M",
            age: 21
        }
        
    },
    {
        name: "WANDE COAL",
        imageURL: "assets/wandecoal.jpg",
        traits: {
            mostPopularSong: "Iskaba",
            followersOnIG: "1.8M",
            age: 38
        }
        
    },
    {
        name: "2BABA",
        imageURL: "assets/2baba.jpg",
        traits: {
            mostPopularSong: "African Queen",
            followersOnIG: "8.2M",
            age: 48
        }
        
    },
    {
        name: "SIMISOLA",
        imageURL: "assets/simisola.jpg",
        traits: {
            mostPopularSong: "Duduke",
            followersOnIG: "12.5M",
            age: 35
        }
        
    },
];

// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < artists.length; i++) {
        const artist = artists[i];
        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, artist, artist.imageURL); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, artist, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = artist.name; // Assuming the artist object has a 'name' property

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = artist.name + " Poster";

    
    const popularSongElement = card.querySelector(".popular-song");
    popularSongElement.textContent = artist.traits.mostPopularSong;

    const followersElement = card.querySelector(".followers");
    followersElement.textContent = artist.traits.followersOnIG;

    const ageElement = card.querySelector(".age");
    ageElement.textContent = artist.traits.age;

    console.log("new card:", artist.name, "- html: ", card);
}


// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    artists.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
function addArtist() {
    // Prompt the user to input the artist's details
    const artistName = window.prompt("Enter the artist's name:");
    const age = window.prompt("Enter the artist's age:");
    const followers = window.prompt("Enter the artist's number of followers:");
    const popularSong = window.prompt("Enter the artist's most popular song:");
    const imageURL = window.prompt("Enter the artist's image URL:");
  
    // Create a new artist object
    const newArtist = {
        name: artistName,
        imageURL: imageURL,
        traits: {
            mostPopularSong: popularSong,
            followersOnIG: followers,
            age: age
        }
    };
  
    // Add the new artist to the artists array
    artists.push(newArtist);
  
    // Create a new card
    const cardContainer = document.getElementById("card-container");
    const newCard = document.createElement("div");
    newCard.classList.add("card");
  
    // Create card content
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
  
    // Create artist name element
    const artistNameElement = document.createElement("h2");
    artistNameElement.textContent = artistName;
  
    // Create image element
    const imageElement = document.createElement("img");
    imageElement.src = imageURL;
    imageElement.alt = artistName + " Poster";
  
    // Create popular song element
    const popularSongElement = document.createElement("p");
    popularSongElement.innerHTML = "<strong>Most Popular Song:  </strong>" + popularSong;
  
    // Create followers element
    const followersElement = document.createElement("p");
    followersElement.innerHTML = "<strong>Followers on IG:  </strong>" + followers;
  
    // Create age element
    const ageElement = document.createElement("p");
    ageElement.innerHTML = "<strong>Age: </strong>" + age;
  
    // Append elements to card content
    cardContent.appendChild(artistNameElement);
    cardContent.appendChild(imageElement);
    cardContent.appendChild(popularSongElement);
    cardContent.appendChild(followersElement);
    cardContent.appendChild(ageElement);
  
    // Append card content to card
    newCard.appendChild(cardContent);
  
    // Append new card to card container
    cardContainer.appendChild(newCard);

    showCards(); // Refresh the cards after updating the artist
        alert("Artist added successfully!");
}


function updateArtist() {
    const artistName = window.prompt("Enter the name of the artist to update:");
    
    const artist = artists.find(artist => artist.name.toLowerCase() === artistName.toLowerCase());
    
    if (artist) {
        const infoToUpdate = window.prompt('Enter the info to be updated: Please type "age", "IgFol", "image", or "popSong".');
        
        switch (infoToUpdate.toLowerCase()) {
            case "age":
                const newAge = window.prompt("Enter the updated age:");
                artist.traits.age = newAge;
                break;
            case "igfol":
                const newFollowers = window.prompt("Enter the updated number of followers on IG:");
                artist.traits.followersOnIG = newFollowers;
                break;
            case "image":
                const newImageURL = window.prompt("Enter the updated image URL:");
                artist.imageURL = newImageURL;
                break;
            case "popsong":
                const newPopularSong = window.prompt("Enter the updated most popular song:");
                artist.traits.mostPopularSong = newPopularSong;
                break;
            default:
                alert("Invalid info type. Please enter 'age', 'IgFol', 'image', or 'popSong'.");
                return;
        }
        
        showCards(); // Refresh the cards after updating the artist
        alert("Artist updated successfully!");
    } else {
        alert("Artist not found.");
    }
}


  
function removeArtist() {
    const artistName = window.prompt("Which Artist will be leaving the list today?");
  
    const artistIndex = artists.findIndex(artist => artist.name.toLowerCase() === artistName.toLowerCase());
  
    if (artistIndex !== -1) {
      artists.splice(artistIndex, 1);
      showCards();
      alert("Artist removed successfully!");
    } else {
      alert("Artist not found.");
    }
  }