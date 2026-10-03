/**
 * Channel counts per country or region, generated from the provider channel export.
 * Only counts are kept: no channel names or logos are published on the site.
 */
export type Region = "europe" | "americas" | "mea" | "apac" | "special"

export interface ChannelCountry {
  code: string
  name: string
  region: Region
  channels: number
}

export const CHANNEL_COUNTRIES: ChannelCountry[] = [
  { code: "US", name: "United States", region: "americas", channels: 11547 },
  { code: "AR", name: "Arabic", region: "mea", channels: 4641 },
  { code: "UK", name: "United Kingdom", region: "europe", channels: 2930 },
  { code: "DE", name: "Germany", region: "europe", channels: 2339 },
  { code: "FR", name: "France", region: "europe", channels: 1949 },
  { code: "ASIA", name: "Asia", region: "apac", channels: 1932 },
  { code: "ES", name: "Spain", region: "europe", channels: 1896 },
  { code: "NL", name: "Netherlands", region: "europe", channels: 1862 },
  { code: "SE", name: "Sweden", region: "europe", channels: 1746 },
  { code: "CA", name: "Canada", region: "americas", channels: 1392 },
  { code: "IT", name: "Italy", region: "europe", channels: 1291 },
  { code: "AL", name: "Albania", region: "europe", channels: 1254 },
  { code: "NO", name: "Norway", region: "europe", channels: 777 },
  { code: "PL", name: "Poland", region: "europe", channels: 721 },
  { code: "PT", name: "Portugal", region: "europe", channels: 689 },
  { code: "GR", name: "Greece", region: "europe", channels: 673 },
  { code: "DK", name: "Denmark", region: "europe", channels: 643 },
  { code: "AFR", name: "Africa", region: "mea", channels: 624 },
  { code: "8K", name: "8K Ultra HD", region: "special", channels: 564 },
  { code: "BR", name: "Brazil", region: "americas", channels: 558 },
  { code: "FI", name: "Finland", region: "europe", channels: 545 },
  { code: "MX", name: "Mexico", region: "americas", channels: 545 },
  { code: "LA", name: "Latin America", region: "americas", channels: 521 },
  { code: "TR", name: "Turkey", region: "europe", channels: 517 },
  { code: "AT", name: "Austria", region: "europe", channels: 419 },
  { code: "IR", name: "Iran", region: "mea", channels: 397 },
  { code: "BE", name: "Belgium", region: "europe", channels: 318 },
  { code: "RU", name: "Russia", region: "europe", channels: 307 },
  { code: "KU", name: "Kurdish", region: "mea", channels: 300 },
  { code: "CZ", name: "Czechia", region: "europe", channels: 295 },
  { code: "AU", name: "Australia", region: "apac", channels: 283 },
  { code: "IL", name: "Israel", region: "mea", channels: 278 },
  { code: "CH", name: "Switzerland", region: "europe", channels: 258 },
  { code: "HR", name: "Croatia", region: "europe", channels: 248 },
  { code: "BG", name: "Bulgaria", region: "europe", channels: 237 },
  { code: "HU", name: "Hungary", region: "europe", channels: 219 },
  { code: "RO", name: "Romania", region: "europe", channels: 204 },
  { code: "ID", name: "Indonesia", region: "apac", channels: 187 },
  { code: "IE", name: "Ireland", region: "europe", channels: 162 },
  { code: "MA", name: "Morocco", region: "mea", channels: 153 },
  { code: "TH", name: "Thailand", region: "apac", channels: 141 },
  { code: "4K", name: "4K Ultra HD", region: "special", channels: 120 },
  { code: "EXYU", name: "Ex-Yugoslavia", region: "europe", channels: 119 },
  { code: "MK", name: "North Macedonia", region: "europe", channels: 111 },
  { code: "PH", name: "Philippines", region: "apac", channels: 101 },
  { code: "CY", name: "Cyprus", region: "europe", channels: 82 },
  { code: "KR", name: "South Korea", region: "apac", channels: 75 },
  { code: "NZ", name: "New Zealand", region: "apac", channels: 43 },
  { code: "SI", name: "Slovenia", region: "europe", channels: 35 },
  { code: "AM", name: "Armenia", region: "europe", channels: 32 },
  { code: "LT", name: "Lithuania", region: "europe", channels: 25 },
  { code: "AZ", name: "Azerbaijan", region: "europe", channels: 22 },
  { code: "HK", name: "Hong Kong", region: "apac", channels: 19 },
  { code: "TN", name: "Tunisia", region: "mea", channels: 16 },
  { code: "VE", name: "Venezuela", region: "americas", channels: 15 },
  { code: "KZ", name: "Kazakhstan", region: "apac", channels: 15 },
  { code: "GE", name: "Georgia", region: "europe", channels: 13 },
  { code: "SG", name: "Singapore", region: "apac", channels: 11 },
  { code: "UZ", name: "Uzbekistan", region: "apac", channels: 5 },
  { code: "JP", name: "Japan", region: "apac", channels: 4 },
  { code: "BO", name: "Bolivia", region: "americas", channels: 3 },
  { code: "INT", name: "International mix", region: "special", channels: 1520 },
]

export const REGIONS: { id: Region | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "europe", label: "Europe" },
  { id: "americas", label: "Americas" },
  { id: "mea", label: "Middle East & Africa" },
  { id: "apac", label: "Asia-Pacific" },
  { id: "special", label: "4K / 8K & more" },
]
