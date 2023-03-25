const crypto = require('crypto')

class PartitionKeyGenerator {
  #TRIVIAL_PARTITION_KEY = '0'
  #MAX_PARTITION_KEY_LENGTH = 256

  generate (event) {
    let candidate = this._getCandidatePartitionKey(event)

    if (typeof candidate !== 'string') {
      candidate = JSON.stringify(candidate)
    }

    if (candidate.length > this.#MAX_PARTITION_KEY_LENGTH) {
      candidate = crypto.createHash('sha3-512').update(candidate).digest('hex')
    }

    return candidate
  }

  _getCandidatePartitionKey (event) {
    if (event?.partitionKey) {
      return event.partitionKey
    }

    if (event) {
      const data = JSON.stringify(event)
      return crypto.createHash('sha3-512').update(data).digest('hex')
    }

    return this.#TRIVIAL_PARTITION_KEY
  }
}

module.exports = PartitionKeyGenerator
