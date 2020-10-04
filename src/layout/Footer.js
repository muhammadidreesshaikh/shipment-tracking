import React from 'react';
import '../assets/css/footer.css';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

function Footer() {
    return(
        <section>
            <div className="footer">
                <Grid container spacing={5}>
                    <Grid item xs={12} md={6} lg={6}>
                        <div className="first">
                            <h3>Shipment Tracking</h3>
                            <p className="pt-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors sometimes by accident, sometimes on purpose injected humour and the like.</p>

                            <Button variant="contained" color="default">
                                Primary
                            </Button>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={3} lg={3}>
                        <div className="first">
                            <h3>COMPANY</h3>
                            <ul>
                                <li><a href="#">Our History</a></li>
                                <li><a href="#"> Investor Relations & Policies</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Gift Cards</a></li>
                                <li><a href="#">Sale 30%</a></li>
                                <li><a href="#">Merchandise Store</a></li>
                            </ul>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={3} lg={3}>
                        <div className="first">
                            <h3>STAY CONNECTED</h3>
                            <ul>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Messenger</a></li>
                                <li><a href="#">Our App</a></li>
                                <li><a href="#">111-235-0101</a></li>
                            </ul>
                         </div>
                    </Grid>
                </Grid>

                <div className="seprator"></div>

                <Grid item xs={12} md={12} lg={12}>
                    <div className="last">
                        <p>© Copyright 2020, Shipment Tracking. All Rights Reserved.</p>
                    </div>
                </Grid>
                       
            </div>
        </section>
    );
}

export default Footer;