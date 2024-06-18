import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit} from 'react-icons/ai'
import { BsInfoCircleFill } from 'react-icons/bs'
import { MdOutlineAddBox,MdOutlineDelete } from 'react-icons/md'

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        axios
        .get('http://localhost:5000/api/books')
        .then((res)=>{
            setBooks(res.data.data);
            setLoading(false);
        }).catch((error)=>{
            console.log(error.message);
            setLoading(false);
        })
    },[]);
  return (
    <div className='p-4'>
        <div className='flex justify-between items-center'>
            <h1 className='text-3xl my-8'>Book List</h1>
            <Link to='/books/create'>
                <MdOutlineAddBox className='text-4xl text-blue-500'/>
            </Link>
        </div>
        {loading ?(
            <Spinner/>
        ):(
            <table className='w-full border-separate'>
                <thead>
                    <tr>
                        <th className='border border-slate-600 rounded-md'>No</th>
                        <th className='border border-slate-600 rounded-md'>Title</th>
                        <th className='border border-slate-600 max-md:hidden'>Author</th>
                        <th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book,index)=>(
                        <tr key={book._id} className='h-8'>
                            <td className='border border-slate-700 rounded-md text-center'>{index+1}</td>
                            <td className='border border-slate-700 rounded-md text-center'>{book.title}</td>
                            <td className='border border-slate-700 text-center max-md:hidden'>{book.author}</td>
                            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{book.publishYear}</td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                <Link to={`/books/shows/${book._id}`}>
                                    <BsInfoCircleFill className='text-2xl text-blue-500'/>
                                </Link>
                                <Link to={`/books/edit/${book._id}`}>
                                    <AiOutlineEdit className='text-2xl text-green-500'/>
                                </Link>
                                <Link to={`/books/delete/${book._id}`}>
                                    <MdOutlineDelete className='text-2xl text-red-500'/>
                                </Link>
                            </td>

                            
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>
  )
}

export default Home
