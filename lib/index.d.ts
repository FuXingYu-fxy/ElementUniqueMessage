import { ElMessageOptions, ElMessageComponent } from 'element-ui/types/message';
type ShortcutFunctions = (options: string | ElMessageOptions) => ElMessageComponent | undefined;
export interface ElUniqueMessage {
    (options: string | ElMessageOptions): ElMessageComponent | undefined;
    success: ShortcutFunctions;
    warning: ShortcutFunctions;
    info: ShortcutFunctions;
    error: ShortcutFunctions;
}
declare const ElementUniqueMessage: ElUniqueMessage;
export default ElementUniqueMessage;


