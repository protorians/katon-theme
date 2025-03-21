import type {IWidgetNode} from "@protorians/widgets";
import {LayerVariant} from "@protorians/widgets-ui";

export type KatonButtonProps = {
    variant?: LayerVariant;
    outline?: boolean;
    before?: IWidgetNode<any, any>;
    after?: IWidgetNode<any, any>;
}