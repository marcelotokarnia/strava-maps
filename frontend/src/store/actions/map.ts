import { ActionsUnion, MapTypes } from '../../interfaces/store/actions'
import { createAction } from './'
import { Position } from '../../interfaces/activities'

export const MapActions = {
  initMap: (p: { defaultCenter: Position }) => createAction(MapTypes.INIT_MAP, p),
  showSavedUrlModal: (p: { mapId: string }) => createAction(MapTypes.SAVED_URL, p),
  recordColabRoute: (p: { colabRoute: Array<{ lat: number; lng: number }>; id: string }) =>
    createAction(MapTypes.RECORD_COLAB_ROUTE, p),
}

export type MapActions = ActionsUnion<typeof MapActions>
