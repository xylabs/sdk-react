import { CreativeWork } from './CreativeWork.ts'
import { Integer } from './Integer.ts'
import { Text } from './Text.ts'

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
