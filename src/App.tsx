import { useState } from 'react';
import Home from './Home/Home';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Menu from './Menu/Menu';

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <>
      <div className='
        min-h-screen
        flex
        justify-center
        bg-[url(/stock-background.jpg)]
        bg-fixed
      '>
        <div className='
          w-full
          max-w-[1024px]
          flex
          flex-col
        '>
          <Header setActiveTab={setActiveTab} />

          {/* Tabs with fade transition */}
          <div className="relative flex-grow">
            <div
              className={`
                ${activeTab === 'Home' ? 'opacity-100' : 'opacity-0'}
                transition-opacity duration-500 absolute inset-0
              `}
            >
              {activeTab === 'Home' && <Home />}
            </div>
            <div
              className={`
                ${activeTab === 'Menu' ? 'opacity-100' : 'opacity-0'}
                transition-opacity duration-500 absolute inset-0
              `}
            >
              {activeTab === 'Menu' && <Menu />}
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
