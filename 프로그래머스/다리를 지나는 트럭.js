function solution(bridge_length, maxWeight, truck_weights) {
  let time = 0;
  let bridge = Array(bridge_length).fill(0);
  const left_truck_list = [...truck_weights];
  let passedTruckCount = 0;

  while (passedTruckCount < truck_weights.length) {
    const passedTruck = bridge.shift();
    time++;

    const truck = left_truck_list[0];
    const weightOnBridge = bridge.reduce((acc, cur) => acc + cur, 0);

    if (weightOnBridge + truck <= maxWeight) {
      bridge.push(truck);
      left_truck_list.shift();
    } else {
      bridge.push(0);
    }

    if (passedTruck > 0) {
      passedTruckCount++;
    }
  }

  return time;
}
