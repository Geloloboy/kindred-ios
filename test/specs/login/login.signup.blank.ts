import Footer from "../../pageobjects/footer"
import LoginPage from "../../pageobjects/login.page"
import { getXCUIStaticTextByName } from "../../utils"

describe('The login page', () => {
    it('should throw an error when there are no value shown in the signup fields', async () => {
        await Footer.LoginButton.click()
        await LoginPage.signupTab.click()
        await LoginPage.signupButton.click()

        await expect(await getXCUIStaticTextByName("Please enter a valid email address")).toExist()
        await expect(await getXCUIStaticTextByName("Please enter at least 8 characters")).toExist()
        await expect(await getXCUIStaticTextByName("Please enter the same password")).toExist()
    })
})
