import React, { Component } from 'react';
import { Spin } from 'antd';
import { isEqual } from 'lodash';

import { LOADING_STATES } from 'data/constants';

function MainViewHandlerHOC(options = {}) {
  return function HOC(WrappedComponent) {
    return class extends Component {
      static async getInitialProps(ctx) {
        const pageProps = WrappedComponent.getInitialProps
          ? await WrappedComponent.getInitialProps(ctx)
          : {};
        const { query, store, isServer } = ctx;
        const prevQuery = isServer ? {} : window.__NEXT_DATA__.query;
        const hasQueryChanged = !isEqual(query, prevQuery);

        if (hasQueryChanged && !isServer) {
          window.__NEXT_DATA__.query = query;
        }
        if (typeof options.fetchData === 'function') {
          isServer
            ? await store.dispatch(options.fetchData({ query }))
            : store.dispatch(options.fetchData({ query }));
        }

        console.log('TCL: extends -> getInitialProps -> query', query);
        return { ...pageProps };
      }

      render() {
        const { state } = this.props;

        // return <WrappedComponent {...this.props} />;

        switch (state) {
          case LOADING_STATES.LOADING:
            return <Spin size="large" />;
          case LOADING_STATES.LOADED:
            return <WrappedComponent {...this.props} />;
          case LOADING_STATES.FAILED:
          default:
            return (
              <h1>
                Ups, something went wrong
              </h1>
            );
        }
      }
    };
  };
}

export default MainViewHandlerHOC;
