import cake from './img/0ca997c54a308ae8bd5d92fcdc68571b.jpg';
import './Hero.css';


const Hero = () => {
    const person = {
        name: 'Adamu Toba Princess',
        age: 21,
        marriage: false,
        occupation: 'caterer',
        income: 75000
    }




    return (
        <>
            <div className="wrapper">
                <div className="txt-are">
                    <h1>Have  your best bite yet!!!</h1>
                    <p>
                        we have the best bakes with intercontinential experience in making
                        cakes that fits every occasion, including funerals.
                    </p>

                </div>
                // <img src={cake} alt="cake" />
            </div>
            <h1>{3+4}</h1>
            <div className='bst-cat'>
                <h2>caterer of the month</h2>
                <p>Our caterer of the month is {person.name}, and s/he is {person.age} year old. she is currently {person.marriage? <span>Marriage</span>:<span>Single</span>} </p>

            </div>
        </>





    );
};

export default Hero;