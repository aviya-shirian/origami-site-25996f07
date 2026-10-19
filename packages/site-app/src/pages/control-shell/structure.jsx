import { Page } from '@wix/origami-system-components/Page'
import { Image } from '@origami-wrappers/wixEditorElements/image'

export const Structure = () => (
    <Page
        id="xxy5h"
        skin="wysiwyg.viewer.skins.page.ResponsivePageWithColorBG"
        className="xxy5h"
        data={{
            type: 'Page',
            id: 'xxy5h',
            title: 'control-shell',
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
            id="comp-mv9de2la"
            className="comp-mv9de2la"
            type="Component"
            displayMode={'fill'}
            image={{
                name: 'Sea Turtle Swimming',
                uri: '11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg',
                height: 1200,
                id: 'data-mv9de2lb1',
                alt: 'Sea Turtle Swimming',
                type: 'Builder.Image',
                width: 1920,
                url: 'https://static.wixstatic.com/media/11062b_9c7845bddd334a86a7ee63e6adaabbc4~mv2.jpg/v1/fill/w_1920,h_1200,al_c,q_90,enc_auto/Sea%20Turtle%20Swimming.jpg',
            }}
        />
    </Page>
)
