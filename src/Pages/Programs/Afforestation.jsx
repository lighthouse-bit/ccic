import React from 'react'
import './CSS/afforestation.css'
import afforest1 from '../../Components/Assests/afforest1.png'
import afforest2 from '../../Components/Assests/afforest2.png'
import afforest3 from '../../Components/Assests/afforest3.png'

const Afforestation = () => {
  return (
    <div className='afforestation'>
        <h2>AFFORESTATION PROJECT IN ZAMBIA</h2>
        <hr style={{marginBottom:"4rem"}}/>
        <div className="afforestation-img">
            <img src={afforest1} alt="" />
            <img src={afforest2} alt="" />
            <img src={afforest3} alt="" />
        </div>

        <p>Lorem ipsum dolor sit amet consectetur. Ultricies felis nibh cras dui venenatis vitae enim mattis amet. Sed lectus interdum lectus tellus quam viverra. Leo sed massa non varius a egestas pellentesque. Mi sit ut risus bibendum urna purus curabitur sapien. Nibh tincidunt sed sed tortor euismod ultricies vitae orci gravida. 
      Augue ac feugiat volutpat a lorem elit id dolor. Elit duis egestas eros odio libero sit. Dignissim viverra at magna sed sapien urna adipiscing nisl. Enim et et enim nibh ut placerat. Eget elit in quam dignissim amet. Gravida et augue ut risus adipiscing orci viverra posuere. Sodales nisl aliquet mauris pellentesque sed. Ut ac sed enim eget nulla ac. Dignissim dictum tristique fermentum semper urna in amet amet. Nulla pretium vivamus a integer sit enim lobortis magna. Volutpat arcu ac ullamcorper sed nunc.
       In iaculis mattis lacus enim nunc sed tortor habitasse magnis. Ut facilisis egestas amet faucibus sem faucibus sed morbi lectus.</p>
       <p>In iaculis mattis lacus enim nunc sed tortor habitasse magnis. Ut facilisis egestas amet faucibus sem faucibus sed morbi lectus</p>
       
        
    </div>
  )
}

export default Afforestation