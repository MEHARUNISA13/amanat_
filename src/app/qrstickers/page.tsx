import Image from 'next/image'
import Link from 'next/link'

export default function QRStickersPage() {
  return (
    <div className="bg-[#f6f7f9] text-[#181818] font-sans">
      {/* HEADER */}
      <header className="bg-gradient-to-r from-[#00774D] to-[#039e6b] text-white text-center px-4 py-10">
        <h1 className="text-4xl font-bold font-[Raleway] mb-4">Amanat QR Sticker Pack</h1>
        <p className="text-lg">Protect your valuables. Stick. Scan. Find it.</p>
        <a href="#buy" className="inline-block mt-5 bg-[#FFC15E] text-[#00774D] font-bold py-3 px-6 rounded-full text-lg shadow hover:bg-[#ffd272]">
          Buy Now – Pack of 5 • ₨ 199
        </a>
      </header>

      {/* MAIN IMAGE */}
      <div className="flex justify-center mt-10">
        <Image
          src="/amanat packaging sticker .png"
          alt="Amanat QR Sticker Pack Packaging"
          width={340}
          height={340}
          className="rounded-2xl shadow-lg border-4 border-white -mt-20 max-w-[92vw]"
        />
      </div>

      {/* SECTIONS */}
      <main className="max-w-4xl mx-auto mt-10 px-4">
        {/* What's Inside */}
        <Section title="What's Inside?">
          <div className="flex flex-wrap gap-6 justify-between">
            {features.map((f, idx) => (
              <Feature key={idx} icon={f.icon} text={f.text} />
            ))}
          </div>
        </Section>

        {/* How it Works */}
        <Section title="How It Works">
          <div className="flex flex-wrap justify-center gap-6">
            {steps.map((s, idx) => (
              <HowStep key={idx} {...s} />
            ))}
          </div>
        </Section>

        {/* Pricing */}
        <Section title="Pricing & Options" id="buy">
          <table className="w-full border-collapse text-center">
            <thead>
              <tr className="text-[#00774D] font-bold">
                <th>Pack</th><th>Price</th><th>Save</th><th></th>
              </tr>
            </thead>
            <tbody>
              {pricing.map((p, idx) => (
                <tr key={idx} className="border-b border-gray-200">
                  <td className="py-3">{p.qty}</td>
                  <td>{p.price}</td>
                  <td>{p.save}</td>
                  <td>
                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                      <button className="bg-[#FFC15E] text-[#00774D] font-bold py-1 px-4 rounded-xl hover:bg-[#ffe0a3]">Buy Now</button>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-[#00774D] text-sm">Free delivery in Rawalpindi over ₨ 1,000 • Nationwide shipping available</p>
        </Section>

        {/* Why Amanat */}
        <Section title="Why Use Amanat QR Stickers?">
          <div className="flex flex-wrap gap-6">
            {reasons.map((r, idx) => (
              <Feature key={idx} icon={r.icon} text={r.text} />
            ))}
          </div>
        </Section>

        {/* Testimonials */}
        <Section title="User Stories">
          <p className="italic bg-[#f6f7f9] text-[#00774D] rounded-lg p-4 mb-3">I lost my wallet on the bus and got it back in 30 minutes! – Ayesha K.</p>
          <p className="italic bg-[#f6f7f9] text-[#00774D] rounded-lg p-4">Labeled all 4 of my kids’ bags before summer camp—so many returns – Farooq A.</p>
        </Section>

        {/* FAQ */}
        <Section title="Frequently Asked Questions">
          <div className="space-y-5">
            {faqs.map((faq, idx) => (
              <div key={idx}>
                <p className="text-[#00774D] font-bold">{faq.q}</p>
                <p className="text-[#353535] text-[1.05rem]">{faq.a}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>

      {/* FOOTER */}
      <footer className="mt-10 bg-[#00774D] text-white text-center py-6 rounded-t-2xl">
        Need help? <a href="https://wa.me/923305827874" className="underline text-[#FFC15E]">Chat with us on WhatsApp</a><br />
        &copy; 2025 Amanat.app — Stick. Scan. Find it.
      </footer>
    </div>
  )
}

// Reusable Components
function Section({ title, children, id }: any) {
  return (
    <section id={id} className="bg-white rounded-2xl shadow p-6 mb-10">
      <h2 className="text-2xl text-[#00774D] font-[Raleway] mb-5">{title}</h2>
      {children}
    </section>
  )
}

function Feature({ icon, text }: any) {
  return (
    <div className="flex items-center gap-4 bg-[#f6f7f9] p-4 rounded-xl shadow-sm min-w-[210px]">
      <div className="text-2xl bg-[#FFC15E] text-[#00774D] w-12 h-12 flex items-center justify-center rounded-full">{icon}</div>
      <p className="text-[1.1rem]">{text}</p>
    </div>
  )
}

function HowStep({ icon, title, desc }: any) {
  return (
    <div className="bg-[#f6f7f9] text-center rounded-xl p-4 w-full max-w-[220px] shadow-sm">
      <div className="text-2xl bg-[#FFC15E] text-[#00774D] w-12 h-12 mx-auto flex items-center justify-center rounded-full mb-2">{icon}</div>
      <p className="font-bold mb-1">{title}</p>
      <p className="text-[#343434] text-sm">{desc}</p>
    </div>
  )
}

// Data Arrays
const features = [
  { icon: '🔒', text: '5 Secure, unique QR code stickers' },
  { icon: '💧', text: 'Waterproof, scratch-resistant finish' },
  { icon: '📱', text: 'Easy to stick on phones, laptops, bags, bikes' },
  { icon: '🎁', text: 'Register in Amanat app for rewards' },
]

const steps = [
  { icon: '🏷️', title: 'Apply a Sticker', desc: 'Stick your QR code to your valuable item' },
  { icon: '📷', title: 'Someone Scans It', desc: 'Finder scans using any smartphone' },
  { icon: '🔔', title: 'Get Your Item Back', desc: 'You get notified by founder via the Amanat app securely' },
]

const pricing = [
  {
    qty: '5 Stickers', price: '₨ 499', save: '—',
    link: 'https://wa.me/923305827874?text=I%20want%20to%20order%20the%205%20Sticker%20Pack%20from%20Amanat.app',
  },
  {
    qty: '10 Stickers', price: '₨ 899', save: '₨ 99',
    link: 'https://wa.me/923305827874?text=I%20want%20to%20order%20the%2010%20Sticker%20Pack%20from%20Amanat.app',
  },
  {
    qty: '20 Stickers', price: '₨ 1,699', save: '₨ 200',
    link: 'https://wa.me/923305827874?text=I%20want%20to%20order%20the%2020%20Sticker%20Pack%20from%20Amanat.app',
  },
]

const reasons = [
  { icon: '⚡', text: 'Get your lost items back!' },
  { icon: '🔏', text: 'Privacy-first: Your contact details stay safe' },
  { icon: '🏆', text: 'Unlock in-app rewards with every registered sticker' },
]

const faqs = [
  { q: 'How do I register a sticker?', a: 'Scan the QR code > Enter your phone number > Done!' },
  { q: 'What happens if someone scans a sticker on my lost item?', a: 'The founder will get your contact details to get in touch with you.' },
  { q: 'Are these stickers durable?', a: 'Yes! They’re waterproof, weatherproof, and scratch-resistant—ideal for all surfaces.' },
  { q: 'Do I need the Amanat app?', a: 'Yes, to register stickers and get instant return alerts. Finders can scan without the app.' },
]
