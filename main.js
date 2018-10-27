// Note: some RSS feeds can't be loaded in the browser due to CORS security.
// To get around this, you can use a proxy.
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

let parser = new RSSParser({})

parser.parseURL(CORS_PROXY + 'http://www.rssmix.com/yourcombinedfeeds.xml', function(err, feed) {
    //console.log(feed.title);
    var counter = 0;
    feed.items.forEach(function(entry) {
        //console.log(entry);
        counter++;
        if (counter < 7) {
          var thetitle = entry.title;
          thetitle = thetitle.replace("Brad W. is drinking an", "");
          thetitle = thetitle.replace("Brad W. is drinking a", "");
          document.getElementById('feed').innerHTML += '<li><span><a href=' + entry.link + '>' + thetitle + '</a></span></li>';
        }
    })
})


// Time Logic
var current_hour = new moment().format("HH");
var current_min = new moment().format("mm");
document.getElementById('clock').innerHTML += current_hour +' <font class="blink"><b>:</b></font> ' + current_min;

var current_day = new moment().format("D");
var current_month = new moment().format("M");
var current_year = new moment().format("YY");
document.getElementById('date').innerHTML += current_month + ' <font class="blink"><b>/</b></font> ' + current_day + ' <font class="blink"><b>/</b></font> ' + current_year;
