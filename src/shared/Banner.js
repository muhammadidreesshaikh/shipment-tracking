import React from 'react';
import '../assets/css/banner.css';

function Banner(props) {
    return(
        <section>
            {/* interpolation - for image url get  */}
            <div className="mini-slider" style={{ backgroundImage: `url(${props.data.image})` }}>
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-md-12 col-lg-12">
                            <h1>{props.data.heading}</h1>

                            <div className="seprator mt-3"></div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner;