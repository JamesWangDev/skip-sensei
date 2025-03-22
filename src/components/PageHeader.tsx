import React from "react";

type Props = {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: Props) => {
  return (
    <div className="text-center max-w-2xl mx-auto mb-10 animate-fade-in">
      <h1 className="text-3xl font-bold tracking-tight mb-3 text-white">{title}</h1>
      {subtitle && (
        <p className="text-gray-400 text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
