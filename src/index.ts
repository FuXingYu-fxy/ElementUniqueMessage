import { Message } from "element-ui";
import type { CloseEventHandler, ElMessageOptions, ElMessageComponent } from "element-ui/types/message";

type ShortcutFunctions = (options: string | ElMessageOptions) => ElMessageComponent | undefined;

// 定义 ElementUniqueMessage 的类型
export interface ElUniqueMessage {
  (options: string | ElMessageOptions): ElMessageComponent | undefined;
  success: ShortcutFunctions
  warning: ShortcutFunctions
  info: ShortcutFunctions
  error: ShortcutFunctions
}

const msgPoor = new Set<string>();

const ElementUniqueMessage: ElUniqueMessage = function(options: string | ElMessageOptions): ElMessageComponent | undefined {
  if (typeof options === 'string') {
    options = {
      message: options,
      type: 'info',
    };
  }
  const { message, type, onClose: userOnClose, ...rest } = options;
  const msgId = `${type}:${message}`;
  if (!message || msgPoor.has(msgId)) {
    return;
  }
  msgPoor.add(msgId);
  const onClose: CloseEventHandler = (instance) => {
    msgPoor.delete(msgId);
    if (typeof userOnClose === 'function') {
      userOnClose(instance);
    }
  };
  const config = {
    message,
    type,
    onClose,
    ...rest,
  };
  return Message(config);
} as ElUniqueMessage;

const types = ['success', 'warning', 'info', 'error'] as const;

types.forEach(type => {
  ElementUniqueMessage[type] = (options: string | ElMessageOptions) => {
    if (typeof options === 'string') {
      return ElementUniqueMessage({
        type,
        message: options
      });
    }
    return ElementUniqueMessage({
      ...options,
      type
    });
  };
});

export default ElementUniqueMessage;