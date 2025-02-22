/**
 * Gun DB initialization and basic methods
 * @module useGun
 */

import Gun from "gun/gun";
import "gun/lib/then";
import "gun/lib/radix";
import "gun/lib/radisk";
import "gun/lib/store";
import "gun/lib/rindexed";
import "gun/lib/webrtc";


// // // polyfiils for Gun 0.2020.1236
// import { Buffer } from 'buffer'
// window.Buffer = Buffer
// window.setImmediate = setTimeout
// window.global = {}

import { peer } from './useRelay'


// https://github.com/amark/gun/wiki/volunteer.dht
// https://github.com/draeder/gun-relays

/** The main Gun instance for database operations */
export let gun;

/** Secondary Gun instance for key management */
export let gun2;

/**
 * Instantiate a Gun instance for DB manipulations
 * @param {Object} options - options fot this gun instance, like { localstorage:true }
 * @returns {Gun}
 * @example
 * import { useGun } from '@gun-vue/composables'
 *
 * const gun = useGun()
 */

export function useGun(opts = { localStorage: false }) {
  if (!gun) {
    gun = Gun({ peers: [peer.value], ...opts });
  }
  return gun;
}

/**
 * get a secondary Gun instance for certificate management
 * @param {object} options - options fot this gun instance, like { localstorage:true }
 * @returns {Gun}
 */

export function useGun2(opts = { localStorage: false }) {
  if (!gun2) {
    gun2 = Gun({ peers: [peer.value], ...opts });
  }
  return gun2;
}

/**
 * SEA library
 * @constant SEA
 */
export { default as SEA } from "gun/sea.js";

/**
 * **Get a soul for any given node**
 * A wrapper for `Gun.node.soul`
 * @function soul
 */
export const soul = Gun?.node?.soul;

/**
 * **Generate a random UUID**
 * A wrapper for `Gun.text.random`
 * @function genUUID
 */
export const genUUID = Gun?.text?.random;


