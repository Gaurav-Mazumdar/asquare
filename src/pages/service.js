import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Banner from '../sections/banner';
import SEO from 'components/seo';
import Layout from 'components/layout';
import ServiceSub from 'sections/service-sub';

export default function AboutPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Asquare Enterprises" />
          <ServiceSub/>
        </Layout>
    </ThemeProvider>
  );
}
