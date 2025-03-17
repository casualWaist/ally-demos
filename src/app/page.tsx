'use client'

import {useEffect, useRef, useState} from "react"
import {useRive} from "rive-react"
import {useStateMachineInput} from "rive-react"

export default function Home() {
    const [riveLoaded, setRiveLoaded] = useState(false);
    const video = useRef(null!)

    useEffect(() => {
        if (riveLoaded){
            video.current.play()
        }
    }, [riveLoaded]);

  return <>
      <main className="absolute flex z-10 min-h-screen w-screen flex-col items-center p-24 pointer-events-none"
            onPointerMove={(event) => {
                console.log(event.pageX, event.pageY)
            }}>
          <div className="flex flex-row justify-between items-center pointer-events-none">
              <BlueDragon width={700} height={700}/>
          </div>
          {/*<div className="relative h-[500px] bg-green-400">
              <video src="CAHero.mp4" ref={video} muted className="pt-[109.5px] w-[500px]"/>
              <VideoOverlay onLoad={setRiveLoaded} width={500} height={500} />
          </div>*/}
      {/*<AsaBasic width={500} height={500}/>*/}
        {/*<ShowMeState width={500} height={500}/>*/}
          {/*<div className="flex flex-row justify-between items-center">
              <PurpleJewel width={500} height={500}/>
              <YellowJewel width={500} height={500}/>
          </div>
          <div className="flex flex-row justify-between items-center">
              <RedJewel width={500} height={500}/>
              <Diamond width={500} height={500}/>
          </div>
          <div className="flex flex-row justify-between items-center">
              <PurpleJewel width={250} height={250}/>
              <YellowJewel width={250} height={250}/>
              <RedJewel width={250} height={250}/>
              <Diamond width={250} height={250}/>
          </div>
          <div className="flex flex-row justify-between items-center">
              <PurpleJewel width={100} height={100}/>
              <YellowJewel width={100} height={100}/>
              <RedJewel width={100} height={100}/>
              <Diamond width={100} height={100}/>
          </div>*/}
      </main>
  </>;
}

function BlueDragon({width, height}: {width: number, height: number}) {
    const {RiveComponent, rive} = useRive({
        src: "/dnd_hero.riv",
        stateMachines: "State Machine 1",
        autoplay: true,
    });
    const triggerInput = useStateMachineInput(rive, "State Machine 1", "Hovering");

    useEffect(() => {
        if (triggerInput) {
            triggerInput.fire();
        }
    }, [triggerInput]);
    return (
        <div style={{width: width, height: height, overflow: 'visible', pointerEvents: 'none'}}>
            <RiveComponent/>
        </div>
    )

}

function VideoOverlay({onLoad, width, height}: {onLoad: ()=>void, width: number, height: number}) {
    const {RiveComponent, rive} = useRive({
        src: "/charge_anywhere_hero.riv",
        stateMachines: "State Machine 1",
        autoplay: true,
        onLoad: () => onLoad(true)
    });

    return (
        <div style={{position: "absolute", top:0, width: width, height: height, overflow: 'visible'}}>
            <RiveComponent/>
        </div>
    )

}

