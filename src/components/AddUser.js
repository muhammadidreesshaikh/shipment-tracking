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
                                                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                                    <option selected>Choose Any One</option>
                                                    <option value="1">Admin</option>
                                                    <option value="2">Manager</option>
                                                    <option value="3">Accountant</option>
                                                    <option value="4">Supervisior</option>
                                                </select>
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