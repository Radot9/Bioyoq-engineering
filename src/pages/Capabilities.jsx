import { capabilities } from "../data/capabilities";
export default function Capabilities() {
  return (
    <main className="min-h-screen bg-[#F7F6F2] py-16 px-4 md:px-8">
      <section className="max-w-screen-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">Capabilities/</h1>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl">
          Discover our core areas of expertise and how we deliver value to our clients across the industry.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-8 flex flex-col items-start">
              <h2 className="text-2xl font-semibold text-primary mb-2">{cap.title}</h2>
              <p className="text-gray-700 mb-4">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
