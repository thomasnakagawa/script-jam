import React, { useEffect } from 'react';
import DrumPad from './DrumPad';
import KickSound from '../sounds/KICK1.wav';
import HatSound from '../sounds/HIHAT1.wav';
import SnareSound from '../sounds/SNARE4.wav';
import JazzSample from '../sounds/jazz_sample_django.wav';
import BassSound from '../sounds/bass.wav';
import SynthNote from '../sounds/synth_note.ogg';
import SynthNote2 from '../sounds/synth2.ogg';
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

var sampleLength = 0;
let Bass = new Pizzicato.Sound(SynthNote, () => {});
let Sy2 = new Pizzicato.Sound(SynthNote2, () => {});

let Kick = new Pizzicato.Sound(KickSound, () => {});
let Snare = new Pizzicato.Sound(SnareSound, () => {});
let Hat = new Pizzicato.Sound(HatSound, () => {});

export default function SoundPlayer(props) {
  function playSound(sound, pitch) {
    sound.stop();
    sound.attack = 0;
    sound.play();
    sound.sourceNode.playbackRate.value = pitch || 1;
  }
  function handleKeyDown(key) {
    if (!key || key === " ") return;
    //const keyIndex = key.charCodeAt(0);
    const keyIndex = indexOf(props.playableKeys, key);
    const keyIndex2 = indexOf(props.playableKeys2, key);
    if (keyIndex !== -1) {
      playSound(Bass, pitches[keyIndex]);
    }
    else if (keyIndex2 !== -1) {
      playSound(Sy2, pitches[keyIndex2]);
    }
    else {
      const keyCode = key.charCodeAt(0);
      if ((keyCode - 1) % 4 === 0) {
        playSound(Kick, 1 + Math.floor(keyCode / 30));
      }
      else if (keyCode % 4 === 0) {
        playSound(Snare, 1 + Math.floor(keyCode / 30));
      }
      else {
        playSound(Hat, 1 + Math.floor(keyCode / 30));
      }
    }
  }

  useEffect(() => {
    props.virtualKeys.forEach(virtualKey => {
      handleKeyDown(virtualKey);
    });
  }, [props.virtualKeys]);
  
  useEffect(() => {
    handleKeyDown(props.userKey)
  }, [props.userKey]);

  return (
    <></>
  );
}