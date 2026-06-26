import { LANGUAGE_BY_CODE } from '../data/languages';
import { computeCoverage, type MatchResult } from '../lib/match';

interface Props {
  matches: MatchResult[];
}

export function ResultsList({ matches }: Props) {
  const sorted = [...matches].sort((a, b) => a.country.name.localeCompare(b.country.name));
  const coverage = computeCoverage(matches);

  return (
    <div className="flex h-full flex-col">
      <div className="mb-1 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-700">
          Countries &amp; regions you're covered in
        </h2>
        <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-600">
          {coverage.countryCount}
        </span>
      </div>

      {sorted.length > 0 && (
        <div className="mb-3 flex gap-3 text-[11px] text-slate-400">
          <span>
            <span className="font-semibold text-slate-600">
              {coverage.countryPct.toFixed(0)}%
            </span>{' '}
            of world countries
          </span>
          <span>
            <span className="font-semibold text-slate-600">
              {coverage.areaPct.toFixed(0)}%
            </span>{' '}
            of world land area
          </span>
        </div>
      )}

      {sorted.length === 0 ? (
        <p className="text-sm text-slate-400">
          Pick a language to see where you can go without trouble.
        </p>
      ) : (
        <ul className="flex-1 space-y-1 overflow-auto pr-1">
          {sorted.map((m) => (
            <li
              key={m.country.id}
              className="flex items-center justify-between rounded-xl px-2.5 py-1.5 text-sm hover:bg-slate-50"
            >
              <span className="text-slate-700">{m.country.name}</span>
              <span className="flex gap-1">
                {m.matchedLanguages.map((l) => (
                  <span
                    key={l.code}
                    title={`${Math.round(l.share * 100)}% · ${l.confidence}`}
                    className="rounded-md bg-indigo-50 px-1.5 py-0.5 text-[11px] font-medium text-indigo-600"
                  >
                    {LANGUAGE_BY_CODE[l.code]?.code.toUpperCase()}
                  </span>
                ))}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
