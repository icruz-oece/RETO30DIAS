import{expect, test} from '@playwright/test'
test('login fallido', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web')
    await page.getByRole('textbox',{name:'username'}).fill('Admin')
    await page.getByRole('textbox',{name:'password'}).fill('12345')
    await page.getByRole('button',{name:'Login'}).click()

    await expect(page.getByRole('alert').getByText('Invalid credentials')).toBeVisible()


})