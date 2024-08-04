import Link from "next/link";

const Navbar = () => {
    return (
        <div className=" flex w-full border-2 border-red-500 justify-between items-center p-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
        </div>
    )
}

export default Navbar;

