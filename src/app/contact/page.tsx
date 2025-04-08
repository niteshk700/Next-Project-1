'use client'
import { SignupFormDemo } from '@/components/ContactForm'
import { SpotlightNewDemo } from '@/components/HeroSection2'
import { WorldMapDemo } from '@/components/WorldMap'
import React from 'react'

function Contact() {
  return (
    <div>
        <SpotlightNewDemo/>
        <SignupFormDemo/>
      <WorldMapDemo/>
    </div>
  )
}

export default Contact