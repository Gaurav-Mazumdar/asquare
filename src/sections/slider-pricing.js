import React, { Component } from "react";
import Slider from "react-slick";
import img1 from '../assets/one.jpg'

const photos = {
    monthly: [
        {
          id: 1,
          name: 'Free Plan',
          description: 'For Small teams or office',
          buttonText: 'Start free trail',
          priceWithUnit: '$0',
          points: [
            {
              id: 1,
              icon: <IoIosCheckmarkCircle />,
              text: 'Drag & Drop Builder',
              isAvailable: true,
            },
            {
              id: 2,
              icon: <IoIosCheckmarkCircle />,
              text: "1,000's of Templates",
              isAvailable: true,
            },
            {
              id: 3,
              icon: <IoIosCheckmarkCircle />,
              text: 'Blog Support Tools',
              isAvailable: true,
            },
            {
              id: 4,
              icon: <IoIosCloseCircle />,
              text: 'eCommerce Store ',
              isAvailable: true,
            },
          ],
        },
        {
          id: 2,
          name: 'Business king',
          description: 'For Enterprise business',
          priceWithUnit: '$15',
          buttonText: 'Create account',
          anotherOption: 'Or Start 14 Days trail',
          points: [
            {
              id: 1,
              icon: <IoIosCheckmarkCircle />,
              text: 'Drag & Drop Builder',
              isAvailable: true,
            },
            {
              id: 2,
              icon: <IoIosCheckmarkCircle />,
              text: "1,000's of Templates",
              isAvailable: true,
            },
            {
              id: 3,
              icon: <IoIosCheckmarkCircle />,
              text: 'Blog Support Tools',
              isAvailable: true,
            },
            {
              id: 4,
              icon: <IoIosCheckmarkCircle />,
              text: 'eCommerce Store ',
              isAvailable: true,
            },
          ],
        },
        {
          id: 3,
          header: 'Suggested',
          headerIcon: <IoIosCheckmarkCircle />,
          name: 'Pro Master',
          description: 'For pro level developers',
          priceWithUnit: '$24',
          buttonText: 'Create account',
          anotherOption: 'Or Start 14 Days trail',
          points: [
            {
              id: 1,
              icon: <IoIosCheckmarkCircle />,
              text: 'Drag & Drop Builder',
              isAvailable: true,
            },
            {
              id: 2,
              icon: <IoIosCheckmarkCircle />,
              text: "1,000's of Templates",
              isAvailable: true,
            },
            {
              id: 3,
              icon: <IoIosCheckmarkCircle />,
              text: 'Blog Support Tools',
              isAvailable: true,
            },
            {
              id: 4,
              icon: <IoIosCheckmarkCircle />,
              text: 'eCommerce Store ',
              isAvailable: true,
            },
          ],
        },
      ],
      quarterly: [
        {
          id: 1,
          name: 'Free Plan',
          description: 'For Small teams or office',
          buttonText: 'Start free trail',
          priceWithUnit: '$0',
          points: [
            {
              id: 1,
              icon: <IoIosCheckmarkCircle />,
              text: 'Drag & Drop Builder',
              isAvailable: true,
            },
            {
              id: 2,
              icon: <IoIosCheckmarkCircle />,
              text: "1,000's of Templates",
              isAvailable: true,
            },
            {
              id: 3,
              icon: <IoIosCheckmarkCircle />,
              text: 'Blog Support Tools',
              isAvailable: true,
            },
            {
              id: 4,
              icon: <IoIosCloseCircle />,
              text: 'eCommerce Store ',
              isAvailable: true,
            },
          ],
        },
        {
          id: 2,
          name: 'Business king',
          description: 'For Enterprise business',
          priceWithUnit: '$15',
          buttonText: 'Create account',
          anotherOption: 'Or Start 14 Days trail',
          points: [
            {
              id: 1,
              icon: <IoIosCheckmarkCircle />,
              text: 'Drag & Drop Builder',
              isAvailable: true,
            },
            {
              id: 2,
              icon: <IoIosCheckmarkCircle />,
              text: "1,000's of Templates",
              isAvailable: true,
            },
            {
              id: 3,
              icon: <IoIosCheckmarkCircle />,
              text: 'Blog Support Tools',
              isAvailable: true,
            },
            {
              id: 4,
              icon: <IoIosCheckmarkCircle />,
              text: 'eCommerce Store ',
              isAvailable: true,
            },
          ],
        },
        {
          id: 3,
          header: 'Suggested',
          headerIcon: <IoIosCheckmarkCircle />,
          name: 'Pro Master',
          description: 'For pro level developers',
          priceWithUnit: '$24',
          buttonText: 'Create account',
          anotherOption: 'Or Start 14 Days trail',
          points: [
            {
              id: 1,
              icon: <IoIosCheckmarkCircle />,
              text: 'Drag & Drop Builder',
              isAvailable: true,
            },
            {
              id: 2,
              icon: <IoIosCheckmarkCircle />,
              text: "1,000's of Templates",
              isAvailable: true,
            },
            {
              id: 3,
              icon: <IoIosCheckmarkCircle />,
              text: 'Blog Support Tools',
              isAvailable: true,
            },
            {
              id: 4,
              icon: <IoIosCheckmarkCircle />,
              text: 'eCommerce Store ',
              isAvailable: true,
            },
          ],
        },
      ],
      annual: [
        {
          id: 1,
          name: 'Free Plan',
          description: 'For Small teams or office',
          buttonText: 'Start free trail',
          priceWithUnit: '$0',
          points: [
            {
              id: 1,
              icon: <IoIosCheckmarkCircle />,
              text: "1,000's of Templates",
              isAvailable: true,
            },
            {
              id: 2,
              icon: <IoIosCheckmarkCircle />,
              text: 'Drag & Drop Builder',
              isAvailable: true,
            },
            {
              id: 3,
              icon: <IoIosCheckmarkCircle />,
              text: 'Blog Support Tools',
              isAvailable: true,
            },
            {
              id: 4,
              icon: <IoIosCloseCircle />,
              text: 'eCommerce Store ',
              isAvailable: true,
            },
          ],
        },
        {
          id: 2,
          name: 'Business king',
          description: 'For Enterprise business',
          priceWithUnit: '$25',
          buttonText: 'Create account',
          anotherOption: 'Or Start 10 Days trail',
          points: [
            {
              id: 1,
              icon: <IoIosCheckmarkCircle />,
              text: 'eCommerce Store',
              isAvailable: true,
            },
            {
              id: 2,
              icon: <IoIosCheckmarkCircle />,
              text: 'Blog Support Tools',
              isAvailable: true,
            },
            {
              id: 3,
              icon: <IoIosCheckmarkCircle />,
              text: "1,000's of Templates",
              isAvailable: true,
            },
            {
              id: 4,
              icon: <IoIosCheckmarkCircle />,
              text: 'Drag & Drop Builder ',
              isAvailable: true,
            },
          ],
        },
        {
          id: 3,
          header: 'Suggested',
          headerIcon: <IoIosCheckmarkCircle />,
          name: 'Pro Master',
          description: 'For pro level developers',
          priceWithUnit: '$39',
          buttonText: 'Create account',
          anotherOption: 'Or Start 10 Days trail',
          points: [
            {
              id: 1,
              icon: <IoIosCheckmarkCircle />,
              text: 'eCommerce Store',
              isAvailable: true,
            },
            {
              id: 2,
              icon: <IoIosCheckmarkCircle />,
              text: 'Blog Support Tools',
              isAvailable: true,
            },
            {
              id: 3,
              icon: <IoIosCheckmarkCircle />,
              text: "1,000's of Templates",
              isAvailable: true,
            },
            {
              id: 4,
              icon: <IoIosCheckmarkCircle />,
              text: 'Drag & Drop Builder ',
              isAvailable: true,
            },
          ],
        },
      ],
    }


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
                                <img width="100%" height="630px" src={photo.url} alt="" key={photo.name}/>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        )
    }
}

export default Slide;