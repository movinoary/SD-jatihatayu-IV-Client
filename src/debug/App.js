import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AOS from 'aos'
import PageDashboard from '../pages/dashboard/dashboard';
import { PageBeranda, PageMasuk, PageVideo, RouterBerita, RouterProfil } from '../pages/beranda'
import { Nav } from '../components';

// css
import 'aos/dist/aos.css'
import '../style/App.css'
import '../style/button.css'
import '../style/form.css'
import '../style/pages.css'

AOS.init();
 
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Nav />
          <PageBeranda />
        </Route>
        <Route path='/profil'>
          <Nav />
          <RouterProfil />
        </Route>
        <Route path='/video'>
          <Nav />
          <PageVideo />
        </Route>
        <Route path='/Berita'>
          <Nav />
          <RouterBerita />
        </Route>
        <Route path='/masuk'>
          <Nav />
          <PageMasuk />
        </Route>
        <Route path='/dashboard'>
          <PageDashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
