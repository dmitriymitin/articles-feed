export const sortOrders = ['asc', 'desc'] as const
export type SortOrder = typeof sortOrders[number]
