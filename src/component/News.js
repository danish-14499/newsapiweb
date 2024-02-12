import React, { Component } from 'react'
import { useEffect } from 'react';
import Newsitem from './Newsitem'
import Navbar from './Navbar';
import Loding from './Loding';
import InfiniteScroll from "react-infinite-scroll-component";

export class news extends Component {
   
  constructor() {
    super();
    this.state = {
      articles:[],
      loding:false,
      page:1,
      totalResults:0 
    }
  }
  urlfunction=async()=>{
    let Url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=dbb49da1fd3847b8a919cd04daaa2fc8&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({loding:true})
    let data=await fetch(Url);
     let parsedata=await data.json();
    
     this.setState({articles:parsedata.articles,totalResults:parsedata.totalResults,loding:false})

  }
 async componentDidMount(){

     this.urlfunction();
  }
  previousbtn=async()=>{
    this.setState({page:this.state.page-1})
    this.urlfunction();
  
}

nextbtn=async()=>{

  this.setState({page:this.state.page+1});
  this.urlfunction();
 
}
//  fetchMoreData=async()=>{
//   this.setState({page:this.state.page+1});
//     let Url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=dbb49da1fd3847b8a919cd04daaa2fc8&page=${this.state.page}&pageSize=${this.props.pagesize}`;
//     this.setState({page:this.state.page+1});
    
//     this.setState({loding:true})
//     let data=await fetch(Url);
//      let parsedata=await data.json();
    
//      this.setState({articles:this.state.articles.concat(parsedata.articles),totalResults:parsedata.totalResults,loding:false})
//  }
  render() {

    return (
      <div className='container mt-3 '>
        <h1 className='d-flex justify-content-center my-2 shadow-sm p-3 mt-5' >Daily India News- {this.props.category}</h1>
        {this.state.loding && <Loding/>}
       
         
        <div className='row my-6'>
          {!this.state.loding && this.state.articles.map((ele)=>{
             return <div className='col-md-4 my-4'key={ele.url}>
              <Newsitem  title={ele.title?ele.title:""} description={ele.description?ele.description:""} imgurl={ele.urlToImage?ele.urlToImage:"https://ichef.bbci.co.uk/news/1024/branded_news/13EB/production/_132499050_withpirates.jpg"} newsurl={ele.url} publishedAt={ele.publishedAt} />
              </div>
          })}
          
          
        </div>
        
       
        <div className='d-flex justify-content-evenly my-4'>
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.previousbtn}>Previous</button>
        <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)} className="btn btn-dark" onClick={this.nextbtn}>Next</button>
        </div>
      </div>
    )
  }
}

export default news
