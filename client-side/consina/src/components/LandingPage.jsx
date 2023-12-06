import React from "react";
import image from "./backgroundImage.jpg"
import Navbar from "./Navbar"
import Footer from "./Footer";
import Carosel from "./Carousel";
const LandingPage = () => {

    return(
       <section>

<section>
    <Carosel />
       </section>
        
<section className="aspect-[4/1] overflow-hidden bg-[url(https://a.ipricegroup.com/media/Angga/kyt_logo.jpg)] bg-cover bg-center bg-no-repeat">
</section>
<Footer />
       </section>
    )
}
export default LandingPage;
