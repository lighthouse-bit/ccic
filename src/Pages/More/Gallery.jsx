import React, { useState }  from "react";
import './CSS/Gallery.css';
import gallery1 from '../../Components/Assests/gallery1.png';
import gallery2 from '../../Components/Assests/gallery2.png';
import gallery3 from '../../Components/Assests/gallery3.png';
import gallery4 from '../../Components/Assests/gallery4.png';
import gallery5 from '../../Components/Assests/gallery5.png';
import gallery6 from '../../Components/Assests/gallery6.png';
import gallery7 from '../../Components/Assests/gallery7.png';
import gallery8 from '../../Components/Assests/gallery8.png';
import gallery9 from '../../Components/Assests/gallery9.png';
import gallery10 from '../../Components/Assests/gallery10.png';
import gallery11 from '../../Components/Assests/gallery11.png';
import gallery12 from '../../Components/Assests/gallery12.png';

const images = [
    { src: gallery1, category: "All Photos" },
    { src: gallery2, category: "From Programs" },
    { src: gallery3, category: "Founders" },
    { src: gallery4, category: "Donors and Partners" },
    { src: gallery5, category: "Events" },
    { src: gallery6, category: "Trainings" },
    { src: gallery7, category: "From Programs" },
    { src: gallery8, category: "Donors and Partners" },
    { src: gallery9, category: "Trainings" },
    { src: gallery10, category: "Events" },
    { src: gallery11, category: "Founders" },
    { src: gallery12, category: "Donors and Partners" },
  ];
  
  const categories = [
    "All Photos",
    "From Programs",
    "Founders",
    "Donors and Partners",
    "Events",
    "Trainings",
  ];

const Gallery = () =>{
    const [selectedCategory, setSelectedCategory] = useState("All Photos");

    // Filter images by category
    const filteredImages =
        selectedCategory === "All Photos"
        ? images
        : images.filter((img) => img.category === selectedCategory);
    return(
        <div className="gallery">
            <h1>GALLERY</h1>
            <hr style={{marginBottom:"4rem"}}/>

            <div className="gallery-container">
                {/* Category Buttons */}
                <div className="gallery-filters">
                    {categories.map((category) => (
                    <button
                        key={category}
                        className={selectedCategory === category ? "active" : ""}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category.replace(/_/g, " ")}
                    </button>
                    ))}
                </div>

                {/* Photo Grid */}
                <div className="gallery-grid">
                    {filteredImages.map((image, index) => (
                    <img key={index} src={image.src} alt={`Gallery ${index}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gallery;