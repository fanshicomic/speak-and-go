import type { ReactNode } from 'react';
import { LANGUAGE_BY_CODE } from '../data/languages';
import type { CoverageStats } from '../lib/match';

interface Props {
  selectedLangs: string[];
  nativeOnly: boolean;
  coverage: CoverageStats;
  children: ReactNode;
}

export function MapCard({ selectedLangs, nativeOnly, coverage, children }: Props) {
  const langNames = selectedLangs.map((code) => LANGUAGE_BY_CODE[code]?.name ?? code);

  return (
    <div className="flex h-full flex-col rounded-3xl bg-white p-3">
      <div className="mb-2 flex flex-wrap items-start justify-between gap-2 px-1">
        <div>
          <div className="text-sm font-semibold text-slate-800">🗺️ Speak &amp; Go</div>
          <div className="text-xs text-slate-500">
            {langNames.length > 0 ? (
              <>I speak: {langNames.join(', ')}</>
            ) : (
              'No languages selected yet'
            )}
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-600">
            {coverage.countryCount} countries &amp; regions
          </span>
          <span className="text-[10px] font-medium text-slate-400">
            {coverage.countryPct.toFixed(0)}% of countries &middot; {coverage.areaPct.toFixed(0)}%
            of land area
          </span>
          <span className="text-[10px] font-medium text-slate-400">
            {nativeOnly ? 'Native speakers only' : 'Includes widely-learned languages'}
          </span>
        </div>
      </div>

      <div className="min-h-0 flex-1">{children}</div>

      <p className="mt-2 px-1 text-center text-[10px] leading-snug text-slate-400">
        A country qualifies if ≥⅓ of its population speaks the language · for fun, not
        official travel advice
      </p>
    </div>
  );
}
