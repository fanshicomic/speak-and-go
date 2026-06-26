import { COUNTRIES, type CountryEntry, type Confidence } from '../data/countries';
import { AREA_BY_ID, TOTAL_LAND_AREA, TOTAL_COUNTRY_COUNT } from '../data/worldStats';

export const THRESHOLD = 1 / 3;

export interface MatchedLanguage {
  code: string;
  share: number;
  nativeShare: number;
  confidence: Confidence;
}

export interface MatchResult {
  country: CountryEntry;
  matchedLanguages: MatchedLanguage[];
  /** True if at least one matched language is native-spoken by >= threshold of the population. */
  isNativeMatch: boolean;
}

export function matchCountries(
  selectedLangs: string[],
  nativeOnly: boolean,
): MatchResult[] {
  if (selectedLangs.length === 0) return [];
  const selected = new Set(selectedLangs);
  const results: MatchResult[] = [];

  for (const country of COUNTRIES) {
    const matched = country.languages.filter((l) => {
      if (!selected.has(l.code)) return false;
      const value = nativeOnly ? l.nativeShare : l.share;
      return value >= THRESHOLD;
    });
    if (matched.length > 0) {
      results.push({
        country,
        matchedLanguages: matched.map((l) => ({
          code: l.code,
          share: nativeOnly ? l.nativeShare : l.share,
          nativeShare: l.nativeShare,
          confidence: l.confidence,
        })),
        isNativeMatch: matched.some((l) => l.nativeShare >= THRESHOLD),
      });
    }
  }

  return results;
}

export interface CoverageStats {
  countryCount: number;
  totalCountries: number;
  countryPct: number;
  areaPct: number;
}

/**
 * Coverage is measured against all 240 mapped countries/territories (Antarctica
 * excluded), not just the ~110 we have language data for — so gaps in our
 * dataset show up as "uncovered" rather than inflating the percentage.
 */
export function computeCoverage(matches: MatchResult[]): CoverageStats {
  let coveredArea = 0;
  for (const m of matches) {
    coveredArea += AREA_BY_ID[m.country.id] ?? 0;
  }

  return {
    countryCount: matches.length,
    totalCountries: TOTAL_COUNTRY_COUNT,
    countryPct: (matches.length / TOTAL_COUNTRY_COUNT) * 100,
    areaPct: (coveredArea / TOTAL_LAND_AREA) * 100,
  };
}
