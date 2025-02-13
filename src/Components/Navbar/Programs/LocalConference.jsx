import React from 'react'
import './CSS/localConference.css'
import conference1 from '../../Assests/conference1.png'
import conference2 from '../../Assests/conference2.png'
import conference3 from '../../Assests/conference3.png'

const LocalConference = () => {
  return (
    <div className='conference-container'>
        <h2>LOCAL CONFERENCE OF YOUTH IN FREE TOWN(LCOY)</h2>
        <div className="conference-image">
            <img src={conference1} alt="" />
            <img src={conference2} alt="" />
            <img src={conference3} alt="" />
        </div>

        <p>Lorem ipsum dolor sit amet consectetur. Ultricies felis nibh cras dui venenatis vitae enim mattis amet. Sed lectus interdum lectus tellus quam viverra. Leo sed massa non varius a egestas pellentesque. Mi sit ut risus bibendum urna purus curabitur sapien. Nibh tincidunt sed sed tortor euismod ultricies vitae orci gravida. 
      Augue ac feugiat volutpat a lorem elit id dolor. Elit duis egestas eros odio libero sit. Dignissim viverra at magna sed sapien urna adipiscing nisl. Enim et et enim nibh ut placerat. Eget elit in quam dignissim amet. Gravida et augue ut risus adipiscing orci viverra posuere. Sodales nisl aliquet mauris pellentesque sed. Ut ac sed enim eget nulla ac. Dignissim dictum tristique fermentum semper urna in amet amet. Nulla pretium vivamus a integer sit enim lobortis magna. Volutpat arcu ac ullamcorper sed nunc.
       In iaculis mattis lacus enim nunc sed tortor habitasse magnis. Ut facilisis egestas amet faucibus sem faucibus sed morbi lectus.</p>
       
        
    </div>
  )
}

export default LocalConference