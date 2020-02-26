import React, { Component } from "react";
import "../pages/Home.css"
import API from "../utils/api"
import axios from "axios"

class Home extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        axios.get("http://localhost:3001/api/character/5e56b2224a7c1f3e5004287b").then(data => {
            console.log("hit api", data);
            this.setState({ data: data })
        })

    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" role="navigation">
                    <div class="container">
                        <a class="navbar-brand" href="/home">KnightFall</a>
                        <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
                            &#9776;
        </button>
                        <div class="collapse navbar-collapse" id="exCollapsingNavbar">
                            <ul class="nav navbar-nav">
                                <li class="nav-item"><a href="/" class="nav-link">Home</a></li>
                                <li class="nav-item"><a href="/" class="nav-link">About Us</a></li>
                                <li class="nav-item"><a href="/" class="nav-link">Contact Us</a></li>
                                {/* <li class="nav-item"><a href="#" class="nav-link">More</a></li> */}
                            </ul>
                            <ul class="nav navbar-nav flex-row justify-content-between ml-auto">
                                <li class="nav-item order-2 order-md-1"><a href="#" class="nav-link" title="settings"><i class="fa fa-cog fa-fw fa-lg"></i></a></li>
                                <li class="dropdown order-1">
                                    <button type="button" id="dropdownMenu1" data-toggle="dropdown" class="btn btn-outline-secondary dropdown-toggle">Sign Up <span class="caret"></span></button>
                                    <ul class="dropdown-menu dropdown-menu-right mt-2">
                                        <li class="px-3 py-2">
                                            <form class="form" role="form">
                                                <div class="form-group">
                                                    <input id="emailInput" placeholder="Email" class="form-control form-control-sm" type="text" required="" />
                                                </div>
                                                <div class="form-group">
                                                    <input id="passwordInput" placeholder="Password" class="form-control form-control-sm" type="text" required="" />
                                                </div>
                                                <div class="form-group">
                                                    <button type="submit" class="btn btn-primary btn-block">Login</button>
                                                </div>
                                                <div class="form-group text-center">
                                                    <small><a href="#" data-toggle="modal" data-target="#modalPassword">Forgot password?</a></small>
                                                </div>
                                            </form>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dropdown order-1">
                                    <button type="button" id="dropdownMenu1" data-toggle="dropdown" class="btn btn-outline-secondary dropdown-toggle">Login <span class="caret"></span></button>
                                    <ul class="dropdown-menu dropdown-menu-right mt-2">
                                        <li class="px-3 py-2">
                                            <form class="form" role="form">
                                                <div class="form-group">
                                                    <input id="emailInput" placeholder="Email" class="form-control form-control-sm" type="text" required="" />
                                                </div>
                                                <div class="form-group">
                                                    <input id="passwordInput" placeholder="Password" class="form-control form-control-sm" type="text" required="" />
                                                </div>
                                                <div class="form-group">
                                                    <button type="submit" class="btn btn-primary btn-block">Login</button>
                                                </div>
                                                <div class="form-group text-center">
                                                    <small><a href="#" data-toggle="modal" data-target="#modalPassword">Forgot password?</a></small>
                                                </div>
                                            </form>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div id="modalPassword" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3>Forgot password</h3>
                                <button type="button" class="close font-weight-light" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div class="modal-body">
                                <p>Reset your password..</p>
                            </div>
                            <div class="modal-footer">
                                <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                                <button class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="jumbotron">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4"></hr>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a id="playNow" className="btn btn-primary btn-lg justify-content-end" href="#" role="button">Learn more</a>
                </div>
                <div className="jumbotron">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4"></hr>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a id="playNow" className="btn btn-primary btn-lg justify-content-end" href="#" role="button">Learn more</a>
                </div>
            </div>
        );
    }
}

export default Home;