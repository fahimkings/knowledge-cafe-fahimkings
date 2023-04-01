import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import { toast } from 'react-toastify';

const Blogs = () => {
    const [data, setData] = useState([]);
    const [readTime, setReadTime] = useState(0);
    const [bookMarked, setBookMarked] = useState([]);
    const [isClicked, setClicked] = useState(false);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data =>setData(data));
    }, [])

    const handleAddToBlog = (blog) => {
        // console.log(blog.read_time);
        const newReadTime = readTime + blog.read_time;
        setReadTime(newReadTime);
        if (!isClicked) {
            let bookMark = [...bookMarked, blog]
            setBookMarked(bookMark) 
            setClicked(true)
        } else {
            toast.success("Already Bookmark", {
                position: toast.POSITION.TOP_CENTER,
                className: "bg-slate-50 w-[300px] h-[100px] text-3xl"
            }
            );
        }
 
    }
    return (
        // blogs info
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 mx-32 my-4 relative">
            
            <div className="w-[600px] h-[821px] m-">
                {
                    // data.map(blog=>console.log(blog))
                    data.map(blog => <SingleBlog
                        key={blog.id}
                        blog={blog}
                        handleAddToBlog={handleAddToBlog}
                    
                    ></SingleBlog>)
                }
            </div>

            <div className="ml-[100px] w-[313px] right-0 absolute">
                <h1 className="h-[38px] p-2 my-4 border bg-slate-200 text-center">Spent time on read :{readTime}min</h1>
                <div className="bg-slate-200">
                    <h1 className="h-[38px] p-2 border text-center">Bookmarked Blogs :{bookMarked.length}</h1>
                    {
                        bookMarked.map(book => <li>{ book.title}</li>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;