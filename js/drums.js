const kick = new Tone.MembraneSynth().toDestination();
const snare = new Tone.NoiseSynth({
  envelope: { attack: 0.001, decay: 0.2, sustain: 0 }
}).toDestination();
const hihat = new Tone.MetalSynth({
  frequency: 400,
  envelope: { attack: 0.001, decay: 0.1, release: 0.01 }
}).toDestination();
const crash = new Tone.MetalSynth({
  frequency: 300,
  envelope: { attack: 0.001, decay: 1.4, release: 0.5 }
}).toDestination();
const tom = new Tone.MembraneSynth().toDestination();

const keyMap = {
  "q": "kick",
  "w": "snare",
  "e": "hihat",
  "r": "crash",
  "t": "tom"
};

function playDrum(drum) {
  initializeAudio().then(() => {
    switch (drum) {
      case "kick":
        kick.triggerAttackRelease("C1", "8n");
        break;
      case "snare":
        snare.triggerAttackRelease("8n");
        break;
      case "hihat":
        hihat.triggerAttackRelease("16n");
        break;
      case "crash":
        crash.triggerAttackRelease("1n");
        break;
      case "tom":
        tom.triggerAttackRelease("G2", "8n");
        break;
    }
  });
}

let isInitialized = false;

async function initializeAudio() {
    if (!isInitialized) {
        await Tone.start();
        isInitialized = true;
    }
}

let audioStarted = false;
function startAudio() {
  if (!audioStarted) {
    Tone.start().then(() => {
      audioStarted = true;
      const audioButton = document.getElementById("start-audio");
      if (audioButton) {
        audioButton.style.display = "none";
      }
    });
  }
}

document.querySelectorAll(".drum").forEach(button => {
  button.addEventListener("click", () => {
    startAudio();
    const drum = button.dataset.drum;
    playDrum(drum);
  });
});

document.addEventListener("keydown", event => {
  const key = event.key.toLowerCase();
  if (keyMap[key]) {
    startAudio();
    playDrum(keyMap[key]);

    const activeButton = document.querySelector(`[data-drum="${keyMap[key]}"]`);
    if (activeButton) {
      activeButton.classList.add("active");
      setTimeout(() => activeButton.classList.remove("active"), 100);
    }
  }
});

window.addEventListener('beforeunload', () => {
    if (isInitialized) {
        Tone.context.close();
    }
});
