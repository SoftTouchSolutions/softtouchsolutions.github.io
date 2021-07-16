var pageSize=5;
var getCount=true;
var search_mode=false;
var dlk_url = 'https://selene.hud.ac.uk/u1273400/www/HCHCSongs/lapi/index.php/songs/dlk';
var songs_url = 'https://selene.hud.ac.uk/u1273400/www/HCHCSongs/lapi/index.php/songs/';
var usong_url = 'https://selene.hud.ac.uk/u1273400/www/HCHCSongs/lapi/index.php/songs/usong';

function ViewModel(){
    var self = this
    self.pageSkip=0;
    self.pageCount=0;
    self.sterm=ko.observableArray("");
    self.show_loader=ko.observable(false);
    self.songs=ko.observableArray([]);
    self.curr_idx = ko.observable(0);
    self.curr_song = ko.computed(function() {
        return self.songs()[self.curr_idx()];
    }, self);
    self.search_old = function() {
        if(self.sterm().trim().length==0)return
        st=self.sterm().trim();
        newsongs=[];
        for(var i=0;i<self.songs().length;i++){
            if(self.songs()[i].title().toLowerCase().indexOf(st.toLowerCase())!= -1)
                newsongs.push(self.songs()[i]);
        }        
        alert("found "+newsongs.length+" songs");
        console.log(newsongs)
        if(newsongs.length>0){
        self.songs.removeAll();
        for(var i=0;i<newsongs.length;i++)
            self.songs.push(newsongs[i])
        }
    };
    self.search = function() {
        hchcs.pageSkip=0;
        if(self.sterm().trim().length==0)return
        search_mode=true;
        serverGet();
    };
    self.nextPage = function(){
    	if(hchcs.pageSkip==hchcs.pageCount){
            alert("You are at the end!");
            return;
        }
    	hchcs.pageSkip++;
        console.log('pageSkip:'+hchcs.pageSkip);
        getCount=false;
    	serverGet();
    }
    self.prevPage = function(){
    	if(hchcs.pageSkip==0){
            alert("You are at the beginning!");
            return;
        }
        hchcs.pageSkip--;
        console.log('pageSkip='+hchcs.pageSkip);
        getCount=false;
    	serverGet();
    }
}
function Song(data) {
    var self = this;
    // self.title = ko.observable(( (typeof data.Title === "object") && (data.Title !== null) )?data.Title:data.title);
    // self.lyrics=ko.observable(( (typeof data.Lyrics === "object") && (data.Lyrics !== null) )>0?data.Lyrics:data.lyrics);
    self.id = ko.observable(data.id);
    self.title = ko.observable(data.Title);
    self.lyrics=ko.observable(data.lyrics);
    self.aurl = ko.observable("https://selene.hud.ac.uk/u1273400/vid/"+data.audio);
    self.vurl=ko.observable(data.link);
    self.lyrics2 = ko.computed(function() {
        if(self.lyrics())return self.lyrics().replace(/\n/g, "<br/>");
    }, self);
    self.song_selected = function() {
        hchcs.curr_idx(hchcs.songs.indexOf(self));
        document.getElementById("Player").play();
    };
    self.fwd = function() {
        forwardAudio(true);
    };  
    self.rwd = function() {
        forwardAudio(false);
    };
    self.save = function() {
        console.log("savin..");//var x = event.which || event.keyCode;
        saveSong();
    };
    self.chkSave = function(e) {
        console.log("here");//var x = event.which || event.keyCode;
        var key = e.keyCode ? e.keyCode : e.which;
        if (key == 192) {
            console.log("saving..")
            saveSong();
        }
    };
}
var hchcs = new ViewModel();

//dbgtest("hello","hello again");
function temp(){

}

function dbgtest(msg,msg2) {
    //quest.dbg(quest.dbg() + ' ' + msg);
    // Display an info toast with no title
    toastr.info(msg,msg2);
    //console.log(msg)
    // Display a warning toast, with no title
    //toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!')

    // Display a success toast, with a title
    //toastr.success('Have fun storming the castle!', 'Miracle Max Says')

    // Display an error toast, with a title
    //toastr.error('I do not think that word means what you think it means.', 'Inconceivable!')

    // Clears the current list of toasts
    //toastr.clear()
}



