import { Method, Resource } from '.'
import { Parameters as MappersmithParameters } from 'mappersmith'
import { Upload } from '..'

export interface Uploads extends Resource {
  Uploads: {
    createUpload: Method<CreateUploadParams, Upload>
    getUploadById: Method<GetUploadByIdParams, Upload>
  }
}

export interface CreateUploadParams extends MappersmithParameters {
  body: {
    commute: string
    data_type: 'fit' | 'fit.gz' | 'tcx' | 'tcx.gz' | 'gpx' | 'gpx.gz'
    description: string
    external_id: string
    file: File
    name: string
    trainer: string
  }
}

export interface GetUploadByIdParams extends MappersmithParameters {
  uploadId: number
}
