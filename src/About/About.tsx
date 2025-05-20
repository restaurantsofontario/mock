import StockBackground from '/stock-background.jpg'

function About() {

  return (
    <>
      {/* title card */}
      <div className='
        flex
        flex-col
        justify-center
        items-center
        min-h-[300px]
        lg:min-h-[500px]

      '>
        <h1 className='
          text-4xl
          font-semibold
          tracking-tight
          text-balance
          text-gray-900
          sm:text-7xl
        '>
          Our Story
        </h1>
        <p className='
          mt-8
          text-lg
          font-medium
          text-pretty
          text-gray-500
          sm:text-xl/8
          font-mono
        '>
          AUTHENTIC CUISINE FOOD SINCE 2022
        </p>
      </div>
      {/* Content */}
      <div className='
        flex
        flex-col
        flex-grow
        gap-4
        bg-white/70
        lg:rounded-t-3xl
        p-8
        lg:p-16
      '>
        <div className='
          flex
          flex-col
          gap-32
          py-8
          items-center
          w-full
          mb-8
        '>
          <div className='
            flex
            flex-col
            md:flex-row
            gap-4
          '>
            <div className='
              flex
              flex-col
              flex-grow
              md:w-1/4
              gap-4
            '>
              <h3 className='
                text-3xl
                font-semibold
                text-gray-800
                text-center
              '>
                Authentic Food in your Neighbourhood
              </h3>
              <p className='
                text-center
                text-gray-600
                text-lg
                leading-relaxed
                flex-grow
              '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <img 
              src={StockBackground} 
              className='
                object-cover
                rounded-lg
                shadow-2xl
                md:w-1/4
                flex-grow
              '
            />
          </div>

          <div className='
            flex
            flex-col-reverse
            md:flex-row
            gap-4
          '>
            <img 
              src={StockBackground} 
              className='
                object-cover
                rounded-lg
                shadow-2xl
                md:w-1/4
                flex-grow
              '
            />
            <div className='
              flex
              flex-col
              flex-grow
              md:w-1/4
              gap-4
            '>
              <h3 className='
                text-3xl
                font-semibold
                text-gray-800
                text-center
              '>
                Never less than Fresh off the Grill
              </h3>
              <p className='
                text-center
                text-gray-600
                text-lg
                leading-relaxed
                flex-grow
              '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className='
            flex
            flex-col
            gap-4
            w-full
          '>
            <h3 className='
              text-3xl
              font-semibold
              text-gray-800
              text-center
            '>
              Location
            </h3>
            <a target="_blank" href="https://maps.app.goo.gl/WuLe5M5fBTLkf4fk8">
              <img 
                src={StockBackground}
                className='
                  object-cover
                  rounded-lg
                  shadow-2xl
                  flex-grow
                  h-40
                  md:h-80
                  w-full
                '
              />
            </a>
            <p className='
              text-center
              text-gray-600
              text-lg
              leading-relaxed
              flex-grow
            '>
              Address
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
