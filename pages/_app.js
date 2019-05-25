import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import NProgress from 'nprogress';
import Router from 'next/router';
import { appWithTranslation } from 'i18n';

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

import configureStore from 'data/store';

import { Head, Nav } from 'shared/components';

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Head title="WarsawJS" />
          <Nav />

          <main>
            <Component {...pageProps} />
          </main>
        </Provider>
      </Container>
    );
  }
}

MyApp = appWithTranslation(MyApp);

export default withRedux(configureStore)(MyApp);
