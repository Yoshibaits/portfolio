import React from 'react'
import './intro.css'
import bg from '../../assets/image.png' 
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll'

function Intro() {
  return (
    <section className="intro">
        <div className="introContent">
            <span className="hello">Hello</span>
            <span className="introtext">I'm <span className="introName">Neil</span><br />Web Programmer</span>
            <p className="introPara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum necessitatibus beatae odit iusto nostrum <br /> optio vitae accusantium ratione eum mod.</p>
            <Link> <button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg" />Hire me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro