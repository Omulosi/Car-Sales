import React from 'react';
import  {Provider} from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="boxes">
        <div className="box">
          <Header />
          <AddedFeatures />
        </div>
        <div className="box">
          <AdditionalFeatures  />
          <Total />
        </div>
      </div>
    </Provider>
  );
};

export default App;
