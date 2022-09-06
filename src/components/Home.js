import React from 'react';
import backgroundImg from '../../public/assets/disney_plus_logo_1820.png';
// import videoBg from '../../public/assets/Clouds - 64759.mp4';

const Home = () => {
  return (
    <div className="home flex-column center">
      <h1>Walt Disney Cinematic Universe</h1>
      <img className="homeImage" src={backgroundImg} />
      {/* <video src={videoBg} autoPlay loop muted /> */}
    </div>
  );
};

export default Home;
