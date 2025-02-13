import React from 'react'
import './blog.css'
import preview from '../../Components/Assests/preview.png'
import preview2 from '../../Components/Assests/preview2.png'
import postImage from '../../Components/Assests/post-img.png'

const Blog = () => {
  return (
    <div className='blog'>
         <h1>BLOG</h1>
         <hr style={{marginBottom:"4rem"}}/>

        <div className="blog-preview">
            <div className='preview-img'>
                <img src={preview} alt="" />
            </div>
            <div className='preview-text'>
                <div>
                    <h2>PROMOTING WOMEN'S EMPOWERMENT AND LEADERSHIP IN CLIMATE RESILIENCE AND PEACE BUILDING</h2>
                </div>
                <div><p>Lorem ipsum dolor sit amet consectetur. Ultricies felis nibh cras dui venenatis vitae enim mattis amet. Sed lectus interdum lectus tellus quam viverra. </p></div>
                <div className='preview-post'>
                    <div className='post-img'>
                        <img src={preview2} alt="" />
                        <p1>Michael Ogbonna <br /><span>27 Jan, 2025</span></p1>  
                    </div>
                </div>
            </div>
        </div>

        <div className="latest-post">
            <div className='latest-title'>
                <h2>Latest Posts</h2>
                <h3>See All</h3>
            </div>

            {/* posts start fom here */}
            <div className="posts">
                <div className='post-card'>
                    <div className='postcard-img'>
                        <img src={postImage} alt="" />
                    </div>
                    <div className='post-text'>
                        <p>ADVOCATING FOR POLICIES AND INITIATIVES THAT COMBAT GENDER-BASED VIOLENCE AND DESCRIMINATION</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Ultricies felis nibh cras dui venenatis vitae enim mattis amet...</p>
                    <div className='poster'>
                        <div className='preview-post'>
                            <div className='post-img'>
                                <img src={preview2} alt="" />
                                <p1>Michael Ogbonna <br /><span>27 Jan, 2025</span></p1>  
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='post-card'>
                    <div className='postcard-img'>
                        <img src={postImage} alt="" />
                    </div>
                    <div className='post-text'>
                        <p>ADVOCATING FOR POLICIES AND INITIATIVES THAT COMBAT GENDER-BASED VIOLENCE AND DESCRIMINATION</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Ultricies felis nibh cras dui venenatis vitae enim mattis amet...</p>
                    <div className='poster'>
                        <div className='preview-post'>
                            <div className='post-img'>
                                <img src={preview2} alt="" />
                                <p1>Michael Ogbonna <br /><span>27 Jan, 2025</span></p1>  
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='post-card'>
                    <div className='postcard-img'>
                        <img src={postImage} alt="" />
                    </div>
                    <div className='post-text'>
                        <p>ADVOCATING FOR POLICIES AND INITIATIVES THAT COMBAT GENDER-BASED VIOLENCE AND DESCRIMINATION</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Ultricies felis nibh cras dui venenatis vitae enim mattis amet...</p>
                    <div className='poster'>
                        <div className='preview-post'>
                            <div className='post-img'>
                                <img src={preview2} alt="" />
                                <p1>Michael Ogbonna <br /><span>27 Jan, 2025</span></p1>  
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>   
            {/* posts start fom here */}
            <div className="posts">
                <div className='post-card'>
                    <div className='postcard-img'>
                        <img src={postImage} alt="" />
                    </div>
                    <div className='post-text'>
                        <p>ADVOCATING FOR POLICIES AND INITIATIVES THAT COMBAT GENDER-BASED VIOLENCE AND DESCRIMINATION</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Ultricies felis nibh cras dui venenatis vitae enim mattis amet...</p>
                    <div className='poster'>
                        <div className='preview-post'>
                            <div className='post-img'>
                                <img src={preview2} alt="" />
                                <p1>Michael Ogbonna <br /><span>27 Jan, 2025</span></p1>  
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='post-card'>
                    <div className='postcard-img'>
                        <img src={postImage} alt="" />
                    </div>
                    <div className='post-text'>
                        <p>ADVOCATING FOR POLICIES AND INITIATIVES THAT COMBAT GENDER-BASED VIOLENCE AND DESCRIMINATION</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Ultricies felis nibh cras dui venenatis vitae enim mattis amet...</p>
                    <div className='poster'>
                        <div className='preview-post'>
                            <div className='post-img'>
                                <img src={preview2} alt="" />
                                <p1>Michael Ogbonna <br /><span>27 Jan, 2025</span></p1>  
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='post-card'>
                    <div className='postcard-img'>
                        <img src={postImage} alt="" />
                    </div>
                    <div className='post-text'>
                        <p>ADVOCATING FOR POLICIES AND INITIATIVES THAT COMBAT GENDER-BASED VIOLENCE AND DESCRIMINATION</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Ultricies felis nibh cras dui venenatis vitae enim mattis amet...</p>
                    <div className='poster'>
                        <div className='preview-post'>
                            <div className='post-img'>
                                <img src={preview2} alt="" />
                                <p1>Michael Ogbonna <br /><span>27 Jan, 2025</span></p1>  
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>   
            {/* posts start fom here */}
            <div className="posts">
                <div className='post-card'>
                    <div className='postcard-img'>
                        <img src={postImage} alt="" />
                    </div>
                    <div className='post-text'>
                        <p>ADVOCATING FOR POLICIES AND INITIATIVES THAT COMBAT GENDER-BASED VIOLENCE AND DESCRIMINATION</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Ultricies felis nibh cras dui venenatis vitae enim mattis amet...</p>
                    <div className='poster'>
                        <div className='preview-post'>
                            <div className='post-img'>
                                <img src={preview2} alt="" />
                                <p1>Michael Ogbonna <br /><span>27 Jan, 2025</span></p1>  
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='post-card'>
                    <div className='postcard-img'>
                        <img src={postImage} alt="" />
                    </div>
                    <div className='post-text'>
                        <p>ADVOCATING FOR POLICIES AND INITIATIVES THAT COMBAT GENDER-BASED VIOLENCE AND DESCRIMINATION</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Ultricies felis nibh cras dui venenatis vitae enim mattis amet...</p>
                    <div className='poster'>
                        <div className='preview-post'>
                            <div className='post-img'>
                                <img src={preview2} alt="" />
                                <p1>Michael Ogbonna <br /><span>27 Jan, 2025</span></p1>  
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='post-card'>
                    <div className='postcard-img'>
                        <img src={postImage} alt="" />
                    </div>
                    <div className='post-text'>
                        <p>ADVOCATING FOR POLICIES AND INITIATIVES THAT COMBAT GENDER-BASED VIOLENCE AND DESCRIMINATION</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Ultricies felis nibh cras dui venenatis vitae enim mattis amet...</p>
                    <div className='poster'>
                        <div className='preview-post'>
                            <div className='post-img'>
                                <img src={preview2} alt="" />
                                <p1>Michael Ogbonna <br /><span>27 Jan, 2025</span></p1>  
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>   
        </div>
    </div>
  )
}

export default Blog