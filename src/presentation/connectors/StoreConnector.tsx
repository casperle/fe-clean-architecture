import React, { createContext, useEffect, useState } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { getStore } from '../../services/store/StoreService';

export enum STORE_TYPE {
  REDUX = 'redux',
  CONTEXT = 'context',
}

type StoreConnectorContextValue = {
  storeType: string | null;
};

type StoreConnectorProps = {
  storeType: STORE_TYPE;
  children: JSX.Element;
};

const StoreContext = createContext<StoreConnectorContextValue>({
  storeType: null,
});

export const StoreConnector: React.FC<StoreConnectorProps> = ({
  storeType = STORE_TYPE.REDUX,
  children,
}) => {
  const [appStoreType, setAppStoreType] = useState(storeType);

  useEffect(() => {
    setAppStoreType(storeType);
  }, [storeType]);

  let content = null;

  switch (appStoreType) {
    case STORE_TYPE.REDUX:
      content = <ReduxProvider store={getStore()}>{children}</ReduxProvider>;
      break;

    default:
      throw new Error(`Invalid store type selected "${appStoreType}"`);
  }

  return (
    <StoreContext.Provider value={{ storeType: appStoreType }}>
      {content}
    </StoreContext.Provider>
  );
};
