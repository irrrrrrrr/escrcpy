import { extraResolve } from '$electron/helpers/index.js'
import which from 'which'

export function getScrcpyPath() {
  switch (process.platform) {
    case 'win32':
      return extraResolve(`win-${process.arch}/scrcpy/scrcpy.exe`)
    case 'darwin':
      return extraResolve(`mac-${process.arch}/scrcpy/scrcpy`)
    case 'linux':
      return extraResolve('linux/scrcpy/scrcpy')
    default:
      return which.sync('scrcpy', { nothrow: true })
  }
}

export const scrcpyPath = getScrcpyPath()
