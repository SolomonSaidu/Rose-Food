import { useRouteError } from "react-router-dom"
import { Link } from "react-router-dom"

export default function ErrorHandle() {
    let error = useRouteError
    console.error(error)
    return (
        <div className="grid justify-center text-center my-5">
            <h1 className="font-bold text-2xl text-red-600">Error</h1>
            <p className="font-semibold text-xl">sorry something happend  :(</p>
            <div className=" text-left">
                <li>You enter a wrong URL</li>
                <li>Check your internet connection</li>
            </div>
            <p>
                <li>
                    {error.statusText || error.message}
                </li>
            </p>
            <Link to={'/'}>
                <h3 className="p-2 border-2 border-white">
                    Go Home
                </h3>
            </Link>
        </div>
    )
}