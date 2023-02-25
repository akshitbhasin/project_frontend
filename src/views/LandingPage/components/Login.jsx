import { Image } from "./image";
import React from "react";

export const Login = (props) => {

  const handleSubmit = () => { };
  const handleChange = () => { };
  return (
    <div id="login" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Login</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items col-md-12">
            <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-4">
                    <p>1</p>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group">
                      <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        className="form-control"
                        placeholder="First Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group">
                      <input
                        type="text"
                        id="secondname"
                        name="secondname"
                        className="form-control"
                        placeholder="Second Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <p>2</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <p>1</p>
                  </div>
                  <div className="form-group col-md-4">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  <div className="col-md-4">
                    <p>2</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <p>1</p>
                  </div>
                  <div className="form-group col-md-4">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  <div className="col-md-4">
                    <p>2</p>
                  </div>
                </div>
                <div className="row">
                <div>
                <div id="success"></div>
                <p ><a href="#contact" className="linktologin" style={{"color": "white"}}>Already Have An Account?</a></p>
                <button type="submit" className="btn btn-custom btn-lg">
                  Login
                </button>
                </div>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};
{/*  */}