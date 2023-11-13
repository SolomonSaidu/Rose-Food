import Star from "./star"
import Adds from "./adds"
import './App.css'
import { Link, useLocation } from "react-router-dom"


export default function Profile({
    profile,
    handelProfile,
    section1,
}) {
    const location = useLocation()
    const { title, name, img, section, AddFoodToCart } = location.state
    const random = Math.floor(Math.random() * 2) + 0;

    return (
        <div className="mx-auto mt-4">
            <div className=" text-left m-2 flex justify-between">
                {/*  Food name in profile : */} <h1 className="font-bold text-xl my-2 flex">{name}</h1>
                {/* Go back icon */}
                <Link to={'/'}>
                    <div className=" text-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi w-9 bi-arrow-left"
                            viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                    </div>
                </Link>
            </div>
            {/* This is the profile image */}
            <div className=" relative aspect-w-5 lg:aspect-h-1 aspect-h-3">
                <img className="object-cover inset-0 h-full w-full rounded-lg" src={img} alt={img} />
            </div>
            <div className="text-center p-2">
                <h1 className="font-bold text-2xl">
                    {title}
                </h1>
            </div>
            {/* This is the Stars... */}
            <div className="m-4 flex gap-4 justify-center">
                <Star isTrue={false} />
                <Star isTrue={false} />
                <Star isTrue={false} />
                <Star isTrue={false} />
                <Star isTrue={false} />
            </div>

            <div className="text-center">
                <div className="grid mx-auto md:w-96 ">
                    <span className=" m-2 text-center text-lg font-bold">${Math.floor(Math.random() * 589) + 100}</span>
                    <p className="text-slate-400 p-2 text-center">
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio sapiente tenetur ipsamdicta ad nostrum vitae nihil porro, minus laudantium."
                    </p>
                </div>
            </div>
            <h1 className='lg:mx-20 md:mx-4 mx-4 my-2 text-xl font-bold border-b-2 p-2 border-slate-800 '>More food</h1>
            <div className='grid grid-flow-col overflow-x-scroll lg:overflow-hidden gap-4 mb-10 lg:justify-center lg:flex'>
                {/* rendering the foods in Rows */}
                {
                    section[random].map(food => {
                        return (
                            <div className='p-2 w-32 grid mx-0 justify-between' key={food.id}>

                                <Link to='/profile' state={
                                    {
                                        title: food.title,
                                        name: food.name,
                                        img: food.img,
                                        section: section,

                                    }
                                }>
                                    <div className=" aspect-w-4 aspect-h-4">
                                        <img className='rounded-lg object-cover inset-0 w-full h-full' src={food.img} alt={food.img} />
                                    </div>
                                </Link>

                                {/* <h1>{food.id}</h1> */}
                                <div className=" text-center">
                                    <h3 className='font-semibold inline-flex'>{food.title}</h3>
                                    <p className='text-slate-400 font-semibold flex gap-1 text-xs'>
                                        ${Math.floor(Math.random() * 589) + 100}
                                        <span datatype="star rating" className="flex">
                                            {/* this creating a random number for the likes */}
                                            | {Math.floor(Math.random() * 189) + 10}k+Likes<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-star p-0 text-yellow-400" viewBox="0 0 16 16"> <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" /> </svg>
                                        </span>
                                    </p>
                                    <button onClick={() => AddFoodToCart} className='border-2 m-2 text-white focus:bg-white focus:text-red-600 bg-red-600 text-xs font-bold p-1 rounded-xl border-red-600 w-20' >Add cart</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <div>
                <Adds />
            </div>
        </div >
        // <div>
        //     <h1>{title}</h1>
        //     <Link to={'/'}>back</Link>
        // </div>
    )
}