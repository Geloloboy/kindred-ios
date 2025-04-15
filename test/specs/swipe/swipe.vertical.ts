import Footer from "../../pageobjects/footer"
import SwipePage from "../../pageobjects/swipe.page"

describe('The swipe page', () => {
    it('should show the webdriver robot at the bottom of the page', async () => {
        await Footer.SwipeButton.click()

        await SwipePage.swipePage('up')

        await expect(await SwipePage.webdriverioLogo).toBeDisplayed()
    })
})
