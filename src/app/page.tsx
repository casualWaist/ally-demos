'use client'

import {useEffect} from "react"
import {useRive} from "rive-react"
import {useStateMachineInput} from "rive-react"

export default function Home() {
  return (
      <main className="flex bg-[#ffe500] min-h-screen flex-col items-center justify-between p-24">
          <div className="flex flex-row justify-between items-center">
              <AsaBasic width={500} height={500}/>
          </div>
          <div className="flex flex-row justify-between items-center">
              <Logo width={500} height={500}/>
          </div>
          <div className="flex flex-row justify-between items-center p-36">
              <RoughLogo width={500} height={500}/>
              <RoughLogoColor width={500} height={500}/>
          </div>
          <div className="flex flex-row justify-between items-center">
              <AMorph width={500} height={500}/>
          </div>
          <div className="flex flex-row justify-between items-center">
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
          </div>
          <div className="flex flex-row justify-between items-center">
              <PurpleJewelShine width={500} height={500}/>
              <PurpleJewelBling width={500} height={500}/>
          </div>
          <div className="flex flex-row justify-between items-center">
              <PurpleJewelShine width={250} height={250}/>
              <PurpleJewelBling width={250} height={250}/>
          </div>
          <div className="flex flex-row justify-between items-center">
              <PurpleJewelShine width={100} height={100}/>
              <PurpleJewelBling width={100} height={100}/>
          </div>
      </main>
  );
}

function AsaBasic({width, height}: { width: number, height: number }) {
    const {rive, RiveComponent} = useRive({
        src: "/asa_proof.riv",
        stateMachines: "State Machine 1",
        autoplay: true,
    });

    const hovering = useStateMachineInput(rive, "State Machine 1", "Hovering", false);

    console.log(rive, hovering?.value);
    useEffect(() => {
        if (rive){
            const handleMouseMove = (event: MouseEvent) => {
                console.log(event)
            }

            window.addEventListener('mousemove', handleMouseMove);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };

        }
    }, [rive]);
    return (
        <div style={{width: width, height: height}}>
            <RiveComponent onPointerEnter={() => {
                if (!hovering?.value) {
                    hovering!.value = true
                    setTimeout(() => {
                        hovering!.value = false
                    }, 3900)
            }}}/>
        </div>
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
        src: "/purple_jewel_rotate_basic.riv",
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
