function Footer() {

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
        <button type='button' className='
          inline-flex
          items-center
          justify-center
          rounded-md
          p-2.5
          mr-auto
        '>Contact Us</button>
        <button type='button' className='
          inline-flex
          items-center
          justify-center
          rounded-md
          p-2.5
        '>Like this site?</button>
      </div>
    </>
  )
}

export default Footer