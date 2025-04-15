import Footer from "../../pageobjects/footer"
import WebviewPage from "../../pageobjects/webview.page"

describe('The webview page', () => {
    it('should open the sidebar when clicking the hamburger button', async () => {
        await Footer.WebviewButton.click()
        await WebviewPage.waitForWebviewContext()
        await WebviewPage.switchToWebviewContext()

        await WebviewPage.sidebarButton.click()

        await expect(await WebviewPage.sidebarButton).toHaveAttribute('aria-expanded', 'true')
        await expect(await WebviewPage.sidebar).toBeDisplayed()
    })
})
