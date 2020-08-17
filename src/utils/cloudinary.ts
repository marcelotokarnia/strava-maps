export const addTransformations = ({
  transformations,
  url,
}: {
  transformations: string
  url: string
}): string => url.replace('upload/', `upload/${transformations}/`)
