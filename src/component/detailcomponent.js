import React, { Component } from 'react';

class DetailComponent extends Component {
    
  render() {
      const detailData = this.props.detailData;
    return (
        <div className='detail-component'>
            <div>
                <h3> {detailData.title} </h3>
                <h4> {detailData.name} </h4>
            </div>
        </div>
    );
  }
}

export default DetailComponent;
