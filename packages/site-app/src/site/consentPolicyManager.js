const policy = {
    essential: true,
    functional: true,
    analytics: true,
    advertising: false,
    dataToThirdParty: true,
}

let currentPolicy = { defaultPolicy: true, policy }

const consentPolicyManager = {
    getCurrentConsentPolicy: () => currentPolicy,
    _getConsentPolicyHeader: () => ({}),
    setConsentPolicy: (nextPolicy, resolve) => {
        currentPolicy = { defaultPolicy: false, policy: nextPolicy }
        resolve?.(currentPolicy)
    },
    resetPolicy: () => {
        currentPolicy = { defaultPolicy: true, policy }
    },
    publishPolicyUpdateRequestedEvent: () => {},
    init: ({ consentPolicy } = {}) => {
        if (consentPolicy) currentPolicy = { defaultPolicy: false, policy: consentPolicy }
    },
}

globalThis.consentPolicyManager ??= consentPolicyManager
