import * as tf from "@tensorflow/tfjs";

function preprocessCanvas(canvas) {
  // Preprocess image for the network
  let tensor = tf
    .browser
    .fromPixels(canvas.current) // Shape: (300, 300, 3) - RGB image
    .resizeNearestNeighbor([28, 28]) // Shape: (28, 28, 3) - RGB image
    .mean(2) // Shape: (28, 28) - grayscale
    .expandDims(2) // Shape: (28, 28, 1) - network expects 3d values with channels in the last dimension
    .expandDims() // Shape: (1, 28, 28, 1) - network makes predictions for "batches" of images
    .toFloat(); // Network works with floating points inputs
  return tensor.div(255.0); // Normalize [0..255] values into [0..1] range
}

function getPrediction(theCanvas, model) {
  const tensor = preprocessCanvas(theCanvas);
  return model
    .then(loadedModel => loadedModel.predict(tensor).data())
    .then(async prediction => await tf.argMax(prediction).data()); // returns an int32 containing the predicted class
}

async function loadModel(modelPath) {
  console.log("TF: Model loading...");
  // load the model using a HTTPS request (where you have stored your model files)
  return await tf
    .loadLayersModel(modelPath)
    .then(console.log("TF: Model loaded."));
}

export { getPrediction, loadModel };