import React, { useState } from "react";
import { useNavigate } from "react-router";
import { loginService } from "../../../services/api";

export const Login = (props) => {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({email:'', password:''});
  const [token, setToken] = useState(null);
  const handleLoginsubmit = async (e) => { 
    e.preventDefault();
    const currentUserToken = await ((await loginService(loginDetails)).data).token;
    const loggedinDetails = {isLoggedIn: false, token: currentUserToken};
    setToken(currentUserToken);
    if(currentUserToken !== ("null")){
      loggedinDetails.isLoggedIn = true;
      localStorage.setItem("loggedInDetails", JSON.stringify(loggedinDetails));

      navigate("/dashboard");
    }
  };
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
            <form name="sentMessage" validate onSubmit={handleLoginsubmit}>
                <div className="row">
                  <div className="col-md-4">
                  </div>
                  <div className="form-group col-md-4">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={(e)=> setLoginDetails({email: e.target.value})}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  <div className="col-md-4">
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                  </div>
                  <div className="form-group col-md-4">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        required
                        onChange={(e)=> setLoginDetails({password: e.target.value})}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  <div className="col-md-4">
                  </div>
                </div>
                <div className="row">
                <div>
                <div id="success"></div>
                <p ><a href="#signup" className="linktologin" style={{"color": "white"}}>New Here?</a></p>
                <button type="submit" className="btn btn-custom btn-lg">
                  Log In
                </button>
                </div>
                </div>
              </form>
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          </div>
        </div>
      </div>
    </div>
  );
};