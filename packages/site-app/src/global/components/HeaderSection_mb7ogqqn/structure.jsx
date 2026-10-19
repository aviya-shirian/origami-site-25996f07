import { HeaderSection } from '@wix/origami-system-components/HeaderSection'
import { Menu } from '@origami-wrappers/wixEditorElements/menu'
import { SiteLogo } from '@origami-wrappers/wixEditorElements/sitelogo'
import { Background } from '@origami-wrappers/wixSystemElements/background'
import InternalContainer from '@wix/origami-system-components/InternalContainer'
import CUSTOM_MAIN_MENU from '../../../global/menus/CUSTOM_MAIN_MENU'

export const Structure = () => (
    <HeaderSection id="comp-mb7ogqqn" skin="wysiwyg.viewer.skins.area.RectangleArea" className="comp-mb7ogqqn">
        <InternalContainer
            id="comp-mdr142kt"
            className="comp-mdr142kt"
            type="Container"
            backgroundLayer={[<Background id="comp-mlj8v94e" className="comp-mlj8v94e" type="Component" />]}
        >
            <SiteLogo
                id="comp-mv6dibgr"
                className="comp-mv6dibgr"
                type="Component"
                mediaType={'svg'}
                svgId={{
                    uri: '2e2a49_1842008cc7cc41f7a72ac0b91a69e251.svg',
                    type: 'Builder.VectorArt',
                    id: 'dataItem-mv6dibh0',
                }}
                image={{
                    name: 'Logo Component2.png',
                    uri: '2e2a49_924a70e05402423fa3ea7e41fe24b9e5~mv2.png',
                    height: 220,
                    id: 'dataItem-mv6dibh2',
                    alt: 'Logo Component2.png',
                    type: 'Builder.Image',
                    width: 340,
                    url: 'https://static.wixstatic.com/media/2e2a49_924a70e05402423fa3ea7e41fe24b9e5~mv2.png/v1/fill/w_340,h_220,al_c,q_85,enc_auto/Logo%20Component2.png',
                }}
                a11y={{ ariaLabel: 'Homepage' }}
                link={{ target: '_self', href: '/' }}
            />
            <Menu
                id="comp-mu1byz6d"
                className="comp-mu1byz6d"
                type="Container"
                elementProps={{
                    hamburgerMenu: {
                        content: <InternalContainer id="comp-mu1byz6q2" className="comp-mu1byz6q2" type="Container" />,
                        headerContent: (
                            <InternalContainer id="comp-mu1byz6q3" className="comp-mu1byz6q3" type="Container" />
                        ),
                        elementProps: {
                            hamburgerCloseButton: {
                                elementProps: {
                                    animatedIcon: {
                                        svg: {
                                            uri: 'd9aa4ba7d4cf439eae572bd0a2037a9a.svg',
                                            type: 'Builder.VectorArt',
                                            id: 'dataItem-mu1byz724',
                                        },
                                        svgLastAnimatedSelected: {
                                            uri: '11062b_702fac46ae484fc083b1aebda93bf545.svg',
                                            type: 'Builder.VectorArt',
                                            id: 'dataItem-mu1byz73',
                                        },
                                        svgLastStaticSelected: {
                                            uri: 'd9aa4ba7d4cf439eae572bd0a2037a9a.svg',
                                            type: 'Builder.VectorArt',
                                            id: 'dataItem-mu1byz725',
                                        },
                                    },
                                },
                            },
                        },
                    },
                    navbar: { items: CUSTOM_MAIN_MENU.items },
                    hamburgerOpenButton: {
                        elementProps: {
                            animatedIcon: {
                                duration: 0.2,
                                svg: {
                                    uri: '11062b_4cb5ca8da52a4e1d918eda029ba01205.svg',
                                    type: 'Builder.VectorArt',
                                    id: 'dataItem-mu1byz8m6',
                                },
                                svgCustomAnimationSelected: {
                                    uri: '82fcd3_366fa2d88c2d4f00bca188880220525d.svg',
                                    type: 'Builder.VectorArt',
                                    id: 'dataItem-mu1byz8m7',
                                },
                                svgLastStaticSelected: {
                                    uri: '11062b_4cb5ca8da52a4e1d918eda029ba01205.svg',
                                    type: 'Builder.VectorArt',
                                    id: 'dataItem-mu1byz8m8',
                                },
                                svgLastAnimatedSelected: {
                                    uri: '82fcd3_366fa2d88c2d4f00bca188880220525d.svg',
                                    type: 'Builder.VectorArt',
                                    id: 'dataItem-mu1byz8m9',
                                },
                                svgCustomAnimationStart: {
                                    uri: '82fcd3_721d0e93e6824fe1a0ecc922c651afc4.svg',
                                    type: 'Builder.VectorArt',
                                    id: 'dataItem-mu1byz8m10',
                                },
                                svgCustomAnimationEnd: {
                                    uri: '82fcd3_440e71671a8d42c0b224f11e366d98c0.svg',
                                    type: 'Builder.VectorArt',
                                    id: 'dataItem-mu1byz8m11',
                                },
                            },
                        },
                    },
                }}
            />
        </InternalContainer>
    </HeaderSection>
)
