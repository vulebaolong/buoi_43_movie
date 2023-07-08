import React from "react";
import UserNav from "./UserNav";

function Header() {
    return (
        <div className="shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)]">
            <div className="container h-20 flex justify-between items-center">
                <span className="text-2xl font-bold text-red-500">Cyberflix</span>
                <div className=""><UserNav /></div>
            </div>
        </div>
    );
}

export default Header;
