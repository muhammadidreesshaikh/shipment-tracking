import React from 'react';
import Slider from '../shared/Slider';
import '../assets/css/home.css';

import card2 from '../assets/img/cards2.jpg'
import card8 from '../assets/img/cards8.jpg'
import card9 from '../assets/img/cards9.jpg'
import card10 from '../assets/img/cards10.jpg'
import slider1 from '../assets/img/slider1.jpg'
import card1 from '../assets/img/cards1.jpg'
import card3 from '../assets/img/cards3.jpg'
import card7 from '../assets/img/cards7.jpg'


class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Home");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <div>
                <Slider />
                <section>
                    
                    <div className="service">
                        <div className="container">
                            <div className="row">

                               <div className="col-12 col-md-12 col-lg-12">
                                    <h1>OUR SERVICES</h1>

                                    <div className="seprator mt-3"></div>
                               </div>

                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="card">
                                        <img src={card2} />
                                        <div className="card-body">
                                            <h5 className="card-title">CASH ON DELIVERY</h5>
                                            <p className="card-text pt-2">Shipment Tracking provides the best cash on delivery services to online businesses. Apply for a COD account today</p>
                                            
                                            <div className="pt-4">
                                                <a className="press" href="#" >Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="card">
                                        <img src={card8} />
                                        <div className="card-body">
                                            <h5 className="card-title">MY TIME DELIVERY</h5>
                                            <p className="card-text pt-2">Now send your shipments according to YOUR TIME, YOUR TERMS within the major cities o6 My Time Delivery Service.</p>
                                            
                                            <div className="pt-4">
                                                <a className="press" href="#" >Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="card">
                                        <img src={card9} />
                                        <div className="card-body">
                                            <h5 className="card-title">EFULFILLMENT</h5>
                                            <p className="card-text pt-2">With Shipment Tracking EFULFILLMENT, you can store your products in fulfillment centers, and Pack and Ship it to your customer’s doorsteps.</p>
                                            
                                            <div className="pt-4">
                                                <a className="press" href="#" >Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="card">
                                        <img src={card10} />
                                        <div className="card-body">
                                            <h5 className="card-title">OVERNIGHT</h5>
                                            <p className="card-text pt-2">Shipment Tracking provides you Overnight shipping services. Book a shipment, and get it delivered by the next day!</p>
                                            
                                            <div className="pt-4">
                                                <a className="press" href="#" >Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="card">
                                        <img src={slider1} />
                                        <div className="card-body">
                                            <h5 className="card-title">OVERLAND</h5>
                                            <p className="card-text pt-2">Shipment Tracking Overland freight solutions! This service allows you to send your parcels all accross Pakistan at reasonable prices.</p>
                                            
                                            <div className="pt-4">
                                                <a className="press" href="#" >Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="card">
                                        <img src={card1} />
                                        <div className="card-body">
                                            <h5 className="card-title">INTERNATIONAL DELIVERY</h5>
                                            <p className="card-text pt-2">Use Shipment Tracking to send your parcels/packages internationally at the best affordable rates.</p>
                                            
                                            <div className="pt-4">
                                                <a className="press" href="#" >Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="card">
                                        <img src={card3} />
                                        <div className="card-body">
                                            <h5 className="card-title">DOOR TO DOOR DELIVERY</h5>
                                            <p className="card-text pt-2">Shipment Tracking provides the best cash on delivery services. Apply for a COD account today and use the best courier service.</p>
                                            
                                            <div className="pt-4">
                                                <a className="press" href="#" >Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="card">
                                        <img src={card7} />
                                        <div className="card-body">
                                            <h5 className="card-title">HAND SANITIZER</h5>
                                            <p className="card-text pt-2">With Shipment Tracking you can store your products in centers, and let us Pick, Pack and Ship it to your customer’s doorsteps.</p>
                                            
                                            <div className="pt-4">
                                                <a className="press" href="#" >Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </section>
            </div>
        );
    }
}
export default Home;