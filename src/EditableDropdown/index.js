import React, {Component} from 'react';
import './styles.css';

export default class EditableDropdown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      selectedItem: "",
      dropdownList: []
    }

    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.handleDropdownItemClick = this.handleDropdownItemClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.setState({selectedItem: this.props.dropdownSelectedItem, dropdownList: this.props.dropdownList});
  }

  handleDropdownClick() {
    this.setState({isDropdownOpen: !this.state.isDropdownOpen});
  }

  handleDropdownItemClick(e) {
    this.setState({isDropdownOpen: false, selectedItem: e.currentTarget.innerText});
    document.getElementsByClassName("edropdownContainerButtonInput")[0].value = e.currentTarget.innerText;
    if(this.props.callBack) {
      this.props.callBack(e.currentTarget.innerText);
    }
  }

  handleInputChange(e) {
    let dropdownList = this.props.dropdownList;

    dropdownList = dropdownList.filter(a => a.toLowerCase().includes(e.currentTarget.value.toLowerCase()));

    this.setState({dropdownList});
  }

  render() {
    return (
      <div className="edropdownContainer">
          <div className={`edropdownContainerButton ${this.props.isDisabled?"disableButton":""}`} onClick={this.handleDropdownClick}>
            <input type="text" className="edropdownContainerButtonInput" defaultValue={this.state.selectedItem} onInput={this.handleInputChange}/>
            <img src="./down.png" className={`edropdownContainerButtonDownIcon ${this.state.isDropdownOpen?"rotate":""}`}/>
          </div>
          <div className={`edropdownContainerList ${this.state.isDropdownOpen?"block":"none"}`}>
            {
              this.state.dropdownList.map((a,b) =>
                <div key={b} className="edropdownContainerListItem" onClick={this.handleDropdownItemClick}>
                  {a}
                </div>
              )
             }
          </div>
      </div>
    )
  }
}


/*

this.props.dropdownList.map(a =>
  <div className="dropdownContainerListItem">
    {a}
  </div>
);

*/
