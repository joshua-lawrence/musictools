import React, { useEffect, useState } from 'react';
import Tone from 'tone';

const Notegenerator = () => {
  const [bpm, setBPM] = useState(40);
  const [playing, setPlaying] = useState(false);
  const [upcomingNotes, setUpcomingNotes] = useState([]);
  const [count, setCount] = useState(0);
  const [notes] = useState([        
  'A', 'Bb', 'B',
  'C', 'Db', 'D',
  'Eb', 'E', 'F',
  'Gb', 'G', 'Ab']);



  var synth = new Tone.Synth({
    oscillator: {
      type: 'sine',
      harmonicity: 10
    },
    envelope: {
      attack: 0.002,
      decay: 0.1,
      sustain: 0.1,
      release: 0.1
    }
  }).toMaster()



  useEffect(() => {
    let interval = null;
    if (playing) {
      interval = setInterval(() => {
        synth.triggerAttackRelease('C2', '16n');
        newUpcomingNote();
        setCount(count => count + 1);
      }, (60/bpm) * 1000);
      newUpcomingNote();
      synth.triggerAttackRelease('C2', '16n');
    }
    else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);

  }, [playing, bpm]);

  const handlePlay = () => {
    setPlaying(!playing);
  }

  const handleChange = (e) => {
    setBPM(e.target.value);
  }

  const newUpcomingNote = () => {
    let newNote = notes[Math.floor(Math.random() * notes.length)];
    setUpcomingNotes(upcomingNotes => [...upcomingNotes, newNote]);
  }


  return (
    <div>
      <div style={{paddingTop: 50, paddingBottom: 50, fontSize: 24}}>{bpm} BPM</div>
      <input className="slider" type="range" min="1" max="80" style={{width: 400}} value={bpm} onChange={e => handleChange(e)}></input>
      <button className="btn btn-primary btn-large" onClick={() => handlePlay()}>{playing ? 'Stop' : 'Start'}</button>
      <div className="mt-5 scroller-labels"><span style={{float: "left"}}>Past Note</span><span>Upcoming Note</span></div>
      <div className="note-scroller" style={{float: "left"}}>{upcomingNotes[upcomingNotes.length - 2]}</div>
      <div className="note-scroller" style={{animation: `noteslide ${60/bpm}s linear infinite`, visibility: (playing) ? "" : "hidden"}}>{upcomingNotes[upcomingNotes.length - 1]}</div>
    </div>
  )

}

export default Notegenerator;