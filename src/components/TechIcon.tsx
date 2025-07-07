import React from 'react';

// Tech data with icons and brand colors
export const techData: Record<string, { icon: string; color: string }> = {
  // Frontend
  'HTML': { icon: '/src/assets/html5.svg', color: '#E34F26' },
  'CSS': { icon: '/src/assets/css.svg', color: '#1572B6' },
  'JavaScript': { icon: '/src/assets/javascript.svg', color: '#F7DF1E' },
  'TypeScript': { icon: '/src/assets/typescript.svg', color: '#3178C6' },
  'React': { icon: '/src/assets/react.svg', color: '#61DAFB' },
  'Angular': { icon: '/src/assets/angular.svg', color: '#DD0031' },
  'jQuery': { icon: '/src/assets/jquery.svg', color: '#0769AD' },
  'Capacitor': { icon: '/src/assets/capacitor.svg', color: '#119EFF' },
  
  // Backend
  'Python': { icon: '/src/assets/python.svg', color: '#3776AB' },
  '.NET': { icon: '/src/assets/dotnet.svg', color: '#512BD4' },
  'Node.js': { icon: '/src/assets/nodedotjs.svg', color: '#339933' },
  'C#': { icon: '/src/assets/cs.svg', color: '#239120' },
  
  // Database
  'SQL': { icon: '/src/assets/sql.svg', color: '#CC2927' },
  'MS SQL': { icon: '/src/assets/sql.svg', color: '#CC2927' },
  'PostgreSQL': { icon: '/src/assets/sql.svg', color: '#336791' },
  
  // Testing
  'Selenium': { icon: '/src/assets/selenium.svg', color: '#43B02A' },
  'WebdriverIO': { icon: '/src/assets/webdriverio.svg', color: '#EA5906' },
  'Mocha': { icon: '/src/assets/javascript.svg', color: '#8D6748' },
  
  // DevOps
  'Git': { icon: '/src/assets/git.svg', color: '#F05032' },
  'Docker': { icon: '/src/assets/docker.svg', color: '#2496ED' },
  'VSCode': { icon: '/src/assets/vsc.svg', color: '#007ACC' },
  
  // Design
  'Photoshop': { icon: '/src/assets/ps.svg', color: '#31A8FF' },
  'Vegas PRO': { icon: '/src/assets/vegas.svg', color: '#FF6B35' },
  'FL Studio': { icon: '/src/assets/fl.svg', color: '#FF7200' },
  
  // Other
  'BPMN': { icon: '/src/assets/html5.svg', color: '#FF6B6B' } // Using HTML5 icon as placeholder
};

interface TechIconProps {
  techName: string;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  className?: string;
}

const TechIcon: React.FC<TechIconProps> = ({ 
  techName, 
  size = 'sm', 
  showIcon = true, 
  className = '' 
}) => {
  const tech = techData[techName];
  
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-2',
    lg: 'gap-3'
  };

  // If tech not found, render without icon
  if (!tech || !showIcon) {
    return (
      <span className={`text-gray-200 ${className}`}>
        {techName}
      </span>
    );
  }

  return (
    <span className={`flex items-center ${gapClasses[size]} ${className}`}>
      <div 
        className={`${sizeClasses[size]} flex items-center justify-center`}
        style={{ 
          backgroundColor: tech.color, 
          mask: `url(${tech.icon}) center/contain no-repeat`, 
          WebkitMask: `url(${tech.icon}) center/contain no-repeat` 
        }}
        aria-label={`${techName} icon`}
      />
      {techName}
    </span>
  );
};

export default TechIcon;
