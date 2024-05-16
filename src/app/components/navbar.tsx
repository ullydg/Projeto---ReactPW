import Link from "next/link";

export function NavBar() {
    return (
        <nav className="flex justify-between items-center bg-sky-600 w-full px-6 py-2 ">
            <Link href="/">
                <h1 className="text-4xl uppercase font-bold text-slate-100">Update Cursos</h1>
            </Link>
            <Link href="/sobre">sobre</Link>
        </nav>
    )
}
