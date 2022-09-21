import { useState } from 'react'
import { Modal, Button, Spinner } from 'flowbite-react'
import Checkout from '../utils/checkout'
import MercadoPagoButton from './mercadoPagoButton'

export default function MyModal({ header, body, product, public_key }) {
    const [show, setShow] = useState(false)
    const [load, setLoad] = useState(false)

    const onClick = async event => {
        event.preventDefault()
        setShow(true)
        try {
            setLoad(true)
            const response = await fetch('/api/pay/mercadopago', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: product.title,
                    unit_price: parseInt(String(product.price)),
                    quantity: 1,
                    picture_url: product.image
                })
            })
            setLoad(false)
            const { id, message } = await response.json()
            Checkout(id, public_key)
        } catch (error) {
            setLoad(false)
            console.error(error)
        }
    }

    const onClose = () => {
        setShow(false)
    }
    return (
        <>
            <Button onClick={onClick}>Ir a comprar</Button>
            <Modal show={show} onClose={onClose}>
                <Modal.Header>{header}</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            {body}
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {load ? (
                        <Spinner aria-label="Default status example" />
                    ) : (
                        <MercadoPagoButton />
                    )}
                    <Button color="gray" onClick={onClose}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
