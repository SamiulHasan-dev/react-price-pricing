import { useState } from "react";
import Link from "../Link/Link";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const routes = [{id: 1, name: 'Home', path: '/'},
    {id: 2, name: 'About', path: '/about'},
    {id: 3, name: 'Services', path: '/services'},
    {id: 4, name: 'Contact', path: '/contact'},
    {id: 5, name: 'NotFound', path: '*'}];

    return (
        <nav className="text-black bg-yellow-200 max-w-full">
            <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
                {
                    open == true ? 
                    <RxCross2></RxCross2> : 
                    <TiThMenu className=""></TiThMenu>
                }
            
            </div>
            <ul className={`md:flex absolute md:static duration-1000 ${open ? 'top-6' : '-top-60'} bg-yellow-200 p-5 `}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link> )
            }
            </ul>
        </nav>
    );
};

export default NavBar;