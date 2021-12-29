import arrow from '../images/arrow.png';
import banner from '../images/banner.gif';


const Banner =()=>{
    return(
        
        <section className="main-banner-section text-white">
            <div className="container">
                <div className="d-flex">
                    <div className="left-side aside-banner">
                        <div className="banner-content">
                            <span className="banner-sub-heading">THE TECH ZONE</span>
                            <h1 className="main-heading-banner">Best Website Designing & Development Team</h1>
                            <a href="#" className="common-button btn mt-4">More Information  <img className="arrow-image" src = {arrow} alt="" /> </a>
                            <div className="round"></div>
                        </div>
                        <div className="overlay-button">
                            <a href="#" class="view-button-banner circle link-unstyled">View</a>
                        </div>
                    </div>
                    <div className='right-side aside-banner'>
                        <div className="main-banner-image">
                            <img className="w-100" src = {banner} alt="" /> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
         
    )
}

export default Banner;


// git add .
// git commit -m ""
// git push origin master