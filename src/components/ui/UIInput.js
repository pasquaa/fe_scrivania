export const UiInput = ({id,label,value,onChange}) => {
    return (
        <div className="col-span-3">

            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
            </label>

            <input 
                id={id} 
                name={id}
                type="text" 
                value={value}
                onChange={onChange}
                className="w-full border border-gray-300 rounded-md h-10 p-2 foucs:ring-indigo-500 focus:border-indigo-500"
            />
        </div>
    );
};