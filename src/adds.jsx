import BroImg from '/brothers-1.jpg'
import PizzaAdd from '/RoseFlyer-1.jpg'

export default function Adds() {
    return (
        <>
            <div className='item-center m-10'>
                <div className='  flex justify-center m-5'>
                    <img className='rounded-lg w-96 inset-0 object-cover' src={PizzaAdd} alt="" />
                </div>
                <div className='text-center text-slate-400 w-full flex justify-center font-extralight'>
                    <p className='w-80'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Molestias odio dolor nisi, quisquam voluptate iusto nam
                        neque ipsa eveniet fuga magni aut nemo laborum,
                        commodi tempore facere molestiae! Adipisci, quasi?
                    </p>
                </div>
                <div className='text-slate-400 grid text-center justify-center my-2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" /> </svg>
                </div>
                <div className='text-slate-400 grid text-center text-xs cursor-pointer'>
                    <p>copy write©</p>
                    <p>powered by Flex</p>
                </div>
            </div>
        </>
    )
}