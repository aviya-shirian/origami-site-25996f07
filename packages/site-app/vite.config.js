import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createSiteViteConfig } from '@wix/origami-site-runtime'

const root = dirname(fileURLToPath(import.meta.url))

export default createSiteViteConfig({ root })
