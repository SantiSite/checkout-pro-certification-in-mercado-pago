import Image from 'next/image'
import ButtonToPay from './buttonToPay'
import ButtonToDetail from './buttonToDetail'

export default function Card({
    id,
    title,
    price,
    image,
    description,
    public_key
}) {
    return (
        <div
            className="flex flex-col mb-6 border-l-violet-600 max-w-md mx-auto"
            key={id}
        >
            <figure className="self-center">
                <Image
                    alt={title}
                    src={image}
                    width="200"
                    height="150"
                    layout="fixed"
                />
            </figure>
            <p className="w-9/12 self-center overflow-x-auto text-center mt-4">
                {description}
            </p>
            <span className="self-center mt-4 text-yellow-500">
                COP {price}
            </span>
            <div className="self-center mt-4 w-full flex justify-evenly">
                <ButtonToPay
                    title={title}
                    id={id}
                    price={price}
                    image={image}
                    public_key={public_key}
                />
                <ButtonToDetail id={id} />
            </div>
        </div>
    )
}