if (window.File && window.FileReader && window.FileList && window.Blob) {
    // Great success! All the File APIs are supported.
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function dlk2(fun,domain,crit){
    $.ajax({
         url: "https://api.engin.io/v1/objects/"+domain,
         headers: {
         "Enginio-Backend-Id": "54370ec35a3d8b5fb000d6ec" // copy/paste your EDS instance backend id here
         },
         type: "GET",
         contentType: "application/json; charset=utf-8",
         crossDomain: true,
         dataType: "json",
         data: JSON.stringify(crit),
         success: function(response) {
             //console.log(response);
             fun(response.results);
         },
         error: function(response) {
         console.log("Ooops! Something went wrong!")
         console.log(response)
         }
     })
}
function dlk(fields_str,domain,data){
    var d=JSON.stringify({
            domain:domain,
            fields:fields_str,
            crit:data
        });
    console.log("fetching "+d);
    return new Promise(function(resolve, reject) {
        $.ajax({
        url: dlk_url,
        type:"POST",
        data:d,
        success: function(response) {
            //console.log(response);
            resolve($.parseJSON(response).records);
        },
        error: function(response,rs,r) {
            //dbg("Ooops! Something went wrong!".message);
            console.log("Something went wrong!", response,rs,r);
            reject(Error(rs+":"+r))
        }
        });
    });
}
function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length-size);
}

function forwardAudio(fwd) {
    var player = document.getElementById('Player');
    if(fwd)
        player.currentTime += 10.0; /**tried also with audio.currentTime here. Didn't worked **/
    else
        player.currentTime -= 10.0; /**tried also with audio.currentTime here. Didn't worked **/
}

function serverGet() {
    var st = hchcs.sterm();
    hchcs.show_loader(true);
if(getCount)$.ajax({ 
        url: songs_url+"csongs/"+st, 
        crossDomain: true,
        success: function(response) {
            if(search_mode)
                console.log("found "+response+" songs!");
            hchcs.pageCount=Math.floor(JSON.parse(response)/pageSize);//+1;
        },
        error: function(response) {
            //dbg("Ooops! Something went wrong!", response.errors[0].message);
            console.log("Something went wrong! "+this.url);
        }
    })
    $.ajax({
        url: songs_url+"gsongs/"+(hchcs.pageSkip*pageSize)+"/"+pageSize+"/"+st,//.trim(), 
        /*query object with id "532ed53900deff4eee0003ee"
        headers: {
            "Enginio-Backend-Id": "54370ec35a3d8b5fb000d6ec" // copy/paste your EDS instance backend id here
        },*/
        crossDomain: true,
        success: function(response) {
            var data;
            try {
                data=JSON.parse(response).records;
                console.log("Loading songs...");
            }catch (e) {
                console.log("Something went wrong "+this.url);
                //serverGet()
            }
            if (Array.isArray(data)){
                if (data.length>0)hchcs.songs.removeAll();
                for(var i=0;i<data.length;i++){
                    console.log(data[i].Title);//( (typeof data[i].Title === "object") && (data[i].Title !== null) )?data[i].Title:data[i].title);
                    hchcs.songs.push(new Song(data[i]));
                }
            }hchcs.show_loader(false);
        },
        error: function(response) {
            //dbg("Ooops! Something went wrong!", response.errors[0].message);
            console.log("Something went wrong!");
        }
    })
}
function saveSong(){
    //hchcs.curr_song().lyrics().replace(new RegExp('`', 'g'), "")
    //var pd=JSON.stringify({Id:hchcs.curr_song().id(),Lyrics:hchcs.curr_song().lyrics()});
    var pd=JSON.stringify({id:hchcs.curr_song().id(),Lyrics:hchcs.curr_song().lyrics()});
    console.log("saving song="+pd);
    $.post(usong_url, pd)
    .done(function(data) {
        console.log("Server Response: " + data);
        alert('Success!')
    });
}

