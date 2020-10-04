import React from 'react';
import '../assets/css/slider.css';
// import slider from '../assets/img/slider1.jpg'

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
                    <p>slider  slider  slider </p>
                </div>
            </section>
        );
    }
}
export default Slider;