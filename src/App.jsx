import { useState } from "react";

const incentives = [
  {
    category: "Core Infrastructure",
    title: "Secure Research Environment (SRE)",
    description: "Compliant AWS architecture supporting NIST, HIPAA, CMMC."
  },
  {
    category: "Access Portal",
    title: "Secure Research Portal (SRP)",
    description: "Simple interface for researchers to access services without console."
  },
  {
    category: "Enablement",
    title: "AWS Cloud Credits",
    description: "Up to $40K credits to reduce onboarding and scaling costs."
  },
  {
    category: "Grants & Support",
    title: "Grant Proposal Support",
    description: "Letters of support, PoC credits, and research awards help."
  },
  {
    category: "Compliance",
    title: "NIH/NIST Readiness",
    description: "Audit templates, documentation, and partner support."
  },
  {
    category: "Commercialization",
    title: "Startup Collaboration Program",
    description: "Activate credits, AWS BD support, and technical guidance."
  },
  {
    category: "Events",
    title: "Immersion Days",
    description: "Live campus-wide workshops with AWS architects."
  },
  {
    category: "Students & Talent",
    title: "Cloud-Trained Student Pairing",
    description: "Match AWS Academy students with research mentors."
  },
  {
    category: "Custom Governance",
    title: "Joint Steering Committee",
    description: "Shared AWS + institution governance of research programs."
  },
  {
    category: "Tooling",
    title: "Open Data Tools",
    description: "Data Exchange, sustainability, and public dataset portals."
  }
];

export default function App() {
  const [selected, setSelected] = useState([]);

  const toggle = (title) =>
    setSelected((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">Build Your AWS Research Package</h1>
      <p>Select incentives below to customize your institutional engagement.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {incentives.map((item) => (
          <div
            key={item.title}
            onClick={() => toggle(item.title)}
            className={`border p-4 rounded cursor-pointer ${
              selected.includes(item.title) ? "border-blue-500" : "border-gray-300"
            }`}
          >
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-500">{item.category}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      {selected.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold">Your Custom Package:</h3>
          <ul className="list-disc pl-5">
            {selected.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
