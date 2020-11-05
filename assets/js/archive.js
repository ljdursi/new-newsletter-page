$(function () {
  //* Remove markdown script //*

  function removeMd(md, options) {
    options = options || {};
    options.listUnicodeChar = options.hasOwnProperty("listUnicodeChar")
      ? options.listUnicodeChar
      : false;
    options.stripListLeaders = options.hasOwnProperty("stripListLeaders")
      ? options.stripListLeaders
      : true;
    options.gfm = options.hasOwnProperty("gfm") ? options.gfm : true;
    options.useImgAltText = options.hasOwnProperty("useImgAltText")
      ? options.useImgAltText
      : true;

    var output = md || "";

    // Remove horizontal rules (stripListHeaders conflict with this rule, which is why it has been moved to the top)
    output = output.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm, "");

    try {
      if (options.stripListLeaders) {
        if (options.listUnicodeChar)
          output = output.replace(
            /^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,
            options.listUnicodeChar + " $1"
          );
        else output = output.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, "$1");
      }
      if (options.gfm) {
        output = output
          // Header
          .replace(/\n={2,}/g, "\n")
          // Fenced codeblocks
          .replace(/~{3}.*\n/g, "")
          // Strikethrough
          .replace(/~~/g, "")
          // Fenced codeblocks
          .replace(/`{3}.*\n/g, "");
      }
      output = output
        // Remove HTML tags
        .replace(/<[^>]*>/g, "")
        // Remove setext-style headers
        .replace(/^[=\-]{2,}\s*$/g, "")
        // Remove footnotes?
        .replace(/\[\^.+?\](\: .*?$)?/g, "")
        .replace(/\s{0,2}\[.*?\]: .*?$/g, "")
        // Remove images
        .replace(
          /\!\[(.*?)\][\[\(].*?[\]\)]/g,
          options.useImgAltText ? "$1" : ""
        )
        // Remove inline links
        .replace(/\[(.*?)\][\[\(].*?[\]\)]/g, "$1")
        // Remove blockquotes
        .replace(/^\s{0,3}>\s?/g, "")
        // Remove reference-style links?
        .replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, "")
        // Remove atx-style headers
        .replace(
          /^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm,
          "$1$2$3"
        )
        // Remove emphasis (repeat the line to remove double emphasis)
        .replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, "$2")
        .replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, "$2")
        // Remove code blocks
        .replace(/(`{3,})(.*?)\1/gm, "$2")
        // Remove inline code
        .replace(/`(.+?)`/g, "$1")
        // Replace two or more newlines with exactly two? Not entirely sure this belongs here...
        .replace(/\n{2,}/g, "\n\n");
    } catch (e) {
      console.error(e);
      return md;
    }
    return output;
  }

  //   /archive/${email.slug}/${email.id}

  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + "&hellip;" : str;
  }

  function submit() {
    let search = $("#archive-search").val();
    fetchEmails(search);
  }

  function appendEmail(email) {
    $("#email-list").append(`
    <div class="news-wrapper mrb-30 mrb-sm-40">
        <div class="news-details">
        <div class="news-description mb-20">
            <h4 class="the-title mrb-30">
             
            <a href="/archive/email?id=${email.id}">${email.subject}</a>
  <span></span></h4>
  <div class="mb-4">
  <span class="entry-date mrr-20"><i class="far fa-calendar-alt mrr-10 text-primary-color"></i>
      ${moment(email.publish_date).format("DD/MM/YYYY")}
  </span>
</div>
    <p>
        ${truncate(removeMd(email.body), 250)}
    </p>
           
        </div>
        </div>
    </div>
`);
  }

  function fetchEmails(filter = null) {
    $("#email-list").html(`
    Loading Emails...
    `);
    fetch("https://api.buttondown.email/v1/emails", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 7ef5b76f-403a-4c06-a080-271812ca5b6a",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        $("#email-list").html("");
        data.results
          .sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date))
          .filter((email) => {
            if (filter) {
              return (
                String(email.subject)
                  .toLowerCase()
                  .includes(String(filter).toLowerCase()) ||
                String(email.body)
                  .toLowerCase()
                  .includes(String(filter).toLowerCase())
              );
            } else return true;
          })
          .forEach((email) => {
            appendEmail(email);
          });
      });
  }

  $("#search-btn").click(submit);
  $("form").submit(function (e) {
    e.preventDefault();
    submit();
  });

  fetchEmails();
});
