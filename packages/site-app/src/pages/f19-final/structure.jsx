import { Page } from '@wix/origami-system-components/Page'
import { Image } from '@origami-wrappers/wixEditorElements/image'
import { raw } from 'document/bindings'
import { Interact, Interaction } from '@wix/interact/react'
import { BlurMouse, FloatIn, Pulse, TrackMouse } from '@wix/motion-presets'

Interact.registerEffects({ BlurMouse, FloatIn, Pulse, TrackMouse })

Interact.create({
    interactions: [
        {
            trigger: 'viewEnter',
            key: 'comp-mv9k2fb6',
            params: { threshold: 0.15 },
            effects: [
                {
                    effectId: 'effects-mv9k2fbj1',
                    key: 'comp-mv9k2fb6',
                    triggerType: 'once',
                    duration: 1200,
                    delay: 200,
                    fill: 'backwards',
                    namedEffect: { direction: 'bottom', id: 'effects-mv9k2fbj4', type: 'FloatIn' },
                },
            ],
        },
        {
            trigger: 'pointerMove',
            key: 'comp-mv9k2fdd',
            params: { hitArea: 'root' },
            effects: [
                {
                    effectId: 'effects-mv9k2fdf1',
                    key: 'comp-mv9k2fdd',
                    fill: 'both',
                    centeredToTarget: true,
                    transitionDuration: 500,
                    namedEffect: {
                        inverted: false,
                        id: 'effects-mv9k2fdf4',
                        blur: 25,
                        power: 'medium',
                        type: 'BlurMouse',
                        distance: { type: 'px', value: 100 },
                    },
                },
            ],
        },
        {
            trigger: 'click',
            key: 'comp-mv9k2fgu',
            effects: [
                {
                    effectId: 'effects-mv9k2fgv4',
                    key: 'comp-mv9k2fgu',
                    triggerType: 'repeat',
                    duration: 1000,
                    fill: 'both',
                    namedEffect: { id: 'effects-mv9k2fgv7', power: 'soft', type: 'Pulse' },
                },
            ],
        },
        {
            trigger: 'pointerMove',
            key: 'comp-mv9k2fip',
            effects: [
                {
                    effectId: 'effects-mv9k2fir1',
                    key: 'comp-mv9k2fip',
                    fill: 'both',
                    namedEffect: {
                        id: 'effects-mv9k2fir4',
                        axis: 'both',
                        type: 'TrackMouse',
                        distance: { type: 'px', value: 100 },
                    },
                },
            ],
        },
    ],
    effects: {},
    conditions: {},
})

