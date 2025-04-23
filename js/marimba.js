document.addEventListener("click", async () => {
    await Tone.start();
    console.log("AudioContext started");
  }, { once: true });
  const synth = new Tone.Synth({
    oscillator: { type: "triangle" },
    envelope: { attack: 0.02, decay: 0.1, sustain: 0.3, release: 0.5 }
  }).toDestination();
  function playNote(note) {
    synth.triggerAttackRelease(note, "8n");
  }
  const buttons = document.querySelectorAll(".marimba-button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const note = button.dataset.bar;
      playNote(note);
    });
  });
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
    t: "B5"
  };
  document.addEventListener("keydown", (e) => {
    const note = keyMap[e.key.toLowerCase()];
    if (note) {
      playNote(note);
    }
  });