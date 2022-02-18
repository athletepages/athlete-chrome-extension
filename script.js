async function initAthlete() {
  athlete = document.createElement("img");
  athlete.setAttribute("id", "athleteimage");
  athlete.setAttribute("src", "https://athletepages.github.io/athlete.png");
  athlete.setAttribute("width", window.innerWidth / 2);
  athlete.setAttribute("height", (window.innerWidth / 2 / 16) * 9);
  athlete.style.position = "absolute";
  athlete.style.display = "none";

  document.body.appendChild(athlete);
  return athlete, document.body.style.backgroundColor;
}

initAthlete().then((athlete, original_background) => {
  chrome.storage.sync.get(["athlete_toggled"], (r) => {
    if (r.athlete_toggled) {
      document.addEventListener("mousemove", (e) => {
        body = document.body;
        athlete = document.getElementById("athleteimage");

        setTimeout(() => {
          body.style.backgroundColor = original_background;
          athlete.style.display = "none";
        }, 5);

        athlete.style.display = "none";

        xshift = Math.floor(Math.random() * window.innerWidth);
        yshift = Math.floor(Math.random() * window.innerHeight);

        if (Math.floor(Math.random() * 2) == 0) {
          xshift = -xshift;
        }

        if (Math.floor(Math.random() * 2) == 0) {
          yshift = -yshift;
        }

        setAthletePos(xshift, yshift);

        body.style.backgroundColor = "black";
        athlete.style.display = "block";
      });
    }
  });
});

function setAthletePos(x, y) {
  athlete = document.getElementById("athleteimage");
  athlete.style.position = "absolute";
  athlete.style.left = x + "px";
  athlete.style.top = y + "px";
}
