export default function Description({ title, content }) {
  return (
    <div>
      <h1 className="text-mobile-heading md:text-4xl font-bold pb-4">
        {title}
      </h1>
      <p className="text-[#828282] text-mobile-body md:text-2xl">{content}</p>
    </div>
  );
}
