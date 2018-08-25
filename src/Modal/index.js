import React, {Component} from 'react';
import './styles.css';


export default class Modal extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  }

  componentDidMount(){
    this.setState({isOpen: this.props.showModal})
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.showModal !== this.state.isOpen) {
      this.setState({isOpen: nextProps.showModal});
    }
  }

    render(){
      return (
        <div className={`modal ${this.state.isOpen?"open":"close"}`}>
          <div className="modalBody">
            <p> Display Modal </p>
          </div>
        </div>
      )
    }

}
