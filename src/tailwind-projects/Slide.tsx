import Slideeight from "./slide-components/Slideeight";
import Slidefive from "./slide-components/Slidefive";
import Slidefour from "./slide-components/Slidefour";
import Slidenine from "./slide-components/Slidenine";
import Slideone from "./slide-components/Slideone"
import Slideseven from "./slide-components/Slideseven";
import Slidesix from "./slide-components/Slidesix";
import Slidethree from "./slide-components/Slidethree";
import Slidetwo from "./slide-components/Slidetwo"

export const Slide = () =>{
    return(
        <div className="flex flex-col">

       
        <Slideone></Slideone>
        <Slidetwo></Slidetwo>
        <Slidethree></Slidethree>
        <Slidefour></Slidefour>

        <Slidefive></Slidefive>


        <Slidesix></Slidesix>


        <Slideseven></Slideseven>
        <Slideeight></Slideeight>
        <Slidenine></Slidenine>




        
</div>
    );
};
export default Slide;