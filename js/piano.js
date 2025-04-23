// java script for piano page
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

function playNote(note) {
    synth.triggerAttack(note);
    }

    function stopNote(note) {
    synth.triggerRelease(note);
}

const keys = document.querySelectorAll(".key");

keys.forEach(key => {
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
    'a': 'C4',
    'w': 'C#4',
    's': 'D4',
    'e': 'D#4',
    'd': 'E4',
    'f': 'F4',
    't': 'F#4',
    'g': 'G4',
    'y': 'G#4',
    'h': 'A4',
    'u': 'A#4',
    'j': 'B4',
    'k': 'C5',
    'o': 'C#5',
    'l': 'D5',
    'p': 'D#5',
    ';': 'E5',
    "'": 'F5'
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
