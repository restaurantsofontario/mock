import StockBackground from '/stock-background.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

function Contact() {

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
          Contact Us
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
        md:p-16
      '>
        {/* Contact Details */}
        <div className='
          flex
          md:flex-row
          flex-col
          gap-4
          w-full
          justify-center
          md:gap-24
          gap-16
          text-2xl
          text-gray-800
        '>
          <div className='
            flex
            flex-row
            justify-center
            gap-4
          '>
            <FontAwesomeIcon icon={faPhone} /><a href="tel:+1234567890" className='underline hover:text-blue-500'>+1 (234) 567-890</a>
          </div>
          <div className='
            flex
            flex-row
            justify-center
            gap-4
          '>
            <FontAwesomeIcon icon={faEnvelope} /><a href="mailto:example@example.com" className='underline hover:text-blue-500'>example@example.com</a>
          </div>
        </div>
        {/* Location */}
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
    </>
  )
}

export default Contact
