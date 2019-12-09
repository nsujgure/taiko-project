const { openBrowser, goto, write, press, click, switchTo, closeBrowser } = require('taiko');
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
        await click("More");
        await click("Help");
        await switchTo("https://qastudent.macmillaneducationeverywhere.com/more-options");
        await click("Terms and Conditions");
        await switchTo("https://qastudent.macmillaneducationeverywhere.com/more-options");
        await click("Privacy Policy");
        await switchTo("https://qastudent.macmillaneducationeverywhere.com/more-options");
        await click("Log out");
    } catch (error) {
        console.error(error);
    } finally {
	 await closeBrowser();
    }
})();

