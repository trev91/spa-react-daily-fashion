import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="row">
        <div>
          <h1 className="text-center">About Us</h1>
          <div className="large-12 text-center pad-top columns">
            <img
              src="https://i.ibb.co/PW0xxNj/karly-santiago-319853-unsplash.jpg"
              alt="karly-santiago-319853-unsplash"
              border="0"
            />
          </div>
          <div className="large-12 text-center pad-top columns">
            <h3>Who are we?</h3>
            <p>
              We are a group of people that care. Nam eget fermentum ex. Nulla
              vestibulum cursus ligula, ut imperdiet ante posuere nec. Aliquam
              erat volutpat. Aenean vehicula est at egestas congue. Mauris
              gravida in ex ac pharetra. Mauris quam nunc, interdum a neque at,
              fringilla condimentum nisi. Etiam mattis dolor risus. Vestibulum
              venenatis, turpis in iaculis pellentesque, erat velit pellentesque
              metus, eu posuere ante nunc at nunc. Suspendisse potenti. Morbi
              lorem nulla, ultricies eu sem a, pulvinar tincidunt arcu. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.
            </p>
          </div>
          <div className="row">
            <div className="large-12 text-center columns pad-top">
              <img
                src="https://i.ibb.co/FmrnjYG/hannah-busing-309662-unsplash.jpg"
                alt="hannah-busing-309662-unsplash"
                border="0"
              />
            </div>
            <div className="large-12 text-center columns pad-top">
              <h3>Why do we do this?</h3>
              <p>
                We want you to look and feel like your best self. Nam eget
                fermentum ex. Nulla vestibulum cursus ligula, ut imperdiet ante
                posuere nec. Aliquam erat volutpat. Aenean vehicula est at
                egestas congue. Mauris gravida in ex ac pharetra. Mauris quam
                nunc, interdum a neque at, fringilla condimentum nisi. Etiam
                mattis dolor risus. Vestibulum venenatis, turpis in iaculis
                pellentesque, erat velit pellentesque metus, eu posuere ante
                nunc at nunc. Suspendisse potenti. Morbi lorem nulla, ultricies
                eu sem a, pulvinar tincidunt arcu. Orci varius natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus mus.
              </p>
            </div>
            <div className="large-12 text-center columns pad-top">
              <h3>Come shop with us!</h3>
              <p>
                We only sell one thing per day, and once it's gone, it never comes back!
              </p>
              <a href="/" className="button round">Go Shop!</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
