import React from "react";
import './CSS/Donations.css';
import donation from '../../Components/Assests/donation.png'

const Donations = () =>{
    return(
        <div className="donations">
            <h1>MAKE A DONATION</h1>
            <hr style={{marginBottom:"4rem"}}/>
            <div className="donations-img">
            <img src={donation} alt="" />
        </div>

        <p>Lorem ipsum dolor sit amet consectetur. Ultricies felis nibh cras dui venenatis vitae enim mattis amet. Sed lectus interdum lectus tellus quam viverra. Leo sed massa non varius a egestas pellentesque. Mi sit ut risus bibendum urna purus curabitur sapien. Nibh tincidunt sed sed tortor euismod ultricies vitae orci gravida. 
      Augue ac feugiat volutpat a lorem elit id dolor. Elit duis egestas eros odio libero sit. Dignissim viverra at magna sed sapien urna adipiscing nisl. Enim et et enim nibh ut placerat. Eget elit in quam dignissim amet. Gravida et augue ut risus adipiscing orci viverra posuere. Sodales nisl aliquet mauris pellentesque sed. Ut ac sed enim eget nulla ac. Dignissim dictum tristique fermentum semper urna in amet amet. Nulla pretium vivamus a integer sit enim lobortis magna. Volutpat arcu ac ullamcorper sed nunc.
       In iaculis mattis lacus enim nunc sed tortor habitasse magnis. Ut facilisis egestas amet faucibus sem faucibus sed morbi lectus.</p>
       <p>In iaculis mattis lacus enim nunc sed tortor habitasse magnis. Ut facilisis egestas amet faucibus sem faucibus sed morbi lectus</p>
        
        <div className="donation-btn">
            <button>Donate Now</button>
        </div>
        </div>
    )
}

export default Donations;