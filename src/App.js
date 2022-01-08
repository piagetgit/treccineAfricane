import { Route, Switch } from 'react-router-dom';

import AllBraidPage from './pages/AllBraids';
//import FavoritesPage from './pages/Favorites';
import LatestBraids from './pages/LatestBraids';
//import MainNavigation from './components/layout/MainNavigation'
import Layout from './components/layout/Layout';
import Details from './pages/Details';
import { DetailsContext } from './store/DetailsContext';
import { useState } from 'react';

function App() {
  const [braid, setBraid] = useState('hello');

  return (
    <Layout>
      <Switch>
        <DetailsContext.Provider value={{ braid, setBraid }}>
          <Route path='/' exact>
            <AllBraidPage />
          </Route>

          <Route path='/latest-braids'>
            <LatestBraids />
          </Route>


          <Route path='/details'>
            <Details />
          </Route>
        </DetailsContext.Provider>


      </Switch>
    </Layout>);
}


export default App;
