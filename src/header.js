import React from 'react'
import searchIcon from "@material-ui/icon/Search";

function header() {
  return (
    <div className="header">
        <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' />
    

    <div className='header_search '>
        <input className='header_searchInput' type='text' />
        <SearchIcon className ="header__searchIcon" />
    </div>
    <div className='header_nav'>
        <div className='header_option'>
          <span className='header__optionLineOne'>Hello Guest</span>
          <span className='header__optionLineTwo'>sign In</span>
        </div>
        <div className='header_option'>
        <span className='header__optionLineOne'>return </span>
          <span className='header__optionLineTwo'>& orders</span>
        </div>
        <div className='header_option'>
        <span className='header__optionLineOne'>Hello Guest</span>
          <span className='header__optionLineTwo'>sign In</span>
        </div>
        <div className='header_option'>
        <span className='header__optionLineOne'>Hello Guest</span>
          <span className='header__optionLineTwo'>sign In</span>
        </div>
    </div>
    </div>
  );
}

export default header;