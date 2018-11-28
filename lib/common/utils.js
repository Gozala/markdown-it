// @flow strict

export function isSpace(code/*:number*/) {
  switch (code) {
    case 0x09:
    case 0x20:
      return true;
  }
  return false;
}