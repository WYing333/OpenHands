import { ping } from "./gtprobe-ping";

/** Decrements `remaining` and hands the turn back to `ping` until it reaches zero. */
export function pong(remaining: number): number {
  if (remaining === 0) return 0;
  return ping(remaining - 1) + 1;
}
