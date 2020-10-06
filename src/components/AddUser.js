import React from 'react';
import '../assets/css/add-user.css';

class AddUser extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("AddUser");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <div>
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
                                            
                                            <div className="pb-4">
                                                <div class="form-check pt-1">
                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"></input>
                                                    <label className="form-check-label" for="exampleRadios1">
                                                        Admin
                                                    </label>
                                                </div>

                                                <div className="form-check pt-1">
                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
                                                    <label className="form-check-label" for="exampleRadios2">
                                                        Manager
                                                    </label>
                                                </div>

                                                <div className="form-check pt-1">
                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"></input>
                                                    <label className="form-check-label" for="exampleRadios3">
                                                        Accountant
                                                    </label>
                                                </div>

                                                <div className="form-check pt-1">
                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option4"></input>
                                                    <label className="form-check-label" for="exampleRadios4">
                                                        Supervisior
                                                    </label>
                                                </div>
                                            </div>
                                            
                                            <button type="submit" class="btn btn-primary w-100">Add New User</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AddUser;