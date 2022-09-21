import Script from 'next/script'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Card from '../../components/card'

export default function Products({ products, public_key }) {
    return (
        <div>
            <Script src="https://www.mercadopago.com/v2/security.js"></Script>
            <Header />
            <mian className="my-20 mx-3 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {products.map(product => (
                    <Card
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.images[0]}
                        description={product.description}
                        public_key={public_key}
                    />
                ))}
            </mian>
            <Footer />
        </div>
    )
}

export async function getServerSideProps() {
    const response = await fetch('https://dummyjson.com/products')
    let { products } = await response.json()
    products = products.filter(product => product.category === 'smartphones')
    return {
        props: {
            products,
            public_key: process.env.PUBLIC_KEY_OF_MERCADO_PAGO
        }
    }
}
