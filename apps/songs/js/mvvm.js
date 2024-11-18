
function ViewModel(){
    var self = this
    self.pageSkip=0;
    self.pageCount=0;
    self.sterm=ko.observable("");
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
    self.aurl = ko.observable("vid/"+data.audio);
    self.vurl=ko.observable(data.link);
    self.triads=ko.observableArray(triads);
    self.olyrics = ko.observable(data.lyrics);
    self.lyrics2 = ko.computed(function() {
        if(self.lyrics())return self.lyrics().replace(/\n/g, "<br/>");
    }, self);
    self.song_selected = function() {
        bindings.tcount=0;
        hchcs.curr_idx(hchcs.songs.indexOf(self));
        document.getElementById("Player").play();
    };
    self.transpose = function(root) {
        bindings.tcount++%2==0?
            self.lyrics(transpose(root))
            :self.lyrics(self.olyrics());
        console.log('here0', root, bindings.tcount);
    };

    self.fwd = function() {
        forwardAudio(true);
    };  
    self.rwd = function() {
        forwardAudio(false);
    };
    self.save = function() {
        console.log("savin..");//var x = event.which || event.keyCode;
        updateSong();
    };
    self.chkSave = function(e) {
        console.log("here");//var x = event.which || event.keyCode;
        var key = e.keyCode ? e.keyCode : e.which;
        if (key == 192) {
            console.log("saving..")
            updateSong();
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
