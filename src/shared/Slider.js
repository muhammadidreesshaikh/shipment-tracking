import React from 'react';
import '../assets/css/slider.css';
import shipment from '../assets/img/shipment-vector.png'

class Slider extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Slider");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section>
                <div className="slider">
                    <div className="container">
                        <div className="row">

                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="left">
                                    <h1>Moving Made Fast & Sample</h1>
                                    <p className="pt-2">We provide you the best service</p>

                                    <div className="form-group pt-5">
                                        <input type="Tracking Code" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Shipment Tracking Code"></input>
                                    </div>

                                    <div className="pt-3">
                                        <a className="press" href="#">TRACK SHIPMENT</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="right">
                                    <img src={shipment} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Slider;