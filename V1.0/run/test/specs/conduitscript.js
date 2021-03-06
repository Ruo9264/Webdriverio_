describe("conduit script", () => {
    it("open target page", async () => {
        await browser.url("https://angular.realworld.io/");
    });
    it("sign in the account", async () => {
        await browser.$("=Sign in").click();
        await $('[placeholder="Email"]').setValue("roy@9264.com");
        await $('[type="password"]').setValue("Roy9264786");
        await $("<button>").click();
        await browser.pause(4000);
    });
    it("like this article", async () => {
        await browser.$("=Global Feed").click();
        await browser.pause(2000);
        await browser.$("app-article-preview:nth-child(1)").$("<button>").click();

        await browser.pause(5000);
        /*await browser.waitUntil(
          async () =>
            (await browser
              .$("app-article-preview:nth-child(1)")
              .$("<button>")
              .getText()) === "1",
          {
            timeout: 3000,
            timeoutMsg: "wait the heart filled",
          }
        );*/
    });
    it("Delete old article", async () => {
/// await browser.$("h1*=Agile").click();
        await browser.$("app-article-preview:nth-child(1)").$("span=Read more...").click();

        await browser.waitUntil(
            async () =>
                (await $(".btn-outline-danger").getText()) === "Delete Article",
            {
                timeout: 3000,
                timeoutMsg: "wait the page load extremely",
            }
        );
        //await browser.pause(2000);
        //await console.log(await $(".btn-outline-danger").getText()); //Text shows "Delete Article"
        await $(".ion-trash-a").click();
        await browser.pause(3000);
        await browser.$("=Global Feed").click();
        await browser.pause(3000);
    });
    it("add a new article", async () => {
        await $(".ion-compose").click();
        await browser.waitUntil(async () => await $("<button>"), {
            timeout: 3000,
            timeoutMsg: "wait the page load extremely",
        });
    });
    it("fill in the content of new article", async () => {
        await $("[placeholder = 'Article Title']").setValue("Test case & Agile");
        await $("[formcontrolname = 'description']").setValue("Test case, Agile");
        await $("[placeholder = 'Write your article (in markdown)']").setValue(
            "As we all known, documents is not that necessary in Agile."
        );
        await $("[placeholder = 'Enter tags']").setValue("Agile");
        await browser.keys("\uE007");
        await browser.pause(500);
        await $("[placeholder = 'Enter tags']").setValue("Test case");
        await browser.keys("\uE007");
        await browser.pause(500);
        await $("<button>").click();
        await browser.pause(5000);
    });
    it("edit article", async () => {
        await $(".ion-edit").click();
        await $("[placeholder = 'Write your article (in markdown)']").setValue(
            "As we all known, documents is not that necessarily in Agile. So, is that means test case is no need to manage or write?"
        );
        await $("<button>").click();
        await browser.pause(5000);
    });
    it("write down a comment", async () => {
        await $("[placeholder='Write a comment...']").setValue(
            "Thanks! The article helped a lot!"
        );
        await $(".btn-primary").click();
        await browser.pause(3000);
    });
});
