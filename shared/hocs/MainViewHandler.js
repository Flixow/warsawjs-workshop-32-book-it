import React, { Component } from 'react';
import { Loader } from 'semantic-ui-react';
import { isEqual } from 'lodash';

import { LOADING_STATES } from 'data/constants';

function MainViewHandlerHOC(options = {}) {
  return function HOC(WrappedComponent) {
    return class extends Component {
      static async getInitialProps({ ctx }) {
        const { query, store, isServer } = ctx;
        const prevQuery = isServer ? {} : window.__NEXT_DATA__.query;
        const hasQueryChanged = !isEqual(query, prevQuery);

        if (hasQueryChanged && !isServer) {
          window.__NEXT_DATA__.query = query;

          if (typeof options.fetchData === 'function') {
            store.dispatch({ type: options.fetchData, params: query });
          }
        }

        return {};
      }

      render() {
        const { state } = this.props;

        return <WrappedComponent {...this.props} />;

        switch (state) {
          case LOADING_STATES.LOADING:
            return <Loader />;
          case LOADING_STATES.LOADED:
            return <WrappedComponent {...this.props} />;
          case LOADING_STATES.FAILED:
            return (
              <h1>
                Ups, something went wrong
              </h1>
            );
          default:
            return null;
        }
      }
    };
  };
}

export default MainViewHandlerHOC;
