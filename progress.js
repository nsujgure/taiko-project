const { openBrowser, goto, write, press, click, currentURL, closeBrowser } = require('taiko');
const assert = require("assert");
(async () => {
    try {
        await openBrowser();
        await goto("https://qastudent.macmillaneducationeverywhere.com/login");
        await write("nsujgure");
        await press('Tab');
        await press('Tab');
        await write("Admin@123456");
        await click("Log in");
        await click("Progress");
        await click("Language Hub Elementary");
	await assert.ok(text('Course').exists())
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
