const experiences = [
  {
    title: "SEARCHING...",
    company: "",
    duration: "",
    description:
      "Currently seeking new opportunities. Please feel free to reach out.",
  },
  {
    title: "FULL STACK DEVELOPER (INTERNSHIP)",
    company: `God Of Graphics`,
    duration: "March 2025 - August 2025",
    description: `
      Completed a 6-month internship, starting with structured training before joining live projects. 
      Collaborated with senior developers on real-world web applications for the company.
      Developed the front-end of the company’s client project <span class="text-red-400">'vectenoindia.com'</span> where i used Next.js and Tailwind CSS. 
      Deployed the project on a Hostinger VPS, gaining hands-on experience in deployment and server management.
  `,
  },
];


const Experience = () => {
    
  return (
      <div className="flex flex-col">
        <div className="text-3xl text-center mb-10">Experience</div>
        {experiences.map((items, index) => {
          const isLast = index === experiences.length - 1;
          const isFirst = index === 0;
          return (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`relative flex flex-col border border-white/20 p-6 rounded-2xl max-w-lg bg-white/10 backdrop-blur-md shadow-lg transition-transform duration-300 hover:scale-105`}
              >
                <p
                  className={`text-2xl font-semibold border-b border-white/20 pb-2 mb-3 ${
                    isFirst && "animate-pulse text-green-400"
                  }`}
                >
                  {items.title}
                </p>

                <p className="text-sm text-amber-200 italic mb-2">
                  {items.company} {items.duration && `(${items.duration})`}
                </p>

                <div
                  className="text-gray-200 leading-relaxed text-sm"
                  dangerouslySetInnerHTML={{ __html: items.description }}
                />
              </div>

              <div className="text-center text-4xl m-2 text-gray-400">
                {isLast ? "" : "|"}
              </div>
            </div>
          );
        })}
      </div>
  )
}

export default Experience
