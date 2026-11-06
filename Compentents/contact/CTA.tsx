// components/contact/CTA.tsx

export default function CTA() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <h2 className="text-5xl font-bold">
            Ready To Start Your Journey?
          </h2>
        </div>

        <button className="bg-amber-500 px-8 py-4 rounded-xl">
          Book Your Tour Now
        </button>
      </div>
    </section>
  );
}