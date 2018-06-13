import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Header from '../Header/header.jsx';
import Categories from '../Categories/categories.jsx';
import Reviews from '../Reviews/reviews.jsx';
import Pagination from '../Pagination/pagination.jsx';
import helper from '../helperFunctions.js';
import Search from '../Search/search.jsx';
import SearchDetails from '../SearchDetails/searchDetails.jsx';
import {Container} from './AppStyles.jsx';

class AppReviews extends React.Component {
  constructor(props) {
    super(props)
  	this.state = {
      listingData: [],
      avgRating: 0,
      filteredData: [],
      searched: false,
      currentPage: 1,
  	}
	};

componentDidMount() {
  this.receiveData();
};

changeCurrentPage(value){
  var number = Number(value)
  if(number <= Math.ceil(this.state.filteredData.length / 7)) {
    this.setState({
      currentPage: number
    })
    } else {
      number-=3
      this.setState({
        currentPage: number
      })
    } 
}

addToCurrentPage(){
  var activePage = this.state.currentPage
  activePage++
  console.log(activePage)
  this.setState({
    currentPage: activePage
  })
}

substractFromCurrentPage(){
  var activePage = this.state.currentPage
  activePage--
  console.log(activePage)
  this.setState({
    currentPage: activePage
  })
}

receiveData() {
  var self = this;
  axios.get('/api/listings/1001/reviews')
    .then(function (response){
      self.setState({
        listingData: response.data,
        avgRating: helper.getAvgRating(response.data),
        filteredData: response.data,
        value: null,
      })
    })
    .catch(function (error){
      console.log(error);
      })
};

changeSearchStatus() {
  if(!this.state.searched) {
    this.setState({
      searched: true
    })
  }
}

handleSearchResults (value) {

  var data = this.state.listingData
  var filteredData = [];
  data.forEach(function(listing) {
    if(listing.review.includes(value)) {
       filteredData.push(listing)
    }
  })

  this.setState({
    filteredData: filteredData,
    value: value,
  })
}

removeFilteredSearch(){

  var allData = this.state.listingData
  this.setState({
    filteredData: allData,
    searched:false,
  })
}


render() {
  return (
    <Container>
      <Header handleSearchResults={this.handleSearchResults.bind(this)} changeSearchStatus={this.changeSearchStatus.bind(this)} listingData={this.state.listingData} avgRating={this.state.avgRating}/>
      {this.state.searched ? <SearchDetails removeFilteredSearch={this.removeFilteredSearch.bind(this)} filteredData={this.state.filteredData} value={this.state.value}/> : <Categories listingData={this.state.listingData}/>} 
      <Reviews filteredData={this.state.filteredData} currentPage={this.state.currentPage}/>
      <Pagination changeCurrentPage={this.changeCurrentPage.bind(this)} filteredData={this.state.filteredData} currentPage={this.state.currentPage} addToCurrentPage={this.addToCurrentPage.bind(this)} substractFromCurrentPage={this.substractFromCurrentPage.bind(this)}/>
    </Container>
  )
};

};

export default AppReviews;

