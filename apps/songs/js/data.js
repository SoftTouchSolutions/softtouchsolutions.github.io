
$(document).ready(function() {
    $('select').material_select();
    $( "#tags" ).autocomplete({
        source: ["Apples","Bananas"]
    });
    // $('input.autocomplete').autocomplete({
    //     data: ["Apples","Bananas"],
    //     limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    //     onAutocomplete: function(val) {
    //       // Callback function when value is autcompleted.
    //     },
    //     minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
    // });
    // console.log('here1')
});
// var flags = [], output = [], l = array.length, i;
// for( i=0; i<l; i++) {
//     if( flags[array[i].age]) continue;
//     flags[array[i].age] = true;
//     output.push(array[i].age);
// }

function ga(){
    return TAFFY(
        [
            {
              "initial": "GA",
              "AID": 44,
              "wPId": 2,
              "WLBName": "Hours for Publication Contribution/Salary",
              "WorkLoad": 16.5
            },
            {
              "initial": "GA",
              "AID": 44,
              "wPId": 4,
              "WLBName": "Scholarship",
              "WorkLoad": 148
            },
            {
              "initial": "GA",
              "AID": 44,
              "wPId": 7,
              "WLBName": "FS - Teaching (per week, 24 weeks)",
              "WorkLoad": 14
            },
            {
              "initial": "GA",
              "AID": 44,
              "wPId": 13,
              "WLBName": "FS - PhD/MRes Supervision (per week, 42 weeks)",
              "WorkLoad": 0.3
            },
            {
              "initial": "GA",
              "AID": 44,
              "wPId": 17,
              "WLBName": "Preparation for formal scheduled teaching (refreshing)",
              "WorkLoad": 96
            },
            {
              "initial": "GA",
              "AID": 44,
              "wPId": 19,
              "WLBName": "Assessment of students (standard)",
              "WorkLoad": 223
            },
            {
              "initial": "GA",
              "AID": 44,
              "wPId": 20,
              "WLBName": "Personal Tutor",
              "WorkLoad": 33
            },
            {
              "initial": "GA",
              "AID": 44,
              "wPId": 21,
              "WLBName": "PhD/MRes supervision related activities",
              "WorkLoad": 10.5
            },
            {
              "initial": "GA",
              "AID": 44,
              "wPId": 23,
              "WLBName": "Module Leader",
              "WorkLoad": 30
            },
            {
              "initial": "GA",
              "AID": 44,
              "wPId": 24,
              "WLBName": "Internal Moderator",
              "WorkLoad": 10
            },
            {
              "initial": "GA",
              "AID": 44,
              "wPId": 26,
              "WLBName": "Other Teaching Related Activities",
              "WorkLoad": 75
            },
            {
              "initial": "GA",
              "AID": 44,
              "wPId": 35,
              "WLBName": "Course Leader",
              "WorkLoad": 50
            },
            {
              "initial": "GA",
              "AID": 44,
              "wPId": 39,
              "WLBName": "Year 1 Tutor",
              "WorkLoad": 100
            },
            {
              "initial": "GA",
              "AID": 44,
              "wPId": 47,
              "WLBName": "Research Group Leader",
              "WorkLoad": 80
            }
          ]        
    );    
}

var module_link = 'https://selene.hud.ac.uk/scewlb/lapi/index.php/wlb/modules';
var academic_link = 'https://selene.hud.ac.uk/scewlb/lapi/index.php/wlb/academics';
var depts_link = 'https://selene.hud.ac.uk/scewlb/lapi/index.php/wlb/depts';
var ecats_link = 'https://selene.hud.ac.uk/scewlb/lapi/index.php/wlb/ecat';
var sessions_link = 'https://selene.hud.ac.uk/scewlb/lapi/index.php/wlb/sess';
var wplans_link = 'https://selene.hud.ac.uk/scewlb/lapi/index.php/wlb/wplans';
var tt_link = 'https://selene.hud.ac.uk/scewlb/lapi/index.php/wlb/tt/';
var stafftt_link = 'https://selene.hud.ac.uk/scewlb/lapi/index.php/wlb/stafftt/';
var wlb_link = 'https://selene.hud.ac.uk/scewlb/lapi/index.php/wlb/wlbt/';
var addModule_link = 'https://selene.hud.ac.uk/scewlb/lapi/index.php/wlb/cmodule';
var uModule_link = 'https://selene.hud.ac.uk/scewlb/lapi/index.php/wlb/umodule';
var dModule_link = 'https://selene.hud.ac.uk/scewlb/lapi/index.php/wlb/dmodule';
var dwplan_link = 'https://selene.hud.ac.uk/scewlb/lapi/index.php/wlb/dwplan';
var gdel_link = 'https://selene.hud.ac.uk/scewlb/lapi/index.php/wlb/gdel/';
var gupd_link = 'https://selene.hud.ac.uk/scewlb/lapi/index.php/wlb/gupdate/';
var gadd_link = 'https://selene.hud.ac.uk/scewlb/lapi/index.php/wlb/gcreate/';
var addSession_link = 'https://selene.hud.ac.uk/scewlb/lapi/index.php/wlb/csession';
var addwplan_link = 'https://selene.hud.ac.uk/scewlb/lapi/index.php/wlb/cwplan';
var uSession_link = 'https://selene.hud.ac.uk/scewlb/lapi/index.php/wlb/usession';
var uwplan_link = 'https://selene.hud.ac.uk/scewlb/lapi/index.php/wlb/uwplan';
var dSession_link = 'https://selene.hud.ac.uk/scewlb/lapi/index.php/wlb/dsession';
var dlk_url = 'https://selene.hud.ac.uk/scewlb/lapi/index.php/wlb/dlk';

