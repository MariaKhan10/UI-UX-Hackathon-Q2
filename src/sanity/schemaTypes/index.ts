import { type SchemaTypeDefinition } from 'sanity'
import foods from './foods'
import order from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [foods,order],
}
