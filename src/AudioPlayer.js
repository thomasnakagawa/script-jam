import KickSound from './sounds/KICK1.wav';
import HatSound from './sounds/HIHAT1.wav';
import SnareSound from './sounds/SNARE4.wav';
import SynthNote from './sounds/synth_note.ogg';
import SynthNote2 from './sounds/synth2.ogg';
import Pizzicato from 'pizzicato';
import { indexOf } from 'lodash';

const pitchForSemitone = function(semitone) {
  return 2 ** (semitone / 12);
}

const pitches = [
  pitchForSemitone(-12),
  pitchForSemitone(-10),
  pitchForSemitone(-9),
  pitchForSemitone(-7),
  pitchForSemitone(-5),
  pitchForSemitone(-4),
  pitchForSemitone(-2),
  pitchForSemitone(-1),
  pitchForSemitone(0),
  pitchForSemitone(2),
  pitchForSemitone(3),
  pitchForSemitone(5),
  pitchForSemitone(7),
  pitchForSemitone(8),
  pitchForSemitone(10),
  pitchForSemitone(11)
]

let Bass = new Pizzicato.Sound(SynthNote, () => {});
let Sy2 = new Pizzicato.Sound(SynthNote2, () => {});

let Kick = new Pizzicato.Sound(KickSound, () => {});
let Snare = new Pizzicato.Sound(SnareSound, () => {});
let Hat = new Pizzicato.Sound(HatSound, () => {});

const bassKeys = ["z", "x", "c", "v", "a", "s", "d", "f", "q", "w", "e", "r", "1", "2", "3", "4"]
const leadKeys = ["b", "n", "m", ",", "g", "h", "j", "k", "t", "y", "u", "i", "5", "6", "7", "8"]

function outputAudio(sound, pitch) {
  sound.stop();
  sound.attack = 0;
  sound.play();
  sound.sourceNode.playbackRate.value = pitch || 1;
}


function PlaySound(key) {
  if (!key || key === " ") return;

  const keyIndex = indexOf(bassKeys, key);
  const keyIndex2 = indexOf(leadKeys, key);
  if (keyIndex !== -1) {
    outputAudio(Bass, pitches[keyIndex]);
  }
  else if (keyIndex2 !== -1) {
    outputAudio(Sy2, pitches[keyIndex2]);
  }
  else {
    const keyCode = key.charCodeAt(0);
    if ((keyCode - 1) % 4 === 0) {
      outputAudio(Kick, 1 + Math.floor(keyCode / 30));
    }
    else if (keyCode % 4 === 0) {
      outputAudio(Snare, 1 + Math.floor(keyCode / 30));
    }
    else {
      outputAudio(Hat, 1 + Math.floor(keyCode / 30));
    }
  }
}

export default PlaySound;
