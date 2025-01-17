import {
  ConfigProvider,
  useConfig,
  setDefaultConfig,
  getDefaultConfig,
  useRtl,
} from './configprovider.taro'

export type { ConfigProviderProps, Direction } from './configprovider.taro'
export type { NutCSSVariables } from './types'
export { useConfig, setDefaultConfig, getDefaultConfig, useRtl }
export default ConfigProvider
