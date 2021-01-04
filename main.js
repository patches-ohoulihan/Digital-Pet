/* Requirements

Create a repo for your tomagotchi pet - COMPLETE
make a commit after you finish each one of the following
Create a Class (JS Class, look at your notes if your forget) for your tomagotchi - COMPLETE
Instatiate your Tomagotchi
Display a character of your choice on the screen to represent your pet - Complete
Display the following metrics for your pet:
Hunger (1-10 scale) - BARS COMPLETE NEED TO ADD VALUES
Sleepiness (1-10 scale)
Boredom (1-10 scale)
Age 
Add buttons to the screen to feed your pet, turn off the lights, and play with your pet. - CSS complete need to add event handlers
Add the ability to name your pet. - WANT TO INITIATE NAMING AFTER EVENT CLICK ON START BUTTON AT BEGINNING OF GAME, WILL TIE IN AGING ON CLICK AS WELL
Style the page. - COMPLETE 
Increase your pet's age every x minutes
Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
You pet should die if Hunger, Boredom, or Sleepiness hits 10.
Animate your pet across the screen while it's alive. - COMPLETE */


class Pet { 
   constructor (age, hunger, boredom, sleep) {

    this.age = age;
    this.hunger = hunger;
    this.boredom = boredom;
    this.sleep = sleep;

}
};



function Feed(){
   document.getElementById("buttonHunger").addEventListener("click", )
}

/*Need function for aging after game start*/

/* Need function for sleep/ boredom/ hunger to increase */

/*need function for random stats at start of game*/
function getRandomInt(max) {
    return (Math.floor(Math.random() * Math.floor(max))) + 1;
};
console.log(getRandomInt(10));


/*light switch function - working*/

function goDark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 };

 /* name pet*/
 function onButtonClick(){
    document.getElementById('textInput').className="show";
    }