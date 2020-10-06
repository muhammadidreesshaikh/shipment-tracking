import React from 'react';
import '../assets/css/services.css';
import Banner from '../shared/Banner';

class Services extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };

        this.bannerData = {
            heading: 'Services',
            image: 'https://images.squarespace-cdn.com/content/v1/515ee26de4b02ae07859ae80/1584989680507-QLL0FFTLBEYID0LQ72TP/ke17ZwdGBToddI8pDm48kHWyfp7z9tTwnjtJeCh14i0UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2drossoAWLExdzwXy34oTNTMRdf9TbJAkr2xPQZs-Eaa2m4bjm9DAHF2kOsIZRJKXnA/courier-filling-up-form-PEC5GKA.jpg?format=1500w'
        }
    } 

    componentDidMount() {
        console.log("Services");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section>
                <Banner data={this.bannerData} />

                <div>
                    Services
                </div>
            </section>
        );
    }
}
export default Services;