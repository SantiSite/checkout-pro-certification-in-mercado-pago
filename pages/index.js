import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import Script from 'next/script'

function HomePage() {
    return (
        <div>
            <Script
                src="https://www.mercadopago.com/v2/security.js"
                view="home"
            ></Script>
            <Header />
            <main className="text-3xl font-bold undeline h-screen w-full flex justify-center items-center flex-col">
                <h1 className="mb-10">Welcome to Tienda e-commerce!</h1>
                <Link href="/products">
                    <a className="bg-green-300 rounded-full w-52 text-center">
                        Products
                    </a>
                </Link>
            </main>
            <Footer />
        </div>
    )
}

export default HomePage
