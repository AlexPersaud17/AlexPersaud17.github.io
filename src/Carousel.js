import React, { Component } from 'react';
import Coverflow from 'react-coverflow';

class Carousel extends Component {
  render() {
    return (
      <div>
      <Coverflow width={1100} height={300} displayQuantityOfSide={1} navigation={false} enableHeading={false} enableScroll={true} >

          <img src="http://i.imgur.com/nAycx5W.jpg" alt=""/>
          <img src="http://i.imgur.com/78Txyzm.jpg" alt=""/>
          <img src="http://i.imgur.com/6JE5OoD.jpg" alt=""/>
          <img src="http://i.imgur.com/ZSZNtYJ.jpg" alt=""/>
          <img src="http://i.imgur.com/0DxpBvc.jpg" alt=""/>
          <img src="http://i.imgur.com/5curlV5.jpg" alt=""/>
          <img src="http://i.imgur.com/Z6YeCHX.jpg" alt=""/>
          <img src="http://i.imgur.com/Y7GACH5.jpg" alt=""/>

        </Coverflow>
      </div>
    );
  }
}

export default Carousel;
