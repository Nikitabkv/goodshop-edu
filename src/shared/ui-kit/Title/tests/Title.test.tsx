import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Title from "../index.ts"

test('Title render as h1 by default', async () => {
  render(
    <Title>
      test
    </Title>
  )

  const titleElement = screen.getByText('test')
  expect(titleElement.tagName).toBe('H1')
})

test('Title should render as h4', async () => {
  render(
    <Title tag={'h4'}>
      test
    </Title>
  )

  const titleElement = screen.getByText('test')
  expect(titleElement.tagName).toBe('H4')
})
