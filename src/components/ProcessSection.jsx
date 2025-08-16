

import { processSteps } from "../data/processSteps";

export const ProcessSection = ({ className = "" }) => (
  <section className={`mx-auto max-w-screen-2xl py-16 ${className}`}>
    <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-amber-950/20">
      {processSteps.map((step, idx) => (
        <motion.div
          key={step.title}
          className="bg-transparent rounded-xl p-8 flex flex-col items-start"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: step.delay }}
        >
          <div className="text-5xl font-extrabold mb-2" style={{ color: '#9D2B21' }}>{step.number}</div>
          <div className="text-2xl font-bold text-gray-900 mb-2">{step.title}</div>
          <div className="border-b border-amber-950 opacity-20 w-full mb-4"></div>
          <div className="text-gray-700 mb-4">{step.description}</div>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            {step.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);
