jest.autoMockOff()
const { defineInlineTest, defineTest } = require('jscodeshift/dist/testUtils')
const transform = require('../transform')

defineTest(__dirname, 'transform')

describe('transforms a single default module', () => {
  defineInlineTest(
    transform,
    {},
    `import { Box } from '@telusdigital/tds'`,
    `import Box from '@tds/core-box'`
  )
})

describe('transforms multiple default modules', () => {
  defineInlineTest(
    transform,
    {},
    `import { Box, ButtonLink } from '@telusdigital/tds'`,
    `import Box from '@tds/core-box'
import ButtonLink from '@tds/core-button-link'`
  )
})

describe('transforms child modules', () => {
  defineInlineTest(
    transform,
    {},
    `import { ExpandCollapse } from '@telusdigital/tds'`,
    `import { ExpandCollapse } from '@tds/core-expand-collapse'`
  )
})

describe('transforms and groups related child modules', () => {
  defineInlineTest(
    transform,
    {},
    `import { ExpandCollapse, Accordion } from '@telusdigital/tds'`,
    `import { ExpandCollapse, Accordion } from '@tds/core-expand-collapse'`
  )
})
