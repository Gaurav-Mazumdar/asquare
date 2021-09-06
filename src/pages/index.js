import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import Slide from '../sections/slider';
import KeyFeature from '../sections/key-feature';
import CompFeature from '../sections/comp-brief';
import TeamSection from '../sections/team-section';
import EcomPlus from 'sections/ecom-plus';
import EcomNeg from 'sections/ecom-neg';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Asquare Enterprises" />
          <Slide/>
          <KeyFeature />
          <CompFeature/>
          <EcomPlus />
          <TeamSection />
        </Layout>
    </ThemeProvider>
  );
}
