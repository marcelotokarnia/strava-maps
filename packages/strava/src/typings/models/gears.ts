import { meters } from '..'

interface Gear {
  distance: meters
  id: string
  name: string
  primary: boolean
}

export interface SummaryGear extends Gear {
  resource_state: 2
}
export interface DetailedGear extends Gear {
  brand_name: string
  description: string
  frame_type: number | null
  model_name: string
  resource_state: 3
}
