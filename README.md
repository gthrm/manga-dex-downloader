# MangaDex Downloader

MangaDex Downloader is a Node.js script that allows you to automatically download manga chapters from [Mangadex](https://mangadex.org/).

## Pre-requisites

Before running the script, make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v14.x or higher)

This script also uses the following npm packages:

- [Puppeteer](https://www.npmjs.com/package/puppeteer) for web scraping
- [Ora](https://www.npmjs.com/package/ora) for progress animation

## Setup

1. Clone this repository and navigate into the directory.

2. Install the required npm packages:

```sh
npm install
```

## Usage

To use the MangaDex Downloader script:

```sh
node index.js <MangaDex chapter URL>
```

Replace `<MangaDex chapter URL>` with the URL of the manga chapter you wish to download. The script will download each page of the chapter as a PNG image.

For example:

```sh
node index.js https://mangadex.org/chapter/6153eb85-ef22-4346-95e1-4c70844c77e2
```

The script will navigate through each page of the specified chapter, take screenshots of the visible manga image, and save it as a PNG image. Each image will be named according to the page number (e.g., `manga_page_1.png`).

## Limitations

This script currently only works with MangaDex. Other manga websites are not supported at this time.

## License

This project is open source and available under the [MIT License](LICENSE).
