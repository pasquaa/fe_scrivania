import { useState } from "react";
import { Link } from "react-router-dom";
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';

export const Registrazione = () => {

    const [open, setOpen] = useState(false)

    //handle toggle
    const toggle = () => {
        setOpen(!open)
    }

    {/*Setto la zona per il memorizzamento dei dati del form*/}
    const [form,setForm] = useState({
        name: "",
        surname: "",
        username: "",
        email: "",
        phone: "",
        password: ""
    })

    return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        
        <h1 className="text-3xl mt-20 leading-6 font-bold text-gray-900 text-center mb-6 leading-8">New customer, welcome!</h1>


            {/*Da implementare controllo obbligatorio con colori*/}

            {/*Nome*/}
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">                                               
                <form className="space-y-4" action="#" method="POST">
                    <div>
                        <label form="text" className="block text-sm font-medium leading-6 text-gray-900">Name*</label>
                        <div className="mt-2">
                            <input 
                            id="name" 
                            name="name" 
                            type="text" 
                            required 
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                            onChange={(event) => {
                                const val = event.target.value;
                                setForm({...form,name: val});
                            }}>

                            </input>
                        </div>
                    </div>

                    {/*Cognome*/}
                    <div>
                        <div className="flex items-center justify-between">
                            <label form="text" className="block text-sm font-medium leading-6 text-gray-900">Surname*</label>
                        </div>
                        <div className="mt-2">
                            <input 
                            id="surname" 
                            name="surname" 
                            type="text" 
                            required 
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                            onChange={(event) => {
                                const val = event.target.value;
                                setForm({...form,surname: val});
                            }}>

                            </input>
                        </div>
                    </div>

                    {/*Username da verificare che sia univoco (database)*/}
                    <div>
                        <div className="flex items-center justify-between">
                            <label form="text" className="block text-sm font-medium leading-6 text-gray-900">Username*</label>
                        </div>
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

                    {/*Email da controllare che non sia già nel database, se si far spuntare messaggio in più controlla che non scriva sopra l'immagine*/}
                    <div>
                        <div className="flex items-center justify-between">
                            <label form="email" className="block text-sm font-medium leading-6 text-gray-900">Email*</label>
                        </div>
                        <div className="mt-2 relative">

                            <div className="text-2xl absolute top-1.5 left-3">
                                <MdEmail />
                            </div>
                            
                            <input 
                            id="email" 
                            name="email" 
                            type="email" 
                            required
                            className="pl-11 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                            onChange={(event) => {
                                const val = event.target.value;
                                setForm({...form,email: val});
                            }}>

                            </input>

                            
                        </div>
                    </div>


                    {/*Implementa il controllo caratteri (1 maiuscola, 1 numero, 1 speciale, più di 8 caratteri) */}
                    <div>
                        <div className="flex items-center justify-between">
                            <label form="pwd" className="block text-sm font-medium leading-6 text-gray-900">New Password*</label>
                        </div>
                        <div className="mt-2 relative">
                            <input 
                            id="pwd" 
                            name="pwd" 
                            type={(open===false)? 'password' : 'text'}
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                            onChange={(event) => {
                                const val = event.target.value;
                                setForm({...form,password: val});
                            }}>

                            </input>

                            <div className="text-2xl absolute top-1.5 right-5">
                            {
                                (open===false)? <AiFillEye onClick={toggle}/>:
                                <AiFillEyeInvisible onClick={toggle}/>
                            }
                            </div>


                        </div>
                    </div>
                    

                    
                    {/*Bottone registrati e salva file sul database*/}
                    <div>
                        <button type="submit" className="mt-9 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                    </div>

                </form>

                <p class="mt-12 text-center text-sm text-gray-500 mb-5">
                    Already registered?
                    <Link to="/" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Log in here</Link>
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