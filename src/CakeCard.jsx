import './Order.css'
const CakeCard = (props) =>{
    return(
        <div className='card'>
        <img src ={props.src} alt ="cake" />
                <h2>{props.name}</h2>
    <p>{props.descrip}</p>
    <p>{props.price}</p>
    <button>Order Now</button>
        </div>
    )
}
export default CakeCard;