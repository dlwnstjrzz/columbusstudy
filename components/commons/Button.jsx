export default function Button({ content, url = "#" }) {
  return (
    <a
      href={url}
      className="inline-block bg-[#2378C2] hover:bg-blue-600 text-white text-base py-2 px-6 rounded-lg transition duration-300"
    >
      {content}
    </a>
  );
}
