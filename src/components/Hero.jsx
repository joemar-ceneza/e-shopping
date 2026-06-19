import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="relative bg-paper border-b border-line">
            <div className="container mx-auto px-4">
                <div className="min-h-[88vh] flex flex-col justify-center items-center text-center py-32 animate-fade-up">
                    <span className="text-xs uppercase tracking-luxe text-sand-dark mb-8">
                        Autumn / Winter 2026
                    </span>
                    <h1 className="font-display text-5xl sm:text-7xl lg:text-[7rem] leading-[0.95] text-ink font-medium max-w-4xl">
                        The Art of
                        <br />
                        <span className="italic font-normal">Quiet Elegance</span>
                    </h1>
                    <p className="mt-8 text-ink-soft max-w-lg text-base sm:text-lg leading-relaxed">
                        A considered edit of timeless womenswear and menswear — crafted from
                        the finest materials, designed to endure beyond the season.
                    </p>
                    <div className="mt-12 flex flex-col sm:flex-row items-center gap-5">
                        <Link
                            to={"/"}
                            className="inline-flex items-center justify-center px-10 py-4 bg-ink text-paper text-xs uppercase tracking-luxe hover:bg-sand-dark transition-colors duration-300"
                        >
                            Discover the Collection
                        </Link>
                        <Link
                            to={"/"}
                            className="text-xs uppercase tracking-luxe text-ink border-b border-ink pb-1 hover:border-sand-dark hover:text-sand-dark transition-colors duration-300"
                        >
                            Our Story
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
