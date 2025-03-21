import {AligningDirection, type IWidgetNode} from "@protorians/widgets";

export type KatonScrollAreaProps = {
    direction?: AligningDirection;
    hideScroll?: boolean;
    children?: IWidgetNode<any, any>[];
}