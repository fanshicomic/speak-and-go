import { useEffect, useMemo, useRef, useState } from 'react';
import { LANGUAGES, LANGUAGE_BY_CODE } from '../data/languages';

interface Props {
  selected: string[];
  onChange: (codes: string[]) => void;
}

export function LanguagePicker({ selected, onChange }: Props) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handlePointerDown(e: PointerEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [open]);

  const options = useMemo(() => {
    const q = query.trim().toLowerCase();
    return LANGUAGES.filter(
      (l) =>
        !selected.includes(l.code) &&
        (q === '' || l.name.toLowerCase().includes(q) || l.native.toLowerCase().includes(q)),
    );
  }, [query, selected]);

  function add(code: string) {
    onChange([...selected, code]);
    setQuery('');
    setOpen(false);
  }

  function remove(code: string) {
    onChange(selected.filter((c) => c !== code));
  }

  return (
    <div className="relative" ref={containerRef}>
      <label className="mb-2 block text-sm font-medium text-slate-600">
        Languages you speak
      </label>

      <div
        className="flex min-h-[3.25rem] w-full flex-wrap items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm transition focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-100"
        onClick={() => setOpen(true)}
      >
        {selected.map((code) => (
          <span
            key={code}
            className="flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700"
          >
            {LANGUAGE_BY_CODE[code]?.name ?? code}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                remove(code);
              }}
              className="text-indigo-400 hover:text-indigo-700"
              aria-label={`Remove ${LANGUAGE_BY_CODE[code]?.name}`}
            >
              ×
            </button>
          </span>
        ))}
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setOpen(true)}
          placeholder={selected.length === 0 ? 'Search languages…' : ''}
          className="min-w-[8rem] flex-1 border-none bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
        />
      </div>

      {open && (
        <div className="absolute z-50 mt-2 max-h-64 w-full overflow-auto rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xl">
          {options.length === 0 ? (
            <div className="px-3 py-2 text-sm text-slate-400">No matches</div>
          ) : (
            options.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => add(l.code)}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm text-slate-700 hover:bg-indigo-50"
              >
                <span>{l.name}</span>
                <span className="text-slate-400">{l.native}</span>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}
