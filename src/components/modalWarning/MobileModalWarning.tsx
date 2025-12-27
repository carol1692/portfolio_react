import { useEffect, useState } from "react";

export function MobileModalWarning() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1000 || window.innerHeight < 800) {
      setOpen(true);
    }
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white/50 flex items-center justify-center">
      <div className="bg-(--color-almond-silk-100) rounded-xl p-6 max-w-sm text-center border-2 border-(--color-coffee-bean-700) border-e-10 border-b-10">
        <h2 className="extt-lg text-(--color-desert-sand-800) font-bold mb-2">What a mess 😰 </h2>
        <p className="text-sm mb-4 text-(--color-desert-sand-800)">
          This website was developed for optimal viewing on desktop.
        </p>
        <button
          onClick={() => setOpen(false)}
          className="px-4 py-2 bg-(--color-coffee-bean-700) text-white rounded-md"
        >
          Ok
        </button>
      </div>
    </div>
  );
}
