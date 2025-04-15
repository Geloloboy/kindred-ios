import { getXCUIStaticTextByName } from "../utils"

class Login {
    get loginButton() { return getXCUIStaticTextByName('LOGIN') }
    get signupTab() { return getXCUIStaticTextByName('Sign up')}
    get signupButton() { return getXCUIStaticTextByName('SIGN UP') }
}

export default new Login()