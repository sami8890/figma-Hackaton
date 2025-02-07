import { type SchemaTypeDefinition } from 'sanity'
import { productApi } from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productApi],
}