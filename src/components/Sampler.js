import React, { useState, useEffect } from 'react';
import DrumPad from './DrumPad';
import KickSound from '../sounds/KICK1.wav';
import HatSound from '../sounds/HIHAT1.wav';
import SnareSound from '../sounds/SNARE4.wav';
import JazzSample from '../sounds/jazz_sample_django.wav';
import BassSound from '../sounds/bass.wav';
import Keypad from './Keypad';
import KeyboardDetector from './KeyboardDetector';
import { chunk, indexOf, reverse } from 'lodash';
import Pizzicato from 'pizzicato';

const playableKeys = ["z", "x", "c", "v", "a", "s", "d", "f", "q", "w", "e", "r", "1", "2", "3", "4"]

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
let sound = new Pizzicato.Sound(BassSound, a => {
  sound.play();
  sampleLength = sound.sourceNode.buffer.duration;
  sound.stop();
});

export default function Sampler(props) {
  useEffect(() => {
    for (let i = 0; i < props.virtualKeys.length; i++) {
      HandleKeyDown(props.virtualKeys[i]);
    }
  }, [props.virtualKeys]);

  function HandleKeyDown(key) {
    const keyIndex = indexOf(playableKeys, key);
    if (keyIndex !== -1) {
      sound.stop();
      sound.attack = 0;
      sound.play();
      sound.sourceNode.playbackRate.value = pitches[keyIndex];
    }
  }

  function HandleKeyUp(key) {
    //sound.stop();
  }

  return (
    <div className="Sampler">
      <KeyboardDetector
        onKeyDown={ HandleKeyDown }
        onKeyUp={ HandleKeyUp }
        virtualKeys={ props.virtualKeys }
      >
        <Keypad keyRows={ reverse(chunk(playableKeys, 4)) } />
      </KeyboardDetector>
    </div>
  );
}
