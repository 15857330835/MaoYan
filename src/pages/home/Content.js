import React, { Component,Fragment } from "react";

export default class Content extends Component {
    
    renderList = () => {
        const { movies } = this.props
        if ( movies ){
          return movies.movieList.map( item => <div className="item" data-id="342773" data-bid="dp_wx_home_movie_list" key= { item.id }>
            <div className="main-block">
            <div className="avatar" sort-flag="">
              <div className="default-img-bg">
                <img
                  src= { item.img.replace('w.h','128.180') } 
                />
              </div>
            </div>
            <div className="mb-outline-b content-wrapper">
              <div className="column content">
                <div className="box-flex movie-title">
                  <div className="title line-ellipsis v2dimax_title"> { item.nm } </div>
                  <span className="version v2d imax"></span>
                </div>
                <div className="detail column">
                  <div className="wantsee line-ellipsis">
                    <span className="person"> { item.wish } </span>
                    <span className="p-suffix">人想看</span>
                  </div>
                  <div className="actor line-ellipsis">
                    主演: { item.star } 
                  </div>
                  <div className="show-info line-ellipsis">
                  { item.showInfo } 
                  </div>
                </div>
              </div>
              <div className="button-block" data-id="342773">
                <div className={ item.globalReleased && 'btn normal' || "btn pre"} data-id="342773">
                  <span className="fix" data-bid="dp_wx_home_movie_btn">
                    { item.globalReleased && '购票' || '预售' }
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> )
        }
        // return movieList && movieList.map( item => <div className="item" data-id="342773" data-bid="dp_wx_home_movie_list" key= { item.id }>
        //     <div className="main-block">
        //     <div className="avatar" sort-flag="">
        //       <div className="default-img-bg">
        //         <img
        //           src= { item.img.replace('w.h','128.180') } 
        //         />
        //       </div>
        //     </div>
        //     <div className="mb-outline-b content-wrapper">
        //       <div className="column content">
        //         <div className="box-flex movie-title">
        //           <div className="title line-ellipsis v2dimax_title"> { item.nm } </div>
        //           <span className="version v2d imax"></span>
        //         </div>
        //         <div className="detail column">
        //           <div className="wantsee line-ellipsis">
        //             <span className="person"> { item.wish } </span>
        //             <span className="p-suffix">人想看</span>
        //           </div>
        //           <div className="actor line-ellipsis">
        //             主演: { item.star } 
        //           </div>
        //           <div className="show-info line-ellipsis">
        //           { item.showInfo } 
        //           </div>
        //         </div>
        //       </div>
        //       <div className="button-block" data-id="342773">
        //         <div className={ item.globalReleased && 'btn normal' || "btn pre"} data-id="342773">
        //           <span className="fix" data-bid="dp_wx_home_movie_btn">
        //             { item.globalReleased && '购票' || '预售' }
        //           </span>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div> )
    }

  render() {
    return (
      <Fragment>
        { this.renderList() }
      </Fragment>
    );
  }

}
