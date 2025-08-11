// 'use client';

// import React from 'react';
// import {
//   MessageCircle,
//   Search,
//   Handshake,
//   Lightbulb,
//   Edit,
//   Truck,
//   BarChart,
// } from 'lucide-react';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';


// const ProcessSection = () => {
//   const steps = [
//     {
//       icon: MessageCircle,
//       title: 'Consultation',
//       description:
//         'Understanding your brand goals, target audience, and campaign objectives',
//     },
//     {
//       icon: Search,
//       title: 'Research & Strategy',
//       description:
//         'Identifying the perfect celebrity match and developing comprehensive campaign strategy',
//     },
//     {
//       icon: Handshake,
//       title: 'Negotiation & Contracts',
//       description:
//         'Securing favorable terms and managing all contractual agreements',
//     },
//     {
//       icon: Lightbulb,
//       title: 'Development',
//       description:
//         'Creating compelling campaign concepts, scripts, and content strategy',
//     },
//     {
//       icon: Edit,
//       title: 'Revisions',
//       description:
//         'Refining content based on feedback and ensuring brand alignment',
//     },
//     {
//       icon: Truck,
//       title: 'Final Delivery',
//       description:
//         'Executing the campaign across all planned channels and platforms',
//     },
//     {
//       icon: BarChart,
//       title: 'Tracking & Optimization',
//       description:
//         'Monitoring performance metrics and optimizing for maximum results',
//     },
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-5xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <div className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-700 mb-4">
//             <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
//             Our Process
//           </div>
//           <h2 className="text-4xl font-bold text-gray-800 mb-6 font-sans">
//             From Concept to{' '}
//             <span className="text-yellow-500">Campaign Success</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Our proven 7-step process ensures every campaign is strategically
//             planned, flawlessly executed, and delivers measurable results.
//           </p>
//         </div>

//         <div className="relative flex flex-col items-start">
//           {/* Vertical line */}
//           <motion.div
//             initial={{ height: 0 }}
//             whileInView={{ height: '100%' }}
//             transition={{ duration: 1, ease: 'easeInOut' }}
//             viewport={{ once: true }}
//             className="absolute left-[calc(50%-1px)] w-0.5 bg-yellow-500 origin-top"
//           />

         
//           {steps.map((step, index) => {
//             const { ref, inView } = useInView({ triggerOnce: true });
//             const controls = useAnimation();

//             if (inView) {
//               controls.start('visible');
//             }

//             return (
//               <motion.div
//                 ref={ref}
//                 key={index}
//                 className={`relative flex w-full py-8 ${
//                   index % 2 === 0 ? 'justify-start' : 'justify-end'
//                 }`}
//                 initial="hidden"
//                 animate={controls}
//                 variants={{
//                   hidden: { opacity: 0, y: 50 },
//                   visible: {
//                     opacity: 1,
//                     y: 0,
//                     transition: { duration: 0.6, delay: index * 0.2 },
//                   },
//                 }}
//               >
//                 {/* Dot */}
//                 <motion.div
//                   className="absolute left-[calc(50%-6px)] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full z-10"
//                   initial={{ backgroundColor: '#d1d5db' }} // gray-300
//                   animate={{
//                     backgroundColor: inView ? '#facc15' : '#d1d5db', // yellow-500
//                   }}
//                   transition={{ duration: 0.6 }}
//                 />

//                 <div
//                   className={`flex flex-col w-full md:w-1/2 px-4 ${
//                     index % 2 === 0
//                       ? 'items-end text-right pr-12'
//                       : 'items-start text-left pl-12'
//                   }`}
//                 >
//                   <div className="text-5xl font-bold text-gray-400 mb-2">
//                     {String(index + 1).padStart(2, '0')}
//                   </div>
//                   <h3 className="text-2xl font-semibold text-gray-800 mb-2">
//                     {step.title}
//                   </h3>
//                 </div>

//                 <div
//                   className={`flex flex-col w-full md:w-1/2 px-4 ${
//                     index % 2 === 0
//                       ? 'items-start text-left pl-12'
//                       : 'items-end text-right pr-12'
//                   }`}
//                 >
//                   <p className="text-gray-600 text-base">{step.description}</p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProcessSection;
'use client';

import React from 'react';
import {
  MessageCircle,
  Search,
  Handshake,
  Lightbulb,
  Edit,
  Truck,
  BarChart,
} from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StepItem = ({ step, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const controls = useAnimation();

  if (inView) {
    controls.start('visible');
  }

  return (
    <motion.div
      ref={ref}
      className={`relative flex w-full py-8 ${
        index % 2 === 0 ? 'justify-start' : 'justify-end'
      }`}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: index * 0.2 },
        },
      }}
    >
      {/* Dot */}
      <motion.div
        className="absolute left-[calc(50%-6px)] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full z-10"
        initial={{ backgroundColor: '#d1d5db' }} // gray-300
        animate={{
          backgroundColor: inView ? '#facc15' : '#d1d5db', // yellow-500
        }}
        transition={{ duration: 0.6 }}
      />

      <div
        className={`flex flex-col w-full md:w-1/2 px-4 ${
          index % 2 === 0
            ? 'items-end text-right pr-12'
            : 'items-start text-left pl-12'
        }`}
      >
        <div className="text-5xl font-bold text-gray-400 mb-2">
          {String(index + 1).padStart(2, '0')}
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          {step.title}
        </h3>
      </div>

      <div
        className={`flex flex-col w-full md:w-1/2 px-4 ${
          index % 2 === 0
            ? 'items-start text-left pl-12'
            : 'items-end text-right pr-12'
        }`}
      >
        <p className="text-gray-600 text-base">{step.description}</p>
      </div>
    </motion.div>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Consultation',
      description:
        'Understanding your brand goals, target audience, and campaign objectives',
    },
    {
      icon: Search,
      title: 'Research & Strategy',
      description:
        'Identifying the perfect celebrity match and developing comprehensive campaign strategy',
    },
    {
      icon: Handshake,
      title: 'Negotiation & Contracts',
      description:
        'Securing favorable terms and managing all contractual agreements',
    },
    {
      icon: Lightbulb,
      title: 'Development',
      description:
        'Creating compelling campaign concepts, scripts, and content strategy',
    },
    {
      icon: Edit,
      title: 'Revisions',
      description:
        'Refining content based on feedback and ensuring brand alignment',
    },
    {
      icon: Truck,
      title: 'Final Delivery',
      description:
        'Executing the campaign across all planned channels and platforms',
    },
    {
      icon: BarChart,
      title: 'Tracking & Optimization',
      description:
        'Monitoring performance metrics and optimizing for maximum results',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-700 mb-4">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            Our Process
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6 font-sans">
            From Concept to{' '}
            <span className="text-yellow-500">Campaign Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 7-step process ensures every campaign is strategically
            planned, flawlessly executed, and delivers measurable results.
          </p>
        </div>

        <div className="relative flex flex-col items-start">
          {/* Vertical line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="absolute left-[calc(50%-1px)] w-0.5 bg-yellow-500 origin-top"
          />

          {steps.map((step, index) => (
            <StepItem key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
