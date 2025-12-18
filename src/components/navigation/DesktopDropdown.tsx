import Link from "next/link";
import { NavItem } from "@/config/nav.config";

export default function DesktopDropdown({ item }: { item: NavItem }) {
  return (
    <div className="relative group">
      {/* Parent is CLICKABLE */}
      <Link
        href={item.href}
        className="hover:text-primary transition-colors"
      >
        {item.label}
      </Link>

      {item.children && (
        <div className="absolute left-0 top-full mt-3 opacity-0 invisible
          group-hover:opacity-100 group-hover:visible
          transition-all duration-200">
          <div className="bg-white border border-border rounded-lg shadow-lg py-3 w-64">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block px-5 py-2 text-sm hover:bg-muted hover:text-primary"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
