import { Page } from '@wix/origami-system-components/Page'
import { Image } from '@origami-wrappers/wixEditorElements/image'
import { raw } from 'document/bindings'
import { Interact, Interaction } from '@wix/interact/react'
import { BlurMouse, TrackMouse } from '@wix/motion-presets'

Interact.registerEffects({ BlurMouse, TrackMouse })

Interact.create({
    interactions: [
        {
            trigger: 'pointerMove',
            key: 'comp-mv9dqmrr',
            params: { hitArea: 'root' },
            effects: [
                {
                    effectId: 'effects-mv9dqmrs4',
                    key: 'comp-mv9dqmrr',
                    fill: 'both',
                    centeredToTarget: true,
                    transitionDuration: 500,
                    namedEffect: {
                        inverted: false,
                        id: 'effects-mv9dqmrs7',
                        blur: 25,
                        power: 'medium',
                        type: 'BlurMouse',
                        distance: { type: 'px', value: 100 },
                    },
                },
            ],
        },
        {
            trigger: 'pointerMove',
            key: 'comp-mv9dqmwc',
            effects: [
                {
                    effectId: 'effects-mv9dqmwe1',
                    key: 'comp-mv9dqmwc',
                    fill: 'both',
                    namedEffect: {
                        id: 'effects-mv9dqmwe4',
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
        id="x532b"
        skin="wysiwyg.viewer.skins.page.ResponsivePageWithColorBG"
        className="x532b"
        data={{
            type: 'Page',
            id: 'x532b',
            title: 'f19-fixed',
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
        <Image
            id="comp-mv9dqmpg"
            className="comp-mv9dqmpg"
            type="Component"
            displayMode={'fill'}
            image={{
                visualEffects: {
                    originalImageUri: '11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg',
                    filter: { filterPresetId: 14, amount: 1 },
                    id: 'imageVisualEffects-mve0jbql',
                    adjustments: {
                        highlights: 0,
                        tint: 0,
                        saturation: 1,
                        temperature: 0,
                        shadows: 0,
                        vignetteSize: 0.2,
                        exposure: 0,
                        sharpness: 0,
                        customTintColor: { red: 255, green: 0, blue: 71 },
                        customTintAmount: 0,
                        blur: 0,
                        vignetteAmount: 0,
                        grain: 0.87,
                        brightness: 1,
                        contrast: 1,
                    },
                    type: 'ImageVisualEffects',
                },
                name: 'Sea Turtle Swimming',
                uri: 'c34595_3aa54f00c0b74ed89f62789f6377c2b4~mv2.png',
                height: 1200,
                id: 'data-mv9dqmph2',
                alt: 'Sea Turtle Swimming',
                type: 'Builder.Image',
                crop: { x: 0, y: 0, width: 1920, height: 1200 },
                width: 1920,
                url: 'https://static.wixstatic.com/media/c34595_3aa54f00c0b74ed89f62789f6377c2b4~mv2.png/v1/fill/w_1920,h_1200,al_c,q_95,enc_auto/Sea%20Turtle%20Swimming.png',
            }}
        />
        <Interaction tagName="div" interactKey="comp-mv9dqmrr">
            <Image
                id="comp-mv9dqmrr"
                className="comp-mv9dqmrr"
                type="Component"
                displayMode={'fill'}
                image={{
                    name: 'Sea Turtle Swimming',
                    uri: '11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg',
                    height: 1200,
                    id: 'data-mv9dqmrs2',
                    alt: 'Sea Turtle Swimming',
                    type: 'Builder.Image',
                    crop: { x: 0, y: 0, width: 1920, height: 1200 },
                    width: 1920,
                    url: 'https://static.wixstatic.com/media/11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg/v1/fill/w_1920,h_1200,al_c,q_90,enc_auto/Sea%20Turtle%20Swimming.jpg',
                }}
            />
        </Interaction>
        <Image
            id="comp-mv9dqmsj"
            className="comp-mv9dqmsj"
            type="Component"
            displayMode={'fill'}
            image={{
                name: 'Sea Turtle Swimming',
                uri: '11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg',
                height: 1200,
                id: 'data-mv9dqmsk2',
                alt: 'Sea Turtle Swimming',
                type: 'Builder.Image',
                width: 1920,
                url: 'https://static.wixstatic.com/media/11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg/v1/fill/w_1920,h_1200,al_c,q_90,enc_auto/Sea%20Turtle%20Swimming.jpg',
            }}
        />
        <Image
            id="comp-mv9dqmt31"
            className="comp-mv9dqmt31"
            type="Component"
            displayMode={'fill'}
            image={{
                name: 'Sea Turtle Swimming',
                uri: '11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg',
                height: 1200,
                id: 'data-mv9dqmt43',
                alt: 'Sea Turtle Swimming',
                type: 'Builder.Image',
                width: 1920,
                url: 'https://static.wixstatic.com/media/11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg/v1/fill/w_1920,h_1200,al_c,q_90,enc_auto/Sea%20Turtle%20Swimming.jpg',
            }}
            states={[
                raw({ name: 'open', componentId: 'comp-mv9dqmt31', id: 'variants-mv9dqmt4', type: 'State' }),
                raw({ name: '', componentId: 'comp-mv9dqmt31', id: 'variants-mv9e2gzy', type: 'State' }),
            ]}
        />
        <Interaction tagName="div" interactKey="comp-mv9dqmwc">
            <Image
                id="comp-mv9dqmwc"
                className="comp-mv9dqmwc"
                type="Component"
                displayMode={'fill'}
                image={{
                    name: 'Sea Turtle Swimming',
                    uri: '11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg',
                    height: 1200,
                    id: 'data-mv9dqmwd2',
                    alt: 'Sea Turtle Swimming',
                    type: 'Builder.Image',
                    width: 1920,
                    url: 'https://static.wixstatic.com/media/11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg/v1/fill/w_1920,h_1200,al_c,q_90,enc_auto/Sea%20Turtle%20Swimming.jpg',
                }}
            />
        </Interaction>
    </Page>
)
