import React from 'react'
import './mision.css'
import vision from '../../Assests/vision.png'
import mission from '../../Assests/mission.png'

const VisionMission = () => {
  return (
    <div className='vision-container'>
      <h1>VISION AND MISSION STATEMENT</h1>
      <hr />
      <div className="vision-mission">
          <div className="vision">
              <div><img src={vision} alt="" /></div>
              <div>
                <h1>OUR VISION</h1>
                <p>To create a world where empowered youth lead inclusive and sustainable communities, fostering resilience and prosperity for all.</p>
              </div>
          </div>

          <div className="mission">
            <div>
              <h1>OUR MISSION</h1>
              <p>To inspire and empower communities by fostering youth leadership, promoting gender equality, and driving climate action for a sustainable and inclusive future.</p>
            </div>
            <div><img src={mission} alt="" /></div>
          </div>
      </div>
    </div>
  )
}

export default VisionMission