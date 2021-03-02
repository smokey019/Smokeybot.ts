export interface ContextModel {
  'badge-info'?: Record<string, unknown>,
  badges?: {
    broadcaster?: string,
    subscriber?: string,
    partner?: string,
    vip?: string,
    staff?: string,
    admin?: string,
    moderator?: string,
    global_mod?: string,
  },
  bits?: number,
  color?: string,
  'display-name'?: string,
  emotes?: any,
  flags?: any,
  id?: string,
  mod?: boolean,
  'room-id'?: string,
  subscriber?: boolean,
  'tmi-sent-ts'?: string,
  turbo?: boolean,
  'user-id'?: string,
  'user-type'?: any,
  'emotes-raw'?: string,
  'badge-info-raw'?: string,
  'badges-raw'?: string,
  username?: string,
  'message-type'?: string,
  message?: string,
  'user-level'?: number,
}
