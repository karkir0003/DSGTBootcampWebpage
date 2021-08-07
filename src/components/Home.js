import React from 'react';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Announcement from 'react-announcement';
class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
              />
            </div>
            <div class="col-lg-5">
              <Bounce left><h1 class="font-weight-light">Home</h1></Bounce>
              <p>
                <Fade right>Home page for DSGT Bootcamp. Make this page very appealing and eye-catching</Fade>
              </p>
            </div>
          </div>
          <Announcement
          title="Here is your component"
          subtitle="The best announcement component for React is finally here. Install it in all your projects."
          link="https://github.com/kristofferandreasen/react-announcement"
          />
        </div>
      </div>
    );
  }
}


export default Home;

