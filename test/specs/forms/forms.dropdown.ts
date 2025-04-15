import Footer from "../../pageobjects/footer"
import FormsPage from "../../pageobjects/forms.page"

describe('The forms page', () => {
    it('should allow users to select a dropdown value', async () => {
        await Footer.FormsButton.click()

        await FormsPage.selectDropdownValue('Appium is awesome')

        await FormsPage.verifyDropdownVaue('Appium is awesome')
    })
})
