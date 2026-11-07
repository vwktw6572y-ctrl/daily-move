import {useState} from 'react';

// Embedded originals: creators retain their videos; no media is copied or rehosted.
export const demos = {
  march: {id:'QilgMPG7OaA', creator:'HASfit'},
  squat: {id:'sUJB010F9Fw', creator:'Om Bisht Fitness Coach'},
  wallPushup: {id:'-KVhapnEtuk', creator:'CSIRO Total Wellbeing Diet'},
  stepTouch: {id:'hQtY5k75iKY', creator:'Mico Dance'},
  bridge: {id:'tqp5XQPpTxY', creator:'PureGym'},
  birdDog: {id:'ZdAHe9_HeEw', creator:'NASM'},
  jumpingJack: {id:'nGaXj3kkmrU', creator:'Babylon Health'},
  pushup: {id:'WDIpL0pjun0', creator:'NASM'},
  reverseLunge: {id:'xmiPSs3Z-wQ', creator:'VTS Performance'},
  mountainClimber: {id:'hq_0YlyfqGM', creator:'Group HIIT'},
  plank: {id:'bcsSK_AdXuw', creator:'NCHPAD'},
  highKnees: {id:'xGC7M-gySsQ', creator:'OriGym'},
  squatPulse: {id:'7HarjcM6b10', creator:'Leap Fitness'},
  stepBurpee: {id:'bcfqzBJk9aM', creator:'Olivia Park'},
  shoulderTap: {id:'QOCn3_iOAro', creator:'Northeastern'},
} as const;

export type DemoKey = keyof typeof demos;

export function ExerciseVideo({demo,name,running,onOpen}:{demo:DemoKey;name:string;running:boolean;onOpen:()=>void}) {
  const [failed,setFailed]=useState(false);
  const video=demos[demo];
  const params=new URLSearchParams({autoplay:'1',mute:'1',playsinline:'1',loop:'1',playlist:video.id,rel:'0'});
  return <section className="exercise-video" aria-label={`Videoanleitung: ${name}`}>
    <div className="video-heading"><span>SO GEHT’S</span><span>Video · {video.creator}</span></div>
    <div className="video-frame">
      {running&&!failed?<iframe
        title={`So geht ${name} – Übungsvideo`}
        src={`https://www.youtube-nocookie.com/embed/${video.id}?${params}`}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen referrerPolicy="strict-origin-when-cross-origin"
        onError={()=>setFailed(true)}
      />:<div className="video-placeholder" role="status">{failed?'Video konnte nicht geladen werden. Nutze den Link unten oder folge dem Technik-Tipp.':'Workout pausiert · Video startet beim Fortsetzen erneut.'}</div>}
    </div>
    <div className="video-help">Stumm mit Wiederholung. Falls nötig, im Video auf Play tippen. Internet erforderlich.</div>
    <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" onClick={onOpen}>Video auf YouTube öffnen ↗ <span>· pausiert das Workout</span></a>
  </section>;
}
