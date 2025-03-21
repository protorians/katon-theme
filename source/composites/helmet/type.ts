import {AligningDirection, type IStyleSheetDeclarations, type IWidgetNode} from "@protorians/widgets";
import {LayerVariant} from "@protorians/widgets-ui";

export type KatonHelmetProps = {
    variant?: LayerVariant;
    childrenStyle?:  IStyleSheetDeclarations;
    direction?: AligningDirection;
    start?: IWidgetNode<any, any>;
    end?: IWidgetNode<any, any>;
    fixed?: boolean;
}