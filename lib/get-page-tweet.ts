import { getPageProperty } from 'notion-utils'

import * as types from './types'

export function getPageTweet(
  block: types.Block,
  recordMap: types.ExtendedRecordMap
): string | null {
  try {
    return getPageProperty('Tweet', block, recordMap)
  } catch (err) {
    return null
  }
}
