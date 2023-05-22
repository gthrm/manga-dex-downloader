import puppeteer from 'puppeteer';
import ora from 'ora';


async function screenshotVisibleImage(page, pageIndex) {
    const visibleImage = await page.$('.md--page img:not([style*="display: none"])');
    if (visibleImage) {
        await visibleImage.screenshot({ path: `manga_page_${pageIndex}.png` });
    }
}

async function main() {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.setViewport({ width: 3024, height: 1964 });  // Set viewport size

    const chapterUrl = process.argv[2];
    let pageIndex = 1;
    let pageUrl = chapterUrl + `/${pageIndex}`;

    const spinner = ora('Downloading manga pages').start();

    try {
        await page.goto(pageUrl);
        await page.waitForTimeout(3000);
        await screenshotVisibleImage(page, pageIndex);

        while (true) {
            pageIndex++;
            pageUrl = chapterUrl + `/${pageIndex}`;

            spinner.text = `Downloading page ${pageIndex}`;

            await page.goto(pageUrl);
            await page.waitForTimeout(3000);

            const currentPageUrl = page.url();
            if (currentPageUrl === chapterUrl + '/1') break;

            await screenshotVisibleImage(page, pageIndex);
        }

        spinner.succeed('All pages downloaded');
        await browser.close();
    } catch (error) {
        spinner.fail(`Error: ${error}`);
        await browser.close();
    }
}

main();