function serverPost() {
    $.ajax({
         url: "https://api.engin.io/v1/objects/lrdb_research_personal",
         headers: {
         "Enginio-Backend-Id": "54370ec35a3d8b5fb000d6ec" // copy/paste your EDS instance backend id here
         },
         type: "POST",
         contentType: "application/json; charset=utf-8",
         crossDomain: true,
         dataType: "json",
         data: JSON.stringify(lrdb.carticle().data),
         success: function(response) {
         dbg(response.author+" "+response.year+" created!")
         serverGet();
         },
         error: function(response) {
         console.log(response)
         dbg("Ooops! Something went wrong!")
         }
     })
}

function importJson(domain) {
    var arr=jsonimport;
    var err = "";
    var i;
    var percent = 0;
    var progressBar = new Progress.bar({ id: "progress5", autoRemove: false, backgroundSpeed: -5, type: "charge",showPercentage: true });
    progressBar.renderTo(document.getElementById('progressBar'));
    for(i = 0; i<arr.length; i++) {
        $.ajax({
             url: "https://api.engin.io/v1/objects/"+domain,
             headers: {
             "Enginio-Backend-Id": "54370ec35a3d8b5fb000d6ec" // copy/paste your EDS instance backend id here
             },
             type: "POST",
             contentType: "application/json; charset=utf-8",
             crossDomain: true,
             dataType: "json",
             data: JSON.stringify(arr[i]),
             success: function(response) {
                percent = percent + Math.floor(i/arr.length*100.0);
                percent = i == arr.length-1 ? 100 : percent;
                progressBar.update(percent);
             },
             error: function(response) {
                 //dbg("Ooops "+response.errors[0].reason+": "+response.errors[0].message);
             }
        })
    }
}
function removeCapitalize(str) {
    var res = str.split(" ");
    var max = (res.length > 7) ? 7 : res.length;
    var st = "";
    for (var i = 0; i < max; i++)
        st += res[i] + " ";
    return st.replace(/\w\S*/g, function(txt) {
        txt = txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        return txt;
    }).replace(/\s/g, '');

}

function dbg(msg) {
    toastr.info(msg)
}


function handleFileSelect(evt) {
// Check for the various File API support.
    var files = evt.target.files; // FileList object

    alert(document.getElementById("files").value);
// Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {
        // Only process image files.
        //if (!f.type.match('image.*')) {
        // continue;
        //}

        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = (function(theFile) {
            return function(e) {
                // Render thumbnail.
                var span = document.createElement('span');
//          span.innerHTML = ['<img class="thumb" src="', e.target.result,
//                            '" title="', escape(theFile.name), '"/>'].join('');
                //span.innerHTML = e.target.result;
                //document.getElementById('list').insertBefore(span, null);
                alert(e.target.result);
            };
        })(f);

        // Read in the image file as a data URL.
        reader.readAsText(f);
    }
}

function page_load(){
    var _pageWidth = $("body").outerWidth();
    var _timing = _pageWidth + 3500;
      $(".loader span").each(function (i) {
        // store the item around for use in the 'timeout' function
        var _item = $(this); 
        // execute this function sometime later:
        setTimeout(function($) { 
          _item.removeClass("jmp");
          _item.css({"left": '110%'});
          /* console.log("loop"); */
        }, 180*i); //move each dot one after the other, transition handled by CSS
        setTimeout(function($) { 
          _item.addClass("jmp");
          _item.css({"left": '-10%'});
          /* console.log("de-loop"); */
        }, 3000 + 180*i); //move each dot one back to start in order, transition removed via <.jmp> class
    }); //RUN ONCE OUT OF LOOP, AVOID DELAY

    $("window").resize(function(){
    var _pageWidth = $("body").outerWidth();
    var _timing = _pageWidth + 3500;
    });


    var _pageLoader = setInterval(function(){
    $(".loader span").each(function (i) {
        // store the item around for use in the 'timeout' function
        var _item = $(this); 
        // execute this function sometime later:
        setTimeout(function($) { 
          _item.removeClass("jmp");
          _item.css({"left": '110%'});
          /* console.log("loop"); */
        }, 180*i); //move each dot one after the other, transition handled by CSS
        setTimeout(function($) { 
          _item.addClass("jmp");
          _item.css({"left": '-10%'});
          /* console.log("de-loop"); */
        }, 3000 + 180*i); //move each dot one back to start in order, transition removed via <.jmp> class
    });
    }, _timing);
}
