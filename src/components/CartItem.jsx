// import link
import { Link } from "react-router-dom";
// import icons
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
// import cart context
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

export default function CartItem({item}) {
    const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
    // destructure item
    const { id, title, image, price, amount } = item;
    return (
        <div className="flex gap-x-4 py-5 border-b border-line w-full">
            {/* image */}
            <Link to={`/product/${id}`} className="shrink-0 w-20 h-24 flex items-center justify-center bg-paper-panel">
                <img className="max-w-[60px] max-h-[80px] object-contain mix-blend-multiply" src={image} alt={title} />
            </Link>
            <div className="w-full flex flex-col justify-between">
                {/* title & remove icon */}
                <div className="flex justify-between gap-2">
                    <Link to={`/product/${id}`} className="font-display text-base text-ink hover:text-sand-dark transition-colors line-clamp-2 leading-snug">{title}</Link>
                    <button type="button" onClick={() => removeFromCart(id)} aria-label={`Remove ${title} from cart`} className="text-lg cursor-pointer bg-transparent border-0 p-0 h-fit text-ink-soft hover:text-ink transition-colors">
                        <IoMdClose />
                    </button>
                </div>
                <div className="flex items-end justify-between mt-2">
                    {/* qty */}
                    <div className="flex items-center border border-line text-ink text-sm">
                        <button type="button" onClick={() => decreaseAmount(id)} aria-label={`Decrease quantity of ${title}`} className="w-8 h-8 flex justify-center items-center cursor-pointer bg-transparent border-0 hover:bg-paper-panel transition-colors">
                            <IoMdRemove />
                        </button>
                        <div className="w-8 h-8 flex justify-center items-center border-x border-line">
                            {amount}
                        </div>
                        <button type="button" onClick={() => increaseAmount(id)} aria-label={`Increase quantity of ${title}`} className="w-8 h-8 flex justify-center items-center cursor-pointer bg-transparent border-0 hover:bg-paper-panel transition-colors">
                            <IoMdAdd />
                        </button>
                    </div>
                    {/* final price */}
                    <div className="font-display text-base text-ink">
                        {`$ ${parseFloat(price * amount).toFixed(2)}`}
                    </div>
                </div>
            </div>
        </div>
    );
}
