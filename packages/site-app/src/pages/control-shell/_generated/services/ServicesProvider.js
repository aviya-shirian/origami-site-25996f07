import { createServicesProvider } from '@wix/builder-services'
import { sharedServicesConfigs } from '../../../../site/sharedServicesConfigs.js'
import { siteServicesConfigs } from '../../../../site/siteServicesConfigs.js'
import { servicesConfigs } from './servicesConfigs.js'

const ServicesProvider = createServicesProvider(
    servicesConfigs,
    sharedServicesConfigs,
    siteServicesConfigs,
    globalThis.__WIX_RUNTIME_SERVICES_CONFIGS__ ?? {}
)

export default ServicesProvider
