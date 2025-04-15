import { getXCUIButtonByName } from "../utils"

class Footer {
    get HomeButton() {
        return getXCUIButtonByName('Home')
    }

    get WebviewButton() {
        return getXCUIButtonByName('Webview')
    }

    get LoginButton() {
        return getXCUIButtonByName('Login')
    }

    get FormsButton() {
        return getXCUIButtonByName('Forms')
    }

    get SwipeButton() {
        return getXCUIButtonByName('Swipe')
    }

    get DragButton() {
        return getXCUIButtonByName('Drag')
    }

    async clickAllButton() {
        await this.HomeButton.click()
        await this.WebviewButton.click()
        await this.LoginButton.click()
        await this.FormsButton.click()
        await this.SwipeButton.click()
        await this.DragButton.click()
    }
}

export default new Footer()