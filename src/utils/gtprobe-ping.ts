import { pong } from "./gtprobe-pong";

/** Decrements `remaining` and hands the turn over to `pong` until it reaches zero. */
export function ping(remaining: number): number {
  if (remaining === 0) return 0;
  return pong(remaining - 1) + 1;
}
