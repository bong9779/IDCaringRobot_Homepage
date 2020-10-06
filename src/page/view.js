import React, { Component } from 'react';
import './main.css';
import axios from 'axios';

class view extends Component {
  constructor(props) {
    super(props)
    this.state={
      data : [],
    }
  }
  componentDidMount() {
    this._getData()
  }

  _getData = async function() {
    const board_id = this.props.match.params.data;

    const getData = await axios('/get/hospitalboard_data', {
      method : 'POST',
      headers: new Headers(),
      data : { id : board_id }
    });

    return this.setState({ data : getData }) 
  }

  render() {

    const { data, date } = this.state;

    return (
      <div className='Write'>
      {data.data 
      ? <div>

          <div className='top_title'>
            <input type='text' id='title_txt' name='title' defaultValue={data.data.data[0].title} readOnly/>

            
          </div>
          
          <div>
            <textarea id='content_txt' name='contents' defaultValue={data.data.data[0].contents} readOnly></textarea>
          </div>
        </div>
      : null}
    </div>
    );
  }
}

export default view;


