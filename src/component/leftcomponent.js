import React, { Component } from 'react';

class LeftComponent extends Component {

    constructor(props){
        super(props);
        this.props.fetchData(this.props.dropdownData[0].id);
    }

    onOptionChange = (event)=>{
        this.props.fetchData(event.target.value)
    }
    
  render() {
    return (
        <div className='left-component'>
            <select onChange={this.onOptionChange} className='option-class'>
                { this.props.dropdownData.map((entry,index)=>{
                    return <option value={entry.id} key={index}> {entry.title} </option>
                })}
            </select>
        </div>
    );
  }
}

export default LeftComponent;
