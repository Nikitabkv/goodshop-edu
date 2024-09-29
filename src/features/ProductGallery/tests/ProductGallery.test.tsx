import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import ProductGallery from '../'

test('change active image', async () => {
  render(
    <ProductGallery imgs={['img1', 'img2', 'img3']} name="test"/>,
  )

  const productGallery = screen.getAllByAltText('test')

  expect(productGallery[0]).toHaveProperty('src', 'http://localhost:3000/img1')
  await userEvent.click(productGallery[2])
  expect(productGallery[0]).toHaveProperty('src', 'http://localhost:3000/img2')
  await userEvent.click(productGallery[3])
  expect(productGallery[0]).toHaveProperty('src', 'http://localhost:3000/img3')
})

test('all images have alt equal to "test"', async () => {
  render(
    <ProductGallery imgs={['img1', 'img2', 'img3']} name="test"/>,
  )
  const productGallery = screen.getAllByAltText('test')

  expect(
    productGallery.every((img) => img.getAttribute('alt') === 'test'),
  ).toBe(true)
})
