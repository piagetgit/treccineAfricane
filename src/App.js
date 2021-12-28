import { Route ,Switch}  from 'react-router-dom';

import AllBraidPage from './pages/AllBraids';
import FavoritesPage from './pages/Favorites';
import LatestBraids from './pages/LatestBraids';
//import MainNavigation from './components/layout/MainNavigation'
import Layout from './components/layout/Layout';



function App() {
  return ( 
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllBraidPage/>
        </Route>

        <Route path='/latest-braids'>
          <LatestBraids/>
        </Route>

        <Route path='/favorites'>
          <FavoritesPage/>
        </Route>
        </Switch>
     </Layout>);
}


export default App;
