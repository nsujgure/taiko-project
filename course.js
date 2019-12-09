const { openBrowser, goto, write, press, click, switchTo, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("https://uatstudent.macmillaneducationeverywhere.com/#/login");
        await write("nproject456");
        await press('Tab');
        await press('Tab');
        await write("password1234");
        await click("Log in",{Timeout:200000});
        await press('Tab');
	await waitFor(5000);
	await click($("//span[text()='Language Hub Elementary']"));
        await click("Preparation and Practice");
        await click("Unit 1");
        await click("Lesson 1.1 People and places");
        await click("Vocabulary preparation: Countries");
        await switchTo("https://uatstudent.macmillaneducationeverywhere.com/rcf-player.html");
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();

