
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const StatisticsBadge = () => {
  return (
    <div className="flex items-center space-x-4 bg-merkurie-surface/20 backdrop-blur-sm rounded-lg p-4 border border-white/10">
      {/* Stacked Avatars */}
      <div className="flex -space-x-2">
        <Avatar className="w-8 h-8 border-2 border-white">
          <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face" />
          <AvatarFallback>J</AvatarFallback>
        </Avatar>
        <Avatar className="w-8 h-8 border-2 border-white">
          <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b332c96c?w=64&h=64&fit=crop&crop=face" />
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
        <Avatar className="w-8 h-8 border-2 border-white">
          <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face" />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
      </div>
      
      {/* Statistics Text */}
      <div>
        <div className="text-white text-xl font-bold">500+</div>
        <div className="text-white/70 text-sm">Celebrity Partners</div>
      </div>
    </div>
  );
};

export default StatisticsBadge;
