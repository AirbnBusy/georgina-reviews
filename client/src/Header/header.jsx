import React from 'react';
import AppReviews from '../App/App.jsx';
import helper from '../helperFunctions.js';
import Search from '../Search/search.jsx';
import {Wrapper, Row, HeaderDescription, Title, Box, InnerBox, Heading, ReviewsTotal, StarsTotal} from  './HeaderStyles.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    var stars = helper.convertRatingsToStars(this.props.avgRating)
  	return (
  	 <Wrapper>
        <Row>
          <HeaderDescription>
            <Title>
              <Box>
                <InnerBox>
                  <Heading>
                    <ReviewsTotal> {this.props.listingData.length} Reviews</ReviewsTotal>
                    <StarsTotal>
                      <div>
                        {stars.map((star, i)=> (
                          <img key={i} src={star}></img>
                        ))}
                      </div>
                    </StarsTotal>
                  </Heading>
                </InnerBox>
              </Box>
            </Title>
          </HeaderDescription>
          <Search handleSearchResults={this.props.handleSearchResults} changeSearchStatus={this.props.changeSearchStatus}/>
        </Row>
      </Wrapper>
  	)
  }
}


export default Header;
 