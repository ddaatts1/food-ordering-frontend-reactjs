
import './Navbar.css'

const Navbar = () => {

    return (
        <div className="Navbar">
            <div className='Name'>
                <span>OrderUp!</span>
            </div>
            <div className='Searchbox'>
                <div>
                    <input type={"text"} placeholder={"search"}></input>
                </div>
            </div>
        </div>
    )

}

export default Navbar; 