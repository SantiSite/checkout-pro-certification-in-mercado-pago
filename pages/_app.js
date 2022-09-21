import Head from 'next/head'
import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Tienda e-commerce</title>
            </Head>
            <Script src="https://sdk.mercadopago.com/js/v2" />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
