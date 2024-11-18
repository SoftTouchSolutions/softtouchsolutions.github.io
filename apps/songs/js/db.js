
// var minimongo = require("minimongo");

// var LocalDb = minimongo.MemoryDb;

// // Create local db (in memory database with no backing)
// db = new LocalDb();

// // Add a collection to the database
// db.addCollection("animals");

// doc = { species: "dog", name: "Bingo" };

// // Always use upsert for both inserts and modifies
// db.animals.upsert(doc, function() {
// 	// Success:

// 	// Query dog (with no query options beyond a selector)
// 	db.animals.findOne({ species:"dog" }, {}, function(res) {
// 		//console.log("Dog's name is: " + res.name);
// 	});
// });
let pageSize=5;
let getCount=true;
let search_mode=false;
const songs_url = 'https://selene.hud.ac.uk/u1273400/www/HCHCSongs/lapi/index.php/songs/';
const usong_url = 'https://selene.hud.ac.uk/u1273400/www/HCHCSongs/lapi/index.php/songs/usong';

const client = stitch.Stitch.initializeDefaultAppClient('sdb-0-fvshj');
const db = client.getServiceClient(stitch.RemoteMongoClient.factory,'mongodb-atlas').db('Personal');

function run_query(q) {
  return client.auth.loginWithCredential(new stitch.AnonymousCredential()).then(user => {
    // document.getElementById('auth-status').innerHTML = 
    //   `Logged in as anonymous user with id ${user.id}`;
		console.log(`Logged in as anonymous user with id ${user.id}`);
		return db.collection('Songs').aggregate(q).asArray()
		// .then(docs => {
		// 	console.dir(docs);
		// 	// const html = docs.map(c => "<div>" + c.Title + "</div>").join("");
		// 	// document.getElementById("test").innerHTML = html;
		// }).catch(err => {
		// 	console.error(err);
	// })
	});
}
function updateSong(){
  client.auth.loginWithCredential(new stitch.AnonymousCredential()).then(user => {
		const song={id:hchcs.curr_song().id(),Lyrics:hchcs.curr_song().lyrics()};
		console.log("saving song=",song);
		db.collection('Songs').updateOne(
			{ id: song.id }, // Filter
			{ $set: { lyrics: song.Lyrics } } // Update
		).then(result => {
			console.log(`Successfully updated document:}`, result);
		}).catch(err => {
			console.error(`Failed to update document:`, err);
		});
	});
}
// const app = new Realm.App({ id: "<Your App ID>" });
// window.onload = initializeAndLogin;
//db.collection('Songs').find().asArray().then(docs=>console.log(docs))
//const s = {$match:{ lyrics: { $regex: "Jireh", $options: 'i' } }};

function serverGet() {
	var st = hchcs.sterm().length>0?hchcs.sterm():"";
	hchcs.show_loader(true);
	const q1 = [{$sort:{order_date:-1}}];
	const q2 = [{$sort:{order_date:-1}},{$skip:hchcs.pageSkip*pageSize},{$limit:pageSize}];
  // Add search query
  const searchQuery = {
    $or: [
      { Title: { $regex: st, $options: 'i' } },
      { lyrics: { $regex: st, $options: 'i' } }
    ]
  };
	const q3 = [{ $match: searchQuery }, ...q1]
	const q4 = [{ $match: searchQuery }, ...q2]
  if (getCount || search_mode) {
    run_query(q3).then(docs => { 
      console.log("found " + docs.length + " songs!");
      hchcs.pageCount = Math.floor(docs.length / pageSize); // +1;
    }).catch(err => {
      console.error(err);
    });
  }
	console.log(q3);
	run_query(q4).then(data=>{
		if (Array.isArray(data)){
			if (data.length>0)hchcs.songs.removeAll();
			for(var i=0;i<data.length;i++){
				console.log(data[i].Title);//( (typeof data[i].Title === "object") && (data[i].Title !== null) )?data[i].Title:data[i].title);
				hchcs.songs.push(new Song(data[i]));
			}
		}
		hchcs.show_loader(false);
	}).catch(err=>{
		console.error(err);
	});
}

function saveSong_deprecated(){
	//hchcs.curr_song().lyrics().replace(new RegExp('`', 'g'), "")
	//var pd=JSON.stringify({Id:hchcs.curr_song().id(),Lyrics:hchcs.curr_song().lyrics()});
	var pd=JSON.stringify({id:hchcs.curr_song().id(),Lyrics:hchcs.curr_song().lyrics()});
	console.log("saving song="+pd);
	$.post(usong_url, pd)
	.done(function(data) {
		console.log("Server Response: " + data);
		alert('Success!')
	}).catch(err=>{
		console.error(err);
	});}