function ShowMeState({width, height}: { width: number, height: number }) {
    const {rive, canvas, RiveComponent} = useRive({
        src: "/salestemplatemascot.riv",
        /*stateMachines: "StateMachine",*/
        autoplay: true,
    });

    const media_recorder = useRef<MediaRecorder>(null!)
    const a = useRef(document.createElement("a"))
    const url = useRef<string>('')
    const chunks: Blob[] = []

    //const trigger = useStateMachineInput(rive, "StateMachine", "TriggerOpen")
    //const input = useStateMachineInput(rive, "StateMachine", "Slime", true)
    //const input2 = useStateMachineInput(rive, "StateMachine", "Water", true)
    //const input3 = useStateMachineInput(rive, "StateMachine", "Electricity", true)
    //const input4 = useStateMachineInput(rive, "StateMachine", "Glow", true)
    //const input5 = useStateMachineInput(rive, "StateMachine", "Cracks", true)
    //const input6 = useStateMachineInput(rive, "StateMachine", "Fire", true)
    //const input7 = useStateMachineInput(rive, "StateMachine", "Smoke", true)

    const on_media_recorder_stop = useRef((chunks: Blob[]) => {
        const blob = new Blob(chunks, { type: "video/webm" })
        url.current = URL.createObjectURL(blob)
        document.body.appendChild(a.current)
        a.current.style.display = "none"
        a.current.href = url.current
        a.current.download = "test.webm"
        a.current.click()
    })
    const capture = () => {
        // Record data in chunks array when data is available
        media_recorder.current.ondataavailable = (evt) => { chunks.push(evt.data); };
        // Provide recorded data when recording stops
        media_recorder.current.onstop = () => {on_media_recorder_stop.current(chunks)}
        // Start recording using a 1s timeslice [ie data is made available every 1s)
        media_recorder.current.start(1000)
    }

    return (
        <main className="flex bg-white min-h-screen flex-col items-center justify-between p-24" onClick={() => {
            /*const canvas_stream = canvas!.captureStream(60)
            media_recorder.current = new MediaRecorder(canvas_stream, { mimeType: "video/webm; codecs=vp9" })
            capture()
            setTimeout(() => {
                media_recorder.current.stop()
            }, 3000)*/
            //trigger?.fire()
            rive?.play()
        }}>
            <div className="flex flex-row justify-between items-center w-[700px]">
                <RiveComponent style={{width: "700px", height: height}}/>
            </div>
        </main>
    )

}

function AsaBasic({width, height}: { width: number, height: number }) {
    const {rive, canvas, RiveComponent} = useRive({
        src: "/asa_eyes.riv",
        stateMachines: "State Machine 1",
        autoplay: true,
    });
    const media_recorder = useRef<MediaRecorder>(null!)
    const a = useRef(document.createElement("a"))
    const url = useRef<string>('')
    const chunks: Blob[] = []

    const hovering = useStateMachineInput(rive, "State Machine 1", "Hovering", false);

    const on_media_recorder_stop = useRef((chunks: Blob[]) => {
        const blob = new Blob(chunks, { type: "video/webm" })
        url.current = URL.createObjectURL(blob)
        document.body.appendChild(a.current)
        a.current.style.display = "none"
        a.current.href = url.current
        a.current.download = "test.webm"
        a.current.click()
    })
    const capture = () => {
        // Record data in chunks array when data is available
        media_recorder.current.ondataavailable = (evt) => { chunks.push(evt.data); };
        // Provide recorded data when recording stops
        media_recorder.current.onstop = () => {on_media_recorder_stop.current(chunks)}
        // Start recording using a 1s timeslice [ie data is made available every 1s)
        media_recorder.current.start(1000)
    }
    const xAxisLE = useStateMachineInput(rive, "State Machine 1", "xAxisLE", 0.5)
    const yAxisLE = useStateMachineInput(rive, "State Machine 1", "yAxisLE", 0.5)
    const xAxisRE = useStateMachineInput(rive, "State Machine 1", "xAxisRE", 0.5)
    const yAxisRE = useStateMachineInput(rive, "State Machine 1", "yAxisRE", 0.5)
    /*console.log(rive, rive)*/
    const updateRive = (x: number, y: number) => {
        if (rive) {
            /*rive.setInputs({
                "Mouse X": x,
                "Mouse Y": y
            });*/
            console.log(rive, x, y)
            xAxisLE!.value = x / (window.innerWidth * 0.5)
            yAxisLE!.value = y / window.innerHeight
            xAxisRE!.value = (x * 0.5) / (window.innerWidth)
            yAxisRE!.value = y / window.innerHeight
        }
    }

    useEffect(() => {
        /*if (rive){
            const canvas_stream = canvas!.captureStream(60); // fps
            // Create media recorder from canvas stream
            media_recorder.current = new MediaRecorder(canvas_stream, { mimeType: "video/webm; codecs=vp9" });
            capture()
            setTimeout(() => {
                media_recorder.current.stop()
            }, 20000)
        }*/
    }, [rive]);
    return (
        <main className="flex bg-[#ffe500] min-h-screen flex-col items-center justify-between p-24"
              onPointerMove={(event) => {
                  updateRive(event.pageX, event.pageY)
              }}>
            <div className="flex flex-row justify-between items-center">
        <div style={{width: width, height: height}}>
            <RiveComponent onPointerEnter={(event) => {
                if (!hovering?.value) {
                    hovering!.value = true
                    setTimeout(() => {
                        hovering!.value = false
                    }, 3900)
                /*const canvas_stream = canvas!.captureStream(60); // fps
                // Create media recorder from canvas stream
                media_recorder.current = new MediaRecorder(canvas_stream, { mimeType: "video/webm; codecs=vp9" });
                capture()
                setTimeout(() => {
                    media_recorder.current.stop()
                }, 500)
                rive?.play()*/
            }}}/>
        </div>
            </div>
        </main>
    )

}

