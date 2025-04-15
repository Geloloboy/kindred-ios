import Footer from "../../pageobjects/footer"
import FormsPage from "../../pageobjects/forms.page"

describe('The forms page', () => {
    it('should show if the switch is turned on or off via the subtext', async () => {
        await Footer.FormsButton.click()

        await FormsPage.switch.click()

        await FormsPage.verifySwitchText('OFF')
    })
})
