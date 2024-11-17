import React from 'react';
import Image from 'next/image';
import Typography from '../atoms/Typography';
import { ProfileCardProps } from './interface';

const ProfileCard: React.FC<ProfileCardProps> = ({
  profileImage,
  name,
  role,
  skills,
  scale,
  opacity,
  position,
}) => {
  const positionClass = position === 'left'
    ? '-translate-x-4'
    : position === 'right'
    ? 'translate-x-4'
    : '';
  
  const scaleClass = scale === 90
    ? 'scale-90'
    : scale === 105
    ? 'scale-105'
    : '';

  const opacityClass = opacity === 70
    ? 'opacity-70'
    : 'opacity-100';

  return (
    <div
      className={`${
        position === 'left' || position === 'right' ? 'absolute' : 'z-10'
      } ${position === 'left' ? 'left-0' : position === 'right' ? 'right-0' : ''} 
      w-[60%] bg-white text-gray-800 p-6 rounded-xl shadow-lg transform ${scaleClass} ${opacityClass} ${positionClass} transition duration-300`}
    >
      <div className="relative flex justify-center mb-4">
        <Image
          src={profileImage}
          alt={name}
          className="rounded-full w-20 h-20 border-4 border-white"
          width={80}
          height={80}
        />
      </div>
      <Typography className="text-lg font-bold text-center">{name}</Typography>
      <Typography className="text-blue-600 font-bold text-center">{role}</Typography>
      <div className="flex flex-wrap font-bold justify-center mt-4 space-x-2 space-y-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
