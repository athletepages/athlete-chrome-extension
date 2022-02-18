function setStatus(msg) {
  document.getElementById("status").innerHTML = msg;
}

toggleAthlete = document.getElementById("toggle_athlete");

chrome.storage.sync.get(["athlete_toggled"], (r) => {
  if (r.athlete_toggled === true) setStatus("toggled: on");
  else if (r.athlete_toggled === false) setStatus("toggled: off");

  toggleAthlete.addEventListener("click", (e) => {
    if (r.athlete_toggled === true) {
      chrome.storage.sync.set({ athlete_toggled: false });
      setStatus("toggled: off");
    } else if (r.athlete_toggled === false) {
      chrome.storage.sync.set({ athlete_toggled: true });
      setStatus("toggled: on");
    } else setStatus("broken");
  });
});
