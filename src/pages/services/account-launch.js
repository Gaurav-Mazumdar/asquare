import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import AccountManagement from 'sections/accmgmt';

export default function AccountLaunch() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Asquare Enterprises" />
          <AccountManagement/>
        </Layout>
    </ThemeProvider>
  );
}
