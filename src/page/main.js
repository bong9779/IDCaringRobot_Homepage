import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Home, Writehospital, Write, Signup, Board, List, Info, HospitalBoard, View } from './index.js';
import './main.css';

class main extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        

        <div className='Mains'>
            <div id='Mains-left'>
            </div>
            <div>
                <Route path='/' component={Home} exact />
                <Route path='/write' component={Write} />
                <Route path='/signup' component={Signup} />
                <Route path='/board' component={Board} />
                <Route path='/list' component={List} />
                <Route path='/patientinfo' component={Info} />
                <Route path='/hospitalboard' component={HospitalBoard} />
                <Route path='/view/:data' component={View} />
                <Route path='/writehospital' component={Writehospital}/>
            </div>
            <div id='Mains-right'>
                
            </div>
        </div>
      </div>
        
    );
  }
}

export default main;

