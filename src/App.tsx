import { useEffect, useMemo, useRef, useState } from 'react';
import { LanguagePicker } from './components/LanguagePicker';
import { NativeToggle } from './components/NativeToggle';
import { WorldMap } from './components/WorldMap';
import { MapCard } from './components/MapCard';
import { ResultsList } from './components/ResultsList';
import { ExportButton } from './components/ExportButton';
import { computeCoverage, matchCountries } from './lib/match';
import { LANGUAGES } from './data/languages';

function readInitialState() {
  const params = new URLSearchParams(window.location.search);
  const langsParam = params.get('langs');
  const validCodes = new Set(LANGUAGES.map((l) => l.code));
  const langs = langsParam
    ? langsParam.split(',').filter((c) => validCodes.has(c))
    : ['en'];
  const native = params.get('native') === '1';
  return { langs, native };
}

function App() {
  const initial = useMemo(readInitialState, []);
  const [selectedLangs, setSelectedLangs] = useState<string[]>(initial.langs);
  const [nativeOnly, setNativeOnly] = useState(initial.native);
  const exportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedLangs.length > 0) params.set('langs', selectedLangs.join(','));
    if (nativeOnly) params.set('native', '1');
    const query = params.toString();
    const url = query ? `${window.location.pathname}?${query}` : window.location.pathname;
    window.history.replaceState(null, '', url);
  }, [selectedLangs, nativeOnly]);

  const matches = useMemo(
    () => matchCountries(selectedLangs, nativeOnly),
    [selectedLangs, nativeOnly],
  );
  const coverage = useMemo(() => computeCoverage(matches), [matches]);

  return (
    <div className="flex flex-col bg-gradient-to-b from-indigo-50 via-white to-white lg:h-screen">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-4 sm:py-6 lg:overflow-hidden">
        <header className="mb-4 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            🗺️ Speak &amp; Go
          </h1>
          <p className="mx-auto mt-1 max-w-xl text-xs text-slate-500 sm:text-sm">
            Tell us what languages you speak — we'll show you where in the world you
            can get by without a translator.
          </p>
        </header>

        <div
          className="grid flex-1 gap-4 [grid-template-areas:'picker'_'toggle'_'map'_'aside'] lg:grid-cols-[1fr_300px] lg:grid-rows-[auto_1fr] lg:overflow-hidden lg:[grid-template-areas:'picker_toggle'_'map_aside']"
        >
          <div className="z-20 rounded-3xl border border-slate-200 bg-white/80 p-3 shadow-sm backdrop-blur [grid-area:picker]">
            <LanguagePicker selected={selectedLangs} onChange={setSelectedLangs} />
          </div>

          <div className="z-20 [grid-area:toggle]">
            <NativeToggle nativeOnly={nativeOnly} onChange={setNativeOnly} />
          </div>

          <div
            ref={exportRef}
            className="min-h-[50vh] rounded-3xl bg-white [grid-area:map] lg:min-h-0"
          >
            <MapCard selectedLangs={selectedLangs} nativeOnly={nativeOnly} coverage={coverage}>
              <WorldMap
                matches={matches}
                hasSelection={selectedLangs.length > 0}
                nativeOnly={nativeOnly}
              />
            </MapCard>
          </div>

          <aside className="flex min-h-0 flex-col gap-3 [grid-area:aside]">
            <div className="min-h-[200px] flex-1 rounded-3xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur">
              <ResultsList matches={matches} />
            </div>
            <ExportButton targetRef={exportRef} />
            <p className="text-center text-[11px] leading-snug text-slate-400">
              A country qualifies if at least ⅓ of its population speaks a language
              you selected. For fun, not a substitute for real travel advice — data
              quality varies by country.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;
