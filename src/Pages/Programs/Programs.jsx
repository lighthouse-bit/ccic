import React from 'react'
import './programs.css'
import AdvanceWomen from '../../Components/Navbar/Programs/AdvanceWomen'
import YouthLeadership from '../../Components/Navbar/Programs/YouthLeadership'
import LocalConference from '../../Components/Navbar/Programs/LocalConference'
import Consult from '../../Components/Navbar/Programs/Consult'
import Afforestation from '../../Components/Navbar/Programs/Afforestation'
import Hygiene from '../../Components/Navbar/Programs/Hygiene'
import Leadership from '../../Components/Navbar/Programs/Leadership'

const Programs = () => {
  return (
    <div className='programs-container'>
        <div className="programs">
            <h1>PROGRAMS</h1>
            <hr />

            <AdvanceWomen/>   
            <YouthLeadership />
            <LocalConference/>
            <Consult/>
            <Afforestation/>
            <Hygiene/>
            <Leadership/>
        </div>
    </div>
  )
}

export default Programs