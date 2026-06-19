import { useContext } from "react";
// import link
import { Link } from "react-router-dom";
// import cart context
import { CartContext } from "../contexts/CartContext";

export default function Product({product}) {
    const { addToCart } =  useContext(CartContext);
    // destructure product
    const { id, image, category, title, price } = product;
    return (
        <div className="group">
            <div className="relative h-[340px] mb-5 bg-paper-panel overflow-hidden">
                <Link to={`/product/${id}`} aria-label={`View details for ${title}`} className="block w-full h-full">
                    <div className="w-full h-full flex justify-center items-center p-10">
                        <img className="max-h-[200px] object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" src={image} alt={title} />
                    </div>
                </Link>
                {/* hover-reveal add to cart */}
                <button
                    type="button"
                    onClick={() => addToCart(product, id)}
                    aria-label={`Add ${title} to cart`}
                    className="absolute bottom-0 left-0 w-full py-4 bg-ink text-paper text-[11px] uppercase tracking-luxe translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                >
                    Add to Cart
                </button>
            </div>
            {/* category & title & price*/}
            <div className="text-center">
                <div className="text-[10px] uppercase tracking-luxe text-sand-dark mb-2">
                    {category}
                </div>
                <Link to={`/product/${id}`}>
                    <h2 className="font-display text-lg text-ink mb-1 line-clamp-1 hover:text-sand-dark transition-colors">{title}</h2>
                </Link>
                <div className="text-ink-soft text-sm">$ {parseFloat(price).toFixed(2)}</div>
            </div>
        </div>
    );
}
