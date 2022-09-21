import Link from 'next/link'

export default function Header() {
    return (
        <header className="flex justify-between align-middle p-3 fixed top-0 w-full bg-slate-300 z-10">
            <p className="text-lg">Tienda e-commerce</p>
            <nav>
                <ul className="flex justify-between align-middle w-40">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/products">Products</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
