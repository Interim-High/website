import { ReactNode, JSX } from "react";

// Create a Container component that accepts children.
type Container = {
    children : ReactNode
}

  
const ContainerComponent= ({children} : Container) : JSX.Element =>{
    return (
            <div>
                <h1>This is a header</h1>
                <p>This is wher you can write paragarphs.</p>
                <form></form>
            </div>
    )
}

//Second Method 
export const Second : React.FC<Container> = ({children}) =>{
    return <><h1>
        This is second Header
        </h1>

        <p>This is a second part in where you can write a paragraph</p>
        
        </>
}
export default ContainerComponent;