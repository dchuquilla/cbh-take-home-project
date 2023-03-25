const PartitionKeyGenerator = require('./partitionKeyGenerator')

exports.deterministicPartitionKey = event => {
  const generator = new PartitionKeyGenerator()
  return generator.generate(event)
}
