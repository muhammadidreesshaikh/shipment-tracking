import React from 'react';
import '../assets/css/login.css';
import Banner from '../shared/Banner';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };

        this.bannerData = {
            heading: 'Login',
            image: 'https://image.freepik.com/free-vector/gradient-geometric-shape-background_78532-374.jpg'
        }
    } 

    componentDidMount() {
        console.log("Login");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section>
                <Banner data={this.bannerData} />

                <div className="login-form py-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body">
                                        <form>
                                            <div class="form-group">
                                                <label>Email address</label>
                                                <input type="email" class="form-control" placeholder="Enter email" />
                                                <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                                            </div>
                                            <div class="form-group">
                                                <label>Password</label>
                                                <input type="password" class="form-control" placeholder="Password" />
                                            </div>
                                            
                                            <div className="row">
                                                <div className="col-12 col-md-6">
                                                    <div class="form-check pb-2">
                                                        <input type="checkbox" class="form-check-input" />
                                                        <label class="form-check-label"><small>Remember Me</small></label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 float-right">
                                                    <a href="#"><small>Forget Password?</small></a>
                                                </div>
                                            </div>
                                            
                                            <button type="submit" class="btn btn-primary w-100">Login</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Login;