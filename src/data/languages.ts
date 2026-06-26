export interface Language {
  code: string;
  name: string;
  native: string;
}

// A curated list of widely-spoken languages. Codes are mostly ISO 639-1,
// with a couple of ISO 639-3 codes (yue, hak) for languages without a 639-1 code.
export const LANGUAGES: Language[] = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'zh', name: 'Mandarin Chinese', native: '普通话' },
  { code: 'yue', name: 'Cantonese', native: '廣東話' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'es', name: 'Spanish', native: 'Español' },
  { code: 'fr', name: 'French', native: 'Français' },
  { code: 'ar', name: 'Arabic', native: 'العربية' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'pt', name: 'Portuguese', native: 'Português' },
  { code: 'ru', name: 'Russian', native: 'Русский' },
  { code: 'ur', name: 'Urdu', native: 'اردو' },
  { code: 'id', name: 'Indonesian', native: 'Bahasa Indonesia' },
  { code: 'ms', name: 'Malay', native: 'Bahasa Melayu' },
  { code: 'de', name: 'German', native: 'Deutsch' },
  { code: 'ja', name: 'Japanese', native: '日本語' },
  { code: 'tr', name: 'Turkish', native: 'Türkçe' },
  { code: 'vi', name: 'Vietnamese', native: 'Tiếng Việt' },
  { code: 'ko', name: 'Korean', native: '한국어' },
  { code: 'fa', name: 'Persian', native: 'فارسی' },
  { code: 'tl', name: 'Filipino', native: 'Filipino' },
  { code: 'it', name: 'Italian', native: 'Italiano' },
  { code: 'th', name: 'Thai', native: 'ไทย' },
  { code: 'nl', name: 'Dutch', native: 'Nederlands' },
  { code: 'pl', name: 'Polish', native: 'Polski' },
  { code: 'uk', name: 'Ukrainian', native: 'Українська' },
  { code: 'el', name: 'Greek', native: 'Ελληνικά' },
  { code: 'he', name: 'Hebrew', native: 'עברית' },
  { code: 'sv', name: 'Swedish', native: 'Svenska' },
  { code: 'sw', name: 'Swahili', native: 'Kiswahili' },
  { code: 'ro', name: 'Romanian', native: 'Română' },
  { code: 'cs', name: 'Czech', native: 'Čeština' },
  { code: 'hu', name: 'Hungarian', native: 'Magyar' },
];

export const LANGUAGE_BY_CODE: Record<string, Language> = LANGUAGES.reduce(
  (acc, lang) => {
    acc[lang.code] = lang;
    return acc;
  },
  {} as Record<string, Language>,
);
