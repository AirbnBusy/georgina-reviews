import React from 'react';
import helper from '../helperFunctions.js';
import {Box, InnerBox, CategoriesLeftGroup, CategoriesRightGroup, Name, Stars} from './CategoriesStyles.jsx';

class Categories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    var categories1 = helper.getAvgRatingPerCategory(this.props.listingData).slice(0,3)
    var categories2 = helper.getAvgRatingPerCategory(this.props.listingData).slice(3)
    return (
      <Box>
        <InnerBox>
          <CategoriesLeftGroup>
            {categories1.map((category, i) => (
              <div key={i}>
                <Name>{category.name}</Name>
                <Stars><img src={category.rating[0]}/><img src={category.rating[1]}/><img src={category.rating[2]}/><img src={category.rating[3]}/><img src={category.rating[4]}/></Stars>
              </div>
             ))}
          </CategoriesLeftGroup>
          <CategoriesRightGroup>
           {categories2.map((category, h) => (
              <div key={h}>
                <Name>{category.name}</Name>
                <Stars><img src={category.rating[0]}/><img src={category.rating[1]}/><img src={category.rating[2]}/><img src={category.rating[3]}/><img src={category.rating[4]}/></Stars>
              </div>
           ))}
          </CategoriesRightGroup>
        </InnerBox>
      </Box>    
    )
  }
}


export default Categories;
