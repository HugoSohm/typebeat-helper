import {Transition} from "@headlessui/react";
import {CheckCircleIcon} from "@heroicons/react/24/outline/index.js";
import {XMarkIcon} from "@heroicons/react/20/solid/index.js";
import PropTypes from "prop-types";

export const SuccessToast = ({ showSuccess, onClose }) => {
    return (
        <div
            aria-live="assertive"
            className="pointer-events-none fixed inset-0 flex items-start justify-center px-4 py-2 sm:items-start sm:p-2"
        >
            <div className="flex w-52 flex-col items-center space-y-2 sm:items-start">
                <Transition show={showSuccess}>
                    <div
                        className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5 transition data-[closed]:data-[enter]:-translate-y-2 data-[enter]:transform data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:data-[enter]:sm:translate-x-2 data-[closed]:data-[enter]:sm:translate-y-0">
                        <div className="p-4">
                            <div className="flex items-start">
                                <div className="shrink-0">
                                    <CheckCircleIcon aria-hidden="true" className="size-6 text-green-400"/>
                                </div>
                                <div className="ml-3 w-0 flex-1 pt-0.5">
                                    <p className="text-sm font-medium text-gray-900">Copied !</p>
                                </div>
                                <div className="ml-4 flex shrink-0">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        <span className="sr-only">Close</span>
                                        <XMarkIcon aria-hidden="true" className="size-5"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    )
}

SuccessToast.propTypes = {
    showSuccess: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};