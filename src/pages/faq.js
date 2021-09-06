import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import FAQ from '../sections/faq';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Asquare Enterprises" />
          <FAQ/>
        </Layout>
    </ThemeProvider>
  );
}
