import Link from "next/link";

export default function Button({ content, href }) {
  const buttonClass = "bg-blue-500 text-white px-4 py-2 rounded";

  return href ? (
    <Link href={href} className={buttonClass}>
      {content}
    </Link>
  ) : (
    <button className={buttonClass}>{content}</button>
  );
}
