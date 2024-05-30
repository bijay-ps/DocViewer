# PDF Viewer POC
## Using Mozilla PDF Viewer

[Mozilla PDF Viewer](https://github.com/mozilla/pdf.js)

The text highlight feature might not be available because the version of PDF.js hosted at https://mozilla.github.io/pdf.js/web/viewer.html might not be the same as the one you have cloned and run locally.

The hosted version might be an older version that does not include the text highlight feature.  To use the text highlight feature, you can host the cloned version of PDF.js on your own server and then reference it in the iframe src attribute.

Here's how you can do it:
1. Clone the PDF.js repository and build it locally.
2. Start a local server to host the built PDF.js files. (You can use any server like Express.js, http-server, etc.)
3. Replace the iframe src attribute with the URL of your local server hosting the PDF.js files.

Here's an example of how you can change the iframe src attribute:
`<iframe src="http://localhost:8000/web/viewer.html?file=/assets/myfile.pdf" width="1920" height="830" />`

## Hosting on own server

Hosting the PDF.js viewer on a cloud server involves a few steps. Here's a general guide on how you can do it:
1. Choose a cloud service provider. There are many providers available such as AWS, Google Cloud, Azure, Heroku, etc. The exact steps might vary depending on the provider you choose.
2. Create an account and set up a new server instance. This usually involves choosing the server specifications, region, and operating system. For a simple application like this, a basic server should be sufficient.
3. Once your server is set up, you'll need to upload your files to the server. This can usually be done using SCP (Secure Copy Protocol) or SFTP (SSH File Transfer Protocol). Here's an example of how you can do it using SCP

## PS
Please note that these are general steps and might vary depending on the cloud service provider and the web server you are using. You should refer to the specific documentation of your cloud service provider and web server for detailed instructions.

My only concern is of security by using iframe tag.

