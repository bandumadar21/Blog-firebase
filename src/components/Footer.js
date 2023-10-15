import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="bg-light text-center text-lg-start">
             
                <div className="text-center p-3" style={{backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
                    © 2023 Copyright:
                    <Link className="text-dark " href="/" style={{textDecoration:'none'}}>Blog-Madar</Link>
                </div>

            </footer>
        </div>
    )
};

export default Footer
