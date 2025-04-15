class Webview {
    WEBVIEW = 'WEBVIEW_13141.1'

    get sidebarButton() { return $('.navbar__toggle') }
    get sidebar() { return $('.navbar-sidebar') }
    get searchButton() { return $('.DocSearch-Button') }
    get searchInput() { return $('.DocSearch-Input') }

    async waitForWebviewContext() {
        await browser.waitUntil(async() => {
            const contexts = await browser.getContexts() as string[]
            return contexts.some((context) => context.includes('WEBVIEW'))    
        })
    }

    async switchToWebviewContext() {
        const contexts = await browser.getContexts()
        const webviewContext = contexts.find((context) => (context as string).includes('WEBVIEW'))
        if(webviewContext) await browser.switchContext(webviewContext)
        else throw new Error("Webview context not found")
    }
}

export default new Webview()