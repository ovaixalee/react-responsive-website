import React from 'react'
import aboutus from "./images/aboutus.png"
import Common from './Common'

const About = () =>
    <>
    <Common 
    name="Die"
    text="Wir entwickeln und implementieren auf unsere Kunden zugeschnittene Konzepte in den Bereichen Entwicklung, Online-Marketing und Suchmaschinenoptimierung."
    imgsrc={aboutus}
    visit="/contact"
    btname="Mehr Lesen"
    />
    </>


export default About