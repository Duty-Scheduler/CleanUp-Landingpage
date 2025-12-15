import { Header, Footer, Hero, HowItWorks, ReadyToOrganize } from './components';
import {ProjectContext} from './components/sections/ProjectContext';
import {MVPFocus} from './components/sections/MVPFocus';
import {DesignResources} from './components/sections/DesignResources';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProjectContext/>
        <MVPFocus/>
        <HowItWorks />
        <DesignResources/>
        <ReadyToOrganize />
      </main>
      <Footer />
    </div>
  );
}

export default App;
