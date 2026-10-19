import { servicesConfigs as baseServicesConfigs } from "@wix/origami-poc-runtime-snapshot/Home/services/servicesConfigs";
// POC: hand-written stand-in for generator output — this page's interactions, merged into the
// page-scoped '@wix/site-service-interactions' config.
import { interactions } from "../../configs";
const INTERACTIONS_SERVICE = "@wix/site-service-interactions";
const baseInteractions = baseServicesConfigs[INTERACTIONS_SERVICE];

const pageInteractionsConfig = interactions;

export const servicesConfigs = {
  ...baseServicesConfigs,
  [INTERACTIONS_SERVICE]: {
    ...baseInteractions,
    config: {
      ...baseInteractions.config,
      conditions: { ...baseInteractions.config.conditions, ...pageInteractionsConfig.conditions },
      effects: pageInteractionsConfig.effects,
      interactions: pageInteractionsConfig.interactions,
    },
  },
};
