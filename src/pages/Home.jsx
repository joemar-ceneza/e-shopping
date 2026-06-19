// import product context
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
// import components
import Product from "../components/Product";
import Hero from "../components/Hero";

export default function Home() {
    // get products from product context
    const { products, isLoading, error } = useContext(ProductContext);
    // get only mens & womens clothing category
    const filteredProducts = products.filter((item) => {
        return (
            item.category === "men's clothing" || item.category === "women's clothing"
        );
    });
    return (
        <div>
            <Hero />
            <section className="py-24">
                <div className="container mx-auto px-4">
                    {/* section heading */}
                    <div className="text-center max-w-xl mx-auto mb-16">
                        <span className="text-xs uppercase tracking-luxe text-sand-dark">
                            Curated Selection
                        </span>
                        <h2 className="font-display text-4xl sm:text-5xl text-ink mt-4">
                            The Collection
                        </h2>
                        <div className="w-16 h-px bg-line mx-auto mt-8" />
                    </div>

                    {error && (
                        <p className="text-center text-ink-soft">{error}</p>
                    )}
                    {isLoading && !error && (
                        <p className="text-center text-ink-soft">Loading the collection…</p>
                    )}
                    {!isLoading && !error && filteredProducts.length === 0 && (
                        <p className="text-center text-ink-soft">No products available.</p>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 max-w-sm mx-auto md:max-w-none md:mx-0">
                        {filteredProducts.map((product) => {
                            return (
                                <Product product={product} key={product.id}/>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
