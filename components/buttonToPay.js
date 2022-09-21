import MyModal from './modal'

export default function ButtonToPay({ title, price, id, image, public_key }) {
    return (
        <>
            <MyModal
                header="Comprar"
                body="La compra la realizaras con Mercado Pago"
                product={{ title, price, id, image }}
                public_key={public_key}
            />
        </>
    )
}
