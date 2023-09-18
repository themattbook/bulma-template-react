// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { SectionContent } from './components/SectionContent';
import { ContactForm } from './components/ContactForm';

function App() {
    return (
        <>
            <Header />
            <Navigation />
            <SectionContent />
            <ContactForm />
        </>
    );
}

export default App;
