import { getXCUIByName } from "../utils"

type HorizontalDirectionOptions = 'left' | 'right'
type VerticalDirectionOptions = 'up' | 'down'

class Swipe{
    get carousel() { return getXCUIByName('Carousel') }
    get verticalScrollBar() { return getXCUIByName("Vertical scroll bar, 3 pages") }
    get webdriverioLogo() { return getXCUIByName("WebdriverIO logo") }
    get compatibleLogo() { return $("-ios predicate string:label CONTAINS 'COMPATIBLE' && name == 'card'")}

    async swipeCarousel(direction: HorizontalDirectionOptions) {
        await browser.swipe({direction, duration: 250, scrollableElement: this.carousel})
    }

    async swipePage(direction: VerticalDirectionOptions) {
        await browser.swipe({direction, duration: 500, scrollableElement: this.verticalScrollBar})
    }
}

export default new Swipe()