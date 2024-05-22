// app/javascript/channels/ball_channel.js
import consumer from "./consumer"

consumer.subscriptions.create("BallChannel", {
  received(data) {
    // Handle the incoming data and update the 3D graph
    console.log(data)
    updateGraph(data.x, data.y, data.z)
  }
});

function updateGraph(x, y, z) {
  // Implement the logic to update the 3D graph with new coordinates
  console.log(`New coordinates: (${x}, ${y}, ${z})`)
}

