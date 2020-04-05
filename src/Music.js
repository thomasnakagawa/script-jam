const presetTracks = [
`q
 e
d
 s
 s
d f 
d  d
 1`,
 
`t  u
 y
t  g
 j 
t  u
 5
g   j
 k `
];

let presetIndex = 0;

export default function GetAPresetTrack() {
    const track = presetTracks[presetIndex];
    presetIndex = (presetIndex + 1) % presetTracks.length;
    return track;
}
