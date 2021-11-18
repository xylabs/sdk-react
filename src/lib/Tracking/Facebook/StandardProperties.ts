interface FacebookStandardProperties {
  content_category?: string
  content_ids?: (string | number)[]
  content_name?: string
  content_type?: 'product' | 'product_group'
  contents?: Record<string, unknown>[]
  currency?: string
  delivery_category?: string
  num_items?: number
  predicted_ltv?: number
  search_string?: string
  status?: boolean
  value?: number
}

export type { FacebookStandardProperties }
