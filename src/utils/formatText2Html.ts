export function formatText2Html(text: any) {
  var html = text;
  if (html) {
    html = html.replace(/\n/g, "<br/>");
    html = html.replace(/\s/g, " ");
    html = html.replace(/\[(.*?)\]\((http[\s\S]*?)\)/g, function($0: any, $1: any, $2: any) {
      return`<a href="${$2}" target="_blank">${$1}</a>`
    });
  }
  return html;
}