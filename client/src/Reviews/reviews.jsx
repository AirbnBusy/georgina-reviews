import React from 'react';
import AppReviews from '../App/App.jsx'
import helper from '../helperFunctions.js';
import {Box, InnerBox, Avatar, UserName, Dated, Review} from './ReviewsStyles.jsx'

class Reviews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }



  render() {
    var data = this.props.filteredData.slice(this.props.currentPage - 1, this.props.currentPage + 6)
    console.log(data)
  	return (
  		<Box>
    		{data.map((review, i)=> (
      		<InnerBox key={i}>
    	  		<div>
    	          <Avatar src={review.photo}/>
    	        </div>
    	        <div>
    	          <UserName>{review.user_name}</UserName>
    	          <Dated>{helper.changeDateFormat(review.review_date)}</Dated>
    	        </div>
    	        <div>
    	          <Review>{review.review}</Review>
    	        </div>
            </InnerBox>
    		))} 
      </Box>
  	)
  }
 }

 export default Reviews;