function Logo({width, height}: { width: number, height: number }) {
    const {RiveComponent} = useRive({
        src: "/logo_proof.riv",
        autoplay: true,
    });
    return (
        <div style={{width: width, height: height}}>
            <RiveComponent/>
        </div>
    )

}

function RoughLogo({width, height}: { width: number, height: number }) {
    const {RiveComponent} = useRive({
        src: "/logo_rough.riv",
        autoplay: true,
    });
    return (
        <div style={{width: width, height: height}}>
            <RiveComponent/>
        </div>
    )

}

function RoughLogoColor({width, height}: { width: number, height: number }) {
    const {RiveComponent} = useRive({
        src: "/logo_rough_color.riv",
        autoplay: true,
    });
    return (
        <div style={{width: width, height: height}}>
            <RiveComponent/>
        </div>
    )

}

function AMorph({width, height}: { width: number, height: number }) {
    const {RiveComponent} = useRive({
        src: "/a_morph.riv",
        autoplay: true,
    });
    return (
        <div style={{width: width, height: height}}>
            <RiveComponent/>
        </div>
    )

}

function PurpleJewel({width, height}: { width: number, height: number }) {
    const {RiveComponent} = useRive({
        src: "/purple_jewel_final.riv",
        autoplay: true,
    });
    return (
        <div style={{width: width, height: height}}>
            <RiveComponent/>
        </div>
    )

}

function YellowJewel({width, height}: {width: number, height: number}) {
    const {RiveComponent} = useRive({
        src: "/yellow_jewel_rotate_basic.riv",
        autoplay: true,
    });
    return (
        <div style={{width: width, height: height}}>
            <RiveComponent/>
        </div>
    )

}

function RedJewel({width, height}: {width: number, height: number}) {
    const {RiveComponent} = useRive({
        src: "/red_jewel_rotate_basic.riv",
        autoplay: true,
    });
    return (
        <div style={{width: width, height: height}}>
            <RiveComponent/>
        </div>
    )

}

function Diamond({width, height}: {width: number, height: number}) {
    const {RiveComponent} = useRive({
        src: "/diamond_rotate_basic.riv",
        autoplay: true,
    });
    return (
        <div style={{width: width, height: height}}>
            <RiveComponent/>
        </div>
    )

}

function PurpleJewelShine({width, height}: {width: number, height: number}) {
    const {RiveComponent} = useRive({
        src: "/purple_jewel_shine.riv",
        autoplay: true,
    });
    return (
        <div style={{width: width, height: height}}>
            <RiveComponent/>
        </div>
    )

}

function PurpleJewelBling({width, height}: {width: number, height: number}) {
    const {RiveComponent} = useRive({
        src: "/purple_jewel_rot_and_bling.riv",
        autoplay: true,
    });
    return (
        <div style={{width: width, height: height}}>
            <RiveComponent/>
        </div>
    )

}
