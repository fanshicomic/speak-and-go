import { useState, type RefObject } from 'react';
import { toPng } from 'html-to-image';

interface Props {
  targetRef: RefObject<HTMLElement | null>;
}

export function ExportButton({ targetRef }: Props) {
  const [busy, setBusy] = useState(false);

  async function handleExport() {
    if (!targetRef.current) return;
    setBusy(true);
    try {
      const dataUrl = await toPng(targetRef.current, {
        backgroundColor: '#ffffff',
        pixelRatio: 2,
      });
      const link = document.createElement('a');
      link.download = 'speak-and-go-map.png';
      link.href = dataUrl;
      link.click();
    } finally {
      setBusy(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleExport}
      disabled={busy}
      className="w-full rounded-2xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:opacity-60"
    >
      {busy ? 'Generating…' : 'Save as image to share'}
    </button>
  );
}
