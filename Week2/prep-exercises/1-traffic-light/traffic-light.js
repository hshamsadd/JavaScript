```javascript

function getCurrentState(trafficLight) {
  return trafficLight.possibleStates[trafficLight.stateIndex];
}

function getNextStateIndex(trafficLight) {
  return (trafficLight.stateIndex + 1) % trafficLight.possibleStates.length;
}

function waitSync(secs) {
  const start = Date.now();
  while (Date.now() - start < secs * 1000) {}
}

function main() {
  const trafficLight = {
    possibleStates: ["🟢", "🟠", "🔴"],
    stateIndex: 0,
  };

  for (let cycle = 0; cycle < 6; cycle++) {
    const currentState = getCurrentState(trafficLight);
    console.log(cycle, "The traffic light is now", currentState);

    waitSync(1);
    trafficLight.stateIndex = getNextStateIndex(trafficLight);
  }
}

main();

/**
 * The output should be:

0 The traffic light is now 🟢
1 The traffic light is now 🟠
2 The traffic light is now 🔴
3 The traffic light is now 🟢
4 The traffic light is now 🟠
5 The traffic light is now 🔴

*/

```
