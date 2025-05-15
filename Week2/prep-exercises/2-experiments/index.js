function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < sampleSize; i++) {
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    valueCounts[randomNumber - 1] += 1;
  }

  const results = [];
  for (let valueCount of valueCounts) {
    const total = (valueCount / sampleSize) * 100;
    results.push(total.toFixed(2));
  }

  return results;
}

function main() {
  const sampleSizes = [100, 1000, 1000000];
  for (let size of sampleSizes) {
    const result = runExperiment(size);
    console.log(result, size);
  }
}

main();