function get_eCats(app) {
    app.$http.get(ecats_link).then(function(response){
        app.ecats = response.data.records;
        console.log('enum categories='+app.ecats.length);
    }, function(error){
        console.log(error.statusText);
        console.log(list);
    });
}
function get_wplans(app) {
    app.$http.get(wplans_link).then(function(response){
        app.wplans = response.data.records;
        console.log('workplans='+app.wplans.length);
    }, function(error){
        console.log(error.statusText);
        console.log(list);
    });
}
function uniqueWCat(value, index, self) { //not used i don't think..see wlbcats
    return self.indexOf(value) === index.WLBCat;
}

function get_sessions(app) {
    app.$http.get(sessions_link).then(function(response){
        app.sessions = response.data.records;
        console.log('sessions ='+app.sessions.length);
    }, function(error){
        console.log(error.statusText);
        console.log(list);
    });
}
function get_modules(app) {
    app.$http.get(module_link).then(function(response){
        app.modules = response.data.records;
        console.log('modules='+app.modules.length);
    }, function(error){
        console.log(error.statusText);
        console.log(list);
    });
}
function get_courses(app) {
    dlk("*","courses",{}).then(function(response){
        app.courses = response;
        console.log('courses='+app.courses.length);
    });
}
function get_modterms(app) {
    dlk("*","enum",{group_code:200}).then(function(response){
        app.enum_terms = response;
        console.log('session terms enum='+app.enum_terms.length);
    });
}
function get_modsess(app) {
    dlk("*","enum",{group_code:100}).then(function(response){
        app.enum_droutes = response;
        console.log('del routes enum='+app.enum_droutes.length);
    });
}
function get_academics(app) {
    app.$http.get(academic_link).then(function(response){
        app.academics = response.data.records;
        console.log('academics='+app.academics.length);
    }, function(error){
        console.log(error.statusText);
        console.log(list);
    });
}
function get_tt(app) {
    var id=app.$route.params.id;
    app.$http.get(tt_link+id).then(function(response){
        app.timetable = response.data.records;
        console.log('timetable='+app.timetable.length);
    }, function(error){
        console.log(error.statusText);
        console.log(list);
    });
}
function get_stafftt(app) {
    var id=app.$route.params.id;
    app.$http.get(stafftt_link+id).then(function(response){
        app.stafftt = response.data.records;
        console.log(app.$route.params.id+' timetable='+app.stafftt.length);
    }, function(error){
        console.log(error.statusText);
        console.log(list);
    });
}
function get_wlb(app) {
    var id=app.$route.params.id;
    app.$http.get(wlb_link+id).then(function(response){
        app.wlb = response.data.records;
        console.log(app.$route.params.id+' workplan='+app.wlb.length);
    }, function(error){
        console.log(error.statusText);
        console.log(list);
    });
}
function get_depts(app) {
    app.$http.get(depts_link).then(function(response){
        // app.modules = TAFFY(response.data.records);
        // console.log('here'+app.modules().get().length);
        app.subjAreas = response.data.records;
        console.log('depts count ='+app.subjAreas.length);
    }, function(error){
        console.log(error.statusText);
        console.log(list);
    });
}
function wlbcats(app){
    return [...new Set(array.map(item => item.age))];
}
function addModSess(app, updating){
    var url = gadd_link+"tt";
    var uurl = gupd_link+"tt/TTId";
    var data = JSON.stringify(app.cTT);
    if(updating){
        data=JSON.stringify(updating);
    }
    console.log("processing module session .. "+data);
    app.$http.post(updating?uurl:url,data).then(function(response){
        console.log("processing returned ... "+response.data);
        if(response.data.length<10){// or "Something went wrong, Module NOT Created!"
            app.cTT.id=response.data;
            app.timetable.push(app.cTT);
            app.errmsg="";
        }
        if(response.data.length>10||response.data.indexOf("Updated")>0)alert("Success!");
    }, function(error){
        console.log(error.statusText);
        app.errmsg=error;
    });
}
function addSession(app, updating){
    var url = addSession_link;
    var uurl = uSession_link;
    var data = JSON.stringify(app.cSession);
    if(updating){
        data=JSON.stringify(updating);
    }
    console.log("processing session .. "+data);
    app.$http.post(updating?uurl:url,data).then(function(response){
        console.log("processing returned ... "+response.data);
        if(response.data.length<10){// or "Something went wrong, Module NOT Created!"
            app.cSession.id=response.data;
            app.sessions.push(app.cSession);
            app.errmsg="";
        }
    }, function(error){
        console.log(error.statusText);
        app.errmsg=error;
    });
}
function addModule(app,params){
    var url = addModule_link;
    var uurl = uModule_link;
    var data = JSON.stringify(params);
    console.log("processing module .. "+data);
    app.$http.post(app.adding?url:uurl,data).then(function(response){
        console.log("processing returned ... "+response.data);
        if(response.data.length<10){
            app.cModule.modid=response.data;
            app.modules.push(app.cModule);
            app.errmsg="";
        }
        if(response.data.length<10||response.data.indexOf("Updated")>0)alert("Success!");
    }, function(error){
        console.log(error.statusText);
        app.errmsg=error;
    });
}
function addWPlan(app,updating){
    var url = addwplan_link;
    var uurl = uwplan_link;
    var data = JSON.stringify(app.cWlb);
    if(updating){
        data=JSON.stringify(updating);
    }
    console.log("processing module .. "+data);
    app.$http.post(updating?uurl:url,data).then(function(response){
        console.log("processing returned ... "+response.data);
        if(response.data.length<10){
            app.cWlb.wlbid=Number(response.data);
            app.wlb.push(app.cWlb);
            app.errmsg="";
        }
    }, function(error){
        console.log(error.statusText);
        app.errmsg=error;
    });
}
function delModule(app,idx){
    var url = dModule_link;
    console.log("removinging module .. "+JSON.stringify(app.modules[idx]));
    app.$http.post(url+"/"+app.modules[idx].modid).then(function(response){
        console.log("del module returned ... "+response.data);
        if(response.data==="Module deleted!"){
            app.modules.splice(idx,1)
        }
    }, function(error){
        console.log(error.statusText);
        console.log(list);
    });
}
function delModSess(app,idx){
    var url = gdel_link;
    let val=!confirm("Are You Sure?"); //+app.timetable[idx]
    //console.log("delModSess: val="+val);
    if(val) return;
    console.log("removinging module session .. "+JSON.stringify(app.timetable[idx]));
    app.$http.post(url+"tt/TTId/"+app.timetable[idx].TTId).then(function(response){
        console.log("del module session returned ... "+response.data);
        if(response.data==="Item deleted!"){
            app.timetable.splice(idx,1)
            alert("Item Deleted!");
        }
    }, function(error){
        console.log(error.statusText);
        console.log(list);
    });
}
function delWplan(app,idx){
    var url = dwplan_link;
    console.log("removinging module .. "+JSON.stringify(app.wlb[idx]));
    app.$http.post(url+"/"+app.wlb[idx].wlbid).then(function(response){
        console.log("del workplan returned ... "+response.data);
        if(response.data==="Workplan deleted!"){
            app.wlb.splice(idx,1)
        }
    }, function(error){
        console.log(error.statusText);
        console.log(list);
    });
}

