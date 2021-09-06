/** @jsx jsx */
import { jsx} from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionParagraph from '../components/sec-paragraph';

export default function CompFeature() {
  return (
   <section id="partners" sx={{variant: 'section.keyFeature'}}>
     <Container>
       <SectionParagraph
        slogan="Who we are"
        title="ASQUARE  Services is India’s premier Digital Marketing Company in India, we aspire to be your Digital Marketing Partner to help you in HIKE. We are persistent and consistent in helping organizations grow.
        We understand the technology and how it can help us deliver growth to our clients. We are doggedly focused on Return on Investment focus for our clients. We are a seasoned team of digital marketing consultants and technology professional. We use consumer, product & market insights to develop Digital Brand Strategy and ensure that you are always ahead of your competition. We believe that is what makes us one of the top digital marketing companies in India.
        Our team is a good mix of digital marketing professionals and tech professionals who have been in this industry for over a decade. We have experience of working across Startups, SME, MSMEs and Enterprise Clients. ASQUARE Strategy has worked across consumer and B2B segments and diverse industries like, apparel, FMCG, ITeS, Consumer Durable, etc. 
        What sets us apart from OTHER digital marketing agencies is our ability to start with WHY? We start from the reason why clients want to go in for Digital Marketing Services, its relevance in the specific product, category, and industry, industry competitiveness, how different competitors are positioned in the Digital landscape and discovering the low lying opportunity basis benchmarking of the best practices.
        We are Result driven and measure each step of the execution using the latest tools and analytics in the industry. This helps us set clients up for higher than average growth rates.
        That’s what makes us one of the Best Digital Marketing company in India
        "
       />
     </Container>
   </section>
  );
}