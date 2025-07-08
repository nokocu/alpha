import React from 'react';

// tech data with icons and brand colors
export const techData: Record<string, { icon: string; color: string }> = {
  // frontend
  'HTML': { icon: './assets/html5.svg', color: '#E34F26' },
  'CSS': { icon: './assets/css.svg', color: '#1572B6' },
  'JavaScript': { icon: './assets/javascript.svg', color: '#F7DF1E' },
  'TypeScript': { icon: './assets/typescript.svg', color: '#3178C6' },
  'React': { icon: './assets/react.svg', color: '#61DAFB' },
  'Angular': { icon: './assets/angular.svg', color: '#DD0031' },
  'jQuery': { icon: './assets/jquery.svg', color: '#0769AD' },
  'Capacitor': { icon: './assets/capacitor.svg', color: '#119EFF' },
  
  // backend
  'Python': { icon: './assets/python.svg', color: '#3776AB' },
  '.NET': { icon: './assets/dotnet.svg', color: '#512BD4' },
  'Node.js': { icon: './assets/nodedotjs.svg', color: '#339933' },
  'C#': { icon: './assets/cs.svg', color: '#239120' },
  
  // database
  'SQL': { icon: './assets/sql.svg', color: '#CC2927' },
  'MS SQL': { icon: './assets/sql.svg', color: '#CC2927' },
  'PostgreSQL': { icon: './assets/sql.svg', color: '#336791' },
  
  // testing
  'Selenium': { icon: './assets/selenium.svg', color: '#43B02A' },
  'WebdriverIO': { icon: './assets/webdriverio.svg', color: '#EA5906' },
  'Mocha': { icon: './assets/javascript.svg', color: '#8D6748' },
  
  // devOps
  'Git': { icon: './assets/git.svg', color: '#F05032' },
  'Docker': { icon: './assets/docker.svg', color: '#2496ED' },
  'VSCode': { icon: './assets/vsc.svg', color: '#007ACC' },
  
  // design
  'Photoshop': { icon: './assets/ps.svg', color: '#31A8FF' },
  'Vegas PRO': { icon: './assets/vegas.svg', color: '#FF6B35' },
  'FL Studio': { icon: './assets/fl.svg', color: '#FF7200' },
  
  // other
  'BPMN': { icon: './assets/html5.svg', color: '#FF6B6B' }
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

  // if tech not found, render without icon
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
