interface Props {
  nativeOnly: boolean;
  onChange: (value: boolean) => void;
}

export function NativeToggle({ nativeOnly, onChange }: Props) {
  return (
    <button
      type="button"
      onClick={() => onChange(!nativeOnly)}
      className="flex h-full w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
    >
      <div className="text-left">
        <div className="text-sm font-medium text-slate-700">Only count native speakers</div>
        <div className="text-xs text-slate-400">
          {nativeOnly ? (
            <>
              <span className="font-semibold text-indigo-500">Toggle ON</span> — Stricter:
              ignores countries where it’s only a learned second language
            </>
          ) : (
            <>
              <span className="font-semibold text-indigo-500">Toggle OFF</span> — Looser:
              counts places where it’s widely taught/used, even if not native
            </>
          )}
        </div>
      </div>
      <span
        className={`relative ml-3 h-6 w-11 flex-shrink-0 rounded-full transition-colors ${
          nativeOnly ? 'bg-indigo-600' : 'bg-slate-200'
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
            nativeOnly ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </span>
    </button>
  );
}
