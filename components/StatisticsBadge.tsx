
// import React from 'react';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// const StatisticsBadge = () => {
//   return (
//     <div className="flex items-center space-x-4 bg-merkurie-surface/20 backdrop-blur-sm rounded-lg p-4 border border-white/10">
//       {/* Stacked Avatars */}
//       <div className="flex -space-x-2">
//         <Avatar className="w-8 h-8 border-2 border-white">
//           <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face" />
//           <AvatarFallback>J</AvatarFallback>
//         </Avatar>
//         <Avatar className="w-8 h-8 border-2 border-white">
//           <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b332c96c?w=64&h=64&fit=crop&crop=face" />
//           <AvatarFallback>S</AvatarFallback>
//         </Avatar>
//         <Avatar className="w-8 h-8 border-2 border-white">
//           <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face" />
//           <AvatarFallback>M</AvatarFallback>
//         </Avatar>
//       </div>
      
//       {/* Statistics Text */}
//       <div>
//         <div className="text-white text-xl font-bold">500+</div>
//         <div className="text-white/70 text-sm">Celebrity Partners</div>
//       </div>
//     </div>
//   );
// };

// export default StatisticsBadge;


// This component is kept as is, assuming its styling is compatible or can be adjusted by the user.
import React from 'react';
import { motion } from "framer-motion"
import { Star, Users, Award } from 'lucide-react';
import { cn } from "@/lib/utils"

const StatisticsBadge = () => {
  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1, delayChildren: 1.0 }}
      className="inline-flex flex-wrap justify-center gap-4 p-4 rounded-xl bg-white/[0.05] border border-white/[0.1] backdrop-blur-sm shadow-lg"
    >
      <motion.div variants={statVariants} className="flex items-center gap-2 text-white/80">
        <Star className="w-5 h-5 text-yellow-400" />
        <span className="font-semibold text-lg">10+</span>
        <span className="text-sm text-white/60">Years Experience</span>
      </motion.div>
      <motion.div variants={statVariants} className="flex items-center gap-2 text-white/80">
        <Users className="w-5 h-5 text-merkurie-coral" />
        <span className="font-semibold text-lg">500+</span>
        <span className="text-sm text-white/60">Celebrity Partners</span>
      </motion.div>
      <motion.div variants={statVariants} className="flex items-center gap-2 text-white/80">
        <Award className="w-5 h-5 text-merkurie-teal" />
        <span className="font-semibold text-lg">1000+</span>
        <span className="text-sm text-white/60">Successful Campaigns</span>
      </motion.div>
    </motion.div>
  );
};

export default StatisticsBadge;
