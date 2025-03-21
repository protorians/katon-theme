import {
    Color,
    declarationExplodes,
    ICommonAttributes,
    IWidgetDeclaration,
    MainFrame, Section,
    Style
} from "@protorians/widgets";
import {KatonViewProps} from "./type.js";
import {$ui} from "@protorians/core";


export function KatonView(
    declarations: IWidgetDeclaration<HTMLElement, KatonViewProps & ICommonAttributes>
) {
    const {
        declaration,
        extended
    } = declarationExplodes<IWidgetDeclaration<HTMLElement, KatonViewProps & ICommonAttributes>, KatonViewProps>(declarations,
        ['direction', 'helmet', 'navbar', 'bottomNavbar', 'footer']
    )

    declaration.style = Style({})
        .merge({
            display: 'flex',
            flexDirection: extended.direction?.toString() || 'column',
            color: Color.text,
            backgroundColor: Color.tint,
            width: '100%',
            minHeight: '100%',
        })

    declaration.children = [
        extended.helmet?.construct(({widget}) => {
            widget.attributeLess({
                'role': 'banner',
            })
        }),
        extended.navbar?.construct(({widget}) => {
            widget.attributeLess({
                'role': 'navbar',
            })
        }),
        MainFrame({
            style: {
                flex: '1 1 auto',
                display: 'flex',
                flexDirection: 'column',
            },
            children: declaration.children
        }).construct(({widget}) => {
            widget.attributeLess({
                'role': 'main',
            })
        }),
        extended.bottomNavbar?.construct(({widget}) => {
            widget.attributeLess({
                'role': 'navbar',
            })
        }),
        extended.footer?.style({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start'
        }).construct(({widget}) => {
            widget.attributeLess({
                'role': 'contentinfo',
            })
        }),
    ];

    return Section(declaration)
        .mount(({widget}) => {
            $ui('body').forEach((e) =>
                e.style.backgroundColor = `${widget.stylesheet.declarations.backgroundColor?.toString() || Color.tint}`
            )
        })
}