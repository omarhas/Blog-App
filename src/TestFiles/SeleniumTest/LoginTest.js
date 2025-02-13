const {Builder,By,until} = require('selenium-webdriver')

async function loginTest() {

    let driver = await new Builder().forBrowser('chrome').build()


    try{

        await driver.get("http://localhost:3000/login")

        await driver.findElement(By.id('username')).sendKeys('user')
        await driver.findElement(By.id('password')).sendKeys('pass')

        await driver.findElement(By.id('login-button')).click()

        await driver.get("http://localhost:3000/blogList")
        await driver.wait(until.urlIs('http://localhost:3000/blogList'),1000)

        console.log("Login test passed!!!")


    } catch(error) {
        console.error("Login test failed", error)
    } finally {
        await driver.quit()
    }

}


loginTest()



