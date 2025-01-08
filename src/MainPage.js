import './MainPage.css';

/* Páginas */

import Intro from './Pages/Intro';
import Planos from './Pages/Planos';
import Sobre from './Pages/Sobre';
import Footer from './Pages/Footer';

function MainPage() {
  return (
    <div className="MainPage">
        <Intro/>
        <Planos/>
        <Sobre/>
        <Footer/>
    </div>
  );
}

export default MainPage;
