import{test} from "@playwright/test"
test('Login', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com')
    await page.getByRole('textbox', {name:'username'}).fill('Admin')
    await page.getByRole('textbox', {name:'password'}).fill('admin123')
    await page.getByRole('button',{name:'Login'}).click()
})
