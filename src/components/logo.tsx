"use client"

import logo_color from "@/assets/logo-color.png"
import logo_color_layer_1 from "@/assets/logo-color-layer-1.png"
import logo_color_layer_2 from "@/assets/logo-color-layer-2.png"
import logo_color_layer_3 from "@/assets/logo-color-layer-3.png"
import logo_color_layer_4 from "@/assets/logo-color-layer-4.png"
import logo_color_layer_5 from "@/assets/logo-color-layer-5.png"

import logo_transparent from "@/assets/logo-transparent.png"
import logo_transparent_layer_1 from "@/assets/logo-transparent-layer-1.png"
import logo_transparent_layer_2 from "@/assets/logo-transparent-layer-2.png"
import logo_transparent_layer_3 from "@/assets/logo-transparent-layer-3.png"
import logo_transparent_layer_4 from "@/assets/logo-transparent-layer-4.png"
import logo_transparent_layer_5 from "@/assets/logo-transparent-layer-5.png"

import Image from "next/image"

const scale = {
  layer1: 500/500,
  layer2: 400/500,
  layer3: 300/500,
  layer4: 200/500,
  layer5: 100/500,
}

export function Logo({ animated=false, colored=false, size=64}: {
  animated?: boolean;
  colored?: boolean;
  size?: number;
}) {
  if (animated && colored) return (
    <div className="relative" style={{ width: size, height: size, animation: "spin 15s linear infinite" }}>
      <Image src={logo_color_layer_1} alt="logo-color-layer-1" style={{ width: size * scale.layer1 }} />
      <Image src={logo_color_layer_2} alt="logo-color-layer-2" style={{ width: size * scale.layer2 }} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
      <Image src={logo_color_layer_3} alt="logo-color-layer-3" style={{ width: size * scale.layer3 }} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
      <Image src={logo_color_layer_4} alt="logo-color-layer-4" style={{ width: size * scale.layer4 }} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
      <Image src={logo_color_layer_5} alt="logo-color-layer-5" style={{ width: size * scale.layer5 }} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
    </div>
  )

  if (animated && !colored) return (
    <div className="relative" style={{ width: size, height: size, animation: "spin 15s linear infinite" }}>
      <Image src={logo_transparent_layer_1} alt="logo-transparent-layer-1" style={{ width: size * scale.layer1 }} />
      <Image src={logo_transparent_layer_2} alt="logo-transparent-layer-2" style={{ width: size * scale.layer2 }} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
      <Image src={logo_transparent_layer_3} alt="logo-transparent-layer-3" style={{ width: size * scale.layer3 }} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
      <Image src={logo_transparent_layer_4} alt="logo-transparent-layer-4" style={{ width: size * scale.layer4 }} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
      <Image src={logo_transparent_layer_5} alt="logo-transparent-layer-5" style={{ width: size * scale.layer5 }} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
    </div>
  )

  if (!animated && colored) return (
    <Image src={logo_color} alt="logo-color" style={{ width: size }} />
  )

  if (!animated && !colored) return (
    <Image src={logo_transparent} alt="logo-transparent" style={{ width: size }} />
  )

  return null
}