import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

function skills() {
  return (
    <section id='skills'>
        <span className="skillTitle">What I Do</span>
        <span className="skillDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus dolores nulla aut reiciendis dicta nam ex error at cumque numquam cum, tempora, perferendis aspernatur. Repellat nihil debitis cum dolores a?</span>
        <div className="skillBars">
            <div className="skillbar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                  <h2 className="">UI/UX Design</h2>
                  <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fugit maiores distinctio magni ducimus.</p>
                </div>
            </div>
            <div className="skillbar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                  <h2 className="">Website Design</h2>
                  <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fugit maiores distinctio magni ducimus.</p>
                </div>
            </div>
            <div className="skillbar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                  <h2 className="">App Design</h2>
                  <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fugit maiores distinctio magni ducimus.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default skills