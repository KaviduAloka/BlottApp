import React from 'react';
import {Provider} from 'react-redux';
import StackNavigation from './app/navigation/StackNavigation';
import {store} from './app/store/reducers';

const EntryPoint: React.FC = () => {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
};

export default EntryPoint;
