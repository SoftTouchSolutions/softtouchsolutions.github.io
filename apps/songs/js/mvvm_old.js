
function LRViewModel() {
    var self = this;
    self.cart = ko.observable(0);
    self.articles=ko.observableArray([]);
    self.sterm=ko.observable("");
    self.sus=false;
    self.carticle = ko.computed(function() {
        return self.articles()[self.cart()];
    }, self);
    self.search = function() {
        if(self.sterm().trim().length==0)return
        ta=[];
        st=self.sterm().split(" ")
        for (var j=0; j<st.length;j++){
        for(var i=0;i<self.articles().length;i++){
            d=self.articles()[i]
            console.log(d.data.author+" "+d.data.year+" : "+st[j])
            if(d.data.year.toLowerCase().search(st[j].toLowerCase)>-1 || d.data.author.toLowerCase().search(st[j].toLowerCase())>-1 )
                ta.push(d)
        }}
        dbg(ta.length+ " articles found!")
        if(ta.length>0){
        self.articles.removeAll();
        for(var i=0;i<ta.length;i++)
            self.articles.push(ta[i])
        }
    };
   
}

function Article(data) {
    var self = this;
    self.data=data;
    self.title=ko.observable(data.title);
    self.year=ko.observable(data.year);
    self.author=ko.observable(data.author);
    self.aims=ko.observable(data.aims);
    self.concept=ko.observable(data.concept);
    self.finding=ko.observable(data.finding);
    self.limitation=ko.observable(data.limitation);
    self.relation=ko.observable(data.relation);
    self.interconnection=ko.observable(data.interconnection);
    self.comment=ko.observable(data.comment);
    self.link=ko.observable(data.link);
    self.cdetail=ko.observable({"fld":ko.observable(),"lbl":ko.observable("lbl")}); 
    self.detail = function(fxn,lbl) {
        self.cdetail().fld(fxn);
        self.cdetail().lbl(lbl);
    };
    self.cart_changed = function() {
        lrdb.cart(lrdb.articles.indexOf(self));
    };
    self.del = function() {
        if(!confirm("You are about to delete 1 Record. Proceed?"))
            return;
        location.assign('index.html#home')
        serverdelete();
    };
    self.update = function() {
        self.data.title=self.title();
        self.data.year=self.year();
        self.data.author=self.author();
        self.data.aims=self.aims();
        self.data.concept=self.concept();
        self.data.finding=self.finding();
        self.data.limitation=self.limitation();
        self.data.relation=self.relation();
        self.data.comment=self.comment();
        self.data.interconnection=self.interconnection();
        self.data.link=self.link();
        if(!lrdb.sus)serverUpdate();
        location.assign("index.html#article")
    };
    self.create = function() {
        var data={}
        data.title="New Article";
        data.year="Article";
        data.author="New";
        data.aims="";
        data.concept="";
        data.finding="";
        data.limitation="";
        data.relation="";
        data.interconnection="";
        data.link="";
        data.comment="";
        lrdb.articles.push(new Article(data))
        lrdb.cart(lrdb.articles().length-1);
        location.assign("index.html#home")
        serverPost();
    };
    self.article = ko.computed(function() {
        //self.update();
        return eval(1+lrdb.articles.indexOf(self))+ ". " +self.author()+ " " + self.year()+ " - [" + self.title()+"]";
    }, self);
    self.article.extend({rateLimit: 250});   
    self.concept.subscribe(function() {
        location.assign("index.html#home")
        intercon();
    });
}

var hchcs = new LRViewModel();
dbgtest("hello","hello again");


