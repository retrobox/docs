# Documentation

The raw documentation of the retrobox project, markdown-formatted.

## Structure

- locales (languages supported by the documentation)
- categories (collection of pages)
- pages (the pages is the matter of the documentation)

## Configuration file

`config.json` is the main configuration file of this Documentation, it refer all of the categories and pages and structure the Documentation.

## Content

In the content directory, the tree must refer to the structure config in `config.json`. All the file name must match to the slug of item which refer to.

Please refer to [Markdown reference](http://commonmark.org/help/) to write markdown with the correct syntax.

The markdown's content shouldn't contain the name of the page and shouldn't contain any level heading 1 (h1) tag.

### Components explorer

(added in April 2019)

To generate a proper component JSON file you need to run the Node.js script as follow:

`node ./components_explorer/generateComponents.js`

This will generate a JSON file from a row.txt file.

## Serving static content

You can use nginx, see configuration at `nginx.conf` or if you can't, just use the nodejs server with express js by running `app.js`, CORS header are included.

## Docker image

The docker image is available on docker hub : `retrobox/docs`, the docker image expose on port 80.

Run it (very simple):

`docker run -p 42:80 -d --name retrobox.docs retrobox/docs`

## Contributing

This service is managed by lefuturiste <contact@lefuturiste.fr>
If you want to improve this documentation, please clone this repository and pull request your change. We want to fix all of the syntax problem and typo error. Thanks involving in this project !

See at https://retrobox.tech/docs



x_x

x_x
