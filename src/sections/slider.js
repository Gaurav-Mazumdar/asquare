import React, { Component } from "react";
import Slider from "react-slick";
import img1 from '../assets/slider/img1.jpeg'

const photos = [
    {
        name: 'Photo 1',
        url: img1,
    },
    {
        name: 'Photo 2',
        url: img1
    },
    {
        name: 'Photo 3',
        url: img1
    },
    {
        name: 'Photo 4',
        url: img1
    }
]

class Slide extends Component {
    render(){
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
          };
          return(
            <div className="App">
                <Slider {...settings} style={{paddingTop:"80px"}}>
                    {photos.map((photo)=>{
                        return (
                            <div>
                                <img width="100%" height="330px" src={photo.url} alt="" key={photo.name}/>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        )
    }
}

export default Slide;