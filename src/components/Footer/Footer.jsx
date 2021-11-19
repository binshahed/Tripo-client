import React from "react";
import logo from "../../image/logo-light.png";

const Footer = () => {
  return (
    <div className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <img className="py-4" src={logo} alt="" />
            <p className="py-4 px-3">
              Amazing Tours is leading tour operator of Bangladesh and we are
              member of International Air Transport Association (IATA) and Tour
              Operators Association of Bangladesh (TOAB). We are not only for
              tour operator, our Established Software company, This company
              provide many pro-
            </p>
          </div>
          <div className="col-md-4 col-sm-12">
            <h3 className="py-4 text-warning">Contact Us</h3>
            <p className="py-1 px-3">
              address: 04360, NewYork, 33 Matehouse str., 12/4 803-33-5644-99
              admin@doremischool.net
            </p>

            <p className="py-1 px-3">Call: 803-33-5644-99</p>

            <div className="py-1 px-3">Email: admin@doremischool.net</div>
          </div>
          <div className="col-md-4 col-sm-12">
            <h3 className="py-4 text-warning">Instagram</h3>
            <p className="py-1 px-3">
              Donec eu volutpat nibh, in maximus ligula.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
