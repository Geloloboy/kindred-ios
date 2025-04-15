import Footer from "../../pageobjects/footer"
import WebviewPage from "../../pageobjects/webview.page"

describe('The webview page', () => {
    it('should show the search input when clicking the search button', async () => {
        await Footer.WebviewButton.click()
        await WebviewPage.waitForWebviewContext()
        await WebviewPage.switchToWebviewContext()

        await WebviewPage.searchButton.click()

        await expect(await WebviewPage.searchInput).toBeDisplayed()
    })
})
