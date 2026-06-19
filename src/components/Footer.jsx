export default function Footer() {
    return (
        <footer className="bg-paper border-t border-line py-16">
            <div className="container mx-auto px-4 flex flex-col items-center gap-6 text-center">
                <span className="font-display text-3xl uppercase tracking-luxe text-ink">
                    Maison
                </span>
                <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-[11px] uppercase tracking-luxe text-ink-soft">
                    <span className="hover:text-ink transition-colors cursor-pointer">Collection</span>
                    <span className="hover:text-ink transition-colors cursor-pointer">About</span>
                    <span className="hover:text-ink transition-colors cursor-pointer">Journal</span>
                    <span className="hover:text-ink transition-colors cursor-pointer">Contact</span>
                </div>
                <div className="w-16 h-px bg-line" />
                <p className="text-[11px] uppercase tracking-luxe text-ink-soft/70">
                    &copy; {new Date().getFullYear()} Maison. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
