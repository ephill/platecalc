import { writable } from "svelte/store";

export const userConfig = writable();

if (typeof window !== "undefined") {
  const json = window.localStorage.getItem("userConfig");
  if (json !== null) {
    userConfig.set(JSON.parse(json));
  } else {
    userConfig.set({
      barWeight: 45,
      numPlates: [2, 2, 2, 2, 2, 2, 2, 2],
      targetWeight: 75
    });
  }

  userConfig.subscribe(value => {
    window.localStorage.setItem("userConfig", JSON.stringify(value));
  });
} else {
  userConfig.set({
    barWeight: 45,
    numPlates: [2, 2, 2, 2, 2, 2, 2, 2],
    targetWeight: 75
  });
}
