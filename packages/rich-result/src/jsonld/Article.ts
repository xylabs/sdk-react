/* eslint-disable import/no-cycle */
import { CreativeWork } from './CreativeWork.js'
import { Integer } from './Integer.js'
import { Text } from './Text.js'

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
