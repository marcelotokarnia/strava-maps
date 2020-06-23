export const addTransformations = ({
  transformations,
  url,
}: {
  transformations: string
  url: string
}) => url.replace('upload/', `upload/${transformations}/`)
