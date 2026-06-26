import { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import type { MatchResult } from '../lib/match';

const GEO_URL = '/world-50m.json';

const NATIVE_FILL = '#4f46e5';
const NATIVE_HOVER = '#3730a3';
const LEARNED_FILL = '#22c1c3';
const LEARNED_HOVER = '#0f9b9d';
const NO_MATCH_FILL = '#e2e8f0';
const NO_MATCH_HOVER = '#94a3b8';
const EMPTY_FILL = '#cbd5e1';

const MIN_ZOOM = 1;
const MAX_ZOOM = 8;

interface Props {
  matches: MatchResult[];
  hasSelection: boolean;
  nativeOnly: boolean;
}

interface TooltipState {
  x: number;
  y: number;
  name: string;
  detail: string;
}

interface MapPosition {
  coordinates: [number, number];
  zoom: number;
}

export function WorldMap({ matches, hasSelection, nativeOnly }: Props) {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [position, setPosition] = useState<MapPosition>({ coordinates: [0, 0], zoom: 1 });
  const matchById = new Map(matches.map((m) => [m.country.id, m]));
  const showLegend = hasSelection && !nativeOnly;

  function zoomBy(factor: number) {
    setPosition((pos) => ({
      ...pos,
      zoom: Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, pos.zoom * factor)),
    }));
  }

  function resetZoom() {
    setPosition({ coordinates: [0, 0], zoom: 1 });
  }

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-sky-50 to-white">
      <div className="flex-1">
        <ComposableMap
          projectionConfig={{ scale: 165 }}
          style={{ width: '100%', height: '100%' }}
        >
          <ZoomableGroup
            center={position.coordinates}
            zoom={position.zoom}
            minZoom={MIN_ZOOM}
            maxZoom={MAX_ZOOM}
            onMoveEnd={(pos) => setPosition({ coordinates: pos.coordinates, zoom: pos.zoom })}
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const match = matchById.get(geo.id);
                  const isNative = match ? match.isNativeMatch : false;

                  let fill = hasSelection ? NO_MATCH_FILL : EMPTY_FILL;
                  let hover = hasSelection ? NO_MATCH_HOVER : EMPTY_FILL;
                  if (match) {
                    const useNativeColor = nativeOnly || isNative;
                    fill = useNativeColor ? NATIVE_FILL : LEARNED_FILL;
                    hover = useNativeColor ? NATIVE_HOVER : LEARNED_HOVER;
                  }

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={(evt) => {
                        const langs = match
                          ? match.matchedLanguages.map((l) => l.code.toUpperCase()).join(', ')
                          : 'No qualifying language';
                        setTooltip({
                          x: evt.clientX,
                          y: evt.clientY,
                          name: geo.properties.name,
                          detail: langs,
                        });
                      }}
                      onMouseMove={(evt) => {
                        setTooltip((t) => (t ? { ...t, x: evt.clientX, y: evt.clientY } : t));
                      }}
                      onMouseLeave={() => setTooltip(null)}
                      style={{
                        default: {
                          fill,
                          stroke: '#fff',
                          strokeWidth: 0.5,
                          outline: 'none',
                          transition: 'fill 200ms ease',
                        },
                        hover: {
                          fill: hover,
                          stroke: '#fff',
                          strokeWidth: 0.5,
                          outline: 'none',
                        },
                        pressed: {
                          fill: hover,
                          stroke: '#fff',
                          strokeWidth: 0.5,
                          outline: 'none',
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>

      <div className="absolute top-4 right-4 flex flex-col gap-1.5">
        <button
          type="button"
          onClick={() => zoomBy(1.5)}
          aria-label="Zoom in"
          className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/90 text-lg font-semibold text-slate-600 shadow-sm backdrop-blur hover:bg-white"
        >
          +
        </button>
        <button
          type="button"
          onClick={() => zoomBy(1 / 1.5)}
          aria-label="Zoom out"
          className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/90 text-lg font-semibold text-slate-600 shadow-sm backdrop-blur hover:bg-white"
        >
          −
        </button>
        <button
          type="button"
          onClick={resetZoom}
          aria-label="Reset zoom"
          className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/90 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur hover:bg-white"
        >
          ⟲
        </button>
      </div>

      {showLegend && (
        <div className="absolute bottom-4 left-4 flex gap-4 rounded-2xl bg-white/90 px-4 py-2 text-xs font-medium text-slate-600 shadow-sm backdrop-blur">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: NATIVE_FILL }} />
            Native language region
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: LEARNED_FILL }} />
            Widely spoken, not native
          </span>
        </div>
      )}

      {tooltip && (
        <div
          className="pointer-events-none fixed z-30 -translate-x-1/2 -translate-y-full rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white shadow-lg"
          style={{ left: tooltip.x, top: tooltip.y - 10 }}
        >
          <div className="font-semibold">{tooltip.name}</div>
          <div className="text-slate-300">{tooltip.detail}</div>
        </div>
      )}
    </div>
  );
}
