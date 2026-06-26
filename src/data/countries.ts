export type Confidence = 'official' | 'estimated' | 'rough';

export interface LanguageShare {
  code: string;
  /** Share of population that can hold a conversation in this language (native + proficient L2). 0-1. */
  share: number;
  /** Share of population for whom this is a native / first language. 0-1. */
  nativeShare: number;
  confidence: Confidence;
}

export interface CountryEntry {
  /** ISO 3166-1 numeric code, zero-padded to 3 digits — matches world-atlas topojson feature ids. */
  id: string;
  name: string;
  languages: LanguageShare[];
}

// Sourced from a mix of national census data, CIA World Factbook language
// entries, EF English Proficiency Index, and Wikipedia's official-languages
// list (June 2026 vintage). "official" = backed by census/official-status
// data, "estimated" = backed by a recognized survey (e.g. EF EPI),
// "rough" = our own informed estimate where no solid public source exists.
export const COUNTRIES: CountryEntry[] = [
  // ---- East Asia ----
  {
    id: '156',
    name: 'China',
    languages: [
      { code: 'zh', share: 0.92, nativeShare: 0.92, confidence: 'official' },
      { code: 'en', share: 0.25, nativeShare: 0.01, confidence: 'estimated' },
    ],
  },
  {
    id: '344',
    name: 'Hong Kong',
    languages: [
      { code: 'yue', share: 0.88, nativeShare: 0.88, confidence: 'official' },
      { code: 'en', share: 0.53, nativeShare: 0.04, confidence: 'official' },
      { code: 'zh', share: 0.48, nativeShare: 0.02, confidence: 'estimated' },
    ],
  },
  {
    id: '446',
    name: 'Macao',
    languages: [
      { code: 'yue', share: 0.85, nativeShare: 0.85, confidence: 'official' },
      { code: 'pt', share: 0.02, nativeShare: 0.01, confidence: 'official' },
      { code: 'zh', share: 0.45, nativeShare: 0.03, confidence: 'estimated' },
      { code: 'en', share: 0.32, nativeShare: 0.01, confidence: 'estimated' },
    ],
  },
  {
    id: '158',
    name: 'Taiwan',
    languages: [
      { code: 'zh', share: 0.92, nativeShare: 0.7, confidence: 'official' },
      { code: 'en', share: 0.25, nativeShare: 0.0, confidence: 'estimated' },
    ],
  },
  {
    id: '392',
    name: 'Japan',
    languages: [
      { code: 'ja', share: 0.99, nativeShare: 0.98, confidence: 'official' },
      { code: 'en', share: 0.2, nativeShare: 0.0, confidence: 'estimated' },
    ],
  },
  {
    id: '410',
    name: 'South Korea',
    languages: [
      { code: 'ko', share: 0.99, nativeShare: 0.97, confidence: 'official' },
      { code: 'en', share: 0.27, nativeShare: 0.0, confidence: 'estimated' },
    ],
  },
  {
    id: '408',
    name: 'North Korea',
    languages: [{ code: 'ko', share: 0.99, nativeShare: 0.99, confidence: 'official' }],
  },
  {
    id: '496',
    name: 'Mongolia',
    languages: [{ code: 'ru', share: 0.1, nativeShare: 0.0, confidence: 'rough' }],
  },

  // ---- Southeast Asia ----
  {
    id: '702',
    name: 'Singapore',
    languages: [
      { code: 'en', share: 0.82, nativeShare: 0.36, confidence: 'official' },
      { code: 'zh', share: 0.5, nativeShare: 0.35, confidence: 'official' },
      { code: 'ms', share: 0.27, nativeShare: 0.13, confidence: 'official' },
    ],
  },
  {
    id: '458',
    name: 'Malaysia',
    languages: [
      { code: 'ms', share: 0.75, nativeShare: 0.55, confidence: 'official' },
      { code: 'en', share: 0.62, nativeShare: 0.02, confidence: 'estimated' },
      { code: 'zh', share: 0.3, nativeShare: 0.23, confidence: 'estimated' },
    ],
  },
  {
    id: '360',
    name: 'Indonesia',
    languages: [
      { code: 'id', share: 0.97, nativeShare: 0.45, confidence: 'official' },
      { code: 'en', share: 0.15, nativeShare: 0.0, confidence: 'estimated' },
    ],
  },
  {
    id: '764',
    name: 'Thailand',
    languages: [
      { code: 'th', share: 0.95, nativeShare: 0.9, confidence: 'official' },
      { code: 'en', share: 0.27, nativeShare: 0.0, confidence: 'estimated' },
    ],
  },
  {
    id: '704',
    name: 'Vietnam',
    languages: [
      { code: 'vi', share: 0.96, nativeShare: 0.86, confidence: 'official' },
      { code: 'en', share: 0.2, nativeShare: 0.0, confidence: 'estimated' },
    ],
  },
  {
    id: '608',
    name: 'Philippines',
    languages: [
      { code: 'tl', share: 0.8, nativeShare: 0.28, confidence: 'official' },
      { code: 'en', share: 0.6, nativeShare: 0.01, confidence: 'official' },
    ],
  },
  {
    id: '116',
    name: 'Cambodia',
    languages: [{ code: 'en', share: 0.1, nativeShare: 0.0, confidence: 'rough' }],
  },
  {
    id: '418',
    name: 'Laos',
    languages: [{ code: 'fr', share: 0.03, nativeShare: 0.0, confidence: 'rough' }],
  },
  {
    id: '104',
    name: 'Myanmar',
    languages: [{ code: 'en', share: 0.1, nativeShare: 0.0, confidence: 'rough' }],
  },
  {
    id: '096',
    name: 'Brunei',
    languages: [
      { code: 'ms', share: 0.8, nativeShare: 0.6, confidence: 'official' },
      { code: 'en', share: 0.6, nativeShare: 0.01, confidence: 'estimated' },
    ],
  },
  {
    id: '626',
    name: 'Timor-Leste',
    languages: [
      { code: 'pt', share: 0.3, nativeShare: 0.02, confidence: 'official' },
      { code: 'id', share: 0.4, nativeShare: 0.0, confidence: 'estimated' },
    ],
  },

  // ---- South Asia ----
  {
    id: '356',
    name: 'India',
    languages: [
      { code: 'hi', share: 0.57, nativeShare: 0.43, confidence: 'official' },
      { code: 'en', share: 0.12, nativeShare: 0.002, confidence: 'official' },
      { code: 'ur', share: 0.05, nativeShare: 0.04, confidence: 'estimated' },
      { code: 'bn', share: 0.08, nativeShare: 0.08, confidence: 'estimated' },
    ],
  },
  {
    id: '586',
    name: 'Pakistan',
    languages: [
      { code: 'ur', share: 0.75, nativeShare: 0.08, confidence: 'official' },
      { code: 'en', share: 0.18, nativeShare: 0.0, confidence: 'estimated' },
    ],
  },
  {
    id: '050',
    name: 'Bangladesh',
    languages: [
      { code: 'bn', share: 0.98, nativeShare: 0.98, confidence: 'official' },
      { code: 'en', share: 0.1, nativeShare: 0.0, confidence: 'estimated' },
    ],
  },
  {
    id: '144',
    name: 'Sri Lanka',
    languages: [
      { code: 'en', share: 0.23, nativeShare: 0.01, confidence: 'estimated' },
    ],
  },
  {
    id: '524',
    name: 'Nepal',
    languages: [{ code: 'hi', share: 0.15, nativeShare: 0.0, confidence: 'rough' }],
  },
  {
    id: '064',
    name: 'Bhutan',
    languages: [{ code: 'en', share: 0.3, nativeShare: 0.0, confidence: 'rough' }],
  },
  {
    id: '462',
    name: 'Maldives',
    languages: [{ code: 'en', share: 0.4, nativeShare: 0.0, confidence: 'rough' }],
  },

  // ---- Middle East ----
  {
    id: '682',
    name: 'Saudi Arabia',
    languages: [{ code: 'ar', share: 0.97, nativeShare: 0.65, confidence: 'official' }],
  },
  {
    id: '784',
    name: 'United Arab Emirates',
    languages: [
      { code: 'ar', share: 0.4, nativeShare: 0.12, confidence: 'official' },
      { code: 'en', share: 0.78, nativeShare: 0.02, confidence: 'estimated' },
      { code: 'hi', share: 0.3, nativeShare: 0.0, confidence: 'rough' },
    ],
  },
  {
    id: '634',
    name: 'Qatar',
    languages: [
      { code: 'ar', share: 0.45, nativeShare: 0.12, confidence: 'official' },
      { code: 'en', share: 0.65, nativeShare: 0.01, confidence: 'estimated' },
    ],
  },
  {
    id: '414',
    name: 'Kuwait',
    languages: [
      { code: 'ar', share: 0.6, nativeShare: 0.3, confidence: 'official' },
      { code: 'en', share: 0.45, nativeShare: 0.0, confidence: 'rough' },
    ],
  },
  {
    id: '048',
    name: 'Bahrain',
    languages: [{ code: 'ar', share: 0.7, nativeShare: 0.45, confidence: 'official' }],
  },
  {
    id: '512',
    name: 'Oman',
    languages: [{ code: 'ar', share: 0.8, nativeShare: 0.6, confidence: 'official' }],
  },
  {
    id: '368',
    name: 'Iraq',
    languages: [{ code: 'ar', share: 0.8, nativeShare: 0.78, confidence: 'official' }],
  },
  {
    id: '760',
    name: 'Syria',
    languages: [{ code: 'ar', share: 0.95, nativeShare: 0.9, confidence: 'official' }],
  },
  {
    id: '400',
    name: 'Jordan',
    languages: [{ code: 'ar', share: 0.98, nativeShare: 0.98, confidence: 'official' }],
  },
  {
    id: '422',
    name: 'Lebanon',
    languages: [
      { code: 'ar', share: 0.95, nativeShare: 0.9, confidence: 'official' },
      { code: 'fr', share: 0.4, nativeShare: 0.0, confidence: 'estimated' },
      { code: 'en', share: 0.35, nativeShare: 0.0, confidence: 'estimated' },
    ],
  },
  {
    id: '376',
    name: 'Israel',
    languages: [
      { code: 'he', share: 0.85, nativeShare: 0.49, confidence: 'official' },
      { code: 'ar', share: 0.2, nativeShare: 0.18, confidence: 'official' },
      { code: 'en', share: 0.5, nativeShare: 0.02, confidence: 'estimated' },
    ],
  },
  {
    id: '275',
    name: 'Palestine',
    languages: [{ code: 'ar', share: 0.97, nativeShare: 0.97, confidence: 'official' }],
  },
  {
    id: '792',
    name: 'Turkey',
    languages: [
      { code: 'tr', share: 0.97, nativeShare: 0.85, confidence: 'official' },
      { code: 'en', share: 0.17, nativeShare: 0.0, confidence: 'estimated' },
    ],
  },
  {
    id: '364',
    name: 'Iran',
    languages: [{ code: 'fa', share: 0.9, nativeShare: 0.55, confidence: 'official' }],
  },
  {
    id: '887',
    name: 'Yemen',
    languages: [{ code: 'ar', share: 0.99, nativeShare: 0.99, confidence: 'official' }],
  },
  {
    id: '434',
    name: 'Libya',
    languages: [{ code: 'ar', share: 0.97, nativeShare: 0.97, confidence: 'official' }],
  },

  // ---- Africa ----
  {
    id: '818',
    name: 'Egypt',
    languages: [
      { code: 'ar', share: 0.98, nativeShare: 0.97, confidence: 'official' },
      { code: 'en', share: 0.2, nativeShare: 0.0, confidence: 'rough' },
    ],
  },
  {
    id: '012',
    name: 'Algeria',
    languages: [
      { code: 'ar', share: 0.85, nativeShare: 0.75, confidence: 'official' },
      { code: 'fr', share: 0.33, nativeShare: 0.0, confidence: 'estimated' },
    ],
  },
  {
    id: '504',
    name: 'Morocco',
    languages: [
      { code: 'ar', share: 0.9, nativeShare: 0.65, confidence: 'official' },
      { code: 'fr', share: 0.35, nativeShare: 0.0, confidence: 'estimated' },
    ],
  },
  {
    id: '788',
    name: 'Tunisia',
    languages: [
      { code: 'ar', share: 0.98, nativeShare: 0.98, confidence: 'official' },
      { code: 'fr', share: 0.5, nativeShare: 0.0, confidence: 'estimated' },
    ],
  },
  {
    id: '729',
    name: 'Sudan',
    languages: [{ code: 'ar', share: 0.8, nativeShare: 0.55, confidence: 'official' }],
  },
  {
    id: '231',
    name: 'Ethiopia',
    languages: [{ code: 'en', share: 0.12, nativeShare: 0.0, confidence: 'rough' }],
  },
  {
    id: '404',
    name: 'Kenya',
    languages: [
      { code: 'sw', share: 0.85, nativeShare: 0.18, confidence: 'official' },
      { code: 'en', share: 0.35, nativeShare: 0.01, confidence: 'official' },
    ],
  },
  {
    id: '800',
    name: 'Uganda',
    languages: [
      { code: 'en', share: 0.25, nativeShare: 0.0, confidence: 'official' },
      { code: 'sw', share: 0.35, nativeShare: 0.02, confidence: 'official' },
    ],
  },
  {
    id: '834',
    name: 'Tanzania',
    languages: [
      { code: 'sw', share: 0.9, nativeShare: 0.15, confidence: 'official' },
      { code: 'en', share: 0.15, nativeShare: 0.0, confidence: 'official' },
    ],
  },
  {
    id: '646',
    name: 'Rwanda',
    languages: [
      { code: 'fr', share: 0.15, nativeShare: 0.0, confidence: 'official' },
      { code: 'en', share: 0.2, nativeShare: 0.0, confidence: 'official' },
      { code: 'sw', share: 0.25, nativeShare: 0.0, confidence: 'estimated' },
    ],
  },
  {
    id: '710',
    name: 'South Africa',
    languages: [
      { code: 'en', share: 0.6, nativeShare: 0.1, confidence: 'official' },
    ],
  },
  {
    id: '516',
    name: 'Namibia',
    languages: [{ code: 'en', share: 0.4, nativeShare: 0.03, confidence: 'official' }],
  },
  {
    id: '072',
    name: 'Botswana',
    languages: [{ code: 'en', share: 0.3, nativeShare: 0.01, confidence: 'official' }],
  },
  {
    id: '288',
    name: 'Ghana',
    languages: [{ code: 'en', share: 0.5, nativeShare: 0.02, confidence: 'official' }],
  },
  {
    id: '566',
    name: 'Nigeria',
    languages: [{ code: 'en', share: 0.53, nativeShare: 0.02, confidence: 'official' }],
  },
  {
    id: '686',
    name: 'Senegal',
    languages: [{ code: 'fr', share: 0.37, nativeShare: 0.02, confidence: 'official' }],
  },
  {
    id: '384',
    name: "Côte d'Ivoire",
    languages: [{ code: 'fr', share: 0.4, nativeShare: 0.03, confidence: 'official' }],
  },
  {
    id: '266',
    name: 'Gabon',
    languages: [{ code: 'fr', share: 0.8, nativeShare: 0.32, confidence: 'official' }],
  },
  {
    id: '178',
    name: 'Congo',
    languages: [{ code: 'fr', share: 0.4, nativeShare: 0.02, confidence: 'official' }],
  },
  {
    id: '180',
    name: 'Dem. Rep. Congo',
    languages: [{ code: 'fr', share: 0.35, nativeShare: 0.01, confidence: 'official' }],
  },
  {
    id: '120',
    name: 'Cameroon',
    languages: [
      { code: 'fr', share: 0.6, nativeShare: 0.04, confidence: 'official' },
      { code: 'en', share: 0.4, nativeShare: 0.02, confidence: 'official' },
    ],
  },
  {
    id: '454',
    name: 'Malawi',
    languages: [{ code: 'en', share: 0.3, nativeShare: 0.01, confidence: 'official' }],
  },
  {
    id: '894',
    name: 'Zambia',
    languages: [{ code: 'en', share: 0.4, nativeShare: 0.02, confidence: 'official' }],
  },
  {
    id: '716',
    name: 'Zimbabwe',
    languages: [{ code: 'en', share: 0.4, nativeShare: 0.03, confidence: 'official' }],
  },
  {
    id: '480',
    name: 'Mauritius',
    languages: [
      { code: 'en', share: 0.55, nativeShare: 0.01, confidence: 'official' },
      { code: 'fr', share: 0.7, nativeShare: 0.03, confidence: 'official' },
    ],
  },
  {
    id: '748',
    name: 'eSwatini',
    languages: [{ code: 'en', share: 0.3, nativeShare: 0.01, confidence: 'official' }],
  },
  {
    id: '426',
    name: 'Lesotho',
    languages: [{ code: 'en', share: 0.3, nativeShare: 0.0, confidence: 'official' }],
  },

  // ---- Europe ----
  {
    id: '826',
    name: 'United Kingdom',
    languages: [{ code: 'en', share: 0.98, nativeShare: 0.95, confidence: 'official' }],
  },
  {
    id: '372',
    name: 'Ireland',
    languages: [{ code: 'en', share: 0.99, nativeShare: 0.95, confidence: 'official' }],
  },
  {
    id: '250',
    name: 'France',
    languages: [
      { code: 'fr', share: 0.97, nativeShare: 0.88, confidence: 'official' },
      { code: 'en', share: 0.39, nativeShare: 0.0, confidence: 'estimated' },
    ],
  },
  {
    id: '276',
    name: 'Germany',
    languages: [
      { code: 'de', share: 0.95, nativeShare: 0.9, confidence: 'official' },
      { code: 'en', share: 0.56, nativeShare: 0.01, confidence: 'estimated' },
    ],
  },
  {
    id: '724',
    name: 'Spain',
    languages: [
      { code: 'es', share: 0.98, nativeShare: 0.74, confidence: 'official' },
      { code: 'en', share: 0.3, nativeShare: 0.0, confidence: 'estimated' },
    ],
  },
  {
    id: '380',
    name: 'Italy',
    languages: [
      { code: 'it', share: 0.97, nativeShare: 0.9, confidence: 'official' },
      { code: 'en', share: 0.34, nativeShare: 0.0, confidence: 'estimated' },
    ],
  },
  {
    id: '620',
    name: 'Portugal',
    languages: [
      { code: 'pt', share: 0.98, nativeShare: 0.96, confidence: 'official' },
      { code: 'en', share: 0.43, nativeShare: 0.0, confidence: 'estimated' },
    ],
  },
  {
    id: '528',
    name: 'Netherlands',
    languages: [
      { code: 'nl', share: 0.95, nativeShare: 0.9, confidence: 'official' },
      { code: 'en', share: 0.9, nativeShare: 0.01, confidence: 'estimated' },
    ],
  },
  {
    id: '056',
    name: 'Belgium',
    languages: [
      { code: 'fr', share: 0.4, nativeShare: 0.37, confidence: 'official' },
      { code: 'nl', share: 0.55, nativeShare: 0.55, confidence: 'official' },
      { code: 'en', share: 0.6, nativeShare: 0.0, confidence: 'estimated' },
    ],
  },
  {
    id: '442',
    name: 'Luxembourg',
    languages: [
      { code: 'fr', share: 0.55, nativeShare: 0.05, confidence: 'official' },
      { code: 'de', share: 0.35, nativeShare: 0.02, confidence: 'official' },
      { code: 'en', share: 0.65, nativeShare: 0.04, confidence: 'estimated' },
    ],
  },
  {
    id: '756',
    name: 'Switzerland',
    languages: [
      { code: 'de', share: 0.63, nativeShare: 0.62, confidence: 'official' },
      { code: 'fr', share: 0.23, nativeShare: 0.23, confidence: 'official' },
      { code: 'it', share: 0.08, nativeShare: 0.08, confidence: 'official' },
      { code: 'en', share: 0.45, nativeShare: 0.0, confidence: 'estimated' },
    ],
  },
  {
    id: '040',
    name: 'Austria',
    languages: [
      { code: 'de', share: 0.97, nativeShare: 0.88, confidence: 'official' },
      { code: 'en', share: 0.58, nativeShare: 0.0, confidence: 'estimated' },
    ],
  },
  {
    id: '752',
    name: 'Sweden',
    languages: [
      { code: 'sv', share: 0.96, nativeShare: 0.85, confidence: 'official' },
      { code: 'en', share: 0.86, nativeShare: 0.01, confidence: 'estimated' },
    ],
  },
  {
    id: '578',
    name: 'Norway',
    languages: [
      { code: 'en', share: 0.9, nativeShare: 0.01, confidence: 'estimated' },
    ],
  },
  {
    id: '208',
    name: 'Denmark',
    languages: [
      { code: 'en', share: 0.86, nativeShare: 0.01, confidence: 'estimated' },
    ],
  },
  {
    id: '246',
    name: 'Finland',
    languages: [
      { code: 'sv', share: 0.05, nativeShare: 0.05, confidence: 'official' },
      { code: 'en', share: 0.7, nativeShare: 0.0, confidence: 'estimated' },
    ],
  },
  {
    id: '352',
    name: 'Iceland',
    languages: [
      { code: 'en', share: 0.97, nativeShare: 0.0, confidence: 'estimated' },
    ],
  },
  {
    id: '616',
    name: 'Poland',
    languages: [
      { code: 'pl', share: 0.98, nativeShare: 0.97, confidence: 'official' },
      { code: 'en', share: 0.33, nativeShare: 0.0, confidence: 'estimated' },
    ],
  },
  {
    id: '203',
    name: 'Czechia',
    languages: [
      { code: 'cs', share: 0.97, nativeShare: 0.95, confidence: 'official' },
      { code: 'en', share: 0.32, nativeShare: 0.0, confidence: 'estimated' },
    ],
  },
  {
    id: '703',
    name: 'Slovakia',
    languages: [{ code: 'cs', share: 0.4, nativeShare: 0.0, confidence: 'rough' }],
  },
  {
    id: '348',
    name: 'Hungary',
    languages: [
      { code: 'hu', share: 0.98, nativeShare: 0.98, confidence: 'official' },
      { code: 'en', share: 0.2, nativeShare: 0.0, confidence: 'estimated' },
    ],
  },
  {
    id: '642',
    name: 'Romania',
    languages: [
      { code: 'ro', share: 0.97, nativeShare: 0.9, confidence: 'official' },
      { code: 'en', share: 0.31, nativeShare: 0.0, confidence: 'estimated' },
    ],
  },
  {
    id: '100',
    name: 'Bulgaria',
    languages: [{ code: 'en', share: 0.25, nativeShare: 0.0, confidence: 'rough' }],
  },
  {
    id: '300',
    name: 'Greece',
    languages: [
      { code: 'el', share: 0.98, nativeShare: 0.96, confidence: 'official' },
      { code: 'en', share: 0.51, nativeShare: 0.0, confidence: 'estimated' },
    ],
  },
  {
    id: '643',
    name: 'Russia',
    languages: [{ code: 'ru', share: 0.97, nativeShare: 0.85, confidence: 'official' }],
  },
  {
    id: '804',
    name: 'Ukraine',
    languages: [
      { code: 'uk', share: 0.9, nativeShare: 0.7, confidence: 'official' },
      { code: 'ru', share: 0.4, nativeShare: 0.29, confidence: 'estimated' },
    ],
  },
  {
    id: '112',
    name: 'Belarus',
    languages: [
      { code: 'ru', share: 0.7, nativeShare: 0.42, confidence: 'official' },
    ],
  },
  {
    id: '191',
    name: 'Croatia',
    languages: [{ code: 'en', share: 0.49, nativeShare: 0.0, confidence: 'estimated' }],
  },
  {
    id: '688',
    name: 'Serbia',
    languages: [{ code: 'en', share: 0.4, nativeShare: 0.0, confidence: 'rough' }],
  },
  {
    id: '705',
    name: 'Slovenia',
    languages: [{ code: 'en', share: 0.58, nativeShare: 0.0, confidence: 'estimated' }],
  },

  // ---- Americas ----
  {
    id: '840',
    name: 'United States of America',
    languages: [
      { code: 'en', share: 0.95, nativeShare: 0.78, confidence: 'official' },
      { code: 'es', share: 0.15, nativeShare: 0.13, confidence: 'official' },
    ],
  },
  {
    id: '124',
    name: 'Canada',
    languages: [
      { code: 'en', share: 0.85, nativeShare: 0.56, confidence: 'official' },
      { code: 'fr', share: 0.29, nativeShare: 0.21, confidence: 'official' },
    ],
  },
  {
    id: '484',
    name: 'Mexico',
    languages: [{ code: 'es', share: 0.98, nativeShare: 0.93, confidence: 'official' }],
  },
  {
    id: '076',
    name: 'Brazil',
    languages: [{ code: 'pt', share: 0.98, nativeShare: 0.97, confidence: 'official' }],
  },
  {
    id: '032',
    name: 'Argentina',
    languages: [{ code: 'es', share: 0.98, nativeShare: 0.97, confidence: 'official' }],
  },
  {
    id: '152',
    name: 'Chile',
    languages: [{ code: 'es', share: 0.99, nativeShare: 0.98, confidence: 'official' }],
  },
  {
    id: '170',
    name: 'Colombia',
    languages: [{ code: 'es', share: 0.99, nativeShare: 0.98, confidence: 'official' }],
  },
  {
    id: '604',
    name: 'Peru',
    languages: [{ code: 'es', share: 0.9, nativeShare: 0.84, confidence: 'official' }],
  },
  {
    id: '218',
    name: 'Ecuador',
    languages: [{ code: 'es', share: 0.95, nativeShare: 0.93, confidence: 'official' }],
  },
  {
    id: '862',
    name: 'Venezuela',
    languages: [{ code: 'es', share: 0.98, nativeShare: 0.97, confidence: 'official' }],
  },
  {
    id: '068',
    name: 'Bolivia',
    languages: [{ code: 'es', share: 0.85, nativeShare: 0.6, confidence: 'official' }],
  },
  {
    id: '600',
    name: 'Paraguay',
    languages: [{ code: 'es', share: 0.9, nativeShare: 0.55, confidence: 'official' }],
  },
  {
    id: '858',
    name: 'Uruguay',
    languages: [{ code: 'es', share: 0.98, nativeShare: 0.97, confidence: 'official' }],
  },
  {
    id: '188',
    name: 'Costa Rica',
    languages: [{ code: 'es', share: 0.99, nativeShare: 0.97, confidence: 'official' }],
  },
  {
    id: '591',
    name: 'Panama',
    languages: [{ code: 'es', share: 0.93, nativeShare: 0.9, confidence: 'official' }],
  },
  {
    id: '320',
    name: 'Guatemala',
    languages: [{ code: 'es', share: 0.93, nativeShare: 0.69, confidence: 'official' }],
  },
  {
    id: '340',
    name: 'Honduras',
    languages: [{ code: 'es', share: 0.97, nativeShare: 0.97, confidence: 'official' }],
  },
  {
    id: '222',
    name: 'El Salvador',
    languages: [{ code: 'es', share: 0.97, nativeShare: 0.97, confidence: 'official' }],
  },
  {
    id: '558',
    name: 'Nicaragua',
    languages: [{ code: 'es', share: 0.97, nativeShare: 0.97, confidence: 'official' }],
  },
  {
    id: '214',
    name: 'Dominican Rep.',
    languages: [{ code: 'es', share: 0.98, nativeShare: 0.98, confidence: 'official' }],
  },
  {
    id: '192',
    name: 'Cuba',
    languages: [{ code: 'es', share: 0.99, nativeShare: 0.99, confidence: 'official' }],
  },
  {
    id: '388',
    name: 'Jamaica',
    languages: [{ code: 'en', share: 0.95, nativeShare: 0.05, confidence: 'official' }],
  },
  {
    id: '630',
    name: 'Puerto Rico',
    languages: [
      { code: 'es', share: 0.95, nativeShare: 0.95, confidence: 'official' },
      { code: 'en', share: 0.5, nativeShare: 0.05, confidence: 'official' },
    ],
  },
  {
    id: '780',
    name: 'Trinidad and Tobago',
    languages: [{ code: 'en', share: 0.95, nativeShare: 0.34, confidence: 'official' }],
  },
  {
    id: '328',
    name: 'Guyana',
    languages: [{ code: 'en', share: 0.9, nativeShare: 0.3, confidence: 'official' }],
  },
  {
    id: '740',
    name: 'Suriname',
    languages: [{ code: 'nl', share: 0.6, nativeShare: 0.1, confidence: 'official' }],
  },

  // ---- Oceania ----
  {
    id: '036',
    name: 'Australia',
    languages: [{ code: 'en', share: 0.96, nativeShare: 0.72, confidence: 'official' }],
  },
  {
    id: '554',
    name: 'New Zealand',
    languages: [{ code: 'en', share: 0.96, nativeShare: 0.85, confidence: 'official' }],
  },
  {
    id: '598',
    name: 'Papua New Guinea',
    languages: [{ code: 'en', share: 0.3, nativeShare: 0.02, confidence: 'official' }],
  },
  {
    id: '242',
    name: 'Fiji',
    languages: [{ code: 'en', share: 0.6, nativeShare: 0.01, confidence: 'official' }],
  },
];

export const COUNTRY_BY_ID: Record<string, CountryEntry> = COUNTRIES.reduce(
  (acc, c) => {
    acc[c.id] = c;
    return acc;
  },
  {} as Record<string, CountryEntry>,
);
