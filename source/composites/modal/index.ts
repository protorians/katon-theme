import {declarationExplodes, IChildren, ICommonAttributes, IWidgetDeclaration} from "@protorians/widgets";
import {IModal} from "@protorians/widgets-ui";
import {ModalKit} from "@protorians/widgets-ui/kits";
import {IModalOptions} from "@protorians/widgets-ui/types";


export function KatonModal(
    declarations: Omit<IWidgetDeclaration<HTMLElement, Partial<IModalOptions> & ICommonAttributes>, 'children'>
): IChildren<any> {

    const {
        // declaration,
        extended
    } = declarationExplodes<Omit<IWidgetDeclaration<HTMLElement, Partial<IModalOptions> & ICommonAttributes>, 'children'>, IModalOptions>(
        declarations, ['scope', 'trigger', 'fore', 'back', 'locked', 'blurred', 'animate', 'ariaTitle', 'ariaDescription', 'position', 'type']
    )

    return ModalKit
        .begin<IModal>()
        .trigger(extended.trigger)
        .scope(extended.scope)
        .fore(extended.fore)
        .back(extended.back)
        .locked(extended.locked)
        .blurred(extended.blurred)
        .animate(extended.animate)
        .ariaTitle(extended.ariaTitle)
        .ariaDescription(extended.ariaDescription)
        .position(extended.position)
        .type(extended.type)
        .commit
Ò
}