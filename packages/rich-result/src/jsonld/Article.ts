import type { CreativeWork } from './CreativeWork.ts'
import type { Integer } from './Integer.ts'
import type { Text } from './Text.ts'

interface Article extends CreativeWork {
  articleBody?: Text
  articleSection?: Text
  backstory?: CreativeWork | Text
  pageEnd?: Integer | Text
  pageStart?: Integer | Text
  pagination?: Text
  speakable?: unknown | URL
  wordCount?: Integer
}

export type { Article }
