import Link from "next/link";

export default function AdminNav() {
  return (
    <nav className="nav justify-content-center mb-3">
      <Link href="/admin" className="nav-link">
        Admin
      </Link>
      <Link href="/admin/retreat" className="nav-link">
        Add Retreat
      </Link>
      <Link href="/admin/retreats" className="nav-link">
        Retreats
      </Link>
    </nav>
  );
}