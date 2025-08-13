import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('test', async ({ page }) => {
  await page.goto('https://vlp.thestorywallcafe.com/login');
  await page.getByRole('textbox', { name: 'Email Address*' }).click();
  await page.getByRole('textbox', { name: 'Email Address*' }).fill('sandesh@ekfrazo.in');
  await page.getByRole('textbox', { name: 'Email Address*' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password*' }).fill('1234');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('navigation').getByText('Settings chevron_right').click();
  await page.getByRole('navigation').locator('mat-list-item').filter({ hasText: 'Country' }).click();
  await page.locator('div').filter({ hasText: /^Country Name \*$/ }).nth(3).click();
  await page.getByRole('textbox', { name: 'Country Name *' }).fill(faker.location.country());;
  await page.getByRole('button', { name: 'Submit' }).click();
});