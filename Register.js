const { openBrowser, goto, click, $, switchTo, write, dropDown, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("https://uatstudent.macmillaneducationeverywhere.com/#/login");
        await click("Register");
	await waitFor("5000");
        await switchTo("http://converged-uat.macmillan.education/register/");
        await click($("//input[@id='_AccessCode']"));
        await write("639085434129");
        await click("Check code");
        await click("Create account");
        await click($("//input[@id='firstName']"));
        await write("TestAccount");
        await click($("//input[@id='lastName']"));
        await write("Lastnameuser");
        await click($("//select[@id='country']"));
        await dropDown({id:'country'}).select('India');
        await click($("//input[@id='email']"));
        await write("nemotestuser@gmail.com");
        await click("Next");
        await click($("//input[@id='username']"));
        await write("bsldemotesting");
        await click($("//input[@id='password']"));
        await write("password1234");
        await click($("//input[@id='confirmPassword']"));
        await write("password1234");
        await click("Create account");
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();


