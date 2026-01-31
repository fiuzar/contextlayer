import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function MarketingHeader({ children }) {
    return (
        <>
            <Header />
            <main className="px-4">
                {children}
            </main>
            <Footer />
        </>
    )
}