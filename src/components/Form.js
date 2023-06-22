import { useState } from "react";
export const Form = () => {

    {/*Setto la zona per il memorizzamento dei dati del form*/}
    const [form,setForm] = useState({
        username: "",
        password: ""
    })

    return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        {/*Stabiliamo titolo e sottotitolo agganciandoci alla pagina UIHeader per styling*/}
        <h1 className="text-3xl mt-20 leading-6 font-bold text-gray-900 text-center mb-6 leading-8">WELCOME TO THE MOBILE DESK!</h1>
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-medium leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>



            {/*Si crea il form con la casella per inserire il primo nome*/}
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">                                               {/* mt-4 py-4 space-y-7 w-80     */}
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label form="text" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                        <div className="mt-2">
                            <input 
                            id="username" 
                            name="username" 
                            type="text" 
                            required 
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                            onChange={(event) => {
                                const val = event.target.value;
                                setForm({...form,username: val});
                            }}>

                            </input>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input 
                            id="password" 
                            name="password" 
                            type="password" 
                            autoComplete="current-password" 
                            required 
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                            onChange={(event) => {
                                const val = event.target.value;
                                setForm({...form,password: val});
                            }}>

                            </input>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Apply Desk</button>
                    </div>

                </form>

                <p class="mt-12 text-center text-sm text-gray-500 mb-5">
                    Not registered?
                    <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Register here</a>
                </p>
                

            </div>


        {/*Box che si stabilirà in fondo per il controllo e il successivo memorizzamento dei dati in un database*/}
        <div className="my-4 bg-blue-800 text-white font-bold text-sm p-4 rounded-md shadow-md">
            <pre>
                <code>{JSON.stringify(form,undefined,2)}</code>
            </pre>
        </div>


    </div>
    );
};