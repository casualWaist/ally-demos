'use client'

import {useRive} from "rive-react"

export default function Home() {
  const { RiveComponent } = useRive({
    src: "/ally_security.riv",
    autoplay: true,
  });

  return (
    <main className="flex bg-[#ffe500] min-h-screen flex-col items-center justify-between p-24">
      <div className="w-[500px] h-[500px]">
        <RiveComponent/>
      </div>
        <RiveMed/>
        <RiveSm/>
    </main>
  );
}

function RiveMed() {
    const {RiveComponent} = useRive({
        src: "/ally_security.riv",
        autoplay: true,
    });
    return (
        <div className="w-[250px] h-[250px]">
            <RiveComponent/>
        </div>
    )
}

function RiveSm() {
    const {RiveComponent} = useRive({
        src: "/ally_security.riv",
        autoplay: true,
    });
    return (
        <div className="w-[100px] h-[100px]">
            <RiveComponent/>
        </div>
    )
}
