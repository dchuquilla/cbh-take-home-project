const crypto = require('crypto')
const PartitionKeyGenerator = require('./partitionKeyGenerator')

describe('PartitionKeyGenerator', () => {
  let generator

  beforeEach(() => {
    generator = new PartitionKeyGenerator()
  })

  describe('generate', () => {
    it('returns the trivial partition key if event is falsy', () => {
      const result = generator.generate(null)
      expect(result).toBe('0')
    })

    it('returns the trivial partition key if event has no partition key and is not an object', () => {
      const result = generator.generate('not an object')
      expect(result).not.toBe('0')
    })

    it('returns the partition key from the event if it exists', () => {
      const event = { partitionKey: 'abc123' }
      const result = generator.generate(event)
      expect(result).toBe(event.partitionKey)
    })

    it('returns a hash of the event as the partition key if it has no partition key', () => {
      const event = { name: 'John Doe', age: 30 }
      const hash = crypto
        .createHash('sha3-512')
        .update(JSON.stringify(event))
        .digest('hex')
      const result = generator.generate(event)
      expect(result).toBe(hash)
    })

    it('returns a hash of the partition key if it is longer than 256 characters', () => {
      const longPartitionKey = 'a'.repeat(257)
      const hash = crypto
        .createHash('sha3-512')
        .update(longPartitionKey)
        .digest('hex')
      const event = { partitionKey: longPartitionKey }
      const result = generator.generate(event)
      expect(result).toBe(hash)
    })

    it('returns a stringified candidate partition key if it is not a string', () => {
      const event = { name: 'John Doe', age: 30 }
      const candidate = { event }
      const hash = crypto
        .createHash('sha3-512')
        .update(JSON.stringify(candidate))
        .digest('hex')
      const result = generator.generate(candidate)
      expect(result).toBe(hash)
    })
  })
})
