import React from 'react';
import {Box, Page, Arrow} from './PaginationStyles.jsx';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstPage: 1,
      currentPage: 1,
    };
  }

  changeCurrentPage(e){
    this.props.changeCurrentPage(e.target.value);
  }

  changeCurrentPageToNext(){
    this.props.addToCurrentPage();
  }
 
 changeCurrentPageBack(){
   this.props.substractFromCurrentPage();
 }

  render() {
    return (
      <Box>
        <div>
         {this.props.currentPage === 1 ? <Arrow></Arrow> :  <Page onClick={this.changeCurrentPageBack.bind(this)}><img src="././arrowBack.png"/></Page> }
           <Page value={this.state.firstPage} onClick={this.changeCurrentPage.bind(this)}>{this.state.firstPage}</Page>
           <Page value={this.props.currentPage + 1} onClick={this.changeCurrentPage.bind(this)}>{2}</Page>
           {this.props.currentPage > 1 ? '...': <Page value={this.props.currentPage + 1} onClick={this.changeCurrentPage.bind(this)}>{3}</Page> }
           <Page value={this.props.currentPage + 1} onClick={this.changeCurrentPage.bind(this)}>{this.props.currentPage < Math.ceil(this.props.filteredData.length / 7) ? (this.props.currentPage + 3) : (this.props.currentPage - 2)}</Page>
           <Page value={this.props.currentPage + 2} onClick={this.changeCurrentPage.bind(this)}>{this.props.currentPage < Math.ceil(this.props.filteredData.length / 7) ? (this.props.currentPage + 4) : (this.props.currentPage - 1)}</Page>
           ...
           <Page value={Math.ceil(this.props.filteredData.length / 7)} onClick={this.changeCurrentPage.bind(this)}>{Math.ceil(this.props.filteredData.length / 7)}</Page>
           <Page onClick={this.changeCurrentPageToNext.bind(this)}><img src="././arrowNext.png"/></Page>
        </div>
      </Box>
    );
  }
}
export default Pagination;
