let isInitialized = false;

async function initializeAudio() {
  if (!isInitialized) {
    await Tone.start();
    isInitialized = true;
    console.log("AudioContext started");
  }
}

document.addEventListener("click", initializeAudio, { once: true });
document.addEventListener("keydown", initializeAudio, { once: true });

const synth = new Tone.Synth({
  oscillator: { type: "triangle" },
  envelope: { attack: 0.02, decay: 0.1, sustain: 0.3, release: 0.5 },
}).toDestination();

function playNote(note) {
  initializeAudio().then(() => {
    synth.triggerAttackRelease(note, "8n");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".marimba-button");

  const keyMap = {
    a: "C4",
    s: "D4",
    d: "E4",
    f: "F4",
    g: "G4",
    h: "A4",
    j: "B4",
    k: "C5",
    l: "D5",
    q: "E5",
    w: "F5",
    e: "G5",
    r: "A5",
    t: "B5",
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const note = button.dataset.bar;
      playNote(note);

      button.classList.add("active");
      setTimeout(() => button.classList.remove("active"), 100);
    });
  });

  document.addEventListener("keydown", (e) => {
    const note = keyMap[e.key.toLowerCase()];
    if (note) {
      playNote(note);

      const activeButton = document.querySelector(`[data-bar="${note}"]`);
      if (activeButton) {
        activeButton.classList.add("active");
        setTimeout(() => activeButton.classList.remove("active"), 100);
      }
    }
  });

  window.addEventListener("beforeunload", () => {
    if (isInitialized) {
      Tone.context.close();
    }
  });
});
