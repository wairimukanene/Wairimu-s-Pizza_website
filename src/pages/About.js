import React from 'react'
import MultiplePizza from '../assets/multiplePizzas.jpeg'
import  '../styles/About.css'

function About() {
    return (
      <div className="about">
        <div
          className="aboutTop"
          style={{
            backgroundImage: `url(${MultiplePizza})`,
          }}
        ></div>
        <div className="aboutBottom">
            <h1>ABOUT US</h1>
            <p>Modern pizza evolved from similar flatbread dishes in Naples, Italy, in the 18th or early 19th century. The word pizza was first documented in AD 997 in Gaeta and successively in different parts of Central and Southern Italy. Pizza was mainly eaten in Italy and by emigrants from there.Examples of flatbreads that survive to this day from the ancient Mediterranean world include focaccia (which may date back as far as the ancient Etruscans); Manakish in the Levant, coca (which has sweet and savory varieties) from Catalonia, Valencia and the Balearic Islands; the Greek Pita; Lepinja in the Balkans; and Piadina in the Romagna part of Emilia-Romagna in Italy.</p>

        </div>
      </div>
    );
  }
  
  export default About;