import { Link } from "react-router-dom"

export default function Cart({
    handleViewCart,
    Foods,
    handleDelete,
    foodData
}) {
    return (
        <>
            <div className='m-5'>

                <div className="w-11 mx-3  text-red-600">

                    <svg onClick={handleViewCart} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-left"
                        viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>

                </div>
                <div>
                    <form className="text-center">
                        <input className=" text-center rounded-2xl w-72 m-2 h-8 p-2 bg-slate-900" placeholder="search..." type="text" />
                    </form>
                </div>
                <div className="my-4">

                    <ul className="grid grid-flow-col lg:overflow-hidden lg:flex lg:justify-center lg:justify-around md:justify-center md:justify-around md:overflow-hidden overflow-x-scroll gap-4">

                        {
                            foodData[0].map(myFood => {
                                return (

                                    <li key={myFood.id} className="p-2 rounded-2xl text-xs bg-red-600 text-white font-bold  text-center w-16 name">
                                        <Link to={'profile'} state={
                                            {
                                                title: myFood.title,
                                                name: myFood.name,
                                                img: myFood.img,
                                                section: foodData
                                            }
                                        }>
                                            {myFood.title}
                                        </Link>
                                    </li>

                                )
                            })
                        }

                    </ul>


                </div>
                <h1 className='font-bold text-2xl'>List of food in cart</h1>

                {Foods.length > 0 ?
                    Foods.map(foods => {
                        return (
                            <div className='p-2 my-3 h-40 bg-slate-950  rounded-lg grid grid-flow-col' key={foods.id}>
                                <div className="w-40  aspect-w-10 aspect-h-4 md:aspect-h-2">
                                    <img className='rounded-lg object-cover inset-0 w-full h-full' src={foods.img} alt="" />
                                </div>

                                <div className="mx-2 h-20 flex justify-between my-auto">
                                    <div className="my-3">
                                        <h1 className="bg-red-600 text-white font-bold w-fit px-2 rounded-xl text-sm">Oder {foods.id}</h1>
                                        <h1 className="m-1 font-semibold">{foods.title ? foods.title : 'No Title'}</h1>
                                    </div>
                                    <button
                                        onClick={() => handleDelete(foods.id)}
                                        className='border-red-600  my-auto border-2 hover:font-bold rounded-2xl text-red-600 font-semibold p-2'>
                                        Delete</button>
                                </div>
                            </div>
                        )

                    }) : (<div className='text-center text-3xl text-slate-600 font-bold m-10'>
                        <h1>
                            No Cart Iterm...
                        </h1>
                    </div>)
                }
            </div>
        </>
    )
}