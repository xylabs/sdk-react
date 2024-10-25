export type ErrorEx<T = void> = T extends void ? Error : T | Error
