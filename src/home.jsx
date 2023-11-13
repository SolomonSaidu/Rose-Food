import React, { useState, useMemo } from "react"
import Profile from "./profile"
import Adds from "./adds"
import Menu from "./menu"
import RoseLogo from '/roseSm1.png'
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Route, Routes } from "react-router-dom"
import NewPage from "."

export default function Home({
    handleViewCart,
    Foods,
    foodData,
    AddFoodToCart,
    handelLogIn
}) {
    let [profile, setProfile] = useState({
        img: 'img...',
        name: 'foods...'
    })

    let RtCount = Math.floor(Math.random() * 100) + 1
    let [rate, setRate] = useState(RtCount)


    let foodRate = useMemo(() => {
        return rate
    }, [rate])

    let handelProfile = (img, name) => {
        // setViewProfile(prevVeiw => !prevVeiw)
        setProfile(prevProfile => ({
            ...prevProfile,
            img: img,
            name: name
        }))

    }
    let log = () => {
        console.log('work')
    }

    // this is the render for the section one
    const section1 = foodData[0].map(food => {
        return (
            <div className='p-2 w-32 grid mx-0 justify-between' key={food.id}>
                <Link to={{
                    pathname: 'profile',
                    data: {
                        AddFoodToCart: log
                    }
                }} state={
                    {
                        title: food.title,
                        name: food.name,
                        img: food.img,
                        section: foodData,
                        // 
                    }
                }
                >
                    <div className=" aspect-w-4 aspect-h-4">
                        {
                            <img className='rounded-lg object-cover inset-0 w-full h-full' src={food.img} alt={food.img} />
                            || <Skeleton />
                        }
                    </div>
                </Link>
                <div className=" text-center">
                    <h3 className='font-semibold inline-flex'>{food.title}</h3>
                    <p className='text-slate-400 font-semibold flex gap-1 text-xs'>
                        $300.00
                        <span datatype="star rating" className="flex">
                            | {foodRate + food.id * 30}k+<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-star p-0 text-yellow-400" viewBox="0 0 16 16"> <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" /> </svg>
                        </span>
                    </p>
                    <button className='border-2 m-2 text-white focus:bg-white focus:text-red-600 bg-red-600 text-xs font-bold p-1 rounded-xl border-red-600 w-20' onClick={() => AddFoodToCart(food.img, food.name, food.title)}>Add cart</button>
                </div>
            </div>
        )
    })

    // this is the render for the section two 
    const section2 = foodData[1].map(food => {
        return (
            <div className='p-2 w-32 grid mx-0 justify-between' key={food.id}>
                <Link to='/profile' state={
                    {
                        title: food.title,
                        name: food.name,
                        img: food.img,
                        section: foodData
                    }
                }>
                    <div className=" aspect-w-4 aspect-h-4">
                        <img className='rounded-lg object-cover inset-0 w-full h-full' src={food.img} alt={food.img} />
                    </div>
                </Link>
                <div className=" text-center">
                    <h3 className='font-semibold inline-flex'>{food.title}</h3>
                    <p className='text-slate-400 font-semibold flex gap-1 text-xs'>
                        $300.00
                        <span datatype="star rating" className="flex">
                            | {foodRate + food.id * 30}k+<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-star p-0 text-yellow-400" viewBox="0 0 16 16"> <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" /> </svg>
                        </span>
                    </p>
                    <button className='border-2 m-2 text-white focus:bg-white focus:text-red-600 bg-red-600 text-xs font-bold p-1 rounded-xl border-red-600 w-20' onClick={() => AddFoodToCart(food.img, food.name, food.title)}>Add cart</button>
                </div>
            </div>
        )
    })

    return (
        <>
            {
                (
                    <>

                        {/* header */}
                        <div className='header h-64 grid  align-middle rounded-b-3xl mb-10'>
                            <div className='p-2 flex justify-between'>
                                <div className="menuBar w-14  text-white ">
                                    <span className="flex p-1 px-2  text-center justify-center text-xs bg-red-600 text-white rounded-full absolute">{Foods.length}</span>
                                    <svg onClick={handleViewCart} className='' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                        <path className="opacity-60"
                                            d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                                    </svg>
                                </div>
                                <div className=" h-14 mx-4">
                                    <img className="mt-2 h-8" src={RoseLogo} alt="" />
                                </div>
                            </div>

                            <div className=" h-20 flex justify-center ">
                                <img className="mt-2 h-20" src={RoseLogo} alt="" />
                            </div>
                            <div className='text-center my-  p-0 h-fit'>
                                <h1 className='text-white font- p-0 text-3xl font-light'>RoseFoods<br />Best American Meals</h1>
                            </div>
                        </div>

                        {/* section one... */}
                        <section >
                            <h1 className='lg:mx-20 md:mx-4 mx-4 my-2 text-xl font-bold border-b-2 p-2 border-slate-800 '>Five Star Category</h1>
                            <div className='grid grid-flow-col md:overflow-x-scroll overflow-x-scroll lg:overflow-hidden gap-1 mb-10 lg:justify-center lg:flex'>

                                {
                                    section1
                                }
                            </div>
                        </section>

                        {/* section two... */}
                        <section>
                            <h1 className='lg:mx-20 md:mx-4 mx-4 my-2 text-xl font-bold border-b-2 p-2 border-slate-800 '>New Category</h1>
                            <div className='grid grid-flow-col overflow-x-scroll lg:overflow-hidden gap-1 mb-10 lg:justify-center lg:flex'>

                                {
                                    section2
                                }

                            </div>
                        </section>

                        <Adds />

                    </>
                )
            }

        </>
    )
}

