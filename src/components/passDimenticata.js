import { Link } from "react-router-dom";
import {MdEmail} from 'react-icons/md';
export const Dimenticata = () => {

    return (
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <h1 className="text-3xl mt-20 leading-6 font-bold text-gray-900 text-center mb-6 leading-8">Reset your password here</h1>
            <p className="text-center">Enter the email address linked to your account and we'll send you a reset link.</p>


            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">                                               
                <form className="space-y-4" action="#" method="POST">
                    <div>
                        <label form="email" className="block text-sm font-medium leading-6 text-gray-900">Insert your email</label>
                        <div className="mt-2 relative">
                            <div className="text-2xl absolute top-1.5 left-3">
                                <MdEmail />
                            </div>
                            <input 
                            id="email" 
                            name="emailRecupero" 
                            type="email" 
                            required 
                            placeholder="Write here your email"
                            className="pl-11 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </input>    
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send the email</button>
                    </div>


                </form>

                <p class="mt-8 text-center text-sm text-gray-500 mb-5">
                    Do you want to log in?
                    <Link to="/" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Log in here</Link>
                </p>
            </div>

        </div>
    );
}