//#region package/main.d.ts
declare module "@minecraft/server" {
  interface Player {
    /**
     * Gets the player's current health.
     */
    readonly health: number | undefined;
  }
}
export {};
