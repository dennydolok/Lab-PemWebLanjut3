import React, { Component } from 'react'

export default class Layout extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                    <div className="container px-4">
                        <a className="navbar-brand" href="#page-top">Web Programming</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item"><a className="nav-link" href="#about">Biodata</a></li>
                                <li className="nav-item"><a className="nav-link" href="#services">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <header className="bg-primary bg-gradient text-white">
                    <div className="container px-4 text-center">
                        <h1 className="fw-bolder">Hello My Name Is <div className="fw-bolder">Denny</div></h1>
                        <p className="lead">I'm a college student at IBIK Bogor</p>
                    </div>
                </header>
                <section id="about">
                    <div className="container px-4">
                        <div className="row gx-4 justify-content-center">
                            <div className="col-lg-8">
                                <h2>Biodata</h2>
                                <table className="fs-5">
                                    <tr>
                                        <td>Full Name</td>
                                        <td> : </td>
                                        <td>Denny Dolok Partala</td>
                                    </tr>
                                    <tr>
                                        <td>NIK</td>
                                        <td> : </td>
                                        <td>192310004</td>
                                    </tr>
                                    <tr>
                                        <td>Date of Birth</td>
                                        <td> : </td>
                                        <td>16/11/2001</td>
                                    </tr>
                                    <tr>
                                        <td>Major</td>
                                        <td> : </td>
                                        <td>Information Technology</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-light" id="services">
                    <div className="container px-4">
                        <div className="row gx-4 justify-content-center">
                            <div className="col-lg-8">
                                <h2>Contact Me</h2>
                                <table className="fs-5">
                                    <tr>
                                        <td><i class="fas fa-envelope-square"></i> Email </td>
                                        <td> : </td>
                                        <td>dennydolok12@gmail.com</td>
                                    </tr>                            
                                    <tr>
                                        <td><i class="fab fa-whatsapp-square"></i> Whatsapp </td>
                                        <td> : </td>
                                        <td>+6285156735916</td>
                                    </tr>  
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
