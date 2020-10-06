import React from 'react';
import '../assets/css/contact.css';
import Banner from '../shared/Banner';

class Contact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };

        this.bannerData = {
            heading: 'Contact',
            image: 'https://image.freepik.com/free-photo/muslim-woman-working-as-customer-service-operator-with-team-call-center_8087-2722.jpg'
        }
    } 

    componentDidMount() {
        console.log("Contact");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section>
                <Banner data={this.bannerData} />

                <div className="contact">
                    <div className="container">
                        <div className="row justify-content: center">

                            <div className="col-12 col-md-8 col-lg-8">
                                <div className="row input">
                                    
                                    <div className="col-12 col-md-12 col-lg-12">
                                        <input type="name" class="form-control" placeholder="Your Name"></input>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <input type="email" class="form-control" placeholder="Email"></input>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <input type="addres" class="form-control" placeholder="Address"></input>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <input type="company name " class="form-control" placeholder="Company Name"></input>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <textarea class="form-control" placeholder="Your Message" rows="5"></textarea>
                                    </div>

                                </div>

                                <div className="pt-5 text-center">
                                    <a className="press" href="#">Submit</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Contact;