/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import ServiceFeature from 'components/service-feature';
import Image from 'components/image';
import { IoIosCheckmarkCircle } from 'react-icons/io';

import ProfitThumb from 'assets/services/business-profit.png';
import DrawingArrow from 'assets/drawing-arrow.svg';

const data = {
  title:
    'The Backbone Of The E-Commerce Business',
  description:
    'Account management is the backbone of the e-commerce business, and however amazing and user-friendly a product is, it can only thrive if you sell it right on the online storefront.',
  btnName: 'Explore Details',
  btnURL: '#',
  points: [
    {
      icon: <IoIosCheckmarkCircle />,
      text: 'Creation and maintenance of a well-organized database',
      location: '/services/account-launch'
    },
    {
      icon: <IoIosCheckmarkCircle />,
      text: 'Everyday account operations for urgent needs',
      location: '/services/listing-cataloging'
    },
    {
      icon: <IoIosCheckmarkCircle />,
      text: 'Surpassing marketplace performance targets',
      location: '/services/suspension'
    },
    {
      icon: <IoIosCheckmarkCircle />,
      text: 'Round the clock support and consultation',
      location: '/services/account-management'
    },
    {
      icon: <IoIosCheckmarkCircle />,
      text: 'Quick resolution of returns and claims',
      location: '/services/account-reconciliation'
    },
  ],
};

export default function EcomNeg() {
  return (
    <section sx={{ variant: 'section.midHome' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <ServiceFeature
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
            points={data.points}
            location={data.points.location}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={ProfitThumb} alt="Thumbnail" width="700" height="565" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['flex-Start', null, null, 'space-between'],
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, null, null, null, null, null, null, 8],
  },
  thumbnail: {
    pr: [2, null, 7, 4, 7, 8, null, 10],
    pl: [0, null, 7, 0],
    display: 'flex',
    order: [2, null, null, 0],
    mx: ['auto', 0],
    img: {
      ml: [0, null, null, -3],
      height: [265, 'auto'],
    },
  },
  contentBox: {
    flexShrink: 0,
    textAlign: ['center', null, null, 'left'],
    width: ['100%', null, null, 350, 400, '470px'],
    pb: [7, null, null, 0],
    '.btn__link': {
      mt: [4, null, 5],
    },
  },
  bottomArrow: {
    position: 'absolute',
    bottom: -185,
    left: '33%',
    display: ['none', null, null, null, null, null, null, 'block'],
  },
};
