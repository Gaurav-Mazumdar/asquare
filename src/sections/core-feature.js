import React, { useState } from 'react';
/** @jsx jsx */
import { jsx, Container, Box, Image, Button } from 'theme-ui';
import TextFeature from 'components/text-feature';
import ServiceThumb from 'assets/service-thumb.png';
import FeatureThumb from 'assets/core-feature.jpg';
import ModalVideo from 'react-modal-video';
import { keyframes } from '@emotion/core';
import { IoIosPlay } from 'react-icons/io';

const data = {
  subTitle: 'About US',
  description:
    'Is what motivated folks at ASQUARE to create a unique portfolio of services that led to a brand identity for the Company. Knowledge is best used when it benefits someone in some way. We and our team possess in-depth knowledge and experience of digital marketing and marketing online. We use this knowledge to help small retailers and large companies get onto online retail marketplaces with our listing services and cataloging services.',
  btnName: 'Know more',
  btnURL: '#',
};

export default function CoreFeature() {
  const handleClick = (e) =>{
    e.preventDefault();
    setVideoOpen(true);
  }

  const [videoOpen, setVideoOpen] = useState(false);
  return (
   <section sx={{variant: 'section.coreFeature'}} id="about">
    <Container sx={styles.containerBox}>
      <Box sx={styles.contentBox}>
        <TextFeature 
          subTitle={data.subTitle}
          description={data.description}
          btnName={data.btnName}
          btnURL={data.btnURL}
        />
      </Box>
      <Box sx={styles.thumbnail}>
          <Image src={ServiceThumb} alt="thumbnail"/>
          <Button
            sx={styles.videoBtn}
            aria-label="Play button"
            onClick={handleClick}
          >
            <span>
              <IoIosPlay/>
            </span>
          </Button>
        </Box>
    </Container>
    <ModalVideo
        channel="youtube"
        isOpen={videoOpen}
        videoId="j_SFubzPX9s"
        onClose={()=> setVideoOpen(false)}
      />
   </section>
  );
}

const playPluse = keyframes`
  from {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  to {
	transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    mt: ['auto', null, null, null, 8],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  videoBtn: {
    zIndex: 2,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: ['60px', null, '80px', null, '100px'],
    height: ['60px', null, '80px', null, '100px'],
    p: '0px !important',
    backgroundColor: 'transparent',
    '&::before': {
      position: 'absolute',
      content: '""',
      left: '50%',
      top: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      display: 'block',
      width: ['60px', null, '80px', null, '100px'],
      height: ['60px', null, '80px', null, '100px'],
      backgroundColor: 'primary',
      borderRadius: '50%',
      animation: `${playPluse} 1.5s ease-out infinite`,
      opacity: 0.5,
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
};
