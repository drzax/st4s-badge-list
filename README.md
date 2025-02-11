# Better GitHub scraper

This is a template repository for a [GitHub scraper](https://simonwillison.net/2020/Oct/9/git-scraping/), a technique
pioneered by Simon Willison.

This template assumes you need to query the DOM or HTML of the page to get the data you need. If you only need to fetch
a data file directly, use the [simple-scrape-template](https://github.com/drzax/simple-scrape-template).

## How to use this template

Modify the [scrape.js](scrape.js) file to scrape the data you need. The remplate is setup to use Playwright, but you can
use any other scraping library you prefer by modifying the dependencies in the [package.json](package.json) file.

Commit and push the repo to GitHub and you're ready to go.

By default the scraper will run [once per week](https://crontab.guru/#6_16_*_*_0), but you can change the cron schedule in the [fetch.yaml](.github/workflows/fetch.yaml) file.

Data can be stored anywhere you like in the repository. The template is setup to store the data the [data](data) directory.

You may need to update the permissions on the new repository to allow workflows to make commits to the repository.

![In settings -> actions -> general look for the setting that says 'Read and write permissions' under the heading 'Workflow permissions'](https://user-images.githubusercontent.com/596563/235338137-57b78eb4-a573-40c0-a77a-a132787288bf.png)
