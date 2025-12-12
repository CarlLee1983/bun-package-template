import { describe, expect, it } from 'bun:test'
import packageJson from '../package.json'
import { VERSION } from '../src/index'

describe('{{PACKAGE_NAME}}', () => {
  describe('VERSION', () => {
    it('should export the correct version from package.json', () => {
      expect(VERSION).toBe(packageJson.version)
    })
  })

  // TODO: Add more tests here
})
