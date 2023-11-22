import "../css/Index.css"

function Home123(){
    return(
        <>
        <header>

        <div className='container '>
          <div className='part-1 d-flex justify-content-between align-items-center'>
            <h3 className='text-white'>Booking.com</h3>
            <div className='part-1a '>
                <ul className='d-xl-flex d-md-flex d-none list-unstyled'>

                    <li className=' mx-1 p-2'><a href='#' className='text-decoration-none text-white   fw-bold'>INR</a></li>

                    <li className=' mx-1 p-2 '><a href='#' className='text-decoration-none'><img src='https://t-cf.bstatic.com/design-assets/assets/v3.96.0/images-flags/In@3x.png' height='30px' className='rounded-5'></img></a></li>

                    <li className=' mx-1 p-2'><a href='#' className='text-decoration-none text-white rounded-5 '><i class="fa-solid fa-question rounded-5 border border-white bar text-center lh-"></i></a></li>

                    <li className=' mx-1 p-2'><a href='#' className='text-decoration-none text-white fw-bold fs-5'>List Your Property</a></li>

                    <li className=' mx-1 p-2'><a href='#' className='text-decoration-none bg-white px-2 py-1 fw-bold'>Ragister</a></li>

                    <li className=' mx-1 p-2 '><a href='#' className='text-decoration-none bg-white px-2 py-1 fw-bold'>Sign in</a></li>
                </ul>
            </div>
          </div>
          <div className='part-2 '>
               <ul className='list-unstyled m-0 d-sm-flex   '>
                <li className='list-stayle-none  p-2 mx-2'><a href='' className='text-decoration-none text-white  '><i class="fa-solid fa-bed"></i> &nbsp; Stays</a></li>
                <li className='list-stayle-none  p-2 mx-2'><a href='' className='text-decoration-none text-white  '> <i class="fa-solid fa-plane-circle-check"></i>   &nbsp; Flights</a></li>
                <li className='list-stayle-none  p-2 mx-2'><a href='' className='text-decoration-none text-white  '>  <i class="fa-solid fa-plane-lock"></i>   &nbsp;  Flight + Hotel</a></li>
                <li className='list-stayle-none  p-2 mx-2'><a href='' className='text-decoration-none text-white  '> <i class="fa-solid fa-car"></i>  &nbsp;  Car rentals</a></li>
                <li className='list-stayle-none  p-2 mx-2'><a href='' className='text-decoration-none text-white  '> <i class="fa-solid fa-magnet"></i>  &nbsp; Attraction</a></li>
                <li className='list-stayle-none  p-2 mx-2'><a href='' className='text-decoration-none text-white  '> <i class="fa-solid fa-taxi"></i>  &nbsp;  Airports taxis</a></li>

               </ul>
          </div>
        </div>

        <div className="img">
            <div className="container p-5">
                <h1 className="text-white p-3 fw-bold">Howzat for a perfect stay</h1>
                <p className="p2 text-white p-3 fs-4">Search hotels, homes and much more Discover more</p>
                <button className=" p3 border-none p-3 btn text-white px-3 py-2">Discover more</button>
            </div>
            <div>
                
            <div className='footbar row text-black position-absolute w-100  justify-content-center   '>
                                        <div className='border col-xl-3 col-lg-3 border-3 bg-white p-0 border-warning'>
                                                <input type="text" className='p-2 border-0' placeholder='Where are you doing?'/>
                                        </div>
                                        <div className='border border-3 col-xl-3 col-lg-3 bg-white border-warning p-2'>
                                                <i class="fa fa-calendar" aria-hidden="true"></i> Check-in Date -- Check-out Date
                                        </div>
                                        <div className='border border-3 col-xl-3 col-lg-3 bg-white border-warning p-2'>
                                                <i class="fa fa-user-o" aria-hidden="true"></i> 2 adults &#46; 0 children &#46; 1 room
                                        </div>
                                        <div className='border border-3 col-xl-1 col-lg-1 p-0 border-warning btn-1 '>
                                                <button className='btn rounded fs-5 text-white text-center search w-100 h-100'>Search</button>
                                        </div>
                                </div>
            </div>





        </div>
        








  </header>



     
        </>
    )
}
export default Home123;