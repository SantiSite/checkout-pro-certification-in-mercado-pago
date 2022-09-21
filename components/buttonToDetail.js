import Link from 'next/link'

export default function ButtonToDetail({ id }) {
    return (
        <Link href={`/products/${id}`}>
            <div className="border border-sky-500 text-slate-800 rounded-lg w-20 p-2 text-center cursor-pointer">
                <a>Detalle</a>
            </div>
        </Link>
    )
}
