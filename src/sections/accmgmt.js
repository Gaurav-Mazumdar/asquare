/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Service from 'components/cards/service';
import Amazon from '../assets/pricing/amazon_logo.png';
import Flipkart from '../assets/pricing/flipkart_logo.png';
import Paytm from '../assets/pricing/paytm_logo.png';

const services = [
  {
    logo: Amazon,
    title: 'Amazon',
    desc: 'We provides the best Seller Reinstatement Service in India. Get your business booming with the Best E-commerce service provider in India.',
    price: 4000,
  },
  {
    logo: Flipkart,
    title: 'Flipkart',
    desc: 'We provides the best Seller Reinstatement Service in India. Get your business booming with the Best E-commerce service provider in India.',
    price: 4000,
  },
  {
    title: 'Meesho',
    desc: 'We provides the best Seller Reinstatement Service in India. Get your business booming with the Best E-commerce service provider in India.',
    price: 3500,
  },
  {
    title: 'Myntra',
    desc: 'We provides the best Seller Reinstatement Service in India. Get your business booming with the Best E-commerce service provider in India.',
    price: 5000,
  },
  {
    title: 'Ajio',
    desc: 'We provides the best Seller Reinstatement Service in India. Get your business booming with the Best E-commerce service provider in India.',
    price: 5000,
  },
  {
    logo: Paytm,
    title: 'Paytm',
    desc: 'We provides the best Seller Reinstatement Service in India. Get your business booming with the Best E-commerce service provider in India.',
    price: 3500,
  },
  {
    title: 'BigBasket',
    desc: 'We provides the best Seller Reinstatement Service in India. Get your business booming with the Best E-commerce service provider in India.',
    price: 5000,
  },
  {
    title: 'Shopsy',
    desc: 'We provides the best Seller Reinstatement Service in India. Get your business booming with the Best E-commerce service provider in India.',
    price: 3500,
  },
  {
    title: 'Grofers',
    desc: 'We provides the best Seller Reinstatement Service in India. Get your business booming with the Best E-commerce service provider in India.',
    price: 3500,
  },
];

const AccountManagement = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <Box sx={styles.grid}>
          {services.map((service, i) => (
            <Service key={i} service={service} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default AccountManagement;

const styles = {
  section: {
    pt: [8, null, null, null, 10, '150px'],
    pb: [12, null, null, null, null, 15],
  },
  grid: {
    gap: [3, null, null, 4],
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: [
      'repeat(2, 1fr)',
      null,
      null,
      'repeat(3, 1fr)',
      null,
      'repeat(4, 1fr)',
      'repeat(4, 300px)',
    ],
  },
};
