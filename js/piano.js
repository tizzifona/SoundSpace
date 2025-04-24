const synth = new Tone.PolySynth(Tone.Synth, {
  oscillator: {
    type: "triangle",
    partials: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  envelope: {
    attack: 0.001,
    decay: 0.3,
    sustain: 0.5,
    release: 1.2,
  },
  volume: -6,
}).toDestination();

const reverb = new Tone.Reverb({
  decay: 2.5,
  wet: 0.2,
}).toDestination();

synth.connect(reverb);

let isInitialized = false;

async function initializeAudio() {
  if (!isInitialized) {
    await Tone.start();
    isInitialized = true;
  }
}

function playNote(note) {
  initializeAudio().then(() => {
    synth.triggerAttack(note);
  });
}

function stopNote(note) {
  synth.triggerRelease(note);
}

const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("mousedown", () => {
    const note = key.getAttribute("data-note");
    playNote(note);
  });

  key.addEventListener("mouseup", () => {
    const note = key.getAttribute("data-note");
    stopNote(note);
  });

  key.addEventListener("mouseleave", () => {
    const note = key.getAttribute("data-note");
    stopNote(note);
  });
});

const keyMap = {
  a: "C4",
  w: "C#4",
  s: "D4",
  e: "D#4",
  d: "E4",
  f: "F4",
  r: "F#4",
  g: "G4",
  y: "G#4",
  h: "A4",
  u: "A#4",
  j: "B4",
  k: "C5",
  i: "C#5",
  l: "D5",
  o: "D#5",
  p: "F#5",
  ";": "E5",
  "[": "G#5",
  "]": "A#5",
  "'": "F5",
};

document.addEventListener("keydown", (e) => {
  if (keyMap[e.key] && !e.repeat) {
    playNote(keyMap[e.key]);
    const button = document.querySelector(`.key[data-note="${keyMap[e.key]}"]`);
    if (button) button.classList.add("active");
  }
});

document.addEventListener("keyup", (e) => {
  if (keyMap[e.key]) {
    stopNote(keyMap[e.key]);
    const button = document.querySelector(`.key[data-note="${keyMap[e.key]}"]`);
    if (button) button.classList.remove("active");
  }
});

window.addEventListener("beforeunload", () => {
  if (isInitialized) {
    Tone.context.close();
  }
});
