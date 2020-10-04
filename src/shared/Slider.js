import React from 'react';
import '../assets/css/slider.css';
import slider from '../assets/img/slider1.jpg'
import shipmentVector from '../assets/img/shipment-vector.png';

import { Grid, Button, TextField, Paper } from '@material-ui/core';

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
                    <Grid className="px-5" container>
                        <Grid item xs={12} md={6} lg={6} className="content-area">
                            <h1>Moving Made Fast & Simple</h1>
                            <p className="pt-2">We provide you the best service.</p>

                            <div className="track pt-5">
                                <Grid container spacing={3} className="content">
                                    <Grid item xs={12} md={12} lg={12}>
                                        <Paper>
                                            <TextField className="w-100 " label="Shipment Tracking Code" variant="outlined" />
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} md={12} lg={12}>
                                        <Button variant="contained" color="default" className="w-100">
                                            Track Shipment
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>

                        <Grid item xs={12} md={6} lg={6}>
                            <img src={shipmentVector} className="w-100" />
                        </Grid>
                    </Grid>
                </div>
            </section>
        );
    }
}
export default Slider;