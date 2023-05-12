import Header from '../components/Header/Header';
import Hello from '../components/Hello/Hello';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';


const MainLayout = () => {

    return (
        <>
        <Header />
        <Hello />
        <About />
        <Portfolio />
        <Blog />
        <Contact />
        <Footer />
        </>
    )
}

export default MainLayout