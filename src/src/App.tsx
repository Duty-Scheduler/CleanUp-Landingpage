import { Header, Footer, Hero, HowItWorks, ReadyToOrganize } from './components';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <ReadyToOrganize />
      </main>
      <Footer />
    </div>
  );
}

export default App;
