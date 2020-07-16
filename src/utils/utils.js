/**
 * Finds the percent slope given a rise and run
 * @returns Number
 */
export function percentSlope(r, d) {
  return r > 0 && d > 0 ? (r / d) * 100 : 0.0;
}

/**
 * Calculate the Altitude Gain and Loss
 * @param {Number[]} paths
 * @returns { gain: Number, loss: Number }
 */
export function calculateAltitudeGainLoss(paths) {
  let gain = 0;
  let loss = 0;
  console.log('paths ', paths);
  for (let i = 0; i < paths[0].length - 1; i++) {
    const diff = paths[0][i][2] - paths[0][i + 1][2];
    if (Math.sign(diff) === 1) {
      gain += diff;
    } else {
      loss += diff;
    }
  }
  return {
    gain: gain,
    loss: loss,
  };
}

// Accepts a Trail feature and returns a slope value
export function getSlope({ max_elevat, min_elevat, length_mi_ }) {
  return percentSlope(max_elevat - min_elevat, length_mi_ * 1609.34);
}
