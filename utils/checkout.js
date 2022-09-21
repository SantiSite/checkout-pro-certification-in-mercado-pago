export default function Checkout(preferenceId, public_key) {
    const mp = new MercadoPago(public_key, {
        locale: 'es-CO'
    })
    mp.checkout({
        preference: {
            id: preferenceId
        },
        render: {
            container: '#checkout-container',
            label: 'Pagar la compra'
        }
    })
}
