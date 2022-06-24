//Choose your adventure!
//Enter a user name.
let userName = prompt("What is your name?");

alert(`Greetings, ${userName}!`);

//Allows user to end the game-loop.
const playGame = (choice) => {
  if (choice) {
    alert("Ok, let us begin!");
    chooseDoors();
  } else {
    alert("See you next time...");
  }
}

//Initialized the game.
const startGame = () => {
  let userPlay = confirm("Do you want to go on an adventure?");
  playGame(userPlay);
}
// console.log(userName);


//End of left door path.
const leftDoor = () => {
  //Left door choosen.
  let evenOrOdd = prompt("Having chosen the left door, you find yourself outside. There, you bump into a rather attractive old friend of yours...you haven't seen them in ages! After striking up a conversation, you both decide to continue this chance encounter...but where to? With two options, your friend asks you to pick by guessing if the number they are thinking of is even, or odd. Enter any 'EVEN' or 'ODD' number (such as 1 or 2).");
  let evenOrOddParsed = parseInt(evenOrOdd);
  if (evenOrOddParsed % 2) {
    let chocieValid = true;
    while (chocieValid) {
      //This loop will make sure that the choice is valid, foring one to enter a proper answer to end the adventure.
      let stayOrGo = prompt("You guessed an odd number, which, incidentally, is your old friend's favorite! The two of you agree to go down to a local bar known for live music and strong drinks, barely noticing that shady-looking person now retreating down the street. At the bar, one of your friend's favorite band is playing, and the two of you are having a great time. The crowd does seem to be growing a bit extra rowdy tonight, though. Do you try to convince your friend to move to the next place (G), or stay (S) and continue to enjoy the music?");
      if (stayOrGo.toUpperCase() === "G") {
        alert("Seensing the increasing fervor of the crowd, you suggest to your friend that it may be a good time to leave. Not wanting to leave before the band is done, your friend is disappointed that you want to 'whimp-out.' Sure enough, a ruckus breaks out, and thank goodness you were already headed for the door. Your friend remains unimpressed, though, and the night ends cordially, but in disappointment. Thus, we conclude today's adventure.");
        chocieValid = false;
      } else if (stayOrGo.toUpperCase() === "S") {
        alert("Seeing how much your friend is enjoying the show, you cautiously decide to stay. Sure enough, a ruckus breaks out near to you, and as you reach to shield your friend, you take a stray hit to the head from a drunken brawler. When you come to, your friend is kneeling over you, along with the EMT. Maybe a bit embarrassing, but your friend finds the incident endearing. You'll surely be seeing each other again soon, perhaps the start of a new relationship. An adventure to remember!");
        chocieValid = false;
      } else {
        alert("Your friend would find such lack of commitment offputting...enter (G) to go or (S) to stay.");
      }
    }
    startGame();
  } else if (isFinite(evenOrOddParsed)) {
    //This is similar to the above, but if you choose an even number.
    let catchValid = true;
    while (catchValid) {
      let catchOrNot = prompt("You chose an even number, which involved going to a local baseball game. Your friend is a fan of the team, and the two of you manage to get some cheap tickets inho the park. Once inside, you have a great time catching up, and the team plays well. A homerun ball gets hit your way, and you're in the area to catch it, but you'll have to box out some kids to catch it. Do you (C) aggressively attempt to catch the ball, or (H) hold back for the kids?");
      if (catchOrNot.toUpperCase() === "H") {
        alert("You decide you don't need that ball that badly, and let the kids scramble for it. You and your friend have a good chuckle over it, and the game continues, with your team even securing a win. Expressing the great time they had, your friend invites you over to their place. Seeing as they're on the way back toward your home anyway, you agree, and the night continues on from there. An adventure was had, indeed.");
        catchValid = false;
      } else if (catchOrNot.toUpperCase() === "C") {
        alert("Being larger than those kids, you easily box them out, and that homerun ball is yours! Your friend doesn't seem as pleased as you are about it, thoug, and one of the kids might be crying. There's no crying in baseball, though, and that kid can eat $&!t. The team won, and the two of you had a good time. Your friend is tired though, and decides to go home. Maybe you'll see each other again sometime. And so goes that adventure.");
        catchValid = false;
      } else {
        alert("Make a choice, quick! To catch (C) or hold back for the kids (H).");
      }
    }
    startGame();
  } else {
    alert(`That's not a number! Come on, I made it easy for you...it doesn't even have to be specific!`);
    leftDoor();
  }
}

