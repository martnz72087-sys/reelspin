exports.handler = async function(event) {
  var API_KEY = process.env.TMDB_API_KEY;
  if (!API_KEY) {
    return { statusCode: 500, headers: {"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}, body: JSON.stringify({error:"TMDB_API_KEY not set in Netlify env vars."}) };
  }
  var params = event.queryStringParameters || {};
  var tmdbPath = params.path;
  if (!tmdbPath) {
    return { statusCode: 400, headers: {"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}, body: JSON.stringify({error:"Missing path param."}) };
  }
  var qs = ["api_key=" + encodeURIComponent(API_KEY), "language=en-US"];
  Object.keys(params).forEach(function(key) {
    if (key !== "path") qs.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
  });
  try {
    var r = await fetch("https://api.themoviedb.org/3" + tmdbPath + "?" + qs.join("&"));
    var data = await r.text();
    return { statusCode: r.status, headers: {"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Cache-Control":"public, max-age=300"}, body: data };
  } catch (err) {
    return { statusCode: 502, headers: {"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}, body: JSON.stringify({error:"TMDB unreachable: "+err.message}) };
  }
};
