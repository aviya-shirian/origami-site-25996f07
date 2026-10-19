import { Page } from '@wix/origami-system-components/Page'
import { Image } from '@origami-wrappers/wixEditorElements/image'
import { raw } from 'document/bindings'
import { Interact, Interaction } from '@wix/interact/react'
import { BlurMouse, Pulse, TrackMouse } from '@wix/motion-presets'

Interact.registerEffects({ BlurMouse, Pulse, TrackMouse })

Interact.create({
    interactions: [
        {
            trigger: 'pointerMove',
            key: 'comp-mv9de7ib',
            params: { hitArea: 'root' },
            effects: [
                {
                    effectId: 'effects-mv9de7id1',
                    key: 'comp-mv9de7ib',
                    fill: 'both',
                    centeredToTarget: true,
                    transitionDuration: 500,
                    namedEffect: {
                        inverted: false,
                        id: 'effects-mv9de7id4',
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
            key: 'comp-mv9de7kc1',
            effects: [
                {
                    effectId: 'effects-mv9de7ke1',
                    key: 'comp-mv9de7kc1',
                    triggerType: 'repeat',
                    duration: 0,
                    fill: 'both',
                    namedEffect: { id: 'effects-mv9de7ke4', power: 'soft', type: 'Pulse' },
                },
            ],
        },
        {
            trigger: 'pointerMove',
            key: 'comp-mv9de7m3',
            effects: [
                {
                    effectId: 'effects-mv9de7m44',
                    key: 'comp-mv9de7m3',
                    fill: 'both',
                    namedEffect: {
                        id: 'effects-mv9de7m47',
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
        id="d1nfa"
        skin="wysiwyg.viewer.skins.page.ResponsivePageWithColorBG"
        className="d1nfa"
        data={{
            type: 'Page',
            id: 'd1nfa',
            title: 'f19-all',
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
            id="comp-mv9de7fk"
            className="comp-mv9de7fk"
            type="Component"
            displayMode={'fill'}
            image={{
                name: 'Sea Turtle Swimming',
                uri: '11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg',
                height: 1200,
                id: 'data-mv9de7fl3',
                alt: 'Sea Turtle Swimming',
                type: 'Builder.Image',
                width: 1920,
                url: 'https://static.wixstatic.com/media/11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg/v1/fill/w_1920,h_1200,al_c,q_90,enc_auto/Sea%20Turtle%20Swimming.jpg',
            }}
        />
        <Interaction tagName="div" interactKey="comp-mv9de7ib">
            <Image
                id="comp-mv9de7ib"
                className="comp-mv9de7ib"
                type="Component"
                displayMode={'fill'}
                image={{
                    name: 'Sea Turtle Swimming',
                    uri: '11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg',
                    height: 1200,
                    id: 'data-mv9de7ic2',
                    alt: 'Sea Turtle Swimming',
                    type: 'Builder.Image',
                    width: 1920,
                    url: 'https://static.wixstatic.com/media/11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg/v1/fill/w_1920,h_1200,al_c,q_90,enc_auto/Sea%20Turtle%20Swimming.jpg',
                }}
            />
        </Interaction>
        <Image
            id="comp-mv9de7j3"
            className="comp-mv9de7j3"
            type="Component"
            displayMode={'fill'}
            image={{
                name: 'Sea Turtle Swimming',
                uri: '11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg',
                height: 1200,
                id: 'data-mv9de7j42',
                alt: 'Sea Turtle Swimming',
                type: 'Builder.Image',
                width: 1920,
                url: 'https://static.wixstatic.com/media/11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg/v1/fill/w_1920,h_1200,al_c,q_90,enc_auto/Sea%20Turtle%20Swimming.jpg',
            }}
        />
        <Image
            id="comp-mv9de7jl1"
            className="comp-mv9de7jl1"
            type="Component"
            displayMode={'fill'}
            image={{
                name: 'Sea Turtle Swimming',
                uri: '11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg',
                height: 1200,
                id: 'data-mv9de7jm3',
                alt: 'Sea Turtle Swimming',
                type: 'Builder.Image',
                width: 1920,
                url: 'https://static.wixstatic.com/media/11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg/v1/fill/w_1920,h_1200,al_c,q_90,enc_auto/Sea%20Turtle%20Swimming.jpg',
            }}
            states={[raw({ name: 'open', componentId: 'comp-mv9de7jl1', id: 'variants-mv9de7jm', type: 'State' })]}
        />
        <Image
            id="comp-mv9de7k9"
            className="comp-mv9de7k9"
            type="Component"
            displayMode={'fill'}
            image={{
                name: 'Sea Turtle Swimming',
                uri: '11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg',
                height: 1200,
                id: 'data-mv9de7ka1',
                alt: 'Sea Turtle Swimming',
                type: 'Builder.Image',
                width: 1920,
                url: 'https://static.wixstatic.com/media/11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg/v1/fill/w_1920,h_1200,al_c,q_90,enc_auto/Sea%20Turtle%20Swimming.jpg',
            }}
        />
        <Interaction tagName="div" interactKey="comp-mv9de7kc1">
            <Image
                id="comp-mv9de7kc1"
                className="comp-mv9de7kc1"
                type="Component"
                image={{
                    name: 'Sea Turtle Swimming',
                    uri: '11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg',
                    height: 1200,
                    id: 'data-mv9de7kd2',
                    alt: 'Sea Turtle Swimming',
                    type: 'Builder.Image',
                    width: 1920,
                    url: 'https://static.wixstatic.com/media/11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg/v1/fill/w_1920,h_1200,al_c,q_90,enc_auto/Sea%20Turtle%20Swimming.jpg',
                }}
                displayMode={'fill'}
            />
        </Interaction>
        <Image
            id="comp-mv9de7ko"
            className="comp-mv9de7ko"
            type="Component"
            displayMode={'fill'}
            image={{
                name: 'Sea Turtle Swimming',
                uri: '11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg',
                height: 1200,
                id: 'data-mv9de7kp2',
                alt: 'Sea Turtle Swimming',
                type: 'Builder.Image',
                width: 1920,
                url: 'https://static.wixstatic.com/media/11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg/v1/fill/w_1920,h_1200,al_c,q_90,enc_auto/Sea%20Turtle%20Swimming.jpg',
            }}
        />
        <Image
            id="comp-mv9de7l2"
            className="comp-mv9de7l2"
            type="Component"
            displayMode={'fill'}
            image={{
                name: 'Sea Turtle Swimming',
                uri: '11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg',
                height: 1200,
                id: 'data-mv9de7l35',
                alt: 'Sea Turtle Swimming',
                type: 'Builder.Image',
                width: 1920,
                url: 'https://static.wixstatic.com/media/11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg/v1/fill/w_1920,h_1200,al_c,q_90,enc_auto/Sea%20Turtle%20Swimming.jpg',
            }}
            states={[
                raw({ name: 'open', componentId: 'comp-mv9de7l2', id: 'variants-mv9de7l3', type: 'State' }),
                raw({ name: 'closed', componentId: 'comp-mv9de7l2', id: 'variants-mv9de7l31', type: 'State' }),
            ]}
        />
        <Image
            id="comp-mv9de7la1"
            className="comp-mv9de7la1"
            type="Component"
            displayMode={'fill'}
            image={{
                name: 'Sea Turtle Swimming',
                uri: '11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg',
                height: 1200,
                id: 'data-mv9de7lb3',
                alt: 'Sea Turtle Swimming',
                type: 'Builder.Image',
                width: 1920,
                url: 'https://static.wixstatic.com/media/11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg/v1/fill/w_1920,h_1200,al_c,q_90,enc_auto/Sea%20Turtle%20Swimming.jpg',
            }}
        />
        <Image
            id="components-mv9de7ln2"
            className="components-mv9de7ln2"
            type="Component"
            displayMode={'fill'}
            image={{
                name: 'Sea Turtle Swimming',
                uri: '11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg',
                height: 1200,
                id: 'data-mv9de7lq1',
                alt: 'Sea Turtle Swimming',
                type: 'Builder.Image',
                width: 1920,
                url: 'https://static.wixstatic.com/media/11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg/v1/fill/w_1920,h_1200,al_c,q_90,enc_auto/Sea%20Turtle%20Swimming.jpg',
            }}
        />
        <Interaction tagName="div" interactKey="comp-mv9de7m3">
            <Image
                id="comp-mv9de7m3"
                className="comp-mv9de7m3"
                type="Component"
                displayMode={'fill'}
                image={{
                    name: 'Sea Turtle Swimming',
                    uri: '11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg',
                    height: 1200,
                    id: 'data-mv9de7m42',
                    alt: 'Sea Turtle Swimming',
                    type: 'Builder.Image',
                    width: 1920,
                    url: 'https://static.wixstatic.com/media/11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg/v1/fill/w_1920,h_1200,al_c,q_90,enc_auto/Sea%20Turtle%20Swimming.jpg',
                }}
            />
        </Interaction>
        <Image
            id="comp-mv9de7mf"
            className="comp-mv9de7mf"
            type="Component"
            displayMode={'fill'}
            image={{
                name: 'Sea Turtle Swimming',
                uri: '11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg',
                height: 1200,
                id: 'data-mv9de7mg1',
                alt: 'Sea Turtle Swimming',
                type: 'Builder.Image',
                width: 1920,
                url: 'https://static.wixstatic.com/media/11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg/v1/fill/w_1920,h_1200,al_c,q_90,enc_auto/Sea%20Turtle%20Swimming.jpg',
            }}
        />
    </Page>
)
