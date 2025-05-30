export interface I18n {
  [lang: string]: string
}

export interface Coordinate {
  x: number
  y: number
}

export interface Position {
  area: string
  coordinate: Coordinate
}

export enum Utilities {
  FLASHBANG = 0,
  HE = 1,
  MOLOTOV = 2,
  INCENDIARY = 3,
  SMOKE = 4
}

export interface RegionPolygon {
  points: Coordinate[]
}
