import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Banner from '../sections/banner';
import SEO from 'components/seo';
import Layout from 'components/layout';
import CoreFeature from 'sections/core-feature';

export default function AboutPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Asquare Enterprises" />
          <CoreFeature />
        </Layout>
    </ThemeProvider>
  );
}
