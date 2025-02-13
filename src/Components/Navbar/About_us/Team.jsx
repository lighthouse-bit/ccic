import React from 'react'
import './CSS/team.css'
import team1 from '../../Assests/team1.png'
import team2 from '../../Assests/team2.png'
import team3 from '../../Assests/team3.png'
import team4 from '../../Assests/team4.png'
import team5 from '../../Assests/team5.png'
import team6 from '../../Assests/team6.png'

const Team = () => {
  return (
    <div className='team-container'>
      <div className="our-team">
        <h1>MEET OUR TEAM</h1>
        <hr />

        <div className="team">
          <div>
            <div className="team-img">
              <img src={team1} alt="" />
              <p2>Lorem ipsum dolor</p2>
              <p1>CEO/FOUNDER</p1>
              <p>orem ipsum dolor sit amet consectetur. Ultricies felis nibh cras dui venenatis vitae enim mattis amet. Sed lectus interdum lectus tellus quam viverra. Leo sed massa non varius a egestas pellentesque. </p>
            </div>
          </div>

          <div>
            <div className="team-img">
              <img src={team2} alt="" />
              <p2>Lorem ipsum dolor</p2>
              <p1>CEO/FOUNDER</p1>
              <p>orem ipsum dolor sit amet consectetur. Ultricies felis nibh cras dui venenatis vitae enim mattis amet. Sed lectus interdum lectus tellus quam viverra. Leo sed massa non varius a egestas pellentesque. </p>
            </div>
          </div>

          <div>
            <div className="team-img">
            <img src={team3}alt="" />
              <p2>Lorem ipsum dolor</p2>
              <p1>CEO/FOUNDER</p1>
              <p>orem ipsum dolor sit amet consectetur. Ultricies felis nibh cras dui venenatis vitae enim mattis amet. Sed lectus interdum lectus tellus quam viverra. Leo sed massa non varius a egestas pellentesque. </p>
            </div>
          </div>
        </div>
        <div className="team">
          <div>
            <div className="team-img">
              <img src={team4} alt="" />
              <p2>Lorem ipsum dolor</p2>
              <p1>CEO/FOUNDER</p1>
              <p>orem ipsum dolor sit amet consectetur. Ultricies felis nibh cras dui venenatis vitae enim mattis amet. Sed lectus interdum lectus tellus quam viverra. Leo sed massa non varius a egestas pellentesque. </p>
            </div>
          </div>

          <div>
            <div className="team-img">
              <img src={team5} alt="" />
              <p2>Lorem ipsum dolor</p2>
              <p1>CEO/FOUNDER</p1>
              <p>orem ipsum dolor sit amet consectetur. Ultricies felis nibh cras dui venenatis vitae enim mattis amet. Sed lectus interdum lectus tellus quam viverra. Leo sed massa non varius a egestas pellentesque. </p>
            </div>
          </div>

          <div>
            <div className="team-img">
            <img src={team6}alt="" />
              <p2>Lorem ipsum dolor</p2>
              <p1>CEO/FOUNDER</p1>
              <p>orem ipsum dolor sit amet consectetur. Ultricies felis nibh cras dui venenatis vitae enim mattis amet. Sed lectus interdum lectus tellus quam viverra. Leo sed massa non varius a egestas pellentesque. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team