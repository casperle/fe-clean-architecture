import './presentation/assets/index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './presentation/App';
import { ApiConnector } from './presentation/connectors/ApiConnector';
import {
  StoreConnector,
  STORE_TYPE,
} from './presentation/connectors/StoreConnector';

ReactDOM.render(
  <React.StrictMode>
    <ApiConnector>
      <StoreConnector storeType={STORE_TYPE.REDUX}>
        <App />
      </StoreConnector>
    </ApiConnector>
  </React.StrictMode>,
  document.getElementById('root')
);
