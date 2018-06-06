import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
  	this.state = {

  	}
	};

componentDidMount() {
  this.receiveData();
};

receiveData() {
  axios.get('/api/listings/1001/reviews')
    .then(function (response){
      console.log(response.data);
    })
    .catch(function (error){
      console.log(error);
    })
};

render() {
  return (
    <div>
      <h1>AirbnBusy Reviews Coming Soon</h1>
    </div>
  )
};

};


export default App;