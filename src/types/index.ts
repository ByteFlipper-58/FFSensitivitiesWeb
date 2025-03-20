export interface Manufacturer {
  showInProductionApp: boolean;
  isAvailable: boolean;
  name: string;
  model: string;
}

export interface Sensitivities {
  review: number;
  collimator: number;
  x2_scope: number;
  x4_scope: number;
  sniper_scope: number;
  free_review: number;
}

export interface Device {
  manufacturer: string;
  name: string;
  settings_source_url: string;
  dpi: number;
  fire_button: number;
  sensitivities: Sensitivities;
}