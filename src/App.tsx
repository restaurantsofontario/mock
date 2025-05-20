import { useState } from 'react'
import Home from './Home/Home'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Menu from './Menu/Menu';

function App() {
  const [activeTab, setActiveTab] = useState('Home')
  setActiveTab;

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
          <Header setActiveTab={setActiveTab}/>

          {/* tabs */}
          {activeTab === 'Home' ? <Home/> : ''}
          {activeTab === 'Menu' ? <Menu/> : ''}

          
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
