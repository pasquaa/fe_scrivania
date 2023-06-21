import { useState } from "react";
import { UiHeader } from "./ui/UIHeader";
import { UiInput } from "./ui/UIInput";
import { UiButton } from "./ui/UIButton";

export const Form = () => {

    {/*Setto la zona per il memorizzamento dei dati del form*/}
    const [form,setForm] = useState({
        firstName: "",
        lastName: ""
    })

    return (
    <div>
        {/*Stabiliamo titolo e sottotitolo agganciandoci alla pagina UIHeader per styling*/}
        <h3 className="text-xl leading-6 font-medium text-gray-900 text-center mb-1">Form</h3>
        <form className="space-y-6">
            <UiHeader 
                title="Profilo"
                subtitle="ciccio patata"
            />




            {/*Si crea il form con la casella per inserire il primo nome*/}
            <div className="mt-4 py-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">

                <UiInput 
                    id="firstname" 
                    label="Firstname" 
                    value={form.firstName} 
                    onChange={(event) => {
                        const val = event.target.value;
                        setForm({ ...form, firstName: val });
                    }}
                />

                <UiInput 
                    id="lastname" 
                    label="Lastname" 
                    value={form.lastName}
                    onChange={(event) => {
                        const val = event.target.value;
                        setForm({ ...form, lastName: val });
                    }}
                />

            </div>

        </form>

        <div className="pt-5">
            <div className="flex justify-end">
                <UiButton 
                    title="Cancel" 
                    onClick={() => {
                        //alert("Cancel");
                    }}
                />

                <UiButton 
                    title="Save" 
                    onClick={() => {
                        //alert("Save");
                    }}
                    solid
                />

            </div>
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