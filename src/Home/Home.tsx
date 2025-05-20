import StockBackground from '/stock-background.jpg'

function Home() {
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
          Venue Name
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
        {/* Synopsis Section */}
        <div className='
          flex
          flex-col
          gap-6
          items-center
          mb-8
        '>
          <h2 className='
            text-2xl
            font-semibold
            text-gray-800
            mb-4
          '>
            Synopsis
          </h2>
          <p className='
            text-center
            text-gray-600
            text-lg
            leading-relaxed
            mb-6
          '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className='
            flex
          '>
            <img 
              src={StockBackground} 
              className='
                object-cover
                w-1/4
                flex-grow
                rounded-lg
                shadow-2xl
                -mr-4
                -mb-4
              '
            />
            <img 
              src={StockBackground} 
              className='
                object-cover
                w-1/4
                flex-grow
                rounded-lg
                shadow-2xl
                -mt-4
              '
            />
          </div>
        </div>

        {/* Hours Section */}
        <div className='
          flex
          flex-col
          items-center
          mb-8
        '>
          <h2 className='
            text-2xl
            font-semibold
            text-gray-800
            mb-4
          '>
            Hours
          </h2>
          <div className='
            grid
            grid-cols-2
            gap-x-4
            gap-y-4
            text-gray-600
            text-md
            lg:text-lg
            leading-relaxed
            w-full
            max-w-md
          '>
            <div className='font-medium text-gray-800 text-right'>Monday:</div>
            <div>9:00 AM - 9:00 PM</div>
            <div className='font-medium text-gray-800 text-right'>Tuesday:</div>
            <div>9:00 AM - 9:00 PM</div>
            <div className='font-medium text-gray-800 text-right'>Wednesday:</div>
            <div>9:00 AM - 9:00 PM</div>
            <div className='font-medium text-gray-800 text-right'>Thursday:</div>
            <div>9:00 AM - 9:00 PM</div>
            <div className='font-medium text-gray-800 text-right'>Friday:</div>
            <div>9:00 AM - 9:00 PM</div>
            <div className='font-medium text-gray-800 text-right'>Saturday:</div>
            <div>10:00 AM - 10:00 PM</div>
            <div className='font-medium text-gray-800 text-right'>Sunday:</div>
            <div>Closed</div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className='
          flex
          flex-col
          items-center
        '>
          <h2 className='
            text-2xl
            font-semibold
            text-gray-800
            mb-4
          '>
            Reviews
          </h2>
          <div className='
            flex
            flex-col
            gap-4
            text-gray-600
            text-lg
            leading-relaxed
          '>
            <div className='
              bg-gray-100
              p-4
              rounded-lg
              shadow-sm
            '>
              <p>"The food was absolutely amazing! The ambiance was perfect for a family dinner."</p>
              <span className='
                text-sm
                text-gray-500
              '>– John Doe</span>
            </div>
            <div className='
              bg-gray-100
              p-4
              rounded-lg
              shadow-sm
            '>
              <p>"Great service and delicious dishes. Highly recommend the chef's special!"</p>
              <span className='
                text-sm
                text-gray-500
              '>– Jane Smith</span>
            </div>
            <div className='
              bg-gray-100
              p-4
              rounded-lg
              shadow-sm
            '>
              <p>"A wonderful experience overall. Will definitely come back again."</p>
              <span className='
                text-sm
                text-gray-500
              '>– Alex Johnson</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
