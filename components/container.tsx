import React from 'react'

const Container = ({ children, className } : {children: React.ReactNode; className?: string;}) => {
  return <div className="max-w-7xl mx-auto px-4 md:py-8">{children}</div>;
}

export default Container