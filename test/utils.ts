export const getXCUIButtonByName = (text: string) => {
    return $(`-ios predicate string:type == 'XCUIElementTypeButton' && name == '${text}'`) 
}

export const getXCUIStaticTextByName = (text: string) => {
    return $(`-ios predicate string:type == 'XCUIElementTypeStaticText' && name == '${text}'`) 
}

export const getXCUITextFieldByName = (text: string) => {
    return $(`-ios predicate string:type == 'XCUIElementTypeTextField' && name == '${text}'`) 
}

export const getXCUITextFieldByValue = (value: string) => {
    return $(`-ios predicate string:type == 'XCUIElementTypeTextField' && value == '${value}'`) 
}

export const getXCUISwitchByName = (text: string) => {
    return $(`-ios predicate string:type == 'XCUIElementTypeSwitch' && name == '${text}'`) 
}

export const getXCUIAlertByName = (text: string) => {
    return $(`-ios predicate string:type == 'XCUIElementTypeAlert' && name == '${text}'`) 
}

export const getXCUITypePickerWheel = () => {
    return $(`-ios predicate string:type == 'XCUIElementTypePickerWheel'`) 
}

export const getXCUIByName = (name: string) => {
    return $(`-ios predicate string:name == "${name}"`)
}