"use client";

import React from "react";

const toolsData = [
  {
    name: "React",
    percentage: "95%",
    logo: <i className="devicon-react-original colored text-[38px]"></i>,
    glowClass: "hover:shadow-[0_0_25px_rgba(97,218,251,0.35)] hover:border-[#61DAFB]/40",
  },
  {
    name: "Next.js",
    percentage: "90%",
    logo: <i className="devicon-nextjs-plain text-[38px] dark:invert"></i>,
    glowClass: "hover:shadow-[0_0_25px_rgba(150,150,150,0.25)] hover:border-foreground/30",
  },
  {
    name: "JavaScript",
    percentage: "90%",
    logo: <i className="devicon-javascript-plain colored text-[34px]"></i>,
    glowClass: "hover:shadow-[0_0_25px_rgba(247,223,30,0.35)] hover:border-[#F7DF1E]/40",
  },
  {
    name: "TypeScript",
    percentage: "92%",
    logo: <i className="devicon-typescript-plain colored text-[34px]"></i>,
    glowClass: "hover:shadow-[0_0_25px_rgba(49,120,198,0.35)] hover:border-[#3178C6]/40",
  },
  {
    name: "Redux",
    percentage: "85%",
    logo: <i className="devicon-redux-original colored text-[34px]"></i>,
    glowClass: "hover:shadow-[0_0_25px_rgba(118,74,188,0.35)] hover:border-[#764ABC]/40",
  },
  {
    name: "TanStack Query",
    percentage: "88%",
    logo: (
      <svg role="img" viewBox="0 0 24 24" className="w-[34px] h-[34px] fill-[#FF4154]">
        <path d="M6.9297 13.6875c.164-.0938.375-.0352.4687.1328l.0625.1055c.4805.8515.9805 1.6601 1.5 2.4258.6133.9023 1.3047 1.8164 2.0743 2.7421a.3455.3455 0 0 1-.0391.4844l-.0742.0664c-2.543 2.2227-4.1914 2.664-4.9532 1.332-.746-1.3046-.4765-3.6718.8086-7.1093a.3437.3437 0 0 1 .1524-.1797ZM17.75 16.3008c.1836-.0313.3594.086.3945.2695l.0196.1016c.6289 3.2851.1875 4.9297-1.3243 4.9297-1.4804 0-3.3593-1.4024-5.6484-4.2032a.3271.3271 0 0 1-.0742-.2226c0-.1875.1562-.3399.3437-.3399h.1211a32.9838 32.9838 0 0 0 2.8086-.0976c1.0703-.086 2.1914-.2305 3.3594-.4375zm.871-6.9766a.3528.3528 0 0 1 .4454-.211l.1016.0352c3.2617 1.1094 4.5039 2.332 3.7187 3.6641-.7656 1.3047-2.9922 2.254-6.6836 2.8477-.082.0117-.168-.004-.2383-.047-.168-.0976-.2265-.3085-.125-.4765l.0625-.1054c.504-.8438.957-1.6836 1.3672-2.5235.4766-.9883.9297-2.0508 1.3516-3.1836zM7.797 8.3398c.082-.0117.168.004.2383.047.168.0976.2265.3085.125.4765l-.0625.1054a34.0882 34.0882 0 0 0-1.3672 2.5235c-.4766.9883-.9297 2.0508-1.3516 3.1836a.3528.3528 0 0 1-.4453.211l-.1016-.0352c-3.2617-1.1094-4.5039-2.332-3.7187-3.6641.7656-1.3047 2.9922-2.254 6.6836-2.8477Zm5.2812-3.9843c2.543-2.2227 4.1914-2.664 4.9532-1.332.746 1.3046.4765 3.6718-.8086 7.1093a.3436.3436 0 0 1-.1524.1797c-.164.0938-.375.0352-.4687-.1328l-.0625-.1055c-.4805-.8515-.9805-1.6601-1.5-2.4258-.6133-.9023-1.3047-1.8164-2.0743-2.7421a.3455.3455 0 0 1 .0391-.4844Zm-5.793-2.082c1.4805 0 3.3633 1.4023 5.6485 4.203a.3488.3488 0 0 1 .0781.2188c-.0039.1914-.1562.3438-.3476.3438l-.1172-.004a34.5835 34.5835 0 0 0-2.8086.1016c-1.0742.086-2.1953.2305-3.3633.4375a.343.343 0 0 1-.3945-.2734l-.0196-.0977c-.629-3.2851-.1876-4.9297 1.3242-4.9297Zm2.8711 5.8124h3.6875a.638.638 0 0 1 .5508.3164l1.8477 3.2188a.6437.6437 0 0 1 0 .6289l-1.8477 3.2227a.638.638 0 0 1-.5507.3164h-3.6875c-.2266 0-.4375-.1211-.547-.3164L7.7579 12.25a.6437.6437 0 0 1 0-.629l1.8516-3.2187c.1093-.1953.3203-.3164.5468-.3164Zm3.2305.793a.638.638 0 0 1 .5508.3164l1.3906 2.4258a.6437.6437 0 0 1 0 .6289l-1.3906 2.4297a.638.638 0 0 1-.5508.3164h-2.7734c-.2266 0-.4375-.1211-.5469-.3164L8.672 12.25a.6437.6437 0 0 1 0-.629l1.3945-2.4257c.1094-.1953.3203-.3164.5469-.3164Zm-.4922.8672h-1.789c-.2266 0-.4336.1172-.547.3164l-.8983 1.5586a.6437.6437 0 0 0 0 .6289l.8984 1.5625a.6317.6317 0 0 0 .5469.3164h1.789a.6317.6317 0 0 0 .547-.3164l.8983-1.5625a.6437.6437 0 0 0 0-.629l-.8984-1.5585c-.1133-.1992-.3203-.3164-.5469-.3164Zm-.4765.8281c.2265 0 .4375.1211.5468.3164l.422.7305c.1132.1953.1132.4375 0 .6289l-.422.7344c-.1093.1953-.3203.3164-.5468.3164h-.836a.6317.6317 0 0 1-.5468-.3164l-.422-.7344c-.1132-.1914-.1132-.4336 0-.629l.422-.7304a.6317.6317 0 0 1 .5468-.3164zm-.418.8164a.548.548 0 0 0-.4727.2735c-.0976.168-.0976.375 0 .5468a.5444.5444 0 0 0 .4727.2696.5444.5444 0 0 0 .4727-.2696c.0976-.1718.0976-.3789 0-.5468A.548.548 0 0 0 12 11.3906Zm-4.4219.5469h.9805M18.9805 7.75c.3906-1.8945.4765-3.3438.2226-4.3984-.1484-.629-.4218-1.1368-.8398-1.5078-.4414-.3907-1-.582-1.625-.582-1.0352 0-2.1211.4726-3.2813 1.3671-.4726.3633-.9648.8047-1.4726 1.3164-.043-.0508-.086-.1015-.1367-.1445-1.4454-1.2852-2.6602-2.082-3.6993-2.3906-.6171-.1836-1.1953-.1993-1.7226-.0235-.5586.1875-1.004.5742-1.3164 1.1172-.5156.8945-.6524 2.0742-.461 3.5274.0782.5898.2149 1.2343.4024 1.9335a1.1187 1.1187 0 0 0-.2149.047C3.008 8.621 1.711 9.2694.9258 10.0155c-.4649.4414-.7695.9375-.8828 1.4805-.1133.5781 0 1.1562.3125 1.6992.5156.8945 1.4648 1.5977 2.8164 2.1563.543.2226 1.1562.4257 1.8437.6093a1.0227 1.0227 0 0 0-.0703.2266c-.3906 1.8906-.4765 3.3438-.2226 4.3945.1484.629.4257 1.1407.8398 1.5078.4414.3907 1 .582 1.625.582 1.0352 0 2.121-.4726 3.2813-1.3632.4765-.3711.9726-.8164 1.4882-1.336a1.2 1.2 0 0 0 .1953.2266c1.4454 1.2852 2.6602 2.082 3.6993 2.3906.6172.1836 1.1953.1993 1.7226.0235.5586-.1875 1.004-.5742 1.3164-1.1172.5157-.8945.6524-2.0742.461-3.5273-.082-.6133-.2227-1.2813-.4258-2.0118a1.2248 1.2248 0 0 0 .2383-.0468c1.828-.6094 3.125-1.2578 3.9101-2.004.4649-.4413.7696-.9374.8828-1.4804.1133-.5781 0-1.1563-.3125-1.6992-.5156-.8946-1.4648-1.5977-2.8164-2.1563-.5586-.2304-1.1953-.4414-1.9062-.625a.8647.8647 0 0 0 .0586-.1953z" />
      </svg>
    ),
    glowClass: "hover:shadow-[0_0_25px_rgba(255,65,84,0.35)] hover:border-[#FF4154]/40",
  },
  {
    name: "Node.js",
    percentage: "88%",
    logo: (
      <svg role="img" viewBox="0 0 24 24" className="w-[34px] h-[34px] fill-[#339933]">
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
      </svg>
    ),
    glowClass: "hover:shadow-[0_0_25px_rgba(51,153,51,0.35)] hover:border-[#339933]/40",
  },
  {
    name: "Tailwind CSS",
    percentage: "95%",
    logo: <i className="devicon-tailwindcss-original colored text-[36px]"></i>,
    glowClass: "hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:border-[#06B6D4]/40",
  },
  {
    name: "MongoDB",
    percentage: "85%",
    logo: <i className="devicon-mongodb-plain colored text-[34px]"></i>,
    glowClass: "hover:shadow-[0_0_25px_rgba(71,162,72,0.35)] hover:border-[#47A248]/40",
  },
  {
    name: "PostgreSQL",
    percentage: "85%",
    logo: <i className="devicon-postgresql-plain colored text-[34px]"></i>,
    glowClass: "hover:shadow-[0_0_25px_rgba(51,103,145,0.35)] hover:border-[#336791]/40",
  },
  {
    name: "Redis",
    percentage: "80%",
    logo: <i className="devicon-redis-plain colored text-[34px]"></i>,
    glowClass: "hover:shadow-[0_0_25px_rgba(216,44,32,0.35)] hover:border-[#D82C20]/40",
  },
  {
    name: "Prisma",
    percentage: "82%",
    logo: <i className="devicon-prisma-original colored text-[34px] dark:invert"></i>,
    glowClass: "hover:shadow-[0_0_25px_rgba(45,55,72,0.35)] hover:border-[#2D3748]/40",
  },
];

