const { openBrowser, goto, write, press, click, closeBrowser } = require('taiko');
const assert = require("assert");
(async () => {
    try {       
 	await openBrowser()
	await emulateDevice('iPhone 6');        
	await goto("https://uatstudent.macmillaneducationeverywhere.com/#/login");
        await write("nsujgure");
        await press('Tab');
        await press('Tab');
        await write("Admin@123456");
        await click("Log in");
	await assert.ok(text('Courses').exists())
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();

