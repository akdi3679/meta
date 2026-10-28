export type ServiceData = {
  slug: string;
  title: string;
  tag: string;
  hero: string;
  trustBadges: string[];
  materials: string[];
  warranty: string;
  includes: string[];
  process: { t: string; d: string }[];
  timeline: string;
  costFactors: string[];
  testimonial: { quote: string; name: string; role: string };
};

export const SERVICES: ServiceData[] = [
  {
    slug: "re-roofing",
    title: "Re-Roofing",
    tag: "Full Replacement",
    hero: "Complete roof replacement using premium materials — every stage documented on video, from tear-off to final inspection.",
    trustBadges: ["Licensed & Fully Insured", "Colorbond Certified Installer", "10-Year Workmanship Warranty"],
    materials: ["BlueScope Colorbond", "Monier Concrete Tiles", "CSR Roofing Battens & Sarking"],
    warranty: "10-year workmanship warranty plus full manufacturer material warranties, all documented in your handover pack.",
    includes: [
      "Full structural inspection after tear-off, recorded on video",
      "Replacement of damaged battens, sarking and flashings",
      "New premium roofing installed to Australian Standards",
      "Complete site clean and debris removal",
      "Final video walkthrough of the finished roof",
    ],
    process: [
      { t: "Record & Quote", d: "Smart-glasses inspection, fixed-price quote with video evidence." },
      { t: "Tear-Off & Structural Check", d: "Old roofing removed; structure filmed and assessed before covering." },
      { t: "Install & Document", d: "New roof installed; key stages captured for your records." },
      { t: "Final Walkthrough", d: "Video handover, warranty pack and maintenance advice." },
    ],
    timeline: "Typically 3–7 days depending on roof size, pitch and weather.",
    costFactors: ["Roof size and pitch", "Material choice (Colorbond vs tile)", "Structural repairs found during tear-off", "Site access and safety requirements"],
    testimonial: {
      quote: "Watching the tear-off video showed us exactly why the old roof was failing. The new Colorbond roof looks incredible and the price never moved from the quote.",
      name: "David Chen",
      role: "Homeowner, Perth",
    },
  },
  {
    slug: "restoration",
    title: "Roof Restoration",
    tag: "Restore & Protect",
    hero: "Restore your existing roof to like-new condition — cleaning, repointing and protective coating, all verified on camera.",
    trustBadges: ["Licensed & Fully Insured", "Premium Coating Systems", "15+ Year Life Extension"],
    materials: ["Dulux Acratex Coatings", "Flexible Pointing Compounds", "Monier Replacement Tiles"],
    warranty: "7-year warranty on coatings and pointing workmanship.",
    includes: [
      "High-pressure clean of the entire roof surface",
      "Ridge cap removal, re-bedding and repointing",
      "Cracked or broken tile replacement",
      "Sealer plus two coats of premium protective coating",
      "Before and after video comparison in your report",
    ],
    process: [
      { t: "Visual Assessment", d: "Recorded inspection identifying every cracked tile and failed joint." },
      { t: "Clean & Repair", d: "Pressure clean, replace damaged tiles, reset ridge caps." },
      { t: "Coat & Protect", d: "Sealer and dual coating applied for long-term weather protection." },
      { t: "Verify & Handover", d: "Final recorded walkthrough comparing before and after." },
    ],
    timeline: "Typically 2–4 days for an average residential roof.",
    costFactors: ["Roof size and accessibility", "Number of tiles needing replacement", "Extent of repointing required", "Coating colour and system chosen"],
    testimonial: {
      quote: "The before and after video was unbelievable — same roof, twenty years younger. Our street has three neighbours booking them since.",
      name: "Karen Mitchell",
      role: "Homeowner, Gosnells",
    },
  },
  {
    slug: "maintenance",
    title: "General Maintenance",
    tag: "Preventative Care",
    hero: "Preventative care that catches small issues before they become internal water damage — every visit ends with a visual condition report.",
    trustBadges: ["Licensed & Fully Insured", "Priority-Rated Reports", "Same-Week Scheduling"],
    materials: ["OEM Replacement Parts", "Premium Sealants & Flashings", "UV-Stable Repair Compounds"],
    warranty: "12-month warranty on all maintenance workmanship.",
    includes: [
      "Inspection of flashings, valleys, seals and fasteners",
      "Minor tile, sheet and flashing replacements",
      "Resealing of penetrations and edge details",
      "Condition report with priority ratings (urgent / monitor / ok)",
      "Video clips of every finding, explained in plain English",
    ],
    process: [
      { t: "Book & Brief", d: "Tell us the history and any known issues." },
      { t: "Recorded Inspection", d: "Full roof walk captured on smart glasses." },
      { t: "Fix On The Spot", d: "Minor repairs completed same visit where possible." },
      { t: "Report Delivered", d: "Priority-rated visual report within 24 hours." },
    ],
    timeline: "Half-day to full-day visit; report delivered within 24 hours.",
    costFactors: ["Number of defects found", "Parts and materials required", "Roof accessibility", "Frequency of scheduled visits"],
    testimonial: {
      quote: "They found a cracked valley tray our last three roofers missed. Fixed the same day, and the video showed our insurance assessor everything.",
      name: "Paul Nguyen",
      role: "Landlord, Armadale",
    },
  },
  {
    slug: "gutters",
    title: "Gutter Cleans",
    tag: "Debris Removal",
    hero: "Professional debris removal with a full visual inspection of gutters, downpipes and eaves — water flow tested on camera.",
    trustBadges: ["Licensed & Fully Insured", "Flow-Tested On Video", "Photo Report Included"],
    materials: ["Industrial Vacuum & Hand Tools", "Downpipe Flushers", "Gutter Guard Options"],
    warranty: "3-month no-overflow guarantee on cleaned gutters.",
    includes: [
      "Complete debris removal from all gutters and valleys",
      "Downpipe flushing and blockage clearing",
      "Water flow test recorded on video",
      "Eaves and fascia condition check",
      "Photo report with any corrosion or sagging flagged",
    ],
    process: [
      { t: "Assess", d: "Quick recorded overview of gutter condition before starting." },
      { t: "Clean", d: "All debris removed by hand and vacuum — no mess left behind." },
      { t: "Flush & Test", d: "Downpipes flushed; flow test filmed as proof." },
      { t: "Report", d: "Photo report with flagged issues and recommendations." },
    ],
    timeline: "2–4 hours for a standard residential property.",
    costFactors: ["Linear metres of guttering", "Single vs double storey", "Severity of blockages", "Gutter guard installation options"],
    testimonial: {
      quote: "The flow-test video was such a simple thing but it proved the job was done properly. First gutter cleaner we will ever rebook.",
      name: "Emma Rossi",
      role: "Property Manager, Kelmscott",
    },
  },
  {
    slug: "skylights",
    title: "Skylights",
    tag: "Natural Light",
    hero: "Natural light solutions installed with absolute precision — flashing and weather seals water-tested on camera before handover.",
    trustBadges: ["Velux Certified Installer", "Watertight Guarantee", "Energy-Efficient Glazing"],
    materials: ["Velux Skylight Systems", "OEM Flashing Kits", "High-Performance Sealants"],
    warranty: "10-year installation warranty plus Velux manufacturer warranty.",
    includes: [
      "Site assessment for optimal light and structural positioning",
      "Velux supply and installation with OEM flashing kits",
      "Internal lining and finishing to match your ceilings",
      "On-camera water test of all seals and flashings",
      "Operation and care walkthrough",
    ],
    process: [
      { t: "Plan", d: "Positioning, glazing type and sizing agreed with you." },
      { t: "Install", d: "Roof opening cut, unit and flashing fitted to spec." },
      { t: "Seal & Test", d: "Water test filmed so you can see it is watertight." },
      { t: "Finish", d: "Interior lined, painted and handed over." },
    ],
    timeline: "1–2 days per skylight including internal finishing.",
    costFactors: ["Unit size and glazing type", "Roof material and pitch", "Ceiling depth and lining complexity", "Number of units"],
    testimonial: {
      quote: "They water-tested the skylight on video before they left. Two winters later, not a single drop. Our hallway is transformed.",
      name: "Sophie Turner",
      role: "Homeowner, Canning Vale",
    },
  },
  {
    slug: "ventilation",
    title: "Roof Ventilation",
    tag: "Climate Control",
    hero: "Reduce heat and moisture buildup in your roof cavity — extending roof life and cutting cooling costs, with before and after readings documented.",
    trustBadges: ["Licensed & Fully Insured", "Moisture-Mapped Reports", "Whirlybird & Eave Vent Specialists"],
    materials: ["Edmonds Whirlybirds", "Solar-Powered Ventilation Units", "Eave & Gable Vent Systems"],
    warranty: "5-year workmanship warranty plus manufacturer unit warranties.",
    includes: [
      "Roof cavity moisture and temperature assessment",
      "Ventilation plan sized to your roof cavity volume",
      "Whirlybird, solar or eave vent installation",
      "Before and after readings recorded in your report",
      "Condensation risk review for winter months",
    ],
    process: [
      { t: "Measure", d: "Cavity temperature and moisture recorded before work." },
      { t: "Plan", d: "Vent count and placement calculated for your roof." },
      { t: "Install", d: "Units fitted and sealed, flashings water-tested." },
      { t: "Verify", d: "Post-install readings captured to prove the difference." },
    ],
    timeline: "Typically 1 day for a standard residential roof cavity.",
    costFactors: ["Roof cavity volume", "Number and type of units", "Solar vs wind-driven units", "Existing condensation damage"],
    testimonial: {
      quote: "Our upstairs was unusable in summer. After the ventilation install the difference was immediate — and the temperature readings proved it.",
      name: "Mark Thompson",
      role: "Homeowner, Forrestfield",
    },
  },
];