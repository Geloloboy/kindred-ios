import Footer from "../../pageobjects/footer"
import FormsPage from "../../pageobjects/forms.page"

describe('The forms page', () => {
    it('should throw show the input text as the result below it', async () => {
        await Footer.FormsButton.click()

        await FormsPage.addTextToInputField('This is a sample text')

        await FormsPage.verfiyInputFieldText('This is a sample text')
    })
})
