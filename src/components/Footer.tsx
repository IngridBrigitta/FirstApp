import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <nav className="mx-auto flex max-w-3x1 grap-3 p-3">
                <Link href="/privacy">Privacy</Link>
            </nav>
        </footer>
    );
}