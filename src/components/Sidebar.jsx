// import link
import { Link } from "react-router-dom";
// import icons
import { IoMdArrowForward } from "react-icons/io"
import { FiTrash2 } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
// import components
import CartItem from "./CartItem";
// import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function Sidebar() {
    const { isOpen, handleClose } = useContext(SidebarContext);
    const { cart, clearCart, total, itemAmount } = useContext(CartContext);
    return (
        <>
            {/* backdrop */}
            <div
                onClick={handleClose}
                className={`${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} fixed inset-0 bg-ink/30 backdrop-blur-sm z-20 transition-opacity duration-300`}
            />
            <div className={`${isOpen ? "right-0" : "-right-full"} w-full bg-paper fixed top-0 h-full shadow-soft md:w-[38vw] xl:max-w-[32vw] transition-all duration-500 z-30 px-6 lg:px-10 flex flex-col`}>
                <div className="flex items-center justify-between py-7 border-b border-line">
                    <div className="text-xs uppercase tracking-luxe text-ink">
                        Shopping Bag <span className="text-sand-dark">({itemAmount})</span>
                    </div>
                    <button type="button" onClick={handleClose} aria-label="Close shopping bag" className="cursor-pointer w-9 h-9 flex justify-center items-center text-ink hover:text-sand-dark transition-colors">
                        <IoMdArrowForward className="text-xl"/>
                    </button>
                </div>
                <div className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden py-2">
                    {cart.length === 0 && (
                        <div className="h-full flex flex-col items-center justify-center text-center text-ink-soft gap-3">
                            <BsBag className="text-3xl" />
                            <p className="text-xs uppercase tracking-luxe">Your bag is empty</p>
                        </div>
                    )}
                    {cart.map((item) => {
                        return (
                            <CartItem item={item} key={item.id} />
                        );
                    })}
                </div>
                <div className="flex flex-col gap-y-4 py-7 border-t border-line">
                    <div className="flex w-full justify-between items-center">
                        <span className="text-xs uppercase tracking-luxe text-ink-soft">Total</span>
                        <span className="font-display text-xl text-ink">$ {parseFloat(total).toFixed(2)}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link to={"/"} className="flex-1 py-4 text-center border border-ink text-ink text-[11px] uppercase tracking-luxe hover:bg-ink hover:text-paper transition-colors">View Cart</Link>
                        <button type="button" onClick={clearCart} aria-label="Clear cart" className="cursor-pointer w-12 h-12 flex justify-center items-center border border-line text-ink-soft hover:border-ink hover:text-ink transition-colors">
                            <FiTrash2 />
                        </button>
                    </div>
                    <Link to={"/"} className="py-4 text-center bg-ink text-paper text-[11px] uppercase tracking-luxe hover:bg-sand-dark transition-colors">Proceed to Checkout</Link>
                </div>
            </div>
        </>
    );
}
