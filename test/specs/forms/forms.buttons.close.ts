import Footer from "../../pageobjects/footer"
import FormsPage from "../../pageobjects/forms.page"

describe('The forms page', () => {
    it('should close the alert when selecting any of the options shown', async () => {
        await Footer.FormsButton.click()

        await FormsPage.activeButton.click()
        await FormsPage.clickAlertButton('OK')

        await expect(await FormsPage.thisButtonIsAlert).not.toBeDisplayed()
    })
})
