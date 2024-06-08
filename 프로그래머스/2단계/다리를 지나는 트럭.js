function solution(bridge_length, weight, truck_weights) {
    let time = 1;
    
    const onBridge = new Array(bridge_length).fill(0);
    let onBridgeWeight = 0;
    
    onBridge.shift();
    onBridgeWeight += truck_weights[0];
    onBridge.push(truck_weights.shift());
    
    while (onBridgeWeight > 0) {
        time++;
        onBridgeWeight -= onBridge.shift();
        console.log(onBridgeWeight)
        if (truck_weights.length > 0 && onBridgeWeight + truck_weights[0] <= weight) {
            onBridgeWeight += truck_weights[0];
            onBridge.push(truck_weights.shift());
        } else {
            onBridge.push(0);
        }
    }

    return time;
}