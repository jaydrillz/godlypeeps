import { useState } from "react"
import CakeCard from "./CakeCard";

const OrderNow =() =>{

const [count, setName] = useState(0)
  
    

    const increase=()=>{
        setName(count + 1)
    }
    const decrease=()=>{
        setName(count -1)
        }







return (
    <div className="or-page">
    <CakeCard
     price = '$50.00'
    name = "sweet cake"
    descrip ="sweet cake from wisconsin"
    src ={require('./img/download.jpeg')}
   />
    <CakeCard 
    price = '$60.00'
    name ="The queens cake"
    descrip ="Sweet cake from south london"
    src ={require('./img/download (2).jpeg')}
    />
    <CakeCard  
    price = '$70.00'
    name ="The wizard cake"
    descrip="sweet cake from hogwart"
    src ={require('./img/download (1).jpeg')}
    
     
        />

<div>
<h1 style={{color:count>=35?"blue":"white"}}>{count}</h1>
<button onClick={increase}>+</button>
<button onClick={decrease}>-</button>
</div>


</div>

    );
};
export default OrderNow;