var cEnum={
    id:"",
    item_name:"",
    group_code:0,
    internal_ref:0,
    item_code:"",
    item_ref:"",
    item_remark:"",
    item_extra:"",
    item_bit:0,
}
var cModule={
    modCode:"NEW",
    modName:"",
    SACode:"",
    ModLeader:"",
    intModerator:"",
    extExaminer:"",
    Credits:0,
    LectCount:0,
    WeeklyHrs:0,
    studCount:0,
}
var cWLB={
    // wlbid:0,
    initials:"",
    aid:0,
    wpid:0,
    wlbcode:"",
    workload:0,
    session:0,
}
var cTT={
    module:"",
    DeliveryRoute:"",
    TeamTeaching:false,
    GroupCode:"",
    session:0,
    course:"",
    ActualCount:0,
    Tutor:"",
    DelHrs:0,
    DelWeeks:0,
    DelTerm: "",
    DelRoom: "",
    Notes:"",
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
function dlk2(fields_str,domain,data){
    var x;
    var t=$.post(dlk_url,JSON.stringify({
            domain:domain,
            fields:fields_str,
            crit:data
        }));
    t.done(function( data ) {
       x= data ;
    });
    console.log(x);
    //console.log(t.responseText);
    return $.parseJSON(x).records;
}
function dx(app,fields_str,domain,data){
    return dlk(app,fields_str,domain,data).then(function(response) {
        if(response.length>0)console.log (true); else console.log( false);
      }, function(error) {
        console.error("Failed!", error);
      });
    };

function get(url) {
    // Return a new promise.
    return new Promise(function(resolve, reject) {
      // Do the usual XHR stuff
      var req = new XMLHttpRequest();
      req.open('GET', url);
  
      req.onload = function() {
        // This is called even on 404 etc
        // so check the status
        if (req.status == 200) {
          // Resolve the promise with the response text
          resolve(req.response);
        }
        else {
          // Otherwise reject with the status text
          // which will hopefully be a meaningful error
          reject(Error(req.statusText));
        }
      };
  
      // Handle network errors
      req.onerror = function() {
        reject(Error("Network Error"));
      };
  
      // Make the request
      req.send();
    });
}
function testp(){
  get('story.json').then(function(response) {
    console.log("Success!", response);
  }, function(error) {
    console.error("Failed!", error);
  });
}