import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'dark' | 'outline-light';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
}

export const ButtonPrimary: React.FC<ButtonProps> = ({
  children,
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-bold rounded-lg',
    md: 'px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-bold rounded-xl',
    lg: 'px-6 py-3.5 sm:px-8 sm:py-4 text-base font-bold rounded-xl'
  }[size];

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 bg-[#C38735] hover:bg-[#A66C23] text-[#04162B] transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed font-heading tracking-wide ${sizeClasses} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const ButtonSecondary: React.FC<ButtonProps> = ({
  children,
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold rounded-lg',
    md: 'px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-semibold rounded-xl',
    lg: 'px-6 py-3.5 sm:px-8 sm:py-4 text-base font-semibold rounded-xl'
  }[size];

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 bg-transparent border border-[#04162B] text-[#04162B] hover:bg-[#04162B]/5 active:bg-[#04162B]/10 transition-all duration-200 cursor-pointer rounded-xl font-heading tracking-wide ${sizeClasses} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const ButtonOutlineLight: React.FC<ButtonProps> = ({
  children,
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold rounded-lg',
    md: 'px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-semibold rounded-xl',
    lg: 'px-6 py-3.5 sm:px-8 sm:py-4 text-base font-semibold rounded-xl'
  }[size];

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white hover:bg-white/10 hover:border-white/60 transition-all duration-200 cursor-pointer rounded-xl font-heading tracking-wide ${sizeClasses} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
