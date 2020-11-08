$(function () {
  let params = new URL(document.location).searchParams;
  let converter = new showdown.Converter({ extensions: ["table"] });
  $("#email-title").html(`Loading email...`);
  fetch(
    `https://dursi-consulting-server.herokuapp.com/api/emails/${params.get(
      "id"
    )}`
  )
    .then((response) => response.json())
    .then((data) => {
      $("#email-title").html(``);
      $("#email-title").append(`${data.subject}`);
      $("#breadcrumb-email").append(`${data.slug}`);
      $("#email-content").append(` ${converter.makeHtml(data.body)}`);
    })
    .catch((err) => {
      $("#email-content").append(`
          An error occurred. Please reload the page and try again.`);
    });
});
