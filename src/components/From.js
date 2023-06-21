import { UiHeader } from "./ui/UIHeader";

export const Form = () => {
    return (
    <div>
        <h3 className="text-xl leading-6 font-medium text-gray-900 text-center mb-1">Form</h3>
        <form className="space-y-6">
            <UiHeader 
                title="Profilo"
                subtitle="ciccio patata"
            />
            <div className="mt-4 py-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"></div>

        </form>
    </div>
    );
};