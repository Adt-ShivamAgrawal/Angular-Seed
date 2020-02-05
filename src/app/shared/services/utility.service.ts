import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  constructor() {}
  btoaUTF8(str) {
    const aUTF8CodeUnits = new Uint8Array(str.length);
    Array.prototype.forEach.call(aUTF8CodeUnits, (el, idx, arr) => {
      arr[idx] = str.charCodeAt(idx);
    });
    return btoa(
      String.fromCharCode.apply(null, new Uint8Array(aUTF8CodeUnits.buffer))
    );
  }
}