//End other right door path.
const rightNoEat = () => {
  let rightWitness = prompt("Having decided against the sandwich, you head for the exit door. Once outside, howeve, you notice a person being mugged by an unknown assailant. Do rush in to attempt to help (H), or do you stand by and call the police (P)?");
  if (rightWitness.toUpperCase() === "H") {
    alert("Rushing on in, you take the mugger by suprise. Your coming out of nowhere clearly surprised the mugger, causing him to drop his knife. Having recovered enough to make a decision, the mugger decides to run off, cutting his loses. You look down to tend to the victim, and lo and behold, it is an old, rather attractive friend of yours! You haven't seen each other in ages! Rattled, but fortunately not seriously harmed, you spend the rest of your day helping your friend cope with the incident, and in filing a police report. Quite an adventure!");
    startGame();
  } else if (rightWitness.toUpperCase() === "P") {
    alert("You immediately whip ouh your phone and call the police. Of course, they dispatch a unit to the area, but they can't be there instantly. As you watch, filming the affair at a safe distance, you see the man swing his knife, and his victim fall, grieviously wounded. The mugger then runs off, leaving you to tend to the victim, now lying wounded on the ground. You realize that you know the victim, a friend of yours from a while back, and on closer inspection you see the wounds are worse than you had thought. Thanks to your quick application of first aide, the victim was able to survive (in critical care), but the rest of your day is spent in police interviews and hospital waiting rooms.");
    startGame();
  } else {
    alert("Make a decision...a life may be on the line! Either help (H) or call the police (P)!");
    rightNoEat();
  }
}

//End one right door path.
const rightToJail = (condiment) => {
  //Here you ate the sandwich.
  alert(`Upon finishing the sandwich, you notice another door, which takes you to the outside of the house. You enter a very busy scene...apparently something bad happened while you were enjoying your sandwich. The police notice you looking about, and grow suspicious...they decide you're worth taking in to "answer some questions", oh no!`)
  if (condiment === "3") {
    alert("After a couple hours of interrogation at the station, insisting that you missed the events while eaiting that sandwich, you start to have that gurgly feeling. At first you think it's justs nerves, but then you remember the horsey sauce! Unable to contain yourself any longer, you unleash something most foul, forever ruining your underpants. Fortunately, one of the cops is in the know about the consequences of horsey sauce, and having confirmed your alibi in such a...dramatic fasion, you are released.");
    let rightGoOut = prompt("After returning home (and replacing your pants), you get a message from a friend asking if want to join them for a drink. After the day you had, do you take them up on the offer (Y), or do you stay in and try to relax (N)?");
    rightGoOut.toUpperCase();
    if (rightGoOut === "Y") {
      alert(`Feeling in need of a good drink, and armed with a good story, you head out on the town. You and your friends have a great time, making up for the otherwise terrible day you had. Congrats, you had a sucessful adventure...could've been worse.`);
      startGame();
    } else {
      alert("Feeling overwhelmed, you decide to stay in for the night. You pour yourself a drink, settle into your favorite nighttime activity, and try not to put the day behind you. What a day!");
      startGame();
    }
  } else {
    let rightCall = prompt("After bringing you back to the station, the police are intent on begining their questioning, but you know you have your rights. Do you remain silent, and insist on calling your laywer (L), or do you try to cooperate (C), confident of your innocence?");
    if (rightCall.toUpperCase() === "L") {
      alert(`You chose to call your laywer, much to the consternation of the police. A wise decision, though. In time, with your laywer briefed on the situation, she was able to help you prove your innocence and get the case dropped...well worth the "nominal fee." Congratulations, what an adventure!`);
      startGame();
    } else {
      alert(`Confident of your innocence, you attempt to cooperate with the "friendly" cops on your own. Your inexperince with the law leaves you ill prepared for what comes next, however. You prove no match for the heavy-handed tactics and obscure legal procedures used against you...if only you had called that laywer sooner! Now faced with a life sentance, you cry yourself to sleep as quietly as possible in your holding cell. Goodnight!`);
      startGame();
    }
  }
}

//Right door path second choices.
const rightSandwich = () => {
  //Your FIRST choice was right; the next to transpire follows here.
  let condiChoice = prompt("With no one else around, who could be blamed for not wanting a good sandwich go to waste? You notice a choice of condiments also available on the table, which choice do you make? (1) Mustard? (2) BBQ? (3) Horsey? Or do you not eat ('ELSE')?");
  let chosenCondi = condiChoice.toString();
  switch (condiChoice) {
    case "1":
      //
      alert("Good old mustard, a tried and true decision...");
      rightToJail(chosenCondi);
      break
    case "2":
      alert("BBQ sauce...a bold choice! Ought to be tasty...");
      rightToJail(chosenCondi);
      break
    case "3":
      //
      alert("Ever one to buck the norm, you decide to take your chances with the horsey sauce. Slathering it on thick, you dive on it...");
      rightToJail(chosenCondi);
      break
    default:
      alert("You decided not to eat the sandwich after all.");
      rightNoEat();
  }
}

//This is the first set of choices.
const chooseDoors = () => {
  let doorChoice = prompt("You see two doors ahead of you...do you go left or right?");
  let usedDoor = doorChoice.toLowerCase();
  switch (usedDoor) {
    case "left":
    case "l":
      alert("You walk confidently up to the left door, grabbing the handle eager to see what is on the other side...");
      leftDoor();
      break
    case "right":
    case "r":
      alert("You find yourself inside a small room, with a suspiciously unattended (yet surpisingly fresh) sandwich on a table.");
      rightSandwich();
      break
    default:
      alert(`That was not a choice! Please enter "left" (L), or "right" (R)`);
      chooseDoors();
  }
}

//Call the function to start the game.
startGame();