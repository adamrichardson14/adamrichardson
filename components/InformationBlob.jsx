export default function InformationBlob({ content }) {
  return (
    <div className="bg-cyan-900 relative text-lg rounded-md border-l-8 border-cyan-300">
      <div className="px-8 py-4">{content}</div>
    </div>
  );
}
