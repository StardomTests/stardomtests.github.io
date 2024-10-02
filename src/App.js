import React, { useState, useEffect } from "react";
import { useCallback } from 'react';
import { Timeline } from "react-twitter-widgets";
import {
  BrowserRouter as Router,
  Switch,
  Route /*, Link*/
} from "react-router-dom";
import "./styles.css";

export default function App({ props }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const animationDuration = 60 - scrollPosition / 50;
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--animation-duration",
      `${animationDuration}s`
    );
  }, [animationDuration]);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter']; // Define Konami code here
function Home(props) {
  
   
  const [konamiCodeIndex, setKonamiCodeIndex] = useState(0);
  const descriptions = {
    "https://raw.githubusercontent.com/jordan-trempert/media/main/ae13dcdb84cb157c3f8b35c5077688d058a5458f.png":
      "This mod overhauls The End in an extreme way!",
    "https://github.com/jordan-trempert/media/blob/main/YARO.png?raw=true":
      "A Collection of Games Commonly Remade",
    "https://raw.githubusercontent.com/jordan-trempert/media/main/Project%20Paradox.png":
      "Travel Through Different Worlds to Stop a Zombie Apocalypse",
    "https://raw.githubusercontent.com/jordan-trempert/media/main/Green%20Square%20Adventures.png":
      "A Perfect Platformer With No Bugs",
    "https://raw.githubusercontent.com/jordan-trempert/media/main/Perspective.png":
      "A Non-Euclidean Puzzle Game",
    "https://raw.githubusercontent.com/jordan-trempert/media/main/Dungeon%20Slayer.png":
      "Simple Rouge-like Dungeon Crawler",
    "https://raw.githubusercontent.com/jordan-trempert/media/main/Untitled%20design.png":
      "A Puzzle Game, Sequel to A Blocky Puzzle",
    "https://raw.githubusercontent.com/jordan-trempert/media/main/ABP.png":
      "A Simple Puzzle Platformer",
    "https://raw.githubusercontent.com/jordan-trempert/media/main/Project%20Multiverse%20Icon.png":
      "In Alpha",
    "https://raw.githubusercontent.com/jordan-trempert/media/main/Kurger%20Bing%20Simulator%20Logo.png":
      "Become an Amazing Kurger Bing Employee!",
    "https://raw.githubusercontent.com/jordan-trempert/media/main/parachute.png":
      "Fall and Avoid Bombs! (Suggested on Mobile)",
     "https://raw.githubusercontent.com/jordan-trempert/media/main/grapple.png":
      "Swing Through Space!",
    "https://raw.githubusercontent.com/jordan-trempert/media/main/Time%20Scale%20Logo.png":
      "Platformer Puzzle Game",
    "https://raw.githubusercontent.com/jordan-trempert/media/main/Productivity.png":
      "Become a Corporate Slave! Man I Love April!",
    "https://cdn.modrinth.com/data/iLPzEDlD/55a2d8c5dfa847d149b34dc54fa6f6952afcb31f.png":
      "Syncs real life time and weather into Minecraft",
    "https://raw.githubusercontent.com/jordan-trempert/media/main/38974805_1162594521647001_8678711909508751475_n.png":
      "Swing Through the Multiverse! (VR)",
    "https://raw.githubusercontent.com/jordan-trempert/media/main/1000018639-removebg-preview.png":
      "Gather resources and defend your base!",
    "https://raw.githubusercontent.com/jordan-trempert/media/main/moviewer.png":
      "View and rate movies!",
    "https://cdn.modrinth.com/data/eCxwIAgh/070f5bac4dc3ae760796d66458e006b7c81fd8ba.png":
      "Adds many QoL and customization features to Minecraft!",
    "https://raw.githubusercontent.com/jordan-trempert/media/main/cc.png":
      "Represent Clients to an AI Judge!"
  };
  
const checkKonamiCode = useCallback((event) => {
  if (event.key.toLowerCase() !== konamiCode[konamiCodeIndex].toLowerCase()) {
    setKonamiCodeIndex(0);
    return;
  }

  setKonamiCodeIndex((prevKonamiCodeIndex) => prevKonamiCodeIndex + 1);

  if (konamiCodeIndex + 1 === konamiCode.length) {
    const randomNumber = Math.random();
    let redirectUrl;

    if (randomNumber < 0.2) {
      redirectUrl = 'https://pong.stardomga.me';
    } else if (randomNumber < 0.4) {
      redirectUrl = 'https://stardle.stardomga.me';
    } else if (randomNumber < 0.6) {
      redirectUrl = 'https://mario.stardomga.me';
    } else if (randomNumber < 0.8) {
      redirectUrl = 'https://tetris.stardomga.me';
    } else {
      redirectUrl = 'https://snake.stardomga.me';
    }

    window.location.href = redirectUrl;
  }
}, [konamiCodeIndex]);



  useEffect(() => {
    window.addEventListener('keydown', checkKonamiCode);
    return () => {
      window.removeEventListener('keydown', checkKonamiCode);
    };
  }, [checkKonamiCode]);

  
  const [bg, setBG] = useState("Black");
  const [cursor, setCursor] = useState(false);
  const [description, setDescription] = useState(
    "Stardom's Extreme End"
  );
  const [description2, setDescription2] = useState("Yet Another Rip-Off");
  const [description3, setDescription3] = useState("Project Paradox");
  const [description4, setDescription4] = useState("Green Square Adventures");
  const [description5, setDescription5] = useState("Perspective Part 1");
  const [description6, setDescription6] = useState("Dungeon Slayer");
  const [description7, setDescription7] = useState("A Blocky Puzzle 2");
  const [description8, setDescription8] = useState("A Blocky Puzzle");
  const [description9, setDescription9] = useState("Project Multiverse");
  const [description10, setDescription10] = useState("Kurger Bing Heat'n it up Simulator:...");
  const [description11, setDescription11] = useState("Parachute Fall");
  const [description12, setDescription12] = useState("Gravity Grapple");
  const [description13, setDescription13] = useState("Time Scale");
  const [description14, setDescription14] = useState("Productivity Quest 2024");
  const [description15, setDescription15] = useState("Stardom's Sync");
  const [description16, setDescription16] = useState("Gravity Grapple: Dimensions");
  const [description17, setDescription17] = useState("Cube Conquest");
  const [description18, setDescription18] = useState("MoViewer");
  const [description19, setDescription19] = useState("Stardom's Client");
  const [description20, setDescription20] = useState("Courtroom Chaos");




  let textColor;
  if (bg === "Black") {
    textColor = "white";
  } else {
    textColor = "black";
  }

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}`;
  const starsUrl =
    "url('https://raw.githubusercontent.com/jordan-trempert/media/main/stars.png')";
  const candyUrl =
    "url('https://raw.githubusercontent.com/StardomTests/stardomtests.github.io/main/src/candy.png')";
  const pumpkinsUrl =
    "url('https://raw.githubusercontent.com/StardomTests/stardomtests.github.io/main/pumps.png')";
  const heartsUrl =
    "url('https://raw.githubusercontent.com/StardomTests/stardomtests.github.io/main/Valhearts.png')";
  const cloversUrl =
    "url('https://raw.githubusercontent.com/StardomTests/stardomtests.github.io/main/clover.png')";
  const julyUrl =
    "url('https://raw.githubusercontent.com/jordan-trempert/media/main/July.png')";

  const [bgPic, setBgPic] = useState(starsUrl);
  console.log(date);
 useEffect(() => {
  if (date === "25/12") {
    setBgPic(candyUrl);
  } else if (date === "31/10") {
    setBgPic(pumpkinsUrl);
  } else if (date === "14/2") {
    setBgPic(heartsUrl);
  } else if (date === "17/3") {
    setBgPic(cloversUrl);
  } else if (date === "4/7") {
    setBgPic(julyUrl);
  } else {
    setBgPic(starsUrl);
  }
}, [date, starsUrl, candyUrl]);


  function egg() {
    setBG("Black");
  }
  function egg1() {
    setBG("rgba(0, 77, 194, 1)");
  }
  function egg2() {
    setBG("rgba(10, 97, 17, 1)");
  }
  function egg3() {
    setBG("#00ff87");
  }
  function egg4() {
    setBG("#d61e1e");
  }
  function egg5() {
    setBG("#d62976");
  }
  function egg6() {
    setBG("Black");
  }
  function egg7() {
    setBG("#f96854");
  }
  function egg8() {
    setBG("Black");
  }
  function egg9() {
    setBG("#7289DA");
  }
  function egg10() {
    setBG("#c66a3a");
  }
  function egg11() {
    setBG("#ff4301");
  }
  function egg12() {
    setBG("#7ed957");
  }
  function egg13() {
    setBG("#57ba63");
  }
  function egg14() {
    setBG("#391b67");
  }
  function egg15() {
    setBG("#ff5c5c");
  }
  function egg16() {
    setBG("#C000FB");
  }
  function egg17() {
    setBG("#f29530");
  }
  function egg18() {
    setBG("#0868a8");
  } 
  function egg19() {
    setBG("#A2E363");
  }
  function egg20() {
    setBG("#80607E");
  }

  function egg21() {
    setBG("#EFC75E");
  }
  function egg22() {
    setBG("#5CE1E6");
  }
  function egg23() {
    setBG("#f1c332");
  }
   
  function egg24() {
    setBG("#ffbb57");
  }

  function handleClick() {
    if (!cursor) {
      setCursor(true);
    }
  }

  return (
    <div className="body" style={{ backgroundImage: bgPic }}>
      <div className="header" style={{ backgroundColor: bg }}>
        <span className={cursor ? "custom-cursor" : ""} onClick={handleClick}>
          <img
            src="https://raw.githubusercontent.com/jordan-trempert/media/main/stardom-logo%20(1).png"
            alt="logo"
            id="logo"
            draggable="false"
          ></img>
        </span>
      </div>
      <div className="header" style={{ backgroundColor: bg }}>
        <span onClick={egg}>
          <img
            src="https://raw.githubusercontent.com/jordan-trempert/media/main/stardom-logo%20(1).png"
            alt="logo"
            id="logo"
            draggable="false"
          ></img>
          <div className="text">
            <span id="navbar" style={{ backgroundColor: bg, color: textColor }}>
              <center>
                <a href="#games"> Games</a> | <a href="#socials">Socials</a> |{" "}
                <a href="#mods">Mods</a> | <a href="#tweets">Tweets</a> |{" "}
                <a href="#apps">Apps</a>
              </center>
            </span>
          </div>
        </span>
      </div>
      {/* text-shadow: 1.5px 1.5px 1.5px #ffffff, -1.5px -1.5px 1.5px #ffffff; */}
      <div className="airframe">
        <h1
          style={{
            color: bg,
            textShadow:
              bg === "Black"
                ? "-1px -1px 0 #FFFFFF, 1px -1px 0 #FFFFFF, -1px 1px 0 #FFFFFF, 1px 1px 0 #FFFFFF"
                : "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
          }}
        >
          <br />
          <br />
          <br />
          <a href id="games">
            -Games-{" "}
          </a>
        </h1>
        <br />

           <span id="hover" onClick={egg24}>
          <div className="ds24" id="dsdiv">
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/cc.png"
              alt="dslogo"
              id="dslogo"
              onMouseEnter={(e) => setDescription17(descriptions[e.target.src])}
              onMouseLeave={() =>
                setDescription20("Courtroom Chaos")
              }
            />
            <br />
                  <span id="dscontent">
              {description20}<br />
                <a href="https://courtroom-chaos.stardomga.me">Play in Browser!</a>
    
              
             
            </span>
          </div>
        </span>
         
          <span id="hover" onClick={egg22}>
          <div className="ds22" id="dsdiv">
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/1000018639-removebg-preview.png"
              alt="dslogo"
              id="dslogo"
              onMouseEnter={(e) => setDescription17(descriptions[e.target.src])}
              onMouseLeave={() =>
                setDescription17("Cube Conquest")
              }
            />
            <br />
                  <span id="dscontent">
              {description17}<br />
                <a href="https://stardomgames.itch.io/cube-conquest">Download Beta!</a>
    
              
             
            </span>
          </div>
        </span>

           <span id="hover" onClick={egg19}>
          <div className="ds19" id="dsdiv">
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/38974805_1162594521647001_8678711909508751475_n.png"
              alt="dslogo"
              id="dslogo"
              onMouseEnter={(e) => setDescription16(descriptions[e.target.src])}
              onMouseLeave={() =>
                setDescription16("Gravity Grapple: Dimensions")
              }
            />
            <br />
                  <span id="dscontent">
              {description16}<br />
                <a href="https://www.meta.com/experiences/8988079141207254/?utm_source=oculus&utm_medium=share">App Lab</a>
    
              
             
            </span>
          </div>
        </span>
                    <span id="hover" onClick={egg21}>
          <div className="ds21" id="dsdiv">
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/Productivity.png"
              alt="dslogo"
              id="dslogo"
              onMouseEnter={(e) => setDescription14(descriptions[e.target.src])}
              onMouseLeave={() =>
                setDescription14("Productivity Quest 2024")
              }
            />
            <br />
                  <span id="dscontent">
              {description14}<br />
                <a href="https://stardomgames.itch.io/productivity-quest-2024">Download Now!</a>
    
              
             
            </span>
          </div>
        </span>
              
          <span id="hover" onClick={egg20}>
          <div className="ds20" id="dsdiv">
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/Time%20Scale%20Logo.png"
              alt="dslogo"
              id="dslogo"
              onMouseEnter={(e) => setDescription13(descriptions[e.target.src])}
              onMouseLeave={() =>
                setDescription13("Time Scale")
              }
            />
            <br />
                  <span id="dscontent">
              {description13}<br />
                <a href="https://timescale.stardomga.me">Play in Browser</a> | <a href="https://stardomgames.itch.io/time-scale">Download!</a>
              
             
            </span>
          </div>
        </span>

          <span id="hover" onClick={egg19}>
          <div className="ds19" id="dsdiv">
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/grapple.png"
              alt="dslogo"
              id="dslogo"
              onMouseEnter={(e) => setDescription12(descriptions[e.target.src])}
              onMouseLeave={() =>
                setDescription12("Gravity Grapple")
              }
            />
            <br />
                  <span id="dscontent">
              {description12}<br />
                <a href="https://stardomgames.itch.io/gravity-grapple">Download!</a> | <a href="https://play.google.com/store/apps/details?id=me.StardomGames.GravityGrapple">Android!</a> | <a href="https://youtu.be/iiZeJuqiWaw">Trailer</a>
    
              
             
            </span>
          </div>
        </span>

           <span id="hover" onClick={egg18}>
          <div className="ds18" id="dsdiv">
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/parachute.png"
              alt="dslogo"
              id="dslogo"
              onMouseEnter={(e) => setDescription11(descriptions[e.target.src])}
              onMouseLeave={() =>
                setDescription11("Parachute Fall")
              }
            />
            <br />
            <span id="dscontent">
              {description11} <br />
              <a href="https://parachutefall.stardomga.me/game/index.html">
                Play!
              </a>
            </span>
          </div>
        </span>
              
        <span id="hover" onClick={egg17}>
          <div className="ds17" id="dsdiv">
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/Kurger%20Bing%20Simulator%20Logo.png"
              alt="dslogo"
              id="dslogo"
              onMouseEnter={(e) => setDescription10(descriptions[e.target.src])}
              onMouseLeave={() =>
                setDescription10("Kurger Bing Heat'n it up Simulator:...")
              }
            />
            <br />
            <span id="dscontent">
              {description10} <br />
              <a href="https://stardomgames.itch.io/kurger-bing-heatn-it-up-simulator-2023-remastered-remix-ultimate-special-edition">
                Download!
              </a>
            </span>
          </div>
        </span>

        <span id="hover" onClick={egg16}>
          <div className="ds16" id="dsdiv">
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/Project%20Multiverse%20Icon.png"
              alt="dslogo"
              id="dslogo"
              onMouseEnter={(e) => setDescription9(descriptions[e.target.src])}
              onMouseLeave={() => setDescription9("Project Multiverse")}
            />
            <br />
            <span id="dscontent">
              {description9} <br />
              <a href="https://stardomgames.itch.io/project-multiverse">
                Download!
              </a>
            </span>
          </div>
        </span>

        <span id="hover" onClick={egg6}>
          <div className="ds6" id="dsdiv">
            <img
              src="https://github.com/jordan-trempert/media/blob/main/YARO.png?raw=true"
              alt="abp2logo"
              id="dslogo"
              onMouseEnter={(e) => setDescription2(descriptions[e.target.src])}
              onMouseLeave={() => setDescription2("Yet Another Rip-Off")}
            />
            <br />
            <span id="dscontent">
              {description2} <br />
              <a href="https://stardomgames.itch.io/yaro">Download!</a>
            </span>
          </div>
        </span>
        <span id="hover" onClick={egg10}>
          <div className="ds10" id="dsdiv">
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/Project%20Paradox.png"
              alt="dslogo"
              id="dslogo"
              onMouseEnter={(e) => setDescription3(descriptions[e.target.src])}
              onMouseLeave={() => setDescription3("Project Paradox")}
            />
            <br />
            <span id="dscontent">
              {description3}
              <br />
              <a href="https://stardomgames.itch.io/project-paradox">
                Download Now!
              </a>
              <br />
            </span>
          </div>
        </span>
        <span id="hover" onClick={egg12}>
          <div className="ds12" id="dsdiv">
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/Green%20Square%20Adventures.png"
              alt="dslogo"
              id="dslogo"
              onMouseEnter={(e) => setDescription4(descriptions[e.target.src])}
              onMouseLeave={() => setDescription4("Green Square Adventures")}
            />
            <br />
            <span id="dscontent">
              {description4} <br />
              <a href="https://stardomgames.itch.io/green-square-adventures">
                Download on itch.io!
              </a>
              <br />
            </span>
          </div>
        </span>
        <span id="hover" onClick={egg10}>
          <div className="ds10" id="dsdiv">
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/Perspective.png"
              alt="dslogo"
              id="dslogo"
              onMouseEnter={(e) => setDescription5(descriptions[e.target.src])}
              onMouseLeave={() => setDescription5("Perspective Part 1")}
            />
            <br />
            <span id="dscontent">
              {description5} <br />
              <a href="https://stardomgames.itch.io/perspective-part-1">
                Download Now!
              </a>
              <br />
            </span>
          </div>
        </span>

        <span id="hover" onClick={egg1}>
          <div className="ds1" id="dsdiv">
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/Dungeon%20Slayer.png"
              alt="dslogo"
              id="dslogo"
              onMouseEnter={(e) => setDescription6(descriptions[e.target.src])}
              onMouseLeave={() => setDescription6("Dungeon Slayer")}
            />
            <br />
            <span id="dscontent">
              {description6} <br />
              <a href="https://github.com/StardomGames/Dungeon-Slayer/releases">
                Windows
              </a>
              /
              <a href="https://play.google.com/store/apps/details?id=com.stardom.dungeonslayer">
                Android
              </a>
            </span>
          </div>
        </span>
        <span id="hover" onClick={egg2}>
          <div className="ds2" id="dsdiv">
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/Untitled%20design.png"
              alt="abp2logo"
              id="dslogo"
              onMouseEnter={(e) => setDescription7(descriptions[e.target.src])}
              onMouseLeave={() => setDescription7("A Blocky Puzzle 2")}
            />
            <br />
            <span id="dscontent">
              {description7} <br />
              <a href="https://github.com/StardomGames/A-Blocky-Puzzle-2/releases">
                Windows
              </a>
            </span>
          </div>
        </span>
        <span id="hover" onClick={egg3}>
          <div className="ds3" id="dsdiv">
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/ABP.png"
              alt="abp2logo"
              id="dslogo"
              onMouseEnter={(e) => setDescription8(descriptions[e.target.src])}
              onMouseLeave={() => setDescription8("A Blocky Puzzle")}
            />
            <br />
            <span id="dscontent">
              {description8} <br />
              <a href="https://github.com/StardomGames/A-Blocky-Puzzle/releases">
                Windows
              </a>
            </span>
          </div>
        </span>
        <br />
        <br />
        <hr />
        <h1
          style={{
            color: bg,
            textShadow:
              bg === "Black"
                ? "-1px -1px 0 #FFFFFF, 1px -1px 0 #FFFFFF, -1px 1px 0 #FFFFFF, 1px 1px 0 #FFFFFF"
                : "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
          }}
        >
          <a href id="socials">
            -Socials-
          </a>
        </h1>
        <span id="hover" onClick={egg15}>
          <div className="ds15" id="dsdiv">
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/itch.png"
              alt="abp2logo"
              id="dslogo"
            />
            <br />
            <span id="dscontent">
              Itch.io - <a href="https://stardomgames.itch.io/">Follow!</a>
            </span>
          </div>
        </span>
        <span id="hover" onClick={egg13}>
          <div className="ds13" id="dsdiv">
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/109018_media_512x512.png"
              alt="abp2logo"
              id="dslogo"
            />
            <br />
            <span id="dscontent">
              Spotify -{" "}
              <a href="https://open.spotify.com/artist/1WQqvnEv8S9Bc37dqXvQbS?si=YzfOiVSKTEWWAnLdioV85w&utm_source=copy-link">
                Follow!
              </a>
            </span>
          </div>
        </span>
        <span id="hover" onClick={egg4}>
          <div className="ds4" id="dsdiv">
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/youtube.png"
              alt="abp2logo"
              id="dslogo"
            />
            <br />
            <span id="dscontent">
              YouTube -{" "}
              <a href="https://www.youtube.com/channel/UCgmh2uIuUPxIep-qJ2WOEbg">
                Subscribe!
              </a>
            </span>
          </div>
        </span>
        <span id="hover" onClick={egg9}>
          <div className="ds9" id="dsdiv">
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/discord.png"
              alt="abp2logo"
              id="dslogo"
            />
            <br />
            <span id="dscontent">
              Discord - <a href="https://discord.gg/CGqT9WX7sU">Join!</a>
            </span>
          </div>
        </span>
        <span id="hover" onClick={egg5}>
          <div className="ds5" id="dsdiv">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
              alt="abp2logo"
              id="dslogo"
            />
            <br />
            <span id="dscontent">
              Instagram -{" "}
              <a href="https://instagram.com/stardom.games">Follow!</a>
            </span>
          </div>
        </span>
        <span id="hover" onClick={egg8}>
          <div className="ds8" id="dsdiv">
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/x%20logo.png"
              alt="abp2logo"
              id="dslogo"
            />
            <br />
            <span id="dscontent">
              x - <a href="https://twitter.com/Stardom_Games">Follow!</a>
            </span>
          </div>
        </span>
        <span id="hover" onClick={egg6}>
          <div className="ds6" id="dsdiv">
            <img
              src="https://github.com/jordan-trempert/media/blob/main/github.png?raw=true"
              alt="abp2logo"
              id="dslogo"
            />
            <br />
            <span id="dscontent">
              Github - <a href="https://github.com/stardomgames">Projects!</a>
            </span>
          </div>
        </span>
        <span id="hover" onClick={egg7}>
          <div className="ds7" id="dsdiv">
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/patreon.jpg"
              alt="abp2logo"
              id="dslogo"
            />
            <br />
            <span id="dscontent">
              Patreon - <a href="https://patreon.com/stardomgames">Donate!</a>
            </span>
          </div>
        </span>
        <span id="hover" onClick={egg11}>
          <div className="ds11" id="dsdiv">
            <img
              src="https://cdn.fastly.picmonkey.com/content4/previews/social/social_54_550.webp"
              alt="abp2logo"
              id="dslogo"
            />
            <br />
            <span id="dscontent">
              Reddit - <a href="https://reddit/com/r/stardomgames">Join!</a>
            </span>
          </div>
        </span>
        <hr />
        <h1
          style={{
            color: bg,
            textShadow:
              bg === "Black"
                ? "-1px -1px 0 #FFFFFF, 1px -1px 0 #FFFFFF, -1px 1px 0 #FFFFFF, 1px 1px 0 #FFFFFF"
                : "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
          }}
        >
          <a href id="mods">
            -Mods-
          </a>
        </h1>
        <span id="hover" onClick={egg14}>
          <div className="ds14" id="dsdiv">
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/ae13dcdb84cb157c3f8b35c5077688d058a5458f.png"
              alt="dslogo"
              id="dslogo"
              onMouseEnter={(e) => setDescription(descriptions[e.target.src])}
              onMouseLeave={() =>
                setDescription("Stardom's Extreme End")
              }
            />
            <br />
            <span id="dscontent">
              {description} <br />
             <a href="https://modrinth.com/mod/stardoms-extreme-end/">Modrinth</a>
            </span>
          </div>
        </span>
        <span id="hover" onClick={egg6}>
          <div className="ds6" id="dsdiv">
            <img
              src="https://cdn.modrinth.com/data/iLPzEDlD/55a2d8c5dfa847d149b34dc54fa6f6952afcb31f.png"
              alt="dslogo"
              id="dslogo"
              onMouseEnter={(e) => setDescription15(descriptions[e.target.src])}
              onMouseLeave={() =>
                setDescription15("Stardom's Sync")
              }
            />
            <br />
            <span id="dscontent">
              {description15} <br />
             <a href="https://modrinth.com/mod/stardoms-sync/">Modrinth</a>
            </span>
          </div>
        </span>
        <span id="hover" onClick={egg23}>
          <div className="ds23" id="dsdiv">
            <img
              src="https://cdn.modrinth.com/data/eCxwIAgh/070f5bac4dc3ae760796d66458e006b7c81fd8ba.png"
              alt="dslogo"
              id="dslogo"
              onMouseEnter={(e) => setDescription19(descriptions[e.target.src])}
              onMouseLeave={() =>
                setDescription19("Stardom's Client")
              }
            />
            <br />
            <span id="dscontent">
              {description19} <br />
             <a href="https://modrinth.com/mod/stardoms-client/">Modrinth</a>
            </span>
          </div>
        </span>
        <hr />
        <h1
          style={{
            color: bg,
            textShadow:
              bg === "Black"
                ? "-1px -1px 0 #FFFFFF, 1px -1px 0 #FFFFFF, -1px 1px 0 #FFFFFF, 1px 1px 0 #FFFFFF"
                : "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
          }}
        >
          <a href id="apps">
            -Apps-
          </a>
        </h1>
        <span id="hover" onClick={egg6}>
          <div className="ds6" id="dsdiv">
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/moviewer.png"
              alt="dslogo"
              id="dslogo"
              onMouseEnter={(e) => setDescription18(descriptions[e.target.src])}
              onMouseLeave={() =>
                setDescription18("MoViewer")
              }
            />
            <br />
            <span id="dscontent">
              {description18} <br />
             <a href="https://moviewer.stardomga.me">Web App</a>
            </span>
          </div>
        </span>
        
        <hr />
               <h1
          style={{
            color: bg,
            textShadow:
              bg === "Black"
                ? "-1px -1px 0 #FFFFFF, 1px -1px 0 #FFFFFF, -1px 1px 0 #FFFFFF, 1px 1px 0 #FFFFFF"
                : "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
          }}
        >
          <a href id="tweets">
            -Tweets-
          </a>
        </h1>
        <center>
          <div className="twitter">
            <Timeline
              dataSource={{
                sourceType: "profile",
                screenName: "Stardom_Games"
              }}
              options={{
                height: "400",
                theme: "dark", // Replace 'dark' with 'light' or your custom theme color
                chrome: "noheader nofooter noborders transparent noscrollbar", // Optional options to remove the header, footer, and borders
                width: "75%"
              }}
            />
          </div>
        </center>
        <h1 class="animated-text">
          <center>
            <a href="https://mario.stardomga.me">
              Jordan Trempert - stardomgames1@gmail.com
            </a>
          </center>
          <br />
        </h1>
      </div>
    </div>
  );
}
