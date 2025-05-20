import StockBackground from '/stock-background.jpg'
import StockMenu from '/stock-menu.webp'

function Menu() {

  return (
    <>
      {/* title card */}
      <div className='
        flex
        flex-col
        justify-center
        items-center
        min-h-[200px]

      '>
        <h1 className='
          text-4xl
          font-semibold
          tracking-tight
          text-balance
          text-gray-900
          sm:text-7xl
        '>
          Our Menu
        </h1>
      </div>
      {/* Content */}
      <div className='
        flex
        flex-col
        flex-grow
        gap-16
        bg-white/70
        lg:rounded-t-3xl
        p-8
        lg:p-16
      '>
        {/* Featured Section */}
        <div className='
          flex
          flex-col
          items-center
          gap-6
        '>
          <h2 className='
            text-4xl
            font-semibold
            text-gray-800
            text-nowrap
          '>
            Featured Items
          </h2>
          <div className='
            flex
            flex-col
            md:flex-row
            gap-4
          '>
            <h3 className='
              text-3xl
              font-semibold
              text-gray-800
              text-nowrap
            '>
              ▼ Featured
            </h3>
            <p className='
              text-gray-600
              text-lg
              leading-relaxed
            '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className='
            flex
            gap-4
            my-70
          '>
            <img 
              src={StockBackground} 
              className='
                object-cover
                w-1/4
                h-80
                flex-grow
                rounded-lg
                shadow-2xl
                -mt-70
                -mr-[90%]
              '
            />
            <img 
              src={StockBackground} 
              className='
                object-cover
                w-1/4
                h-80
                flex-grow
                rounded-lg
                shadow-2xl
                -mb-70
              '
            />
          </div>
          <div className='
            flex
            gap-4
            flex-col-reverse
            md:flex-row
          '>
            <p className='
              text-gray-600
              text-lg
              leading-relaxed
              text-right
            '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3 className='
              text-3xl
              font-semibold
              text-gray-800
              text-nowrap
              text-right
            '>
              Featured ▲
            </h3>
          </div>
        </div>

        {/* Reviews Section */}
        <div className='
          flex
          flex-col
          items-center
          gap-8
        '>
          <h2 className='
            text-4xl
            font-semibold
            text-gray-800
            text-nowrap
          '>
            Full Menu
          </h2>
          <img src={StockMenu}/>
        </div>
      </div>
    </>
  )
}

export default Menu
