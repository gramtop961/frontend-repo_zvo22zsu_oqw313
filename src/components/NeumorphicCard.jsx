import React from 'react';

const baseShadow = 'shadow-[12px_12px_24px_rgba(0,0,0,0.12),_-12px_-12px_24px_rgba(255,255,255,0.9)]';

export default function NeumorphicCard({ className = '', children, as: Tag = 'div', inset = false }) {
  const shadows = inset
    ? 'shadow-[inset_10px_10px_20px_rgba(0,0,0,0.08),_inset_-10px_-10px_20px_rgba(255,255,255,0.95)]'
    : baseShadow;

  return (
    <Tag
      className={`rounded-3xl bg-[#F6F9FF] ${shadows} ${className}`}
      style={{ backdropFilter: 'saturate(120%) blur(4px)' }}
    >
      {children}
    </Tag>
  );
}
