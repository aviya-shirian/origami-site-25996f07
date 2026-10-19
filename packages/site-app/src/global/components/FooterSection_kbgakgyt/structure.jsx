import { FooterSection } from '@wix/origami-system-components/FooterSection'
import { WRichText } from '@origami-wrappers/wixEditorElements/wrichtext'
import { Background } from '@origami-wrappers/wixSystemElements/background'
import InternalContainer from '@wix/origami-system-components/InternalContainer'

export const Structure = () => (
    <FooterSection id="comp-kbgakgyt" skin="wysiwyg.viewer.skins.area.RectangleArea" className="comp-kbgakgyt">
        <InternalContainer
            id="comp-mdr13kdg"
            className="comp-mdr13kdg"
            type="Container"
            backgroundLayer={[<Background id="comp-mdr17w8k" className="comp-mdr17w8k" type="Component" />]}
        >
            <WRichText
                id="comp-mu1b192l"
                className="comp-mu1b192l"
                type="Component"
                richText={{
                    linkList: [{ target: '_blank', href: 'https://www.wix.com/studio', rel: 'noreferrer noopener' }],
                    text: '<p>&copy; 2035 by Business Name. Built on&nbsp;<span style="text-decoration:underline"><a dataquery="#textLink_mu2bsgbu">Wix Studio</a></span></p>',
                    id: 'dataItem-mu1b192z',
                    type: 'Builder.RichText',
                }}
            />
        </InternalContainer>
    </FooterSection>
)
