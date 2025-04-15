import Footer from "../../pageobjects/footer"
import FormsPage from "../../pageobjects/forms.page"

describe('The forms page', () => {
    it('should show an alert when the Active button is pressed', async () => {
        await Footer.FormsButton.click()

        await FormsPage.activeButton.click()

        await expect(await FormsPage.thisButtonIsAlert).toBeDisplayed()
    })
})
