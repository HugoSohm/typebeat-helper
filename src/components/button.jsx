import {BoltIcon} from "@heroicons/react/24/outline/index.js";
import PropTypes from "prop-types";
import {Loader} from "./loader.jsx";

export const Button = ({ loader, onClick }) => {
    return (
        <button onClick={onClick} className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center">
                Download & analyze { loader ? <Loader/> : <BoltIcon aria-hidden="true" strokeWidth="1.5" className="size-4 ml-1"/> }
            </span>
        </button>
    )
}

Button.propTypes = {
    loader: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}