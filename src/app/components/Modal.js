"use client";

export default function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="relative z-[70] card rounded-2xl max-w-lg w-[90%] bg-white p-6">
        {title && (
          <div className="text-[#1a2a3a] font-semibold text-lg mb-3">{title}</div>
        )}
        <div className="text-[#2a3b4f]">{children}</div>
        <div className="mt-6 text-right">
          <button onClick={onClose} className="px-4 py-2 rounded-md bg-[#1463bf] text-white">Close</button>
        </div>
      </div>
    </div>
  );
}


