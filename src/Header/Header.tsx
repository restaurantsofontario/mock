type headerProps = { setActiveTab : (tab : any) => void }

function Header({setActiveTab}: headerProps) {

  return (
    <>
      <nav className='
        mx-auto
        w-full
        flex
        items-center
        justify-center
        gap-4
        p-2
        lg:px-8
        text-sm/6 font-semibold
        text-cyan-500
        bg-white/80
        lg:rounded-b-3xl
      '>
        <button type='button' onClick={() => setActiveTab('Home')} className='
          inline-flex
          items-center
          justify-center
          rounded-md
          p-2.5
          mr-auto
        '>Logo</button>
        <button type='button' onClick={() => setActiveTab('Menu')} className='
          inline-flex
          items-center
          justify-center
          rounded-md
          p-2.5
        '>Menu</button>
        <button type='button' onClick={() => setActiveTab('About')} className='
          inline-flex
          items-center
          justify-center
          rounded-md
          p-2.5
        '>About</button>
        <button type='button' onClick={() => setActiveTab('Contact')} className='
          inline-flex
          items-center
          justify-center
          rounded-md
          p-2.5
        '>Contact Us</button>
      </nav>
    </>
  )
}

export default Header