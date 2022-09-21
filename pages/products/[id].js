import Image from 'next/image'
import Script from 'next/script'
import ButtonToPay from '../../components/buttonToPay'
import Footer from '../../components/footer'
import Header from '../../components/header'

export default function ProductDetail({ product, public_key }) {
    return (
        <div>
            <Script
                src="https://www.mercadopago.com/v2/security.js"
                view="item"
            ></Script>
            <Header />
            <main className="m-auto flex justify-center items-center align-middle h-screen flex-col lg:flex-row">
                <figure className="mb-2 lg:mr-10">
                    <Image
                        src={product.images[0]}
                        alt={product.title}
                        layout="fixed"
                        width="500"
                        height={350}
                    />
                </figure>
                <div className="max-w-lg min-w-min">
                    <div className="flex items-center">
                        <h1>{product.title}</h1>
                        <span className="ml-4 bg-purple-500 rounded-3xl p-1 text-yellow-50 font-black text-xs">
                            {product.brand}
                        </span>
                    </div>
                    <p>{product.description}</p>
                    <p className="text-yellow-500">COP {product.price}</p>
                    <ButtonToPay
                        title={product.title}
                        id={product.id}
                        price={product.price}
                        image={product.images[0]}
                        public_key={public_key}
                    />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.params
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    let product = await response.json()
    return {
        props: {
            product,
            public_key: process.env.PUBLIC_KEY_OF_MERCADO_PAGO
        }
    }
}
