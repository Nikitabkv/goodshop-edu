// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from 'react'
import {expect, test} from 'vitest'
import { render, screen } from '@testing-library/react'
import ButtonWithChild from "../index.ts"

test('Button not disabled by default', async () => {
  render(
    <ButtonWithChild clickHandler={() => console.log(123)}>
      <span>123</span>
    </ButtonWithChild>
  )

  const button = screen.getByRole('button')
  expect(button).toHaveProperty('disabled', false)
})

test('Button should be disabled', async () => {
  render(
    <ButtonWithChild clickHandler={() => console.log(123)} disabled={true}>
      <span>123</span>
    </ButtonWithChild>
  )

  const button = screen.getByRole('button')
  expect(button).toHaveProperty('disabled', true)
})