function dbgtest(msg,msg2) {
    //quest.dbg(quest.dbg() + ' ' + msg);
    // Display an info toast with no title
    toastr.info(msg,msg2)
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

function intercon(){
    dlk(function(d){
        lrdb.sus=true
        for(var k=0;k<d.length;k++){
            var matches={};
            if(d[k].year ==lrdb.carticle().year() && d[k].author == lrdb.carticle().author()){
                d[k].concept=lrdb.carticle().concept();
            }
            if(d[k].concept.trim().length==0)continue;
            var arr=d[k].concept.split(',');
            for(var i=0;i<arr.length;i++){
                for(var j=0;j<d.length;j++){
                    console.log(d[j].author.trim()+":"+d[j].concept.trim()+",_"+d[k].author.trim()+":"+arr[i].trim()+",")
                  if((d[j].concept.trim()+",").search(arr[i].trim()+",")>-1 && d[j].year !=lrdb.carticle().year() && d[j].author != lrdb.carticle().author()){
                      matches[d[j].author+" "+d[j].year]=d[j];
                  }
                }
            }
            st="";
            for(var t in matches){
              st+=matches[t].author+" "+matches[t].year+", "
            }
            d[k].interconnection=st
            if(st.length>0)save(d[k])
        }
        serverGet()
        lrdb.sus=false
    },"lrdb_research_personal",{ "$and": [ {"author": {"$ne": lrdb.carticle().author()} }, {"year": {"$ne": lrdb.carticle().year()} } ] });
}
function dlk(fun,domain,crit){
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
function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length-size);
}

function serverGet() {
    lrdb.articles.removeAll()
    $.ajax({
        url: "https://api.engin.io/v1/objects/lrdb_research_personal", // query object with id "532ed53900deff4eee0003ee"
        headers: {
            "Enginio-Backend-Id": "54370ec35a3d8b5fb000d6ec" // copy/paste your EDS instance backend id here
        },
        crossDomain: true,
        success: function(response) {
            //console.log(response)
            if (response.results){
                var data=response.results;
                for(var i=0;i<data.length;i++)
                    lrdb.articles.push(new Article(data[i]))
            }
        },
        error: function(response) {
            dbg("Ooops! Something went wrong!", response.errors[0].message)
        }
    })
}
function serverUpdate() {
    var data=lrdb.carticle().data;
    $.ajax({
        url: "https://api.engin.io/v1/objects/lrdb_research_personal/"+data.id,
        headers: {
            "Enginio-Backend-Id": "54370ec35a3d8b5fb000d6ec"
        },
        type: "PUT",
        contentType: "application/json; charset=utf-8",
        crossDomain: true,
        dataType: "json",
        data: JSON.stringify(data),
        success: function(response) {
            //console.log(response);
            dbg(response.author+" "+response.year+" updated!")
        },
        error: function(response) {
            dbg("Ooops! Something went wrong!")
            dbg(response.errors[0].message)
        }
    })
}
function serverdelete() {
    var data=lrdb.carticle().data;
    $.ajax({
        url: "https://api.engin.io/v1/objects/lrdb_research_personal/"+data.id,
        headers: {
            "Enginio-Backend-Id": "54370ec35a3d8b5fb000d6ec"
        },
        type: "DELETE",
        contentType: "application/json; charset=utf-8",
        crossDomain: true,
        //dataType: "json",
        //data: JSON.stringify(data),
        success: function(response) {
            console.log(response);
            dbg("record deleted!")
            intercon()
        },
        error: function(response) {
            console.log(response)
            dbg("Ooops! Something went wrong!")
        }
    })
}
function save(data) {
    $.ajax({
        url: "https://api.engin.io/v1/objects/lrdb_research_personal/"+data.id,
        headers: {
            "Enginio-Backend-Id": "54370ec35a3d8b5fb000d6ec"
        },
        type: "PUT",
        contentType: "application/json; charset=utf-8",
        crossDomain: true,
        dataType: "json",
        data: JSON.stringify(data),
        success: function(response) {
            //console.log(response);
            dbg(response.author+" "+response.year+" saved!")
        },
        error: function(response) {
            dbg("Ooops! Something went wrong!")
            dbg(response.errors[0].message)
        }
    })
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