const Tools = () => {
  return (
    <section className="py-24 bg-background text-foreground transition-colors duration-300 relative overflow-hidden border-t border-border/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Header Section */}
        <div className="flex flex-col items-center space-y-3 mb-16">
          <div className="flex items-center text-sm font-semibold tracking-wider text-primary dark:text-foreground/80 uppercase">
            <span className="w-6 h-0.5 bg-secondary mr-3 rounded-full"></span>
            My Tech Stack
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans">
            <span className="text-secondary">Exploring the Tools</span> <span className="block sm:inline">Behind My Code</span>
          </h2>
        </div>

        {/* Capsules Container */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center mt-12">
          {toolsData.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 group">
              {/* Vertical Capsule Card */}
              <div 
                className={`w-32 h-56 rounded-full bg-custom-gray/60 dark:bg-custom-gray/40 border border-border/80 flex flex-col items-center justify-between py-6 px-3 transition-all duration-500 hover:-translate-y-3 hover:bg-white dark:hover:bg-background ${item.glowClass}`}
              >
                {/* Top: Logo in white circle */}
                <div className="w-16 h-16 rounded-full bg-white dark:bg-zinc-800 shadow-md shadow-black/5 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 border border-border/10">
                  {item.logo}
                </div>

                {/* Bottom: Skill Percentage inside capsule */}
                <div className="text-2xl font-extrabold text-foreground tracking-tight select-none">
                  {item.percentage}
                </div>
              </div>

              {/* Outside label: Technology Name */}
              <span className="text-sm md:text-base font-semibold text-foreground/80 group-hover:text-primary dark:group-hover:text-secondary transition-colors duration-300">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;

