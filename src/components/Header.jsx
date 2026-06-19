import { useContext, useEffect, useState } from "react";
// sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
// import icons
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

export default function Header() {
    // header state
    const [isActive, setIsActive] = useState(false);
    const {isOpen, setIsOpen} = useContext(SidebarContext);
    const { itemAmount } = useContext(CartContext)
    // add a subtle divider + tighter padding once the user scrolls
    useEffect(() => {
        const handleScroll = () => setIsActive(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <header
            className={`${isActive ? "bg-paper/90 py-4 border-line shadow-sm" : "bg-paper/60 py-6 border-transparent"} fixed w-full z-30 border-b backdrop-blur-md transition-all duration-300`}
        >
            <div className="container mx-auto flex items-center justify-between px-4">
                <Link to={"/"} aria-label="Maison home" className="flex items-center">
                    <span className="font-display text-2xl sm:text-3xl font-semibold uppercase tracking-luxe text-ink">
                        Maison
                    </span>
                </Link>
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={`Open shopping bag, ${itemAmount} item${itemAmount === 1 ? "" : "s"}`}
                    className="relative flex items-center justify-center w-10 h-10 text-ink hover:text-sand-dark transition-colors duration-300"
                >
                    <BsBag className="text-[22px]"/>
                    <span className="absolute -right-1.5 -top-1.5 min-w-[18px] h-[18px] px-1 bg-ink text-paper text-[10px] font-semibold rounded-full flex justify-center items-center">
                        {itemAmount}
                    </span>
                </button>
            </div>
        </header>
    );
}
