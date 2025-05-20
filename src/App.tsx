import { useState } from 'react'
import Home from './Home/Home'
import Header from './Header/Header';

function App() {
  const [activeTab, setActiveTab] = useState('home')
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
          <Header/>

          {/* tabs */}
          {activeTab === 'home' ? <Home/> : ''}
        </div>
      </div>
    </>
  )
}

export default App
