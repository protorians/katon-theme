import {type KatonScrollAreaProps} from "./type.js";
import {
    AligningDirection,
    Column,
    declarationExplodes,
    type ICommonAttributes,
    type IWidgetDeclaration,
    type IWidgetNode, Row,
    Style
} from "@protorians/widgets";


export function KatonScrollArea(
    declarations: IWidgetDeclaration<HTMLElement, KatonScrollAreaProps & ICommonAttributes>
): IWidgetNode<any, any> {

    const {
        declaration,
        extended
    } = declarationExplodes<IWidgetDeclaration<HTMLElement, KatonScrollAreaProps & ICommonAttributes>, KatonScrollAreaProps>(
        declarations, ['direction', 'children', 'hideScroll', 'size']
    )
    const hideScroll = typeof extended.hideScroll === 'undefined' ? true : extended.hideScroll;
    const isColumn = (extended.direction === AligningDirection.Column || extended.direction === AligningDirection.ColumnReverse)

    declaration.style = Style({})
        .merge(declaration.style)
        .merge({
            flexWrap: 'nowrap',
        })

    if (hideScroll) {
        declaration.style.merge({
            scrollbarWidth: 'none',
            '--ms-overflow-style': 'hidden',
            '&::-webkit-scrollbar': Style({
                display: 'none',
                background: 'transparent'
            })
        })
    }

    if (isColumn) {
        declaration.style.merge({
            height: '100%',
            maxHeight: extended.size || `100vh`,
            minWidth: '48px',
            overflowY: 'auto',
        })
    }

    if (!isColumn) {
        declaration.style.merge({
            width: '100%',
            maxWidth: extended.size || `100vw`,
            minHeight: '48px',
            overflowX: 'auto',
        })
    }

    declaration.children = extended.children?.map(widget => {
        widget.style({
            flexWrap: 'nowrap',
            whiteSpace: 'nowrap',
        })
        return widget;
    })

    return (isColumn ? Column : Row)(declaration)
}