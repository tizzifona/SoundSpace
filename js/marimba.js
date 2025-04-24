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
  oscillator: { type: "sine" },
  envelope: { 
    attack: 0.001,
    decay: 0.2,
    sustain: 0.1,
    release: 0.3
  },
}).chain(
  new Tone.FrequencyShifter({
    frequency: 0.5,
    phase: 0
  }),
  new Tone.Reverb({
    decay: 0.5,
    wet: 0.2
  }),
  new Tone.Compressor({
    threshold: -24,
    ratio: 12,
    attack: 0.003,
    release: 0.25
  })
).toDestination();

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
