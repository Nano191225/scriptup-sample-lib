import { Player } from "@minecraft/server";

declare module "@minecraft/server" {
    interface Player {
        /**
         * Gets the player's current health.
         */
        readonly health: number | undefined;
    }
}

Object.defineProperty(Player.prototype, "health", {
    get() {
        return (this as Player).getComponent("health")?.currentValue;
    },
});