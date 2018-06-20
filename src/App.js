import React, { Component } from 'react';
import LeftComponent from './component/leftcomponent';
import DetailComponent from './component/detailcomponent';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dropdownData:null,
      detailData:null
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3000/ddData').then((response)=>{
      console.log(response.data)
        this.setState({dropdownData:response.data})
    })
  }

  fetchDetailData = (id)=>{
    console.log(id);
    axios.get(`http://localhost:3000/${id}`).then((response)=>{
      console.log(response.data);
        this.setState({detailData:response.data})
    })
  }

  render() {
    return (
      <div className="App">
      {this.state.dropdownData && 
        <LeftComponent dropdownData={this.state.dropdownData} fetchData = {this.fetchDetailData}/>}
      {this.state.detailData && 
        <DetailComponent  detailData={this.state.detailData}/>}
      </div>
    );
  }
}

export default App;
