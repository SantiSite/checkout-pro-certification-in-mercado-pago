import { useRouter } from 'next/router'
import Footer from '../../components/footer'
import Header from '../../components/header'

export default function PaymentPending() {
    const router = useRouter()
    return (
        <div>
            <Header />
            <main className="mt-20">
                <h1>Pending</h1>
                <h3>payment ID: {router.query.collection_id}</h3>
                <h3>payment type: {router.query.payment_type}</h3>
                <h3>External reference: {router.query.external_reference}</h3>
            </main>
            <Footer />
        </div>
    )
}
