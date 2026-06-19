// import useParams
import { useParams } from "react-router-dom";
// import cartContext
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

export default function ProductDetails() {
    // get the product id from the url
    const { id } = useParams();
    const { products, isLoading } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
    // get the single product based on the id
    const product = products.find((item) => item.id === parseInt(id, 10));

    // still fetching the product list
    if (isLoading) {
        return (
            <section className="min-h-screen flex justify-center items-center text-ink-soft tracking-luxe uppercase text-xs">Loading…</section>
        );
    }
    // product list loaded but no match for this id
    if (!product) {
        return (
            <section className="min-h-screen flex justify-center items-center text-ink-soft tracking-luxe uppercase text-xs">Product not found</section>
        );
    }
    // destructure product
    const { title, price, description, image, category } = product;
    return (
        <section className="min-h-screen flex items-center pt-32 pb-20 lg:py-32">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
                    <div className="flex justify-center items-center w-full bg-paper-panel py-16 lg:py-24">
                        <img className="max-w-[220px] lg:max-w-sm object-contain mix-blend-multiply" src={image} alt={title} />
                    </div>
                    <div className="max-w-md mx-auto lg:mx-0">
                        {category && (
                            <div className="text-[11px] uppercase tracking-luxe text-sand-dark mb-5">
                                {category}
                            </div>
                        )}
                        <h1 className="font-display text-4xl sm:text-5xl text-ink mb-5 leading-tight">{title}</h1>
                        <div className="text-2xl text-ink font-display mb-8">$ {parseFloat(price).toFixed(2)}</div>
                        <div className="w-full h-px bg-line mb-8" />
                        <p className="text-ink-soft mb-10 leading-relaxed">{description}</p>
                        <button
                            onClick={() => addToCart(product, product.id)}
                            className="w-full sm:w-auto inline-flex items-center justify-center px-12 py-4 bg-ink text-paper text-xs uppercase tracking-luxe hover:bg-sand-dark transition-colors duration-300"
                        >
                            Add to Bag
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
