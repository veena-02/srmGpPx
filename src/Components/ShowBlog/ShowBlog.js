import React,{useState} from 'react';
import img1 from './../../Assets/neuralinkImg.jpg';
import {NavLink} from 'react-router-dom';
import BlogPageNavbar from './../BlogPageNavbar/BlogPageNavbar';
import {Media} from 'reactstrap';

function ShowBlog() {

    const [blogItems,setBlogItems] = useState([
        {
            id: 1,
            heading:'The Mystery Behind the cosmos',
            description:'This is an example description, dont take it so seriously.',
            author:'Mr. xyz',
            minRead: '5 min',
            img:"https://source.unsplash.com/random/70x70"
        },
        {
            id: 2,
            heading:'The Mystery Behind the cosmos',
            description:'This is an example description, dont take it so seriously.',
            author:'Mr. xyz',
            minRead: '5 min',
            img:"https://source.unsplash.com/random/70x70"
        },
        {
            id: 3,
            heading:'The Mystery Behind the cosmos',
            description:'This is an example description, dont take it so seriously.',
            author:'Mr. xyz',
            minRead: '5 min',
            img:"https://source.unsplash.com/random/70x70"
        },
        {
            id: 4,
            heading:'The Mystery Behind the cosmos',
            description:'This is an example description, dont take it so seriously.',
            author:'Mr. xyz',
            minRead: '5 min',
            img:"https://source.unsplash.com/random/70x70"
        },
        {
            id: 5,
            heading:'The Mystery Behind the cosmos',
            description:'This is an example description, dont take it so seriously.',
            author:'Mr. xyz',
            minRead: '5 min',
            img:"https://source.unsplash.com/random/70x70"
        },
        {
            id: 6,
            heading:'The Mystery Behind the cosmos',
            description:'This is an example description, dont take it so seriously.',
            author:'Mr. xyz',
            minRead: '5 min',
            img:"https://source.unsplash.com/random/70x70"
        },
        {
            id: 7,
            heading:'The Mystery Behind the cosmos',
            description:'This is an example description, dont take it so seriously.',
            author:'Mr. xyz',
            minRead: '5 min',
            img:"https://source.unsplash.com/random/70x70"
        },
        
    ])
    const blogs=blogItems.map(blogItem =>{
        return(
            <div key={blogItem.id} className="col-12">
                <NavLink to="#" style={{textDecoration:'none',color:'black'}}>
                <Media tag="li">
                    <Media left middle>
                        <Media object src={blogItem.img} alt={blogItem.heading} />
                    </Media>
                    <Media body className="ml-3">
                        <Media heading>{blogItem.heading}</Media>
                        <p>{blogItem.description}</p>
                    </Media>
                </Media>
                </NavLink>
            </div>
        )
    });
    return (
        <>
        <BlogPageNavbar />
        <div className="container-md">
            <div className="row">
                <div className="col-md-5 col-sm-8 col-12">
                    <div className="card" style={{"width": "18rem;"}}>
                        <img className="card-img-top" src={img1} alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text">Author Name    </p>
                            <h5 className="card-title">Blog title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p className="text-secondary"><NavLink to="#" className="a" style={{fontSize:"17px"}}>Read more </NavLink> <span> 5 min read</span></p>
                        </div>
                    </div>
                    <br/>
                    {blogs}
                </div>
                <div className="col-md-5 col-sm-12 col-12 order-sm-last order-md-second">
                    
                    <Media list>{blogs}</Media>

                </div>   
                <div className="col-md-2 col-sm-4 d-none d-sm-block order-sm-second order-md-last" style={{borderLeft:'1px solid #dddddd'}}>
                    <div className="mt-0 mb-3 text-right" style={{fontWeight:"500"}}>Pages to follow</div>
                    <div className="text-right"><img src="https://source.unsplash.com/random/100x100"></img><br/><div className="btn btn-success mt-2 mb-2 ">Follow</div></div><br/>
                    <div className="text-right"><img src="https://source.unsplash.com/random/100x100"></img><br/><div className="btn btn-success mt-2 mb-2 ">Follow</div></div><br/>
                    <div className="text-right"><img src="https://source.unsplash.com/random/100x100"></img><br/><div className="btn btn-success mt-2 mb-2 ">Follow</div></div><br/>
                    <div className="text-right"><img src="https://source.unsplash.com/random/100x100"></img><br/><div className="btn btn-success mt-2 mb-2 ">Follow</div></div><br/>
                   <div><NavLink to="#" style={{textDecoration:'none', color:'black',fontWeight:'bold'}}> More..</NavLink></div>
                </div>  
            </div> 
        </div>
        </>
    )
}

export default ShowBlog;
