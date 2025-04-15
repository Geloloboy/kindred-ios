import Footer from "../../pageobjects/footer"
import SwipePage from "../../pageobjects/swipe.page"

describe('The swipe page', () => {
    it('should allow the users to swipe horizontally', async () => {
        await Footer.SwipeButton.click()

        await SwipePage.swipeCarousel('left')
        await SwipePage.swipeCarousel('left')
        await SwipePage.swipeCarousel('left')

        await expect(await SwipePage.compatibleLogo).toBeDisplayed()
    })
})
