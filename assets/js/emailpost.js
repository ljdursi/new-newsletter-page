$(function () {
  let params = new URL(document.location).searchParams;
  let converter = new showdown.Converter({ extensions: ["table"] });
  $("#email-title").html(`
  Loading email...
`);
  fetch(`https://api.buttondown.email/v1/emails/${params.get("id")}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token 7ef5b76f-403a-4c06-a080-271812ca5b6a",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      $("#email-title").html(``);
      $("#email-title").append(`
      ${data.subject}
  `);
      $("#breadcrumb-email").append(`
            ${data.slug}
        `);
      $("#email-content").append(`
            
            ${converter.makeHtml(data.body)}
            
        `);
    })
    .catch((err) => {
      $("#email-content").append(`
            
            
            
        `);
    });
});
