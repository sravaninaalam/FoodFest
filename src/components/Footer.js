import {useOnline} from '../utils/customhooks'
const Footer = () => {
  
  return (
   <>
  
    <div className='bg-gray-100 md:justify-between flex flex-wrap '>
        <div className='mx-5 md:my-0 my-5'>
              <h3 className='font-medium' >Contact Us</h3>
              <ul className='text-slate-700'>
                <li>
                  Customer support
                </li>
                <li>Email</li>
                <li>Phone Number</li>
                <li>FAQ</li>
              </ul>
          </div>
          <div className='mx-5  md:my-0 my-5'>
              <h3 className='font-medium'>About</h3>
              <ul className='text-slate-700'>
                <li>
                  Mission and Vision
                </li>
                <li>our Story</li>
                <li>Teamr</li>
               
              </ul>
          </div>
        <div  className='mx-5  md:my-0 my-5'>
           <h3 className='font-medium'>Ordering</h3>
           <ul className='text-slate-700'>
              <li>How it works</li>
              <li>Delivery zones</li>
              <li>Payment methods</li>
              <li>Refund Policy</li>
           </ul>
        </div>
        <div  className='mx-5  md:my-0 my-5'>
          <h3 className='font-medium'>Legal</h3>
          <ul className='text-slate-700'>
             <li>Terms of service</li>
             <li>Privacy Policy</li>
             <li>Cookies</li>
          </ul>
        </div>
        <div  className='mx-5  md:my-0 my-5'>
          <h3 className='font-medium'>Download Our App</h3>
          <ul className='text-slate-700'>
            <li>Link to App store</li>
            <li>Link to Play store</li>
          </ul>
        </div>
        <div className='mx-5  md:my-0 my-5'>
            <h3 className='font-medium'>Partnerships</h3>
            <ul className='text-slate-700'>
                <li>Become partner</li>
                <li>Restaurant signup</li>
                <li>Driver Oppertunities</li>
            </ul>
        </div>
    </div>
   </>
  )
}

export default Footer
