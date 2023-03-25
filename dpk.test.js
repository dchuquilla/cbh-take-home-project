const crypto = require('crypto')
const { deterministicPartitionKey } = require('./dpk')

describe('deterministicPartitionKey', () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey()
    expect(trivialKey).toBe('0')
  })
})

describe('deterministicPartitionKey', () => {
  const eventWithPartitionKey = { partitionKey: 'my-partition-key' }
  const eventWithoutPartitionKey = { someData: 'my-data' }
  const longEvent = { someLongData: 'a'.repeat(300) }

  it('should use the partition key if it exists', () => {
    const result = deterministicPartitionKey(eventWithPartitionKey)
    expect(result).toBe('my-partition-key')
  })

  it('should generate a deterministic partition key for events without a partition key', () => {
    const result1 = deterministicPartitionKey(eventWithoutPartitionKey)
    const result2 = deterministicPartitionKey(eventWithoutPartitionKey)
    expect(result1).toBe(result2) // should be deterministic
  })

  it('should truncate partition keys that are too long', () => {
    const result = deterministicPartitionKey(longEvent)
    expect(result.length).toBeLessThanOrEqual(256)
  })

  it('should generate a non-trivial partition key if all else fails', () => {
    const result = deterministicPartitionKey(null)
    console.log(result)
    expect(result).toBe('0')
  })

  it('should generate the same partition key for identical non-string candidates', () => {
    const candidate = { someData: 'my-data' }
    const result1 = deterministicPartitionKey(candidate)
    const result2 = deterministicPartitionKey(candidate)
    expect(result1).toBe(result2) // should be deterministic
  })

  it('should generate the same partition key for identical string candidates', () => {
    const candidate = 'my-string-candidate'
    const result1 = deterministicPartitionKey(candidate)
    const result2 = deterministicPartitionKey(candidate)
    expect(result1).toBe(result2) // should be deterministic
  })

  it('should generate different partition keys for different candidates', () => {
    const candidate1 = { someData: 'my-data-1' }
    const candidate2 = { someData: 'my-data-2' }
    const result1 = deterministicPartitionKey(candidate1)
    const result2 = deterministicPartitionKey(candidate2)
    expect(result1).not.toBe(result2) // should be different
  })
})
