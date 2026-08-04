import { useParams } from "react-router-dom";
function ServicePage(){
    const { serviceName } = useParams();
    return(
     <div  className="min-h-screen flex items-center justify-center">

        <h1 className="text-4xl font-bold">
            Service:{serviceName }
        </h1>
     </div>
    )
}
export default ServicePage