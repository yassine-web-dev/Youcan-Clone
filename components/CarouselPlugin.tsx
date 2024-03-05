"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
 
export function CarouselPlugin({ lang, images }: {lang: string, images: string[]}) {
  
  let direction = ""
  const drs: string[] = ["ltr", "rtl"]

  if(lang !== "ar") {
    direction = drs[0]
  }
  else {
    direction = drs[1]
  }
  
  const plugin = React.useRef(
    Autoplay({ delay: 2000, direction: direction })
  )
 
  return (
    <Carousel
      opts={{
        direction: direction
      }}
      plugins={[plugin.current]}
      className="w-full max-w-[550px]"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Image src={image} width={550} height={550} alt={`hero image`} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}