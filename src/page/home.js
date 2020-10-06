import React, { Component } from 'react';

import mainlogo1 from '../image/mainlogo1.PNG';

import mainlogo2 from '../image/mainlogo2.PNG';
import mainlogo3 from '../image/mainlogo3.PNG';
import Overlay from 'react-bootstrap/Overlay'
import './main.css';
import { Tooltip,OverlayTrigger, Navbar, Nav, Form, FormControl, Button, Dropdown, CarouselProps, CarouselItem, Carousel, Jumbotron} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class home extends Component {
  constructor(props) {
    super(props)
    
  }
  

  render() {//메인화면 이미지 출력
const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
         ☎  010-9019-5810
      </Tooltip>
    );
    return (
      <div>

      <Carousel className="mainpadding">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mainlogo1}
          width="50"
          height="80"
          alt="First slide"
        />
  
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mainlogo2}
          width="50"
          height="80"
          alt="Second slide"
        />
  
      </Carousel.Item>
    
    </Carousel>

    <img
          className="d-block w-100"
          src={mainlogo3}
          height="350"

        />
  


<OverlayTrigger
    placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip}
  >
    <Button className="mainbutton" variant="secondary">
      관리자 문의하기
      </Button>
  </OverlayTrigger>,

</div>


    );
  }
}

export default home;


