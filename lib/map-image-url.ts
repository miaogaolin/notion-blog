import { Block } from 'notion-types'
import { defaultMapImageUrl } from 'react-notion-x'

import { defaultPageIcon, defaultPageCover, imageWidth } from './config'

export const mapImageUrl = (url: string, block: Block) => {
  if (url === defaultPageCover || url === defaultPageIcon) {
    return url
  }

  url = defaultMapImageUrl(url, block)
  // more recent versions of notion don't proxy unsplash images
  if (url.startsWith('https')) {
    if (!url.startsWith('https://images.unsplash.com')) {
      const notionImageUrlV2 = new URL(url)
      notionImageUrlV2.searchParams.set('width', imageWidth.toString())
      url = notionImageUrlV2.toString()
    } else {
      // optimize image
      // webp
      url = url.replace(/fm=(gif|jpeg|png|jpg|bmp)/i, "fm=webp")
      if (imageWidth && !url.match(/(\?|=)w=\d+/)) {
        url += "&w=" + imageWidth
      }
    }
  }

  console.log(url)
  return url
}
