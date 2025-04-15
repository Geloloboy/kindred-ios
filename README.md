Getting Started
---------------

**Prerequisites**
- The user has installed all necessary appium dependencies. Please run [appium doctor](https://www.npmjs.com/package/appium-doctor) and follow the instructions.
- A version of the webdriverio sample app is on hand. Please see [here](https://github.com/webdriverio/native-demo-app/releases)
- A simulator is available for use.

**How To Run**
1. Clone the repository
2. Run `npm install`
3. Add the demo application to `./demo-app`. A sample file is already included in the repo
4. Open `wdio.conf.ts` and add the following to the `capabilities` section:
```typescript
capabilities: [{
        'appium:app': './demo-app/<app filename>.zip',
        'appium:deviceName': '<simulator name>',
        'appium:platformName': 'iOS',
        'appium:platformVersion': '<ios version>',
        'appium:automationName': 'XCUITest'
    }],
```
4. Run `npm run wdio`
5. Optional: An html report is generated after each run. It should be found on `./reports`

Scenarios Tested
---------------
| Page | Scenario | Expected Result |
|---|---|---|
| Webview | The user clicks the magnifying glass icon | The search input is shown |
| Webview | The user clicks the hamburger icon on the header | The sidebar opens |
| Login | The user tries to login without providing info on all fields | The correct error messages are displayed |
| Login | The user tries to signup without providing info on all fields | The correct error messages are displayed |
| Forms | The user types in a value on the input text field | The input text is shown as a result on the input result field|
| Forms | The user clicks the switch button | The corresponding switch text describes the effect of clicking the switch button properly |
| Forms | The user selects a value on the dropdown | The correct value is shown displayed on the dropdown |
| Forms | The user clicks the active button | The alert is shown |
| Forms | The user clicks on any button on the alert | The alert is closed |
| Swipe | The user swipes horizontally to the left until it reaches the end | The COMBINATION card is shown |
| Swipe | The user swiped vertically upward until it reaches the bottom | The webdriverio logo is shown |

Assumptions
---------------
- The app to be used will be compatible with the test
- The user is going to run the tests using a Mac
