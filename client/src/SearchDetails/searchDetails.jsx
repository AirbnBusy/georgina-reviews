import React from 'react';
import {Box, Description, ReturnButton} from './SearchDetailsStyles.jsx';



class SearchDetails extends React.Component {
  constructor(props) {
    super(props)
  	this.state = {
  		
  	}
  }

  undoFilteredSearch(){
  	this.props.removeFilteredSearch();
  }

  render() {
  	return (
  		<Box> 
  			<Description>
  				{this.props.filteredData.length} guests have mentioned "<strong>{this.props.value}</strong>"
  			</Description>
  			<div>
  				<ReturnButton onClick={this.undoFilteredSearch.bind(this)}>Back to all reviews</ReturnButton>
  			</div>
  		</Box>
  	)
  }
 }

  export default SearchDetails;