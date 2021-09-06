/** @jsx jsx */
import { jsx} from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Amazon from 'assets/key-feature/amazon.svg';
import Flipkart from 'assets/key-feature/flipkart.svg';
import Meesho from 'assets/key-feature/meesho.svg';
import Ajio from 'assets/key-feature/ajio.svg';
import Snapdeal from 'assets/key-feature/snapdeal.svg';
import Myntra from 'assets/key-feature/myntra.svg';
import Bigbasket from 'assets/key-feature/bigbasket.svg';
import Paytm from 'assets/key-feature/paytm.svg';

const data = [
  {
    id: 1,
    imgSrc: Amazon,
    altText: 'Amazon',
    title: '',
    text:
      '',
  },
  {
    id: 2,
    imgSrc: Flipkart,
    altText: 'Flipkart',
    title: '',
    text:
      '',
  },
  {
    id: 3,
    imgSrc: Meesho,
    altText: 'Meesho',
    title: '',
    text:
      '',
  },
  {
    id: 4,
    imgSrc: Ajio,
    altText: 'Customer Support',
    title: '',
    text:
      '',
  },
  {
    id: 5,
    imgSrc: Snapdeal,
    altText: 'Customer Support',
    title: '',
    text:
      '',
  },
  {
    id: 6,
    imgSrc: Myntra,
    altText: 'Customer Support',
    title: '',
    text:
      '',
  },
  {
    id: 7,
    imgSrc: Bigbasket,
    altText: 'Bigbasket',
    title: '',
    text:
      '',
  },
  {
    id: 8,
    imgSrc: Paytm,
    altText: 'Paytm',
    title: '',
    text:
      '',
  },
];

export default function KeyFeature() {
  return (
   <section id="partners" sx={{variant: 'section.keyFeature'}}>
     <Container>
       <SectionHeader
        slogan="Who we are"
        title="We are the authorized support team of some top most online selling platforms. We work as a seller support team"
       />
       <Grid sx={styles.grid}>
         {data.map((item)=>(
           <FeatureCardColumn
            key={item.id}
            src={item.imgSrc}
            alt={item.altText}
            title={item.title}
            text={item.text}
           />
         ))}
       </Grid>
     </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '10px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
