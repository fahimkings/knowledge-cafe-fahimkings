import React from 'react';
import './SingleBlog.css';
const SingleBlog = (props) => {
    // console.log(props);
    // console.log(props.blog);
    // handle blog
    // const handleAddToBlog = (blog) => {
    //     console.log(blog);
    // }
    // console.log(props.handleAddToBlog);
    const handleAddToBlog = props.handleAddToBlog;
    const { id, image,author_name,title,author_image,date,read_time} = props.blog;
    return (
        <div className="card w-full h-[820px] bg-base-100 shadow-xl my-4">
            <figure><img className="h-[450px] w-full rounded-md bg-custom-image" src={image} alt="Shoes" /></figure>
            <div className="flex my-4 mx-2 gap-24 justify-between">
                <div className="flex justify-center gap-2">
                    <img className="w-10 rounded-full" src={author_image} alt="" />
                    <div>
                        <p>{author_name}</p>
                        <p>{date}</p>
                    </div>
                </div>
                <div className="">
                    <p className="">{read_time} min read</p>
                </div>
            </div>
            <div className="pl-2">
                <p className="font-bold text-3xl">{title}</p>
                <p className="my-4">
                    <span>#beginner</span>
                    <span>#programming</span>
                </p>
                <p className="underline underline-offset-3 my-4" href="" onClick={()=>handleAddToBlog(props.blog)}>Mark as read</p>
            </div>
        </div>
    );
};

export default SingleBlog;