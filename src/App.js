import React, { useState, useRef, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route /*, Link*/
} from "react-router-dom";
import "./styles.css";

export default function App() {
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

function TiltBlock({ children }) {
  const [transformValue, setTransformValue] = useState("");
  const tiltRef = useRef(null);

  useEffect(() => {
    const el = tiltRef.current;

    const handleMove = (e) => {
      const height = el.clientHeight;
      const width = el.clientWidth;
      const mouseX = e.clientX - el.getBoundingClientRect().left;
      const mouseY = e.clientY - el.getBoundingClientRect().top;
      const yRotation = 20 * ((mouseX - width / 2) / width);
      const xRotation = -20 * ((mouseY - height / 2) / height);
      const string =
        "perspective(500px) scale(1.1) rotateX(" +
        xRotation +
        "deg) rotateY(" +
        yRotation +
        "deg)";
      setTransformValue(string);
    };

    const handleMouseOut = () => {
      setTransformValue("perspective(500px) scale(1) rotateX(0) rotateY(0)");
    };

    const handleMouseDown = () => {
      setTransformValue("perspective(500px) scale(0.9) rotateX(0) rotateY(0)");
    };

    const handleMouseUp = () => {
      setTransformValue("perspective(500px) scale(1.1) rotateX(0) rotateY(0)");
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseout", handleMouseOut);
    el.addEventListener("mousedown", handleMouseDown);
    el.addEventListener("mouseup", handleMouseUp);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseout", handleMouseOut);
      el.removeEventListener("mousedown", handleMouseDown);
      el.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={tiltRef}
      style={{ transform: transformValue }}
      className="tilt-block"
    >
      {children}
    </div>
  );
}

function Home(props) {
  const [setHoveredId] = useState(null);
  const descriptions = {
    "https://raw.githubusercontent.com/jordan-trempert/media/main/stardom-logo%20(1).png":
      "The Timeline For The Stardom Gaming Universe",
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
      "In Alpha"
  };
  const [bg, setBG] = useState("Black");
  const [cursor, setCursor] = useState(false);
  const [description, setDescription] = useState(
    "Stardom Gaming Universe Timeline"
  );
  const [description2, setDescription2] = useState("Yet Another Rip-Off");
  const [description3, setDescription3] = useState("Project Paradox");
  const [description4, setDescription4] = useState("Green Square Adventures");
  const [description5, setDescription5] = useState("Perspective Part 1");
  const [description6, setDescription6] = useState("Dungeon Slayer");
  const [description7, setDescription7] = useState("A Blocky Puzzle 2");
  const [description8, setDescription8] = useState("A Blocky Puzzle");
  const [description9, setDescription9] = useState("Project Multiverse");

  let textColor;
  if (bg === "Black") {
    textColor = "white";
  } else {
    textColor = "black";
  }

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
    setBG("#00ACEE");
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
    setBG("#FFFFFF");
  }
  function egg15() {
    setBG("#ff5c5c");
  }
  function egg16() {
    setBG("#C000FB");
  }

  function handleClick() {
    if (!cursor) {
      setCursor(true);
    }
  }

  return (
    <div className="body">
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
                <a href="#games"> Games</a> |{" "}
                <a href="#socials">Social Media</a>
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
        <span id="hover" onClick={egg14}>
          <div className="ds14">
            <TiltBlock onHover={(id) => setHoveredId(id)}>
              <img
                src="https://raw.githubusercontent.com/jordan-trempert/media/main/stardom-logo%20(1).png"
                alt="dslogo"
                id="dslogo"
                onMouseEnter={(e) => setDescription(descriptions[e.target.src])}
                onMouseLeave={() =>
                  setDescription("Stardom Gaming Universe Timeline")
                }
              />
            </TiltBlock>
            <br />
            <span id="dscontent">
              {description} <br />
              <a href="https://sgu.stardomga.me">View Now!</a>
            </span>
          </div>
        </span>
        <br />
        <br />
        <span id="hover" onClick={egg16}>
          <div className="ds16">
            <TiltBlock onHover={(id) => setHoveredId(id)}>
              <img
                src="https://raw.githubusercontent.com/jordan-trempert/media/main/Project%20Multiverse%20Icon.png"
                alt="dslogo"
                id="dslogo"
                onMouseEnter={(e) =>
                  setDescription9(descriptions[e.target.src])
                }
                onMouseLeave={() => setDescription9("Project Multiverse")}
              />
            </TiltBlock>
            <br />
            <span id="dscontent">
              {description9} <br />
              <a href="https://stardomgames.itch.io/project-multiverse">
                Download!
              </a>
            </span>
          </div>
        </span>
        <br />
        <br />
        <span id="hover" onClick={egg6}>
          <div className="ds6">
            <TiltBlock onHover={(id) => setHoveredId(id)}>
              <img
                src="https://github.com/jordan-trempert/media/blob/main/YARO.png?raw=true"
                alt="abp2logo"
                id="dslogo"
                onMouseEnter={(e) =>
                  setDescription2(descriptions[e.target.src])
                }
                onMouseLeave={() => setDescription2("Yet Another Rip-Off")}
              />
            </TiltBlock>
            <br />
            <span id="dscontent">
              {description2} <br />
              <a href="https://stardomgames.itch.io/yaro">Download!</a>
            </span>
          </div>
        </span>
        <br />
        <br />
        <span id="hover" onClick={egg10}>
          <div className="ds10">
            <TiltBlock onHover={(id) => setHoveredId(id)}>
              <img
                src="https://raw.githubusercontent.com/jordan-trempert/media/main/Project%20Paradox.png"
                alt="dslogo"
                id="dslogo"
                onMouseEnter={(e) =>
                  setDescription3(descriptions[e.target.src])
                }
                onMouseLeave={() => setDescription3("Project Paradox")}
              />
            </TiltBlock>
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
        <br />
        <br />
        <span id="hover" onClick={egg12}>
          <div className="ds12">
            <TiltBlock onHover={(id) => setHoveredId(id)}>
              <img
                src="https://raw.githubusercontent.com/jordan-trempert/media/main/Green%20Square%20Adventures.png"
                alt="dslogo"
                id="dslogo"
                onMouseEnter={(e) =>
                  setDescription4(descriptions[e.target.src])
                }
                onMouseLeave={() => setDescription4("Green Square Adventures")}
              />
            </TiltBlock>
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
        <br />
        <br />
        <span id="hover" onClick={egg10}>
          <div className="ds10">
            <TiltBlock onHover={(id) => setHoveredId(id)}>
              <img
                src="https://raw.githubusercontent.com/jordan-trempert/media/main/Perspective.png"
                alt="dslogo"
                id="dslogo"
                onMouseEnter={(e) =>
                  setDescription5(descriptions[e.target.src])
                }
                onMouseLeave={() => setDescription5("Perspective Part 1")}
              />
            </TiltBlock>
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
        <br />
        <br />

        <span id="hover" onClick={egg1}>
          <div className="ds1">
            <TiltBlock onHover={(id) => setHoveredId(id)}>
              <img
                src="https://raw.githubusercontent.com/jordan-trempert/media/main/Dungeon%20Slayer.png"
                alt="dslogo"
                id="dslogo"
                onMouseEnter={(e) =>
                  setDescription6(descriptions[e.target.src])
                }
                onMouseLeave={() => setDescription6("Dungeon Slayer")}
              />
            </TiltBlock>
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
        <br />
        <br />
        <span id="hover" onClick={egg2}>
          <div className="ds2">
            <TiltBlock onHover={(id) => setHoveredId(id)}>
              <img
                src="https://raw.githubusercontent.com/jordan-trempert/media/main/Untitled%20design.png"
                alt="abp2logo"
                id="dslogo"
                onMouseEnter={(e) =>
                  setDescription7(descriptions[e.target.src])
                }
                onMouseLeave={() => setDescription7("A Blocky Puzzle 2")}
              />
            </TiltBlock>
            <br />
            <span id="dscontent">
              {description7} <br />
              <a href="https://github.com/StardomGames/A-Blocky-Puzzle-2/releases">
                Windows
              </a>
            </span>
          </div>
        </span>
        <br />
        <br />
        <span id="hover" onClick={egg3}>
          <div className="ds3">
            <TiltBlock onHover={(id) => setHoveredId(id)}>
              <img
                src="https://raw.githubusercontent.com/jordan-trempert/media/main/ABP.png"
                alt="abp2logo"
                id="dslogo"
                onMouseEnter={(e) =>
                  setDescription8(descriptions[e.target.src])
                }
                onMouseLeave={() => setDescription8("A Blocky Puzzle")}
              />
            </TiltBlock>
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
          <div className="ds15">
            <TiltBlock onHover={(id) => setHoveredId(id)}>
              <img
                src="https://raw.githubusercontent.com/jordan-trempert/media/main/itch.png"
                alt="abp2logo"
                id="dslogo"
              />
            </TiltBlock>
            <br />
            <span id="dscontent">
              Itch.io - <a href="https://stardomgames.itch.io/">Follow!</a>
            </span>
          </div>
        </span>
        <br />
        <br />
        <span id="hover" onClick={egg13}>
          <div className="ds13">
            <TiltBlock onHover={(id) => setHoveredId(id)}>
              <img
                src="https://raw.githubusercontent.com/jordan-trempert/media/main/109018_media_512x512.png"
                alt="abp2logo"
                id="dslogo"
              />
            </TiltBlock>
            <br />
            <span id="dscontent">
              Spotify -{" "}
              <a href="https://open.spotify.com/artist/1WQqvnEv8S9Bc37dqXvQbS?si=YzfOiVSKTEWWAnLdioV85w&utm_source=copy-link">
                Follow!
              </a>
            </span>
          </div>
        </span>
        <br />
        <br />
        <span id="hover" onClick={egg4}>
          <div className="ds4">
            <TiltBlock onHover={(id) => setHoveredId(id)}>
              <img
                src="https://raw.githubusercontent.com/jordan-trempert/media/main/youtube.png"
                alt="abp2logo"
                id="dslogo"
              />
            </TiltBlock>
            <br />
            <span id="dscontent">
              YouTube -{" "}
              <a href="https://www.youtube.com/channel/UCgmh2uIuUPxIep-qJ2WOEbg">
                Subscribe!
              </a>
            </span>
          </div>
        </span>
        <br />
        <br />
        <span id="hover" onClick={egg9}>
          <div className="ds9">
            <TiltBlock onHover={(id) => setHoveredId(id)}>
              <img
                src="https://raw.githubusercontent.com/jordan-trempert/media/main/discord.png"
                alt="abp2logo"
                id="dslogo"
              />
            </TiltBlock>
            <br />
            <span id="dscontent">
              Discord - <a href="https://discord.gg/CGqT9WX7sU">Join!</a>
            </span>
          </div>
        </span>
        <br />
        <br />
        <span id="hover" onClick={egg5}>
          <div className="ds5">
            <TiltBlock onHover={(id) => setHoveredId(id)}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
                alt="abp2logo"
                id="dslogo"
              />
            </TiltBlock>
            <br />
            <span id="dscontent">
              Instagram -{" "}
              <a href="https://instagram.com/stardom.games">Follow!</a>
            </span>
          </div>
        </span>
        <br />
        <br />
        <span id="hover" onClick={egg8}>
          <div className="ds8">
            <TiltBlock onHover={(id) => setHoveredId(id)}>
              <img
                src="https://raw.githubusercontent.com/jordan-trempert/media/main/twitter.png"
                alt="abp2logo"
                id="dslogo"
              />
            </TiltBlock>
            <br />
            <span id="dscontent">
              Twitter - <a href="https://twitter.com/GamesStardom">Follow!</a>
            </span>
          </div>
        </span>
        <br />
        <br />
        <span id="hover" onClick={egg6}>
          <div className="ds6">
            <TiltBlock onHover={(id) => setHoveredId(id)}>
              <img
                src="https://github.com/jordan-trempert/media/blob/main/github.png?raw=true"
                alt="abp2logo"
                id="dslogo"
              />
            </TiltBlock>
            <br />
            <span id="dscontent">
              Github - <a href="https://github.com/stardomgames">Projects!</a>
            </span>
          </div>
        </span>
        <br />
        <br />
        <span id="hover" onClick={egg7}>
          <div className="ds7">
            <TiltBlock onHover={(id) => setHoveredId(id)}>
              <img
                src="https://raw.githubusercontent.com/jordan-trempert/media/main/patreon.jpg"
                alt="abp2logo"
                id="dslogo"
              />
            </TiltBlock>
            <br />
            <span id="dscontent">
              Patreon - <a href="https://patreon.com/stardomgames">Donate!</a>
            </span>
          </div>
        </span>
        <br />
        <br />
        <span id="hover" onClick={egg11}>
          <div className="ds11">
            <TiltBlock onHover={(id) => setHoveredId(id)}>
              <img
                src="https://cdn.fastly.picmonkey.com/content4/previews/social/social_54_550.webp"
                alt="abp2logo"
                id="dslogo"
              />
            </TiltBlock>
            <br />
            <span id="dscontent">
              Reddit - <a href="https://reddit/com/r/stardomgames">Join!</a>
            </span>
          </div>
        </span>
        <br />
        <br />
        <h1 class="animated-text">
          <center>Jordan Trempert - stardomgames1@gmail.com</center>
          <br />
        </h1>
      </div>
    </div>
  );
}
