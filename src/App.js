import React, { Component } from 'react';
import logo from './logo.svg';
import Dropdown from './Dropdown';
import EditableDropdown from './EditableDropdown';
import './App.css';
import Modal from './Modal';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dropdownValue: "Maneesh",
      eDropdownValue: "Cricket",
      isDisabled: false,
      showModal: false
    }

    this.callBack = this.callBack.bind(this);
    this.eCallBack = this.eCallBack.bind(this);
  }

  callBack(val) {
    this.setState({dropdownValue: val});
  }

  eCallBack(val) {
    this.setState({eDropdownValue: val});
  }

  render() {
    const dropdownList = [{id: 1, item: "Maneesh", disabled: false},
                          {id: 2, item: "Mohan", disabled: false},
                          {id: 3, item: "Bhargav", disabled: false},
                          {id: 4, item: "Vishnu", disabled: false}];
    //const dropdownList = ["Maneesh", "Mohan", "Bhargav", "Vishnu"];
    const sports = ["Cricket","Golf","Baseball","Chess","Badminton","Football","Hockey","Tennis","Soccer","Boxing","Running","Basketball","Kabbadi","Skating","Ice Hockey","Bowling","Shooting","Rugby"];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.dropdownValue}{"'"}s favourite sport is {this.state.eDropdownValue}
        </p>
        <div className="first">
          <Dropdown isDisabled={this.state.isDisabled} dropdownSelectedItem={this.state.dropdownValue} dropdownList={dropdownList} callBack={this.callBack} />
        </div>
        <div className="second">
          <EditableDropdown dropdownSelectedItem={this.state.eDropdownValue} dropdownList={sports} callBack={this.eCallBack}/>
        </div>
        <button onClick={() => this.setState({showModal: true})}> Open Modal </button>
        <Modal showModal={this.state.showModal}/>

      </div>
    );
  }
}

export default App;
