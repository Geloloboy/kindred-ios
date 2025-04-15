import { getXCUIAlertByName, getXCUIButtonByName, getXCUIByName, getXCUIStaticTextByName, getXCUISwitchByName, getXCUITextFieldByName, getXCUITextFieldByValue, getXCUITypePickerWheel } from "../utils"

type SwitchTextState = 'ON'|'OFF'
type DropdownOptiopns = "webdriver.io is awesome" | "Appium is awesome" | "This app is awesome"
type AlertOptions = 'Ask me later' | 'Cancel' | 'OK'

class Forms {
    get inputField() { return getXCUITextFieldByName('text-input') }
    get inputTextResult() { return getXCUIStaticTextByName('input-text-result') }
    get switch() { return getXCUISwitchByName('switch') }
    get switchText() { return getXCUIStaticTextByName('switch-text') }
    get dropdown() { return getXCUITextFieldByValue('Select an item...') }
    get activeButton() { return getXCUIByName('button-Active') }
    get thisButtonIsAlert() { return getXCUIAlertByName('This button is')}


    async addTextToInputField(text: string) {
        await this.inputField.setValue(text)
    }

    async verfiyInputFieldText(expectedText: string) {
        await expect(await this.inputTextResult).toHaveText(expectedText)
    }

    async verifySwitchText(state: SwitchTextState) {
        await expect(await this.switchText).toHaveText(`Click to turn the switch ${state}`)
    }

    async selectDropdownValue(dropdownValue: DropdownOptiopns) {
        await this.dropdown.click()
        await getXCUITypePickerWheel().addValue(dropdownValue)
        await getXCUIByName("done_button").click()
    }

    async verifyDropdownVaue(expectedValue: DropdownOptiopns) {
        await expect(await getXCUIByName("text_input")).toHaveAttribute('value', expectedValue)
    }

    async clickAlertButton(buttonText: AlertOptions) {
        await getXCUIButtonByName(buttonText).click()
    }
}

export default new Forms()