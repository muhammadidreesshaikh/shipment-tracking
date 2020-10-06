import React from 'react';
import '../assets/css/about.css';
import Banner from '../shared/Banner';

class About extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };

        this.bannerData = {
            heading: 'About',
            image: 'https://image.freepik.com/free-photo/close-up-statistics-with-employees-background_1098-2920.jpg'
        }

    } 

    componentDidMount() {
        console.log("About");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section>
                <Banner data={this.bannerData} />
                
                <div className="about">
                    <div className="container">
                        <div className="row">

                            <div className="col-12 col-md-12 col-lg-12">
                                <h1>ABOUT SHIPMENT TRACKING</h1>

                                <p className="pt-4">From the time when Shipment Tracking Courier Services Pvt. Ltd. started its operations in 1983 in Pakistan with a small business idea that initiated its journey from 5 destinations by delivering letters and documents, is now transformed into a leading Logistics, Courier & Warehousing service provider across Pakistan, with over 700+ Express Centers, handling over 90 million packages a year, 1500+ Service Locations across Pakistan with 4000+ Vehicles fleet & over 2200 Destinations Worldwide, we employ over 7,000+ Shipment Tracking family members serving Proprietors Entrepreneurs, Small Medium Business Enterprises SME, Students, Individuals, Travelers, FMCGs, Transnational Companies, Large Business Corporations (Textile, Leather, & other sectors), Government Sectors, Non-Government Organizations & Foreign Missions to fulfill their Courier, logistics & Supply Chain needs.</p>

                                <p className="pt-4">Shipment Tracking  Courier Services Pvt. Ltd. has achieved phenomenal growth since its inception under the leadership of the Chairman & Founder Mian Jehangir Shahid. Today’s Leopards Courier Services Pvt. Ltd is the only Courier & Logistics Company in Pakistan having an own branded Boeing 737-300 cargo Aircraft with daily flights for cargo & overnight packages movements, this positioned an enormous value addition in the fleet size of Shipment Tracking Courier Services Pvt. Ltd.</p>

                                <p className="pt-4">With the dynamic approach of Leopards Management, towards constant transformation & digitalization of current operations processes at Shipment Tracking. Enabling technologies such as Sensors, IOT, Data Analytics, Auto Sortation & Sort to light technology and robotics are being deployed into specialized applications. These technological advancements, the introduction of new systems, processes, tech teams, now making Shipment Tracking Courier Services Pvt. Ltd. a leading digitalized Logistics & Courier Group.</p>

                                <div className="pt-4">
                                    <a className="press" href="#">Learn More</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default About;