export const Structure = () => (
    <Page
        id="omgsg"
        skin="wysiwyg.viewer.skins.page.ResponsivePageWithColorBG"
        className="omgsg"
        data={{
            type: 'Page',
            id: 'omgsg',
            title: 'f19-final',
            hideTitle: true,
            icon: '',
            descriptionSEO: '',
            metaKeywordsSEO: '',
            pageTitleSEO: '',
            hidePage: false,
            underConstruction: false,
            tpaApplicationId: 0,
            pageSecurity: { requireLogin: false },
            pageBackgrounds: {
                desktop: {
                    custom: true,
                    ref: {
                        type: 'BackgroundMedia',
                        color: '{color_11}',
                        alignType: 'top',
                        fittingType: 'fill',
                        scrollType: 'fixed',
                    },
                    isPreset: true,
                },
                mobile: {
                    custom: true,
                    ref: {
                        type: 'BackgroundMedia',
                        color: '{color_11}',
                        alignType: 'top',
                        fittingType: 'fill',
                        scrollType: 'fixed',
                        colorOverlay: '',
                        colorOverlayOpacity: 0,
                    },
                    isPreset: true,
                    mediaSizing: 'viewport',
                },
            },
            translationData: { uriSEOTranslated: false },
            ignoreBottomBottomAnchors: true,
            ogImage: '',
        }}
    >
        <Interaction tagName="div" interactKey="comp-mv9k2fb6">
            <Image
                id="comp-mv9k2fb6"
                className="comp-mv9k2fb6"
                type="Component"
                displayMode={'fill'}
                image={{
                    name: 'Sea Turtle Swimming',
                    uri: '11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg',
                    height: 1200,
                    id: 'data-mv9k2fb8',
                    alt: 'Sea Turtle Swimming',
                    type: 'Builder.Image',
                    width: 1920,
                    url: 'https://static.wixstatic.com/media/11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg/v1/fill/w_1920,h_1200,al_c,q_90,enc_auto/Sea%20Turtle%20Swimming.jpg',
                }}
            />
        </Interaction>
        <Interaction tagName="div" interactKey="comp-mv9k2fdd">
            <Image
                id="comp-mv9k2fdd"
                className="comp-mv9k2fdd"
                type="Component"
                displayMode={'fill'}
                image={{
                    name: 'Sea Turtle Swimming',
                    uri: '11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg',
                    height: 1200,
                    id: 'data-mv9k2fde2',
                    alt: 'Sea Turtle Swimming',
                    type: 'Builder.Image',
                    width: 1920,
                    url: 'https://static.wixstatic.com/media/11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg/v1/fill/w_1920,h_1200,al_c,q_90,enc_auto/Sea%20Turtle%20Swimming.jpg',
                }}
            />
        </Interaction>
        <Image
            id="comp-mv9k2fe7"
            className="comp-mv9k2fe7"
            type="Component"
            displayMode={'fill'}
            image={{
                name: 'Sea Turtle Swimming',
                uri: '11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg',
                height: 1200,
                id: 'data-mv9k2fe82',
                alt: 'Sea Turtle Swimming',
                type: 'Builder.Image',
                width: 1920,
                url: 'https://static.wixstatic.com/media/11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg/v1/fill/w_1920,h_1200,al_c,q_90,enc_auto/Sea%20Turtle%20Swimming.jpg',
            }}
        />
        <Image
            id="comp-mv9k2feu"
            className="comp-mv9k2feu"
            type="Component"
            displayMode={'fill'}
            image={{
                name: 'Sea Turtle Swimming',
                uri: '11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg',
                height: 1200,
                id: 'data-mv9k2few1',
                alt: 'Sea Turtle Swimming',
                type: 'Builder.Image',
                width: 1920,
                url: 'https://static.wixstatic.com/media/11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg/v1/fill/w_1920,h_1200,al_c,q_90,enc_auto/Sea%20Turtle%20Swimming.jpg',
            }}
            states={[
                raw({ name: 'open', componentId: 'comp-mv9k2feu', id: 'variants-mv9k2fev', type: 'State' }),
                raw({ name: '', componentId: 'comp-mv9k2feu', id: 'variants-mv9k2fev1', type: 'State' }),
            ]}
        />
        <Image
            id="comp-mv9k2fgq"
            className="comp-mv9k2fgq"
            type="Component"
            displayMode={'fill'}
            image={{
                name: 'Sea Turtle Swimming',
                uri: '11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg',
                height: 1200,
                id: 'data-mv9k2fgr1',
                alt: 'Sea Turtle Swimming',
                type: 'Builder.Image',
                width: 1920,
                url: 'https://static.wixstatic.com/media/11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg/v1/fill/w_1920,h_1200,al_c,q_90,enc_auto/Sea%20Turtle%20Swimming.jpg',
            }}
        />
        <Interaction tagName="div" interactKey="comp-mv9k2fgu">
            <Image
                id="comp-mv9k2fgu"
                className="comp-mv9k2fgu"
                type="Component"
                displayMode={'fill'}
                image={{
                    name: 'Sea Turtle Swimming',
                    uri: '11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg',
                    height: 1200,
                    id: 'data-mv9k2fgv2',
                    alt: 'Sea Turtle Swimming',
                    type: 'Builder.Image',
                    width: 1920,
                    url: 'https://static.wixstatic.com/media/11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg/v1/fill/w_1920,h_1200,al_c,q_90,enc_auto/Sea%20Turtle%20Swimming.jpg',
                }}
            />
        </Interaction>
        <Image
            id="comp-mv9k2fh31"
            className="comp-mv9k2fh31"
            type="Component"
            displayMode={'fill'}
            image={{
                name: 'Sea Turtle Swimming',
                uri: '11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg',
                height: 1200,
                id: 'data-mv9k2fh42',
                alt: 'Sea Turtle Swimming',
                type: 'Builder.Image',
                width: 1920,
                url: 'https://static.wixstatic.com/media/11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg/v1/fill/w_1920,h_1200,al_c,q_90,enc_auto/Sea%20Turtle%20Swimming.jpg',
            }}
        />
        <Image
            id="comp-mv9k2fhj"
            className="comp-mv9k2fhj"
            type="Component"
            displayMode={'fill'}
            image={{
                name: 'Sea Turtle Swimming',
                uri: '11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg',
                height: 1200,
                id: 'data-mv9k2fhk4',
                alt: 'Sea Turtle Swimming',
                type: 'Builder.Image',
                width: 1920,
                url: 'https://static.wixstatic.com/media/11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg/v1/fill/w_1920,h_1200,al_c,q_90,enc_auto/Sea%20Turtle%20Swimming.jpg',
            }}
            states={[raw({ name: 'open', componentId: 'comp-mv9k2fhj', id: 'variants-mv9k2fhk', type: 'State' })]}
        />
        <Image
            id="comp-mv9k2fhx"
            className="comp-mv9k2fhx"
            type="Component"
            displayMode={'fill'}
            image={{
                name: 'Sea Turtle Swimming',
                uri: '11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg',
                height: 1200,
                id: 'data-mv9k2fhy2',
                alt: 'Sea Turtle Swimming',
                type: 'Builder.Image',
                width: 1920,
                url: 'https://static.wixstatic.com/media/11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg/v1/fill/w_1920,h_1200,al_c,q_90,enc_auto/Sea%20Turtle%20Swimming.jpg',
            }}
        />
        <Image
            id="comp-mv9k2fia"
            className="comp-mv9k2fia"
            type="Component"
            displayMode={'fill'}
            image={{
                name: 'Sea Turtle Swimming',
                uri: '11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg',
                height: 1200,
                id: 'data-mv9k2fib2',
                alt: 'Sea Turtle Swimming',
                type: 'Builder.Image',
                width: 1920,
                url: 'https://static.wixstatic.com/media/11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg/v1/fill/w_1920,h_1200,al_c,q_90,enc_auto/Sea%20Turtle%20Swimming.jpg',
            }}
        />
        <Interaction tagName="div" interactKey="comp-mv9k2fip">
            <Image
                id="comp-mv9k2fip"
                className="comp-mv9k2fip"
                type="Component"
                displayMode={'fill'}
                image={{
                    name: 'Sea Turtle Swimming',
                    uri: '11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg',
                    height: 1200,
                    id: 'data-mv9k2fiq2',
                    alt: 'Sea Turtle Swimming',
                    type: 'Builder.Image',
                    width: 1920,
                    url: 'https://static.wixstatic.com/media/11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg/v1/fill/w_1920,h_1200,al_c,q_90,enc_auto/Sea%20Turtle%20Swimming.jpg',
                }}
            />
        </Interaction>
    </Page>
)
