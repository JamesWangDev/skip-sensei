
import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center max-w-2xl mx-auto mb-10 animate-fade-in">
      <h1 className="text-3xl font-bold tracking-tight mb-3">{title}</h1>
      {subtitle && (
        <p className="text-muted-foreground text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
