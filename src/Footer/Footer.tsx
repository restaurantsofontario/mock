type headerProps = { setActiveTab : (tab : any) => void }

function Footer({setActiveTab}: headerProps) {

  return (
    <>
      <div className='
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
      '>
        <button type='button' onClick={() => {setActiveTab('Contact')}} className='
          inline-flex
          items-center
          justify-center
          rounded-md
          p-2.5
          mr-auto
        '>Contact Us</button>
        <a type='button' target="_blank" href="https://awlanstranger.github.io/personal-website/" className='
          inline-flex
          items-center
          justify-center
          rounded-md
          p-2.5
        '>Like this site?</a>
      </div>
    </>
  )
}

export default Footer