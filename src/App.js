import React, { useState } from "react";
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
function Home() {
  const [bg, setBG] = useState("#000");

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
  return (
    <div className="body">
      <div className="header" style={{ backgroundColor: bg }}>
        <span onClick={egg}>
          <img
            src="https://github.com/jordanreger/media/blob/main/stardomlogo.png?raw=true"
            alt="logo"
            id="logo"
            draggable="false"
          ></img>
        </span>
      </div>
      <div className="header" style={{ backgroundColor: bg }}>
        <span onClick={egg}>
          <img
            src="https://github.com/jordanreger/media/blob/main/stardomlogo.png?raw=true"
            alt="logo"
            id="logo"
            draggable="false"
          ></img>
        </span>
      </div>
      <div className="airframe">
        <h1>Games</h1>
        <span id="hover" onClick={egg10}>
          <div className="ds10">
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/Perspective.png"
              alt="dslogo"
              id="dslogo"
            />
            <br />
            <span id="dscontent">
              Perspective{" "}
              <br />
              <a href="https://perspective.stardomga.me">Download Beta!</a>
              
              
            </span>
          </div>
        </span>
        <br />
        <br />

        <span id="hover" onClick={egg1}>
          <div className="ds1">
            <img
              src="https://raw.githubusercontent.com/jordanreger/media/main/Dungeon_Slayer_1.png"
              alt="dslogo"
              id="dslogo"
            />
            <br />
            <span id="dscontent">
              Dungeon Slayer -{" "}
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
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/Untitled%20design.png"
              alt="abp2logo"
              id="dslogo"
            />
            <br />
            <span id="dscontent">
              A Blocky Puzzle 2 -{" "}
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
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/ABP.png"
              alt="abp2logo"
              id="dslogo"
            />
            <br />
            <span id="dscontent">
              A Blocky Puzzle -{" "}
              <a href="https://github.com/StardomGames/A-Blocky-Puzzle/releases">
                Windows
              </a>
            </span>
          </div>
        </span>
        <br />
        <br />
        <hr />
        <h1>Socials</h1>
        <span id="hover" onClick={egg4}>
          <div className="ds4">
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
        <br />
        <br />
        <span id="hover" onClick={egg9}>
          <div className="ds9">
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/discord.png"
              alt="abp2logo"
              id="dslogo"
            />
            <br />
            <span id="dscontent">
              Discord -{" "}
              <a href="https://discord.gg/CGqT9WX7sU">Join!</a>
            </span>
          </div>
        </span>
        <br />
        <br />
        <span id="hover" onClick={egg5}>
          <div className="ds5">
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
        <br />
        <br />
        <span id="hover" onClick={egg8}>
          <div className="ds8">
            <img
              src="https://bankimooncentre.org/wp-content/uploads/2020/05/twitter-icon-square-logo-108D17D373-seeklogo.com_.png"
              alt="abp2logo"
              id="dslogo"
            />
            <br />
            <span id="dscontent">
              Twitter -{" "}
              <a href="https://twitter.com/GamesStardom">Follow!</a>
            </span>
          </div>
        </span>
        <br />
        <br />
        <span id="hover" onClick={egg6}>
          <div className="ds6">
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
        <br />
        <br />
        <span id="hover" onClick={egg7}>
          <div className="ds7">
            <img
              src="https://raw.githubusercontent.com/jordan-trempert/media/main/patreon.jpg"
              alt="abp2logo"
              id="dslogo"
            />
            <br />
            <span id="dscontent">
              Patreon -{" "}
              <a href="https://www.patreon.com/stardomgames">Donate!</a>
            </span>
        <span id="hover" onClick={egg7}>
          <div className="ds7">
            <img
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.logo.wine%2Flogo%2FReddit&psig=AOvVaw0zwbRvXWqqaQr6aZy405re&ust=1627337428592000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCNiq7L2e__ECFQAAAAAdAAAAABAD"
              alt="abp2logo"
              id="dslogo"
            />
            <br />
            <span id="dscontent">
              Patreon -{" "}
              <a href="https://reddit.com/r/stardomgames">Join!</a>
            </span>
          </div>
        </span>

        <br />
        </div>
        </div>
  );
}
