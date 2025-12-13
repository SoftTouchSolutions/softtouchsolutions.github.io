var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { a as React, r as reactExports, P as PropTypes, j as jsxRuntimeExports, k as _extends$1, y as textFieldClasses, S as Stack, z as Typography, _ as _objectWithoutPropertiesLoose, A as useThemeProps, B as generateUtilityClass, C as generateUtilityClasses, s as styled, e as clsx, D as composeClasses, E as createSvgIcon, F as useTheme, G as useSlotProps, I as IconButton, H as Fade, J as Dialog, K as dialogClasses, L as DialogContent, M as useMediaQuery, N as useForkRef, O as Grow, Q as FocusTrap, U as useEventCallback, V as ownerDocument, W as Paper, X as Popper, Y as useControlled, Z as useEnhancedEffect, $ as Button, a0 as DialogActions, a1 as List, a2 as ListItem, a3 as Chip, a4 as ButtonBase, a5 as alpha, a6 as CSSTransition, a7 as TransitionGroup, a8 as useId, a9 as InputAdornment, aa as TextField, ab as useTheme$1, ac as resolveComponentProps, ad as refType, ae as Grid, af as CardHeader, ag as Checkbox, ah as Divider, ai as ListItemIcon, aj as ListItemText } from "./mui-6YGer9Nu.js";
import { B as Button$1, g as Card, f as PageHeaders, R as Row, C as Col, F as Form, n as CardHeader$1, h as CardBody, L as Label, a8 as DatePicker$1, z as FormGroup } from "./index-Drmsz9hA.js";
import { C as CardTitle } from "./CardTitle-DTApbb8G.js";
import { S as StateManagedSelect$1 } from "./react-select.esm-CaNXbm0e.js";
import { F as FilePond, r as registerPlugin } from "./react-filepond.esm-Cg2gVH4h.js";
import { p as plugin, a as plugin$1 } from "./filepond-plugin-image-preview-jIDQBtim.js";
import { g as getDefaultExportFromCjs, r as requireReact } from "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
var CountryRegionData = [["Afghanistan", "AF", "Badakhshan~BDS|Badghis~BDG|Baghlan~BGL|Balkh~BAL|Bamyan~BAM|Daykundi~DAY|Farah~FRA|Faryab~FYB|Ghazni~GHA|Ghor~GHO|Helmand~HEL|Herat~HER|Jowzjan~JOW|Kabul~KAB|Kandahar~KAN|Kapisa~KAP|Khost~KHO|Kunar~KNR|Kunduz~KDZ|Laghman~LAG|Logar~LOW|Maidan Wardak~WAR|Nangarhar~NAN|Nimruz~NIM|Nuristan~NUR|Paktia~PIA|Paktika~PKA|Panjshir~PAN|Parwan~PAR|Samangan~SAM|Sar-e Pol~SAR|Takhar~TAK|Urozgan~ORU|Zabul~ZAB"], ["Åland Islands", "AX", "Brändö~BR|Eckerö~EC|Finström~FN|Föglö~FG|Geta~GT|Hammarland~HM|Jomala~JM|Kumlinge~KM|Kökar~KK|Lemland~LE|Lumparland~LU|Mariehamn~MH|Saltvik~SV|Sottunga~ST|Sund~SD|Vårdö~VR"], ["Albania", "AL", "Berat~01|Dibër~09|Durrës~02|Elbasan~03|Fier~04|Gjirokastër~05|Korçë~06|Kukës~07|Lezhë~08|Shkodër~10|Tirana~11|Vlorë~12"], ["Algeria", "DZ", "Adrar~01|Aïn Defla~44|Aïn Témouchent~46|Algiers~16|Annaba~23|Batna~05|Béchar~08|Béjaïa~06|Biskra~07|Blida~09|Bordj Bou Arréridj~34|Bouïra~10|Boumerdès~35|Chlef~02|Constantine~25|Djelfa~17|El Bayadh~32|El Oued~39|El Tarf~36|Ghardaïa~47|Guelma~24|Illizi~33|Jijel~18|Khenchela~40|Laghouat~03|Mascara~29|Médéa~26|Mila~43|Mostaganem~27|Msila~28|Naâma~45|Oran~31|Ouargla~30|Oum el Bouaghi~04|Relizane~48|Saïda~20|Sétif~19|Sidi Bel Abbès~22|Skikda~21|Souk Ahras~41|Tamanghasset~11|Tébessa~12|Tiaret~14|Tindouf~37|Tipaza~42|Tissemsilt~38|Tizi Ouzou~15|Tlemcen~13"], ["American Samoa", "AS", "Tutuila~01|Aunu'u~02|Ta'ū~03|Ofu‑Olosega~04|Rose Atoll~21|Swains Island~22"], ["Andorra", "AD", "Andorra la Vella~07|Canillo~02|Encamp~03|Escaldes-Engordany~08|La Massana~04|Ordino~05|Sant Julià de Lòria~06"], ["Angola", "AO", "Bengo~BGO|Benguela~BGU|Bié~BIE|Cabinda~CAB|Cuando Cubango~CCU|Cuanza Norte~CNO|Cuanza Sul~CUS|Cunene~CNN|Huambo~HUA|Huíla~HUI|Luanda~LUA|Lunda Norte~LNO|Lunda Sul~LSU|Malanje~MAL|Moxico~MOX|Namibe~NAM|Uíge~UIG|Zaire~ZAI"], ["Anguilla", "AI", "Anguilla~01|Anguillita Island~02|Blowing Rock~03|Cove Cay~04|Crocus Cay~05|Deadman's Cay~06|Dog Island~07|East Cay~08|Little Island~09|Little Scrub Island~10|Mid Cay~11|North Cay~12|Prickly Pear Cays~13|Rabbit Island~14|Sandy Island/Sand Island~15|Scilly Cay~16|Scrub Island~17|Seal Island~18|Sombrero/Hat Island~19|South Cay~20|South Wager Island~21|West Cay~22"], ["Antarctica", "AQ", "Antarctica~AQ"], ["Antigua and Barbuda", "AG", "Antigua Island~01|Barbuda Island~02|Bird Island~04|Bishop Island~05|Blake Island~06|Crump Island~09|Dulcina Island~10|Exchange Island~11|Five Islands~12|Great Bird Island~13|Green Island~14|Guiana Island~15|Hawes Island~17|Hells Gate Island~16|Henry Island~18|Johnson Island~19|Kid Island~20|Lobster Island~22|Maiden Island~24|Moor Island~25|Nanny Island~26|Pelican Island~27|Prickly Pear Island~28|Rabbit Island~29|Red Head Island~31|Redonda Island~03|Sandy Island~32|Smith Island~33|The Sisters~34|Vernon Island~35|Wicked Will Island~36|York Island~37"], ["Argentina", "AR", "Buenos Aires~B|Capital Federal~C|Catamarca~K|Chaco~H|Chubut~U|Córdoba~X|Corrientes~W|Entre Ríos~E|Formosa~P|Jujuy~Y|La Pampa~L|La Rioja~F|Mendoza~M|Misiones~N|Neuquén~Q|Río Negro~R|Salta~A|San Juan~J|San Luis~D|Santa Cruz~Z|Santa Fe~S|Santiago del Estero~G|Tierra del Fuego~V|Tucumán~T"], ["Armenia", "AM", "Aragatsotn~AG|Ararat~AR|Armavir~AV|Gegharkunik~GR|Kotayk~KT|Lori~LO|Shirak~SH|Syunik~SU|Tavush~TV|Vayots Dzor~VD|Yerevan~ER"], ["Aruba", "AW", "Aruba~AW"], ["Australia", "AU", "Australian Capital Territory~ACT|New South Wales~NSW|Northern Territory~NT|Queensland~QLD|South Australia~SA|Tasmania~TAS|Victoria~VIC|Western Australia~WA"], ["Austria", "AT", "Burgenland~1|Kärnten~2|Niederösterreich~3|Oberösterreich~4|Salzburg~5|Steiermark~6|Tirol~7|Vorarlberg~8|Wien~9"], ["Azerbaijan", "AZ", "Abşeron~ABS|Ağcabədi~AGC|Ağdam~AGM|Ağdaş~AGS|Ağstafa~AGA|Ağsu~AGU|Astara~AST|Bakı~BAK|Babək~BAB|Balakən~BAL|Bərdə~BAR|Beyləqan~BEY|Biləsuvar~BIL|Cəbrayıl~CAB|Cəlilabad~CAL|Culfa~CUL|Daşkəsən~DAS|Füzuli~FUZ|Gədəbəy~GAD|Goranboy~GOR|Göyçay~GOY|Göygöl~GYG|Hacıqabul~HAC|İmişli~IMI|İsmayıllı~ISM|Kəlbəcər~KAL|Kǝngǝrli~KAN|Kürdəmir~KUR|Laçın~LAC|Lənkəran~LAN|Lerik~LER|Masallı~MAS|Neftçala~NEF|Oğuz~OGU|Ordubad~ORD|Qəbələ~QAB|Qax~QAX|Qazax~QAZ|Qobustan~QOB|Quba~QBA|Qubadli~QBI|Qusar~QUS|Saatlı~SAT|Sabirabad~SAB|Şabran~SBN|Sədərək~SAD|Şahbuz~SAH|Şəki~SAK|Salyan~SAL|Şamaxı~SMI|Şəmkir~SKR|Samux~SMX|Şərur~SAR|Siyəzən~SIY|Şuşa~SUS|Tərtər~TAR|Tovuz~TOV|Ucar~UCA|Xaçmaz~XAC|Xızı~XIZ|Xocalı~XCI|Xocavənd~XVD|Yardımlı~YAR|Yevlax~YEV|Zəngilan~ZAN|Zaqatala~ZAQ|Zərdab~ZAR"], ["Bahamas", "BS", "Acklins Island~01|Berry Islands~22|Bimini~02|Black Point~23|Cat Island~03|Central Abaco~24|Crooked Island and Long Cay~28|East Grand Bahama~29|Exuma~04|Freeport~05|Fresh Creek~06|Governor's Harbour~07|Green Turtle Cay~08|Harbour Island~09|High Rock~10|Inagua~11|Kemps Bay~12|Long Island~13|Marsh Harbour~14|Mayaguana~15|Moore’s Island~40|New Providence~16|Nichollstown and Berry Islands~17|North Abaco~42|North Andros~41|North Eleuthera~33|Ragged Island~18|Rock Sound~19|San Salvador and Rum Cay~20|Sandy Point~21|South Abaco~35|South Andros~36|South Eleuthera~37|West Grand Bahama~39"], ["Bahrain", "BH", "Al Janūbīyah~14|Al Manāmah~13|Al Muḩarraq~15|Al Wusţá~16|Ash Shamālīyah~17"], ["Bangladesh", "BD", "Barisal~A|Chittagong~B|Dhaka~C|Khulna~D|Mymensingh~M|Rajshahi~E|Rangpur~F|Sylhet~G"], ["Barbados", "BB", "Christ Church~01|Saint Andrew~02|Saint George~03|Saint James~04|Saint John~05|Saint Joseph~06|Saint Lucy~07|Saint Michael~08|Saint Peter~09|Saint Philip~10|Saint Thomas~11"], ["Belarus", "BY", "Brest voblast~BR|Gorod Minsk~HM|Homiel voblast~HO|Hrodna voblast~HR|Mahilyow voblast~MA|Minsk voblast~MI|Vitsebsk voblast~VI"], ["Belgium", "BE", "Brussels~BRU|Flanders~VLG|Wallonia~WAL"], ["Belize", "BZ", "Belize District~BZ|Cayo District~CY|Corozal District~CZL|Orange Walk District~OW|Stann Creek District~SC|Toledo District~TOL"], ["Benin", "BJ", "Alibori~AL|Atakora~AK|Atlantique~AQ|Borgou~BO|Collines Department~CO|Donga~DO|Kouffo~KO|Littoral Department~LI|Mono Department~MO|Ouémé~OU|Plateau~PL|Zou~ZO"], ["Bermuda", "BM", "City of Hamilton~03|Devonshire Parish~01|Hamilton Parish~02|Paget Parish~04|Pembroke Parish~05|Sandys Parish~08|Smith's Parish~09|Southampton Parish~10|St. George's Parish~07|Town of St. George~06|Warwick Parish~11"], ["Bhutan", "BT", "Bumthang~33|Chhukha~12|Dagana~22|Gasa~GA|Haa~13|Lhuntse~44|Mongar~42|Paro~11|Pemagatshel~43|Punakha~23|Samdrup Jongkhar~45|Samtse~14|Sarpang~31|Thimphu~15|Trashigang~41|Trashiyangtse~TY|Trongsa~32|Tsirang~21|Wangdue Phodrang~24|Zhemgang~34"], ["Bolivia", "BO", "Beni~BE|Chuquisaca~CH|Cochabamba~CB|La Paz~LP|Oruro~OR|Pando~PD|Potosí~PT|Santa Cruz~SC|Tarija~TJ"], ["Bonaire, Sint Eustatius and Saba", "BQ", "Bonaire~BO|Saba Isand~SA|Sint Eustatius~SE"], ["Bosnia and Herzegovina", "BA", "Brčko Distrikt~BRC|Federacija Bosne i Hercegovine~BIH|Republika Srpska~SRP"], ["Botswana", "BW", "Central~CE|Ghanzi~GH|Kgalagadi~KG|Kgatleng~KL|Kweneng~KW|North West~NW|North-East~NE|South East~SE|Southern~SO"], ["Bouvet Island", "BV", "Bouvet Island~BV"], ["Brazil", "BR", "Acre~AC|Alagoas~AL|Amapá~AP|Amazonas~AM|Bahia~BA|Ceará~CE|Distrito Federal~DF|Espírito Santo~ES|Goiás~GO|Maranhão~MA|Mato Grosso~MT|Mato Grosso do Sul~MS|Minas Gerais~MG|Pará~PA|Paraíba~PB|Paraná~PR|Pernambuco~PE|Piauí~PI|Rio de Janeiro~RJ|Rio Grande do Norte~RN|Rio Grande do Sul~RS|Rondônia~RO|Roraima~RR|Santa Catarina~SC|São Paulo~SP|Sergipe~SE|Tocantins~TO"], ["British Indian Ocean Territory", "IO", "British Indian Ocean Territory~IO"], ["Brunei Darussalam", "BN", "Belait~BE|Brunei Muara~BM|Temburong~TE|Tutong~TU"], ["Bulgaria", "BG", "Blagoevgrad~01|Burgas~02|Dobrich~08|Gabrovo~07|Jambol~28|Khaskovo~26|Kjustendil~10|Kurdzhali~09|Lovech~11|Montana~12|Pazardzhik~13|Pernik~14|Pleven~15|Plovdiv~16|Razgrad~17|Ruse~18|Shumen~27|Silistra~19|Sliven~20|Smoljan~21|Sofija~23|Sofija-Grad~22|Stara Zagora~24|Turgovishhe~25|Varna~03|Veliko Turnovo~04|Vidin~05|Vraca~06"], ["Burkina Faso", "BF", "Balé~BAL|Bam/Lake Bam~BAM|Banwa Province~BAN|Bazèga~BAZ|Bougouriba~BGR|Boulgou Province~BLG|Boulkiemdé~BLK|Comoé/Komoe~COM|Ganzourgou Province~GAN|Gnagna~GNA|Gourma Province~GOU|Houet~HOU|Ioba~IOB|Kadiogo~KAD|Kénédougou~KEN|Komondjari~KMD|Kompienga~KMP|Kossi Province~KOS|Koulpélogo~KOP|Kouritenga~KOT|Kourwéogo~KOW|Léraba~LER|Loroum~LOR|Mouhoun~MOU|Namentenga~NAM|Naouri/Nahouri~NAO|Nayala~NAY|Noumbiel~NOU|Oubritenga~OUB|Oudalan~OUD|Passoré~PAS|Poni~PON|Sanguié~SNG|Sanmatenga~SMT|Séno~SEN|Sissili~SIS|Soum~SOM|Sourou~SOR|Tapoa~TAP|Tui/Tuy~TUI|Yagha~YAG|Yatenga~YAT|Ziro~ZIR|Zondoma~ZON|Zoundwéogo~ZOU"], ["Burundi", "BI", "Bubanza~BB|Bujumbura Mairie~BM|Bujumbura Rural~BL|Bururi~BR|Cankuzo~CA|Cibitoke~CI|Gitega~GI|Karuzi~KR|Kayanza~KY|Kirundo~KI|Makamba~MA|Muramvya~MU|Muyinga~MY|Mwaro~MW|Ngozi~NG|Rutana~RT|Ruyigi~RY"], ["Cambodia", "KH", "Baat Dambang~2|Banteay Mean Chey~1|Kampong Chaam~3|Kampong Chhnang~4|Kampong Spueu~5|Kampong Thum~6|Kampot~7|Kandaal~8|Kaoh Kong~9|Kracheh~10|Krong Kaeb~23|Krong Pailin~24|Krong Preah Sihanouk~18|Mondol Kiri~11|Otdar Mean Chey~22|Phnom Penh~12|Pousaat~15|Preah Vihear~13|Prey Veaeng~14|Rotanah Kiri~16|Siem Reab~17|Stueng Treng~19|Svaay Rieng~20|Taakaev~21|Tbong Khmum~25"], ["Cameroon", "CM", "Adamaoua~AD|Centre~CE|Est~ES|Extrême-Nord~EN|Littoral~LT|Nord~NO|Nord-Ouest~NW|Ouest~OU|Sud~SU|Sud-Ouest~SW"], ["Canada", "CA", "Alberta~AB|British Columbia~BC|Manitoba~MB|New Brunswick~NB|Newfoundland and Labrador~NL|Northwest Territories~NT|Nova Scotia~NS|Nunavut~NU|Ontario~ON|Prince Edward Island~PE|Quebec~QC|Saskatchewan~SK|Yukon~YT"], ["Cape Verde", "CV", "Boa Vista~BV|Brava~BR|Calheta de São Miguel~CS|Maio~MA|Mosteiros~MO|Paúl~PA|Porto Novo~PN|Praia~PR|Ribeira Brava~RB|Ribeira Grande~RG|Sal~SL|Santa Catarina~CA|Santa Cruz~CR|São Domingos~SD|São Filipe~SF|São Nicolau~SN|São Vicente~SV|Tarrafal~TA|Tarrafal de São Nicolau~TS"], ["Cayman Islands", "KY", "Creek~undefined|Eastern~undefined|Midland~undefined|South Town~undefined|Spot Bay~undefined|Stake Bay~undefined|West End~undefined|Western~undefined"], ["Central African Republic", "CF", "Bamingui-Bangoran~BB|Bangui~BGF|Basse-Kotto~BK|Haute-Kotto~HK|Haut-Mbomou~HM|Kémo~KG|Lobaye~LB|Mambéré-Kadéï~HS|Mbomou~MB|Nana-Grebizi~10|Nana-Mambéré~NM|Ombella-M'Poko~MP|Ouaka~UK|Ouham~AC|Ouham Péndé~OP|Sangha-Mbaéré~SE|Vakaga~VK"], ["Chad", "TD", "Bahr el Ghazal~BG|Batha~BA|Borkou~BO|Chari-Baguirmi~CB|Ennedi-Est~EE|Ennedi-Ouest~EO|Guéra~GR|Hadjer Lamis~HL|Kanem~KA|Lac~LC|Logone Occidental~LO|Logone Oriental~LR|Mondoul~MA|Mayo-Kébbi-Est~ME|Moyen-Chari~MC|Ouaddai~OD|Salamat~SA|Sila~SI|Tandjilé~TA|Tibesti~TI|Ville de Ndjamena~ND|Wadi Fira~WF"], ["Chile", "CL", "Aisén del General Carlos Ibáñez del Campo~AI|Antofagasta~AN|Araucanía~AR|Arica y Parinacota~AP|Atacama~AT|Bío-Bío~BI|Coquimbo~CO|Libertador General Bernardo O'Higgins~LI|Los Lagos~LL|Los Ríos~LR|Magallanes y Antartica Chilena~MA|Marga-Marga~|Maule~ML|Ñuble~NB|Región Metropolitana de Santiago~RM|Tarapacá~TA|Valparaíso~VS"], ["China", "CN", "Anhui~AH|Beijing~BJ|Chongqing~CQ|Fujian~FJ|Gansu~GS|Guangdong~GD|Guangxi~GX|Guizhou~GZ|Hainan~HI|Hebei~HE|Heilongjiang~HL|Henan~HA|Hong Kong~HK|Hubei~HB|Hunan~HN|Inner Mongolia~NM|Jiangsu~JS|Jiangxi~JX|Jilin~JL|Liaoning~LN|Macau~MO|Ningxia~NX|Qinghai~QH|Shaanxi~SN|Shandong~SD|Shanghai~SH|Shanxi~SX|Sichuan~SC|Tianjin~TJ|Tibet~XZ|Xinjiang~XJ|Yunnan~YN|Zhejiang~ZJ"], ["Christmas Island", "CX", "Christmas Island~CX"], ["Cocos (Keeling) Islands", "CC", "Direction Island~DI|Home Island~HM|Horsburgh Island~HR|North Keeling Island~NK|South Island~SI|West Island~WI"], ["Colombia", "CO", "Amazonas~AMA|Antioquia~ANT|Arauca~ARA|Archipiélago de San Andrés~SAP|Atlántico~ATL|Bogotá D.C.~DC|Bolívar~BOL|Boyacá~BOY|Caldas~CAL|Caquetá~CAQ|Casanare~CAS|Cauca~CAU|Cesar~CES|Chocó~CHO|Córdoba~COR|Cundinamarca~CUN|Guainía~GUA|Guaviare~GUV|Huila~HUI|La Guajira~LAG|Magdalena~MAG|Meta~MET|Nariño~NAR|Norte de Santander~NSA|Putumayo~PUT|Quindío~QUI|Risaralda~RIS|Santander~SAN|Sucre~SUC|Tolima~TOL|Valle del Cauca~VAC|Vaupés~VAU|Vichada~VID"], ["Comoros", "KM", "Andjazîdja~G|Andjouân~A|Moûhîlî~M"], ["Congo, Republic of the (Brazzaville)", "CG", "Bouenza~11|Brazzaville~BZV|Cuvette~8|Cuvette-Ouest~15|Kouilou~5|Lékoumou~2|Likouala~7|Niari~9|Plateaux~14|Pointe-Noire~16|Pool~12|Sangha~13"], ["Congo, the Democratic Republic of the (Kinshasa)", "CD", "Bandundu~BN|Bas-Congo~BC|Équateur~EQ|Kasaï-Occidental~KE|Kasaï-Oriental~KW|Katanga~KA|Kinshasa~KN|Maniema~MA|Nord-Kivu~NK|Orientale~OR|Sud-Kivu~SK"], ["Cook Islands", "CK", "Aitutaki~undefined|Atiu~undefined|Avarua~undefined|Mangaia~undefined|Manihiki~undefined|Ma'uke~undefined|Mitiaro~undefined|Nassau~undefined|Palmerston~undefined|Penrhyn~undefined|Pukapuka~undefined|Rakahanga~undefined"], ["Costa Rica", "CR", "Alajuela~2|Cartago~3|Guanacaste~5|Heredia~4|Limón~7|Puntarenas~6|San José~1"], ["Côte d'Ivoire, Republic of", "CI", "Agnéby~16|Bafing~17|Bas-Sassandra~09|Denguélé~10|Dix-Huit Montagnes~06|Fromager~18|Haut-Sassandra~02|Lacs~07|Lagunes~01|Marahoué~12|Moyen-Cavally~19|Moyen-Comoé~05|N'zi-Comoé~11|Savanes~03|Sud-Bandama~15|Sud-Comoé~13|Vallée du Bandama~04|Worodougou~14|Zanzan~08"], ["Croatia", "HR", "Bjelovarsko-bilogorska županija~07|Brodsko-posavska županija~12|Dubrovačko-neretvanska županija~19|Grad Zagreb~21|Istarska županija~18|Karlovačka županija~04|Koprivničko-križevačka županija~06|Krapinsko-zagorska županija~02|Ličko-senjska županija~09|Međimurska županija~20|Osječko-baranjska županija~14|Požeško-slavonska županija~11|Primorsko-goranska županija~08|Sisačko-moslavačka županija~03|Splitsko-dalmatinska županija~17|Šibensko-kninska županija~15|Varaždinska županija~05|Virovitičko-podravska županija~10|Vukovarsko-srijemska županija~16|Zadarska županija~13|Zagrebačka županija~01"], ["Cuba", "CU", "Artemisa~15|Camagüey~09|Ciego de Ávila~08|Cienfuegos~06|Granma~12|Guantánamo~14|Holguín~11|Isla de la Juventud~99|La Habana~03|Las Tunas~10|Matanzas~04|Mayabeque~16|Pinar del Río~01|Sancti Spíritus~07|Santiago de Cuba~13|Villa Clara~05"], ["Curaçao", "CW", "Curaçao~CW"], ["Cyprus", "CY", "Ammochostos~04|Keryneia~06|Larnaka~03|Lefkosia~01|Lemesos~02|Pafos~05"], ["Czech Republic", "CZ", "Hlavní město Praha~10|Jihočeský kraj~31|Jihomoravský kraj~64|Karlovarský kraj~41|Královéhradecký kraj~52|Liberecký kraj~51|Moravskoslezský kraj~80|Olomoucký kraj~71|Pardubický kraj~53|Plzeňský kraj~32|Středočeský kraj~20|Ústecký kraj~42|Vysočina~63|Zlínský kraj~72"], ["Denmark", "DK", "Hovedstaden~DK-84|Midtjylland~DK-82|Nordjylland~DK-81|Sjælland~DK-85|Syddanmark~DK-83"], ["Djibouti", "DJ", "Ali Sabieh~AS|Arta~AR|Dikhil~DI|Obock~OB|Tadjourah~TA"], ["Dominica", "DM", "Saint Andrew Parish~02|Saint David Parish~03|Saint George Parish~04|Saint John Parish~05|Saint Joseph Parish~06|Saint Luke Parish~07|Saint Mark Parish~08|Saint Patrick Parish~09|Saint Paul Parish~10|Saint Peter Parish~11"], ["Dominican Republic", "DO", "Cibao Central~02|Del Valle~37|Distrito Nacional~01|Enriquillo~38|Norcentral~04|Nordeste~33|Noroeste~34|Norte~35|Valdesia~42"], ["Ecuador", "EC", "Azuay~A|Bolívar~B|Cañar~F|Carchi~C|Chimborazo~H|Cotopaxi~X|El Oro~O|Esmeraldas~E|Galápagos~W|Guayas~G|Imbabura~I|Loja~L|Los Ríos~R|Manabí~M|Morona-Santiago~S|Napo~N|Orellana~D|Pastaza~Y|Pichincha~P|Santa Elena~SE|Santo Domingo de los Tsáchilas~SD|Sucumbíos~U|Tungurahua~T|Zamora-Chinchipe~Z"], ["Egypt", "EG", "Alexandria~ALX|Aswan~ASN|Asyout~AST|Bani Sueif~BNS|Beheira~BH|Cairo~C|Daqahlia~DK|Dumiat~DT|El Bahr El Ahmar~BA|El Ismailia~IS|El Suez~SUZ|El Wadi El Gedeed~WAD|Fayoum~FYM|Gharbia~GH|Giza~GZ|Helwan~HU|Kafr El Sheikh~KFS|Luxor~LX|Matrouh~MT|Menia~MN|Menofia~MNF|North Sinai~SIN|Port Said~PTS|Qalubia~KB|Qena~KN|Sharqia~SHR|Sixth of October~SU|Sohag~SHG|South Sinai~JS"], ["El Salvador", "SV", "Ahuachapán~AH|Cabañas~CA|Cuscatlán~CU|Chalatenango~CH|La Libertad~LI|La Paz~PA|La Unión~UN|Morazán~MO|San Miguel~SM|San Salvador~SS|Santa Ana~SA|San Vicente~SV|Sonsonate~SO|Usulután~US"], ["Equatorial Guinea", "GQ", "Annobón~AN|Bioko Norte~BN|Bioko Sur~BS|Centro Sur~CS|Kié-Ntem~KN|Litoral~LI|Wele-Nzas~WN"], ["Eritrea", "ER", "Anseba~AN|Debub~DU|Debub-Keih-Bahri~DK|Gash-Barka~GB|Maekel~MA|Semien-Keih-Bahri~SK"], ["Estonia", "EE", "Harjumaa (Tallinn)~37|Hiiumaa (Kardla)~39|Ida-Virumaa (Johvi)~44|Järvamaa (Paide)~41|Jõgevamaa (Jogeva)~49|Läänemaa~57|Lääne-Virumaa (Rakvere)~59|Pärnumaa (Parnu)~67|Põlvamaa (Polva)~65|Raplamaa (Rapla)~70|Saaremaa (Kuessaare)~74|Tartumaa (Tartu)~78|Valgamaa (Valga)~82|Viljandimaa (Viljandi)~84|Võrumaa (Voru)~86"], ["Ethiopia", "ET", "Addis Ababa~AA|Afar~AF|Amhara~AM|Benshangul-Gumaz~BE|Dire Dawa~DD|Gambela~GA|Harari~HA|Oromia~OR|Somali~SO|Southern Nations Nationalities and People's Region~SN|Tigray~TI"], ["Falkland Islands (Islas Malvinas)", "FK", "Falkland Islands (Islas Malvinas)~undefined"], ["Faroe Islands", "FO", "Bordoy~undefined|Eysturoy~undefined|Mykines~undefined|Sandoy~undefined|Skuvoy~undefined|Streymoy~undefined|Suduroy~undefined|Tvoroyri~undefined|Vagar~undefined"], ["Fiji", "FJ", "Ba~01|Bua~02|Cakaudrove~03|Kadavu~04|Lau~05|Lomaiviti~06|Macuata~07|Nadroga and Navosa~08|Naitasiri~09|Namosi~10|Ra~11|Rewa~12|Rotuma~R|Serua~13|Tailevu~14"], ["Finland", "FI", "Ahvenanmaan maakunta~FI-01|Etelä-Karjala~FI-02|Etelä-Pohjanmaa~FI-03|Etelä-Savo~FI-04|Kainuu~FI-05|Kanta-Häme~FI-06|Keski-Pohjanmaa~FI-07|Keski-Suomi~FI-08|Kymenlaakso~FI-09|Lappi~FI-10|Pirkanmaa~FI-11|Pohjanmaa~FI-12|Pohjois-Karjala~FI-13|Pohjois-Pohjanmaa~FI-14|Pohjois-Savo~FI-15|Päijät-Häme~FI-16|Satakunta~FI-17|Uusimaa~FI-18|Varsinais-Suomi~FI-19"], ["France", "FR", "Auvergne-Rhône-Alpes~ARA|Bourgogne-Franche-Comté~BFC|Bretagne~BRE|Centre-Val de Loire~CVL|Corse~COR|Grand Est~GES|Hauts-de-France~HDF|Île-de-France~IDF|Normandie~NOR|Nouvelle-Aquitaine~NAQ|Occitanie~OCC|Pays de la Loire~PDL|Provence-Alpes-Cote d'Azur~PAC|Clipperton~CP|Guadeloupe~GP|Guyane~GF|Martinique~MQ|Mayotte~YT|Nouvelle-Calédonie~NC|Polynésie~PF|Saint-Pierre-et-Miquelon~PM|Saint Barthélemy~BL|Saint Martin~MF|Réunion~RE|Terres Australes Françaises~TF|Wallis-et-Futuna~WF"], ["French Guiana", "GF", "French Guiana~undefined"], ["French Polynesia", "PF", "Archipel des Marquises~undefined|Archipel des Tuamotu~undefined|Archipel des Tubuai~undefined|Iles du Vent~undefined|Iles Sous-le-Vent~undefined"], ["French Southern and Antarctic Lands", "TF", "Adelie Land~undefined|Ile Crozet~undefined|Iles Kerguelen~undefined|Iles Saint-Paul et Amsterdam~undefined"], ["Gabon", "GA", "Estuaire~1|Haut-Ogooué~2|Moyen-Ogooué~3|Ngounié~4|Nyanga~5|Ogooué-Ivindo~6|Ogooué-Lolo~7|Ogooué-Maritime~8|Woleu-Ntem~9"], ["Gambia, The", "GM", "Banjul~B|Central River~M|Lower River~L|North Bank~N|Upper River~U|Western~W"], ["Georgia", "GE", "Abkhazia (Sokhumi)~AB|Ajaria (Bat'umi)~AJ|Guria~GU|Imereti~IM|K'akheti~KA|Kvemo Kartli~KK|Mtshkheta-Mtianeti~MM|Rach'a-Lexhkumi-KvemoSvaneti~RL|Samegrelo-Zemo Svaneti~SZ|Samtskhe-Javakheti~SJ|Shida Kartli~SK|Tbilisi~TB"], ["Germany", "DE", "Baden-Württemberg~BW|Bayern~BY|Berlin~BE|Brandenburg~BB|Bremen~HB|Hamburg~HH|Hessen~HE|Mecklenburg-Vorpommern~MV|Niedersachsen~NI|Nordrhein-Westfalen~NW|Rheinland-Pfalz~RP|Saarland~SL|Sachsen~SN|Sachsen-Anhalt~ST|Schleswig-Holstein~SH|Thüringen~TH"], ["Ghana", "GH", "Ahafo~undefined|Ashanti~AH|Bono~undefined|Bono East~undefined|Central~CP|Eastern~EP|Greater Accra~AA|Northern~NP|North East~undefined|Oti~undefined|Savannah~undefined|Upper East~UE|Upper West~UW|Volta~TV|Western~WP|Western North~undefined"], ["Gibraltar", "GI", "Gibraltar~undefined"], ["Greece", "GR", "Anatolikí Makedonía kai Thráki~A|Attikḯ~I|Dytikí Elláda~G|Dytikí Makedonía~C|Ionía Nísia~F|Kentrikí Makedonía~B|Krítí~M|Notío Aigaío~L|Peloponnísos~J|Stereá Elláda~H|Thessalía~E|Voreío Aigaío~K|Ípeiros~D|Ágion Óros~69"], ["Greenland", "GL", "Kommune Kujalleq~KU|Kommuneqarfik Sermersooq~SM|Qaasuitsup Kommunia~QA|Qeqqata Kommunia~QE"], ["Grenada", "GD", "Saint Andrew~01|Saint David~02|Saint George~03|Saint John~04|Saint Mark~05|Saint Patrick~06|Southern Grenadine Islands~10"], ["Guadeloupe", "GP", "Guadeloupe~undefined"], ["Guam", "GU", "Guam~undefined"], ["Guatemala", "GT", "Alta Verapaz~AV|Baja Verapaz~BV|Chimaltenango~CM|Chiquimula~CQ|El Progreso~PR|Escuintla~ES|Guatemala~GU|Huehuetenango~HU|Izabal~IZ|Jalapa~JA|Jutiapa~JU|Petén~PE|Quetzaltenango~QZ|Quiché~QC|Retalhuleu~Re|Sacatepéquez~SA|San Marcos~SM|Santa Rosa~SR|Sololá~SO|Suchitepéquez~SU|Totonicapán~TO|Zacapa~ZA"], ["Guernsey", "GG", "Castel~undefined|Forest~undefined|St. Andrew~undefined|St. Martin~undefined|St. Peter Port~undefined|St. Pierre du Bois~undefined|St. Sampson~undefined|St. Saviour~undefined|Torteval~undefined|Vale~undefined"], ["Guinea", "GN", "Boké~B|Conakry~C|Faranah~F|Kankan~K|Kindia~D|Labé~L|Mamou~M|Nzérékoré~N"], ["Guinea-Bissau", "GW", "Bafatá~BA|Biombo~BM|Bissau~BS|Bolama-Bijagos~BL|Cacheu~CA|Gabú~GA|Oio~OI|Quinara~QU|Tombali~TO"], ["Guyana", "GY", "Barima-Waini~BA|Cuyuni-Mazaruni~CU|Demerara-Mahaica~DE|East Berbice-Corentyne~EB|Essequibo Islands-West Demerara~ES|Mahaica-Berbice~MA|Pomeroon-Supenaam~PM|Potaro-Siparuni~PT|Upper Demerara-Berbice~UD|Upper Takutu-Upper Essequibo~UT"], ["Haiti", "HT", "Artibonite~AR|Centre~CE|Grand'Anse~GA|Nippes~NI|Nord~ND|Nord-Est~NE|Nord-Ouest~NO|Ouest~OU|Sud~SD|Sud-Est~SE"], ["Heard Island and McDonald Islands", "HM", "Heard Island and McDonald Islands~undefined"], ["Holy See (Vatican City)", "VA", "Holy See (Vatican City)~01"], ["Honduras", "HN", "Atlántida~AT|Choluteca~CH|Colón~CL|Comayagua~CM|Copán~CP|Cortés~CR|El Paraíso~EP|Francisco Morazán~FM|Gracias a Dios~GD|Intibucá~IN|Islas de la Bahía~IB|La Paz~LP|Lempira~LE|Ocotepeque~OC|Olancho~OL|Santa Bárbara~SB|Valle~VA|Yoro~YO"], ["Hong Kong", "HK", "Hong Kong~HK"], ["Hungary", "HU", "Bács-Kiskun~BK|Baranya~BA|Békés~BE|Békéscsaba~BC|Borsod-Abauj-Zemplen~BZ|Budapest~BU|Csongrád~CS|Debrecen~DE|Dunaújváros~DU|Eger~EG|Érd~ER|Fejér~FE|Győr~GY|Győr-Moson-Sopron~GS|Hajdú-Bihar~HB|Heves~HE|Hódmezővásárhely~HV|Jász-Nagykun-Szolnok~N|Kaposvár~KV|Kecskemét~KM|Komárom-Esztergom~KE|Miskolc~MI|Nagykanizsa~NK|Nógrád~NO|Nyíregyháza~NY|Pécs~PS|Pest~PE|Salgótarján~ST|Somogy~SO|Sopron~SN|Szabolcs-á-Bereg~SZ|Szeged~SD|Székesfehérvár~SF|Szekszárd~SS|Szolnok~SK|Szombathely~SH|Tatabánya~TB|Tolna~TO|Vas~VA|Veszprém~VE|Veszprém (City)~VM|Zala~ZA|Zalaegerszeg~ZE"], ["Iceland", "IS", "Austurland~7|Höfuðborgarsvæði~1|Norðurland eystra~6|Norðurland vestra~5|Suðurland~8|Suðurnes~2|Vestfirðir~4|Vesturland~3"], ["India", "IN", "Andaman and Nicobar Islands~AN|Andhra Pradesh~AP|Arunachal Pradesh~AR|Assam~AS|Bihar~BR|Chandigarh~CH|Chhattisgarh~CT|Dadra and Nagar Haveli and Daman and Diu~DH|Delhi~DL|Goa~GA|Gujarat~GJ|Haryana~HR|Himachal Pradesh~HP|Jammu and Kashmir~JK|Jharkhand~JH|Karnataka~KA|Kerala~KL|Ladakh~LA|Lakshadweep~LD|Madhya Pradesh~MP|Maharashtra~MH|Manipur~MN|Meghalaya~ML|Mizoram~MZ|Nagaland~NL|Odisha~OR|Puducherry~PY|Punjab~PB|Rajasthan~RJ|Sikkim~SK|Tamil Nadu~TN|Telangana~TG|Tripura~TR|Uttarakhand~UT|Uttar Pradesh~UP|West Bengal~WB"], ["Indonesia", "ID", "Aceh~AC|Bali~BA|Bangka Belitung~BB|Banten~BT|Bengkulu~BE|Gorontalo~GO|Jakarta Raya~JK|Jambi~JA|Jawa Barat~JB|Jawa Tengah~JT|Jawa Timur~JI|Kalimantan Barat~KB|Kalimantan Selatan~KS|Kalimantan Tengah~KT|Kalimantan Timur~KI|Kalimantan Utara~KU|Kepulauan Riau~KR|Lampung~LA|Maluku~MA|Maluku Utara~MU|Nusa Tenggara Barat~NB|Nusa Tenggara Timur~NT|Papua~PA|Papua Barat~PB|Riau~RI|Sulawesi Selatan~SR|Sulawesi Tengah~ST|Sulawesi Tenggara~SG|Sulawesi Utara~SA|Sumatera Barat~SB|Sumatera Selatan~SS|Sumatera Utara~SU|Yogyakarta~YO"], ["Iran, Islamic Republic of", "IR", "Alborz~32|Ardabīl~03|Āz̄arbāyjān-e Gharbī~02|Āz̄arbāyjān-e Sharqī~01|Būshehr~06|Chahār Maḩāl va Bakhtīārī~08|Eşfahān~04|Fārs~14|Gīlān~19|Golestān~27|Hamadān~24|Hormozgān~23|Īlām~05|Kermān~15|Kermānshāh~17|Khorāsān-e Jonūbī~29|Khorāsān-e Raẕavī~30|Khorāsān-e Shomālī~61|Khūzestān~10|Kohgīlūyeh va Bowyer Aḩmad~18|Kordestān~16|Lorestān~20|Markazi~22|Māzandarān~21|Qazvīn~28|Qom~26|Semnān~12|Sīstān va Balūchestān~13|Tehrān~07|Yazd~25|Zanjān~11"], ["Iraq", "IQ", "Al Anbār~AN|Al Başrah~BA|Al Muthanná~MU|Al Qādisīyah~QA|An Najaf~NA|Arbīl~AR|As Sulaymānīyah~SU|Bābil~BB|Baghdād~BG|Dohuk~DA|Dhī Qār~DQ|Diyālá~DI|Karbalā'~KA|Kirkuk~KI|Maysān~MA|Nīnawá~NI|Şalāḩ ad Dīn~SD|Wāsiţ~WA"], ["Ireland", "IE", "Carlow~CW|Cavan~CN|Clare~CE|Cork~CO|Donegal~DL|Dublin~D|Galway~G|Kerry~KY|Kildare~KE|Kilkenny~KK|Laois~LS|Leitrim~LM|Limerick~LK|Longford~LD|Louth~LH|Mayo~MO|Meath~MH|Monaghan~MN|Offaly~OY|Roscommon~RN|Sligo~SO|Tipperary~TA|Waterford~WD|Westmeath~WH|Wexford~WX|Wicklow~WW"], ["Isle of Man", "IM", "Isle of Man~undefined"], ["Israel", "IL", "HaDarom~D|HaMerkaz~M|HaTsafon~Z|H̱efa~HA|Tel-Aviv~TA|Yerushalayim~JM"], ["Italy", "IT", "Abruzzo~65|Basilicata~77|Calabria~78|Campania~72|Emilia-Romagna~45|Friuli-Venezia Giulia~36|Lazio~62|Liguria~42|Lombardia~25|Marche~57|Molise~67|Piemonte~21|Puglia~75|Sardegna~88|Sicilia~82|Toscana~52|Trentino-Alto Adige~32|Umbria~55|Valle d'Aosta~23|Veneto~34"], ["Jamaica", "JM", "Clarendon~13|Hanover~09|Kingston~01|Manchester~12|Portland~04|Saint Andrew~02|Saint Ann~06|Saint Catherine~14|Saint Elizabeth~11|Saint James~08|Saint Mary~05|Saint Thomas~03|Trelawny~07|Westmoreland~10"], ["Japan", "JP", "Aichi~23|Akita~05|Aomori~02|Chiba~12|Ehime~38|Fukui~18|Fukuoka~40|Fukushima~07|Gifu~21|Gunma~10|Hiroshima~34|Hokkaido~01|Hyogo~28|Ibaraki~08|Ishikawa~17|Iwate~03|Kagawa~37|Kagoshima~46|Kanagawa~14|Kochi~39|Kumamoto~43|Kyoto~26|Mie~24|Miyagi~04|Miyazaki~45|Nagano~20|Nagasaki~42|Nara~29|Niigata~15|Oita~44|Okayama~33|Okinawa~47|Osaka~27|Saga~41|Saitama~11|Shiga~25|Shimane~32|Shizuoka~22|Tochigi~09|Tokushima~36|Tokyo~13|Tottori~31|Toyama~16|Wakayama~30|Yamagata~06|Yamaguchi~35|Yamanashi~19"], ["Jersey", "JE", "Jersey~undefined"], ["Jordan", "JO", "‘Ajlūn~AJ|Al 'Aqabah~AQ|Al Balqā’~BA|Al Karak~KA|Al Mafraq~MA|Al ‘A̅şimah~AM|Aţ Ţafīlah~AT|Az Zarqā’~AZ|Irbid~IR|Jarash~JA|Ma‘ān~MN|Mādabā~MD"], ["Kazakhstan", "KZ", "Almaty~ALA|Aqmola~AKM|Aqtobe~AKT|Astana~AST|Atyrau~ATY|Batys Qazaqstan~ZAP|Bayqongyr~undefined|Mangghystau~MAN|Ongtustik Qazaqstan~YUZ|Pavlodar~PAV|Qaraghandy~KAR|Qostanay~KUS|Qyzylorda~KZY|Shyghys Qazaqstan~VOS|Soltustik Qazaqstan~SEV|Zhambyl~ZHA"], ["Kenya", "KE", "Baringo~01|Bomet~02|Bungoma~03|Busia~04|Eleyo/Marakwet~05|Embu~06|Garissa~07|Homa Bay~08|Isiolo~09|Kajiado~10|Kakamega~11|Kericho~12|Kiambu~13|Kilifi~14|Kirinyaga~15|Kisii~16|Kisumu~17|Kitui~18|Kwale~19|Laikipia~20|Lamu~21|Machakos~22|Makueni~23|Mandera~24|Marsabit~25|Meru~26|Migori~27|Mombasa~28|Murang'a~29|Nairobi City~30|Nakuru~31|Nandi~32|Narok~33|Nyamira~34|Nyandarua~35|Nyeri~36|Samburu~37|Siaya~38|Taita/Taveta~39|Tana River~40|Tharaka-Nithi~41|Trans Nzoia~42|Turkana~43|Uasin Gishu~44|Vihiga~45|Wajir~46|West Pokot~47"], ["Kiribati", "KI", "Abaiang~undefined|Abemama~undefined|Aranuka~undefined|Arorae~undefined|Banaba~undefined|Beru~undefined|Butaritari~undefined|Central Gilberts~undefined|Gilbert Islands~G|Kanton~undefined|Kiritimati~undefined|Kuria~undefined|Line Islands~L|Maiana~undefined|Makin~undefined|Marakei~undefined|Nikunau~undefined|Nonouti~undefined|Northern Gilberts~undefined|Onotoa~undefined|Phoenix Islands~P|Southern Gilberts~undefined|Tabiteuea~undefined|Tabuaeran~undefined|Tamana~undefined|Tarawa~undefined|Teraina~undefined"], ["Korea, Democratic People's Republic of", "KP", "Chagang-do (Chagang Province)~04|Hamgyong-bukto (North Hamgyong Province)~09|Hamgyong-namdo (South Hamgyong Province)~08|Hwanghae-bukto (North Hwanghae Province)~06|Hwanghae-namdo (South Hwanghae Province)~05|Kangwon-do (Kangwon Province)~07|Nasŏn (Najin-Sŏnbong)~13|P'yongan-bukto (North P'yongan Province)~03|P'yongan-namdo (South P'yongan Province)~02|P'yongyang-si (P'yongyang City)~01|Yanggang-do (Yanggang Province)~10"], ["Korea, Republic of", "KR", "Chungcheongbuk-do~43|Chungcheongnam-do~44|Jeju-teukbyeoljachido~49|Jeollabuk-do~45|Jeollanam-do~46|Incheon-gwangyeoksi~28|Gangwon-do~42|Gwangju-gwangyeoksi~29|Gyeonggi-do~41|Gyeongsangbuk-do~47|Gyeongsangnam-do~48|Busan-gwangyeoksi~26|Seoul-teukbyeolsi~11|Sejong-teukbyeoljachisi~50|Daegu-gwangyeoksi~27|Daejeon-gwangyeoksi~30|Ulsan-gwangyeoksi~31"], ["Kosovo", "XK", "Farizaj~FZ|Gjakova~GK|Gjilan~GL|Mitrovica~MI|Peja/Peć~PE|Pristina~PR|Prizren~PZ"], ["Kuwait", "KW", "Al Aḩmadi~AH|Al Farwānīyah~FA|Al Jahrā’~JA|Al ‘Āşimah~KU|Ḩawallī~HA|Mubārak al Kabir~MU"], ["Kyrgyzstan", "KG", "Batken Oblasty~B|Bishkek Shaary~GB|Chuy Oblasty (Bishkek)~C|Jalal-Abad Oblasty~J|Naryn Oblasty~N|Osh Oblasty~O|Talas Oblasty~T|Ysyk-Kol Oblasty (Karakol)~Y"], ["Laos", "LA", "Attapu~AT|Bokèo~BK|Bolikhamxai~BL|Champasak~CH|Houaphan~HO|Khammouan~KH|Louang Namtha~LM|Louangphabang~LP|Oudômxai~OU|Phôngsali~PH|Salavan~SL|Savannakhét~SV|Vientiane~VI|Xaignabouli~XA|Xékong~XE|Xaisomboun~XS|Xiangkhouang~XI"], ["Latvia", "LV", "Aglona~001|Aizkraukle~002|Aizpute~003|Aknīste~004|Aloja~005|Alsunga~06|Alūksne~007|Amata~008|Ape~009|Auce~010|Ādaži~011|Babīte~012|Baldone~013|Baltinava~014|Balvi~015|Bauska~016|Beverīna~017|Brocēni~018|Burtnieki~019|Carnikava~020|Cesvaine~021|Cēsis~022|Cibla~023|Dagda~024|Daugavpils~025|Daugavpils (City)~DGV|Dobele~026|Dundaga~027|Durbe~028|Engure~029|Ērgļi~030|Garkalne~031|Grobiņa~032|Gulbene~033|Iecava~034|Ikšķile~035|Ilūkste~036|Inčukalns~037|Jaunjelgava~038|Jaunpiebalga~039|Jaunpils~040|Jelgava~041|Jelgava (City)~JEL|Jēkabpils~042|Jēkabpils (City)~JKB|Jūrmala (City)~JUR|Kandava~043|Kārsava~044|Kocēni~045|Koknese~046|Krāslava~047|Krimulda~048|Krustpils~049|Kuldīga~050|Ķegums~051|Ķekava~052|Lielvārde~053|Liepāja~LPX|Limbaži~054|Līgatne~055|Līvāni~056|Lubāna~057|Ludza~058|Madona~059|Mazsalaca~060|Mālpils~061|Mārupe~062|Mērsrags~063|Naukšēni~064|Nereta~065|Nīca~066|Ogre~067|Olaine~068|Ozolnieki~069|Pārgauja~070|Pāvilosta~071|Pļaviņas~072|Preiļi~073|Priekule~074|Priekuļi~075|Rauna~076|Rēzekne~077|Rēzekne (City)~REZ|Riebiņi~078|Rīga~RIX|Roja~079|Ropaži~080|Rucava~081|Rugāji~082|Rundāle~083|Rūjiena~084|Sala~085|Salacgrīva~086|Salaspils~087|Saldus~088|Saulkrasti~089|Sēja~090|Sigulda~091|Skrīveri~092|Skrunda~093|Smiltene~094|Stopiņi~095|Strenči~096|Talsi~097|Tērvete~098|Tukums~099|Vaiņode~100|Valka~101|Valmiera~VMR|Varakļāni~102|Vārkava~103|Vecpiebalga~104|Vecumnieki~105|Ventspils~106|Ventspils (City)~VEN|Viesīte~107|Viļaka~108|Viļāni~109|Zilupe~110"], ["Lebanon", "LB", "Aakkâr~AK|Baalbelk-Hermel~BH|Béqaa~BI|Beyrouth~BA|Liban-Nord~AS|Liban-Sud~JA|Mont-Liban~JL|Nabatîyé~NA"], ["Lesotho", "LS", "Berea~D|Butha-Buthe~B|Leribe~C|Mafeteng~E|Maseru~A|Mohales Hoek~F|Mokhotlong~J|Qacha's Nek~H|Quthing~G|Thaba-Tseka~K"], ["Liberia", "LR", "Bomi~BM|Bong~BG|Gbarpolu~GP|Grand Bassa~GB|Grand Cape Mount~CM|Grand Gedeh~GG|Grand Kru~GK|Lofa~LO|Margibi~MG|Maryland~MY|Montserrado~MO|Nimba~NI|River Cess~RI|River Geee~RG|Sinoe~SI"], ["Libya", "LY", "Al Buţnān~BU|Al Jabal al Akhḑar~JA|Al Jabal al Gharbī~JG|Al Jafārah~JI|Al Jufrah~JU|Al Kufrah~FK|Al Marj~MJ|Al Marquab~MB|Al Wāḩāt~WA|An Nuqaţ al Khams~NQ|Az Zāwiyah~ZA|Banghāzī~BA|Darnah~DR|Ghāt~GH|Mişrātah~MI|Murzuq~MQ|Nālūt~NL|Sabhā~SB|Surt~SR|Ţarābulus~TB|Yafran~WD|Wādī ash Shāţiʾ~WS"], ["Liechtenstein", "LI", "Balzers~01|Eschen~02|Gamprin~03|Mauren~04|Planken~05|Ruggell~06|Schaan~07|Schellenberg~08|Triesen~09|Triesenberg~10|Vaduz~11"], ["Lithuania", "LT", "Alytaus~AL|Kauno~KU|Klaipėdos~KL|Marijampolės~MR|Panevėžio~PN|Šiaulių~SA|Tauragės~TA|Telšių~TE|Utenos~UT|Vilniaus~VL"], ["Luxembourg", "LU", "Capellen~CA|Clevaux~CL|Diekirch~DI|Echternach~EC|Esch-sur-Alzette~ES|Grevenmacher~GR|Luxembourg~LU|Mersch~ME|Redange~RD|Remich~RM|Vianden~VD|Wiltz~WI"], ["Macao", "MO", "Macao~undefined"], ["Macedonia, Republic of", "MK", "Aračinovo~02|Berovo~03|Bitola~04|Bogdanci~05|Bogovinje~06|Bosilovo~07|Brvenica~08|Centar Župa~78|Čaška~80|Češinovo-Obleševo~81|Čučer Sandevo~82|Debar~21|Debarca~22|Delčevo~23|Demir Hisar~25|Demir Kapija~24|Doran~26|Dolneni~27|Gevgelija~18|Gostivar~19|Gradsko~20|Ilinden~34|Jegunovce~35|Karbinci~37|Kavadarci~36|Kičevo~40|Kočani~42|Konče~41|Kratovo~43|Kriva Palanka~44|Krivogaštani~45|Kruševo~46|Kumanovo~47|Lipkovo~48|Lozovo~49|Makedonska Kamenica~51|Makedonski Brod~52|Mavrovo i Rostuša~50|Mogila~53|Negotino~54|Novaci~55|Novo Selo~56|Ohrid~58|Pehčevo~60|Petrovec~59|Plasnica~61|Prilep~62|Probištip~63|Radoviš~|Rankovce~65|Resen~66|Rosoman~67|Skopje~85|Sopište~70|Staro Nagoričane~71|Struga~72|Strumica~73|Studeničani~74|Sveti Nikole~69|Štip~83|Tearce~75|Tetovo~76|Valandovo~10|Vasilevo~11|Veles~13|Vevčani~12|Vinica~14|Vrapčište~16|Zelenikovo~32|Zrnovci~33|Želino~30"], ["Madagascar", "MG", "Antananarivo~T|Antsiranana~D|Fianarantsoa~F|Mahajanga~M|Toamasina~A|Toliara~U"], ["Malawi", "MW", "Balaka~BA|Blantyre~BL|Chikwawa~CK|Chiradzulu~CR|Chitipa~CT|Dedza~DE|Dowa~DO|Karonga~KR|Kasungu~KS|Likoma~LK|Lilongwe~LI|Machinga~MH|Mangochi~MG|Mchinji~MC|Mulanje~MU|Mwanza~MW|Mzimba~MZ|Nkhata Bay~NE|Nkhotakota~NB|Nsanje~NS|Ntcheu~NU|Ntchisi~NI|Phalombe~PH|Rumphi~RU|Salima~SA|Thyolo~TH|Zomba~ZO"], ["Malaysia", "MY", "Johor~01|Kedah~02|Kelantan~03|Melaka~04|Negeri Sembilan~05|Pahang~06|Perak~08|Perlis~09|Pulau Pinang~07|Sabah~12|Sarawak~13|Selangor~10|Terengganu~11|Wilayah Persekutuan (Kuala Lumpur)~14|Wilayah Persekutuan (Labuan)~15|Wilayah Persekutuan (Putrajaya)~16"], ["Maldives", "MV", "Alifu Alifu~02|Alifu Dhaalu~00|Baa~20|Dhaalu~17|Faafu~14|Gaafu Alifu~27|Gaafu Dhaalu~28|Gnaviyani~29|Haa Alifu~07|Haa Dhaalu~23|Kaafu~26|Laamu~05|Lhaviyani~03|Malé~MLE|Meemu~12|Noonu~25|Raa~13|Seenu~01|Shaviyani~24|Thaa~08|Vaavu~04"], ["Mali", "ML", "Bamako~BKO|Gao~7|Kayes~1|Kidal~8|Koulikoro~2|Mopti~5|Segou~4|Sikasso~3|Tombouctou~6|Taoudénit~9|Ménaka~10"], ["Malta", "MT", "Attard~01|Balzan~02|Birgu~03|Birkirkara~04|Birżebbuġa~05|Bormla~06|Dingli~07|Fgura~08|Floriana~09|Fontana~10|Guda~11|Gżira~12|Għajnsielem~13|Għarb~14|Għargħur~15|Għasri~16|Għaxaq~17|Ħamrun~18|Iklin~19|Isla~20|Kalkara~21|Kerċem~22|Kirkop~23|Lija~24|Luqa~25|Marsa~26|Marsaskala~27|Marsaxlokk~28|Mdina~29|Mellieħa~30|Mġarr~31|Mosta~32|Mqabba~33|Msida~34|Mtarfa~35|Munxar~36|Nadur~37|Naxxar~38|Paola~39|Pembroke~40|Pietà~41|Qala~42|Qormi~43|Qrendi~44|Rabat Għawdex~45|Rabat Malta~46|Safi~47|San Ġiljan~48|San Ġwann~49|San Lawrenz~50|San Pawl il-Baħar~51|Sannat~52|Santa Luċija~53|Santa Venera~54|Siġġiewi~55|Sliema~56|Swieqi~57|Tai Xbiex~58|Tarzien~59|Valletta~60|Xagħra~61|Xewkija~62|Xgħajra~63|Żabbar~64|Żebbuġ Għawde~65|Żebbuġ Malta~66|Żejtun~67|Żurrieq~68"], ["Marshall Islands", "MH", "Ailinglaplap~ALL|Ailuk~ALK|Arno~ARN|Aur~AUR|Bikini and Kili~KIL|Ebon~EBO|Jabat~JAB|Jaluit~JAL|Kwajalein~KWA|Lae~LAE|Lib~LIB|Likiep~LIK|Majuro~MAJ|Maloelap~MAL|Mejit~MEJ|Namdrik~NMK|Namu~NMU|Rongelap~RON|Ujae~UJA|Utrik~UTI|Wotho~WTH|Wotje~WTJ"], ["Martinique", "MQ", "Martinique~undefined"], ["Mauritania", "MR", "Adrar~07|Assaba~03|Brakna~05|Dakhlet Nouadhibou~08|Gorgol~04|Guidimaka~10|Hodh Ech Chargui~01|Hodh El Gharbi~02|Inchiri~12|Nouakchott Nord~14|Nouakchott Ouest~13|Nouakchott Sud~15|Tagant~09|Tiris Zemmour~11|Trarza~06"], ["Mauritius", "MU", "Agalega Islands~AG|Beau Bassin-Rose Hill~BR|Black River~BL|Cargados Carajos Shoals~CC|Curepipe~CU|Flacq~FL|Grand Port~GP|Moka~MO|Pamplemousses~PA|Plaines Wilhems~PW|Port Louis (City)~PU|Port Louis~PL|Riviere du Rempart~RR|Rodrigues Island~RO|Savanne~SA|Vacoas-Phoenix~CP"], ["Mayotte", "YT", "Dzaoudzi~01|Pamandzi~02|Mamoudzou~03|Dembeni~04|Bandrélé~05|Kani-Kéli~06|Bouéni~07|Chirongui~08|Sada~09|Ouangani~10|Chiconi~11|Tsingoni~12|M'Tsangamouji~13|Acoua~14|Mtsamboro~15|Bandraboua~16|Koungou~17"], ["Mexico", "MX", "Aguascalientes~AGU|Baja California~BCN|Baja California Sur~BCS|Campeche~CAM|Ciudad de México~CMX|Chiapas~CHP|Chihuahua~CHH|Coahuila de Zaragoza~COA|Colima~COL|Durango~DUR|Estado de México~MEX|Guanajuato~GUA|Guerrero~GRO|Hidalgo~HID|Jalisco~JAL|Michoacán de Ocampo~MIC|Morelos~MOR|Nayarit~NAY|Nuevo León~NLE|Oaxaca~OAX|Puebla~PUE|Querétaro de Arteaga~QUE|Quintana Roo~ROO|San Luis Potosí~SLP|Sinaloa~SIN|Sonora~SON|Tabasco~TAB|Tamaulipas~TAM|Tlaxcala~TLA|Veracruz~VER|Yucatán~YUC|Zacatecas~ZAC"], ["Micronesia, Federated States of", "FM", "Chuuk (Truk)~TRK|Kosrae~KSA|Pohnpei~PNI|Yap~YAP"], ["Moldova", "MD", "Aenii Noi~AN|Basarabeasca~BS|Bălți~BA|Bender~BD|Briceni~BR|Cahul~CA|Cantemir~CT|Călărași~CL|Căușeni~CS|Chișinău~CU|Cimișlia~CM|Criuleni~CR|Dondușeni~DO|Drochia~DR|Dubăsari~DU|Edineț~ED|Fălești~FA|Florești~FL|Găgăuzia~GA|Glodeni~GL|Hîncești~HI|Ialoveni~IA|Leova~LE|Nisporeni~NI|Ocnița~OC|Orhei~OR|Rezina~RE|Rîșcani~RI|Sîngerei~SI|Soroca~SO|Stânga Nistrului~SN|Strășeni~ST|Șoldănești~SD|Ștefan Vodă~SV|Taraclia~TA|Telenești~TE|Ungheni~UN"], ["Monaco", "MC", "Colle~CL|Condamine~CO|Fontvieille~FO|Gare~GA|Jardin Exotique~JE|Larvotto~LA|Malbousquet~MA|Monaco-Ville~MO|Moneghetti~MG|Monte-Carlo~MC|Moulins~MU|Port-Hercule~PH|Saint-Roman~SR|Sainte-Dévote~SD|Source~SO|Spélugues~SP|Vallon de la Rousse~VR"], ["Mongolia", "MN", "Arhangay~073|Bayan-Olgiy~071|Bayanhongor~069|Bulgan~067|Darhan~037|Dornod~061|Dornogovi~063|Dundgovi~059|Dzavhan~057|Govi-Altay~065|Govi-Sumber~064|Hovd~043|Hovsgol~041|Omnogovi~053|Ovorhangay~055|Selenge~049|Suhbaatar~051|Tov~047|Ulaanbaatar~1|Uvs~046|Erdenet~074"], ["Montenegro", "ME", "Andrijevica~01|Bar~02|Berane~03|Bijelo Polje~04|Budva~05|Cetinje~06|Danilovgrad~07|Gusinje~22|Herceg Novi~08|Kolašin~09|Kotor~10|Mojkovac~11|Nikšić~12|Petnica~23|Plav~13|Plužine~14|Pljevlja~15|Podgorica~16|Rožaje~17|Šavnik~18|Tivat~19|Ulcinj~20|Žabljak~21"], ["Montserrat", "MS", "Saint Anthony~undefined|Saint Georges~undefined|Saint Peter's~undefined"], ["Morocco", "MA", "Tanger-Tétouan-Al Hoceïma~MA-01|L'Oriental~MA-02|Fès-Meknès~MA-03|Rabat-Salé-Kénitra~MA-04|Béni Mellal-Khénifra~MA-05|Casablanca-Settat~MA-06|Marrakech-Safi~MA-07|Drâa-Tafilalet~MA-08|Souss-Massa~MA-09|Guelmim-Oued Noun~MA-10|Laâyoune-Sakia El Hamra~MA-11|Dakhla-Oued Ed-Dahab~MA-12"], ["Mozambique", "MZ", "Cabo Delgado~P|Gaza~G|Inhambane~I|Manica~B|Maputo~L|Maputo (City)~MPM|Nampula~N|Niassa~A|Sofala~S|Tete~T|Zambezia~Q"], ["Myanmar", "MM", "Ayeyarwady~07|Bago~02|Chin~14|Kachin~11|Kayah~12|Kayin~13|Magway~03|Mandalay~04|Mon~15|Nay Pyi Taw~18|Rakhine~16|Sagaing~01|Shan~17|Tanintharyi~05|Yangon~06"], ["Namibia", "NA", "Erongo~ER|Hardap~HA|Kavango East~KE|Kavango West~KW|Karas~KA|Khomas~KH|Kunene~KU|Ohangwena~OW|Omaheke~OH|Omusati~OS|Oshana~ON|Oshikoto~OT|Otjozondjupa~OD|Zambezi~CA"], ["Nauru", "NR", "Aiwo~01|Anabar~02|Anetan~03|Anibare~04|Baiti~05|Boe~06|Buada~07|Denigomodu~08|Ewa~09|Ijuw~10|Meneng~11|Nibok~12|Uaboe~13|Yaren~14"], ["Nepal", "NP", "Province No. 1~1|Madhesh Province~2|Bagmati Province~3|Gandaki Province~4|Lumbini Province~5|Karnali Province~6|Sudurpashchim Province~7"], ["Netherlands", "NL", "Drenthe~DR|Flevoland~FL|Friesland~FR|Gelderland~GE|Groningen~GR|Limburg~LI|Noord-Brabant~NB|Noord-Holland~NH|Overijssel~OV|Utrecht~UT|Zeeland~ZE|Zuid-Holland~ZH"], ["New Caledonia", "NC", "Iles Loyaute~undefined|Nord~undefined|Sud~undefined"], ["New Zealand", "NZ", "Auckland~AUK|Bay of Plenty~BOP|Canterbury~CAN|Gisborne~GIS|Hawke's Bay~HKB|Marlborough~MBH|Manawatu-Wanganui~MWT|Northland~NTL|Nelson~NSN|Otago~OTA|Southland~STL|Taranaki~TKI|Tasman~TAS|Waikato~WKO|Wellington~WGN|West Coast~WTC|Chatham Islands Territory~CIT"], ["Nicaragua", "NI", "Boaco~BO|Carazo~CA|Chinandega~CI|Chontales~CO|Estelí~ES|Granada~GR|Jinotega~JI|León~LE|Madriz~MD|Managua~MN|Masaya~MS|Matagalpa~MT|Nueva Segovia~NS|Río San Juan~SJ|Rivas~RI|Atlántico Norte~AN|Atlántico Sur~AS"], ["Niger", "NE", "Agadez~1|Diffa~2|Dosso~3|Maradi~4|Niamey~8|Tahoua~5|Tillabéri~6|Zinder~7"], ["Nigeria", "NG", "Abia~AB|Abuja Federal Capital Territory~FC|Adamawa~AD|Akwa Ibom~AK|Anambra~AN|Bauchi~BA|Bayelsa~BY|Benue~BE|Borno~BO|Cross River~CR|Delta~DE|Ebonyi~EB|Edo~ED|Ekiti~EK|Enugu~EN|Gombe~GO|Imo~IM|Jigawa~JI|Kaduna~KD|Kano~KN|Katsina~KT|Kebbi~KE|Kogi~KO|Kwara~KW|Lagos~LA|Nassarawa~NA|Niger~NI|Ogun~OG|Ondo~ON|Osun~OS|Oyo~OY|Plateau~PL|Rivers~RI|Sokoto~SO|Taraba~TA|Yobe~YO|Zamfara~ZA"], ["Niue", "NU", "Niue~undefined"], ["Norfolk Island", "NF", "Norfolk Island~undefined"], ["Northern Mariana Islands", "MP", "Northern Islands~undefined|Rota~undefined|Saipan~undefined|Tinian~undefined"], ["Norway", "NO", "Akershus~02|Aust-Agder~09|Buskerud~06|Finnmark~20|Hedmark~04|Hordaland~12|Møre og Romsdal~15|Nordland~18|Nord-Trøndelag~17|Oppland~05|Oslo~03|Rogaland~11|Sogn og Fjordane~14|Sør-Trøndelag~16|Telemark~08|Troms~19|Vest-Agder~10|Vestfold~07|Østfold~01|Jan Mayen~22|Svalbard~21"], ["Oman", "OM", "Ad Dakhiliyah~DA|Al Buraymi~BU|Al Wusta~WU|Az Zahirah~ZA|Janub al Batinah~BS|Janub ash Sharqiyah~SS|Masqat~MA|Musandam~MU|Shamal al Batinah~BJ|Shamal ash Sharqiyah~SJ|Zufar~ZU"], ["Pakistan", "PK", "Āzād Kashmīr~JK|Balōchistān~BA|Gilgit-Baltistān~GB|Islāmābād~IS|Khaībar Pakhtūnkhwās~KP|Punjāb~PB|Sindh~SD|Federally Administered Tribal Areas~TA"], ["Palau", "PW", "Aimeliik~002|Airai~004|Angaur~010|Hatobohei~050|Kayangel~100|Koror~150|Melekeok~212|Ngaraard~214|Ngarchelong~218|Ngardmau~222|Ngatpang~224|Ngchesar~226|Ngeremlengui~227|Ngiwal~228|Peleliu~350|Sonsoral~370"], ["Palestine, State of", "PS", "Ak Khalīl~HBN|Al Quds~JEM|Arīḩā wal Aghwār~JRH|Bayt Laḩm~BTH|Dayr al Balaḩ~DEB|Ghazzah~GZA|Janīn~JEN|Khān Yūnis~KYS|Nāblus~NBS|Qalqīyah~QQA|Rafaḩ~RFH|Rām Allāh wal Bīrah~RBH|Salfīt~SLT|Shamāl Ghazzah~NGZ|Ţūbās~TBS|Ţūlkarm~TKM"], ["Panama", "PA", "Bocas del Toro~1|Chiriquí~4|Coclé~2|Colón~3|Darién~5|Emberá~EM|Herrera~6|Kuna Yala~KY|Los Santos~7|Ngäbe-Buglé~NB|Panamá~8|Panamá Oeste~10|Veraguas~9"], ["Papua New Guinea", "PG", "Bougainville~NSB|Central~CPM|Chimbu~CPK|East New Britain~EBR|East Sepik~ESW|Eastern Highlands~EHG|Enga~EPW|Gulf~GPK|Hela~HLA|Jiwaka~JWK|Madang~MOM|Manus~MRL|Milne Bay~MBA|Morobe~MPL|Port Moresby~NCD|New Ireland~NIK|Northern~NPP|Southern Highlands~SHM|West New Britain~WBK|West Sepik~SAN|Western~WPD|Western Highlands~WHM"], ["Paraguay", "PY", "Alto Paraguay~16|Alto Parana~10|Amambay~13|Asuncion~ASU|Caaguazu~5|Caazapa~6|Canindeyu~14|Central~11|Concepcion~1|Cordillera~3|Boqueron~17|Guaira~4|Itapua~7|Misiones~8|Neembucu~12|Paraguari~9|Presidente Hayes~15|San Pedro~2"], ["Peru", "PE", "Amazonas~AMA|Ancash~ANC|Apurimac~APU|Arequipa~ARE|Ayacucho~AYA|Cajamarca~CAJ|Callao~CAL|Cusco~CUS|Huancavelica~HUV|Huanuco~HUC|Ica~ICA|Junin~JUN|La Libertad~LAL|Lambayeque~LAM|Lima~LIM|Loreto~LOR|Madre de Dios~MDD|Moquegua~MOQ|Municipalidad Metropolitana de Lima~LMA|Pasco~PAS|Piura~PIU|Puno~PUN|San Martin~SAM|Tacna~TAC|Tumbes~TUM|Ucayali~UCA"], ["Philippines", "PH", "Abra~ABR|Agusan del Norte~AGN|Agusan del Sur~AGS|Aklan~AKL|Albay~ALB|Antique~ANT|Apayao~APA|Aurora~AUR|Basilan~BAS|Bataan~BAN|Batanes~BTN|Batangas~BTG|Benguet~BEN|Biliran~BIL|Bohol~BOH|Bukidnon~BUK|Bulacan~BUL|Cagayan~CAG|Camarines Norte~CAN|Camarines Sur~CAS|Camiguin~CAM|Capiz~CAP|Catanduanes~CAT|Cavite~CAV|Cebu~CEB|Cotabato~NCO|Davao del Norte~DAV|Davao del Sur~DAS|Davao Occidental~DVO|Davao Oriental~DAO|Davao de Oro~COM|Dinagat Islands~DIN|Eastern Samar~EAS|Guimaras~GUI|Ifugao~IFU|Ilocos Norte~ILN|Ilocos Sur~ILS|Iloilo~ILI|Isabela~ISA|Kalinga~KAL|La Union~LUN|Laguna~LAG|Lanao del Norte~LAN|Lanao del Sur~LAS|Leyte~LEY|Maguindanao~MAG|Marinduque~MAD|Masbate~MAS|Metro Manila~00|Mindoro Occidental~MDC|Mindoro Oriental~MDR|Misamis Occidental~MSC|Misamis Oriental~MSR|Mountain Province~MOU|Negros Occidental~NEC|Negros Oriental~NER|Northern Samar~NSA|Nueva Ecija~NUE|Nueva Vizcaya~NUV|Palawan~PLW|Pampanga~PAM|Pangasinan~PAN|Quezon~QUE|Quirino~QUI|Rizal~RIZ|Romblon~ROM|Samar~WSA|Sarangani~SAR|Siquijor~SIG|Sorsogon~SOR|South Cotabato~SCO|Southern Leyte~SLE|Sultan Kudarat~AUK|Sulu~SLU|Surigao del Norte~SUN|Surigao del Sur~SUR|Tarlac~TAR|Tawi-Tawi~TAW|Zambales~ZMB|Zamboanga del Norte~ZAN|Zamboanga del Sur~ZAS|Zamboanga Sibugay~ZSI"], ["Pitcairn", "PN", "Pitcairn Islands~undefined"], ["Poland", "PL", "Dolnośląskie~02|Kujawsko-pomorskie~04|Łódzkie~10|Lubelskie~06|Lubuskie~08|Małopolskie~12|Mazowieckie~14|Opolskie~16|Podkarpackie~18|Podlaskie~20|Pomorskie~22|Śląskie~24|Świętokrzyskie~26|Warmińsko-mazurskie~28|Wielkopolskie~30|Zachodniopomorskie~32"], ["Portugal", "PT", "Açores~20|Aveiro~01|Beja~02|Braga~03|Bragança~04|Castelo Branco~05|Coimbra~06|Évora~07|Faro~08|Guarda~09|Leiria~10|Lisboa~11|Madeira~30|Portalegre~12|Porto~13|Santarém~14|Setúbal~15|Viana do Castelo~16|Vila Real~17|Viseu~18"], ["Puerto Rico", "PR", "Adjuntas~undefined|Aguada~undefined|Aguadilla~undefined|Aguas Buenas~undefined|Aibonito~undefined|Anasco~undefined|Arecibo~undefined|Arroyo~undefined|Barceloneta~undefined|Barranquitas~undefined|Bayamon~undefined|Cabo Rojo~undefined|Caguas~undefined|Camuy~undefined|Canovanas~undefined|Carolina~undefined|Cat~undefined|Ceiba~undefined|Ciales~undefined|Cidra~undefined|Coamo~undefined|Comerio~undefined|Corozal~undefined|Culebra~undefined|Dorado~undefined|Fajardo~undefined|Florida~undefined|Guanica~undefined|Guayama~undefined|Guayanilla~undefined|Guaynabo~undefined|Gurabo~undefined|Hatillo~undefined|Hormigueros~undefined|Humacao~undefined|Isabe~undefined|Juana Diaz~undefined|Juncos~undefined|Lajas~undefined|Lares~undefined|Las Marias~undefined|Las oiza~undefined|Luquillo~undefined|Manati~undefined|Maricao~undefined|Maunabo~undefined|Mayaguez~undefined|Moca~undefined|Morovis~undefined|Naguabo~undefined|Naranjito~undefined|Orocovis~undefined|Patillas~undefined|Penuelas~undefined|Ponce~undefined|Quebradillas~undefined|Rincon~undefined|Rio Grande~undefined|Sabana linas~undefined|San German~undefined|San Juan~undefined|San Lorenzo~undefined|San Sebastian~undefined|Santa Isabel~undefined|Toa Alta~undefined|Toa Baja~undefined|Trujillo Alto~undefined|Utuado~undefined|Vega Alta~undefined|Vega ues~undefined|Villalba~undefined|Yabucoa~undefined|Yauco~undefined"], ["Qatar", "QA", "Ad Dawḩah~DA|Al Khawr wa adh Dhakhīrah~KH|Al Wakrah~WA|Ar Rayyān~RA|Ash Shamāl~MS|Az̧ Za̧`āyin~ZA|Umm Şalāl~US"], ["Réunion", "RE", "Réunion~undefined"], ["Romania", "RO", "Alba~AB|Arad~AR|Arges~AG|Bacau~BC|Bihor~BH|Bistrita-Nasaud~BN|Botosani~BT|Braila~BR|Brasov~BV|Iifov~B|Buzau~BZ|Calarasi~CL|Caras-Severin~CS|Cluj~CJ|Constanta~CT|Covasna~CV|Dambovita~DB|Dolj~DJ|Galati~GL|Giurgiu~GR|Gorj~GJ|Harghita~HR|Hunedoara~HD|Ialomita~IL|Iasi~IS|Maramures~MM|Mehedinti~MH|Mures~MS|Neamt~NT|Olt~OT|Prahova~PH|Salaj~SJ|Satu Mare~SM|Sibiu~SB|Suceava~SV|Teleorman~TR|Timis~TM|Tulcea~TL|Valcea~VL|Vaslui~VS|Vrancea~VN"], ["Russian Federation", "RU", "Republic of Adygea~AD|Republic of Altai (Gorno-Altaysk)~AL|Altai Krai~ALT|Amur Oblast~AMU|Arkhangelsk Oblast~ARK|Astrakhan Oblast~AST|Republic of Bashkortostan~BA|Belgorod Oblast~BEL|Bryansk Oblast~BRY|Republic of Buryatia~BU|Chechen Republic~CE|Chelyabinsk Oblast~CHE|Chukotka Autonomous Okrug~CHU|Chuvash Republic~CU|Republic of Dagestan~DA|Republic of Ingushetia~IN|Irkutsk Oblast~IRK|Ivanovo Oblast~IVA|Jewish Autonomous Oblast~JEW|Kabardino-Balkar Republic~KB|Kaliningrad Oblast~KLN|Republic of Kalmykia~KL|Kaluga Oblast~KLU|Kamchatka Krai~KAM|Karachay-Cherkess Republic~KC|Republic of Karelia~KR|Khabarovsk Krai~KHA|Republic of Khakassia~KK|Khanty-Mansi Autonomous Okrug - Yugra~KHM|Kemerovo Oblast~KEM|Kirov Oblast~KIR|Komi Republic~KO|Kostroma Oblast~KOS|Krasnodar Krai~KDA|Krasnoyarsk Krai~KYA|Kurgan Oblast~KGN|Kursk Oblast~KRS|Leningrad Oblast~LEN|Lipetsk Oblast~LIP|Magadan Oblast~MAG|Mari El Republic~ME|Republic of Mordovia~MO|Moscow Oblast~MOS|Moscow~MOW|Murmansk Oblast~MU|Nenets Autonomous Okrug~NEN|Nizhny Novgorod Oblast~NIZ|Novgorod Oblast~NGR|Novosibirsk Oblast~NVS|Omsk Oblast~OMS|Orenburg Oblast~ORE|Oryol Oblast~ORL|Penza Oblast~PNZ|Perm Krai~PER|Primorsky Krai~PRI|Pskov Oblast~PSK|Rostov Oblast~ROS|Ryazan Oblast~RYA|Saint Petersburg~SPE|Sakha (Yakutia) Republic~SA|Sakhalin Oblast~SAK|Samara Oblast~SAM|Saratov Oblast~SAR|Republic of North Ossetia-Alania~NOA|Smolensk Oblast~SMO|Stavropol Krai~STA|Sverdlovsk Oblast~SVE|Tambov Oblast~TAM|Republic of Tatarstan~TA|Tomsk Oblast~TOM|Tuva Republic~TU|Tula Oblast~TUL|Tver Oblast~TVE|Tyumen Oblast~TYU|Udmurt Republic~UD|Ulyanovsk Oblast~ULY|Vladimir Oblast~VLA|Volgograd Oblast~VGG|Vologda Oblast~VLG|Voronezh Oblast~VOR|Yamalo-Nenets Autonomous Okrug~YAN|Yaroslavl Oblast~YAR|Zabaykalsky Krai~ZAB"], ["Rwanda", "RW", "Kigali~01|Eastern~02|Northern~03|Western~04|Southern~05"], ["Saint Barthélemy", "BL", "Au Vent~02|Sous le Vent~01"], ["Saint Helena, Ascension and Tristan da Cunha", "SH", "Ascension~AC|Saint Helena~HL|Tristan da Cunha~TA"], ["Saint Kitts and Nevis", "KN", "Saint Kitts~K|Nevis~N"], ["Saint Lucia", "LC", "Anse-la-Raye~01|Canaries~12|Castries~02|Choiseul~03|Dennery~05|Gros Islet~06|Laborie~07|Micoud~08|Soufriere~10|Vieux Fort~11"], ["Saint Martin", "MF", "Saint Martin~undefined"], ["Saint Pierre and Miquelon", "PM", "Miquelon~undefined|Saint Pierre~undefined"], ["Saint Vincent and the Grenadines", "VC", "Charlotte~01|Grenadines~06|Saint Andrew~02|Saint David~03|Saint George~04|Saint Patrick~05"], ["Samoa", "WS", "A'ana~AA|Aiga-i-le-Tai~AL|Atua~AT|Fa'asaleleaga~FA|Gaga'emauga~GE|Gagaifomauga~GI|Palauli~PA|Satupa'itea~SA|Tuamasaga~TU|Va'a-o-Fonoti~VF|Vaisigano~VS"], ["San Marino", "SM", "Acquaviva~01|Borgo Maggiore~06|Chiesanuova~02|Domagnano~03|Faetano~04|Fiorentino~05|Montegiardino~08|San Marino~07|Serravalle~09"], ["Sao Tome and Principe", "ST", "Principe~P|Sao Tome~S"], ["Saudi Arabia", "SA", "'Asir~14|Al Bahah~11|Al Hudud ash Shamaliyah~08|Al Jawf~12|Al Madinah al Munawwarah~03|Al Qasim~05|Ar Riyad~01|Ash Sharqiyah~04|Ha'il~06|Jazan~09|Makkah al Mukarramah~02|Najran~10|Tabuk~07"], ["Senegal", "SN", "Dakar~DK|Diourbel~DB|Fatick~FK|Kaffrine~KA|Kaolack~KL|Kedougou~KE|Kolda~KD|Louga~LG|Matam~MT|Saint-Louis~SL|Sedhiou~SE|Tambacounda~TC|Thies~TH|Ziguinchor~ZG"], ["Serbia", "RS", "Beograd (Belgrade)~00|Borski~14|Braničevski~11|Jablanički~23|Južnobački~06|Južnobanatski~04|Kolubarski~09|Kosovski~25|Kosovsko-Mitrovački~28|Kosovsko-Pomoravski~29|Mačvanski~08|Moravički~17|Nišavski~20|Pčinjski~24|Pećki~26|Pirotski~22|Podunavski~10|Pomoravski~13|Prizrenski~27|Rasinski~19|Raški~18|Severnobački~01|Severnobanatski~03|Srednjebanatski~02|Sremski~07|Šumadijski~12|Toplički~21|Zaječarski~15|Zapadnobački~05|Zlatiborski~16"], ["Seychelles", "SC", "Anse aux Pins~01|Anse Boileau~02|Anse Etoile~03|Anse Royale~05|Anu Cap~04|Baie Lazare~06|Baie Sainte Anne~07|Beau Vallon~08|Bel Air~09|Bel Ombre~10|Cascade~11|Glacis~12|Grand'Anse Mahe~13|Grand'Anse Praslin~14|La Digue~15|La Riviere Anglaise~16|Les Mamelles~24|Mont Buxton~17|Mont Fleuri~18|Plaisance~19|Pointe La Rue~20|Port Glaud~21|Roche Caiman~25|Saint Louis~22|Takamaka~23"], ["Sierra Leone", "SL", "Eastern~E|Northern~N|Southern~S|Western~W"], ["Singapore", "SG", "Central Singapore~01|North East~02|North West~03|South East~04|South West~05"], ["Sint Maarten (Dutch part)", "SX", "Sint Maarten~undefined"], ["Slovakia", "SK", "Banskobystricky~BC|Bratislavsky~BL|Kosicky~KI|Nitriansky~NI|Presovsky~PV|Trenciansky~TC|Trnavsky~TA|Zilinsky~ZI"], ["Slovenia", "SI", "Ajdovscina~001|Apace~195|Beltinci~002|Benedikt~148|Bistrica ob Sotli~149|Bled~003|Bloke~150|Bohinj~004|Borovnica~005|Bovec~006|Braslovce~151|Brda~007|Brezice~009|Brezovica~008|Cankova~152|Celje~011|Cerklje na Gorenjskem~012|Cerknica~013|Cerkno~014|Cerkvenjak~153|Cirkulane~196|Crensovci~015|Crna na Koroskem~016|Crnomelj~017|Destrnik~018|Divaca~019|Dobje~154|Dobrepolje~020|Dobrna~155|Dobrova-Polhov Gradec~021|Dobrovnik~156|Dol pri Ljubljani~022|Dolenjske Toplice~157|Domzale~023|Dornava~024|Dravograd~025|Duplek~026|Gorenja Vas-Poljane~027|Gorisnica~028|Gorje~207|Gornja Radgona~029|Gornji Grad~030|Gornji Petrovci~031|Grad~158|Grosuplje~032|Hajdina~159|Hoce-Slivnica~160|Hodos~161|Horjul~162|Hrastnik~034|Hrpelje-Kozina~035|Idrija~036|Ig~037|Ilirska Bistrica~038|Ivancna Gorica~039|Izola~040|Jesenice~041|Jursinci~042|Kamnik~043|Kanal~044|Kidricevo~045|Kobarid~046|Kobilje~047|Kocevje~048|Komen~049|Komenda~164|Koper~050|Kodanjevica na Krki~197|Kostel~165|Kozje~051|Kranj~052|Kranjska Gora~053|Krizevci~166|Krsko~054|Kungota~055|Kuzma~056|Lasko~057|Lenart~058|Lendava~059|Litija~060|Ljubljana~061|Ljubno~062|Ljutomer~063|Log-Dragomer~208|Logatec~064|Loska Dolina~065|Loski Potok~066|Lovrenc na Pohorju~167|Lukovica~068|Luce~067|Majsperk~069|Makole~198|Maribor~070|Markovci~168|Medvode~071|Menges~072|Metlika~073|Mezica~074|Miklavz na Dravskem Polju~169|Miren-Kostanjevica~075|Mirna~212|Mirna Pec~170|Mislinja~076|Mokronog-Trebelno~199|Moravce~077|Moravske Toplice~078|Mozirje~079|Murska Sobota~080|Naklo~082|Nazarje~083|Nova Gorica~084|Novo Mesto~085|Odranci~086|Ormoz~087|Osilnica~088|Pesnica~089|Piran~090|Pivka~091|Podcetrtek~092|Podlehnik~172|Podvelka~093|Poljcane~200|Postojna~094|Prebold~174|Preddvor~095|Prevalje~175|Ptuj~096|Race-Fram~098|Radece~099|Radenci~100|Radlje ob Dravi~101|Radovljica~102|Ravne na Koroskem~103|Razkrizje~176|Recica ob Savinji~209|Rence-Vogrsko~201|Ribnica~104|Ribnica na Poboriu~177|Rogaska Slatina~106|Rogasovci~105|Rogatec~107|Ruse~108|Salovci~033|Selnica ob Dravi~178|Semic~109|Sempeter-Vrtojba~183|Sencur~117|Sentilj~118|Sentjernej~119|Sentjur~120|Sentrupert~211|Sevnica~110|Sezana~111|Skocjan~121|Skofja Loka~122|Skofljica~123|Slovenj Gradec~112|Slovenska Bistrica~113|Slovenske Konjice~114|Smarje pri elsah~124|Smarjeske Toplice~206|Smartno ob Paki~125|Smartno pri Litiji~194|Sodrazica~179|Solcava~180|Sostanj~126|Sredisce ob Dravi~202|Starse~115|Store~127|Straza~203|Sveta Ana~181|Sveta Trojica v Slovenskih Goricah~204|Sveta Andraz v Slovenskih Goricah~182|Sveti Jurij~116|Sveti Jurij v Slovenskih Goricah~210|Sveti Tomaz~205|Tabor~184|Tisina~010|Tolmin~128|Trbovlje~129|Trebnje~130|Trnovska Vas~185|Trzin~186|Trzic~131|Turnisce~132|Velenje~133|Velika Polana~187|Velike Lasce~134|Verzej~188|Videm~135|Vipava~136|Vitanje~137|Vodice~138|Vojnik~139|Vransko~189|Vrhnika~140|Vuzenica~141|Zagorje ob Savi~142|Zavrc~143|Zrece~144|Zalec~190|Zelezniki~146|Zetale~191|Ziri~147|Zirovnica~192|Zuzemberk~193"], ["Solomon Islands", "SB", "Central~CE|Choiseul~CH|Guadalcanal~GU|Honiara~CT|Isabel~IS|Makira-Ulawa~MK|Malaita~ML|Rennell and Bellona~RB|Temotu~TE|Western~WE"], ["Somalia", "SO", "Awdal~AW|Bakool~BK|Banaadir~BN|Bari~BR|Bay~BY|Galguduud~GA|Gedo~GE|Hiiraan~HI|Jubbada Dhexe~JD|Jubbada Hoose~JH|Mudug~MU|Nugaal~NU|Sanaag~SA|Shabeellaha Dhexe~SD|Shabeellaha Hoose~SH|Sool~SO|Togdheer~TO|Woqooyi Galbeed~WO"], ["South Africa", "ZA", "Eastern Cape~EC|Free State~FS|Gauteng~GT|KwaZulu-Natal~NL|Limpopo~LP|Mpumalanga~MP|Northern Cape~NC|North West~NW|Western Cape~WC"], ["South Georgia and South Sandwich Islands", "GS", "Bird Island~undefined|Bristol Island~undefined|Clerke Rocks~undefined|Montagu Island~undefined|Saunders Island~undefined|South Georgia~undefined|Southern Thule~undefined|Traversay Islands~undefined"], ["South Sudan", "SS", "Central Equatoria~CE|Eastern Equatoria~EE|Jonglei~JG|Lakes~LK|Northern Bahr el Ghazal~BN|Unity~UY|Upper Nile~NU|Warrap~WR|Western Bahr el Ghazal~BW|Western Equatoria~EW"], ["Spain", "ES", "Albacete~AB|Alicante~A|Almería~AN|Araba/Álava~VI|Asturias~O|Ávila~AV|Badajoz~BA|Barcelona~B|Bizkaia~BI|Burgos~BU|Cáceres~CC|Cádiz~CA|Cantabria~S|Castellón/Castelló~CS|Ceuta~CE|Ciudad Real~CR|Córdoba~CO|A Coruña~C|Cuenca~CU|Gipuzkoa~SS|Girona~GI|Granada~GR|Guadalajara~GU|Huelva~H|Huesca~HU|Illes Balears~PM|Jaén~J|León~LE|Lleida~L|Lugo~LU|Madrid~M|Málaga~MA|Melilla~ML|Murcia~MU|Navarra/Nafarroa~NA|Ourense~OR|Palencia~P|Las Palmas~GC|Pontevedra~PO|La Rioja~LO|Salamanca~SA|Santa Cruz de Tenerife~TF|Segovia~SG|Sevilla~SE|Soria~SO|Tarragona~T|Teruel~TE|Toledo~TO|Valencia/València~V|Valladolid~VA|Zamora~ZA|Zaragoza~Z"], ["Sri Lanka", "LK", "Basnahira~1|Dakunu~3|Madhyama~2|Naegenahira~5|Sabaragamuwa~9|Uturu~4|Uturumaeda~7|Vayamba~6|Uva~8"], ["Sudan", "SD", "Al Bahr al Ahmar~RS|Al Jazirah~GZ|Al Khartum~KH|Al Qadarif~GD|An Nil al Abyad~NW|An Nil al Azraq~NB|Ash Shamaliyah~NO|Gharb Darfur~DW|Gharb Kurdufan~GK|Janub Darfur~DS|Janub Kurdufan~KS|Kassala~KA|Nahr an Nil~NR|Shamal Darfur~DN|Sharq Darfur~DE|Shiamal Kurdufan~KN|Sinnar~SI|Wasat Darfur Zalinjay~DC"], ["Suriname", "SR", "Brokopondo~BR|Commewijne~CM|Coronie~CR|Marowijne~MA|Nickerie~NI|Para~PR|Paramaribo~PM|Saramacca~SA|Sipaliwini~SI|Wanica~WA"], ["Eswatini", "SZ", "Hhohho~HH|Lubombo~LU|Manzini~MA|Shiselweni~SH"], ["Sweden", "SE", "Blekinge~K|Dalarna~W|Gävleborg~X|Gotland~I|Halland~N|Jämtland~Z|Jönköping~F|Kalmar~H|Kronoberg~G|Norrbotten~BD|Örebro~T|Östergötland~E|Skåne~M|Södermanland~D|Stockholm~AB|Uppsala~C|Värmland~S|Västerbotten~AC|Västernorrland~Y|Västmanland~U|Västra Götaland~O"], ["Switzerland", "CH", "Aargau~AG|Appenzell Ausserrhoden~AR|Appenzell Innerhoden~AI|Basel-Landschaft~BL|Basel-Stadt~BS|Bern~BE|Fribourg~FR|Genève~GE|Glarus~GL|Graubünden~GR|Jura~JU|Luzern~LU|Neuchâtel~NE|Nidwalden~NW|Obwalden~OW|Sankt Gallen~SG|Schaffhausen~SH|Schwyz~SZ|Solothurn~SO|Thurgau~TG|Ticino~TI|Uri~UR|Valais~VS|Vaud~VD|Zug~ZG|Zürich~ZH"], ["Syrian Arab Republic", "SY", "Al Hasakah~HA|Al Ladhiqiyah~LA|Al Qunaytirah~QU|Ar Raqqah~RA|As Suwayda'~SU|Dar'a~DR|Dayr az Zawr~DY|Dimashq~DI|Halab~HL|Hamah~HM|Hims~HI|Idlib~ID|Rif Dimashq~RD|Tartus~TA"], ["Taiwan", "TW", "Changhua~CHA|Chiayi~CYQ|Hsinchu~HSQ|Hualien~HUA|Kaohsiung~KHH|Keelung~KEE|Kinmen~KIN|Lienchiang~LIE|Miaoli~MIA|Nantou~NAN|Penghu~PEN|New Taipei~NWT|Pingtung~PIF|Taichung~TXG|Tainan~TNN|Taipei~TPE|Taitung~TTT|Taoyuan~TAO|Yilan~ILA|Yunlin~YUN"], ["Tajikistan", "TJ", "Dushanbe~DU|Kŭhistoni Badakhshon~GB|Khatlon~KT|Sughd~SU"], ["Tanzania, United Republic of", "TZ", "Arusha~01|Coast~19|Dar es Salaam~02|Dodoma~03|Iringa~04|Kagera~05|Kigoma~08|Kilimanjaro~09|Lindi~12|Manyara~26|Mara~13|Mbeya~14|Morogoro~16|Mtwara~17|Mwanza~18|Pemba North~06|Pemba South~10|Rukwa~20|Ruvuma~21|Shinyanga~22|Singida~23|Tabora~24|Tanga~25|Zanzibar North~07|Zanzibar Central/South~11|Zanzibar Urban/West~15"], ["Thailand", "TH", "Amnat Charoen~37|Ang Thong~15|Bueng Kan~38|Buri Ram~31|Chachoengsao~24|Chai Nat~18|Chaiyaphum~36|Chanthaburi~22|Chiang Mai~50|Chiang Rai~57|Chon Buri~20|Chumphon~86|Kalasin~46|Kamphaeng Phet~62|Kanchanaburi~71|Khon Kaen~40|Krabi~81|Krung Thep Mahanakhon (Bangkok)~10|Lampang~52|Lamphun~51|Loei~42|Lop Buri~16|Mae Hong Son~58|Maha Sarakham~44|Mukdahan~49|Nakhon Nayok~26|Nakhon Phathom~73|Nakhon Phanom~48|Nakhon Ratchasima~30|Nakhon Sawan~60|Nakhon Si Thammarat~80|Nan~55|Narathiwat~96|Nong Bua Lam Phu~39|Nong Khai~43|Nonthaburi~12|Pathum Thani~13|Pattani~94|Phangnga~82|Phatthalung~93|Phayao~56|Phetchabun~67|Phetchaburi~76|Phichit~66|Phitsanulok~65|Phra Nakhon Si Ayutthaya~14|Phrae~54|Phuket~83|Prachin Buri~25|Prachuap Khiri Khan~77|Ranong~85|Ratchaburi~70|Rayong~21|Roi Et~45|Sa Kaeo~27|Sakon Nakhon~47|Samut Prakan~11|Samut Sakhon~74|Samut Songkhram~75|Saraburi~19|Satun~91|Sing Buri~17|Si Sa ket~33|Songkhla~90|Sukhothai~64|Suphan Buri~72|Surat Thani~84|Surin~32|Tak~63|Trang~92|Trat~23|Ubon Ratchathani~34|Udon Thani~41|Uthai Thani~61|Uttaradit~53|Yala~95|Yasothon~35"], ["Timor-Leste", "TL", "Aileu~AL|Ainaro~AN|Baucau~BA|Bobonaro~BO|Cova Lima~CO|Dili~DI|Ermera~ER|Lautem~LA|Liquica~LI|Manatuto~MT|Manufahi~MF|Oecussi~OE|Viqueque~VI"], ["Togo", "TG", "Centre~C|Kara~K|Maritime~M|Plateaux~P|Savannes~S"], ["Tokelau", "TK", "Atafu~undefined|Fakaofo~undefined|Nukunonu~undefined"], ["Tonga", "TO", "'Eua~01|Ha'apai~02|Niuas~03|Tongatapu~04|Vava'u~05"], ["Trinidad and Tobago", "TT", "Arima~ARI|Chaguanas~CHA|Couva-Tabaquite-Talparo~CTT|Diefo Martin~DMN|Mayaro-Rio Claro~MRC|Penal-Debe~PED|Point Fortin~PTF|Port-of-Spain~POS|Princes Town~PRT|San Fernando~SFO|San Juan-Laventille~SJL|Sangre Grande~SGE|Siparia~SIP|Tobago~TOB|Tunapuna-Piarco~TUP"], ["Tunisia", "TN", "Ariana~12|Beja~31|Ben Arous~13|Bizerte~23|Gabes~81|Gafsa~71|Jendouba~32|Kairouan~41|Kasserine~42|Kebili~73|Kef~33|Mahdia~53|Medenine~82|Monastir~52|Nabeul~21|Sfax~61|Sidi Bouzid~43|Siliana~34|Sousse~51|Tataouine~83|Tozeur~72|Tunis~11|Zaghouan~22"], ["Turkey", "TR", "Adana~01|Adiyaman~02|Afyonkarahisar~03|Agri~04|Aksaray~68|Amasya~05|Ankara~06|Antalya~07|Ardahan~75|Artvin~08|Aydin~09|Balikesir~10|Bartin~74|Batman~72|Bayburt~69|Bilecik~11|Bingol~12|Bitlis~13|Bolu~14|Burdur~15|Bursa~16|Canakkale~17|Cankiri~18|Corum~19|Denizli~20|Diyarbakir~21|Duzce~81|Edirne~22|Elazig~23|Erzincan~24|Erzurum~25|Eskisehir~26|Gaziantep~27|Giresun~28|Gumushane~29|Hakkari~30|Hatay~31|Igdir~76|Isparta~32|Istanbul~34|Izmir~35|Kahramanmaras~46|Karabuk~78|Karaman~70|Kars~36|Kastamonu~37|Kayseri~38|Kilis~79|Kirikkale~71|Kirklareli~39|Kirsehir~40|Kocaeli~41|Konya~42|Kutahya~43|Malatya~44|Manisa~45|Mardin~47|Mersin~33|Mugla~48|Mus~49|Nevsehir~50|Nigde~51|Ordu~52|Osmaniye~80|Rize~53|Sakarya~54|Samsun~55|Sanliurfa~63|Siirt~56|Sinop~57|Sirnak~73|Sivas~58|Tekirdag~59|Tokat~60|Trabzon~61|Tunceli~62|Usak~64|Van~65|Yalova~77|Yozgat~66|Zonguldak~67"], ["Turkmenistan", "TM", "Ahal~A|Asgabat~S|Balkan~B|Dashoguz~D|Lebap~L|Mary~M"], ["Turks and Caicos Islands", "TC", "Turks and Caicos Islands~undefined"], ["Tuvalu", "TV", "Funafuti~FUN|Nanumanga~NMG|Nanumea~NMA|Niutao~NIT|Nui~NUI|Nukufetau~NKF|Nukulaelae~NKL|Vaitupu~VAU"], ["Uganda", "UG", "Abim~317|Adjumani~301|Amolatar~314|Amuria~216|Amuru~319|Apac~302|Arua~303|Budaka~217|Bududa~223|Bugiri~201|Bukedea~224|Bukwa~218|Buliisa~419|Bundibugyo~401|Bushenyi~402|Busia~202|Butaleja~219|Dokolo~318|Gulu~304|Hoima~403|Ibanda~416|Iganga~203|Isingiro~417|Jinja~204|Kaabong~315|Kabale~404|Kabarole~405|Kaberamaido~213|Kalangala~101|Kaliro~220|Kampala~102|Kamuli~205|Kamwenge~413|Kanungu~414|Kapchorwa~206|Kasese~406|Katakwi~207|Kayunga~112|Kibaale~407|Kiboga~103|Kiruhura~418|Kisoro~408|Kitgum~305|Koboko~316|Kotido~306|Kumi~208|Kyenjojo~415|Lira~307|Luwero~104|Lyantonde~116|Manafwa~221|Maracha~320|Masaka~105|Masindi~409|Mayuge~214|Mbale~209|Mbarara~410|Mityana~114|Moroto~308|Moyo~309|Mpigi~106|Mubende~107|Mukono~108|Nakapiripirit~311|Nakaseke~115|Nakasongola~109|Namutumba~222|Nebbi~310|Ntungamo~411|Oyam~321|Pader~312|Pallisa~210|Rakai~110|Rukungiri~412|Sembabule~111|Sironko~215|Soroti~211|Tororo~212|Wakiso~113|Yumbe~313"], ["Ukraine", "UA", "Cherkaska oblast~71|Chernihivska oblast~74|Chernivetska oblast~77|Dnipropetrovska oblast~12|Donetska oblast~14|Ivano-Frankivska oblast~26|Kharkivska oblast~63|Khersonska oblast~65|Khmelnytska oblast~68|Kyivska oblast~32|Kirovohradska oblast~35|Luhanska oblast~09|Lvivska oblast~46|Mykolaivska oblast~48|Odeska oblast~51|Poltavska oblast~53|Rivnenska oblast~56|Sumska oblast~59|Ternopilska oblast~61|Vinnytska oblast~05|Volynska oblast~07|Zakarpatska oblast~21|Zaporizka oblast~23|Zhytomyrska oblast~18|Avtonomna Respublika Krym~43|Kyiv~30|Sevastopol~40"], ["United Arab Emirates", "AE", "Abu Dhabi~AZ|Ajman~AJ|Dubai~DU|Fujairah~FU|Ras al Khaimah~RK|Sharjah~SH|Umm Al Quwain~UQ"], ["United Kingdom", "GB", "Aberdeen City~ABE|Aberdeenshire~ABD|Angus~ANS|Antrim and Newtownabbey~ANN|Ards and North Down~AND|Argyll and Bute~AGB|Armagh City, Banbridge and Craigavon~ABC|Barking and Dagenham~BDG|Barnet~BNE|Barnsley~BNS|Bath and North East Somerset~BAS|Bedford~BDF|Belfast City~BFS|Berkshire~BRK|Bexley~BEX|Birmingham~BIR|Blackburn with Darwen~BBD|Blackpool~BPL|Blaenau Gwent~BGW|Bolton~BOL|Bournemouth, Christchurch and Poole~BCP|Bracknell Forest~BRC|Bradford~BRD|Brent~BEN|Bridgend~BGE|Brighton and Hove~BNH|Bristol, City of~BST|Bromley~BRY|Buckinghamshire~BKM|Bury~BUR|Caerphilly~CAY|Calderdale~CLD|Cambridgeshire~CAM|Camden~CMD|Cardiff~CRF|Carmarthenshire~CMN|Causeway Coast and Glens~CCG|Central Bedfordshire~CBF|Ceredigion~CGN|Cheshire East~CHE|Cheshire West and Chester~CHW|Clackmannanshire~CLK|Conwy~CWY|Cornwall~CON|Coventry~COV|Croydon~CRY|Cumbria~CMA|Darlington~DAL|Denbighshire~DEN|Derby~DER|Derbyshire~DBY|Derry and Strabane~DRS|Devon~DEV|Doncaster~DNC|Dorset~DOR|Dudley~DUD|Dumfries and Galloway~DGY|Dundee City~DND|Durham, County~DUR|Ealing~EAL|East Ayrshire~EAY|East Dunbartonshire~EDU|East Lothian~ELN|East Renfrewshire~ERW|East Riding of Yorkshire~ERY|East Sussex~ESX|Edinburgh, City of~EDH|Eilean Siar~ELS|Enfield~ENF|Essex~ESS|Falkirk~FAL|Fermanagh and Omagh~FMO|Fife~FIF|Flintshire~FLN|Gateshead~GAT|Glasgow City~GLG|Gloucestershire~GLS|Greenwich~GRE|Gwynedd~GWN|Hackney~HCK|Halton~HAL|Hammersmith and Fulham~HMF|Hampshire~HAM|Haringey~HRY|Harrow~HRW|Hartlepool~HPL|Havering~HAV|Herefordshire~HEF|Hertfordshire~HRT|Highland~HLD|Hillingdon~HIL|Hounslow~HNS|Inverclyde~IVC|Isle of Anglesey~AGY|Isle of Wight~IOW|Isles of Scilly~IOS|Islington~ISL|Kensington and Chelsea~KEC|Kent~KEN|Kingston upon Hull~KHL|Kingston upon Thames~KTT|Kirklees~KIR|Knowsley~KWL|Lambeth~LBH|Lancashire~LAN|Leeds~LDS|Leicester~LCE|Leicestershire~LEC|Lewisham~LEW|Lincolnshire~LIN|Lisburn and Castlereagh~LBC|Liverpool~LIV|London, City of~LND|Luton~LUT|Manchester~MAN|Medway~MDW|Merthyr Tydfil~MTY|Merton~MRT|Mid and East Antrim~MEA|Mid-Ulster~MUL|Middlesbrough~MDB|Midlothian~MLN|Milton Keynes~MIK|Monmouthshire~MON|Moray~MRY|Neath Port Talbot~NTL|Newcastle upon Tyne~NET|Newham~NWM|Newport~NWP|Newry, Mourne and Down~NMD|Norfolk~NFK|North Ayrshire~NAY|North East Lincolnshire~NEL|North Lanarkshire~NLK|North Lincolnshire~NLN|North Somerset~NSM|North Tyneside~NTY|North Yorkshire~NYK|Northamptonshire~NTH|Northumberland~NBL|Nottingham~NGM|Nottinghamshire~NTT|Oldham~OLD|Orkney Islands~ORK|Oxfordshire~OXF|Pembrokeshire~PEM|Perth and Kinross~PKN|Peterborough~PTE|Plymouth~PLY|Portsmouth~POR|Powys~POW|Reading~RDG|Redbridge~RDB|Redcar and Cleveland~RCC|Renfrewshire~RFW|Rhondda Cynon Taff~RCT|Richmond upon Thames~RIC|Rochdale~RCH|Rotherham~ROT|Rutland~RUT|Salford~SLF|Sandwell~SAW|Scottish Borders~SCB|Sefton~SFT|Sheffield~SHF|Shetland Islands~ZET|Shropshire~SHR|Slough~SLG|Solihull~SOL|Somerset~SOM|South Ayrshire~SAY|South Gloucestershire~SGC|South Lanarkshire~SLK|South Tyneside~STY|Southampton~STH|Southend-on-Sea~SOS|Southwark~SWK|St. Helens~SHN|Staffordshire~STS|Stirling~STG|Stockport~SKP|Stockton-on-Tees~STT|Stoke-on-Trent~STE|Suffolk~SFK|Sunderland~SND|Surrey~SRY|Sutton~STN|Swansea~SWA|Swindon~SWD|Tameside~TAM|Telford and Wrekin~TFW|Thurrock~THR|Torbay~TOB|Torfaen~TOF|Tower Hamlets~TWH|Trafford~TRF|Vale of Glamorgan, The~VGL|Wakefield~WKF|Walsall~WLL|Waltham Forest~WFT|Wandsworth~WND|Warrington~WRT|Warwickshire~WAR|West Berkshire~WBK|West Dunbartonshire~WDU|West Lothian~WLN|West Sussex~WSX|Westminster~WSM|Wigan~WGN|Wiltshire~WIL|Windsor and Maidenhead~WNM|Wirral~WRL|Wokingham~WOK|Wolverhampton~WLV|Worcestershire~WOR|Wrexham~WRX|York~YOR"], ["United States", "US", "Alabama~AL|Alaska~AK|American Samoa~AS|Arizona~AZ|Arkansas~AR|California~CA|Colorado~CO|Connecticut~CT|Delaware~DE|District of Columbia~DC|Micronesia~FM|Florida~FL|Georgia~GA|Guam~GU|Hawaii~HI|Idaho~ID|Illinois~IL|Indiana~IN|Iowa~IA|Kansas~KS|Kentucky~KY|Louisiana~LA|Maine~ME|Marshall Islands~MH|Maryland~MD|Massachusetts~MA|Michigan~MI|Minnesota~MN|Mississippi~MS|Missouri~MO|Montana~MT|Nebraska~NE|Nevada~NV|New Hampshire~NH|New Jersey~NJ|New Mexico~NM|New York~NY|North Carolina~NC|North Dakota~ND|Northern Mariana Islands~MP|Ohio~OH|Oklahoma~OK|Oregon~OR|Palau~PW|Pennsylvania~PA|Puerto Rico~PR|Rhode Island~RI|South Carolina~SC|South Dakota~SD|Tennessee~TN|Texas~TX|Utah~UT|Vermont~VT|Virgin Islands~VI|Virginia~VA|Washington~WA|West Virginia~WV|Wisconsin~WI|Wyoming~WY|Armed Forces Americas~AA|Armed Forces Europe, Canada, Africa and Middle East~AE|Armed Forces Pacific~AP"], ["United States Minor Outlying Islands", "UM", "Baker Island~81|Howland Island~84|Jarvis Island~86|Johnston Atoll~67|Kingman Reef~89|Midway Islands~71|Navassa Island~76|Palmyra Atoll~95|Wake Island~79|Bajo Nuevo Bank~BN|Serranilla Bank~SB"], ["Uruguay", "UY", "Artigas~AR|Canelones~CA|Cerro Largo~CL|Colonia~CO|Durazno~DU|Flores~FS|Florida~FD|Lavalleja~LA|Maldonado~MA|Montevideo~MO|Paysandú~PA|Río Negro~RN|Rivera~RV|Rocha~RO|Salto~SA|San José~SJ|Soriano~SO|Tacuarembó~TA|Treinta y Tres~TT"], ["Uzbekistan", "UZ", "Toshkent shahri~TK|Andijon~AN|Buxoro~BU|Farg‘ona~FA|Jizzax~JI|Namangan~NG|Navoiy~NW|Qashqadaryo (Qarshi)~QA|Samarqand~SA|Sirdaryo (Guliston)~SI|Surxondaryo (Termiz)~SU|Toshkent wiloyati~TO|Xorazm (Urganch)~XO|Qoraqalpog‘iston Respublikasi (Nukus)~QR"], ["Vanuatu", "VU", "Malampa~MAP|Pénama~PAM|Sanma~SAM|Shéfa~SEE|Taféa~TAE|Torba~TOB"], ["Venezuela, Bolivarian Republic of", "VE", "Dependencias Federales~W|Distrito Federal~A|Amazonas~Z|Anzoátegui~B|Apure~C|Aragua~D|Barinas~E|Bolívar~F|Carabobo~G|Cojedes~H|Delta Amacuro~Y|Falcón~I|Guárico~J|Lara~K|Mérida~L|Miranda~M|Monagas~N|Nueva Esparta~O|Portuguesa~P|Sucre~R|Táchira~S|Trujillo~T|Vargas~X|Yaracuy~U|Zulia~V"], ["Vietnam", "VN", "An Giang~44|Bà Rịa - Vũng Tàu~43|Bình Dương~57|Bình Phước~58|Bình Định~31|Bình Thuận~40|Bạc Liêu~55|Bắc Giang~54|Bắc Kạn~53|Bắc Ninh~56|Bến Tre~50|Cao Bằng~04|Cà Mau~59|Đắk Lắk~33|Đắk Nông~72|Điện Biên~71|Đồng Nai~39|Đồng Tháp~45|Gia Lai~30|Hà Giang~03|Hà Nam~63|Hà Tây~15|Hà Tĩnh~23|Hải Dương~61|Hậu Giang~73|Hòa Bình~14|Hưng Yên~66|Khánh Hòa~34|Kiên Giang~47|Kon Tum~28|Lai Châu~01|Lâm Đồng~35|Lạng Sơn~09|Lào Cai~02|Long An~41|Nam Định~67|Nghệ An~22|Ninh Bình~18|Ninh Thuận~36|Phú Thọ~68|Phú Yên~32|Quảng Bình~24|Quảng Nam~27|Quảng Ngãi~29|Quảng Ninh~13|Quảng Trị~25|Sóc Trăng~52|Sơn La~05|Tây Ninh~37|Thái Bình~20|Thái Nguyên~69|Thanh Hóa~21|Thừa Thiên–Huế~26|Tiền Giang~46|Trà Vinh~51|Tuyên Quang~07|Vĩnh Long~49|Vĩnh Phúc~70|Yên Bái~06|Cần Thơ~CT|Đà Nẵng~DN|Hà Nội~HN|Hải Phòng~HP|Hồ Chí Minh (Sài Gòn)~SG"], ["Virgin Islands, British", "VG", "Anegada~ANG|Jost Van Dyke~JVD|Tortola~TTA|Virgin Gorda~VGD"], ["Virgin Islands, U.S.", "VI", "St. Thomas~STH|St. John~SJO|St. Croix~SCR"], ["Wallis and Futuna", "WF", "Alo~ALO|Sigave~SIG|Wallis~WAL"], ["Western Sahara", "EH", "Es Smara~ESM|Boujdour~BOD|Laâyoune~LAA|Aousserd~AOU|Oued ed Dahab~OUD"], ["Yemen", "YE", "Abyān~AB|'Adan~AD|Aḑ Ḑāli'~DA|Al Bayḑā'~BA|Al Ḩudaydah~HU|Al Jawf~JA|Al Mahrah~MR|Al Maḩwīt~MW|'Amrān~AM|Dhamār~DH|Ḩaḑramawt~HD|Ḩajjah~HJ|Ibb~IB|Laḩij~LA|Ma'rib~MA|Raymah~RA|Şā‘dah~SD|Şan‘ā'~SN|Shabwah~SH|Tā‘izz~TA"], ["Zambia", "ZM", "Central~02|Copperbelt~08|Eastern~03|Luapula~04|Lusaka~09|Northern~05|North-Western~06|Southern~07|Western~01"], ["Zimbabwe", "ZW", "Bulawayo~BU|Harare~HA|Manicaland~MA|Mashonaland Central~MC|Mashonaland East~ME|Mashonaland West~MW|Masvingo~MV|Matabeleland North~MN|Matabeleland South~MS|Midlands~MI"]];
var C = {
  DISPLAY_TYPE_FULL: "full",
  DISPLAY_TYPE_SHORT: "short",
  REGION_LIST_DELIMITER: "|",
  SINGLE_REGION_DELIMITER: "~"
};
var classCallCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
var createClass = /* @__PURE__ */ (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();
var _extends = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var inherits = function(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};
var objectWithoutProperties = function(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
};
var possibleConstructorReturn = function(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
};
var slicedToArray = /* @__PURE__ */ (function() {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  return function(arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
})();
var toConsumableArray = function(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
    return arr2;
  } else {
    return Array.from(arr);
  }
};
var filterCountries = function filterCountries2(countries, priorityCountries, whitelist, blacklist) {
  var countriesListedFirst = [];
  var filteredCountries = countries;
  if (whitelist.length > 0) {
    filteredCountries = countries.filter(function(_ref) {
      var _ref2 = slicedToArray(_ref, 2), countrySlug = _ref2[1];
      return whitelist.indexOf(countrySlug) > -1;
    });
  } else if (blacklist.length > 0) {
    filteredCountries = countries.filter(function(_ref3) {
      var _ref4 = slicedToArray(_ref3, 2), countrySlug = _ref4[1];
      return blacklist.indexOf(countrySlug) === -1;
    });
  }
  if (priorityCountries.length > 0) {
    priorityCountries.forEach(function(slug) {
      var result = filteredCountries.find(function(_ref5) {
        var _ref6 = slicedToArray(_ref5, 2), countrySlug = _ref6[1];
        return countrySlug === slug;
      });
      if (result) {
        countriesListedFirst.push(result);
      }
    });
    filteredCountries = filteredCountries.filter(function(_ref7) {
      var _ref8 = slicedToArray(_ref7, 2), countrySlug = _ref8[1];
      return priorityCountries.indexOf(countrySlug) === -1;
    });
  }
  return countriesListedFirst.length ? [].concat(countriesListedFirst, toConsumableArray(filteredCountries)) : filteredCountries;
};
var filterRegions = function filterRegions2(regionsObject, whitelistObject, blacklistObject) {
  var _regionsObject = slicedToArray(regionsObject, 3), country = _regionsObject[0], countryCode = _regionsObject[1], regions = _regionsObject[2];
  var whitelist = whitelistObject.hasOwnProperty(countryCode) ? whitelistObject[countryCode] : [];
  var blacklist = blacklistObject.hasOwnProperty(countryCode) ? blacklistObject[countryCode] : [];
  var filteredRegions = regions.split("|");
  if (whitelist.length > 0 && filteredRegions.length > 0) {
    filteredRegions = filteredRegions.filter(function(region) {
      for (var i = 0, n = whitelist.length; i < n; i++) {
        if (region.indexOf(whitelist[i]) > -1) {
          return true;
        }
      }
      return false;
    });
  } else if (blacklist.length > 0 && filteredRegions.length > 0) {
    filteredRegions = filteredRegions.filter(function(region) {
      for (var i = 0, n = blacklist.length; i < n; i++) {
        if (region.indexOf(blacklist[i]) > -1) {
          return false;
        }
      }
      return true;
    });
  }
  return [country, countryCode, filteredRegions.join("|")];
};
var CountryDropdown = (function(_Component) {
  inherits(CountryDropdown2, _Component);
  function CountryDropdown2(props) {
    classCallCheck(this, CountryDropdown2);
    var _this = possibleConstructorReturn(this, (CountryDropdown2.__proto__ || Object.getPrototypeOf(CountryDropdown2)).call(this, props));
    _this.state = {
      countries: filterCountries(CountryRegionData, props.priorityOptions, props.whitelist, props.blacklist)
    };
    return _this;
  }
  createClass(CountryDropdown2, [{
    key: "getCountries",
    value: function getCountries() {
      var _props = this.props, valueType = _props.valueType, labelType = _props.labelType;
      return this.state.countries.map(function(_ref) {
        var _ref2 = slicedToArray(_ref, 2), countryName = _ref2[0], countrySlug = _ref2[1];
        return React.createElement(
          "option",
          { value: valueType === C.DISPLAY_TYPE_SHORT ? countrySlug : countryName, key: countrySlug },
          labelType === C.DISPLAY_TYPE_SHORT ? countrySlug : countryName
        );
      });
    }
  }, {
    key: "getDefaultOption",
    value: function getDefaultOption() {
      var _props2 = this.props, showDefaultOption = _props2.showDefaultOption, defaultOptionLabel = _props2.defaultOptionLabel;
      if (!showDefaultOption) {
        return null;
      }
      return React.createElement(
        "option",
        { value: "", key: "default" },
        defaultOptionLabel
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _props3 = this.props, name = _props3.name, id = _props3.id, classes = _props3.classes, value = _props3.value, _onChange = _props3.onChange, _onBlur = _props3.onBlur, disabled = _props3.disabled;
      _props3.showDefaultOption;
      _props3.defaultOptionLabel;
      _props3.labelType;
      _props3.valueType;
      _props3.whitelist;
      _props3.blacklist;
      _props3.customOptions;
      _props3.priorityOptions;
      var arbitraryProps = objectWithoutProperties(_props3, ["name", "id", "classes", "value", "onChange", "onBlur", "disabled", "showDefaultOption", "defaultOptionLabel", "labelType", "valueType", "whitelist", "blacklist", "customOptions", "priorityOptions"]);
      var attrs = _extends({}, arbitraryProps, {
        name,
        value,
        onChange: function onChange3(e) {
          return _onChange(e.target.value, e);
        },
        onBlur: function onBlur3(e) {
          return _onBlur(e.target.value, e);
        },
        disabled
      });
      if (id) {
        attrs.id = id;
      }
      if (classes) {
        attrs.className = classes;
      }
      return React.createElement(
        "select",
        attrs,
        this.getDefaultOption(),
        this.getCountries()
      );
    }
  }]);
  return CountryDropdown2;
})(reactExports.Component);
CountryDropdown.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  id: PropTypes.string,
  classes: PropTypes.string,
  showDefaultOption: PropTypes.bool,
  defaultOptionLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  priorityOptions: PropTypes.array,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  labelType: PropTypes.oneOf([C.DISPLAY_TYPE_FULL, C.DISPLAY_TYPE_SHORT]),
  valueType: PropTypes.oneOf([C.DISPLAY_TYPE_FULL, C.DISPLAY_TYPE_SHORT]),
  whitelist: PropTypes.array,
  blacklist: PropTypes.array,
  disabled: PropTypes.bool
};
CountryDropdown.defaultProps = {
  value: "",
  name: "rcrs-country",
  id: "",
  classes: "",
  showDefaultOption: true,
  defaultOptionLabel: "Select Country",
  priorityOptions: [],
  onChange: function onChange() {
  },
  onBlur: function onBlur() {
  },
  labelType: C.DISPLAY_TYPE_FULL,
  valueType: C.DISPLAY_TYPE_FULL,
  whitelist: [],
  blacklist: [],
  disabled: false
};
var RegionDropdown = (function(_PureComponent) {
  inherits(RegionDropdown2, _PureComponent);
  function RegionDropdown2(props) {
    classCallCheck(this, RegionDropdown2);
    var _this = possibleConstructorReturn(this, (RegionDropdown2.__proto__ || Object.getPrototypeOf(RegionDropdown2)).call(this, props));
    _this.state = {
      regions: _this.getRegions(props.country)
    };
    _this.getRegions = _this.getRegions.bind(_this);
    return _this;
  }
  createClass(RegionDropdown2, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var country = this.props.country;
      if (country === prevProps.country) {
        return;
      }
      var defaultRegions = this.getRegions(country);
      this.setState({
        regions: [].concat(toConsumableArray(defaultRegions), toConsumableArray(this.getCustomOptions(defaultRegions)))
      });
    }
  }, {
    key: "getCustomOptions",
    value: function getCustomOptions(regions) {
      var customOptions = this.props.customOptions;
      var duplicateRegions = this.getDuplicates(regions);
      if (duplicateRegions.length) {
        console.error("Error: Duplicate regions present: " + duplicateRegions.toString() + ".\nThe above item(s) is/are already getting added to the region dropdown by the library.");
        return [];
      }
      return customOptions.map(function(option) {
        if (option) {
          return { regionName: option, regionShortCode: option };
        }
      });
    }
  }, {
    key: "getDuplicates",
    value: function getDuplicates(regions) {
      var _props = this.props, customOptions = _props.customOptions, valueType = _props.valueType;
      var regionKey = valueType === C.DISPLAY_TYPE_FULL ? "regionName" : "regionShortCode";
      return regions.filter(function(region) {
        return customOptions.indexOf(region[regionKey]) !== -1;
      }).map(function(region) {
        return region[regionKey];
      });
    }
  }, {
    key: "getRegions",
    value: function getRegions(country) {
      if (!country) {
        return [];
      }
      var _props2 = this.props, countryValueType = _props2.countryValueType, whitelist = _props2.whitelist, blacklist = _props2.blacklist;
      var searchIndex = countryValueType === C.DISPLAY_TYPE_FULL ? 0 : 1;
      var regions = [];
      CountryRegionData.forEach(function(i) {
        if (i[searchIndex] === country) {
          regions = i;
        }
      });
      if (!regions || regions.length === 0) {
        console.error("Error. Unknown country passed: " + country + `. If you're passing a country shortcode, be sure to include countryValueType="short" on the RegionDropdown`);
        return [];
      }
      var filteredRegions = filterRegions(regions, whitelist, blacklist);
      return filteredRegions[2].split(C.REGION_LIST_DELIMITER).map(function(regionPair) {
        var _regionPair$split = regionPair.split(C.SINGLE_REGION_DELIMITER), _regionPair$split2 = slicedToArray(_regionPair$split, 2), regionName = _regionPair$split2[0], _regionPair$split2$ = _regionPair$split2[1], regionShortCode = _regionPair$split2$ === void 0 ? null : _regionPair$split2$;
        return { regionName, regionShortCode };
      });
    }
  }, {
    key: "getRegionList",
    value: function getRegionList() {
      var _props3 = this.props, labelType = _props3.labelType, valueType = _props3.valueType;
      return this.state.regions.map(function(_ref) {
        var regionName = _ref.regionName, regionShortCode = _ref.regionShortCode;
        var label = labelType === C.DISPLAY_TYPE_FULL ? regionName : regionShortCode;
        var value = valueType === C.DISPLAY_TYPE_FULL ? regionName : regionShortCode;
        return React.createElement(
          "option",
          { value, key: regionName },
          label
        );
      });
    }
    // there are two default options. The "blank" option which shows up when the user hasn't selected a country yet, and
    // a "default" option which shows
  }, {
    key: "getDefaultOption",
    value: function getDefaultOption() {
      var _props4 = this.props, blankOptionLabel = _props4.blankOptionLabel, showDefaultOption = _props4.showDefaultOption, defaultOptionLabel = _props4.defaultOptionLabel, country = _props4.country;
      if (!country) {
        return React.createElement(
          "option",
          { value: "" },
          blankOptionLabel
        );
      }
      if (showDefaultOption) {
        return React.createElement(
          "option",
          { value: "" },
          defaultOptionLabel
        );
      }
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _props5 = this.props, value = _props5.value, country = _props5.country, _onChange = _props5.onChange, _onBlur = _props5.onBlur, id = _props5.id, name = _props5.name, classes = _props5.classes, disabled = _props5.disabled;
      _props5.blankOptionLabel;
      _props5.showDefaultOption;
      _props5.defaultOptionLabel;
      _props5.labelType;
      _props5.valueType;
      _props5.countryValueType;
      var disableWhenEmpty = _props5.disableWhenEmpty;
      _props5.customOptions;
      var arbitraryProps = objectWithoutProperties(_props5, ["value", "country", "onChange", "onBlur", "id", "name", "classes", "disabled", "blankOptionLabel", "showDefaultOption", "defaultOptionLabel", "labelType", "valueType", "countryValueType", "disableWhenEmpty", "customOptions"]);
      var isDisabled = disabled || disableWhenEmpty && country === "";
      var attrs = _extends({}, arbitraryProps, {
        name,
        value,
        onChange: function onChange3(e) {
          return _onChange(e.target.value, e);
        },
        onBlur: function onBlur3(e) {
          return _onBlur(e.target.value, e);
        },
        disabled: isDisabled
      });
      if (id) {
        attrs.id = id;
      }
      if (classes) {
        attrs.className = classes;
      }
      return React.createElement(
        "select",
        attrs,
        this.getDefaultOption(),
        this.getRegionList()
      );
    }
  }]);
  return RegionDropdown2;
})(reactExports.PureComponent);
RegionDropdown.propTypes = {
  country: PropTypes.string,
  countryValueType: PropTypes.oneOf([C.DISPLAY_TYPE_FULL, C.DISPLAY_TYPE_SHORT]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  id: PropTypes.string,
  classes: PropTypes.string,
  blankOptionLabel: PropTypes.string,
  showDefaultOption: PropTypes.bool,
  defaultOptionLabel: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  labelType: PropTypes.string,
  valueType: PropTypes.string,
  whitelist: PropTypes.object,
  blacklist: PropTypes.object,
  disabled: PropTypes.bool,
  disableWhenEmpty: PropTypes.bool,
  customOptions: PropTypes.array
};
RegionDropdown.defaultProps = {
  country: "",
  value: "",
  name: "rcrs-region",
  id: "",
  classes: "",
  blankOptionLabel: "-",
  showDefaultOption: true,
  defaultOptionLabel: "Select Region",
  onChange: function onChange2() {
  },
  onBlur: function onBlur2() {
  },
  countryValueType: C.DISPLAY_TYPE_FULL,
  labelType: C.DISPLAY_TYPE_FULL,
  valueType: C.DISPLAY_TYPE_FULL,
  whitelist: {},
  blacklist: {},
  disabled: false,
  disableWhenEmpty: false,
  customOptions: []
};
function V(e, { insertAt: n } = {}) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", n === "top" && t.firstChild ? t.insertBefore(r, t.firstChild) : t.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
}
V(`.rmsc{--rmsc-main: #4285f4;--rmsc-hover: #f1f3f5;--rmsc-selected: #e2e6ea;--rmsc-border: #ccc;--rmsc-gray: #aaa;--rmsc-bg: #fff;--rmsc-p: 10px;--rmsc-radius: 4px;--rmsc-h: 38px}.rmsc *{box-sizing:border-box;transition:all .2s ease}.rmsc .gray{color:var(--rmsc-gray)}.rmsc .dropdown-content{position:absolute;z-index:1;top:100%;width:100%;padding-top:8px}.rmsc .dropdown-content .panel-content{overflow:hidden;border-radius:var(--rmsc-radius);background:var(--rmsc-bg);box-shadow:0 0 0 1px #0000001a,0 4px 11px #0000001a}.rmsc .dropdown-container{position:relative;outline:0;background-color:var(--rmsc-bg);border:1px solid var(--rmsc-border);border-radius:var(--rmsc-radius)}.rmsc .dropdown-container[aria-disabled=true]:focus-within{box-shadow:var(--rmsc-gray) 0 0 0 1px;border-color:var(--rmsc-gray)}.rmsc .dropdown-container:focus-within{box-shadow:var(--rmsc-main) 0 0 0 1px;border-color:var(--rmsc-main)}.rmsc .dropdown-heading{position:relative;padding:0 var(--rmsc-p);display:flex;align-items:center;width:100%;height:var(--rmsc-h);cursor:default;outline:0}.rmsc .dropdown-heading .dropdown-heading-value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.rmsc .clear-selected-button{cursor:pointer;background:none;border:0;padding:0;display:flex}.rmsc .options{max-height:260px;overflow-y:auto;margin:0;padding-left:0}.rmsc .options li{list-style:none;margin:0}.rmsc .select-item{box-sizing:border-box;cursor:pointer;display:block;padding:var(--rmsc-p);outline-offset:-1px;outline-color:var(--rmsc-primary)}.rmsc .select-item:hover{background:var(--rmsc-hover)}.rmsc .select-item.selected{background:var(--rmsc-selected)}.rmsc .no-options{padding:var(--rmsc-p);text-align:center;color:var(--rmsc-gray)}.rmsc .search{width:100%;position:relative;border-bottom:1px solid var(--rmsc-border)}.rmsc .search input{background:none;height:var(--rmsc-h);padding:0 var(--rmsc-p);width:100%;outline:0;border:0;font-size:1em}.rmsc .search input:focus{background:var(--rmsc-hover)}.rmsc .search-clear-button{cursor:pointer;position:absolute;top:0;right:0;bottom:0;background:none;border:0;padding:0 calc(var(--rmsc-p) / 2)}.rmsc .search-clear-button [hidden]{display:none}.rmsc .item-renderer{display:flex;align-items:baseline}.rmsc .item-renderer input{margin:0 5px 0 0}.rmsc .item-renderer.disabled{opacity:.5}.rmsc .spinner{animation:rotate 2s linear infinite}.rmsc .spinner .path{stroke:var(--rmsc-border);stroke-width:4px;stroke-linecap:round;animation:dash 1.5s ease-in-out infinite}@keyframes rotate{to{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}to{stroke-dasharray:90,150;stroke-dashoffset:-124}}
`);
var Me = { allItemsAreSelected: "All items are selected.", clearSearch: "Clear Search", clearSelected: "Clear Selected", noOptions: "No options", search: "Search", selectAll: "Select All", selectAllFiltered: "Select All (Filtered)", selectSomeItems: "Select...", create: "Create" }, De = { value: [], hasSelectAll: true, className: "multi-select", debounceDuration: 200, options: [] }, re = React.createContext({}), ne = ({ props: e, children: n }) => {
  let [t, r] = reactExports.useState(e.options), a = (c) => {
    var u;
    return ((u = e.overrideStrings) == null ? void 0 : u[c]) || Me[c];
  };
  return reactExports.useEffect(() => {
    r(e.options);
  }, [e.options]), jsxRuntimeExports.jsx(re.Provider, { value: { t: a, ...De, ...e, options: t, setOptions: r }, children: n });
}, w = () => React.useContext(re);
function se(e, n) {
  let t = reactExports.useRef(false);
  reactExports.useEffect(() => {
    t.current ? e() : t.current = true;
  }, n);
}
var He = { when: true, eventTypes: ["keydown"] };
function R(e, n, t) {
  let r = reactExports.useMemo(() => Array.isArray(e) ? e : [e], [e]), a = Object.assign({}, He, t), { when: c, eventTypes: u } = a, b = reactExports.useRef(n), { target: s } = a;
  reactExports.useEffect(() => {
    b.current = n;
  });
  let p = reactExports.useCallback((i) => {
    r.some((l) => i.key === l || i.code === l) && b.current(i);
  }, [r]);
  reactExports.useEffect(() => {
    if (c && typeof window < "u") {
      let i = s ? s.current : window;
      return u.forEach((l) => {
        i && i.addEventListener(l, p);
      }), () => {
        u.forEach((l) => {
          i && i.removeEventListener(l, p);
        });
      };
    }
  }, [c, u, r, s, n]);
}
var f = { ARROW_DOWN: "ArrowDown", ARROW_UP: "ArrowUp", ENTER: "Enter", ESCAPE: "Escape", SPACE: "Space" };
var le = (e, n) => {
  let t;
  return function(...r) {
    clearTimeout(t), t = setTimeout(() => {
      e.apply(null, r);
    }, n);
  };
};
function ie(e, n) {
  return n ? e.filter(({ label: t, value: r }) => t != null && r != null && t.toLowerCase().includes(n.toLowerCase())) : e;
}
var T = () => jsxRuntimeExports.jsxs("svg", { width: "24", height: "24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "dropdown-search-clear-icon gray", children: [jsxRuntimeExports.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), jsxRuntimeExports.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] });
var Ue = ({ checked: e, option: n, onClick: t, disabled: r }) => jsxRuntimeExports.jsxs("div", { className: `item-renderer ${r ? "disabled" : ""}`, children: [jsxRuntimeExports.jsx("input", { type: "checkbox", onChange: t, checked: e, tabIndex: -1, disabled: r }), jsxRuntimeExports.jsx("span", { children: n.label })] }), pe = Ue;
var Ye = ({ itemRenderer: e = pe, option: n, checked: t, tabIndex: r, disabled: a, onSelectionChanged: c, onClick: u }) => {
  let b = reactExports.useRef(), s = (l) => {
    p(), l.preventDefault();
  }, p = () => {
    a || c(!t);
  }, i = (l) => {
    p(), u(l);
  };
  return R([f.ENTER, f.SPACE], s, { target: b }), jsxRuntimeExports.jsx("label", { className: `select-item ${t ? "selected" : ""}`, role: "option", "aria-selected": t, tabIndex: r, ref: b, children: jsxRuntimeExports.jsx(e, { option: n, checked: t, onClick: i, disabled: a }) });
}, N = Ye;
var ze = ({ options: e, onClick: n, skipIndex: t }) => {
  let { disabled: r, value: a, onChange: c, ItemRenderer: u } = w(), b = (s, p) => {
    r || c(p ? [...a, s] : a.filter((i) => i.value !== s.value));
  };
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: e.map((s, p) => {
    let i = p + t;
    return jsxRuntimeExports.jsx("li", { children: jsxRuntimeExports.jsx(N, { tabIndex: i, option: s, onSelectionChanged: (l) => b(s, l), checked: !!a.find((l) => l.value === s.value), onClick: (l) => n(l, i), itemRenderer: u, disabled: s.disabled || r }) }, (s == null ? void 0 : s.key) || p);
  }) });
}, ue = ze;
var Je = () => {
  let { t: e, onChange: n, options: t, setOptions: r, value: a, filterOptions: c, ItemRenderer: u, disabled: b, disableSearch: s, hasSelectAll: p, ClearIcon: i, debounceDuration: l, isCreatable: L, onCreateOption: y } = w(), O = reactExports.useRef(), g = reactExports.useRef(), [m, M] = reactExports.useState(""), [v, K] = reactExports.useState(t), [x, D] = reactExports.useState(""), [E, I] = reactExports.useState(0), W = reactExports.useCallback(le((o) => D(o), l), []), A = reactExports.useMemo(() => {
    let o = 0;
    return s || (o += 1), p && (o += 1), o;
  }, [s, p]), _ = { label: e(m ? "selectAllFiltered" : "selectAll"), value: "" }, H = (o) => {
    let d = v.filter((C2) => !C2.disabled).map((C2) => C2.value);
    if (o) {
      let Ae = [...a.map((U) => U.value), ...d];
      return (c ? v : t).filter((U) => Ae.includes(U.value));
    }
    return a.filter((C2) => !d.includes(C2.value));
  }, B = (o) => {
    let d = H(o);
    n(d);
  }, h = (o) => {
    W(o.target.value), M(o.target.value), I(0);
  }, P = () => {
    var o;
    D(""), M(""), (o = g == null ? void 0 : g.current) == null || o.focus();
  }, Z = (o) => I(o), we = (o) => {
    switch (o.code) {
      case f.ARROW_UP:
        ee(-1);
        break;
      case f.ARROW_DOWN:
        ee(1);
        break;
      default:
        return;
    }
    o.stopPropagation(), o.preventDefault();
  };
  R([f.ARROW_DOWN, f.ARROW_UP], we, { target: O });
  let Oe = () => {
    I(0);
  }, j = async () => {
    let o = { label: m, value: m, __isNew__: true };
    y && (o = await y(m)), r([o, ...t]), P(), n([...a, o]);
  }, Re = async () => c ? await c(t, x) : ie(t, x), ee = (o) => {
    let d = E + o;
    d = Math.max(0, d), d = Math.min(d, t.length + Math.max(A - 1, 0)), I(d);
  };
  reactExports.useEffect(() => {
    var o, d;
    (d = (o = O == null ? void 0 : O.current) == null ? void 0 : o.querySelector(`[tabIndex='${E}']`)) == null || d.focus();
  }, [E]);
  let [ke, Ee] = reactExports.useMemo(() => {
    let o = v.filter((d) => !d.disabled);
    return [o.every((d) => a.findIndex((C2) => C2.value === d.value) !== -1), o.length !== 0];
  }, [v, a]);
  reactExports.useEffect(() => {
    Re().then(K);
  }, [x, t]);
  let te = reactExports.useRef();
  R([f.ENTER], j, { target: te });
  let Ie = L && m && !v.some((o) => (o == null ? void 0 : o.value) === m);
  return jsxRuntimeExports.jsxs("div", { className: "select-panel", role: "listbox", ref: O, children: [!s && jsxRuntimeExports.jsxs("div", { className: "search", children: [jsxRuntimeExports.jsx("input", { placeholder: e("search"), type: "text", "aria-describedby": e("search"), onChange: h, onFocus: Oe, value: m, ref: g, tabIndex: 0 }), jsxRuntimeExports.jsx("button", { type: "button", className: "search-clear-button", hidden: !m, onClick: P, "aria-label": e("clearSearch"), children: i || jsxRuntimeExports.jsx(T, {}) })] }), jsxRuntimeExports.jsxs("ul", { className: "options", children: [p && Ee && jsxRuntimeExports.jsx(N, { tabIndex: A === 1 ? 0 : 1, checked: ke, option: _, onSelectionChanged: B, onClick: () => Z(1), itemRenderer: u, disabled: b }), v.length ? jsxRuntimeExports.jsx(ue, { skipIndex: A, options: v, onClick: (o, d) => Z(d) }) : Ie ? jsxRuntimeExports.jsx("li", { onClick: j, className: "select-item creatable", tabIndex: 1, ref: te, children: `${e("create")} "${m}"` }) : jsxRuntimeExports.jsx("li", { className: "no-options", children: e("noOptions") })] })] });
}, q = Je;
var ge = ({ expanded: e }) => jsxRuntimeExports.jsx("svg", { width: "24", height: "24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "dropdown-heading-dropdown-arrow gray", children: jsxRuntimeExports.jsx("path", { d: e ? "M18 15 12 9 6 15" : "M6 9L12 15 18 9" }) });
var xe = () => {
  let { t: e, value: n, options: t, valueRenderer: r } = w(), a = n.length === 0, c = n.length === t.length, u = r && r(n, t);
  return a ? jsxRuntimeExports.jsx("span", { className: "gray", children: u || e("selectSomeItems") }) : jsxRuntimeExports.jsx("span", { children: u || (c ? e("allItemsAreSelected") : (() => n.map((s) => s.label).join(", "))()) });
};
var Se = ({ size: e = 24 }) => jsxRuntimeExports.jsx("span", { style: { width: e, marginRight: "0.2rem" }, children: jsxRuntimeExports.jsx("svg", { width: e, height: e, className: "spinner", viewBox: "0 0 50 50", style: { display: "inline", verticalAlign: "middle" }, children: jsxRuntimeExports.jsx("circle", { cx: "25", cy: "25", r: "20", fill: "none", className: "path" }) }) });
var Xe = () => {
  let { t: e, onMenuToggle: n, ArrowRenderer: t, shouldToggleOnHover: r, isLoading: a, disabled: c, onChange: u, labelledBy: b, value: s, isOpen: p, defaultIsOpen: i, ClearSelectedIcon: l, closeOnChangedValue: L } = w();
  reactExports.useEffect(() => {
    L && m(false);
  }, [s]);
  let [y, O] = reactExports.useState(true), [g, m] = reactExports.useState(i), [M, v] = reactExports.useState(false), K = t || ge, x = reactExports.useRef();
  se(() => {
    n && n(g);
  }, [g]), reactExports.useEffect(() => {
    i === void 0 && typeof p == "boolean" && (O(false), m(p));
  }, [p]);
  let D = (h) => {
    var P;
    ["text", "button"].includes(h.target.type) && [f.SPACE, f.ENTER].includes(h.code) || (y && (h.code === f.ESCAPE ? (m(false), (P = x == null ? void 0 : x.current) == null || P.focus()) : m(true)), h.preventDefault());
  };
  R([f.ENTER, f.ARROW_DOWN, f.SPACE, f.ESCAPE], D, { target: x });
  let E = (h) => {
    y && r && m(h);
  }, I = () => !M && v(true), W = (h) => {
    !h.currentTarget.contains(h.relatedTarget) && y && (v(false), m(false));
  }, A = () => E(true), _ = () => E(false), H = () => {
    y && m(a || c ? false : !g);
  }, B = (h) => {
    h.stopPropagation(), u([]), y && m(false);
  };
  return jsxRuntimeExports.jsxs("div", { tabIndex: 0, className: "dropdown-container", "aria-labelledby": b, "aria-expanded": g, "aria-readonly": true, "aria-disabled": c, ref: x, onFocus: I, onBlur: W, onMouseEnter: A, onMouseLeave: _, children: [jsxRuntimeExports.jsxs("div", { className: "dropdown-heading", onClick: H, children: [jsxRuntimeExports.jsx("div", { className: "dropdown-heading-value", children: jsxRuntimeExports.jsx(xe, {}) }), a && jsxRuntimeExports.jsx(Se, {}), s.length > 0 && l !== null && jsxRuntimeExports.jsx("button", { type: "button", className: "clear-selected-button", onClick: B, disabled: c, "aria-label": e("clearSelected"), children: l || jsxRuntimeExports.jsx(T, {}) }), jsxRuntimeExports.jsx(K, { expanded: g })] }), g && jsxRuntimeExports.jsx("div", { className: "dropdown-content", children: jsxRuntimeExports.jsx("div", { className: "panel-content", children: jsxRuntimeExports.jsx(q, {}) }) })] });
}, Q = Xe;
var Ze = (e) => jsxRuntimeExports.jsx(ne, { props: e, children: jsxRuntimeExports.jsx("div", { className: `rmsc ${e.className || "multi-select"}`, children: jsxRuntimeExports.jsx(Q, {}) }) }), je = Ze;
var pickr_min = { exports: {} };
/*! Pickr 1.9.1 MIT | https://github.com/Simonwep/pickr */
var hasRequiredPickr_min;
function requirePickr_min() {
  if (hasRequiredPickr_min) return pickr_min.exports;
  hasRequiredPickr_min = 1;
  (function(module, exports$1) {
    !(function(t, e) {
      module.exports = e();
    })(self, (() => (() => {
      var t = { d: (e2, o2) => {
        for (var n2 in o2) t.o(o2, n2) && !t.o(e2, n2) && Object.defineProperty(e2, n2, { enumerable: true, get: o2[n2] });
      }, o: (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), r: (t2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
      } }, e = {};
      t.d(e, { default: () => E });
      var o = {};
      function n(t2, e2, o2, n2, i2 = {}) {
        e2 instanceof HTMLCollection || e2 instanceof NodeList ? e2 = Array.from(e2) : Array.isArray(e2) || (e2 = [e2]), Array.isArray(o2) || (o2 = [o2]);
        for (const s2 of e2) for (const e3 of o2) s2[t2](e3, n2, { capture: false, ...i2 });
        return Array.prototype.slice.call(arguments, 1);
      }
      t.r(o), t.d(o, { adjustableInputNumbers: () => p, createElementFromString: () => r, createFromTemplate: () => a, eventPath: () => l, off: () => s, on: () => i, resolveElement: () => c });
      const i = n.bind(null, "addEventListener"), s = n.bind(null, "removeEventListener");
      function r(t2) {
        const e2 = document.createElement("div");
        return e2.innerHTML = t2.trim(), e2.firstElementChild;
      }
      function a(t2) {
        const e2 = (t3, e3) => {
          const o3 = t3.getAttribute(e3);
          return t3.removeAttribute(e3), o3;
        }, o2 = (t3, n2 = {}) => {
          const i2 = e2(t3, ":obj"), s2 = e2(t3, ":ref"), r2 = i2 ? n2[i2] = {} : n2;
          s2 && (n2[s2] = t3);
          for (const n3 of Array.from(t3.children)) {
            const t4 = e2(n3, ":arr"), i3 = o2(n3, t4 ? {} : r2);
            t4 && (r2[t4] || (r2[t4] = [])).push(Object.keys(i3).length ? i3 : n3);
          }
          return n2;
        };
        return o2(r(t2));
      }
      function l(t2) {
        let e2 = t2.path || t2.composedPath && t2.composedPath();
        if (e2) return e2;
        let o2 = t2.target.parentElement;
        for (e2 = [t2.target, o2]; o2 = o2.parentElement; ) e2.push(o2);
        return e2.push(document, window), e2;
      }
      function c(t2) {
        return t2 instanceof Element ? t2 : "string" == typeof t2 ? t2.split(/>>/g).reduce(((t3, e2, o2, n2) => (t3 = t3.querySelector(e2), o2 < n2.length - 1 ? t3.shadowRoot : t3)), document) : null;
      }
      function p(t2, e2 = ((t3) => t3)) {
        function o2(o3) {
          const n2 = [1e-3, 0.01, 0.1][Number(o3.shiftKey || 2 * o3.ctrlKey)] * (o3.deltaY < 0 ? 1 : -1);
          let i2 = 0, s2 = t2.selectionStart;
          t2.value = t2.value.replace(/[\d.]+/g, ((t3, o4) => o4 <= s2 && o4 + t3.length >= s2 ? (s2 = o4, e2(Number(t3), n2, i2)) : (i2++, t3))), t2.focus(), t2.setSelectionRange(s2, s2), o3.preventDefault(), t2.dispatchEvent(new Event("input"));
        }
        i(t2, "focus", (() => i(window, "wheel", o2, { passive: false }))), i(t2, "blur", (() => s(window, "wheel", o2)));
      }
      const { min: u, max: h, floor: d, round: m } = Math;
      function f2(t2, e2, o2) {
        e2 /= 100, o2 /= 100;
        const n2 = d(t2 = t2 / 360 * 6), i2 = t2 - n2, s2 = o2 * (1 - e2), r2 = o2 * (1 - i2 * e2), a2 = o2 * (1 - (1 - i2) * e2), l2 = n2 % 6;
        return [255 * [o2, r2, s2, s2, a2, o2][l2], 255 * [a2, o2, o2, r2, s2, s2][l2], 255 * [s2, s2, a2, o2, o2, r2][l2]];
      }
      function v(t2, e2, o2) {
        const n2 = (2 - (e2 /= 100)) * (o2 /= 100) / 2;
        return 0 !== n2 && (e2 = 1 === n2 ? 0 : n2 < 0.5 ? e2 * o2 / (2 * n2) : e2 * o2 / (2 - 2 * n2)), [t2, 100 * e2, 100 * n2];
      }
      function b(t2, e2, o2) {
        const n2 = u(t2 /= 255, e2 /= 255, o2 /= 255), i2 = h(t2, e2, o2), s2 = i2 - n2;
        let r2, a2;
        if (0 === s2) r2 = a2 = 0;
        else {
          a2 = s2 / i2;
          const n3 = ((i2 - t2) / 6 + s2 / 2) / s2, l2 = ((i2 - e2) / 6 + s2 / 2) / s2, c2 = ((i2 - o2) / 6 + s2 / 2) / s2;
          t2 === i2 ? r2 = c2 - l2 : e2 === i2 ? r2 = 1 / 3 + n3 - c2 : o2 === i2 && (r2 = 2 / 3 + l2 - n3), r2 < 0 ? r2 += 1 : r2 > 1 && (r2 -= 1);
        }
        return [360 * r2, 100 * a2, 100 * i2];
      }
      function y(t2, e2, o2, n2) {
        e2 /= 100, o2 /= 100;
        return [...b(255 * (1 - u(1, (t2 /= 100) * (1 - (n2 /= 100)) + n2)), 255 * (1 - u(1, e2 * (1 - n2) + n2)), 255 * (1 - u(1, o2 * (1 - n2) + n2)))];
      }
      function g(t2, e2, o2) {
        e2 /= 100;
        const n2 = 2 * (e2 *= (o2 /= 100) < 0.5 ? o2 : 1 - o2) / (o2 + e2) * 100, i2 = 100 * (o2 + e2);
        return [t2, isNaN(n2) ? 0 : n2, i2];
      }
      function _(t2) {
        return b(...t2.match(/.{2}/g).map(((t3) => parseInt(t3, 16))));
      }
      function w2(t2) {
        t2 = t2.match(/^[a-zA-Z]+$/) ? (function(t3) {
          if ("black" === t3.toLowerCase()) return "#000";
          const e3 = document.createElement("canvas").getContext("2d");
          return e3.fillStyle = t3, "#000" === e3.fillStyle ? null : e3.fillStyle;
        })(t2) : t2;
        const e2 = { cmyk: /^cmyk\D+([\d.]+)\D+([\d.]+)\D+([\d.]+)\D+([\d.]+)/i, rgba: /^rgba?\D+([\d.]+)(%?)\D+([\d.]+)(%?)\D+([\d.]+)(%?)\D*?(([\d.]+)(%?)|$)/i, hsla: /^hsla?\D+([\d.]+)\D+([\d.]+)\D+([\d.]+)\D*?(([\d.]+)(%?)|$)/i, hsva: /^hsva?\D+([\d.]+)\D+([\d.]+)\D+([\d.]+)\D*?(([\d.]+)(%?)|$)/i, hexa: /^#?(([\dA-Fa-f]{3,4})|([\dA-Fa-f]{6})|([\dA-Fa-f]{8}))$/i }, o2 = (t3) => t3.map(((t4) => /^(|\d+)\.\d+|\d+$/.test(t4) ? Number(t4) : void 0));
        let n2;
        t: for (const i2 in e2) if (n2 = e2[i2].exec(t2)) switch (i2) {
          case "cmyk": {
            const [, t3, e3, s2, r2] = o2(n2);
            if (t3 > 100 || e3 > 100 || s2 > 100 || r2 > 100) break t;
            return { values: y(t3, e3, s2, r2), type: i2 };
          }
          case "rgba": {
            let [, t3, , e3, , s2, , , r2] = o2(n2);
            if (t3 = "%" === n2[2] ? t3 / 100 * 255 : t3, e3 = "%" === n2[4] ? e3 / 100 * 255 : e3, s2 = "%" === n2[6] ? s2 / 100 * 255 : s2, r2 = "%" === n2[9] ? r2 / 100 : r2, t3 > 255 || e3 > 255 || s2 > 255 || r2 < 0 || r2 > 1) break t;
            return { values: [...b(t3, e3, s2), r2], a: r2, type: i2 };
          }
          case "hexa": {
            let [, t3] = n2;
            4 !== t3.length && 3 !== t3.length || (t3 = t3.split("").map(((t4) => t4 + t4)).join(""));
            const e3 = t3.substring(0, 6);
            let o3 = t3.substring(6);
            return o3 = o3 ? parseInt(o3, 16) / 255 : void 0, { values: [..._(e3), o3], a: o3, type: i2 };
          }
          case "hsla": {
            let [, t3, e3, s2, , r2] = o2(n2);
            if (r2 = "%" === n2[6] ? r2 / 100 : r2, t3 > 360 || e3 > 100 || s2 > 100 || r2 < 0 || r2 > 1) break t;
            return { values: [...g(t3, e3, s2), r2], a: r2, type: i2 };
          }
          case "hsva": {
            let [, t3, e3, s2, , r2] = o2(n2);
            if (r2 = "%" === n2[6] ? r2 / 100 : r2, t3 > 360 || e3 > 100 || s2 > 100 || r2 < 0 || r2 > 1) break t;
            return { values: [t3, e3, s2, r2], a: r2, type: i2 };
          }
        }
        return { values: null, type: null };
      }
      function A(t2 = 0, e2 = 0, o2 = 0, n2 = 1) {
        const i2 = (t3, e3) => (o3 = -1) => e3(~o3 ? t3.map(((t4) => Number(t4.toFixed(o3)))) : t3), s2 = { h: t2, s: e2, v: o2, a: n2, toHSVA() {
          const t3 = [s2.h, s2.s, s2.v, s2.a];
          return t3.toString = i2(t3, ((t4) => `hsva(${t4[0]}, ${t4[1]}%, ${t4[2]}%, ${s2.a})`)), t3;
        }, toHSLA() {
          const t3 = [...v(s2.h, s2.s, s2.v), s2.a];
          return t3.toString = i2(t3, ((t4) => `hsla(${t4[0]}, ${t4[1]}%, ${t4[2]}%, ${s2.a})`)), t3;
        }, toRGBA() {
          const t3 = [...f2(s2.h, s2.s, s2.v), s2.a];
          return t3.toString = i2(t3, ((t4) => `rgba(${t4[0]}, ${t4[1]}, ${t4[2]}, ${s2.a})`)), t3;
        }, toCMYK() {
          const t3 = (function(t4, e3, o3) {
            const n3 = f2(t4, e3, o3), i3 = n3[0] / 255, s3 = n3[1] / 255, r2 = n3[2] / 255, a2 = u(1 - i3, 1 - s3, 1 - r2);
            return [100 * (1 === a2 ? 0 : (1 - i3 - a2) / (1 - a2)), 100 * (1 === a2 ? 0 : (1 - s3 - a2) / (1 - a2)), 100 * (1 === a2 ? 0 : (1 - r2 - a2) / (1 - a2)), 100 * a2];
          })(s2.h, s2.s, s2.v);
          return t3.toString = i2(t3, ((t4) => `cmyk(${t4[0]}%, ${t4[1]}%, ${t4[2]}%, ${t4[3]}%)`)), t3;
        }, toHEXA() {
          const t3 = (function(t4, e4, o3) {
            return f2(t4, e4, o3).map(((t5) => m(t5).toString(16).padStart(2, "0")));
          })(s2.h, s2.s, s2.v), e3 = s2.a >= 1 ? "" : Number((255 * s2.a).toFixed(0)).toString(16).toUpperCase().padStart(2, "0");
          return e3 && t3.push(e3), t3.toString = () => `#${t3.join("").toUpperCase()}`, t3;
        }, clone: () => A(s2.h, s2.s, s2.v, s2.a) };
        return s2;
      }
      const $ = (t2) => Math.max(Math.min(t2, 1), 0);
      function C2(t2) {
        const e2 = { options: Object.assign({ lock: null, onchange: () => 0, onstop: () => 0 }, t2), _keyboard(t3) {
          const { options: o3 } = e2, { type: n3, key: i2 } = t3;
          if (document.activeElement === o3.wrapper) {
            const { lock: o4 } = e2.options, s2 = "ArrowUp" === i2, r3 = "ArrowRight" === i2, a2 = "ArrowDown" === i2, l2 = "ArrowLeft" === i2;
            if ("keydown" === n3 && (s2 || r3 || a2 || l2)) {
              let n4 = 0, i3 = 0;
              "v" === o4 ? n4 = s2 || r3 ? 1 : -1 : "h" === o4 ? n4 = s2 || r3 ? -1 : 1 : (i3 = s2 ? -1 : a2 ? 1 : 0, n4 = l2 ? -1 : r3 ? 1 : 0), e2.update($(e2.cache.x + 0.01 * n4), $(e2.cache.y + 0.01 * i3)), t3.preventDefault();
            } else i2.startsWith("Arrow") && (e2.options.onstop(), t3.preventDefault());
          }
        }, _tapstart(t3) {
          i(document, ["mouseup", "touchend", "touchcancel"], e2._tapstop), i(document, ["mousemove", "touchmove"], e2._tapmove), t3.cancelable && t3.preventDefault(), e2._tapmove(t3);
        }, _tapmove(t3) {
          const { options: o3, cache: n3 } = e2, { lock: i2, element: s2, wrapper: r3 } = o3, a2 = r3.getBoundingClientRect();
          let l2 = 0, c2 = 0;
          if (t3) {
            const e3 = t3 && t3.touches && t3.touches[0];
            l2 = t3 ? (e3 || t3).clientX : 0, c2 = t3 ? (e3 || t3).clientY : 0, l2 < a2.left ? l2 = a2.left : l2 > a2.left + a2.width && (l2 = a2.left + a2.width), c2 < a2.top ? c2 = a2.top : c2 > a2.top + a2.height && (c2 = a2.top + a2.height), l2 -= a2.left, c2 -= a2.top;
          } else n3 && (l2 = n3.x * a2.width, c2 = n3.y * a2.height);
          "h" !== i2 && (s2.style.left = `calc(${l2 / a2.width * 100}% - ${s2.offsetWidth / 2}px)`), "v" !== i2 && (s2.style.top = `calc(${c2 / a2.height * 100}% - ${s2.offsetHeight / 2}px)`), e2.cache = { x: l2 / a2.width, y: c2 / a2.height };
          const p2 = $(l2 / a2.width), u2 = $(c2 / a2.height);
          switch (i2) {
            case "v":
              return o3.onchange(p2);
            case "h":
              return o3.onchange(u2);
            default:
              return o3.onchange(p2, u2);
          }
        }, _tapstop() {
          e2.options.onstop(), s(document, ["mouseup", "touchend", "touchcancel"], e2._tapstop), s(document, ["mousemove", "touchmove"], e2._tapmove);
        }, trigger() {
          e2._tapmove();
        }, update(t3 = 0, o3 = 0) {
          const { left: n3, top: i2, width: s2, height: r3 } = e2.options.wrapper.getBoundingClientRect();
          "h" === e2.options.lock && (o3 = t3), e2._tapmove({ clientX: n3 + s2 * t3, clientY: i2 + r3 * o3 });
        }, destroy() {
          const { options: t3, _tapstart: o3, _keyboard: n3 } = e2;
          s(document, ["keydown", "keyup"], n3), s([t3.wrapper, t3.element], "mousedown", o3), s([t3.wrapper, t3.element], "touchstart", o3, { passive: false });
        } }, { options: o2, _tapstart: n2, _keyboard: r2 } = e2;
        return i([o2.wrapper, o2.element], "mousedown", n2), i([o2.wrapper, o2.element], "touchstart", n2, { passive: false }), i(document, ["keydown", "keyup"], r2), e2;
      }
      function k(t2 = {}) {
        t2 = Object.assign({ onchange: () => 0, className: "", elements: [] }, t2);
        const e2 = i(t2.elements, "click", ((e3) => {
          t2.elements.forEach(((o2) => o2.classList[e3.target === o2 ? "add" : "remove"](t2.className))), t2.onchange(e3), e3.stopPropagation();
        }));
        return { destroy: () => s(...e2) };
      }
      const S = { variantFlipOrder: { start: "sme", middle: "mse", end: "ems" }, positionFlipOrder: { top: "tbrl", right: "rltb", bottom: "btrl", left: "lrbt" }, position: "bottom", margin: 8, padding: 0 }, O = (t2, e2, o2) => {
        const n2 = "object" != typeof t2 || t2 instanceof HTMLElement ? { reference: t2, popper: e2, ...o2 } : t2;
        return { update(t3 = n2) {
          const { reference: e3, popper: o3 } = Object.assign(n2, t3);
          if (!o3 || !e3) throw new Error("Popper- or reference-element missing.");
          return ((t4, e4, o4) => {
            const { container: n3, arrow: i2, margin: s2, padding: r2, position: a2, variantFlipOrder: l2, positionFlipOrder: c2 } = { container: document.documentElement.getBoundingClientRect(), ...S, ...o4 }, { left: p2, top: u2 } = e4.style;
            e4.style.left = "0", e4.style.top = "0";
            const h2 = t4.getBoundingClientRect(), d2 = e4.getBoundingClientRect(), m2 = { t: h2.top - d2.height - s2, b: h2.bottom + s2, r: h2.right + s2, l: h2.left - d2.width - s2 }, f3 = { vs: h2.left, vm: h2.left + h2.width / 2 - d2.width / 2, ve: h2.left + h2.width - d2.width, hs: h2.top, hm: h2.bottom - h2.height / 2 - d2.height / 2, he: h2.bottom - d2.height }, [v2, b2 = "middle"] = a2.split("-"), y2 = c2[v2], g2 = l2[b2], { top: _2, left: w3, bottom: A2, right: $2 } = n3;
            for (const t5 of y2) {
              const o5 = "t" === t5 || "b" === t5;
              let n4 = m2[t5];
              const [s3, a3] = o5 ? ["top", "left"] : ["left", "top"], [l3, c3] = o5 ? [d2.height, d2.width] : [d2.width, d2.height], [p3, u3] = o5 ? [A2, $2] : [$2, A2], [v3, b3] = o5 ? [_2, w3] : [w3, _2];
              if (!(n4 < v3 || n4 + l3 + r2 > p3)) for (const p4 of g2) {
                let m3 = f3[(o5 ? "v" : "h") + p4];
                if (!(m3 < b3 || m3 + c3 + r2 > u3)) {
                  if (m3 -= d2[a3], n4 -= d2[s3], e4.style[a3] = `${m3}px`, e4.style[s3] = `${n4}px`, i2) {
                    const e5 = o5 ? h2.width / 2 : h2.height / 2, r3 = c3 / 2, u4 = e5 > r3, d3 = m3 + { s: u4 ? r3 : e5, m: r3, e: u4 ? r3 : c3 - e5 }[p4], f4 = n4 + { t: l3, b: 0, r: 0, l: l3 }[t5];
                    i2.style[a3] = `${d3}px`, i2.style[s3] = `${f4}px`;
                  }
                  return t5 + p4;
                }
              }
            }
            return e4.style.left = p2, e4.style.top = u2, null;
          })(e3, o3, n2);
        } };
      };
      const _E = class _E {
        constructor(t2) {
          __publicField(this, "_initializingActive", true);
          __publicField(this, "_recalc", true);
          __publicField(this, "_nanopop", null);
          __publicField(this, "_root", null);
          __publicField(this, "_color", A());
          __publicField(this, "_lastColor", A());
          __publicField(this, "_swatchColors", []);
          __publicField(this, "_setupAnimationFrame", null);
          __publicField(this, "_eventListener", { init: [], save: [], hide: [], show: [], clear: [], change: [], changestop: [], cancel: [], swatchselect: [] });
          this.options = t2 = Object.assign({ ..._E.DEFAULT_OPTIONS }, t2);
          const { swatches: e2, components: o2, theme: n2, sliders: i2, lockOpacity: s2, padding: r2 } = t2;
          ["nano", "monolith"].includes(n2) && !i2 && (t2.sliders = "h"), o2.interaction || (o2.interaction = {});
          const { preview: a2, opacity: l2, hue: c2, palette: p2 } = o2;
          o2.opacity = !s2 && l2, o2.palette = p2 || a2 || l2 || c2, this._preBuild(), this._buildComponents(), this._bindEvents(), this._finalBuild(), e2 && e2.length && e2.forEach(((t3) => this.addSwatch(t3)));
          const { button: u2, app: h2 } = this._root;
          this._nanopop = O(u2, h2, { margin: r2 }), u2.setAttribute("role", "button"), u2.setAttribute("aria-label", this._t("btn:toggle"));
          const d2 = this;
          this._setupAnimationFrame = requestAnimationFrame((function e3() {
            if (!h2.offsetWidth) return requestAnimationFrame(e3);
            d2.setColor(t2.default), d2._rePositioningPicker(), t2.defaultRepresentation && (d2._representation = t2.defaultRepresentation, d2.setColorRepresentation(d2._representation)), t2.showAlways && d2.show(), d2._initializingActive = false, d2._emit("init");
          }));
        }
        _preBuild() {
          const { options: t2 } = this;
          for (const e2 of ["el", "container"]) t2[e2] = c(t2[e2]);
          this._root = ((t3) => {
            const { components: e2, useAsButton: o2, inline: n2, appClass: i2, theme: s2, lockOpacity: r2 } = t3.options, l2 = (t4) => t4 ? "" : 'style="display:none" hidden', c2 = (e3) => t3._t(e3), p2 = a(`
      <div :ref="root" class="pickr">

        ${o2 ? "" : '<button type="button" :ref="button" class="pcr-button"></button>'}

        <div :ref="app" class="pcr-app ${i2 || ""}" data-theme="${s2}" ${n2 ? 'style="position: unset"' : ""} aria-label="${c2("ui:dialog")}" role="window">
          <div class="pcr-selection" ${l2(e2.palette)}>
            <div :obj="preview" class="pcr-color-preview" ${l2(e2.preview)}>
              <button type="button" :ref="lastColor" class="pcr-last-color" aria-label="${c2("btn:last-color")}"></button>
              <div :ref="currentColor" class="pcr-current-color"></div>
            </div>

            <div :obj="palette" class="pcr-color-palette">
              <div :ref="picker" class="pcr-picker"></div>
              <div :ref="palette" class="pcr-palette" tabindex="0" aria-label="${c2("aria:palette")}" role="listbox"></div>
            </div>

            <div :obj="hue" class="pcr-color-chooser" ${l2(e2.hue)}>
              <div :ref="picker" class="pcr-picker"></div>
              <div :ref="slider" class="pcr-hue pcr-slider" tabindex="0" aria-label="${c2("aria:hue")}" role="slider"></div>
            </div>

            <div :obj="opacity" class="pcr-color-opacity" ${l2(e2.opacity)}>
              <div :ref="picker" class="pcr-picker"></div>
              <div :ref="slider" class="pcr-opacity pcr-slider" tabindex="0" aria-label="${c2("aria:opacity")}" role="slider"></div>
            </div>
          </div>

          <div class="pcr-swatches ${e2.palette ? "" : "pcr-last"}" :ref="swatches"></div>

          <div :obj="interaction" class="pcr-interaction" ${l2(Object.keys(e2.interaction).length)}>
            <input :ref="result" class="pcr-result" type="text" spellcheck="false" ${l2(e2.interaction.input)} aria-label="${c2("aria:input")}">

            <input :arr="options" class="pcr-type" data-type="HEXA" value="${r2 ? "HEX" : "HEXA"}" type="button" ${l2(e2.interaction.hex)}>
            <input :arr="options" class="pcr-type" data-type="RGBA" value="${r2 ? "RGB" : "RGBA"}" type="button" ${l2(e2.interaction.rgba)}>
            <input :arr="options" class="pcr-type" data-type="HSLA" value="${r2 ? "HSL" : "HSLA"}" type="button" ${l2(e2.interaction.hsla)}>
            <input :arr="options" class="pcr-type" data-type="HSVA" value="${r2 ? "HSV" : "HSVA"}" type="button" ${l2(e2.interaction.hsva)}>
            <input :arr="options" class="pcr-type" data-type="CMYK" value="CMYK" type="button" ${l2(e2.interaction.cmyk)}>

            <input :ref="save" class="pcr-save" value="${c2("btn:save")}" type="button" ${l2(e2.interaction.save)} aria-label="${c2("aria:btn:save")}">
            <input :ref="cancel" class="pcr-cancel" value="${c2("btn:cancel")}" type="button" ${l2(e2.interaction.cancel)} aria-label="${c2("aria:btn:cancel")}">
            <input :ref="clear" class="pcr-clear" value="${c2("btn:clear")}" type="button" ${l2(e2.interaction.clear)} aria-label="${c2("aria:btn:clear")}">
          </div>
        </div>
      </div>
    `), u2 = p2.interaction;
            return u2.options.find(((t4) => !t4.hidden && !t4.classList.add("active"))), u2.type = () => u2.options.find(((t4) => t4.classList.contains("active"))), p2;
          })(this), t2.useAsButton && (this._root.button = t2.el), t2.container.appendChild(this._root.root);
        }
        _finalBuild() {
          const t2 = this.options, e2 = this._root;
          if (t2.container.removeChild(e2.root), t2.inline) {
            const o2 = t2.el.parentElement;
            t2.el.nextSibling ? o2.insertBefore(e2.app, t2.el.nextSibling) : o2.appendChild(e2.app);
          } else t2.container.appendChild(e2.app);
          t2.useAsButton ? t2.inline && t2.el.remove() : t2.el.parentNode.replaceChild(e2.root, t2.el), t2.disabled && this.disable(), t2.comparison || (e2.button.style.transition = "none", t2.useAsButton || (e2.preview.lastColor.style.transition = "none")), this.hide();
        }
        _buildComponents() {
          const t2 = this, e2 = this.options.components, o2 = (t2.options.sliders || "v").repeat(2), [n2, i2] = o2.match(/^[vh]+$/g) ? o2 : [], s2 = () => this._color || (this._color = this._lastColor.clone()), r2 = { palette: C2({ element: t2._root.palette.picker, wrapper: t2._root.palette.palette, onstop: () => t2._emit("changestop", "slider", t2), onchange(o3, n3) {
            if (!e2.palette) return;
            const i3 = s2(), { _root: r3, options: a2 } = t2, { lastColor: l2, currentColor: c2 } = r3.preview;
            t2._recalc && (i3.s = 100 * o3, i3.v = 100 - 100 * n3, i3.v < 0 && (i3.v = 0), t2._updateOutput("slider"));
            const p2 = i3.toRGBA().toString(0);
            this.element.style.background = p2, this.wrapper.style.background = `
                        linear-gradient(to top, rgba(0, 0, 0, ${i3.a}), transparent),
                        linear-gradient(to left, hsla(${i3.h}, 100%, 50%, ${i3.a}), rgba(255, 255, 255, ${i3.a}))
                    `, a2.comparison ? a2.useAsButton || t2._lastColor || l2.style.setProperty("--pcr-color", p2) : (r3.button.style.setProperty("--pcr-color", p2), r3.button.classList.remove("clear"));
            const u2 = i3.toHEXA().toString();
            for (const { el: e3, color: o4 } of t2._swatchColors) e3.classList[u2 === o4.toHEXA().toString() ? "add" : "remove"]("pcr-active");
            c2.style.setProperty("--pcr-color", p2);
          } }), hue: C2({ lock: "v" === i2 ? "h" : "v", element: t2._root.hue.picker, wrapper: t2._root.hue.slider, onstop: () => t2._emit("changestop", "slider", t2), onchange(o3) {
            if (!e2.hue || !e2.palette) return;
            const n3 = s2();
            t2._recalc && (n3.h = 360 * o3), this.element.style.backgroundColor = `hsl(${n3.h}, 100%, 50%)`, r2.palette.trigger();
          } }), opacity: C2({ lock: "v" === n2 ? "h" : "v", element: t2._root.opacity.picker, wrapper: t2._root.opacity.slider, onstop: () => t2._emit("changestop", "slider", t2), onchange(o3) {
            if (!e2.opacity || !e2.palette) return;
            const n3 = s2();
            t2._recalc && (n3.a = Math.round(100 * o3) / 100), this.element.style.background = `rgba(0, 0, 0, ${n3.a})`, r2.palette.trigger();
          } }), selectable: k({ elements: t2._root.interaction.options, className: "active", onchange(e3) {
            t2._representation = e3.target.getAttribute("data-type").toUpperCase(), t2._recalc && t2._updateOutput("swatch");
          } }) };
          this._components = r2;
        }
        _bindEvents() {
          const { _root: t2, options: e2 } = this, o2 = [i(t2.interaction.clear, "click", (() => this._clearColor())), i([t2.interaction.cancel, t2.preview.lastColor], "click", (() => {
            this.setHSVA(...(this._lastColor || this._color).toHSVA(), true), this._emit("cancel");
          })), i(t2.interaction.save, "click", (() => {
            !this.applyColor() && !e2.showAlways && this.hide();
          })), i(t2.interaction.result, ["keyup", "input"], ((t3) => {
            this.setColor(t3.target.value, true) && !this._initializingActive && (this._emit("change", this._color, "input", this), this._emit("changestop", "input", this)), t3.stopImmediatePropagation();
          })), i(t2.interaction.result, ["focus", "blur"], ((t3) => {
            this._recalc = "blur" === t3.type, this._recalc && this._updateOutput(null);
          })), i([t2.palette.palette, t2.palette.picker, t2.hue.slider, t2.hue.picker, t2.opacity.slider, t2.opacity.picker], ["mousedown", "touchstart"], (() => this._recalc = true), { passive: true })];
          if (!e2.showAlways) {
            const n2 = e2.closeWithKey;
            o2.push(i(t2.button, "click", (() => this.isOpen() ? this.hide() : this.show())), i(document, "keyup", ((t3) => this.isOpen() && (t3.key === n2 || t3.code === n2) && this.hide())), i(document, ["touchstart", "mousedown"], ((e3) => {
              this.isOpen() && !l(e3).some(((e4) => e4 === t2.app || e4 === t2.button)) && this.hide();
            }), { capture: true }));
          }
          if (e2.adjustableNumbers) {
            const e3 = { rgba: [255, 255, 255, 1], hsva: [360, 100, 100, 1], hsla: [360, 100, 100, 1], cmyk: [100, 100, 100, 100] };
            p(t2.interaction.result, ((t3, o3, n2) => {
              const i2 = e3[this.getColorRepresentation().toLowerCase()];
              if (i2) {
                const e4 = i2[n2], s2 = t3 + (e4 >= 100 ? 1e3 * o3 : o3);
                return s2 <= 0 ? 0 : Number((s2 < e4 ? s2 : e4).toPrecision(3));
              }
              return t3;
            }));
          }
          if (e2.autoReposition && !e2.inline) {
            let t3 = null;
            const n2 = this;
            o2.push(i(window, ["scroll", "resize"], (() => {
              n2.isOpen() && (e2.closeOnScroll && n2.hide(), null === t3 ? (t3 = setTimeout((() => t3 = null), 100), requestAnimationFrame((function e3() {
                n2._rePositioningPicker(), null !== t3 && requestAnimationFrame(e3);
              }))) : (clearTimeout(t3), t3 = setTimeout((() => t3 = null), 100)));
            }), { capture: true }));
          }
          this._eventBindings = o2;
        }
        _rePositioningPicker() {
          const { options: t2 } = this;
          if (!t2.inline) {
            if (!this._nanopop.update({ container: document.body.getBoundingClientRect(), position: t2.position })) {
              const t3 = this._root.app, e2 = t3.getBoundingClientRect();
              t3.style.top = (window.innerHeight - e2.height) / 2 + "px", t3.style.left = (window.innerWidth - e2.width) / 2 + "px";
            }
          }
        }
        _updateOutput(t2) {
          const { _root: e2, _color: o2, options: n2 } = this;
          if (e2.interaction.type()) {
            const t3 = `to${e2.interaction.type().getAttribute("data-type")}`;
            e2.interaction.result.value = "function" == typeof o2[t3] ? o2[t3]().toString(n2.outputPrecision) : "";
          }
          !this._initializingActive && this._recalc && this._emit("change", o2, t2, this);
        }
        _clearColor(t2 = false) {
          const { _root: e2, options: o2 } = this;
          o2.useAsButton || e2.button.style.setProperty("--pcr-color", "rgba(0, 0, 0, 0.15)"), e2.button.classList.add("clear"), o2.showAlways || this.hide(), this._lastColor = null, this._initializingActive || t2 || (this._emit("save", null), this._emit("clear"));
        }
        _parseLocalColor(t2) {
          const { values: e2, type: o2, a: n2 } = w2(t2), { lockOpacity: i2 } = this.options, s2 = void 0 !== n2 && 1 !== n2;
          return e2 && 3 === e2.length && (e2[3] = void 0), { values: !e2 || i2 && s2 ? null : e2, type: o2 };
        }
        _t(t2) {
          return this.options.i18n[t2] || _E.I18N_DEFAULTS[t2];
        }
        _emit(t2, ...e2) {
          this._eventListener[t2].forEach(((t3) => t3(...e2, this)));
        }
        on(t2, e2) {
          return this._eventListener[t2].push(e2), this;
        }
        off(t2, e2) {
          const o2 = this._eventListener[t2] || [], n2 = o2.indexOf(e2);
          return ~n2 && o2.splice(n2, 1), this;
        }
        addSwatch(t2) {
          const { values: e2 } = this._parseLocalColor(t2);
          if (e2) {
            const { _swatchColors: t3, _root: o2 } = this, n2 = A(...e2), s2 = r(`<button type="button" style="--pcr-color: ${n2.toRGBA().toString(0)}" aria-label="${this._t("btn:swatch")}"/>`);
            return o2.swatches.appendChild(s2), t3.push({ el: s2, color: n2 }), this._eventBindings.push(i(s2, "click", (() => {
              this.setHSVA(...n2.toHSVA(), true), this._emit("swatchselect", n2), this._emit("change", n2, "swatch", this);
            }))), true;
          }
          return false;
        }
        removeSwatch(t2) {
          const e2 = this._swatchColors[t2];
          if (e2) {
            const { el: o2 } = e2;
            return this._root.swatches.removeChild(o2), this._swatchColors.splice(t2, 1), true;
          }
          return false;
        }
        applyColor(t2 = false) {
          const { preview: e2, button: o2 } = this._root, n2 = this._color.toRGBA().toString(0);
          return e2.lastColor.style.setProperty("--pcr-color", n2), this.options.useAsButton || o2.style.setProperty("--pcr-color", n2), o2.classList.remove("clear"), this._lastColor = this._color.clone(), this._initializingActive || t2 || this._emit("save", this._color), this;
        }
        destroy() {
          cancelAnimationFrame(this._setupAnimationFrame), this._eventBindings.forEach(((t2) => s(...t2))), Object.keys(this._components).forEach(((t2) => this._components[t2].destroy()));
        }
        destroyAndRemove() {
          this.destroy();
          const { root: t2, app: e2 } = this._root;
          t2.parentElement && t2.parentElement.removeChild(t2), e2.parentElement.removeChild(e2), Object.keys(this).forEach(((t3) => this[t3] = null));
        }
        hide() {
          return !!this.isOpen() && (this._root.app.classList.remove("visible"), this._emit("hide"), true);
        }
        show() {
          return !this.options.disabled && !this.isOpen() && (this._root.app.classList.add("visible"), this._rePositioningPicker(), this._emit("show", this._color), this);
        }
        isOpen() {
          return this._root.app.classList.contains("visible");
        }
        setHSVA(t2 = 360, e2 = 0, o2 = 0, n2 = 1, i2 = false) {
          const s2 = this._recalc;
          if (this._recalc = false, t2 < 0 || t2 > 360 || e2 < 0 || e2 > 100 || o2 < 0 || o2 > 100 || n2 < 0 || n2 > 1) return false;
          this._color = A(t2, e2, o2, n2);
          const { hue: r2, opacity: a2, palette: l2 } = this._components;
          return r2.update(t2 / 360), a2.update(n2), l2.update(e2 / 100, 1 - o2 / 100), i2 || this.applyColor(), s2 && this._updateOutput(), this._recalc = s2, true;
        }
        setColor(t2, e2 = false) {
          if (null === t2) return this._clearColor(e2), true;
          const { values: o2, type: n2 } = this._parseLocalColor(t2);
          if (o2) {
            const t3 = n2.toUpperCase(), { options: i2 } = this._root.interaction, s2 = i2.find(((e3) => e3.getAttribute("data-type") === t3));
            if (s2 && !s2.hidden) for (const t4 of i2) t4.classList[t4 === s2 ? "add" : "remove"]("active");
            return !!this.setHSVA(...o2, e2) && this.setColorRepresentation(t3);
          }
          return false;
        }
        setColorRepresentation(t2) {
          return t2 = t2.toUpperCase(), !!this._root.interaction.options.find(((e2) => e2.getAttribute("data-type").startsWith(t2) && !e2.click()));
        }
        getColorRepresentation() {
          return this._representation;
        }
        getColor() {
          return this._color;
        }
        getSelectedColor() {
          return this._lastColor;
        }
        getRoot() {
          return this._root;
        }
        disable() {
          return this.hide(), this.options.disabled = true, this._root.button.classList.add("disabled"), this;
        }
        enable() {
          return this.options.disabled = false, this._root.button.classList.remove("disabled"), this;
        }
      };
      __publicField(_E, "utils", o);
      __publicField(_E, "version", "1.9.1");
      __publicField(_E, "I18N_DEFAULTS", { "ui:dialog": "color picker dialog", "btn:toggle": "toggle color picker dialog", "btn:swatch": "color swatch", "btn:last-color": "use previous color", "btn:save": "Save", "btn:cancel": "Cancel", "btn:clear": "Clear", "aria:btn:save": "save and close", "aria:btn:cancel": "cancel and close", "aria:btn:clear": "clear and close", "aria:input": "color input field", "aria:palette": "color selection area", "aria:hue": "hue selection slider", "aria:opacity": "selection slider" });
      __publicField(_E, "DEFAULT_OPTIONS", { appClass: null, theme: "classic", useAsButton: false, padding: 8, disabled: false, comparison: true, closeOnScroll: false, outputPrecision: 0, lockOpacity: false, autoReposition: true, container: "body", components: { interaction: {} }, i18n: {}, swatches: null, inline: false, sliders: null, default: "#42445a", defaultRepresentation: null, position: "bottom-middle", adjustableNumbers: true, showAlways: false, closeWithKey: "Escape" });
      __publicField(_E, "create", (t2) => new _E(t2));
      let E = _E;
      return e = e.default;
    })()));
  })(pickr_min);
  return pickr_min.exports;
}
var pickr_minExports = requirePickr_min();
const Pickr = /* @__PURE__ */ getDefaultExportFromCjs(pickr_minExports);
var index_browser = { exports: {} };
/*!
 * react-dual-listbox - v6.0.3
 * Copyright (c) Jake Zatecky
 * Licensed under the MIT License.
 */
var hasRequiredIndex_browser;
function requireIndex_browser() {
  if (hasRequiredIndex_browser) return index_browser.exports;
  hasRequiredIndex_browser = 1;
  (function(module, exports$1) {
    (function webpackUniversalModuleDefinition(root, factory) {
      module.exports = factory(requireReact());
    })(self, (__WEBPACK_EXTERNAL_MODULE__41__) => {
      return (
        /******/
        (() => {
          var __webpack_modules__ = [
            ,
            /* 1 */
            /***/
            ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                "default": () => __WEBPACK_DEFAULT_EXPORT__
                /* harmony export */
              });
              var lodash_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(2);
              var lodash_memoize__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__2.n(lodash_memoize__WEBPACK_IMPORTED_MODULE_0__);
              var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__2(53);
              var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /* @__PURE__ */ __webpack_require__2.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
              var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(41);
              var react__WEBPACK_IMPORTED_MODULE_1___default = /* @__PURE__ */ __webpack_require__2.n(react__WEBPACK_IMPORTED_MODULE_1__);
              var _components_ObjectValueWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(42);
              var _components_DualListBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(43);
              var _lang_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__2(87);
              var _shapes_iconsShape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__2(88);
              var _shapes_languageShape__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__2(89);
              var _contexts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__2(82);
              const wrapperPropTypes = {
                icons: _shapes_iconsShape__WEBPACK_IMPORTED_MODULE_5__["default"],
                lang: _shapes_languageShape__WEBPACK_IMPORTED_MODULE_6__["default"],
                simpleValue: prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool
              };
              const defaultIcons = {
                moveToAvailable: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
                  className: "rdl-icon rdl-icon-move-to-available"
                }),
                moveAllToAvailable: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
                  className: "rdl-icon rdl-icon-move-all-to-available"
                }),
                moveToSelected: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
                  className: "rdl-icon rdl-icon-move-to-selected"
                }),
                moveAllToSelected: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
                  className: "rdl-icon rdl-icon-move-all-to-selected"
                }),
                moveBottom: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
                  className: "rdl-icon rdl-icon-move-bottom"
                }),
                moveDown: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
                  className: "rdl-icon rdl-icon-move-down"
                }),
                moveUp: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
                  className: "rdl-icon rdl-icon-move-up"
                }),
                moveTop: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
                  className: "rdl-icon rdl-icon-move-top"
                })
              };
              const combineMemoized = lodash_memoize__WEBPACK_IMPORTED_MODULE_0___default()((newValue, defaultValue) => ({
                ...defaultValue,
                ...newValue
              }));
              function DualListBoxWrapper(_ref) {
                let {
                  icons = defaultIcons,
                  lang = _lang_default__WEBPACK_IMPORTED_MODULE_4__["default"],
                  simpleValue = true,
                  ...otherProps
                } = _ref;
                const mergedLang = combineMemoized(lang, _lang_default__WEBPACK_IMPORTED_MODULE_4__["default"]);
                const mergedIcons = combineMemoized(icons, defaultIcons);
                const ListBoxType = !simpleValue ? _components_ObjectValueWrapper__WEBPACK_IMPORTED_MODULE_2__["default"] : _components_DualListBox__WEBPACK_IMPORTED_MODULE_3__["default"];
                const mainProps = {
                  ..._components_DualListBox__WEBPACK_IMPORTED_MODULE_3__.defaultProps,
                  ...otherProps
                };
                return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_contexts__WEBPACK_IMPORTED_MODULE_7__.LanguageContext.Provider, {
                  value: mergedLang
                }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_contexts__WEBPACK_IMPORTED_MODULE_7__.IconContext.Provider, {
                  value: mergedIcons
                }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ListBoxType, mainProps)));
              }
              DualListBoxWrapper.propTypes = {
                ...wrapperPropTypes,
                ..._components_DualListBox__WEBPACK_IMPORTED_MODULE_3__.propTypes
              };
              const __WEBPACK_DEFAULT_EXPORT__ = DualListBoxWrapper;
            }),
            /* 2 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var MapCache = __webpack_require__2(3);
              var FUNC_ERROR_TEXT = "Expected a function";
              function memoize(func, resolver) {
                if (typeof func != "function" || resolver != null && typeof resolver != "function") {
                  throw new TypeError(FUNC_ERROR_TEXT);
                }
                var memoized = function() {
                  var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
                  if (cache.has(key)) {
                    return cache.get(key);
                  }
                  var result = func.apply(this, args);
                  memoized.cache = cache.set(key, result) || cache;
                  return result;
                };
                memoized.cache = new (memoize.Cache || MapCache)();
                return memoized;
              }
              memoize.Cache = MapCache;
              module2.exports = memoize;
            }),
            /* 3 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var mapCacheClear = __webpack_require__2(4), mapCacheDelete = __webpack_require__2(35), mapCacheGet = __webpack_require__2(38), mapCacheHas = __webpack_require__2(39), mapCacheSet = __webpack_require__2(40);
              function MapCache(entries) {
                var index = -1, length = entries == null ? 0 : entries.length;
                this.clear();
                while (++index < length) {
                  var entry = entries[index];
                  this.set(entry[0], entry[1]);
                }
              }
              MapCache.prototype.clear = mapCacheClear;
              MapCache.prototype["delete"] = mapCacheDelete;
              MapCache.prototype.get = mapCacheGet;
              MapCache.prototype.has = mapCacheHas;
              MapCache.prototype.set = mapCacheSet;
              module2.exports = MapCache;
            }),
            /* 4 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var Hash = __webpack_require__2(5), ListCache = __webpack_require__2(26), Map = __webpack_require__2(34);
              function mapCacheClear() {
                this.size = 0;
                this.__data__ = {
                  "hash": new Hash(),
                  "map": new (Map || ListCache)(),
                  "string": new Hash()
                };
              }
              module2.exports = mapCacheClear;
            }),
            /* 5 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var hashClear = __webpack_require__2(6), hashDelete = __webpack_require__2(22), hashGet = __webpack_require__2(23), hashHas = __webpack_require__2(24), hashSet = __webpack_require__2(25);
              function Hash(entries) {
                var index = -1, length = entries == null ? 0 : entries.length;
                this.clear();
                while (++index < length) {
                  var entry = entries[index];
                  this.set(entry[0], entry[1]);
                }
              }
              Hash.prototype.clear = hashClear;
              Hash.prototype["delete"] = hashDelete;
              Hash.prototype.get = hashGet;
              Hash.prototype.has = hashHas;
              Hash.prototype.set = hashSet;
              module2.exports = Hash;
            }),
            /* 6 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var nativeCreate = __webpack_require__2(7);
              function hashClear() {
                this.__data__ = nativeCreate ? nativeCreate(null) : {};
                this.size = 0;
              }
              module2.exports = hashClear;
            }),
            /* 7 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var getNative = __webpack_require__2(8);
              var nativeCreate = getNative(Object, "create");
              module2.exports = nativeCreate;
            }),
            /* 8 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var baseIsNative = __webpack_require__2(9), getValue = __webpack_require__2(21);
              function getNative(object, key) {
                var value = getValue(object, key);
                return baseIsNative(value) ? value : void 0;
              }
              module2.exports = getNative;
            }),
            /* 9 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var isFunction = __webpack_require__2(10), isMasked = __webpack_require__2(18), isObject = __webpack_require__2(17), toSource = __webpack_require__2(20);
              var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
              var reIsHostCtor = /^\[object .+?Constructor\]$/;
              var funcProto = Function.prototype, objectProto = Object.prototype;
              var funcToString = funcProto.toString;
              var hasOwnProperty = objectProto.hasOwnProperty;
              var reIsNative = RegExp(
                "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
              );
              function baseIsNative(value) {
                if (!isObject(value) || isMasked(value)) {
                  return false;
                }
                var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
                return pattern.test(toSource(value));
              }
              module2.exports = baseIsNative;
            }),
            /* 10 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var baseGetTag = __webpack_require__2(11), isObject = __webpack_require__2(17);
              var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
              function isFunction(value) {
                if (!isObject(value)) {
                  return false;
                }
                var tag = baseGetTag(value);
                return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
              }
              module2.exports = isFunction;
            }),
            /* 11 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var Symbol2 = __webpack_require__2(12), getRawTag = __webpack_require__2(15), objectToString = __webpack_require__2(16);
              var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
              var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
              function baseGetTag(value) {
                if (value == null) {
                  return value === void 0 ? undefinedTag : nullTag;
                }
                return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
              }
              module2.exports = baseGetTag;
            }),
            /* 12 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var root = __webpack_require__2(13);
              var Symbol2 = root.Symbol;
              module2.exports = Symbol2;
            }),
            /* 13 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var freeGlobal = __webpack_require__2(14);
              var freeSelf = typeof self == "object" && self && self.Object === Object && self;
              var root = freeGlobal || freeSelf || Function("return this")();
              module2.exports = root;
            }),
            /* 14 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var freeGlobal = typeof __webpack_require__2.g == "object" && __webpack_require__2.g && __webpack_require__2.g.Object === Object && __webpack_require__2.g;
              module2.exports = freeGlobal;
            }),
            /* 15 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var Symbol2 = __webpack_require__2(12);
              var objectProto = Object.prototype;
              var hasOwnProperty = objectProto.hasOwnProperty;
              var nativeObjectToString = objectProto.toString;
              var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
              function getRawTag(value) {
                var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
                try {
                  value[symToStringTag] = void 0;
                  var unmasked = true;
                } catch (e) {
                }
                var result = nativeObjectToString.call(value);
                if (unmasked) {
                  if (isOwn) {
                    value[symToStringTag] = tag;
                  } else {
                    delete value[symToStringTag];
                  }
                }
                return result;
              }
              module2.exports = getRawTag;
            }),
            /* 16 */
            /***/
            ((module2) => {
              var objectProto = Object.prototype;
              var nativeObjectToString = objectProto.toString;
              function objectToString(value) {
                return nativeObjectToString.call(value);
              }
              module2.exports = objectToString;
            }),
            /* 17 */
            /***/
            ((module2) => {
              function isObject(value) {
                var type = typeof value;
                return value != null && (type == "object" || type == "function");
              }
              module2.exports = isObject;
            }),
            /* 18 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var coreJsData = __webpack_require__2(19);
              var maskSrcKey = (function() {
                var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
                return uid ? "Symbol(src)_1." + uid : "";
              })();
              function isMasked(func) {
                return !!maskSrcKey && maskSrcKey in func;
              }
              module2.exports = isMasked;
            }),
            /* 19 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var root = __webpack_require__2(13);
              var coreJsData = root["__core-js_shared__"];
              module2.exports = coreJsData;
            }),
            /* 20 */
            /***/
            ((module2) => {
              var funcProto = Function.prototype;
              var funcToString = funcProto.toString;
              function toSource(func) {
                if (func != null) {
                  try {
                    return funcToString.call(func);
                  } catch (e) {
                  }
                  try {
                    return func + "";
                  } catch (e) {
                  }
                }
                return "";
              }
              module2.exports = toSource;
            }),
            /* 21 */
            /***/
            ((module2) => {
              function getValue(object, key) {
                return object == null ? void 0 : object[key];
              }
              module2.exports = getValue;
            }),
            /* 22 */
            /***/
            ((module2) => {
              function hashDelete(key) {
                var result = this.has(key) && delete this.__data__[key];
                this.size -= result ? 1 : 0;
                return result;
              }
              module2.exports = hashDelete;
            }),
            /* 23 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var nativeCreate = __webpack_require__2(7);
              var HASH_UNDEFINED = "__lodash_hash_undefined__";
              var objectProto = Object.prototype;
              var hasOwnProperty = objectProto.hasOwnProperty;
              function hashGet(key) {
                var data = this.__data__;
                if (nativeCreate) {
                  var result = data[key];
                  return result === HASH_UNDEFINED ? void 0 : result;
                }
                return hasOwnProperty.call(data, key) ? data[key] : void 0;
              }
              module2.exports = hashGet;
            }),
            /* 24 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var nativeCreate = __webpack_require__2(7);
              var objectProto = Object.prototype;
              var hasOwnProperty = objectProto.hasOwnProperty;
              function hashHas(key) {
                var data = this.__data__;
                return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
              }
              module2.exports = hashHas;
            }),
            /* 25 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var nativeCreate = __webpack_require__2(7);
              var HASH_UNDEFINED = "__lodash_hash_undefined__";
              function hashSet(key, value) {
                var data = this.__data__;
                this.size += this.has(key) ? 0 : 1;
                data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
                return this;
              }
              module2.exports = hashSet;
            }),
            /* 26 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var listCacheClear = __webpack_require__2(27), listCacheDelete = __webpack_require__2(28), listCacheGet = __webpack_require__2(31), listCacheHas = __webpack_require__2(32), listCacheSet = __webpack_require__2(33);
              function ListCache(entries) {
                var index = -1, length = entries == null ? 0 : entries.length;
                this.clear();
                while (++index < length) {
                  var entry = entries[index];
                  this.set(entry[0], entry[1]);
                }
              }
              ListCache.prototype.clear = listCacheClear;
              ListCache.prototype["delete"] = listCacheDelete;
              ListCache.prototype.get = listCacheGet;
              ListCache.prototype.has = listCacheHas;
              ListCache.prototype.set = listCacheSet;
              module2.exports = ListCache;
            }),
            /* 27 */
            /***/
            ((module2) => {
              function listCacheClear() {
                this.__data__ = [];
                this.size = 0;
              }
              module2.exports = listCacheClear;
            }),
            /* 28 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var assocIndexOf = __webpack_require__2(29);
              var arrayProto = Array.prototype;
              var splice = arrayProto.splice;
              function listCacheDelete(key) {
                var data = this.__data__, index = assocIndexOf(data, key);
                if (index < 0) {
                  return false;
                }
                var lastIndex = data.length - 1;
                if (index == lastIndex) {
                  data.pop();
                } else {
                  splice.call(data, index, 1);
                }
                --this.size;
                return true;
              }
              module2.exports = listCacheDelete;
            }),
            /* 29 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var eq = __webpack_require__2(30);
              function assocIndexOf(array, key) {
                var length = array.length;
                while (length--) {
                  if (eq(array[length][0], key)) {
                    return length;
                  }
                }
                return -1;
              }
              module2.exports = assocIndexOf;
            }),
            /* 30 */
            /***/
            ((module2) => {
              function eq(value, other) {
                return value === other || value !== value && other !== other;
              }
              module2.exports = eq;
            }),
            /* 31 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var assocIndexOf = __webpack_require__2(29);
              function listCacheGet(key) {
                var data = this.__data__, index = assocIndexOf(data, key);
                return index < 0 ? void 0 : data[index][1];
              }
              module2.exports = listCacheGet;
            }),
            /* 32 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var assocIndexOf = __webpack_require__2(29);
              function listCacheHas(key) {
                return assocIndexOf(this.__data__, key) > -1;
              }
              module2.exports = listCacheHas;
            }),
            /* 33 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var assocIndexOf = __webpack_require__2(29);
              function listCacheSet(key, value) {
                var data = this.__data__, index = assocIndexOf(data, key);
                if (index < 0) {
                  ++this.size;
                  data.push([key, value]);
                } else {
                  data[index][1] = value;
                }
                return this;
              }
              module2.exports = listCacheSet;
            }),
            /* 34 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var getNative = __webpack_require__2(8), root = __webpack_require__2(13);
              var Map = getNative(root, "Map");
              module2.exports = Map;
            }),
            /* 35 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var getMapData = __webpack_require__2(36);
              function mapCacheDelete(key) {
                var result = getMapData(this, key)["delete"](key);
                this.size -= result ? 1 : 0;
                return result;
              }
              module2.exports = mapCacheDelete;
            }),
            /* 36 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var isKeyable = __webpack_require__2(37);
              function getMapData(map, key) {
                var data = map.__data__;
                return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
              }
              module2.exports = getMapData;
            }),
            /* 37 */
            /***/
            ((module2) => {
              function isKeyable(value) {
                var type = typeof value;
                return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
              }
              module2.exports = isKeyable;
            }),
            /* 38 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var getMapData = __webpack_require__2(36);
              function mapCacheGet(key) {
                return getMapData(this, key).get(key);
              }
              module2.exports = mapCacheGet;
            }),
            /* 39 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var getMapData = __webpack_require__2(36);
              function mapCacheHas(key) {
                return getMapData(this, key).has(key);
              }
              module2.exports = mapCacheHas;
            }),
            /* 40 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var getMapData = __webpack_require__2(36);
              function mapCacheSet(key, value) {
                var data = getMapData(this, key), size = data.size;
                data.set(key, value);
                this.size += data.size == size ? 0 : 1;
                return this;
              }
              module2.exports = mapCacheSet;
            }),
            /* 41 */
            /***/
            ((module2) => {
              module2.exports = __WEBPACK_EXTERNAL_MODULE__41__;
            }),
            /* 42 */
            /***/
            ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                "default": () => __WEBPACK_DEFAULT_EXPORT__
                /* harmony export */
              });
              var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(41);
              var react__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__2.n(react__WEBPACK_IMPORTED_MODULE_0__);
              var _DualListBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(43);
              function _extends2() {
                _extends2 = Object.assign ? Object.assign.bind() : function(target) {
                  for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                      if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                      }
                    }
                  }
                  return target;
                };
                return _extends2.apply(this, arguments);
              }
              function flattenOptions(options, getOptionValue) {
                const flattened = [];
                options.forEach((option) => {
                  const value = getOptionValue(option);
                  if (value !== void 0) {
                    flattened.push(value);
                  } else if (option.options !== void 0) {
                    option.options.forEach((subOption) => {
                      flattened.push(getOptionValue(subOption));
                    });
                  }
                });
                return flattened;
              }
              function ObjectValueWrapper(props) {
                const {
                  available,
                  getOptionValue,
                  options,
                  selected,
                  onChange: onChange3
                } = props;
                const simpleAvailable = available ? flattenOptions(available, getOptionValue) : void 0;
                const simpleSelected = flattenOptions(selected, getOptionValue);
                const simpleOnChange = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newSelected, userSelection, controlKey) => {
                  const sourceValues = {
                    selected: newSelected
                  };
                  const complexValues = {
                    selected: []
                  };
                  Object.keys(sourceValues).forEach((key) => {
                    sourceValues[key].forEach((value) => {
                      options.forEach((option) => {
                        const optionValue = getOptionValue(option);
                        if (optionValue) {
                          if (optionValue === value) {
                            complexValues[key].push(option);
                          }
                        } else {
                          const subSelected = [];
                          option.options.forEach((subOption) => {
                            if (getOptionValue(subOption) === value) {
                              subSelected.push(subOption);
                            }
                          });
                          if (subSelected.length > 0) {
                            complexValues[key].push({
                              ...option,
                              options: subSelected
                            });
                          }
                        }
                      });
                    });
                  });
                  onChange3(complexValues.selected, userSelection, controlKey);
                }, [getOptionValue, options]);
                return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DualListBox__WEBPACK_IMPORTED_MODULE_1__["default"], _extends2({}, props, {
                  available: simpleAvailable,
                  selected: simpleSelected,
                  onChange: simpleOnChange
                }));
              }
              ObjectValueWrapper.propTypes = _DualListBox__WEBPACK_IMPORTED_MODULE_1__.propTypes;
              const __WEBPACK_DEFAULT_EXPORT__ = ObjectValueWrapper;
            }),
            /* 43 */
            /***/
            ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                "default": () => __WEBPACK_DEFAULT_EXPORT__,
                /* harmony export */
                defaultProps: () => (
                  /* binding */
                  defaultProps
                ),
                /* harmony export */
                propTypes: () => (
                  /* binding */
                  propTypes
                )
                /* harmony export */
              });
              var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(44);
              var classnames__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__2.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
              var lodash_escapeRegExp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(45);
              var lodash_escapeRegExp__WEBPACK_IMPORTED_MODULE_1___default = /* @__PURE__ */ __webpack_require__2.n(lodash_escapeRegExp__WEBPACK_IMPORTED_MODULE_1__);
              var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__2(53);
              var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /* @__PURE__ */ __webpack_require__2.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
              var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(41);
              var react__WEBPACK_IMPORTED_MODULE_2___default = /* @__PURE__ */ __webpack_require__2.n(react__WEBPACK_IMPORTED_MODULE_2__);
              var _shapes_refShape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(52);
              var _shapes_optionsShape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__2(63);
              var _shapes_valueShape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__2(66);
              var _util_indexesOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__2(67);
              var _util_mergeRefs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__2(68);
              var _util_swapOptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__2(69);
              var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__2(70);
              var _Action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__2(71);
              var _HiddenInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__2(84);
              var _ListBox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__2(85);
              const propTypes = {
                options: _shapes_optionsShape__WEBPACK_IMPORTED_MODULE_4__["default"].isRequired,
                onChange: prop_types__WEBPACK_IMPORTED_MODULE_13___default().func.isRequired,
                alignActions: prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOf([_constants__WEBPACK_IMPORTED_MODULE_9__.ALIGNMENTS.MIDDLE, _constants__WEBPACK_IMPORTED_MODULE_9__.ALIGNMENTS.TOP]),
                allowDuplicates: prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool,
                available: _shapes_valueShape__WEBPACK_IMPORTED_MODULE_5__["default"],
                availableRef: _shapes_refShape__WEBPACK_IMPORTED_MODULE_3__["default"],
                canFilter: prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool,
                className: prop_types__WEBPACK_IMPORTED_MODULE_13___default().string,
                disabled: prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool,
                filter: prop_types__WEBPACK_IMPORTED_MODULE_13___default().shape({
                  available: prop_types__WEBPACK_IMPORTED_MODULE_13___default().string.isRequired,
                  selected: prop_types__WEBPACK_IMPORTED_MODULE_13___default().string.isRequired
                }),
                filterCallback: prop_types__WEBPACK_IMPORTED_MODULE_13___default().func,
                getOptionLabel: prop_types__WEBPACK_IMPORTED_MODULE_13___default().func,
                getOptionValue: prop_types__WEBPACK_IMPORTED_MODULE_13___default().func,
                htmlDir: prop_types__WEBPACK_IMPORTED_MODULE_13___default().string,
                iconsClass: prop_types__WEBPACK_IMPORTED_MODULE_13___default().string,
                id: prop_types__WEBPACK_IMPORTED_MODULE_13___default().string,
                moveKeys: prop_types__WEBPACK_IMPORTED_MODULE_13___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_13___default().string),
                name: prop_types__WEBPACK_IMPORTED_MODULE_13___default().string,
                preserveSelectOrder: prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool,
                required: prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool,
                selected: _shapes_valueShape__WEBPACK_IMPORTED_MODULE_5__["default"],
                selectedRef: _shapes_refShape__WEBPACK_IMPORTED_MODULE_3__["default"],
                showHeaderLabels: prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool,
                showNoOptionsText: prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool,
                showOrderButtons: prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool,
                onFilterChange: prop_types__WEBPACK_IMPORTED_MODULE_13___default().func
              };
              const defaultFilter = (option, filterInput, _ref) => {
                let {
                  getOptionLabel
                } = _ref;
                if (filterInput === "") {
                  return true;
                }
                return new RegExp(lodash_escapeRegExp__WEBPACK_IMPORTED_MODULE_1___default()(filterInput), "i").test(getOptionLabel(option));
              };
              const defaultProps = {
                alignActions: _constants__WEBPACK_IMPORTED_MODULE_9__.ALIGNMENTS.MIDDLE,
                allowDuplicates: false,
                available: void 0,
                availableRef: null,
                canFilter: false,
                className: null,
                disabled: false,
                filter: null,
                filterCallback: defaultFilter,
                getOptionLabel: (_ref2) => {
                  let {
                    label
                  } = _ref2;
                  return label;
                },
                getOptionValue: (_ref3) => {
                  let {
                    value
                  } = _ref3;
                  return value;
                },
                htmlDir: "ltr",
                iconsClass: "fa6",
                id: "rdl",
                moveKeys: [_constants__WEBPACK_IMPORTED_MODULE_9__.KEYS.SPACEBAR, _constants__WEBPACK_IMPORTED_MODULE_9__.KEYS.ENTER],
                name: null,
                preserveSelectOrder: null,
                required: false,
                selected: [],
                selectedRef: null,
                showHeaderLabels: false,
                showNoOptionsText: false,
                showOrderButtons: false,
                onFilterChange: null
              };
              function DualListBox2(props) {
                const {
                  selected,
                  filter: filterProp
                } = props;
                const availableRef = (0, react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
                const selectedRef = (0, react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
                const [filter, setFilter] = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(filterProp !== null ? filterProp : {
                  available: "",
                  selected: ""
                });
                const [selections, setSelections] = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)({
                  available: [],
                  selected: []
                });
                (0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
                  if (filterProp !== null) {
                    setFilter(filterProp);
                  }
                }, [filterProp]);
                function getValueMap(options2) {
                  const {
                    getOptionValue
                  } = props;
                  let valueMap = {};
                  options2.forEach((option) => {
                    const {
                      options: children
                    } = option;
                    const value = getOptionValue(option);
                    if (children !== void 0) {
                      valueMap = {
                        ...valueMap,
                        ...getValueMap(children)
                      };
                    } else {
                      valueMap[value] = option;
                    }
                  });
                  return valueMap;
                }
                function getMarkedOptions(element) {
                  if (element === null) {
                    return [];
                  }
                  return Array.from(element.options).map((_ref4, index) => {
                    let {
                      dataset,
                      label,
                      selected: isSelected
                    } = _ref4;
                    return {
                      index,
                      isSelected,
                      label,
                      order: parseInt(dataset.order, 10),
                      value: JSON.parse(dataset.value)
                    };
                  }).filter((_ref5) => {
                    let {
                      isSelected
                    } = _ref5;
                    return isSelected;
                  });
                }
                function filterOptions(options2, filterer, filterInput) {
                  let ignoreSearch = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
                  const {
                    canFilter: canFilter2,
                    filterCallback
                  } = props;
                  const filtered = [];
                  options2.forEach((option) => {
                    if (option.options !== void 0) {
                      const filteredChildren = filterOptions(
                        option.options,
                        filterer,
                        filterInput,
                        // If the parent succeeds the search filter, then all children also pass
                        ignoreSearch || filterCallback(option, filterInput, props)
                      );
                      if (filteredChildren.length > 0) {
                        filtered.push({
                          ...option,
                          options: filteredChildren
                        });
                      }
                    } else {
                      const subFiltered = [];
                      const filterResult = filterer(option);
                      if (Array.isArray(filterResult)) {
                        filterResult.forEach((index) => {
                          subFiltered.push({
                            ...option,
                            order: index
                          });
                        });
                      } else if (filterResult) {
                        subFiltered.push(option);
                      }
                      if (subFiltered.length > 0) {
                        if (canFilter2 && !ignoreSearch && !filterCallback(option, filterInput, props)) {
                          return;
                        }
                        subFiltered.forEach((subItem) => {
                          filtered.push(subItem);
                        });
                      }
                    }
                  });
                  return filtered;
                }
                function filterAvailable(options2) {
                  let ignoreSearch = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                  const {
                    allowDuplicates,
                    available,
                    getOptionValue
                  } = props;
                  const {
                    available: availableFilter
                  } = filter;
                  const filters = [];
                  if (available !== void 0) {
                    filters.push((option) => available.indexOf(getOptionValue(option)) >= 0);
                  }
                  if (!allowDuplicates) {
                    filters.push((option) => selected.indexOf(getOptionValue(option)) < 0);
                  }
                  const filterer = (option) => filters.reduce((previousValue, filterFunction) => previousValue && filterFunction(option), true);
                  return filterOptions(options2, filterer, availableFilter, ignoreSearch);
                }
                function filterSelectedByOrder(options2) {
                  const {
                    canFilter: canFilter2,
                    filterCallback
                  } = props;
                  const {
                    selected: selectedFilter
                  } = filter;
                  const valueMap = getValueMap(options2);
                  const selectedOptions2 = selected.map((value, index) => ({
                    ...valueMap[value],
                    order: index
                  }));
                  if (canFilter2) {
                    return selectedOptions2.filter((selectedOption) => filterCallback(selectedOption, selectedFilter, props));
                  }
                  return selectedOptions2;
                }
                function filterSelected(options2) {
                  let ignoreSearch = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                  const {
                    getOptionValue,
                    preserveSelectOrder: preserveSelectOrder2
                  } = props;
                  const {
                    selected: selectedFilter
                  } = filter;
                  if (preserveSelectOrder2) {
                    return filterSelectedByOrder(options2);
                  }
                  return filterOptions(options2, (option) => (0, _util_indexesOf__WEBPACK_IMPORTED_MODULE_6__["default"])(selected, getOptionValue(option)), selectedFilter, ignoreSearch);
                }
                function rearrangeSelected(markedOptions, direction) {
                  let newOrder = [...selected];
                  if (markedOptions.length === 0) {
                    return newOrder;
                  }
                  if (direction === "up") {
                    if (markedOptions[markedOptions.length - 1].order > markedOptions.length - 1) {
                      markedOptions.forEach((_ref6) => {
                        let {
                          order
                        } = _ref6;
                        if (order > 0) {
                          newOrder = (0, _util_swapOptions__WEBPACK_IMPORTED_MODULE_8__["default"])(order, order - 1)(newOrder);
                        }
                      });
                    }
                  } else if (direction === "down") {
                    if (markedOptions[0].order < selected.length - markedOptions.length) {
                      markedOptions.reverse().forEach((_ref7) => {
                        let {
                          order
                        } = _ref7;
                        if (order < selected.length - 1) {
                          newOrder = (0, _util_swapOptions__WEBPACK_IMPORTED_MODULE_8__["default"])(order, order + 1)(newOrder);
                        }
                      });
                    }
                  }
                  return newOrder;
                }
                function rearrangeToExtremes(markedOptions, direction) {
                  let unmarked = [...selected];
                  markedOptions.forEach((_ref8) => {
                    let {
                      order
                    } = _ref8;
                    unmarked[order] = null;
                  });
                  unmarked = unmarked.filter((v) => v !== null);
                  const marked = markedOptions.map((_ref9) => {
                    let {
                      order
                    } = _ref9;
                    return selected[order];
                  });
                  if (direction === "top") {
                    return [...marked, ...unmarked];
                  }
                  return [...unmarked, ...marked];
                }
                function makeOptionsSelectedRecursive(options2) {
                  const {
                    getOptionValue
                  } = props;
                  let newSelected = [];
                  options2.forEach((option) => {
                    if (option.disabled) {
                      return;
                    }
                    if (option.options !== void 0) {
                      newSelected = [...newSelected, ...makeOptionsSelectedRecursive(option.options)];
                    } else {
                      newSelected.push(getOptionValue(option));
                    }
                  });
                  return newSelected;
                }
                function makeOptionsSelected(options2) {
                  const availableOptions2 = filterAvailable(options2);
                  return [...selected, ...makeOptionsSelectedRecursive(availableOptions2)];
                }
                function makeOptionsUnselectedRecursive(previousSelected, optionsToRemove) {
                  const {
                    getOptionValue
                  } = props;
                  let newSelected = [...previousSelected];
                  optionsToRemove.forEach((option) => {
                    if (option.options !== void 0) {
                      newSelected = makeOptionsUnselectedRecursive(newSelected, option.options);
                    } else if (!option.disabled) {
                      newSelected = newSelected.filter((oldValue) => oldValue !== getOptionValue(option));
                    }
                  });
                  return newSelected;
                }
                function makeOptionsUnselected(options2) {
                  return makeOptionsUnselectedRecursive(selected, filterSelected(options2));
                }
                function toggleHighlighted(toggleItems, controlKey) {
                  const {
                    allowDuplicates
                  } = props;
                  const selectedItems = selected.slice(0);
                  const toggleItemsMap = {
                    ...selectedItems
                  };
                  toggleItems.forEach((_ref10) => {
                    let {
                      value,
                      order
                    } = _ref10;
                    const inSelectedOptions = selectedItems.indexOf(value) > -1;
                    if (inSelectedOptions && (!allowDuplicates || controlKey === "selected")) {
                      delete toggleItemsMap[order];
                    } else {
                      selectedItems.push(value);
                    }
                  });
                  if (controlKey === "selected") {
                    return Object.keys(toggleItemsMap).map((key) => toggleItemsMap[key]);
                  }
                  return selectedItems;
                }
                function onChange3(newSelected, selection, controlKey) {
                  let isRearrange = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
                  const {
                    onChange: onChangeProp
                  } = props;
                  const userSelection = selection.map((_ref11) => {
                    let {
                      index,
                      label,
                      value
                    } = _ref11;
                    return {
                      index,
                      label,
                      value
                    };
                  });
                  onChangeProp(newSelected, userSelection, controlKey);
                  if (!isRearrange) {
                    setSelections({
                      ...selections,
                      [controlKey]: []
                    });
                  }
                }
                const onActionClick = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((_ref12) => {
                  let {
                    direction,
                    isMoveAll
                  } = _ref12;
                  const {
                    options: options2
                  } = props;
                  const isToSelected = direction === "toSelected";
                  const sourceListBox = isToSelected ? availableRef : selectedRef;
                  const marked = getMarkedOptions(sourceListBox.current);
                  let isRearrangement = false;
                  let newSelected;
                  if (["up", "down"].indexOf(direction) > -1) {
                    isRearrangement = true;
                    newSelected = rearrangeSelected(marked, direction);
                  } else if (["top", "bottom"].indexOf(direction) > -1) {
                    isRearrangement = true;
                    newSelected = rearrangeToExtremes(marked, direction);
                  } else if (isMoveAll) {
                    newSelected = isToSelected ? makeOptionsSelected(options2) : makeOptionsUnselected(options2);
                  } else {
                    newSelected = toggleHighlighted(marked, isToSelected ? "available" : "selected");
                  }
                  onChange3(newSelected, marked, isToSelected ? "available" : "selected", isRearrangement);
                }, [selected, filter]);
                const onOptionDoubleClick = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((event, controlKey) => {
                  if (event.target.tagName === "OPTGROUP") {
                    return;
                  }
                  const marked = getMarkedOptions(event.currentTarget);
                  const newSelected = toggleHighlighted(marked, controlKey);
                  onChange3(newSelected, marked, controlKey);
                }, [selected]);
                const onOptionKeyUp = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((event, controlKey) => {
                  const {
                    currentTarget,
                    key
                  } = event;
                  const {
                    moveKeys
                  } = props;
                  if (moveKeys.indexOf(key) > -1) {
                    const marked = getMarkedOptions(currentTarget);
                    const newSelected = toggleHighlighted(marked, controlKey);
                    onChange3(newSelected, marked, controlKey);
                  }
                }, [selected]);
                const onSelectionChange = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((event, controlKey) => {
                  const {
                    target: {
                      options: options2
                    }
                  } = event;
                  const newSelections = Array.from(options2).filter((_ref13) => {
                    let {
                      selected: isSelected
                    } = _ref13;
                    return isSelected;
                  }).map((_ref14) => {
                    let {
                      value
                    } = _ref14;
                    return value;
                  });
                  setSelections({
                    ...selections,
                    [controlKey]: newSelections
                  });
                }, [selections]);
                const onFilterChangeCallback = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((event) => {
                  const {
                    onFilterChange
                  } = props;
                  const {
                    target: {
                      value,
                      dataset: {
                        controlKey
                      }
                    }
                  } = event;
                  const newFilter = {
                    ...filter,
                    [controlKey]: value
                  };
                  if (onFilterChange) {
                    onFilterChange(newFilter);
                  } else {
                    setFilter(newFilter);
                  }
                }, [filter]);
                const onHiddenFocus = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
                  availableRef.current.focus();
                }, []);
                function renderOptions(options2) {
                  const {
                    allowDuplicates,
                    getOptionLabel,
                    getOptionValue
                  } = props;
                  return options2.map((option) => {
                    const label = getOptionLabel(option);
                    const value = getOptionValue(option);
                    const key = !allowDuplicates ? `${value}-${label}` : `${value}-${label}-${option.order}`;
                    if (option.options !== void 0) {
                      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("optgroup", {
                        key,
                        disabled: option.disabled,
                        label,
                        title: option.title
                      }, renderOptions(option.options));
                    }
                    const optionValue = !allowDuplicates ? value : `${value}-${option.order}`;
                    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
                      key,
                      "data-order": option.order,
                      "data-value": JSON.stringify(value),
                      disabled: option.disabled,
                      title: option.title,
                      value: optionValue
                    }, label);
                  });
                }
                function renderListBox(controlKey, options2, ref, actions) {
                  const {
                    alignActions: alignActions2,
                    canFilter: canFilter2,
                    [`${controlKey}Ref`]: refProp,
                    disabled: disabled2,
                    id: id2,
                    showNoOptionsText
                  } = props;
                  const wrapHandler = (handler) => (event) => handler(event, controlKey);
                  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ListBox__WEBPACK_IMPORTED_MODULE_12__["default"], {
                    actions: alignActions2 === _constants__WEBPACK_IMPORTED_MODULE_9__.ALIGNMENTS.TOP ? actions : null,
                    canFilter: canFilter2,
                    controlKey,
                    disabled: disabled2,
                    filterValue: filter[controlKey],
                    id: id2,
                    inputRef: (0, _util_mergeRefs__WEBPACK_IMPORTED_MODULE_7__["default"])([ref, refProp]),
                    selections: selections[controlKey],
                    showNoOptionsText,
                    onDoubleClick: wrapHandler(onOptionDoubleClick),
                    onFilterChange: wrapHandler(onFilterChangeCallback),
                    onKeyUp: wrapHandler(onOptionKeyUp),
                    onSelectionChange: wrapHandler(onSelectionChange)
                  }, options2);
                }
                const {
                  alignActions,
                  canFilter,
                  className,
                  disabled,
                  htmlDir,
                  iconsClass,
                  id,
                  name,
                  options,
                  preserveSelectOrder,
                  required,
                  showHeaderLabels,
                  showOrderButtons
                } = props;
                const availableOptions = renderOptions(filterAvailable(options));
                const selectedOptions = renderOptions(filterSelected(options));
                const makeAction = function(direction) {
                  let isMoveAll = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Action__WEBPACK_IMPORTED_MODULE_10__["default"], {
                    direction,
                    disabled,
                    isMoveAll,
                    onClick: onActionClick
                  });
                };
                const actionsToSelected = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
                  className: "rdl-actions-to-selected"
                }, makeAction("toSelected", true), makeAction("toSelected"));
                const actionsToAvailable = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
                  className: "rdl-actions-to-available"
                }, makeAction("toAvailable"), makeAction("toAvailable", true));
                const rootClassName = classnames__WEBPACK_IMPORTED_MODULE_0___default()({
                  "react-dual-listbox": true,
                  [`rdl-icons-${iconsClass}`]: true,
                  "rdl-has-filter": canFilter,
                  "rdl-has-header": showHeaderLabels,
                  "rdl-align-top": alignActions === _constants__WEBPACK_IMPORTED_MODULE_9__.ALIGNMENTS.TOP,
                  ...className && {
                    [className]: true
                  }
                });
                return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
                  className: rootClassName,
                  dir: htmlDir,
                  id
                }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
                  className: "rdl-controls"
                }, renderListBox("available", availableOptions, availableRef, actionsToSelected), alignActions === _constants__WEBPACK_IMPORTED_MODULE_9__.ALIGNMENTS.MIDDLE ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
                  className: "rdl-actions"
                }, actionsToSelected, actionsToAvailable) : null, renderListBox("selected", selectedOptions, selectedRef, actionsToAvailable), preserveSelectOrder && showOrderButtons ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
                  className: "rdl-actions"
                }, makeAction("top"), makeAction("up"), makeAction("down"), makeAction("bottom")) : null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_HiddenInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  availableRef,
                  disabled,
                  name,
                  required,
                  selected,
                  onFocus: onHiddenFocus
                }));
              }
              DualListBox2.propTypes = propTypes;
              const __WEBPACK_DEFAULT_EXPORT__ = DualListBox2;
            }),
            /* 44 */
            /***/
            ((module2, exports2) => {
              var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
              /*!
              	Copyright (c) 2018 Jed Watson.
              	Licensed under the MIT License (MIT), see
              	http://jedwatson.github.io/classnames
              */
              (function() {
                var hasOwn = {}.hasOwnProperty;
                function classNames() {
                  var classes = [];
                  for (var i = 0; i < arguments.length; i++) {
                    var arg = arguments[i];
                    if (!arg) continue;
                    var argType = typeof arg;
                    if (argType === "string" || argType === "number") {
                      classes.push(arg);
                    } else if (Array.isArray(arg)) {
                      if (arg.length) {
                        var inner = classNames.apply(null, arg);
                        if (inner) {
                          classes.push(inner);
                        }
                      }
                    } else if (argType === "object") {
                      if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
                        classes.push(arg.toString());
                        continue;
                      }
                      for (var key in arg) {
                        if (hasOwn.call(arg, key) && arg[key]) {
                          classes.push(key);
                        }
                      }
                    }
                  }
                  return classes.join(" ");
                }
                if (module2.exports) {
                  classNames.default = classNames;
                  module2.exports = classNames;
                } else {
                  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                    return classNames;
                  }).apply(exports2, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module2.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                }
              })();
            }),
            /* 45 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var toString = __webpack_require__2(46);
              var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
              function escapeRegExp(string) {
                string = toString(string);
                return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
              }
              module2.exports = escapeRegExp;
            }),
            /* 46 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var baseToString = __webpack_require__2(47);
              function toString(value) {
                return value == null ? "" : baseToString(value);
              }
              module2.exports = toString;
            }),
            /* 47 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var Symbol2 = __webpack_require__2(12), arrayMap = __webpack_require__2(48), isArray = __webpack_require__2(49), isSymbol = __webpack_require__2(50);
              var symbolProto = Symbol2 ? Symbol2.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
              function baseToString(value) {
                if (typeof value == "string") {
                  return value;
                }
                if (isArray(value)) {
                  return arrayMap(value, baseToString) + "";
                }
                if (isSymbol(value)) {
                  return symbolToString ? symbolToString.call(value) : "";
                }
                var result = value + "";
                return result == "0" && 1 / value == -Infinity ? "-0" : result;
              }
              module2.exports = baseToString;
            }),
            /* 48 */
            /***/
            ((module2) => {
              function arrayMap(array, iteratee) {
                var index = -1, length = array == null ? 0 : array.length, result = Array(length);
                while (++index < length) {
                  result[index] = iteratee(array[index], index, array);
                }
                return result;
              }
              module2.exports = arrayMap;
            }),
            /* 49 */
            /***/
            ((module2) => {
              var isArray = Array.isArray;
              module2.exports = isArray;
            }),
            /* 50 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var baseGetTag = __webpack_require__2(11), isObjectLike = __webpack_require__2(51);
              var symbolTag = "[object Symbol]";
              function isSymbol(value) {
                return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
              }
              module2.exports = isSymbol;
            }),
            /* 51 */
            /***/
            ((module2) => {
              function isObjectLike(value) {
                return value != null && typeof value == "object";
              }
              module2.exports = isObjectLike;
            }),
            /* 52 */
            /***/
            ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                "default": () => __WEBPACK_DEFAULT_EXPORT__
                /* harmony export */
              });
              var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(53);
              var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__2.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
              const elementType = typeof Element === "undefined" ? () => {
              } : Element;
              const refShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default().func, prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
                current: prop_types__WEBPACK_IMPORTED_MODULE_0___default().instanceOf(elementType)
              })]);
              const __WEBPACK_DEFAULT_EXPORT__ = refShape;
            }),
            /* 53 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              {
                module2.exports = __webpack_require__2(62)();
              }
            }),
            /* 54 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              {
                module2.exports = __webpack_require__2(55);
              }
            }),
            /* 55 */
            /***/
            ((__unused_webpack_module, exports2) => {
              /** @license React v16.13.1
               * react-is.production.min.js
               *
               * Copyright (c) Facebook, Inc. and its affiliates.
               *
               * This source code is licensed under the MIT license found in the
               * LICENSE file in the root directory of this source tree.
               */
              var b = "function" === typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f2 = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p = b ? Symbol.for("react.suspense") : 60113, q2 = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121, w2 = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
              function z(a) {
                if ("object" === typeof a && null !== a) {
                  var u = a.$$typeof;
                  switch (u) {
                    case c:
                      switch (a = a.type, a) {
                        case l:
                        case m:
                        case e:
                        case g:
                        case f2:
                        case p:
                          return a;
                        default:
                          switch (a = a && a.$$typeof, a) {
                            case k:
                            case n:
                            case t:
                            case r:
                            case h:
                              return a;
                            default:
                              return u;
                          }
                      }
                    case d:
                      return u;
                  }
                }
              }
              function A(a) {
                return z(a) === m;
              }
              exports2.AsyncMode = l;
              exports2.ConcurrentMode = m;
              exports2.ContextConsumer = k;
              exports2.ContextProvider = h;
              exports2.Element = c;
              exports2.ForwardRef = n;
              exports2.Fragment = e;
              exports2.Lazy = t;
              exports2.Memo = r;
              exports2.Portal = d;
              exports2.Profiler = g;
              exports2.StrictMode = f2;
              exports2.Suspense = p;
              exports2.isAsyncMode = function(a) {
                return A(a) || z(a) === l;
              };
              exports2.isConcurrentMode = A;
              exports2.isContextConsumer = function(a) {
                return z(a) === k;
              };
              exports2.isContextProvider = function(a) {
                return z(a) === h;
              };
              exports2.isElement = function(a) {
                return "object" === typeof a && null !== a && a.$$typeof === c;
              };
              exports2.isForwardRef = function(a) {
                return z(a) === n;
              };
              exports2.isFragment = function(a) {
                return z(a) === e;
              };
              exports2.isLazy = function(a) {
                return z(a) === t;
              };
              exports2.isMemo = function(a) {
                return z(a) === r;
              };
              exports2.isPortal = function(a) {
                return z(a) === d;
              };
              exports2.isProfiler = function(a) {
                return z(a) === g;
              };
              exports2.isStrictMode = function(a) {
                return z(a) === f2;
              };
              exports2.isSuspense = function(a) {
                return z(a) === p;
              };
              exports2.isValidElementType = function(a) {
                return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f2 || a === p || a === q2 || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w2 || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
              };
              exports2.typeOf = z;
            }),
            /* 56 */
            /***/
            ((__unused_webpack_module, exports2) => {
            }),
            /* 57 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var ReactIs = __webpack_require__2(54);
              var assign = __webpack_require__2(58);
              var ReactPropTypesSecret = __webpack_require__2(59);
              var has = __webpack_require__2(60);
              var checkPropTypes = __webpack_require__2(61);
              var printWarning = function() {
              };
              function emptyFunctionThatReturnsNull() {
                return null;
              }
              module2.exports = function(isValidElement, throwOnDirectAccess) {
                var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
                var FAUX_ITERATOR_SYMBOL = "@@iterator";
                function getIteratorFn(maybeIterable) {
                  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
                  if (typeof iteratorFn === "function") {
                    return iteratorFn;
                  }
                }
                var ANONYMOUS = "<<anonymous>>";
                var ReactPropTypes = {
                  array: createPrimitiveTypeChecker("array"),
                  bigint: createPrimitiveTypeChecker("bigint"),
                  bool: createPrimitiveTypeChecker("boolean"),
                  func: createPrimitiveTypeChecker("function"),
                  number: createPrimitiveTypeChecker("number"),
                  object: createPrimitiveTypeChecker("object"),
                  string: createPrimitiveTypeChecker("string"),
                  symbol: createPrimitiveTypeChecker("symbol"),
                  any: createAnyTypeChecker(),
                  arrayOf: createArrayOfTypeChecker,
                  element: createElementTypeChecker(),
                  elementType: createElementTypeTypeChecker(),
                  instanceOf: createInstanceTypeChecker,
                  node: createNodeChecker(),
                  objectOf: createObjectOfTypeChecker,
                  oneOf: createEnumTypeChecker,
                  oneOfType: createUnionTypeChecker,
                  shape: createShapeTypeChecker,
                  exact: createStrictShapeTypeChecker
                };
                function is(x, y) {
                  if (x === y) {
                    return x !== 0 || 1 / x === 1 / y;
                  } else {
                    return x !== x && y !== y;
                  }
                }
                function PropTypeError(message, data) {
                  this.message = message;
                  this.data = data && typeof data === "object" ? data : {};
                  this.stack = "";
                }
                PropTypeError.prototype = Error.prototype;
                function createChainableTypeChecker(validate) {
                  function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
                    componentName = componentName || ANONYMOUS;
                    propFullName = propFullName || propName;
                    if (secret !== ReactPropTypesSecret) {
                      if (throwOnDirectAccess) {
                        var err = new Error(
                          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                        );
                        err.name = "Invariant Violation";
                        throw err;
                      }
                    }
                    if (props[propName] == null) {
                      if (isRequired) {
                        if (props[propName] === null) {
                          return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
                        }
                        return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
                      }
                      return null;
                    } else {
                      return validate(props, propName, componentName, location, propFullName);
                    }
                  }
                  var chainedCheckType = checkType.bind(null, false);
                  chainedCheckType.isRequired = checkType.bind(null, true);
                  return chainedCheckType;
                }
                function createPrimitiveTypeChecker(expectedType) {
                  function validate(props, propName, componentName, location, propFullName, secret) {
                    var propValue = props[propName];
                    var propType = getPropType(propValue);
                    if (propType !== expectedType) {
                      var preciseType = getPreciseType(propValue);
                      return new PropTypeError(
                        "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
                        { expectedType }
                      );
                    }
                    return null;
                  }
                  return createChainableTypeChecker(validate);
                }
                function createAnyTypeChecker() {
                  return createChainableTypeChecker(emptyFunctionThatReturnsNull);
                }
                function createArrayOfTypeChecker(typeChecker) {
                  function validate(props, propName, componentName, location, propFullName) {
                    if (typeof typeChecker !== "function") {
                      return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
                    }
                    var propValue = props[propName];
                    if (!Array.isArray(propValue)) {
                      var propType = getPropType(propValue);
                      return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
                    }
                    for (var i = 0; i < propValue.length; i++) {
                      var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
                      if (error instanceof Error) {
                        return error;
                      }
                    }
                    return null;
                  }
                  return createChainableTypeChecker(validate);
                }
                function createElementTypeChecker() {
                  function validate(props, propName, componentName, location, propFullName) {
                    var propValue = props[propName];
                    if (!isValidElement(propValue)) {
                      var propType = getPropType(propValue);
                      return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
                    }
                    return null;
                  }
                  return createChainableTypeChecker(validate);
                }
                function createElementTypeTypeChecker() {
                  function validate(props, propName, componentName, location, propFullName) {
                    var propValue = props[propName];
                    if (!ReactIs.isValidElementType(propValue)) {
                      var propType = getPropType(propValue);
                      return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
                    }
                    return null;
                  }
                  return createChainableTypeChecker(validate);
                }
                function createInstanceTypeChecker(expectedClass) {
                  function validate(props, propName, componentName, location, propFullName) {
                    if (!(props[propName] instanceof expectedClass)) {
                      var expectedClassName = expectedClass.name || ANONYMOUS;
                      var actualClassName = getClassName(props[propName]);
                      return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
                    }
                    return null;
                  }
                  return createChainableTypeChecker(validate);
                }
                function createEnumTypeChecker(expectedValues) {
                  if (!Array.isArray(expectedValues)) {
                    return emptyFunctionThatReturnsNull;
                  }
                  function validate(props, propName, componentName, location, propFullName) {
                    var propValue = props[propName];
                    for (var i = 0; i < expectedValues.length; i++) {
                      if (is(propValue, expectedValues[i])) {
                        return null;
                      }
                    }
                    var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                      var type = getPreciseType(value);
                      if (type === "symbol") {
                        return String(value);
                      }
                      return value;
                    });
                    return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
                  }
                  return createChainableTypeChecker(validate);
                }
                function createObjectOfTypeChecker(typeChecker) {
                  function validate(props, propName, componentName, location, propFullName) {
                    if (typeof typeChecker !== "function") {
                      return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
                    }
                    var propValue = props[propName];
                    var propType = getPropType(propValue);
                    if (propType !== "object") {
                      return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
                    }
                    for (var key in propValue) {
                      if (has(propValue, key)) {
                        var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                        if (error instanceof Error) {
                          return error;
                        }
                      }
                    }
                    return null;
                  }
                  return createChainableTypeChecker(validate);
                }
                function createUnionTypeChecker(arrayOfTypeCheckers) {
                  if (!Array.isArray(arrayOfTypeCheckers)) {
                    return emptyFunctionThatReturnsNull;
                  }
                  for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                    var checker = arrayOfTypeCheckers[i];
                    if (typeof checker !== "function") {
                      printWarning(
                        "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
                      );
                      return emptyFunctionThatReturnsNull;
                    }
                  }
                  function validate(props, propName, componentName, location, propFullName) {
                    var expectedTypes = [];
                    for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
                      var checker2 = arrayOfTypeCheckers[i2];
                      var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
                      if (checkerResult == null) {
                        return null;
                      }
                      if (checkerResult.data && has(checkerResult.data, "expectedType")) {
                        expectedTypes.push(checkerResult.data.expectedType);
                      }
                    }
                    var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
                    return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
                  }
                  return createChainableTypeChecker(validate);
                }
                function createNodeChecker() {
                  function validate(props, propName, componentName, location, propFullName) {
                    if (!isNode(props[propName])) {
                      return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
                    }
                    return null;
                  }
                  return createChainableTypeChecker(validate);
                }
                function invalidValidatorError(componentName, location, propFullName, key, type) {
                  return new PropTypeError(
                    (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
                  );
                }
                function createShapeTypeChecker(shapeTypes) {
                  function validate(props, propName, componentName, location, propFullName) {
                    var propValue = props[propName];
                    var propType = getPropType(propValue);
                    if (propType !== "object") {
                      return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
                    }
                    for (var key in shapeTypes) {
                      var checker = shapeTypes[key];
                      if (typeof checker !== "function") {
                        return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                      }
                      var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                      if (error) {
                        return error;
                      }
                    }
                    return null;
                  }
                  return createChainableTypeChecker(validate);
                }
                function createStrictShapeTypeChecker(shapeTypes) {
                  function validate(props, propName, componentName, location, propFullName) {
                    var propValue = props[propName];
                    var propType = getPropType(propValue);
                    if (propType !== "object") {
                      return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
                    }
                    var allKeys = assign({}, props[propName], shapeTypes);
                    for (var key in allKeys) {
                      var checker = shapeTypes[key];
                      if (has(shapeTypes, key) && typeof checker !== "function") {
                        return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                      }
                      if (!checker) {
                        return new PropTypeError(
                          "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
                        );
                      }
                      var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                      if (error) {
                        return error;
                      }
                    }
                    return null;
                  }
                  return createChainableTypeChecker(validate);
                }
                function isNode(propValue) {
                  switch (typeof propValue) {
                    case "number":
                    case "string":
                    case "undefined":
                      return true;
                    case "boolean":
                      return !propValue;
                    case "object":
                      if (Array.isArray(propValue)) {
                        return propValue.every(isNode);
                      }
                      if (propValue === null || isValidElement(propValue)) {
                        return true;
                      }
                      var iteratorFn = getIteratorFn(propValue);
                      if (iteratorFn) {
                        var iterator = iteratorFn.call(propValue);
                        var step;
                        if (iteratorFn !== propValue.entries) {
                          while (!(step = iterator.next()).done) {
                            if (!isNode(step.value)) {
                              return false;
                            }
                          }
                        } else {
                          while (!(step = iterator.next()).done) {
                            var entry = step.value;
                            if (entry) {
                              if (!isNode(entry[1])) {
                                return false;
                              }
                            }
                          }
                        }
                      } else {
                        return false;
                      }
                      return true;
                    default:
                      return false;
                  }
                }
                function isSymbol(propType, propValue) {
                  if (propType === "symbol") {
                    return true;
                  }
                  if (!propValue) {
                    return false;
                  }
                  if (propValue["@@toStringTag"] === "Symbol") {
                    return true;
                  }
                  if (typeof Symbol === "function" && propValue instanceof Symbol) {
                    return true;
                  }
                  return false;
                }
                function getPropType(propValue) {
                  var propType = typeof propValue;
                  if (Array.isArray(propValue)) {
                    return "array";
                  }
                  if (propValue instanceof RegExp) {
                    return "object";
                  }
                  if (isSymbol(propType, propValue)) {
                    return "symbol";
                  }
                  return propType;
                }
                function getPreciseType(propValue) {
                  if (typeof propValue === "undefined" || propValue === null) {
                    return "" + propValue;
                  }
                  var propType = getPropType(propValue);
                  if (propType === "object") {
                    if (propValue instanceof Date) {
                      return "date";
                    } else if (propValue instanceof RegExp) {
                      return "regexp";
                    }
                  }
                  return propType;
                }
                function getPostfixForTypeWarning(value) {
                  var type = getPreciseType(value);
                  switch (type) {
                    case "array":
                    case "object":
                      return "an " + type;
                    case "boolean":
                    case "date":
                    case "regexp":
                      return "a " + type;
                    default:
                      return type;
                  }
                }
                function getClassName(propValue) {
                  if (!propValue.constructor || !propValue.constructor.name) {
                    return ANONYMOUS;
                  }
                  return propValue.constructor.name;
                }
                ReactPropTypes.checkPropTypes = checkPropTypes;
                ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
                ReactPropTypes.PropTypes = ReactPropTypes;
                return ReactPropTypes;
              };
            }),
            /* 58 */
            /***/
            ((module2) => {
              /*
              object-assign
              (c) Sindre Sorhus
              @license MIT
              */
              var getOwnPropertySymbols = Object.getOwnPropertySymbols;
              var hasOwnProperty = Object.prototype.hasOwnProperty;
              var propIsEnumerable = Object.prototype.propertyIsEnumerable;
              function toObject(val) {
                if (val === null || val === void 0) {
                  throw new TypeError("Object.assign cannot be called with null or undefined");
                }
                return Object(val);
              }
              function shouldUseNative() {
                try {
                  if (!Object.assign) {
                    return false;
                  }
                  var test1 = new String("abc");
                  test1[5] = "de";
                  if (Object.getOwnPropertyNames(test1)[0] === "5") {
                    return false;
                  }
                  var test2 = {};
                  for (var i = 0; i < 10; i++) {
                    test2["_" + String.fromCharCode(i)] = i;
                  }
                  var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
                    return test2[n];
                  });
                  if (order2.join("") !== "0123456789") {
                    return false;
                  }
                  var test3 = {};
                  "abcdefghijklmnopqrst".split("").forEach(function(letter) {
                    test3[letter] = letter;
                  });
                  if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
                    return false;
                  }
                  return true;
                } catch (err) {
                  return false;
                }
              }
              module2.exports = shouldUseNative() ? Object.assign : function(target, source) {
                var from;
                var to = toObject(target);
                var symbols;
                for (var s = 1; s < arguments.length; s++) {
                  from = Object(arguments[s]);
                  for (var key in from) {
                    if (hasOwnProperty.call(from, key)) {
                      to[key] = from[key];
                    }
                  }
                  if (getOwnPropertySymbols) {
                    symbols = getOwnPropertySymbols(from);
                    for (var i = 0; i < symbols.length; i++) {
                      if (propIsEnumerable.call(from, symbols[i])) {
                        to[symbols[i]] = from[symbols[i]];
                      }
                    }
                  }
                }
                return to;
              };
            }),
            /* 59 */
            /***/
            ((module2) => {
              var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
              module2.exports = ReactPropTypesSecret;
            }),
            /* 60 */
            /***/
            ((module2) => {
              module2.exports = Function.call.bind(Object.prototype.hasOwnProperty);
            }),
            /* 61 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
              }
              checkPropTypes.resetWarningCache = function() {
              };
              module2.exports = checkPropTypes;
            }),
            /* 62 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var ReactPropTypesSecret = __webpack_require__2(59);
              function emptyFunction() {
              }
              function emptyFunctionWithReset() {
              }
              emptyFunctionWithReset.resetWarningCache = emptyFunction;
              module2.exports = function() {
                function shim(props, propName, componentName, location, propFullName, secret) {
                  if (secret === ReactPropTypesSecret) {
                    return;
                  }
                  var err = new Error(
                    "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                  );
                  err.name = "Invariant Violation";
                  throw err;
                }
                shim.isRequired = shim;
                function getShim() {
                  return shim;
                }
                var ReactPropTypes = {
                  array: shim,
                  bigint: shim,
                  bool: shim,
                  func: shim,
                  number: shim,
                  object: shim,
                  string: shim,
                  symbol: shim,
                  any: shim,
                  arrayOf: getShim,
                  element: shim,
                  elementType: shim,
                  instanceOf: getShim,
                  node: shim,
                  objectOf: getShim,
                  oneOf: getShim,
                  oneOfType: getShim,
                  shape: getShim,
                  exact: getShim,
                  checkPropTypes: emptyFunctionWithReset,
                  resetWarningCache: emptyFunction
                };
                ReactPropTypes.PropTypes = ReactPropTypes;
                return ReactPropTypes;
              };
            }),
            /* 63 */
            /***/
            ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                "default": () => __WEBPACK_DEFAULT_EXPORT__
                /* harmony export */
              });
              var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(53);
              var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /* @__PURE__ */ __webpack_require__2.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
              var _optgroupShape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(64);
              var _optionShape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(65);
              const __WEBPACK_DEFAULT_EXPORT__ = prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([_optgroupShape__WEBPACK_IMPORTED_MODULE_0__["default"], _optionShape__WEBPACK_IMPORTED_MODULE_1__["default"]]));
            }),
            /* 64 */
            /***/
            ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                "default": () => __WEBPACK_DEFAULT_EXPORT__
                /* harmony export */
              });
              var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(53);
              var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /* @__PURE__ */ __webpack_require__2.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
              var _optionShape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(65);
              const __WEBPACK_DEFAULT_EXPORT__ = prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
                options: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(_optionShape__WEBPACK_IMPORTED_MODULE_0__["default"]).isRequired,
                // Optional properties
                disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,
                label: prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,
                title: prop_types__WEBPACK_IMPORTED_MODULE_1___default().string
              });
            }),
            /* 65 */
            /***/
            ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                "default": () => __WEBPACK_DEFAULT_EXPORT__
                /* harmony export */
              });
              var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(53);
              var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__2.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
              const __WEBPACK_DEFAULT_EXPORT__ = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
                disabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool,
                label: prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,
                title: prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,
                value: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default().string, prop_types__WEBPACK_IMPORTED_MODULE_0___default().number])
              });
            }),
            /* 66 */
            /***/
            ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                "default": () => __WEBPACK_DEFAULT_EXPORT__
                /* harmony export */
              });
              var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(53);
              var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /* @__PURE__ */ __webpack_require__2.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
              var _optgroupShape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(64);
              var _optionShape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(65);
              const __WEBPACK_DEFAULT_EXPORT__ = prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().number, prop_types__WEBPACK_IMPORTED_MODULE_2___default().string, _optgroupShape__WEBPACK_IMPORTED_MODULE_0__["default"], _optionShape__WEBPACK_IMPORTED_MODULE_1__["default"]]));
            }),
            /* 67 */
            /***/
            ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                "default": () => (
                  /* binding */
                  indexesOf
                )
                /* harmony export */
              });
              function indexesOf(list, value) {
                const indexes = [];
                list.forEach((listItem, index) => {
                  if (listItem === value) {
                    indexes.push(index);
                  }
                });
                return indexes;
              }
            }),
            /* 68 */
            /***/
            ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                "default": () => __WEBPACK_DEFAULT_EXPORT__
                /* harmony export */
              });
              function mergeRefs(refs) {
                return (c) => {
                  refs.forEach((ref) => {
                    if (ref !== null) {
                      if (typeof ref === "function") {
                        ref(c);
                      } else {
                        ref.current = c;
                      }
                    }
                  });
                };
              }
              const __WEBPACK_DEFAULT_EXPORT__ = mergeRefs;
            }),
            /* 69 */
            /***/
            ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                "default": () => __WEBPACK_DEFAULT_EXPORT__
                /* harmony export */
              });
              const __WEBPACK_DEFAULT_EXPORT__ = ((index1, index2) => (options) => {
                const newOptions = [...options];
                [newOptions[index1], newOptions[index2]] = [newOptions[index2], newOptions[index1]];
                return newOptions;
              });
            }),
            /* 70 */
            /***/
            ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                ALIGNMENTS: () => (
                  /* binding */
                  ALIGNMENTS
                ),
                /* harmony export */
                KEYS: () => (
                  /* binding */
                  KEYS
                )
                /* harmony export */
              });
              const KEYS = {
                SPACEBAR: " ",
                ENTER: "Enter"
              };
              const ALIGNMENTS = {
                MIDDLE: "middle",
                TOP: "top"
              };
            }),
            /* 71 */
            /***/
            ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                "default": () => __WEBPACK_DEFAULT_EXPORT__
                /* harmony export */
              });
              var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(44);
              var classnames__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__2.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
              var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(72);
              var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_1___default = /* @__PURE__ */ __webpack_require__2.n(lodash_kebabCase__WEBPACK_IMPORTED_MODULE_1__);
              var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__2(53);
              var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /* @__PURE__ */ __webpack_require__2.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
              var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(41);
              var react__WEBPACK_IMPORTED_MODULE_2___default = /* @__PURE__ */ __webpack_require__2.n(react__WEBPACK_IMPORTED_MODULE_2__);
              var _contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(82);
              var _util_capitalizeFirstLetter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__2(83);
              const propTypes = {
                direction: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(["toAvailable", "toSelected", "up", "down", "top", "bottom"]).isRequired,
                disabled: prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool.isRequired,
                onClick: prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired,
                isMoveAll: prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool
              };
              function Action(_ref) {
                let {
                  direction,
                  disabled,
                  onClick: parentOnClick,
                  isMoveAll = false
                } = _ref;
                function onClick() {
                  parentOnClick({
                    direction,
                    isMoveAll
                  });
                }
                function getActionKey() {
                  return `move${isMoveAll ? "All" : ""}${(0, _util_capitalizeFirstLetter__WEBPACK_IMPORTED_MODULE_4__["default"])(direction)}`;
                }
                const actionKey = getActionKey();
                const {
                  [actionKey]: icon
                } = (0, react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts__WEBPACK_IMPORTED_MODULE_3__.IconContext);
                const {
                  [actionKey]: label
                } = (0, react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts__WEBPACK_IMPORTED_MODULE_3__.LanguageContext);
                const classKey = lodash_kebabCase__WEBPACK_IMPORTED_MODULE_1___default()(actionKey);
                const className = classnames__WEBPACK_IMPORTED_MODULE_0___default()({
                  "rdl-btn": true,
                  "rdl-move": true,
                  [`rdl-${classKey}`]: true
                });
                return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
                  "aria-label": label,
                  className,
                  disabled,
                  title: label,
                  type: "button",
                  onClick
                }, icon);
              }
              Action.propTypes = propTypes;
              const __WEBPACK_DEFAULT_EXPORT__ = Action;
            }),
            /* 72 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var createCompounder = __webpack_require__2(73);
              var kebabCase = createCompounder(function(result, word, index) {
                return result + (index ? "-" : "") + word.toLowerCase();
              });
              module2.exports = kebabCase;
            }),
            /* 73 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var arrayReduce = __webpack_require__2(74), deburr = __webpack_require__2(75), words = __webpack_require__2(78);
              var rsApos = "['’]";
              var reApos = RegExp(rsApos, "g");
              function createCompounder(callback) {
                return function(string) {
                  return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
                };
              }
              module2.exports = createCompounder;
            }),
            /* 74 */
            /***/
            ((module2) => {
              function arrayReduce(array, iteratee, accumulator, initAccum) {
                var index = -1, length = array == null ? 0 : array.length;
                if (initAccum && length) {
                  accumulator = array[++index];
                }
                while (++index < length) {
                  accumulator = iteratee(accumulator, array[index], index, array);
                }
                return accumulator;
              }
              module2.exports = arrayReduce;
            }),
            /* 75 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var deburrLetter = __webpack_require__2(76), toString = __webpack_require__2(46);
              var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
              var rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
              var rsCombo = "[" + rsComboRange + "]";
              var reComboMark = RegExp(rsCombo, "g");
              function deburr(string) {
                string = toString(string);
                return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
              }
              module2.exports = deburr;
            }),
            /* 76 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var basePropertyOf = __webpack_require__2(77);
              var deburredLetters = {
                // Latin-1 Supplement block.
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ã": "A",
                "Ä": "A",
                "Å": "A",
                "à": "a",
                "á": "a",
                "â": "a",
                "ã": "a",
                "ä": "a",
                "å": "a",
                "Ç": "C",
                "ç": "c",
                "Ð": "D",
                "ð": "d",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ë": "E",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ë": "e",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ï": "I",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ï": "i",
                "Ñ": "N",
                "ñ": "n",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Õ": "O",
                "Ö": "O",
                "Ø": "O",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "õ": "o",
                "ö": "o",
                "ø": "o",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ü": "U",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ü": "u",
                "Ý": "Y",
                "ý": "y",
                "ÿ": "y",
                "Æ": "Ae",
                "æ": "ae",
                "Þ": "Th",
                "þ": "th",
                "ß": "ss",
                // Latin Extended-A block.
                "Ā": "A",
                "Ă": "A",
                "Ą": "A",
                "ā": "a",
                "ă": "a",
                "ą": "a",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "Ď": "D",
                "Đ": "D",
                "ď": "d",
                "đ": "d",
                "Ē": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ę": "E",
                "Ě": "E",
                "ē": "e",
                "ĕ": "e",
                "ė": "e",
                "ę": "e",
                "ě": "e",
                "Ĝ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ģ": "G",
                "ĝ": "g",
                "ğ": "g",
                "ġ": "g",
                "ģ": "g",
                "Ĥ": "H",
                "Ħ": "H",
                "ĥ": "h",
                "ħ": "h",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "Į": "I",
                "İ": "I",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "į": "i",
                "ı": "i",
                "Ĵ": "J",
                "ĵ": "j",
                "Ķ": "K",
                "ķ": "k",
                "ĸ": "k",
                "Ĺ": "L",
                "Ļ": "L",
                "Ľ": "L",
                "Ŀ": "L",
                "Ł": "L",
                "ĺ": "l",
                "ļ": "l",
                "ľ": "l",
                "ŀ": "l",
                "ł": "l",
                "Ń": "N",
                "Ņ": "N",
                "Ň": "N",
                "Ŋ": "N",
                "ń": "n",
                "ņ": "n",
                "ň": "n",
                "ŋ": "n",
                "Ō": "O",
                "Ŏ": "O",
                "Ő": "O",
                "ō": "o",
                "ŏ": "o",
                "ő": "o",
                "Ŕ": "R",
                "Ŗ": "R",
                "Ř": "R",
                "ŕ": "r",
                "ŗ": "r",
                "ř": "r",
                "Ś": "S",
                "Ŝ": "S",
                "Ş": "S",
                "Š": "S",
                "ś": "s",
                "ŝ": "s",
                "ş": "s",
                "š": "s",
                "Ţ": "T",
                "Ť": "T",
                "Ŧ": "T",
                "ţ": "t",
                "ť": "t",
                "ŧ": "t",
                "Ũ": "U",
                "Ū": "U",
                "Ŭ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ų": "U",
                "ũ": "u",
                "ū": "u",
                "ŭ": "u",
                "ů": "u",
                "ű": "u",
                "ų": "u",
                "Ŵ": "W",
                "ŵ": "w",
                "Ŷ": "Y",
                "ŷ": "y",
                "Ÿ": "Y",
                "Ź": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "ź": "z",
                "ż": "z",
                "ž": "z",
                "Ĳ": "IJ",
                "ĳ": "ij",
                "Œ": "Oe",
                "œ": "oe",
                "ŉ": "'n",
                "ſ": "s"
              };
              var deburrLetter = basePropertyOf(deburredLetters);
              module2.exports = deburrLetter;
            }),
            /* 77 */
            /***/
            ((module2) => {
              function basePropertyOf(object) {
                return function(key) {
                  return object == null ? void 0 : object[key];
                };
              }
              module2.exports = basePropertyOf;
            }),
            /* 78 */
            /***/
            ((module2, __unused_webpack_exports, __webpack_require__2) => {
              var asciiWords = __webpack_require__2(79), hasUnicodeWord = __webpack_require__2(80), toString = __webpack_require__2(46), unicodeWords = __webpack_require__2(81);
              function words(string, pattern, guard) {
                string = toString(string);
                pattern = guard ? void 0 : pattern;
                if (pattern === void 0) {
                  return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
                }
                return string.match(pattern) || [];
              }
              module2.exports = words;
            }),
            /* 79 */
            /***/
            ((module2) => {
              var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
              function asciiWords(string) {
                return string.match(reAsciiWord) || [];
              }
              module2.exports = asciiWords;
            }),
            /* 80 */
            /***/
            ((module2) => {
              var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
              function hasUnicodeWord(string) {
                return reHasUnicodeWord.test(string);
              }
              module2.exports = hasUnicodeWord;
            }),
            /* 81 */
            /***/
            ((module2) => {
              var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
              var rsApos = "['’]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
              var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq;
              var reUnicodeWord = RegExp([
                rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
                rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
                rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
                rsUpper + "+" + rsOptContrUpper,
                rsOrdUpper,
                rsOrdLower,
                rsDigits,
                rsEmoji
              ].join("|"), "g");
              function unicodeWords(string) {
                return string.match(reUnicodeWord) || [];
              }
              module2.exports = unicodeWords;
            }),
            /* 82 */
            /***/
            ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                IconContext: () => (
                  /* binding */
                  IconContext
                ),
                /* harmony export */
                IdContext: () => (
                  /* binding */
                  IdContext
                ),
                /* harmony export */
                LanguageContext: () => (
                  /* binding */
                  LanguageContext
                )
                /* harmony export */
              });
              var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(41);
              const IconContext = /* @__PURE__ */ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
              const IdContext = /* @__PURE__ */ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(() => {
              });
              const LanguageContext = /* @__PURE__ */ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
            }),
            /* 83 */
            /***/
            ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                "default": () => __WEBPACK_DEFAULT_EXPORT__
                /* harmony export */
              });
              function capitalizeFirstLetter(str) {
                return str.charAt(0).toUpperCase() + str.slice(1);
              }
              const __WEBPACK_DEFAULT_EXPORT__ = capitalizeFirstLetter;
            }),
            /* 84 */
            /***/
            ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                "default": () => __WEBPACK_DEFAULT_EXPORT__
                /* harmony export */
              });
              var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__2(53);
              var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /* @__PURE__ */ __webpack_require__2.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
              var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(41);
              var react__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__2.n(react__WEBPACK_IMPORTED_MODULE_0__);
              var _shapes_refShape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(52);
              var _shapes_valueShape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(66);
              var _contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(82);
              const noop2 = () => {
              };
              const propTypes = {
                availableRef: _shapes_refShape__WEBPACK_IMPORTED_MODULE_1__["default"].isRequired,
                disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired,
                required: prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired,
                selected: _shapes_valueShape__WEBPACK_IMPORTED_MODULE_2__["default"].isRequired,
                onFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired,
                name: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string
              };
              function HiddenInput(_ref) {
                let {
                  availableRef,
                  disabled,
                  required,
                  selected,
                  onFocus,
                  name = null
                } = _ref;
                const {
                  hiddenInputLabel,
                  requiredError
                } = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts__WEBPACK_IMPORTED_MODULE_3__.LanguageContext);
                (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                  if (!required) {
                    return;
                  }
                  const validity = selected.length === 0 ? requiredError : "";
                  availableRef.current.setCustomValidity(validity);
                }, [selected]);
                const hiddenValue = selected.join(",");
                return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
                  "aria-label": hiddenInputLabel,
                  className: "rdl-hidden-input",
                  disabled,
                  name,
                  required,
                  type: required ? "text" : "hidden",
                  value: hiddenValue,
                  onChange: noop2,
                  onFocus
                });
              }
              HiddenInput.propTypes = propTypes;
              const __WEBPACK_DEFAULT_EXPORT__ = HiddenInput;
            }),
            /* 85 */
            /***/
            ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                "default": () => __WEBPACK_DEFAULT_EXPORT__
                /* harmony export */
              });
              var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__2(53);
              var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /* @__PURE__ */ __webpack_require__2.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
              var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(41);
              var react__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__2.n(react__WEBPACK_IMPORTED_MODULE_0__);
              var _contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(82);
              var _util_capitalizeFirstLetter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(83);
              var _Filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(86);
              const propTypes = {
                canFilter: prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired,
                children: prop_types__WEBPACK_IMPORTED_MODULE_4___default().node.isRequired,
                controlKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired,
                disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired,
                filterValue: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired,
                inputRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired,
                selections: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().string, prop_types__WEBPACK_IMPORTED_MODULE_4___default().number])).isRequired,
                showNoOptionsText: prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired,
                onDoubleClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired,
                onFilterChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired,
                onKeyUp: prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired,
                onSelectionChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired,
                actions: prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,
                id: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string
              };
              function ListBox(_ref) {
                let {
                  canFilter,
                  children,
                  controlKey,
                  disabled,
                  filterValue,
                  inputRef,
                  selections,
                  showNoOptionsText,
                  onDoubleClick,
                  onFilterChange,
                  onKeyUp,
                  onSelectionChange,
                  actions = null,
                  id = null
                } = _ref;
                const {
                  [`${controlKey}Header`]: header,
                  [`no${(0, _util_capitalizeFirstLetter__WEBPACK_IMPORTED_MODULE_2__["default"])(controlKey)}Options`]: noOptionsText
                } = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts__WEBPACK_IMPORTED_MODULE_1__.LanguageContext);
                const inputId = id ? `${id}-${controlKey}` : null;
                function renderFilter() {
                  if (!canFilter) {
                    return null;
                  }
                  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Filter__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    controlKey,
                    disabled,
                    filterValue,
                    onFilterChange
                  });
                }
                function renderSelect() {
                  if (showNoOptionsText && react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) === 0) {
                    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                      className: "rdl-no-options"
                    }, noOptionsText);
                  }
                  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                    className: "rdl-control-container"
                  }, actions, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
                    className: "rdl-control",
                    disabled,
                    id: `${inputId}`,
                    multiple: true,
                    ref: inputRef,
                    value: selections,
                    onChange: onSelectionChange,
                    onDoubleClick,
                    onKeyUp
                  }, children));
                }
                return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                  className: `rdl-list-box rdl-${controlKey}`
                }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
                  className: "rdl-control-label",
                  htmlFor: inputId
                }, header), renderFilter(), renderSelect());
              }
              ListBox.propTypes = propTypes;
              const __WEBPACK_DEFAULT_EXPORT__ = ListBox;
            }),
            /* 86 */
            /***/
            ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                "default": () => __WEBPACK_DEFAULT_EXPORT__
                /* harmony export */
              });
              var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(53);
              var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /* @__PURE__ */ __webpack_require__2.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
              var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(41);
              var react__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__2.n(react__WEBPACK_IMPORTED_MODULE_0__);
              var _contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(82);
              const propTypes = {
                controlKey: prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,
                disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired,
                filterValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,
                onFilterChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired
              };
              function Filter(props) {
                const {
                  controlKey,
                  disabled,
                  filterValue,
                  onFilterChange
                } = props;
                const {
                  [`${controlKey}FilterPlaceholder`]: filterPlaceholder,
                  [`${controlKey}FilterHeader`]: filterHeader
                } = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts__WEBPACK_IMPORTED_MODULE_1__.LanguageContext);
                return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
                  "aria-label": filterHeader,
                  className: "rdl-filter",
                  "data-control-key": controlKey,
                  disabled,
                  placeholder: filterPlaceholder,
                  type: "search",
                  value: filterValue,
                  onChange: onFilterChange
                });
              }
              Filter.propTypes = propTypes;
              const __WEBPACK_DEFAULT_EXPORT__ = Filter;
            }),
            /* 87 */
            /***/
            ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                "default": () => __WEBPACK_DEFAULT_EXPORT__
                /* harmony export */
              });
              const __WEBPACK_DEFAULT_EXPORT__ = {
                availableFilterHeader: "Filter available",
                availableFilterPlaceholder: "Search...",
                availableHeader: "Available",
                hiddenInputLabel: "All selections",
                moveAllToAvailable: "Move all to available",
                moveAllToSelected: "Move all to selected",
                moveToAvailable: "Move to available",
                moveToSelected: "Move to selected",
                moveBottom: "Rearrange to bottom",
                moveDown: "Rearrange down",
                moveUp: "Rearrange up",
                moveTop: "Rearrange to top",
                noAvailableOptions: "No available options",
                noSelectedOptions: "No selected options",
                requiredError: "Please select at least one option.",
                selectedFilterHeader: "Filter selected",
                selectedFilterPlaceholder: "Search...",
                selectedHeader: "Selected"
              };
            }),
            /* 88 */
            /***/
            ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                "default": () => __WEBPACK_DEFAULT_EXPORT__
                /* harmony export */
              });
              var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(53);
              var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__2.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
              const __WEBPACK_DEFAULT_EXPORT__ = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
                moveToAvailable: prop_types__WEBPACK_IMPORTED_MODULE_0___default().node,
                moveAllToAvailable: prop_types__WEBPACK_IMPORTED_MODULE_0___default().node,
                moveToSelected: prop_types__WEBPACK_IMPORTED_MODULE_0___default().node,
                moveAllToSelected: prop_types__WEBPACK_IMPORTED_MODULE_0___default().node,
                moveBottom: prop_types__WEBPACK_IMPORTED_MODULE_0___default().node,
                moveDown: prop_types__WEBPACK_IMPORTED_MODULE_0___default().node,
                moveUp: prop_types__WEBPACK_IMPORTED_MODULE_0___default().node,
                moveTop: prop_types__WEBPACK_IMPORTED_MODULE_0___default().node
              });
            }),
            /* 89 */
            /***/
            ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                "default": () => __WEBPACK_DEFAULT_EXPORT__
                /* harmony export */
              });
              var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(53);
              var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__2.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
              const __WEBPACK_DEFAULT_EXPORT__ = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
                availableFilterHeader: prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,
                availableHeader: prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,
                filterPlaceholder: prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,
                moveToAvailable: prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,
                moveAllToAvailable: prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,
                moveToSelected: prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,
                moveAllToSelected: prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,
                moveDown: prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,
                moveUp: prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,
                noAvailableOptions: prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,
                noSelectedOptions: prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,
                requiredError: prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,
                selectedFilterHeader: prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,
                selectedHeader: prop_types__WEBPACK_IMPORTED_MODULE_0___default().string
              });
            })
            /******/
          ];
          var __webpack_module_cache__ = {};
          function __webpack_require__(moduleId) {
            var cachedModule = __webpack_module_cache__[moduleId];
            if (cachedModule !== void 0) {
              return cachedModule.exports;
            }
            var module2 = __webpack_module_cache__[moduleId] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
            return module2.exports;
          }
          (() => {
            __webpack_require__.n = (module2) => {
              var getter = module2 && module2.__esModule ? (
                /******/
                (() => module2["default"])
              ) : (
                /******/
                (() => module2)
              );
              __webpack_require__.d(getter, { a: getter });
              return getter;
            };
          })();
          (() => {
            __webpack_require__.d = (exports2, definition) => {
              for (var key in definition) {
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                  Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
                }
              }
            };
          })();
          (() => {
            __webpack_require__.g = (function() {
              if (typeof globalThis === "object") return globalThis;
              try {
                return this || new Function("return this")();
              } catch (e) {
                if (typeof window === "object") return window;
              }
            })();
          })();
          (() => {
            __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
          })();
          (() => {
            __webpack_require__.r = (exports2) => {
              if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
              }
              Object.defineProperty(exports2, "__esModule", { value: true });
            };
          })();
          var __webpack_exports__ = {};
          (() => {
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, {
              /* harmony export */
              "default": () => __WEBPACK_DEFAULT_EXPORT__
              /* harmony export */
            });
            var _js_DualListBoxWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
            const __WEBPACK_DEFAULT_EXPORT__ = _js_DualListBoxWrapper__WEBPACK_IMPORTED_MODULE_0__["default"];
          })();
          return __webpack_exports__;
        })()
      );
    });
  })(index_browser);
  return index_browser.exports;
}
var index_browserExports = requireIndex_browser();
const DualListBox = /* @__PURE__ */ getDefaultExportFromCjs(index_browserExports);
var dayjs_min$1 = { exports: {} };
var dayjs_min = dayjs_min$1.exports;
var hasRequiredDayjs_min;
function requireDayjs_min() {
  if (hasRequiredDayjs_min) return dayjs_min$1.exports;
  hasRequiredDayjs_min = 1;
  (function(module, exports$1) {
    !(function(t, e) {
      module.exports = e();
    })(dayjs_min, (function() {
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f2 = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m = function(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, v = { s: m, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date()) return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f2 }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p = "$isDayjsObject", S = function(t2) {
        return t2 instanceof _ || !(!t2 || !t2[p]);
      }, w2 = function t2(e2, n2, r2) {
        var i2;
        if (!e2) return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1) return t2(u2[0]);
        } else {
          var a2 = e2.name;
          D[a2] = e2, i2 = a2;
        }
        return !r2 && i2 && (g = i2), i2 || !r2 && g;
      }, O = function(t2, e2) {
        if (S(t2)) return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _(n2);
      }, b = v;
      b.l = w2, b.i = S, b.w = function(t2, e2) {
        return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _ = (function() {
        function M2(t2) {
          this.$L = w2(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = (function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2) return /* @__PURE__ */ new Date(NaN);
            if (b.u(e2)) return /* @__PURE__ */ new Date();
            if (e2 instanceof Date) return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r2 = e2.match($);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e2);
          })(t2), this.init();
        }, m2.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m2.$utils = function() {
          return b;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t2, e2) {
          var n2 = O(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m2.isAfter = function(t2, e2) {
          return O(t2) < this.startOf(e2);
        }, m2.isBefore = function(t2, e2) {
          return this.endOf(e2) < O(t2);
        }, m2.$g = function(t2, e2, n2) {
          return b.u(t2) ? this[e2] : this.set(n2, t2);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t2, e2) {
          var n2 = this, r2 = !!b.u(e2) || e2, f3 = b.p(t2), l2 = function(t3, e3) {
            var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a);
          }, $2 = function(t3, e3) {
            return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f3) {
            case h:
              return r2 ? l2(1, 0) : l2(31, 11);
            case c:
              return r2 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $2(v2 + "Hours", 0);
            case u:
              return $2(v2 + "Minutes", 1);
            case s:
              return $2(v2 + "Seconds", 2);
            case i:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e2) {
          var n2, o2 = b.p(t2), f3 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f3 + "Date", n2[d] = f3 + "Date", n2[c] = f3 + "Month", n2[h] = f3 + "FullYear", n2[u] = f3 + "Hours", n2[s] = f3 + "Minutes", n2[i] = f3 + "Seconds", n2[r] = f3 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m2.get = function(t2) {
          return this[b.p(t2)]();
        }, m2.add = function(r2, f3) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $2 = b.p(f3), y2 = function(t2) {
            var e2 = O(l2);
            return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
          };
          if ($2 === c) return this.set(c, this.$M + r2);
          if ($2 === h) return this.set(h, this.$y + r2);
          if ($2 === a) return y2(1);
          if ($2 === o) return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
          return b.w(m3, this);
        }, m2.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m2.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid()) return n2.invalidDate || l;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f3 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return b.s(s2 % 12 || 12, t3, "0");
          }, $2 = f3 || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          };
          return r2.replace(y, (function(t3, r3) {
            return r3 || (function(t4) {
              switch (t4) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return b.s(e2.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return b.s(a2 + 1, 2, "0");
                case "MMM":
                  return h2(n2.monthsShort, a2, c2, 3);
                case "MMMM":
                  return h2(c2, a2);
                case "D":
                  return e2.$D;
                case "DD":
                  return b.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h2(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h2(n2.weekdaysShort, e2.$W, o2, 3);
                case "dddd":
                  return o2[e2.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return b.s(s2, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $2(s2, u2, true);
                case "A":
                  return $2(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return b.s(u2, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return b.s(e2.$s, 2, "0");
                case "SSS":
                  return b.s(e2.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            })(t3) || i2.replace(":", "");
          }));
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r2, d2, l2) {
          var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
            return b.m(y2, m3);
          };
          switch (M3) {
            case h:
              $2 = D2() / 12;
              break;
            case c:
              $2 = D2();
              break;
            case f2:
              $2 = D2() / 3;
              break;
            case o:
              $2 = (g2 - v2) / 6048e5;
              break;
            case a:
              $2 = (g2 - v2) / 864e5;
              break;
            case u:
              $2 = g2 / n;
              break;
            case s:
              $2 = g2 / e;
              break;
            case i:
              $2 = g2 / t;
              break;
            default:
              $2 = g2;
          }
          return l2 ? $2 : b.a($2);
        }, m2.daysInMonth = function() {
          return this.endOf(c).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t2, e2) {
          if (!t2) return this.$L;
          var n2 = this.clone(), r2 = w2(t2, e2, true);
          return r2 && (n2.$L = r2), n2;
        }, m2.clone = function() {
          return b.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      })(), k = _.prototype;
      return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach((function(t2) {
        k[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      })), O.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _, O), t2.$i = true), O;
      }, O.locale = w2, O.isDayjs = S, O.unix = function(t2) {
        return O(1e3 * t2);
      }, O.en = D[g], O.Ls = D, O.p = {}, O;
    }));
  })(dayjs_min$1);
  return dayjs_min$1.exports;
}
var dayjs_minExports = requireDayjs_min();
const dayjs = /* @__PURE__ */ getDefaultExportFromCjs(dayjs_minExports);
const getChildTypeFromChildName = (childName) => {
  if (childName.match(/^([A-Za-z]+)Range(Calendar|Clock)$/)) {
    return "multi-panel-UI-view";
  }
  if (childName.match(/^([A-Za-z]*)(DigitalClock)$/)) {
    return "Tall-UI-view";
  }
  if (childName.match(/^Static([A-Za-z]+)/) || childName.match(/^([A-Za-z]+)(Calendar|Clock)$/)) {
    return "UI-view";
  }
  if (childName.match(/^MultiInput([A-Za-z]+)RangeField$/) || childName.match(/^([A-Za-z]+)RangePicker$/)) {
    return "multi-input-range-field";
  }
  if (childName.match(/^SingleInput([A-Za-z]+)RangeField$/)) {
    return "single-input-range-field";
  }
  return "single-input-field";
};
const getSupportedSectionFromChildName = (childName) => {
  if (childName.includes("DateTime")) {
    return "date-time";
  }
  if (childName.includes("Date")) {
    return "date";
  }
  return "time";
};
function DemoItem(props) {
  const {
    label,
    children,
    component
  } = props;
  let spacing;
  let sx;
  if (component && getChildTypeFromChildName(component) === "multi-input-range-field") {
    spacing = 1.5;
    sx = {
      [`& .${textFieldClasses.root}`]: {
        flexGrow: 1
      }
    };
  } else {
    spacing = 1;
    sx = void 0;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, {
    direction: "column",
    alignItems: "stretch",
    spacing,
    sx,
    children: [label && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, {
      variant: "body2",
      children: label
    }), children]
  });
}
function DemoContainer(props) {
  const {
    children,
    components,
    sx: sxProp
  } = props;
  const childrenTypes = /* @__PURE__ */ new Set();
  const childrenSupportedSections = /* @__PURE__ */ new Set();
  components.forEach((childName) => {
    childrenTypes.add(getChildTypeFromChildName(childName));
    childrenSupportedSections.add(getSupportedSectionFromChildName(childName));
  });
  const getSpacing = (direction2) => {
    if (direction2 === "row") {
      return childrenTypes.has("UI-view") || childrenTypes.has("Tall-UI-view") ? 3 : 2;
    }
    return childrenTypes.has("UI-view") ? 4 : 3;
  };
  let direction;
  let spacing;
  let sx = _extends$1({
    overflow: "auto",
    // Add padding as overflow can hide the outline text field label.
    pt: 1
  }, sxProp);
  if (components.length > 2 || childrenTypes.has("multi-input-range-field") || childrenTypes.has("single-input-range-field") || childrenTypes.has("multi-panel-UI-view") || childrenTypes.has("UI-view") || childrenSupportedSections.has("date-time")) {
    direction = "column";
    spacing = getSpacing("column");
  } else {
    direction = {
      xs: "column",
      lg: "row"
    };
    spacing = {
      xs: getSpacing("column"),
      lg: getSpacing("row")
    };
  }
  if (childrenTypes.has("UI-view")) ;
  else if (childrenTypes.has("single-input-range-field")) {
    if (!childrenSupportedSections.has("date-time")) {
      sx = _extends$1({}, sx, {
        [`& > .${textFieldClasses.root}`]: {
          minWidth: 300
        }
      });
    } else {
      sx = _extends$1({}, sx, {
        [`& > .${textFieldClasses.root}`]: {
          minWidth: {
            xs: 300,
            md: 400
          }
        }
      });
    }
  } else if (childrenSupportedSections.has("date-time")) {
    sx = _extends$1({}, sx, {
      [`& > .${textFieldClasses.root}`]: {
        minWidth: 270
      }
    });
  } else {
    sx = _extends$1({}, sx, {
      [`& > .${textFieldClasses.root}`]: {
        minWidth: 200
      }
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, {
    direction,
    spacing,
    sx,
    children
  });
}
var weekOfYear$2 = { exports: {} };
var weekOfYear$1 = weekOfYear$2.exports;
var hasRequiredWeekOfYear;
function requireWeekOfYear() {
  if (hasRequiredWeekOfYear) return weekOfYear$2.exports;
  hasRequiredWeekOfYear = 1;
  (function(module, exports$1) {
    !(function(e, t) {
      module.exports = t();
    })(weekOfYear$1, (function() {
      var e = "week", t = "year";
      return function(i, n, r) {
        var f2 = n.prototype;
        f2.week = function(i2) {
          if (void 0 === i2 && (i2 = null), null !== i2) return this.add(7 * (i2 - this.week()), "day");
          var n2 = this.$locale().yearStart || 1;
          if (11 === this.month() && this.date() > 25) {
            var f3 = r(this).startOf(t).add(1, t).date(n2), s = r(this).endOf(e);
            if (f3.isBefore(s)) return 1;
          }
          var a = r(this).startOf(t).date(n2).startOf(e).subtract(1, "millisecond"), o = this.diff(a, e, true);
          return o < 0 ? r(this).startOf("week").week() : Math.ceil(o);
        }, f2.weeks = function(e2) {
          return void 0 === e2 && (e2 = null), this.week(e2);
        };
      };
    }));
  })(weekOfYear$2);
  return weekOfYear$2.exports;
}
var weekOfYearExports = requireWeekOfYear();
const weekOfYear = /* @__PURE__ */ getDefaultExportFromCjs(weekOfYearExports);
var customParseFormat$1 = { exports: {} };
var customParseFormat = customParseFormat$1.exports;
var hasRequiredCustomParseFormat;
function requireCustomParseFormat() {
  if (hasRequiredCustomParseFormat) return customParseFormat$1.exports;
  hasRequiredCustomParseFormat = 1;
  (function(module, exports$1) {
    !(function(e, t) {
      module.exports = t();
    })(customParseFormat, (function() {
      var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n = /\d/, r = /\d\d/, i = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, s = {}, a = function(e2) {
        return (e2 = +e2) + (e2 > 68 ? 1900 : 2e3);
      };
      var f2 = function(e2) {
        return function(t2) {
          this[e2] = +t2;
        };
      }, h = [/[+-]\d\d:?(\d\d)?|Z/, function(e2) {
        (this.zone || (this.zone = {})).offset = (function(e3) {
          if (!e3) return 0;
          if ("Z" === e3) return 0;
          var t2 = e3.match(/([+-]|\d\d)/g), n2 = 60 * t2[1] + (+t2[2] || 0);
          return 0 === n2 ? 0 : "+" === t2[0] ? -n2 : n2;
        })(e2);
      }], u = function(e2) {
        var t2 = s[e2];
        return t2 && (t2.indexOf ? t2 : t2.s.concat(t2.f));
      }, d = function(e2, t2) {
        var n2, r2 = s.meridiem;
        if (r2) {
          for (var i2 = 1; i2 <= 24; i2 += 1) if (e2.indexOf(r2(i2, 0, t2)) > -1) {
            n2 = i2 > 12;
            break;
          }
        } else n2 = e2 === (t2 ? "pm" : "PM");
        return n2;
      }, c = { A: [o, function(e2) {
        this.afternoon = d(e2, false);
      }], a: [o, function(e2) {
        this.afternoon = d(e2, true);
      }], Q: [n, function(e2) {
        this.month = 3 * (e2 - 1) + 1;
      }], S: [n, function(e2) {
        this.milliseconds = 100 * +e2;
      }], SS: [r, function(e2) {
        this.milliseconds = 10 * +e2;
      }], SSS: [/\d{3}/, function(e2) {
        this.milliseconds = +e2;
      }], s: [i, f2("seconds")], ss: [i, f2("seconds")], m: [i, f2("minutes")], mm: [i, f2("minutes")], H: [i, f2("hours")], h: [i, f2("hours")], HH: [i, f2("hours")], hh: [i, f2("hours")], D: [i, f2("day")], DD: [r, f2("day")], Do: [o, function(e2) {
        var t2 = s.ordinal, n2 = e2.match(/\d+/);
        if (this.day = n2[0], t2) for (var r2 = 1; r2 <= 31; r2 += 1) t2(r2).replace(/\[|\]/g, "") === e2 && (this.day = r2);
      }], w: [i, f2("week")], ww: [r, f2("week")], M: [i, f2("month")], MM: [r, f2("month")], MMM: [o, function(e2) {
        var t2 = u("months"), n2 = (u("monthsShort") || t2.map((function(e3) {
          return e3.slice(0, 3);
        }))).indexOf(e2) + 1;
        if (n2 < 1) throw new Error();
        this.month = n2 % 12 || n2;
      }], MMMM: [o, function(e2) {
        var t2 = u("months").indexOf(e2) + 1;
        if (t2 < 1) throw new Error();
        this.month = t2 % 12 || t2;
      }], Y: [/[+-]?\d+/, f2("year")], YY: [r, function(e2) {
        this.year = a(e2);
      }], YYYY: [/\d{4}/, f2("year")], Z: h, ZZ: h };
      function l(n2) {
        var r2, i2;
        r2 = n2, i2 = s && s.formats;
        for (var o2 = (n2 = r2.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(t2, n3, r3) {
          var o3 = r3 && r3.toUpperCase();
          return n3 || i2[r3] || e[r3] || i2[o3].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(e2, t3, n4) {
            return t3 || n4.slice(1);
          }));
        }))).match(t), a2 = o2.length, f3 = 0; f3 < a2; f3 += 1) {
          var h2 = o2[f3], u2 = c[h2], d2 = u2 && u2[0], l2 = u2 && u2[1];
          o2[f3] = l2 ? { regex: d2, parser: l2 } : h2.replace(/^\[|\]$/g, "");
        }
        return function(e2) {
          for (var t2 = {}, n3 = 0, r3 = 0; n3 < a2; n3 += 1) {
            var i3 = o2[n3];
            if ("string" == typeof i3) r3 += i3.length;
            else {
              var s2 = i3.regex, f4 = i3.parser, h3 = e2.slice(r3), u3 = s2.exec(h3)[0];
              f4.call(t2, u3), e2 = e2.replace(u3, "");
            }
          }
          return (function(e3) {
            var t3 = e3.afternoon;
            if (void 0 !== t3) {
              var n4 = e3.hours;
              t3 ? n4 < 12 && (e3.hours += 12) : 12 === n4 && (e3.hours = 0), delete e3.afternoon;
            }
          })(t2), t2;
        };
      }
      return function(e2, t2, n2) {
        n2.p.customParseFormat = true, e2 && e2.parseTwoDigitYear && (a = e2.parseTwoDigitYear);
        var r2 = t2.prototype, i2 = r2.parse;
        r2.parse = function(e3) {
          var t3 = e3.date, r3 = e3.utc, o2 = e3.args;
          this.$u = r3;
          var a2 = o2[1];
          if ("string" == typeof a2) {
            var f3 = true === o2[2], h2 = true === o2[3], u2 = f3 || h2, d2 = o2[2];
            h2 && (d2 = o2[2]), s = this.$locale(), !f3 && d2 && (s = n2.Ls[d2]), this.$d = (function(e4, t4, n3, r4) {
              try {
                if (["x", "X"].indexOf(t4) > -1) return new Date(("X" === t4 ? 1e3 : 1) * e4);
                var i3 = l(t4)(e4), o3 = i3.year, s2 = i3.month, a3 = i3.day, f4 = i3.hours, h3 = i3.minutes, u3 = i3.seconds, d3 = i3.milliseconds, c3 = i3.zone, m2 = i3.week, M2 = /* @__PURE__ */ new Date(), Y = a3 || (o3 || s2 ? 1 : M2.getDate()), p = o3 || M2.getFullYear(), v = 0;
                o3 && !s2 || (v = s2 > 0 ? s2 - 1 : M2.getMonth());
                var D, w2 = f4 || 0, g = h3 || 0, y = u3 || 0, L = d3 || 0;
                return c3 ? new Date(Date.UTC(p, v, Y, w2, g, y, L + 60 * c3.offset * 1e3)) : n3 ? new Date(Date.UTC(p, v, Y, w2, g, y, L)) : (D = new Date(p, v, Y, w2, g, y, L), m2 && (D = r4(D).week(m2).toDate()), D);
              } catch (e5) {
                return /* @__PURE__ */ new Date("");
              }
            })(t3, a2, r3, n2), this.init(), d2 && true !== d2 && (this.$L = this.locale(d2).$L), u2 && t3 != this.format(a2) && (this.$d = /* @__PURE__ */ new Date("")), s = {};
          } else if (a2 instanceof Array) for (var c2 = a2.length, m = 1; m <= c2; m += 1) {
            o2[1] = a2[m - 1];
            var M = n2.apply(this, o2);
            if (M.isValid()) {
              this.$d = M.$d, this.$L = M.$L, this.init();
              break;
            }
            m === c2 && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else i2.call(this, e3);
        };
      };
    }));
  })(customParseFormat$1);
  return customParseFormat$1.exports;
}
var customParseFormatExports = requireCustomParseFormat();
const customParseFormatPlugin = /* @__PURE__ */ getDefaultExportFromCjs(customParseFormatExports);
var localizedFormat$1 = { exports: {} };
var localizedFormat = localizedFormat$1.exports;
var hasRequiredLocalizedFormat;
function requireLocalizedFormat() {
  if (hasRequiredLocalizedFormat) return localizedFormat$1.exports;
  hasRequiredLocalizedFormat = 1;
  (function(module, exports$1) {
    !(function(e, t) {
      module.exports = t();
    })(localizedFormat, (function() {
      var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
      return function(t, o, n) {
        var r = o.prototype, i = r.format;
        n.en.formats = e, r.format = function(t2) {
          void 0 === t2 && (t2 = "YYYY-MM-DDTHH:mm:ssZ");
          var o2 = this.$locale().formats, n2 = (function(t3, o3) {
            return t3.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(t4, n3, r2) {
              var i2 = r2 && r2.toUpperCase();
              return n3 || o3[r2] || e[r2] || o3[i2].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(e2, t5, o4) {
                return t5 || o4.slice(1);
              }));
            }));
          })(t2, void 0 === o2 ? {} : o2);
          return i.call(this, n2);
        };
      };
    }));
  })(localizedFormat$1);
  return localizedFormat$1.exports;
}
var localizedFormatExports = requireLocalizedFormat();
const localizedFormatPlugin = /* @__PURE__ */ getDefaultExportFromCjs(localizedFormatExports);
var isBetween$1 = { exports: {} };
var isBetween = isBetween$1.exports;
var hasRequiredIsBetween;
function requireIsBetween() {
  if (hasRequiredIsBetween) return isBetween$1.exports;
  hasRequiredIsBetween = 1;
  (function(module, exports$1) {
    !(function(e, i) {
      module.exports = i();
    })(isBetween, (function() {
      return function(e, i, t) {
        i.prototype.isBetween = function(e2, i2, s, f2) {
          var n = t(e2), o = t(i2), r = "(" === (f2 = f2 || "()")[0], u = ")" === f2[1];
          return (r ? this.isAfter(n, s) : !this.isBefore(n, s)) && (u ? this.isBefore(o, s) : !this.isAfter(o, s)) || (r ? this.isBefore(n, s) : !this.isAfter(n, s)) && (u ? this.isAfter(o, s) : !this.isBefore(o, s));
        };
      };
    }));
  })(isBetween$1);
  return isBetween$1.exports;
}
var isBetweenExports = requireIsBetween();
const isBetweenPlugin = /* @__PURE__ */ getDefaultExportFromCjs(isBetweenExports);
const buildWarning = (message, gravity = "warning") => {
  let alreadyWarned = false;
  const cleanMessage = Array.isArray(message) ? message.join("\n") : message;
  return () => {
    if (!alreadyWarned) {
      alreadyWarned = true;
      if (gravity === "error") {
        console.error(cleanMessage);
      } else {
        console.warn(cleanMessage);
      }
    }
  };
};
dayjs.extend(customParseFormatPlugin);
dayjs.extend(localizedFormatPlugin);
dayjs.extend(isBetweenPlugin);
const localeNotFoundWarning = buildWarning(["Your locale has not been found.", "Either the locale key is not a supported one. Locales supported by dayjs are available here: https://github.com/iamkun/dayjs/tree/dev/src/locale", "Or you forget to import the locale from 'dayjs/locale/{localeUsed}'", "fallback on English locale"]);
const formatTokenMap = {
  // Year
  YY: "year",
  YYYY: {
    sectionType: "year",
    contentType: "digit",
    maxLength: 4
  },
  // Month
  M: {
    sectionType: "month",
    contentType: "digit",
    maxLength: 2
  },
  MM: "month",
  MMM: {
    sectionType: "month",
    contentType: "letter"
  },
  MMMM: {
    sectionType: "month",
    contentType: "letter"
  },
  // Day of the month
  D: {
    sectionType: "day",
    contentType: "digit",
    maxLength: 2
  },
  DD: "day",
  Do: {
    sectionType: "day",
    contentType: "digit-with-letter"
  },
  // Day of the week
  d: {
    sectionType: "weekDay",
    contentType: "digit",
    maxLength: 2
  },
  dd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  ddd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  dddd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  // Meridiem
  A: "meridiem",
  a: "meridiem",
  // Hours
  H: {
    sectionType: "hours",
    contentType: "digit",
    maxLength: 2
  },
  HH: "hours",
  h: {
    sectionType: "hours",
    contentType: "digit",
    maxLength: 2
  },
  hh: "hours",
  // Minutes
  m: {
    sectionType: "minutes",
    contentType: "digit",
    maxLength: 2
  },
  mm: "minutes",
  // Seconds
  s: {
    sectionType: "seconds",
    contentType: "digit",
    maxLength: 2
  },
  ss: "seconds"
};
const defaultFormats = {
  year: "YYYY",
  month: "MMMM",
  monthShort: "MMM",
  dayOfMonth: "D",
  weekday: "dddd",
  weekdayShort: "dd",
  hours24h: "HH",
  hours12h: "hh",
  meridiem: "A",
  minutes: "mm",
  seconds: "ss",
  fullDate: "ll",
  fullDateWithWeekday: "dddd, LL",
  keyboardDate: "L",
  shortDate: "MMM D",
  normalDate: "D MMMM",
  normalDateWithWeekday: "ddd, MMM D",
  monthAndYear: "MMMM YYYY",
  monthAndDate: "MMMM D",
  fullTime: "LT",
  fullTime12h: "hh:mm A",
  fullTime24h: "HH:mm",
  fullDateTime: "lll",
  fullDateTime12h: "ll hh:mm A",
  fullDateTime24h: "ll HH:mm",
  keyboardDateTime: "L LT",
  keyboardDateTime12h: "L hh:mm A",
  keyboardDateTime24h: "L HH:mm"
};
const MISSING_UTC_PLUGIN = ["Missing UTC plugin", "To be able to use UTC or timezones, you have to enable the `utc` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-utc"].join("\n");
const MISSING_TIMEZONE_PLUGIN = ["Missing timezone plugin", "To be able to use timezones, you have to enable both the `utc` and the `timezone` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-timezone"].join("\n");
const withLocale = (dayjs2, locale) => !locale ? dayjs2 : (...args) => dayjs2(...args).locale(locale);
class AdapterDayjs {
  constructor({
    locale: _locale,
    formats,
    instance
  } = {}) {
    var _this$rawDayJsInstanc;
    this.isMUIAdapter = true;
    this.isTimezoneCompatible = true;
    this.lib = "dayjs";
    this.rawDayJsInstance = void 0;
    this.dayjs = void 0;
    this.locale = void 0;
    this.formats = void 0;
    this.escapedCharacters = {
      start: "[",
      end: "]"
    };
    this.formatTokenMap = formatTokenMap;
    this.setLocaleToValue = (value) => {
      const expectedLocale = this.getCurrentLocaleCode();
      if (expectedLocale === value.locale()) {
        return value;
      }
      return value.locale(expectedLocale);
    };
    this.hasUTCPlugin = () => typeof dayjs.utc !== "undefined";
    this.hasTimezonePlugin = () => typeof dayjs.tz !== "undefined";
    this.isSame = (value, comparing, comparisonTemplate) => {
      const comparingInValueTimezone = this.setTimezone(comparing, this.getTimezone(value));
      return value.format(comparisonTemplate) === comparingInValueTimezone.format(comparisonTemplate);
    };
    this.cleanTimezone = (timezone) => {
      switch (timezone) {
        case "default": {
          return void 0;
        }
        case "system": {
          return dayjs.tz.guess();
        }
        default: {
          return timezone;
        }
      }
    };
    this.createSystemDate = (value) => {
      if (this.rawDayJsInstance) {
        return this.rawDayJsInstance(value);
      }
      if (this.hasUTCPlugin() && this.hasTimezonePlugin()) {
        const timezone = dayjs.tz.guess();
        if (timezone !== "UTC") {
          return dayjs.tz(value, timezone);
        }
        return dayjs(value);
      }
      return dayjs(value);
    };
    this.createUTCDate = (value) => {
      if (!this.hasUTCPlugin()) {
        throw new Error(MISSING_UTC_PLUGIN);
      }
      return dayjs.utc(value);
    };
    this.createTZDate = (value, timezone) => {
      if (!this.hasUTCPlugin()) {
        throw new Error(MISSING_UTC_PLUGIN);
      }
      if (!this.hasTimezonePlugin()) {
        throw new Error(MISSING_TIMEZONE_PLUGIN);
      }
      const keepLocalTime = value !== void 0 && !value.endsWith("Z");
      return dayjs(value).tz(this.cleanTimezone(timezone), keepLocalTime);
    };
    this.getLocaleFormats = () => {
      const locales = dayjs.Ls;
      const locale = this.locale || "en";
      let localeObject = locales[locale];
      if (localeObject === void 0) {
        localeNotFoundWarning();
        localeObject = locales.en;
      }
      return localeObject.formats;
    };
    this.adjustOffset = (value) => {
      if (!this.hasTimezonePlugin()) {
        return value;
      }
      const timezone = this.getTimezone(value);
      if (timezone !== "UTC") {
        var _fixedValue$$offset, _value$$offset;
        const fixedValue = value.tz(this.cleanTimezone(timezone), true);
        if (((_fixedValue$$offset = fixedValue.$offset) != null ? _fixedValue$$offset : 0) === ((_value$$offset = value.$offset) != null ? _value$$offset : 0)) {
          return value;
        }
        value.$offset = fixedValue.$offset;
      }
      return value;
    };
    this.date = (value) => {
      if (value === null) {
        return null;
      }
      return this.dayjs(value);
    };
    this.dateWithTimezone = (value, timezone) => {
      if (value === null) {
        return null;
      }
      let parsedValue;
      if (timezone === "UTC") {
        parsedValue = this.createUTCDate(value);
      } else if (timezone === "system" || timezone === "default" && !this.hasTimezonePlugin()) {
        parsedValue = this.createSystemDate(value);
      } else {
        parsedValue = this.createTZDate(value, timezone);
      }
      if (this.locale === void 0) {
        return parsedValue;
      }
      return parsedValue.locale(this.locale);
    };
    this.getTimezone = (value) => {
      if (this.hasTimezonePlugin()) {
        var _value$$x;
        const zone = (_value$$x = value.$x) == null ? void 0 : _value$$x.$timezone;
        if (zone) {
          return zone;
        }
      }
      if (this.hasUTCPlugin() && value.isUTC()) {
        return "UTC";
      }
      return "system";
    };
    this.setTimezone = (value, timezone) => {
      if (this.getTimezone(value) === timezone) {
        return value;
      }
      if (timezone === "UTC") {
        if (!this.hasUTCPlugin()) {
          throw new Error(MISSING_UTC_PLUGIN);
        }
        return value.utc();
      }
      if (timezone === "system") {
        return value.local();
      }
      if (!this.hasTimezonePlugin()) {
        if (timezone === "default") {
          return value;
        }
        throw new Error(MISSING_TIMEZONE_PLUGIN);
      }
      return dayjs.tz(value, this.cleanTimezone(timezone));
    };
    this.toJsDate = (value) => {
      return value.toDate();
    };
    this.parseISO = (isoString) => {
      return this.dayjs(isoString);
    };
    this.toISO = (value) => {
      return value.toISOString();
    };
    this.parse = (value, format) => {
      if (value === "") {
        return null;
      }
      return this.dayjs(value, format, this.locale, true);
    };
    this.getCurrentLocaleCode = () => {
      return this.locale || "en";
    };
    this.is12HourCycleInCurrentLocale = () => {
      return /A|a/.test(this.getLocaleFormats().LT || "");
    };
    this.expandFormat = (format) => {
      const localeFormats = this.getLocaleFormats();
      const t = (formatBis) => formatBis.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (_, a, b) => a || b.slice(1));
      return format.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (_, a, b) => {
        const B = b && b.toUpperCase();
        return a || localeFormats[b] || t(localeFormats[B]);
      });
    };
    this.getFormatHelperText = (format) => {
      return this.expandFormat(format).replace(/a/gi, "(a|p)m").toLocaleLowerCase();
    };
    this.isNull = (value) => {
      return value === null;
    };
    this.isValid = (value) => {
      return this.dayjs(value).isValid();
    };
    this.format = (value, formatKey) => {
      return this.formatByString(value, this.formats[formatKey]);
    };
    this.formatByString = (value, formatString) => {
      return this.dayjs(value).format(formatString);
    };
    this.formatNumber = (numberToFormat) => {
      return numberToFormat;
    };
    this.getDiff = (value, comparing, unit) => {
      return value.diff(comparing, unit);
    };
    this.isEqual = (value, comparing) => {
      if (value === null && comparing === null) {
        return true;
      }
      return this.dayjs(value).toDate().getTime() === this.dayjs(comparing).toDate().getTime();
    };
    this.isSameYear = (value, comparing) => {
      return this.isSame(value, comparing, "YYYY");
    };
    this.isSameMonth = (value, comparing) => {
      return this.isSame(value, comparing, "YYYY-MM");
    };
    this.isSameDay = (value, comparing) => {
      return this.isSame(value, comparing, "YYYY-MM-DD");
    };
    this.isSameHour = (value, comparing) => {
      return value.isSame(comparing, "hour");
    };
    this.isAfter = (value, comparing) => {
      return value > comparing;
    };
    this.isAfterYear = (value, comparing) => {
      if (!this.hasUTCPlugin()) {
        return value.isAfter(comparing, "year");
      }
      return !this.isSameYear(value, comparing) && value.utc() > comparing.utc();
    };
    this.isAfterDay = (value, comparing) => {
      if (!this.hasUTCPlugin()) {
        return value.isAfter(comparing, "day");
      }
      return !this.isSameDay(value, comparing) && value.utc() > comparing.utc();
    };
    this.isBefore = (value, comparing) => {
      return value < comparing;
    };
    this.isBeforeYear = (value, comparing) => {
      if (!this.hasUTCPlugin()) {
        return value.isBefore(comparing, "year");
      }
      return !this.isSameYear(value, comparing) && value.utc() < comparing.utc();
    };
    this.isBeforeDay = (value, comparing) => {
      if (!this.hasUTCPlugin()) {
        return value.isBefore(comparing, "day");
      }
      return !this.isSameDay(value, comparing) && value.utc() < comparing.utc();
    };
    this.isWithinRange = (value, [start, end]) => {
      return value >= start && value <= end;
    };
    this.startOfYear = (value) => {
      return this.adjustOffset(value.startOf("year"));
    };
    this.startOfMonth = (value) => {
      return this.adjustOffset(value.startOf("month"));
    };
    this.startOfWeek = (value) => {
      return this.adjustOffset(value.startOf("week"));
    };
    this.startOfDay = (value) => {
      return this.adjustOffset(value.startOf("day"));
    };
    this.endOfYear = (value) => {
      return this.adjustOffset(value.endOf("year"));
    };
    this.endOfMonth = (value) => {
      return this.adjustOffset(value.endOf("month"));
    };
    this.endOfWeek = (value) => {
      return this.adjustOffset(value.endOf("week"));
    };
    this.endOfDay = (value) => {
      return this.adjustOffset(value.endOf("day"));
    };
    this.addYears = (value, amount) => {
      return this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), "year") : value.add(amount, "year"));
    };
    this.addMonths = (value, amount) => {
      return this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), "month") : value.add(amount, "month"));
    };
    this.addWeeks = (value, amount) => {
      return this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), "week") : value.add(amount, "week"));
    };
    this.addDays = (value, amount) => {
      return this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), "day") : value.add(amount, "day"));
    };
    this.addHours = (value, amount) => {
      return this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), "hour") : value.add(amount, "hour"));
    };
    this.addMinutes = (value, amount) => {
      return this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), "minute") : value.add(amount, "minute"));
    };
    this.addSeconds = (value, amount) => {
      return this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), "second") : value.add(amount, "second"));
    };
    this.getYear = (value) => {
      return value.year();
    };
    this.getMonth = (value) => {
      return value.month();
    };
    this.getDate = (value) => {
      return value.date();
    };
    this.getHours = (value) => {
      return value.hour();
    };
    this.getMinutes = (value) => {
      return value.minute();
    };
    this.getSeconds = (value) => {
      return value.second();
    };
    this.getMilliseconds = (value) => {
      return value.millisecond();
    };
    this.setYear = (value, year) => {
      return this.adjustOffset(value.set("year", year));
    };
    this.setMonth = (value, month) => {
      return this.adjustOffset(value.set("month", month));
    };
    this.setDate = (value, date) => {
      return this.adjustOffset(value.set("date", date));
    };
    this.setHours = (value, hours) => {
      return this.adjustOffset(value.set("hour", hours));
    };
    this.setMinutes = (value, minutes) => {
      return this.adjustOffset(value.set("minute", minutes));
    };
    this.setSeconds = (value, seconds) => {
      return this.adjustOffset(value.set("second", seconds));
    };
    this.setMilliseconds = (value, milliseconds) => {
      return this.adjustOffset(value.set("millisecond", milliseconds));
    };
    this.getDaysInMonth = (value) => {
      return value.daysInMonth();
    };
    this.getNextMonth = (value) => {
      return this.addMonths(value, 1);
    };
    this.getPreviousMonth = (value) => {
      return this.addMonths(value, -1);
    };
    this.getMonthArray = (value) => {
      const firstMonth = value.startOf("year");
      const monthArray = [firstMonth];
      while (monthArray.length < 12) {
        const prevMonth = monthArray[monthArray.length - 1];
        monthArray.push(this.addMonths(prevMonth, 1));
      }
      return monthArray;
    };
    this.mergeDateAndTime = (dateParam, timeParam) => {
      return dateParam.hour(timeParam.hour()).minute(timeParam.minute()).second(timeParam.second());
    };
    this.getWeekdays = () => {
      const start = this.dayjs().startOf("week");
      return [0, 1, 2, 3, 4, 5, 6].map((diff) => this.formatByString(this.addDays(start, diff), "dd"));
    };
    this.getWeekArray = (value) => {
      const cleanValue = this.setLocaleToValue(value);
      const start = cleanValue.startOf("month").startOf("week");
      const end = cleanValue.endOf("month").endOf("week");
      let count = 0;
      let current = start;
      const nestedWeeks = [];
      while (current < end) {
        const weekNumber = Math.floor(count / 7);
        nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
        nestedWeeks[weekNumber].push(current);
        current = this.addDays(current, 1);
        count += 1;
      }
      return nestedWeeks;
    };
    this.getWeekNumber = (value) => {
      return value.week();
    };
    this.getYearRange = (start, end) => {
      const startDate = start.startOf("year");
      const endDate = end.endOf("year");
      const years = [];
      let current = startDate;
      while (current < endDate) {
        years.push(current);
        current = this.addYears(current, 1);
      }
      return years;
    };
    this.getMeridiemText = (ampm) => {
      return ampm === "am" ? "AM" : "PM";
    };
    this.rawDayJsInstance = instance;
    this.dayjs = withLocale((_this$rawDayJsInstanc = this.rawDayJsInstance) != null ? _this$rawDayJsInstanc : dayjs, _locale);
    this.locale = _locale;
    this.formats = _extends$1({}, defaultFormats, formats);
    dayjs.extend(weekOfYear);
  }
}
const _excluded$m = ["localeText"];
const MuiPickersAdapterContext = /* @__PURE__ */ reactExports.createContext(null);
const LocalizationProvider = function LocalizationProvider2(inProps) {
  var _React$useContext;
  const {
    localeText: inLocaleText
  } = inProps, otherInProps = _objectWithoutPropertiesLoose(inProps, _excluded$m);
  const {
    utils: parentUtils,
    localeText: parentLocaleText
  } = (_React$useContext = reactExports.useContext(MuiPickersAdapterContext)) != null ? _React$useContext : {
    utils: void 0,
    localeText: void 0
  };
  const props = useThemeProps({
    // We don't want to pass the `localeText` prop to the theme, that way it will always return the theme value,
    // We will then merge this theme value with our value manually
    props: otherInProps,
    name: "MuiLocalizationProvider"
  });
  const {
    children,
    dateAdapter: DateAdapter,
    dateFormats,
    dateLibInstance,
    adapterLocale,
    localeText: themeLocaleText
  } = props;
  const localeText = reactExports.useMemo(() => _extends$1({}, themeLocaleText, parentLocaleText, inLocaleText), [themeLocaleText, parentLocaleText, inLocaleText]);
  const utils = reactExports.useMemo(() => {
    if (!DateAdapter) {
      if (parentUtils) {
        return parentUtils;
      }
      return null;
    }
    const adapter = new DateAdapter({
      locale: adapterLocale,
      formats: dateFormats,
      instance: dateLibInstance
    });
    if (!adapter.isMUIAdapter) {
      throw new Error(["MUI: The date adapter should be imported from `@mui/x-date-pickers` or `@mui/x-date-pickers-pro`, not from `@date-io`", "For example, `import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'` instead of `import AdapterDayjs from '@date-io/dayjs'`", "More information on the installation documentation: https://mui.com/x/react-date-pickers/getting-started/#installation"].join(`
`));
    }
    return adapter;
  }, [DateAdapter, adapterLocale, dateFormats, dateLibInstance, parentUtils]);
  const defaultDates = reactExports.useMemo(() => {
    if (!utils) {
      return null;
    }
    return {
      minDate: utils.date("1900-01-01T00:00:00.000"),
      maxDate: utils.date("2099-12-31T00:00:00.000")
    };
  }, [utils]);
  const contextValue = reactExports.useMemo(() => {
    return {
      utils,
      defaultDates,
      localeText
    };
  }, [defaultDates, utils, localeText]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MuiPickersAdapterContext.Provider, {
    value: contextValue,
    children
  });
};
const areViewsEqual = (views, expectedViews) => {
  if (views.length !== expectedViews.length) {
    return false;
  }
  return expectedViews.every((expectedView) => views.includes(expectedView));
};
const applyDefaultViewProps = ({
  openTo,
  defaultOpenTo,
  views,
  defaultViews
}) => {
  const viewsWithDefault = views != null ? views : defaultViews;
  let openToWithDefault;
  if (openTo != null) {
    openToWithDefault = openTo;
  } else if (viewsWithDefault.includes(defaultOpenTo)) {
    openToWithDefault = defaultOpenTo;
  } else if (viewsWithDefault.length > 0) {
    openToWithDefault = viewsWithDefault[0];
  } else {
    throw new Error("MUI: The `views` prop must contain at least one view");
  }
  return {
    views: viewsWithDefault,
    openTo: openToWithDefault
  };
};
const mergeDateAndTime = (utils, dateParam, timeParam) => {
  let mergedDate = dateParam;
  mergedDate = utils.setHours(mergedDate, utils.getHours(timeParam));
  mergedDate = utils.setMinutes(mergedDate, utils.getMinutes(timeParam));
  mergedDate = utils.setSeconds(mergedDate, utils.getSeconds(timeParam));
  return mergedDate;
};
const findClosestEnabledDate = ({
  date,
  disableFuture,
  disablePast,
  maxDate,
  minDate,
  isDateDisabled,
  utils,
  timezone
}) => {
  const today = mergeDateAndTime(utils, utils.dateWithTimezone(void 0, timezone), date);
  if (disablePast && utils.isBefore(minDate, today)) {
    minDate = today;
  }
  if (disableFuture && utils.isAfter(maxDate, today)) {
    maxDate = today;
  }
  let forward = date;
  let backward = date;
  if (utils.isBefore(date, minDate)) {
    forward = minDate;
    backward = null;
  }
  if (utils.isAfter(date, maxDate)) {
    if (backward) {
      backward = maxDate;
    }
    forward = null;
  }
  while (forward || backward) {
    if (forward && utils.isAfter(forward, maxDate)) {
      forward = null;
    }
    if (backward && utils.isBefore(backward, minDate)) {
      backward = null;
    }
    if (forward) {
      if (!isDateDisabled(forward)) {
        return forward;
      }
      forward = utils.addDays(forward, 1);
    }
    if (backward) {
      if (!isDateDisabled(backward)) {
        return backward;
      }
      backward = utils.addDays(backward, -1);
    }
  }
  return null;
};
const replaceInvalidDateByNull = (utils, value) => value == null || !utils.isValid(value) ? null : value;
const applyDefaultDate = (utils, value, defaultValue) => {
  if (value == null || !utils.isValid(value)) {
    return defaultValue;
  }
  return value;
};
const areDatesEqual = (utils, a, b) => {
  if (!utils.isValid(a) && a != null && !utils.isValid(b) && b != null) {
    return true;
  }
  return utils.isEqual(a, b);
};
const getMonthsInYear = (utils, year) => {
  const firstMonth = utils.startOfYear(year);
  const months = [firstMonth];
  while (months.length < 12) {
    const prevMonth = months[months.length - 1];
    months.push(utils.addMonths(prevMonth, 1));
  }
  return months;
};
const getTodayDate = (utils, timezone, valueType) => valueType === "date" ? utils.startOfDay(utils.dateWithTimezone(void 0, timezone)) : utils.dateWithTimezone(void 0, timezone);
const dateViews = ["year", "month", "day"];
const isDatePickerView = (view) => dateViews.includes(view);
const resolveDateFormat = (utils, {
  format,
  views
}, isInToolbar) => {
  if (format != null) {
    return format;
  }
  const formats = utils.formats;
  if (areViewsEqual(views, ["year"])) {
    return formats.year;
  }
  if (areViewsEqual(views, ["month"])) {
    return formats.month;
  }
  if (areViewsEqual(views, ["day"])) {
    return formats.dayOfMonth;
  }
  if (areViewsEqual(views, ["month", "year"])) {
    return `${formats.month} ${formats.year}`;
  }
  if (areViewsEqual(views, ["day", "month"])) {
    return `${formats.month} ${formats.dayOfMonth}`;
  }
  if (isInToolbar) {
    return /en/.test(utils.getCurrentLocaleCode()) ? formats.normalDateWithWeekday : formats.normalDate;
  }
  return formats.keyboardDate;
};
const getWeekdays = (utils, date) => {
  const start = utils.startOfWeek(date);
  return [0, 1, 2, 3, 4, 5, 6].map((diff) => utils.addDays(start, diff));
};
const timeViews = ["hours", "minutes", "seconds"];
const isTimeView = (view) => timeViews.includes(view);
const getSecondsInDay = (date, utils) => {
  return utils.getHours(date) * 3600 + utils.getMinutes(date) * 60 + utils.getSeconds(date);
};
const createIsAfterIgnoreDatePart = (disableIgnoringDatePartForTimeValidation, utils) => (dateLeft, dateRight) => {
  if (disableIgnoringDatePartForTimeValidation) {
    return utils.isAfter(dateLeft, dateRight);
  }
  return getSecondsInDay(dateLeft, utils) > getSecondsInDay(dateRight, utils);
};
const SECTION_TYPE_GRANULARITY = {
  year: 1,
  month: 2,
  day: 3,
  hours: 4,
  minutes: 5,
  seconds: 6,
  milliseconds: 7
};
const getSectionTypeGranularity = (sections) => Math.max(...sections.map((section) => {
  var _SECTION_TYPE_GRANULA;
  return (_SECTION_TYPE_GRANULA = SECTION_TYPE_GRANULARITY[section.type]) != null ? _SECTION_TYPE_GRANULA : 1;
}));
const roundDate = (utils, granularity, date) => {
  if (granularity === SECTION_TYPE_GRANULARITY.year) {
    return utils.startOfYear(date);
  }
  if (granularity === SECTION_TYPE_GRANULARITY.month) {
    return utils.startOfMonth(date);
  }
  if (granularity === SECTION_TYPE_GRANULARITY.day) {
    return utils.startOfDay(date);
  }
  let roundedDate = date;
  if (granularity < SECTION_TYPE_GRANULARITY.minutes) {
    roundedDate = utils.setMinutes(roundedDate, 0);
  }
  if (granularity < SECTION_TYPE_GRANULARITY.seconds) {
    roundedDate = utils.setSeconds(roundedDate, 0);
  }
  if (granularity < SECTION_TYPE_GRANULARITY.milliseconds) {
    roundedDate = utils.setMilliseconds(roundedDate, 0);
  }
  return roundedDate;
};
const getDefaultReferenceDate = ({
  props,
  utils,
  granularity,
  timezone,
  getTodayDate: inGetTodayDate
}) => {
  var _props$disableIgnorin;
  let referenceDate = inGetTodayDate ? inGetTodayDate() : roundDate(utils, granularity, getTodayDate(utils, timezone));
  if (props.minDate != null && utils.isAfterDay(props.minDate, referenceDate)) {
    referenceDate = roundDate(utils, granularity, props.minDate);
  }
  if (props.maxDate != null && utils.isBeforeDay(props.maxDate, referenceDate)) {
    referenceDate = roundDate(utils, granularity, props.maxDate);
  }
  const isAfter = createIsAfterIgnoreDatePart((_props$disableIgnorin = props.disableIgnoringDatePartForTimeValidation) != null ? _props$disableIgnorin : false, utils);
  if (props.minTime != null && isAfter(props.minTime, referenceDate)) {
    referenceDate = roundDate(utils, granularity, props.disableIgnoringDatePartForTimeValidation ? props.minTime : mergeDateAndTime(utils, referenceDate, props.minTime));
  }
  if (props.maxTime != null && isAfter(referenceDate, props.maxTime)) {
    referenceDate = roundDate(utils, granularity, props.disableIgnoringDatePartForTimeValidation ? props.maxTime : mergeDateAndTime(utils, referenceDate, props.maxTime));
  }
  return referenceDate;
};
const getDateSectionConfigFromFormatToken = (utils, formatToken) => {
  const config = utils.formatTokenMap[formatToken];
  if (config == null) {
    throw new Error([`MUI: The token "${formatToken}" is not supported by the Date and Time Pickers.`, "Please try using another token or open an issue on https://github.com/mui/mui-x/issues/new/choose if you think it should be supported."].join("\n"));
  }
  if (typeof config === "string") {
    return {
      type: config,
      contentType: config === "meridiem" ? "letter" : "digit",
      maxLength: void 0
    };
  }
  return {
    type: config.sectionType,
    contentType: config.contentType,
    maxLength: config.maxLength
  };
};
const getDeltaFromKeyCode = (keyCode) => {
  switch (keyCode) {
    case "ArrowUp":
      return 1;
    case "ArrowDown":
      return -1;
    case "PageUp":
      return 5;
    case "PageDown":
      return -5;
    default:
      return 0;
  }
};
const getDaysInWeekStr = (utils, timezone, format) => {
  const elements = [];
  const now = utils.dateWithTimezone(void 0, timezone);
  const startDate = utils.startOfWeek(now);
  const endDate = utils.endOfWeek(now);
  let current = startDate;
  while (utils.isBefore(current, endDate)) {
    elements.push(current);
    current = utils.addDays(current, 1);
  }
  return elements.map((weekDay) => utils.formatByString(weekDay, format));
};
const getLetterEditingOptions = (utils, timezone, sectionType, format) => {
  switch (sectionType) {
    case "month": {
      return getMonthsInYear(utils, utils.dateWithTimezone(void 0, timezone)).map((month) => utils.formatByString(month, format));
    }
    case "weekDay": {
      return getDaysInWeekStr(utils, timezone, format);
    }
    case "meridiem": {
      const now = utils.dateWithTimezone(void 0, timezone);
      return [utils.startOfDay(now), utils.endOfDay(now)].map((date) => utils.formatByString(date, format));
    }
    default: {
      return [];
    }
  }
};
const cleanLeadingZeros = (utils, valueStr, size) => {
  let cleanValueStr = valueStr;
  cleanValueStr = Number(cleanValueStr).toString();
  while (cleanValueStr.length < size) {
    cleanValueStr = `0${cleanValueStr}`;
  }
  return cleanValueStr;
};
const cleanDigitSectionValue = (utils, timezone, value, sectionBoundaries, section) => {
  if (section.type === "day" && section.contentType === "digit-with-letter") {
    const date = utils.setDate(sectionBoundaries.longestMonth, value);
    return utils.formatByString(date, section.format);
  }
  const valueStr = value.toString();
  if (section.hasLeadingZerosInInput) {
    return cleanLeadingZeros(utils, valueStr, section.maxLength);
  }
  return valueStr;
};
const adjustSectionValue = (utils, timezone, section, keyCode, sectionsValueBoundaries, activeDate, stepsAttributes) => {
  const delta = getDeltaFromKeyCode(keyCode);
  const isStart = keyCode === "Home";
  const isEnd = keyCode === "End";
  const shouldSetAbsolute = section.value === "" || isStart || isEnd;
  const adjustDigitSection = () => {
    const sectionBoundaries = sectionsValueBoundaries[section.type]({
      currentDate: activeDate,
      format: section.format,
      contentType: section.contentType
    });
    const getCleanValue = (value) => cleanDigitSectionValue(utils, timezone, value, sectionBoundaries, section);
    const step = section.type === "minutes" && stepsAttributes != null && stepsAttributes.minutesStep ? stepsAttributes.minutesStep : 1;
    const currentSectionValue = parseInt(section.value, 10);
    let newSectionValueNumber = currentSectionValue + delta * step;
    if (shouldSetAbsolute) {
      if (section.type === "year" && !isEnd && !isStart) {
        return utils.formatByString(utils.dateWithTimezone(void 0, timezone), section.format);
      }
      if (delta > 0 || isStart) {
        newSectionValueNumber = sectionBoundaries.minimum;
      } else {
        newSectionValueNumber = sectionBoundaries.maximum;
      }
    }
    if (newSectionValueNumber % step !== 0) {
      if (delta < 0 || isStart) {
        newSectionValueNumber += step - (step + newSectionValueNumber) % step;
      }
      if (delta > 0 || isEnd) {
        newSectionValueNumber -= newSectionValueNumber % step;
      }
    }
    if (newSectionValueNumber > sectionBoundaries.maximum) {
      return getCleanValue(sectionBoundaries.minimum + (newSectionValueNumber - sectionBoundaries.maximum - 1) % (sectionBoundaries.maximum - sectionBoundaries.minimum + 1));
    }
    if (newSectionValueNumber < sectionBoundaries.minimum) {
      return getCleanValue(sectionBoundaries.maximum - (sectionBoundaries.minimum - newSectionValueNumber - 1) % (sectionBoundaries.maximum - sectionBoundaries.minimum + 1));
    }
    return getCleanValue(newSectionValueNumber);
  };
  const adjustLetterSection = () => {
    const options = getLetterEditingOptions(utils, timezone, section.type, section.format);
    if (options.length === 0) {
      return section.value;
    }
    if (shouldSetAbsolute) {
      if (delta > 0 || isStart) {
        return options[0];
      }
      return options[options.length - 1];
    }
    const currentOptionIndex = options.indexOf(section.value);
    const newOptionIndex = (currentOptionIndex + options.length + delta) % options.length;
    return options[newOptionIndex];
  };
  if (section.contentType === "digit" || section.contentType === "digit-with-letter") {
    return adjustDigitSection();
  }
  return adjustLetterSection();
};
const getSectionVisibleValue = (section, target) => {
  let value = section.value || section.placeholder;
  const hasLeadingZeros = target === "non-input" ? section.hasLeadingZerosInFormat : section.hasLeadingZerosInInput;
  if (target === "non-input" && section.hasLeadingZerosInInput && !section.hasLeadingZerosInFormat) {
    value = Number(value).toString();
  }
  const shouldAddInvisibleSpace = ["input-rtl", "input-ltr"].includes(target) && section.contentType === "digit" && !hasLeadingZeros && value.length === 1;
  if (shouldAddInvisibleSpace) {
    value = `${value}‎`;
  }
  if (target === "input-rtl") {
    value = `⁨${value}⁩`;
  }
  return value;
};
const cleanString = (dirtyString) => dirtyString.replace(/[\u2066\u2067\u2068\u2069]/g, "");
const addPositionPropertiesToSections = (sections, isRTL) => {
  let position = 0;
  let positionInInput = isRTL ? 1 : 0;
  const newSections = [];
  for (let i = 0; i < sections.length; i += 1) {
    const section = sections[i];
    const renderedValue = getSectionVisibleValue(section, isRTL ? "input-rtl" : "input-ltr");
    const sectionStr = `${section.startSeparator}${renderedValue}${section.endSeparator}`;
    const sectionLength = cleanString(sectionStr).length;
    const sectionLengthInInput = sectionStr.length;
    const cleanedValue = cleanString(renderedValue);
    const startInInput = positionInInput + renderedValue.indexOf(cleanedValue[0]) + section.startSeparator.length;
    const endInInput = startInInput + cleanedValue.length;
    newSections.push(_extends$1({}, section, {
      start: position,
      end: position + sectionLength,
      startInInput,
      endInInput
    }));
    position += sectionLength;
    positionInInput += sectionLengthInInput;
  }
  return newSections;
};
const getSectionPlaceholder = (utils, timezone, localeText, sectionConfig, sectionFormat) => {
  switch (sectionConfig.type) {
    case "year": {
      return localeText.fieldYearPlaceholder({
        digitAmount: utils.formatByString(utils.dateWithTimezone(void 0, timezone), sectionFormat).length,
        format: sectionFormat
      });
    }
    case "month": {
      return localeText.fieldMonthPlaceholder({
        contentType: sectionConfig.contentType,
        format: sectionFormat
      });
    }
    case "day": {
      return localeText.fieldDayPlaceholder({
        format: sectionFormat
      });
    }
    case "weekDay": {
      return localeText.fieldWeekDayPlaceholder({
        contentType: sectionConfig.contentType,
        format: sectionFormat
      });
    }
    case "hours": {
      return localeText.fieldHoursPlaceholder({
        format: sectionFormat
      });
    }
    case "minutes": {
      return localeText.fieldMinutesPlaceholder({
        format: sectionFormat
      });
    }
    case "seconds": {
      return localeText.fieldSecondsPlaceholder({
        format: sectionFormat
      });
    }
    case "meridiem": {
      return localeText.fieldMeridiemPlaceholder({
        format: sectionFormat
      });
    }
    default: {
      return sectionFormat;
    }
  }
};
const changeSectionValueFormat = (utils, valueStr, currentFormat, newFormat) => {
  return utils.formatByString(utils.parse(valueStr, currentFormat), newFormat);
};
const isFourDigitYearFormat = (utils, timezone, format) => utils.formatByString(utils.dateWithTimezone(void 0, timezone), format).length === 4;
const doesSectionFormatHaveLeadingZeros = (utils, timezone, contentType, sectionType, format) => {
  if (contentType !== "digit") {
    return false;
  }
  const now = utils.dateWithTimezone(void 0, timezone);
  switch (sectionType) {
    // We can't use `changeSectionValueFormat`, because  `utils.parse('1', 'YYYY')` returns `1971` instead of `1`.
    case "year": {
      if (isFourDigitYearFormat(utils, timezone, format)) {
        const formatted0001 = utils.formatByString(utils.setYear(now, 1), format);
        return formatted0001 === "0001";
      }
      const formatted2001 = utils.formatByString(utils.setYear(now, 2001), format);
      return formatted2001 === "01";
    }
    case "month": {
      return utils.formatByString(utils.startOfYear(now), format).length > 1;
    }
    case "day": {
      return utils.formatByString(utils.startOfMonth(now), format).length > 1;
    }
    case "weekDay": {
      return utils.formatByString(utils.startOfWeek(now), format).length > 1;
    }
    case "hours": {
      return utils.formatByString(utils.setHours(now, 1), format).length > 1;
    }
    case "minutes": {
      return utils.formatByString(utils.setMinutes(now, 1), format).length > 1;
    }
    case "seconds": {
      return utils.formatByString(utils.setSeconds(now, 1), format).length > 1;
    }
    default: {
      throw new Error("Invalid section type");
    }
  }
};
const getEscapedPartsFromFormat = (utils, format) => {
  const escapedParts = [];
  const {
    start: startChar,
    end: endChar
  } = utils.escapedCharacters;
  const regExp = new RegExp(`(\\${startChar}[^\\${endChar}]*\\${endChar})+`, "g");
  let match = null;
  while (match = regExp.exec(format)) {
    escapedParts.push({
      start: match.index,
      end: regExp.lastIndex - 1
    });
  }
  return escapedParts;
};
const splitFormatIntoSections = (utils, timezone, localeText, format, date, formatDensity, shouldRespectLeadingZeros, isRTL) => {
  let startSeparator = "";
  const sections = [];
  const now = utils.date();
  const commitToken = (token) => {
    if (token === "") {
      return null;
    }
    const sectionConfig = getDateSectionConfigFromFormatToken(utils, token);
    const hasLeadingZerosInFormat = doesSectionFormatHaveLeadingZeros(utils, timezone, sectionConfig.contentType, sectionConfig.type, token);
    const hasLeadingZerosInInput = shouldRespectLeadingZeros ? hasLeadingZerosInFormat : sectionConfig.contentType === "digit";
    const isValidDate = date != null && utils.isValid(date);
    let sectionValue = isValidDate ? utils.formatByString(date, token) : "";
    let maxLength = null;
    if (hasLeadingZerosInInput) {
      if (hasLeadingZerosInFormat) {
        maxLength = sectionValue === "" ? utils.formatByString(now, token).length : sectionValue.length;
      } else {
        if (sectionConfig.maxLength == null) {
          throw new Error(`MUI: The token ${token} should have a 'maxDigitNumber' property on it's adapter`);
        }
        maxLength = sectionConfig.maxLength;
        if (isValidDate) {
          sectionValue = cleanLeadingZeros(utils, sectionValue, maxLength);
        }
      }
    }
    sections.push(_extends$1({}, sectionConfig, {
      format: token,
      maxLength,
      value: sectionValue,
      placeholder: getSectionPlaceholder(utils, timezone, localeText, sectionConfig, token),
      hasLeadingZeros: hasLeadingZerosInFormat,
      hasLeadingZerosInFormat,
      hasLeadingZerosInInput,
      startSeparator: sections.length === 0 ? startSeparator : "",
      endSeparator: "",
      modified: false
    }));
    return null;
  };
  let formatExpansionOverflow = 10;
  let prevFormat = format;
  let nextFormat = utils.expandFormat(format);
  while (nextFormat !== prevFormat) {
    prevFormat = nextFormat;
    nextFormat = utils.expandFormat(prevFormat);
    formatExpansionOverflow -= 1;
    if (formatExpansionOverflow < 0) {
      throw new Error("MUI: The format expansion seems to be  enter in an infinite loop. Please open an issue with the format passed to the picker component");
    }
  }
  const expandedFormat = nextFormat;
  const escapedParts = getEscapedPartsFromFormat(utils, expandedFormat);
  const isTokenStartRegExp = new RegExp(`^(${Object.keys(utils.formatTokenMap).sort((a, b) => b.length - a.length).join("|")})`, "g");
  let currentTokenValue = "";
  for (let i = 0; i < expandedFormat.length; i += 1) {
    const escapedPartOfCurrentChar = escapedParts.find((escapeIndex) => escapeIndex.start <= i && escapeIndex.end >= i);
    const char = expandedFormat[i];
    const isEscapedChar = escapedPartOfCurrentChar != null;
    const potentialToken = `${currentTokenValue}${expandedFormat.slice(i)}`;
    const regExpMatch = isTokenStartRegExp.test(potentialToken);
    if (!isEscapedChar && char.match(/([A-Za-z]+)/) && regExpMatch) {
      currentTokenValue = potentialToken.slice(0, isTokenStartRegExp.lastIndex);
      i += isTokenStartRegExp.lastIndex - 1;
    } else {
      const isEscapeBoundary = isEscapedChar && (escapedPartOfCurrentChar == null ? void 0 : escapedPartOfCurrentChar.start) === i || (escapedPartOfCurrentChar == null ? void 0 : escapedPartOfCurrentChar.end) === i;
      if (!isEscapeBoundary) {
        commitToken(currentTokenValue);
        currentTokenValue = "";
        if (sections.length === 0) {
          startSeparator += char;
        } else {
          sections[sections.length - 1].endSeparator += char;
        }
      }
    }
  }
  commitToken(currentTokenValue);
  return sections.map((section) => {
    const cleanSeparator = (separator) => {
      let cleanedSeparator = separator;
      if (isRTL && cleanedSeparator !== null && cleanedSeparator.includes(" ")) {
        cleanedSeparator = `⁩${cleanedSeparator}⁦`;
      }
      if (formatDensity === "spacious" && ["/", ".", "-"].includes(cleanedSeparator)) {
        cleanedSeparator = ` ${cleanedSeparator} `;
      }
      return cleanedSeparator;
    };
    section.startSeparator = cleanSeparator(section.startSeparator);
    section.endSeparator = cleanSeparator(section.endSeparator);
    return section;
  });
};
const getDateFromDateSections = (utils, sections) => {
  const shouldSkipWeekDays = sections.some((section) => section.type === "day");
  const sectionFormats = [];
  const sectionValues = [];
  for (let i = 0; i < sections.length; i += 1) {
    const section = sections[i];
    const shouldSkip = shouldSkipWeekDays && section.type === "weekDay";
    if (!shouldSkip) {
      sectionFormats.push(section.format);
      sectionValues.push(getSectionVisibleValue(section, "non-input"));
    }
  }
  const formatWithoutSeparator = sectionFormats.join(" ");
  const dateWithoutSeparatorStr = sectionValues.join(" ");
  return utils.parse(dateWithoutSeparatorStr, formatWithoutSeparator);
};
const createDateStrForInputFromSections = (sections, isRTL) => {
  const formattedSections = sections.map((section) => {
    const dateValue = getSectionVisibleValue(section, isRTL ? "input-rtl" : "input-ltr");
    return `${section.startSeparator}${dateValue}${section.endSeparator}`;
  });
  const dateStr = formattedSections.join("");
  if (!isRTL) {
    return dateStr;
  }
  return `⁦${dateStr}⁩`;
};
const getSectionsBoundaries = (utils, timezone) => {
  const today = utils.dateWithTimezone(void 0, timezone);
  const endOfYear = utils.endOfYear(today);
  const endOfDay = utils.endOfDay(today);
  const {
    maxDaysInMonth,
    longestMonth
  } = getMonthsInYear(utils, today).reduce((acc, month) => {
    const daysInMonth = utils.getDaysInMonth(month);
    if (daysInMonth > acc.maxDaysInMonth) {
      return {
        maxDaysInMonth: daysInMonth,
        longestMonth: month
      };
    }
    return acc;
  }, {
    maxDaysInMonth: 0,
    longestMonth: null
  });
  return {
    year: ({
      format
    }) => ({
      minimum: 0,
      maximum: isFourDigitYearFormat(utils, timezone, format) ? 9999 : 99
    }),
    month: () => ({
      minimum: 1,
      // Assumption: All years have the same amount of months
      maximum: utils.getMonth(endOfYear) + 1
    }),
    day: ({
      currentDate
    }) => ({
      minimum: 1,
      maximum: currentDate != null && utils.isValid(currentDate) ? utils.getDaysInMonth(currentDate) : maxDaysInMonth,
      longestMonth
    }),
    weekDay: ({
      format,
      contentType
    }) => {
      if (contentType === "digit") {
        const daysInWeek = getDaysInWeekStr(utils, timezone, format).map(Number);
        return {
          minimum: Math.min(...daysInWeek),
          maximum: Math.max(...daysInWeek)
        };
      }
      return {
        minimum: 1,
        maximum: 7
      };
    },
    hours: ({
      format
    }) => {
      const lastHourInDay = utils.getHours(endOfDay);
      const hasMeridiem = utils.formatByString(utils.endOfDay(today), format) !== lastHourInDay.toString();
      if (hasMeridiem) {
        return {
          minimum: 1,
          maximum: Number(utils.formatByString(utils.startOfDay(today), format))
        };
      }
      return {
        minimum: 0,
        maximum: lastHourInDay
      };
    },
    minutes: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of minutes
      maximum: utils.getMinutes(endOfDay)
    }),
    seconds: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of seconds
      maximum: utils.getSeconds(endOfDay)
    }),
    meridiem: () => ({
      minimum: 0,
      maximum: 0
    })
  };
};
const transferDateSectionValue = (utils, timezone, section, dateToTransferFrom, dateToTransferTo) => {
  switch (section.type) {
    case "year": {
      return utils.setYear(dateToTransferTo, utils.getYear(dateToTransferFrom));
    }
    case "month": {
      return utils.setMonth(dateToTransferTo, utils.getMonth(dateToTransferFrom));
    }
    case "weekDay": {
      const formattedDaysInWeek = getDaysInWeekStr(utils, timezone, section.format);
      const dayInWeekStrOfActiveDate = utils.formatByString(dateToTransferFrom, section.format);
      const dayInWeekOfActiveDate = formattedDaysInWeek.indexOf(dayInWeekStrOfActiveDate);
      const dayInWeekOfNewSectionValue = formattedDaysInWeek.indexOf(section.value);
      const diff = dayInWeekOfNewSectionValue - dayInWeekOfActiveDate;
      return utils.addDays(dateToTransferFrom, diff);
    }
    case "day": {
      return utils.setDate(dateToTransferTo, utils.getDate(dateToTransferFrom));
    }
    case "meridiem": {
      const isAM = utils.getHours(dateToTransferFrom) < 12;
      const mergedDateHours = utils.getHours(dateToTransferTo);
      if (isAM && mergedDateHours >= 12) {
        return utils.addHours(dateToTransferTo, -12);
      }
      if (!isAM && mergedDateHours < 12) {
        return utils.addHours(dateToTransferTo, 12);
      }
      return dateToTransferTo;
    }
    case "hours": {
      return utils.setHours(dateToTransferTo, utils.getHours(dateToTransferFrom));
    }
    case "minutes": {
      return utils.setMinutes(dateToTransferTo, utils.getMinutes(dateToTransferFrom));
    }
    case "seconds": {
      return utils.setSeconds(dateToTransferTo, utils.getSeconds(dateToTransferFrom));
    }
    default: {
      return dateToTransferTo;
    }
  }
};
const reliableSectionModificationOrder = {
  year: 1,
  month: 2,
  day: 3,
  weekDay: 4,
  hours: 5,
  minutes: 6,
  seconds: 7,
  meridiem: 8
};
const mergeDateIntoReferenceDate = (utils, timezone, dateToTransferFrom, sections, referenceDate, shouldLimitToEditedSections) => (
  // cloning sections before sort to avoid mutating it
  [...sections].sort((a, b) => reliableSectionModificationOrder[a.type] - reliableSectionModificationOrder[b.type]).reduce((mergedDate, section) => {
    if (!shouldLimitToEditedSections || section.modified) {
      return transferDateSectionValue(utils, timezone, section, dateToTransferFrom, mergedDate);
    }
    return mergedDate;
  }, referenceDate)
);
const isAndroid = () => navigator.userAgent.toLowerCase().indexOf("android") > -1;
const getSectionOrder = (sections, isRTL) => {
  const neighbors = {};
  if (!isRTL) {
    sections.forEach((_, index) => {
      const leftIndex = index === 0 ? null : index - 1;
      const rightIndex = index === sections.length - 1 ? null : index + 1;
      neighbors[index] = {
        leftIndex,
        rightIndex
      };
    });
    return {
      neighbors,
      startIndex: 0,
      endIndex: sections.length - 1
    };
  }
  const rtl2ltr = {};
  const ltr2rtl = {};
  let groupedSectionsStart = 0;
  let groupedSectionsEnd = 0;
  let RTLIndex = sections.length - 1;
  while (RTLIndex >= 0) {
    groupedSectionsEnd = sections.findIndex(
      // eslint-disable-next-line @typescript-eslint/no-loop-func
      (section, index) => {
        var _section$endSeparator;
        return index >= groupedSectionsStart && ((_section$endSeparator = section.endSeparator) == null ? void 0 : _section$endSeparator.includes(" ")) && // Special case where the spaces were not there in the initial input
        section.endSeparator !== " / ";
      }
    );
    if (groupedSectionsEnd === -1) {
      groupedSectionsEnd = sections.length - 1;
    }
    for (let i = groupedSectionsEnd; i >= groupedSectionsStart; i -= 1) {
      ltr2rtl[i] = RTLIndex;
      rtl2ltr[RTLIndex] = i;
      RTLIndex -= 1;
    }
    groupedSectionsStart = groupedSectionsEnd + 1;
  }
  sections.forEach((_, index) => {
    const rtlIndex = ltr2rtl[index];
    const leftIndex = rtlIndex === 0 ? null : rtl2ltr[rtlIndex - 1];
    const rightIndex = rtlIndex === sections.length - 1 ? null : rtl2ltr[rtlIndex + 1];
    neighbors[index] = {
      leftIndex,
      rightIndex
    };
  });
  return {
    neighbors,
    startIndex: rtl2ltr[0],
    endIndex: rtl2ltr[sections.length - 1]
  };
};
const _excluded$l = ["value", "referenceDate"];
const singleItemValueManager = {
  emptyValue: null,
  getTodayValue: getTodayDate,
  getInitialReferenceValue: (_ref) => {
    let {
      value,
      referenceDate
    } = _ref, params = _objectWithoutPropertiesLoose(_ref, _excluded$l);
    if (value != null && params.utils.isValid(value)) {
      return value;
    }
    if (referenceDate != null) {
      return referenceDate;
    }
    return getDefaultReferenceDate(params);
  },
  cleanValue: replaceInvalidDateByNull,
  areValuesEqual: areDatesEqual,
  isSameError: (a, b) => a === b,
  hasError: (error) => error != null,
  defaultErrorState: null,
  getTimezone: (utils, value) => value == null || !utils.isValid(value) ? null : utils.getTimezone(value),
  setTimezone: (utils, timezone, value) => value == null ? null : utils.setTimezone(value, timezone)
};
const singleItemFieldValueManager = {
  updateReferenceValue: (utils, value, prevReferenceValue) => value == null || !utils.isValid(value) ? prevReferenceValue : value,
  getSectionsFromValue: (utils, date, prevSections, isRTL, getSectionsFromDate) => {
    const shouldReUsePrevDateSections = !utils.isValid(date) && !!prevSections;
    if (shouldReUsePrevDateSections) {
      return prevSections;
    }
    return addPositionPropertiesToSections(getSectionsFromDate(date), isRTL);
  },
  getValueStrFromSections: createDateStrForInputFromSections,
  getActiveDateManager: (utils, state) => ({
    date: state.value,
    referenceDate: state.referenceValue,
    getSections: (sections) => sections,
    getNewValuesFromNewActiveDate: (newActiveDate) => ({
      value: newActiveDate,
      referenceValue: newActiveDate == null || !utils.isValid(newActiveDate) ? state.referenceValue : newActiveDate
    })
  }),
  parseValueStr: (valueStr, referenceValue, parseDate) => parseDate(valueStr.trim(), referenceValue)
};
const getPickersLocalization = (pickersTranslations) => {
  return {
    components: {
      MuiLocalizationProvider: {
        defaultProps: {
          localeText: _extends$1({}, pickersTranslations)
        }
      }
    }
  };
};
const enUSPickers = {
  // Calendar navigation
  previousMonth: "Previous month",
  nextMonth: "Next month",
  // View navigation
  openPreviousView: "open previous view",
  openNextView: "open next view",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "year view is open, switch to calendar view" : "calendar view is open, switch to year view",
  // DateRange placeholders
  start: "Start",
  end: "End",
  // Action bar
  cancelButtonLabel: "Cancel",
  clearButtonLabel: "Clear",
  okButtonLabel: "OK",
  todayButtonLabel: "Today",
  // Toolbar titles
  datePickerToolbarTitle: "Select date",
  dateTimePickerToolbarTitle: "Select date & time",
  timePickerToolbarTitle: "Select time",
  dateRangePickerToolbarTitle: "Select date range",
  // Clock labels
  clockLabelText: (view, time, adapter) => `Select ${view}. ${time === null ? "No time selected" : `Selected time is ${adapter.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} hours`,
  minutesClockNumberText: (minutes) => `${minutes} minutes`,
  secondsClockNumberText: (seconds) => `${seconds} seconds`,
  // Digital clock labels
  selectViewText: (view) => `Select ${view}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Week number",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Week ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Choose date, selected date is ${utils.format(value, "fullDate")}` : "Choose date",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Choose time, selected time is ${utils.format(value, "fullTime")}` : "Choose time",
  fieldClearLabel: "Clear value",
  // Table labels
  timeTableLabel: "pick time",
  dateTableLabel: "pick date",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa"
};
const DEFAULT_LOCALE = enUSPickers;
getPickersLocalization(enUSPickers);
const useLocalizationContext = () => {
  const localization = reactExports.useContext(MuiPickersAdapterContext);
  if (localization === null) {
    throw new Error(["MUI: Can not find the date and time pickers localization context.", "It looks like you forgot to wrap your component in LocalizationProvider.", "This can also happen if you are bundling multiple versions of the `@mui/x-date-pickers` package"].join("\n"));
  }
  if (localization.utils === null) {
    throw new Error(["MUI: Can not find the date and time pickers adapter from its localization context.", "It looks like you forgot to pass a `dateAdapter` to your LocalizationProvider."].join("\n"));
  }
  const localeText = reactExports.useMemo(() => _extends$1({}, DEFAULT_LOCALE, localization.localeText), [localization.localeText]);
  return reactExports.useMemo(() => _extends$1({}, localization, {
    localeText
  }), [localization, localeText]);
};
const useUtils = () => useLocalizationContext().utils;
const useDefaultDates = () => useLocalizationContext().defaultDates;
const useLocaleText = () => useLocalizationContext().localeText;
const useNow = (timezone) => {
  const utils = useUtils();
  const now = reactExports.useRef();
  if (now.current === void 0) {
    now.current = utils.dateWithTimezone(void 0, timezone);
  }
  return now.current;
};
function getPickersToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiPickersToolbar", slot);
}
generateUtilityClasses("MuiPickersToolbar", ["root", "content"]);
const useUtilityClasses$f = (ownerState) => {
  const {
    classes,
    isLandscape
  } = ownerState;
  const slots = {
    root: ["root"],
    content: ["content"],
    penIconButton: ["penIconButton", isLandscape && "penIconButtonLandscape"]
  };
  return composeClasses(slots, getPickersToolbarUtilityClass, classes);
};
const PickersToolbarRoot = styled("div", {
  name: "MuiPickersToolbar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => _extends$1({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  padding: theme.spacing(2, 3)
}, ownerState.isLandscape && {
  height: "auto",
  maxWidth: 160,
  padding: 16,
  justifyContent: "flex-start",
  flexWrap: "wrap"
}));
const PickersToolbarContent = styled("div", {
  name: "MuiPickersToolbar",
  slot: "Content",
  overridesResolver: (props, styles) => styles.content
})(({
  ownerState
}) => {
  var _ownerState$landscape;
  return {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: ownerState.isLandscape ? "flex-start" : "space-between",
    flexDirection: ownerState.isLandscape ? (_ownerState$landscape = ownerState.landscapeDirection) != null ? _ownerState$landscape : "column" : "row",
    flex: 1,
    alignItems: ownerState.isLandscape ? "flex-start" : "center"
  };
});
const PickersToolbar = /* @__PURE__ */ reactExports.forwardRef(function PickersToolbar2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersToolbar"
  });
  const {
    children,
    className,
    toolbarTitle,
    hidden,
    titleId
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses$f(ownerState);
  if (hidden) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PickersToolbarRoot, {
    ref,
    className: clsx(classes.root, className),
    ownerState,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Typography, {
      color: "text.secondary",
      variant: "overline",
      id: titleId,
      children: toolbarTitle
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarContent, {
      className: classes.content,
      ownerState,
      children
    })]
  });
});
function getDatePickerToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiDatePickerToolbar", slot);
}
generateUtilityClasses("MuiDatePickerToolbar", ["root", "title"]);
const _excluded$k = ["value", "isLandscape", "onChange", "toolbarFormat", "toolbarPlaceholder", "views", "className"];
const useUtilityClasses$e = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    title: ["title"]
  };
  return composeClasses(slots, getDatePickerToolbarUtilityClass, classes);
};
const DatePickerToolbarRoot = styled(PickersToolbar, {
  name: "MuiDatePickerToolbar",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})({});
const DatePickerToolbarTitle = styled(Typography, {
  name: "MuiDatePickerToolbar",
  slot: "Title",
  overridesResolver: (_, styles) => styles.title
})(({
  ownerState
}) => _extends$1({}, ownerState.isLandscape && {
  margin: "auto 16px auto auto"
}));
const DatePickerToolbar = /* @__PURE__ */ reactExports.forwardRef(function DatePickerToolbar2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDatePickerToolbar"
  });
  const {
    value,
    isLandscape,
    toolbarFormat,
    toolbarPlaceholder = "––",
    views,
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$k);
  const utils = useUtils();
  const localeText = useLocaleText();
  const classes = useUtilityClasses$e(props);
  const dateText = reactExports.useMemo(() => {
    if (!value) {
      return toolbarPlaceholder;
    }
    const formatFromViews = resolveDateFormat(utils, {
      format: toolbarFormat,
      views
    }, true);
    return utils.formatByString(value, formatFromViews);
  }, [value, toolbarFormat, toolbarPlaceholder, utils, views]);
  const ownerState = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DatePickerToolbarRoot, _extends$1({
    ref,
    toolbarTitle: localeText.datePickerToolbarTitle,
    isLandscape,
    className: clsx(classes.root, className)
  }, other, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(DatePickerToolbarTitle, {
      variant: "h4",
      align: isLandscape ? "left" : "center",
      ownerState,
      className: classes.title,
      children: dateText
    })
  }));
});
const uncapitalizeObjectKeys = (capitalizedObject) => {
  if (capitalizedObject === void 0) {
    return void 0;
  }
  return Object.keys(capitalizedObject).reduce((acc, key) => _extends$1({}, acc, {
    [`${key.slice(0, 1).toLowerCase()}${key.slice(1)}`]: capitalizedObject[key]
  }), {});
};
function useDatePickerDefaultizedProps(props, name) {
  var _themeProps$slots, _themeProps$disableFu, _themeProps$disablePa, _themeProps$slotProps;
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const themeProps = useThemeProps({
    props,
    name
  });
  const localeText = reactExports.useMemo(() => {
    var _themeProps$localeTex;
    if (((_themeProps$localeTex = themeProps.localeText) == null ? void 0 : _themeProps$localeTex.toolbarTitle) == null) {
      return themeProps.localeText;
    }
    return _extends$1({}, themeProps.localeText, {
      datePickerToolbarTitle: themeProps.localeText.toolbarTitle
    });
  }, [themeProps.localeText]);
  const slots = (_themeProps$slots = themeProps.slots) != null ? _themeProps$slots : uncapitalizeObjectKeys(themeProps.components);
  return _extends$1({}, themeProps, {
    localeText
  }, applyDefaultViewProps({
    views: themeProps.views,
    openTo: themeProps.openTo,
    defaultViews: ["year", "day"],
    defaultOpenTo: "day"
  }), {
    disableFuture: (_themeProps$disableFu = themeProps.disableFuture) != null ? _themeProps$disableFu : false,
    disablePast: (_themeProps$disablePa = themeProps.disablePast) != null ? _themeProps$disablePa : false,
    minDate: applyDefaultDate(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, themeProps.maxDate, defaultDates.maxDate),
    slots: _extends$1({
      toolbar: DatePickerToolbar
    }, slots),
    slotProps: (_themeProps$slotProps = themeProps.slotProps) != null ? _themeProps$slotProps : themeProps.componentsProps
  });
}
const ArrowDropDownIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
const ArrowLeftIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
}), "ArrowLeft");
const ArrowRightIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}), "ArrowRight");
const CalendarIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
}), "Calendar");
createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
  children: [/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), "Clock");
createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
}), "DateRange");
createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
  children: [/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), "Time");
const ClearIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Clear");
function getPickersArrowSwitcherUtilityClass(slot) {
  return generateUtilityClass("MuiPickersArrowSwitcher", slot);
}
generateUtilityClasses("MuiPickersArrowSwitcher", ["root", "spacer", "button"]);
const _excluded$j = ["children", "className", "slots", "slotProps", "isNextDisabled", "isNextHidden", "onGoToNext", "nextLabel", "isPreviousDisabled", "isPreviousHidden", "onGoToPrevious", "previousLabel"], _excluded2$5 = ["ownerState"], _excluded3$2 = ["ownerState"];
const PickersArrowSwitcherRoot = styled("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "flex"
});
const PickersArrowSwitcherSpacer = styled("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Spacer",
  overridesResolver: (props, styles) => styles.spacer
})(({
  theme
}) => ({
  width: theme.spacing(3)
}));
const PickersArrowSwitcherButton = styled(IconButton, {
  name: "MuiPickersArrowSwitcher",
  slot: "Button",
  overridesResolver: (props, styles) => styles.button
})(({
  ownerState
}) => _extends$1({}, ownerState.hidden && {
  visibility: "hidden"
}));
const useUtilityClasses$d = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    spacer: ["spacer"],
    button: ["button"]
  };
  return composeClasses(slots, getPickersArrowSwitcherUtilityClass, classes);
};
const PickersArrowSwitcher = /* @__PURE__ */ reactExports.forwardRef(function PickersArrowSwitcher2(inProps, ref) {
  var _slots$previousIconBu, _slots$nextIconButton, _slots$leftArrowIcon, _slots$rightArrowIcon;
  const theme = useTheme();
  const isRTL = theme.direction === "rtl";
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersArrowSwitcher"
  });
  const {
    children,
    className,
    slots,
    slotProps,
    isNextDisabled,
    isNextHidden,
    onGoToNext,
    nextLabel,
    isPreviousDisabled,
    isPreviousHidden,
    onGoToPrevious,
    previousLabel
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$j);
  const ownerState = props;
  const classes = useUtilityClasses$d(ownerState);
  const nextProps = {
    isDisabled: isNextDisabled,
    isHidden: isNextHidden,
    goTo: onGoToNext,
    label: nextLabel
  };
  const previousProps = {
    isDisabled: isPreviousDisabled,
    isHidden: isPreviousHidden,
    goTo: onGoToPrevious,
    label: previousLabel
  };
  const PreviousIconButton = (_slots$previousIconBu = slots == null ? void 0 : slots.previousIconButton) != null ? _slots$previousIconBu : PickersArrowSwitcherButton;
  const previousIconButtonProps = useSlotProps({
    elementType: PreviousIconButton,
    externalSlotProps: slotProps == null ? void 0 : slotProps.previousIconButton,
    additionalProps: {
      size: "medium",
      title: previousProps.label,
      "aria-label": previousProps.label,
      disabled: previousProps.isDisabled,
      edge: "end",
      onClick: previousProps.goTo
    },
    ownerState: _extends$1({}, ownerState, {
      hidden: previousProps.isHidden
    }),
    className: classes.button
  });
  const NextIconButton = (_slots$nextIconButton = slots == null ? void 0 : slots.nextIconButton) != null ? _slots$nextIconButton : PickersArrowSwitcherButton;
  const nextIconButtonProps = useSlotProps({
    elementType: NextIconButton,
    externalSlotProps: slotProps == null ? void 0 : slotProps.nextIconButton,
    additionalProps: {
      size: "medium",
      title: nextProps.label,
      "aria-label": nextProps.label,
      disabled: nextProps.isDisabled,
      edge: "start",
      onClick: nextProps.goTo
    },
    ownerState: _extends$1({}, ownerState, {
      hidden: nextProps.isHidden
    }),
    className: classes.button
  });
  const LeftArrowIcon = (_slots$leftArrowIcon = slots == null ? void 0 : slots.leftArrowIcon) != null ? _slots$leftArrowIcon : ArrowLeftIcon;
  const _useSlotProps = useSlotProps({
    elementType: LeftArrowIcon,
    externalSlotProps: slotProps == null ? void 0 : slotProps.leftArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState: void 0
  }), leftArrowIconProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded2$5);
  const RightArrowIcon = (_slots$rightArrowIcon = slots == null ? void 0 : slots.rightArrowIcon) != null ? _slots$rightArrowIcon : ArrowRightIcon;
  const _useSlotProps2 = useSlotProps({
    elementType: RightArrowIcon,
    externalSlotProps: slotProps == null ? void 0 : slotProps.rightArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState: void 0
  }), rightArrowIconProps = _objectWithoutPropertiesLoose(_useSlotProps2, _excluded3$2);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PickersArrowSwitcherRoot, _extends$1({
    ref,
    className: clsx(classes.root, className),
    ownerState
  }, other, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(PreviousIconButton, _extends$1({}, previousIconButtonProps, {
      children: isRTL ? /* @__PURE__ */ jsxRuntimeExports.jsx(RightArrowIcon, _extends$1({}, rightArrowIconProps)) : /* @__PURE__ */ jsxRuntimeExports.jsx(LeftArrowIcon, _extends$1({}, leftArrowIconProps))
    })), children ? /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, {
      variant: "subtitle1",
      component: "span",
      children
    }) : /* @__PURE__ */ jsxRuntimeExports.jsx(PickersArrowSwitcherSpacer, {
      className: classes.spacer,
      ownerState
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(NextIconButton, _extends$1({}, nextIconButtonProps, {
      children: isRTL ? /* @__PURE__ */ jsxRuntimeExports.jsx(LeftArrowIcon, _extends$1({}, leftArrowIconProps)) : /* @__PURE__ */ jsxRuntimeExports.jsx(RightArrowIcon, _extends$1({}, rightArrowIconProps))
    }))]
  }));
});
const DAY_SIZE = 36;
const DAY_MARGIN = 2;
const DIALOG_WIDTH = 320;
const MAX_CALENDAR_HEIGHT = 280;
const VIEW_HEIGHT = 334;
const PickersModalDialogRoot = styled(Dialog)({
  [`& .${dialogClasses.container}`]: {
    outline: 0
  },
  [`& .${dialogClasses.paper}`]: {
    outline: 0,
    minWidth: DIALOG_WIDTH
  }
});
const PickersModalDialogContent = styled(DialogContent)({
  "&:first-of-type": {
    padding: 0
  }
});
function PickersModalDialog(props) {
  var _slots$dialog, _slots$mobileTransiti;
  const {
    children,
    onDismiss,
    open,
    slots,
    slotProps
  } = props;
  const Dialog2 = (_slots$dialog = slots == null ? void 0 : slots.dialog) != null ? _slots$dialog : PickersModalDialogRoot;
  const Transition = (_slots$mobileTransiti = slots == null ? void 0 : slots.mobileTransition) != null ? _slots$mobileTransiti : Fade;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog2, _extends$1({
    open,
    onClose: onDismiss
  }, slotProps == null ? void 0 : slotProps.dialog, {
    TransitionComponent: Transition,
    TransitionProps: slotProps == null ? void 0 : slotProps.mobileTransition,
    PaperComponent: slots == null ? void 0 : slots.mobilePaper,
    PaperProps: slotProps == null ? void 0 : slotProps.mobilePaper,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(PickersModalDialogContent, {
      children
    })
  }));
}
function getPickersPopperUtilityClass(slot) {
  return generateUtilityClass("MuiPickersPopper", slot);
}
generateUtilityClasses("MuiPickersPopper", ["root", "paper"]);
function arrayIncludes(array, itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.every((item) => array.indexOf(item) !== -1);
  }
  return array.indexOf(itemOrItems) !== -1;
}
const onSpaceOrEnter = (innerFn, externalEvent) => (event) => {
  if (event.key === "Enter" || event.key === " ") {
    innerFn(event);
    event.preventDefault();
    event.stopPropagation();
  }
};
const getActiveElement = (root = document) => {
  const activeEl = root.activeElement;
  if (!activeEl) {
    return null;
  }
  if (activeEl.shadowRoot) {
    return getActiveElement(activeEl.shadowRoot);
  }
  return activeEl;
};
const DEFAULT_DESKTOP_MODE_MEDIA_QUERY = "@media (pointer: fine)";
const PREFERS_REDUCED_MOTION = "@media (prefers-reduced-motion: reduce)";
const mobileVersionMatches = typeof navigator !== "undefined" && navigator.userAgent.match(/android\s(\d+)|OS\s(\d+)/i);
const androidVersion = mobileVersionMatches && mobileVersionMatches[1] ? parseInt(mobileVersionMatches[1], 10) : null;
const iOSVersion = mobileVersionMatches && mobileVersionMatches[2] ? parseInt(mobileVersionMatches[2], 10) : null;
const slowAnimationDevices = androidVersion && androidVersion < 10 || iOSVersion && iOSVersion < 13 || false;
const useDefaultReduceAnimations = () => {
  const prefersReduced = useMediaQuery(PREFERS_REDUCED_MOTION, {
    defaultMatches: false
  });
  return prefersReduced || slowAnimationDevices;
};
const _excluded$i = ["PaperComponent", "popperPlacement", "ownerState", "children", "paperSlotProps", "paperClasses", "onPaperClick", "onPaperTouchStart"];
const useUtilityClasses$c = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    paper: ["paper"]
  };
  return composeClasses(slots, getPickersPopperUtilityClass, classes);
};
const PickersPopperRoot = styled(Popper, {
  name: "MuiPickersPopper",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  theme
}) => ({
  zIndex: theme.zIndex.modal
}));
const PickersPopperPaper = styled(Paper, {
  name: "MuiPickersPopper",
  slot: "Paper",
  overridesResolver: (_, styles) => styles.paper
})(({
  ownerState
}) => _extends$1({
  outline: 0,
  transformOrigin: "top center"
}, ownerState.placement.includes("top") && {
  transformOrigin: "bottom center"
}));
function clickedRootScrollbar(event, doc) {
  return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
}
function useClickAwayListener(active, onClickAway) {
  const movedRef = reactExports.useRef(false);
  const syntheticEventRef = reactExports.useRef(false);
  const nodeRef = reactExports.useRef(null);
  const activatedRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (!active) {
      return void 0;
    }
    function armClickAwayListener() {
      activatedRef.current = true;
    }
    document.addEventListener("mousedown", armClickAwayListener, true);
    document.addEventListener("touchstart", armClickAwayListener, true);
    return () => {
      document.removeEventListener("mousedown", armClickAwayListener, true);
      document.removeEventListener("touchstart", armClickAwayListener, true);
      activatedRef.current = false;
    };
  }, [active]);
  const handleClickAway = useEventCallback((event) => {
    if (!activatedRef.current) {
      return;
    }
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;
    const doc = ownerDocument(nodeRef.current);
    if (!nodeRef.current || // is a TouchEvent?
    "clientX" in event && clickedRootScrollbar(event, doc)) {
      return;
    }
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    let insideDOM;
    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      insideDOM = !doc.documentElement.contains(event.target) || nodeRef.current.contains(event.target);
    }
    if (!insideDOM && !insideReactTree) {
      onClickAway(event);
    }
  });
  const handleSynthetic = () => {
    syntheticEventRef.current = true;
  };
  reactExports.useEffect(() => {
    if (active) {
      const doc = ownerDocument(nodeRef.current);
      const handleTouchMove = () => {
        movedRef.current = true;
      };
      doc.addEventListener("touchstart", handleClickAway);
      doc.addEventListener("touchmove", handleTouchMove);
      return () => {
        doc.removeEventListener("touchstart", handleClickAway);
        doc.removeEventListener("touchmove", handleTouchMove);
      };
    }
    return void 0;
  }, [active, handleClickAway]);
  reactExports.useEffect(() => {
    if (active) {
      const doc = ownerDocument(nodeRef.current);
      doc.addEventListener("click", handleClickAway);
      return () => {
        doc.removeEventListener("click", handleClickAway);
        syntheticEventRef.current = false;
      };
    }
    return void 0;
  }, [active, handleClickAway]);
  return [nodeRef, handleSynthetic, handleSynthetic];
}
const PickersPopperPaperWrapper = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    PaperComponent,
    popperPlacement,
    ownerState: inOwnerState,
    children,
    paperSlotProps,
    paperClasses,
    onPaperClick,
    onPaperTouchStart
    // picks up the style props provided by `Transition`
    // https://mui.com/material-ui/transitions/#child-requirement
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$i);
  const ownerState = _extends$1({}, inOwnerState, {
    placement: popperPlacement
  });
  const paperProps = useSlotProps({
    elementType: PaperComponent,
    externalSlotProps: paperSlotProps,
    additionalProps: {
      tabIndex: -1,
      elevation: 8,
      ref
    },
    className: paperClasses,
    ownerState
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PaperComponent, _extends$1({}, other, paperProps, {
    onClick: (event) => {
      var _paperProps$onClick;
      onPaperClick(event);
      (_paperProps$onClick = paperProps.onClick) == null || _paperProps$onClick.call(paperProps, event);
    },
    onTouchStart: (event) => {
      var _paperProps$onTouchSt;
      onPaperTouchStart(event);
      (_paperProps$onTouchSt = paperProps.onTouchStart) == null || _paperProps$onTouchSt.call(paperProps, event);
    },
    ownerState,
    children
  }));
});
function PickersPopper(inProps) {
  var _slots$desktopTransit, _slots$desktopTrapFoc, _slots$desktopPaper, _slots$popper;
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersPopper"
  });
  const {
    anchorEl,
    children,
    containerRef = null,
    shouldRestoreFocus,
    onBlur: onBlur3,
    onDismiss,
    open,
    role,
    placement,
    slots,
    slotProps,
    reduceAnimations: inReduceAnimations
  } = props;
  reactExports.useEffect(() => {
    function handleKeyDown2(nativeEvent) {
      if (open && (nativeEvent.key === "Escape" || nativeEvent.key === "Esc")) {
        onDismiss();
      }
    }
    document.addEventListener("keydown", handleKeyDown2);
    return () => {
      document.removeEventListener("keydown", handleKeyDown2);
    };
  }, [onDismiss, open]);
  const lastFocusedElementRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (role === "tooltip" || shouldRestoreFocus && !shouldRestoreFocus()) {
      return;
    }
    if (open) {
      lastFocusedElementRef.current = getActiveElement(document);
    } else if (lastFocusedElementRef.current && lastFocusedElementRef.current instanceof HTMLElement) {
      setTimeout(() => {
        if (lastFocusedElementRef.current instanceof HTMLElement) {
          lastFocusedElementRef.current.focus();
        }
      });
    }
  }, [open, role, shouldRestoreFocus]);
  const [clickAwayRef, onPaperClick, onPaperTouchStart] = useClickAwayListener(open, onBlur3 != null ? onBlur3 : onDismiss);
  const paperRef = reactExports.useRef(null);
  const handleRef = useForkRef(paperRef, containerRef);
  const handlePaperRef = useForkRef(handleRef, clickAwayRef);
  const ownerState = props;
  const classes = useUtilityClasses$c(ownerState);
  const defaultReduceAnimations = useDefaultReduceAnimations();
  const reduceAnimations = inReduceAnimations != null ? inReduceAnimations : defaultReduceAnimations;
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      event.stopPropagation();
      onDismiss();
    }
  };
  const Transition = ((_slots$desktopTransit = slots == null ? void 0 : slots.desktopTransition) != null ? _slots$desktopTransit : reduceAnimations) ? Fade : Grow;
  const FocusTrap$1 = (_slots$desktopTrapFoc = slots == null ? void 0 : slots.desktopTrapFocus) != null ? _slots$desktopTrapFoc : FocusTrap;
  const Paper2 = (_slots$desktopPaper = slots == null ? void 0 : slots.desktopPaper) != null ? _slots$desktopPaper : PickersPopperPaper;
  const Popper2 = (_slots$popper = slots == null ? void 0 : slots.popper) != null ? _slots$popper : PickersPopperRoot;
  const popperProps = useSlotProps({
    elementType: Popper2,
    externalSlotProps: slotProps == null ? void 0 : slotProps.popper,
    additionalProps: {
      transition: true,
      role,
      open,
      anchorEl,
      placement,
      onKeyDown: handleKeyDown
    },
    className: classes.root,
    ownerState: props
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Popper2, _extends$1({}, popperProps, {
    children: ({
      TransitionProps,
      placement: popperPlacement
    }) => /* @__PURE__ */ jsxRuntimeExports.jsx(FocusTrap$1, _extends$1({
      open,
      disableAutoFocus: true,
      disableRestoreFocus: true,
      disableEnforceFocus: role === "tooltip",
      isEnabled: () => true
    }, slotProps == null ? void 0 : slotProps.desktopTrapFocus, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Transition, _extends$1({}, TransitionProps, slotProps == null ? void 0 : slotProps.desktopTransition, {
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(PickersPopperPaperWrapper, {
          PaperComponent: Paper2,
          ownerState,
          popperPlacement,
          ref: handlePaperRef,
          onPaperClick,
          onPaperTouchStart,
          paperClasses: classes.paper,
          paperSlotProps: slotProps == null ? void 0 : slotProps.desktopPaper,
          children
        })
      }))
    }))
  }));
}
const useValueWithTimezone = ({
  timezone: timezoneProp,
  value: valueProp,
  defaultValue,
  onChange: onChange3,
  valueManager
}) => {
  var _ref, _ref2;
  const utils = useUtils();
  const firstDefaultValue = reactExports.useRef(defaultValue);
  const inputValue = (_ref = valueProp != null ? valueProp : firstDefaultValue.current) != null ? _ref : valueManager.emptyValue;
  const inputTimezone = reactExports.useMemo(() => valueManager.getTimezone(utils, inputValue), [utils, valueManager, inputValue]);
  const setInputTimezone = useEventCallback((newValue) => {
    if (inputTimezone == null) {
      return newValue;
    }
    return valueManager.setTimezone(utils, inputTimezone, newValue);
  });
  const timezoneToRender = (_ref2 = timezoneProp != null ? timezoneProp : inputTimezone) != null ? _ref2 : "default";
  const valueWithTimezoneToRender = reactExports.useMemo(() => valueManager.setTimezone(utils, timezoneToRender, inputValue), [valueManager, utils, timezoneToRender, inputValue]);
  const handleValueChange = useEventCallback((newValue, ...otherParams) => {
    const newValueWithInputTimezone = setInputTimezone(newValue);
    onChange3 == null || onChange3(newValueWithInputTimezone, ...otherParams);
  });
  return {
    value: valueWithTimezoneToRender,
    handleValueChange,
    timezone: timezoneToRender
  };
};
const useControlledValueWithTimezone = ({
  name,
  timezone: timezoneProp,
  value: valueProp,
  defaultValue,
  onChange: onChangeProp,
  valueManager
}) => {
  const [valueWithInputTimezone, setValue] = useControlled({
    name,
    state: "value",
    controlled: valueProp,
    default: defaultValue != null ? defaultValue : valueManager.emptyValue
  });
  const onChange3 = useEventCallback((newValue, ...otherParams) => {
    setValue(newValue);
    onChangeProp == null || onChangeProp(newValue, ...otherParams);
  });
  return useValueWithTimezone({
    timezone: timezoneProp,
    value: valueWithInputTimezone,
    defaultValue: void 0,
    onChange: onChange3,
    valueManager
  });
};
function useValidation(props, validate, isSameError, defaultErrorState) {
  const {
    value,
    onError
  } = props;
  const adapter = useLocalizationContext();
  const previousValidationErrorRef = reactExports.useRef(defaultErrorState);
  const validationError = validate({
    adapter,
    value,
    props
  });
  reactExports.useEffect(() => {
    if (onError && !isSameError(validationError, previousValidationErrorRef.current)) {
      onError(validationError, value);
    }
    previousValidationErrorRef.current = validationError;
  }, [isSameError, onError, previousValidationErrorRef, validationError, value]);
  return validationError;
}
const useFieldState = (params) => {
  const utils = useUtils();
  const localeText = useLocaleText();
  const adapter = useLocalizationContext();
  const theme = useTheme();
  const isRTL = theme.direction === "rtl";
  const {
    valueManager,
    fieldValueManager,
    validator,
    internalProps,
    internalProps: {
      value: valueProp,
      defaultValue,
      referenceDate: referenceDateProp,
      onChange: onChange3,
      format,
      formatDensity = "dense",
      selectedSections: selectedSectionsProp,
      onSelectedSectionsChange,
      shouldRespectLeadingZeros = false,
      timezone: timezoneProp
    }
  } = params;
  const {
    timezone,
    value: valueFromTheOutside,
    handleValueChange
  } = useValueWithTimezone({
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    onChange: onChange3,
    valueManager
  });
  const sectionsValueBoundaries = reactExports.useMemo(() => getSectionsBoundaries(utils, timezone), [utils, timezone]);
  const getSectionsFromValue = reactExports.useCallback((value, fallbackSections = null) => fieldValueManager.getSectionsFromValue(utils, value, fallbackSections, isRTL, (date) => splitFormatIntoSections(utils, timezone, localeText, format, date, formatDensity, shouldRespectLeadingZeros, isRTL)), [fieldValueManager, format, localeText, isRTL, shouldRespectLeadingZeros, utils, formatDensity, timezone]);
  const placeholder = reactExports.useMemo(() => fieldValueManager.getValueStrFromSections(getSectionsFromValue(valueManager.emptyValue), isRTL), [fieldValueManager, getSectionsFromValue, valueManager.emptyValue, isRTL]);
  const [state, setState] = reactExports.useState(() => {
    const sections = getSectionsFromValue(valueFromTheOutside);
    const stateWithoutReferenceDate = {
      sections,
      value: valueFromTheOutside,
      referenceValue: valueManager.emptyValue,
      tempValueStrAndroid: null
    };
    const granularity = getSectionTypeGranularity(sections);
    const referenceValue = valueManager.getInitialReferenceValue({
      referenceDate: referenceDateProp,
      value: valueFromTheOutside,
      utils,
      props: internalProps,
      granularity,
      timezone
    });
    return _extends$1({}, stateWithoutReferenceDate, {
      referenceValue
    });
  });
  const [selectedSections, innerSetSelectedSections] = useControlled({
    controlled: selectedSectionsProp,
    default: null,
    name: "useField",
    state: "selectedSectionIndexes"
  });
  const setSelectedSections = (newSelectedSections) => {
    innerSetSelectedSections(newSelectedSections);
    onSelectedSectionsChange == null || onSelectedSectionsChange(newSelectedSections);
    setState((prevState) => _extends$1({}, prevState, {
      selectedSectionQuery: null
    }));
  };
  const selectedSectionIndexes = reactExports.useMemo(() => {
    if (selectedSections == null) {
      return null;
    }
    if (selectedSections === "all") {
      return {
        startIndex: 0,
        endIndex: state.sections.length - 1,
        shouldSelectBoundarySelectors: true
      };
    }
    if (typeof selectedSections === "number") {
      return {
        startIndex: selectedSections,
        endIndex: selectedSections
      };
    }
    if (typeof selectedSections === "string") {
      const selectedSectionIndex = state.sections.findIndex((section) => section.type === selectedSections);
      return {
        startIndex: selectedSectionIndex,
        endIndex: selectedSectionIndex
      };
    }
    return selectedSections;
  }, [selectedSections, state.sections]);
  const publishValue = ({
    value,
    referenceValue,
    sections
  }) => {
    setState((prevState) => _extends$1({}, prevState, {
      sections,
      value,
      referenceValue,
      tempValueStrAndroid: null
    }));
    if (valueManager.areValuesEqual(utils, state.value, value)) {
      return;
    }
    const context = {
      validationError: validator({
        adapter,
        value,
        props: _extends$1({}, internalProps, {
          value,
          timezone
        })
      })
    };
    handleValueChange(value, context);
  };
  const setSectionValue = (sectionIndex, newSectionValue) => {
    const newSections = [...state.sections];
    newSections[sectionIndex] = _extends$1({}, newSections[sectionIndex], {
      value: newSectionValue,
      modified: true
    });
    return addPositionPropertiesToSections(newSections, isRTL);
  };
  const clearValue = () => {
    publishValue({
      value: valueManager.emptyValue,
      referenceValue: state.referenceValue,
      sections: getSectionsFromValue(valueManager.emptyValue)
    });
  };
  const clearActiveSection = () => {
    if (selectedSectionIndexes == null) {
      return;
    }
    const activeSection = state.sections[selectedSectionIndexes.startIndex];
    const activeDateManager = fieldValueManager.getActiveDateManager(utils, state, activeSection);
    const nonEmptySectionCountBefore = activeDateManager.getSections(state.sections).filter((section) => section.value !== "").length;
    const hasNoOtherNonEmptySections = nonEmptySectionCountBefore === (activeSection.value === "" ? 0 : 1);
    const newSections = setSectionValue(selectedSectionIndexes.startIndex, "");
    const newActiveDate = hasNoOtherNonEmptySections ? null : utils.date(/* @__PURE__ */ new Date(""));
    const newValues = activeDateManager.getNewValuesFromNewActiveDate(newActiveDate);
    if ((newActiveDate != null && !utils.isValid(newActiveDate)) !== (activeDateManager.date != null && !utils.isValid(activeDateManager.date))) {
      publishValue(_extends$1({}, newValues, {
        sections: newSections
      }));
    } else {
      setState((prevState) => _extends$1({}, prevState, newValues, {
        sections: newSections,
        tempValueStrAndroid: null
      }));
    }
  };
  const updateValueFromValueStr = (valueStr) => {
    const parseDateStr = (dateStr, referenceDate) => {
      const date = utils.parse(dateStr, format);
      if (date == null || !utils.isValid(date)) {
        return null;
      }
      const sections = splitFormatIntoSections(utils, timezone, localeText, format, date, formatDensity, shouldRespectLeadingZeros, isRTL);
      return mergeDateIntoReferenceDate(utils, timezone, date, sections, referenceDate, false);
    };
    const newValue = fieldValueManager.parseValueStr(valueStr, state.referenceValue, parseDateStr);
    const newReferenceValue = fieldValueManager.updateReferenceValue(utils, newValue, state.referenceValue);
    publishValue({
      value: newValue,
      referenceValue: newReferenceValue,
      sections: getSectionsFromValue(newValue, state.sections)
    });
  };
  const updateSectionValue = ({
    activeSection,
    newSectionValue,
    shouldGoToNextSection
  }) => {
    if (shouldGoToNextSection && selectedSectionIndexes && selectedSectionIndexes.startIndex < state.sections.length - 1) {
      setSelectedSections(selectedSectionIndexes.startIndex + 1);
    } else if (selectedSectionIndexes && selectedSectionIndexes.startIndex !== selectedSectionIndexes.endIndex) {
      setSelectedSections(selectedSectionIndexes.startIndex);
    }
    const activeDateManager = fieldValueManager.getActiveDateManager(utils, state, activeSection);
    const newSections = setSectionValue(selectedSectionIndexes.startIndex, newSectionValue);
    const newActiveDateSections = activeDateManager.getSections(newSections);
    const newActiveDate = getDateFromDateSections(utils, newActiveDateSections);
    let values;
    let shouldPublish;
    if (newActiveDate != null && utils.isValid(newActiveDate)) {
      const mergedDate = mergeDateIntoReferenceDate(utils, timezone, newActiveDate, newActiveDateSections, activeDateManager.referenceDate, true);
      values = activeDateManager.getNewValuesFromNewActiveDate(mergedDate);
      shouldPublish = true;
    } else {
      values = activeDateManager.getNewValuesFromNewActiveDate(newActiveDate);
      shouldPublish = (newActiveDate != null && !utils.isValid(newActiveDate)) !== (activeDateManager.date != null && !utils.isValid(activeDateManager.date));
    }
    if (shouldPublish) {
      return publishValue(_extends$1({}, values, {
        sections: newSections
      }));
    }
    return setState((prevState) => _extends$1({}, prevState, values, {
      sections: newSections,
      tempValueStrAndroid: null
    }));
  };
  const setTempAndroidValueStr = (tempValueStrAndroid) => setState((prev) => _extends$1({}, prev, {
    tempValueStrAndroid
  }));
  reactExports.useEffect(() => {
    const sections = getSectionsFromValue(state.value);
    setState((prevState) => _extends$1({}, prevState, {
      sections
    }));
  }, [format, utils.locale]);
  reactExports.useEffect(() => {
    let shouldUpdate = false;
    if (!valueManager.areValuesEqual(utils, state.value, valueFromTheOutside)) {
      shouldUpdate = true;
    } else {
      shouldUpdate = valueManager.getTimezone(utils, state.value) !== valueManager.getTimezone(utils, valueFromTheOutside);
    }
    if (shouldUpdate) {
      setState((prevState) => _extends$1({}, prevState, {
        value: valueFromTheOutside,
        referenceValue: fieldValueManager.updateReferenceValue(utils, valueFromTheOutside, prevState.referenceValue),
        sections: getSectionsFromValue(valueFromTheOutside)
      }));
    }
  }, [valueFromTheOutside]);
  return {
    state,
    selectedSectionIndexes,
    setSelectedSections,
    clearValue,
    clearActiveSection,
    updateSectionValue,
    updateValueFromValueStr,
    setTempAndroidValueStr,
    sectionsValueBoundaries,
    placeholder,
    timezone
  };
};
const QUERY_LIFE_DURATION_MS = 5e3;
const isQueryResponseWithoutValue = (response) => response.saveQuery != null;
const useFieldCharacterEditing = ({
  sections,
  updateSectionValue,
  sectionsValueBoundaries,
  setTempAndroidValueStr,
  timezone
}) => {
  const utils = useUtils();
  const [query, setQuery] = reactExports.useState(null);
  const resetQuery = useEventCallback(() => setQuery(null));
  reactExports.useEffect(() => {
    var _sections$query$secti;
    if (query != null && ((_sections$query$secti = sections[query.sectionIndex]) == null ? void 0 : _sections$query$secti.type) !== query.sectionType) {
      resetQuery();
    }
  }, [sections, query, resetQuery]);
  reactExports.useEffect(() => {
    if (query != null) {
      const timeout = setTimeout(() => resetQuery(), QUERY_LIFE_DURATION_MS);
      return () => {
        window.clearTimeout(timeout);
      };
    }
    return () => {
    };
  }, [query, resetQuery]);
  const applyQuery = ({
    keyPressed,
    sectionIndex
  }, getFirstSectionValueMatchingWithQuery, isValidQueryValue) => {
    const cleanKeyPressed = keyPressed.toLowerCase();
    const activeSection = sections[sectionIndex];
    if (query != null && (!isValidQueryValue || isValidQueryValue(query.value)) && query.sectionIndex === sectionIndex) {
      const concatenatedQueryValue = `${query.value}${cleanKeyPressed}`;
      const queryResponse2 = getFirstSectionValueMatchingWithQuery(concatenatedQueryValue, activeSection);
      if (!isQueryResponseWithoutValue(queryResponse2)) {
        setQuery({
          sectionIndex,
          value: concatenatedQueryValue,
          sectionType: activeSection.type
        });
        return queryResponse2;
      }
    }
    const queryResponse = getFirstSectionValueMatchingWithQuery(cleanKeyPressed, activeSection);
    if (isQueryResponseWithoutValue(queryResponse) && !queryResponse.saveQuery) {
      resetQuery();
      return null;
    }
    setQuery({
      sectionIndex,
      value: cleanKeyPressed,
      sectionType: activeSection.type
    });
    if (isQueryResponseWithoutValue(queryResponse)) {
      return null;
    }
    return queryResponse;
  };
  const applyLetterEditing = (params) => {
    const findMatchingOptions = (format, options, queryValue) => {
      const matchingValues = options.filter((option) => option.toLowerCase().startsWith(queryValue));
      if (matchingValues.length === 0) {
        return {
          saveQuery: false
        };
      }
      return {
        sectionValue: matchingValues[0],
        shouldGoToNextSection: matchingValues.length === 1
      };
    };
    const testQueryOnFormatAndFallbackFormat = (queryValue, activeSection, fallbackFormat, formatFallbackValue) => {
      const getOptions = (format) => getLetterEditingOptions(utils, timezone, activeSection.type, format);
      if (activeSection.contentType === "letter") {
        return findMatchingOptions(activeSection.format, getOptions(activeSection.format), queryValue);
      }
      if (fallbackFormat && formatFallbackValue != null && getDateSectionConfigFromFormatToken(utils, fallbackFormat).contentType === "letter") {
        const fallbackOptions = getOptions(fallbackFormat);
        const response = findMatchingOptions(fallbackFormat, fallbackOptions, queryValue);
        if (isQueryResponseWithoutValue(response)) {
          return {
            saveQuery: false
          };
        }
        return _extends$1({}, response, {
          sectionValue: formatFallbackValue(response.sectionValue, fallbackOptions)
        });
      }
      return {
        saveQuery: false
      };
    };
    const getFirstSectionValueMatchingWithQuery = (queryValue, activeSection) => {
      switch (activeSection.type) {
        case "month": {
          const formatFallbackValue = (fallbackValue) => changeSectionValueFormat(utils, fallbackValue, utils.formats.month, activeSection.format);
          return testQueryOnFormatAndFallbackFormat(queryValue, activeSection, utils.formats.month, formatFallbackValue);
        }
        case "weekDay": {
          const formatFallbackValue = (fallbackValue, fallbackOptions) => fallbackOptions.indexOf(fallbackValue).toString();
          return testQueryOnFormatAndFallbackFormat(queryValue, activeSection, utils.formats.weekday, formatFallbackValue);
        }
        case "meridiem": {
          return testQueryOnFormatAndFallbackFormat(queryValue, activeSection);
        }
        default: {
          return {
            saveQuery: false
          };
        }
      }
    };
    return applyQuery(params, getFirstSectionValueMatchingWithQuery);
  };
  const applyNumericEditing = (params) => {
    const getNewSectionValue = (queryValue, section) => {
      const queryValueNumber = Number(`${queryValue}`);
      const sectionBoundaries = sectionsValueBoundaries[section.type]({
        currentDate: null,
        format: section.format,
        contentType: section.contentType
      });
      if (queryValueNumber > sectionBoundaries.maximum) {
        return {
          saveQuery: false
        };
      }
      if (queryValueNumber < sectionBoundaries.minimum) {
        return {
          saveQuery: true
        };
      }
      const shouldGoToNextSection = Number(`${queryValue}0`) > sectionBoundaries.maximum || queryValue.length === sectionBoundaries.maximum.toString().length;
      const newSectionValue = cleanDigitSectionValue(utils, timezone, queryValueNumber, sectionBoundaries, section);
      return {
        sectionValue: newSectionValue,
        shouldGoToNextSection
      };
    };
    const getFirstSectionValueMatchingWithQuery = (queryValue, activeSection) => {
      if (activeSection.contentType === "digit" || activeSection.contentType === "digit-with-letter") {
        return getNewSectionValue(queryValue, activeSection);
      }
      if (activeSection.type === "month") {
        doesSectionFormatHaveLeadingZeros(utils, timezone, "digit", "month", "MM");
        const response = getNewSectionValue(queryValue, {
          type: activeSection.type,
          format: "MM",
          hasLeadingZerosInInput: true,
          contentType: "digit",
          maxLength: 2
        });
        if (isQueryResponseWithoutValue(response)) {
          return response;
        }
        const formattedValue = changeSectionValueFormat(utils, response.sectionValue, "MM", activeSection.format);
        return _extends$1({}, response, {
          sectionValue: formattedValue
        });
      }
      if (activeSection.type === "weekDay") {
        const response = getNewSectionValue(queryValue, activeSection);
        if (isQueryResponseWithoutValue(response)) {
          return response;
        }
        const formattedValue = getDaysInWeekStr(utils, timezone, activeSection.format)[Number(response.sectionValue) - 1];
        return _extends$1({}, response, {
          sectionValue: formattedValue
        });
      }
      return {
        saveQuery: false
      };
    };
    return applyQuery(params, getFirstSectionValueMatchingWithQuery, (queryValue) => !Number.isNaN(Number(queryValue)));
  };
  const applyCharacterEditing = useEventCallback((params) => {
    const activeSection = sections[params.sectionIndex];
    const isNumericEditing = params.keyPressed !== " " && !Number.isNaN(Number(params.keyPressed));
    const response = isNumericEditing ? applyNumericEditing(params) : applyLetterEditing(params);
    if (response == null) {
      setTempAndroidValueStr(null);
    } else {
      updateSectionValue({
        activeSection,
        newSectionValue: response.sectionValue,
        shouldGoToNextSection: response.shouldGoToNextSection
      });
    }
  });
  return {
    applyCharacterEditing,
    resetCharacterQuery: resetQuery
  };
};
const _excluded$h = ["onClick", "onKeyDown", "onFocus", "onBlur", "onMouseUp", "onPaste", "error", "clearable", "onClear", "disabled"];
const useField = (params) => {
  const utils = useUtils();
  const {
    state,
    selectedSectionIndexes,
    setSelectedSections,
    clearValue,
    clearActiveSection,
    updateSectionValue,
    updateValueFromValueStr,
    setTempAndroidValueStr,
    sectionsValueBoundaries,
    placeholder,
    timezone
  } = useFieldState(params);
  const {
    inputRef: inputRefProp,
    internalProps,
    internalProps: {
      readOnly = false,
      unstableFieldRef,
      minutesStep
    },
    forwardedProps: {
      onClick,
      onKeyDown,
      onFocus,
      onBlur: onBlur3,
      onMouseUp,
      onPaste,
      error,
      clearable,
      onClear,
      disabled
    },
    fieldValueManager,
    valueManager,
    validator
  } = params, otherForwardedProps = _objectWithoutPropertiesLoose(params.forwardedProps, _excluded$h);
  const {
    applyCharacterEditing,
    resetCharacterQuery
  } = useFieldCharacterEditing({
    sections: state.sections,
    updateSectionValue,
    sectionsValueBoundaries,
    setTempAndroidValueStr,
    timezone
  });
  const inputRef = reactExports.useRef(null);
  const handleRef = useForkRef(inputRefProp, inputRef);
  const focusTimeoutRef = reactExports.useRef(void 0);
  const theme = useTheme();
  const isRTL = theme.direction === "rtl";
  const sectionOrder = reactExports.useMemo(() => getSectionOrder(state.sections, isRTL), [state.sections, isRTL]);
  const syncSelectionFromDOM = () => {
    var _selectionStart;
    if (readOnly) {
      setSelectedSections(null);
      return;
    }
    const browserStartIndex = (_selectionStart = inputRef.current.selectionStart) != null ? _selectionStart : 0;
    let nextSectionIndex;
    if (browserStartIndex <= state.sections[0].startInInput) {
      nextSectionIndex = 1;
    } else if (browserStartIndex >= state.sections[state.sections.length - 1].endInInput) {
      nextSectionIndex = 1;
    } else {
      nextSectionIndex = state.sections.findIndex((section) => section.startInInput - section.startSeparator.length > browserStartIndex);
    }
    const sectionIndex = nextSectionIndex === -1 ? state.sections.length - 1 : nextSectionIndex - 1;
    setSelectedSections(sectionIndex);
  };
  const handleInputClick = useEventCallback((event, ...args) => {
    if (event.isDefaultPrevented()) {
      return;
    }
    onClick == null || onClick(event, ...args);
    syncSelectionFromDOM();
  });
  const handleInputMouseUp = useEventCallback((event) => {
    onMouseUp == null || onMouseUp(event);
    event.preventDefault();
  });
  const handleInputFocus = useEventCallback((...args) => {
    onFocus == null || onFocus(...args);
    const input = inputRef.current;
    window.clearTimeout(focusTimeoutRef.current);
    focusTimeoutRef.current = setTimeout(() => {
      if (!input || input !== inputRef.current) {
        return;
      }
      if (selectedSectionIndexes != null || readOnly) {
        return;
      }
      if (
        // avoid selecting all sections when focusing empty field without value
        input.value.length && Number(input.selectionEnd) - Number(input.selectionStart) === input.value.length
      ) {
        setSelectedSections("all");
      } else {
        syncSelectionFromDOM();
      }
    });
  });
  const handleInputBlur = useEventCallback((...args) => {
    onBlur3 == null || onBlur3(...args);
    setSelectedSections(null);
  });
  const handleInputPaste = useEventCallback((event) => {
    onPaste == null || onPaste(event);
    if (readOnly) {
      event.preventDefault();
      return;
    }
    const pastedValue = event.clipboardData.getData("text");
    if (selectedSectionIndexes && selectedSectionIndexes.startIndex === selectedSectionIndexes.endIndex) {
      const activeSection = state.sections[selectedSectionIndexes.startIndex];
      const lettersOnly = /^[a-zA-Z]+$/.test(pastedValue);
      const digitsOnly = /^[0-9]+$/.test(pastedValue);
      const digitsAndLetterOnly = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(pastedValue);
      const isValidPastedValue = activeSection.contentType === "letter" && lettersOnly || activeSection.contentType === "digit" && digitsOnly || activeSection.contentType === "digit-with-letter" && digitsAndLetterOnly;
      if (isValidPastedValue) {
        resetCharacterQuery();
        updateSectionValue({
          activeSection,
          newSectionValue: pastedValue,
          shouldGoToNextSection: true
        });
        event.preventDefault();
        return;
      }
      if (lettersOnly || digitsOnly) {
        event.preventDefault();
        return;
      }
    }
    event.preventDefault();
    resetCharacterQuery();
    updateValueFromValueStr(pastedValue);
  });
  const handleInputChange = useEventCallback((event) => {
    if (readOnly) {
      return;
    }
    const targetValue = event.target.value;
    if (targetValue === "") {
      resetCharacterQuery();
      clearValue();
      return;
    }
    const eventData = event.nativeEvent.data;
    const shouldUseEventData = eventData && eventData.length > 1;
    const valueStr2 = shouldUseEventData ? eventData : targetValue;
    const cleanValueStr = cleanString(valueStr2);
    if (selectedSectionIndexes == null || shouldUseEventData) {
      updateValueFromValueStr(shouldUseEventData ? eventData : cleanValueStr);
      return;
    }
    let keyPressed;
    if (selectedSectionIndexes.startIndex === 0 && selectedSectionIndexes.endIndex === state.sections.length - 1 && cleanValueStr.length === 1) {
      keyPressed = cleanValueStr;
    } else {
      const prevValueStr = cleanString(fieldValueManager.getValueStrFromSections(state.sections, isRTL));
      let startOfDiffIndex = -1;
      let endOfDiffIndex = -1;
      for (let i = 0; i < prevValueStr.length; i += 1) {
        if (startOfDiffIndex === -1 && prevValueStr[i] !== cleanValueStr[i]) {
          startOfDiffIndex = i;
        }
        if (endOfDiffIndex === -1 && prevValueStr[prevValueStr.length - i - 1] !== cleanValueStr[cleanValueStr.length - i - 1]) {
          endOfDiffIndex = i;
        }
      }
      const activeSection = state.sections[selectedSectionIndexes.startIndex];
      const hasDiffOutsideOfActiveSection = startOfDiffIndex < activeSection.start || prevValueStr.length - endOfDiffIndex - 1 > activeSection.end;
      if (hasDiffOutsideOfActiveSection) {
        return;
      }
      const activeSectionEndRelativeToNewValue = cleanValueStr.length - prevValueStr.length + activeSection.end - cleanString(activeSection.endSeparator || "").length;
      keyPressed = cleanValueStr.slice(activeSection.start + cleanString(activeSection.startSeparator || "").length, activeSectionEndRelativeToNewValue);
    }
    if (keyPressed.length === 0) {
      if (isAndroid()) {
        setTempAndroidValueStr(valueStr2);
      } else {
        resetCharacterQuery();
        clearActiveSection();
      }
      return;
    }
    applyCharacterEditing({
      keyPressed,
      sectionIndex: selectedSectionIndexes.startIndex
    });
  });
  const handleInputKeyDown = useEventCallback((event) => {
    onKeyDown == null || onKeyDown(event);
    switch (true) {
      // Select all
      case (event.key === "a" && (event.ctrlKey || event.metaKey)): {
        event.preventDefault();
        setSelectedSections("all");
        break;
      }
      // Move selection to next section
      case event.key === "ArrowRight": {
        event.preventDefault();
        if (selectedSectionIndexes == null) {
          setSelectedSections(sectionOrder.startIndex);
        } else if (selectedSectionIndexes.startIndex !== selectedSectionIndexes.endIndex) {
          setSelectedSections(selectedSectionIndexes.endIndex);
        } else {
          const nextSectionIndex = sectionOrder.neighbors[selectedSectionIndexes.startIndex].rightIndex;
          if (nextSectionIndex !== null) {
            setSelectedSections(nextSectionIndex);
          }
        }
        break;
      }
      // Move selection to previous section
      case event.key === "ArrowLeft": {
        event.preventDefault();
        if (selectedSectionIndexes == null) {
          setSelectedSections(sectionOrder.endIndex);
        } else if (selectedSectionIndexes.startIndex !== selectedSectionIndexes.endIndex) {
          setSelectedSections(selectedSectionIndexes.startIndex);
        } else {
          const nextSectionIndex = sectionOrder.neighbors[selectedSectionIndexes.startIndex].leftIndex;
          if (nextSectionIndex !== null) {
            setSelectedSections(nextSectionIndex);
          }
        }
        break;
      }
      // Reset the value of the selected section
      case event.key === "Delete": {
        event.preventDefault();
        if (readOnly) {
          break;
        }
        if (selectedSectionIndexes == null || selectedSectionIndexes.startIndex === 0 && selectedSectionIndexes.endIndex === state.sections.length - 1) {
          clearValue();
        } else {
          clearActiveSection();
        }
        resetCharacterQuery();
        break;
      }
      // Increment / decrement the selected section value
      case ["ArrowUp", "ArrowDown", "Home", "End", "PageUp", "PageDown"].includes(event.key): {
        event.preventDefault();
        if (readOnly || selectedSectionIndexes == null) {
          break;
        }
        const activeSection = state.sections[selectedSectionIndexes.startIndex];
        const activeDateManager = fieldValueManager.getActiveDateManager(utils, state, activeSection);
        const newSectionValue = adjustSectionValue(utils, timezone, activeSection, event.key, sectionsValueBoundaries, activeDateManager.date, {
          minutesStep
        });
        updateSectionValue({
          activeSection,
          newSectionValue,
          shouldGoToNextSection: false
        });
        break;
      }
    }
  });
  useEnhancedEffect(() => {
    if (!inputRef.current) {
      return;
    }
    if (selectedSectionIndexes == null) {
      if (inputRef.current.scrollLeft) {
        inputRef.current.scrollLeft = 0;
      }
      return;
    }
    const firstSelectedSection = state.sections[selectedSectionIndexes.startIndex];
    const lastSelectedSection = state.sections[selectedSectionIndexes.endIndex];
    let selectionStart = firstSelectedSection.startInInput;
    let selectionEnd = lastSelectedSection.endInInput;
    if (selectedSectionIndexes.shouldSelectBoundarySelectors) {
      selectionStart -= firstSelectedSection.startSeparator.length;
      selectionEnd += lastSelectedSection.endSeparator.length;
    }
    if (selectionStart !== inputRef.current.selectionStart || selectionEnd !== inputRef.current.selectionEnd) {
      const currentScrollTop = inputRef.current.scrollTop;
      if (inputRef.current === getActiveElement(document)) {
        inputRef.current.setSelectionRange(selectionStart, selectionEnd);
      }
      inputRef.current.scrollTop = currentScrollTop;
    }
  });
  const validationError = useValidation(_extends$1({}, internalProps, {
    value: state.value,
    timezone
  }), validator, valueManager.isSameError, valueManager.defaultErrorState);
  const inputError = reactExports.useMemo(() => {
    if (error !== void 0) {
      return error;
    }
    return valueManager.hasError(validationError);
  }, [valueManager, validationError, error]);
  reactExports.useEffect(() => {
    if (!inputError && !selectedSectionIndexes) {
      resetCharacterQuery();
    }
  }, [state.referenceValue, selectedSectionIndexes, inputError]);
  reactExports.useEffect(() => {
    if (inputRef.current && inputRef.current === document.activeElement) {
      setSelectedSections("all");
    }
    return () => window.clearTimeout(focusTimeoutRef.current);
  }, []);
  reactExports.useEffect(() => {
    if (state.tempValueStrAndroid != null && selectedSectionIndexes != null) {
      resetCharacterQuery();
      clearActiveSection();
    }
  }, [state.tempValueStrAndroid]);
  const valueStr = reactExports.useMemo(() => {
    var _state$tempValueStrAn;
    return (_state$tempValueStrAn = state.tempValueStrAndroid) != null ? _state$tempValueStrAn : fieldValueManager.getValueStrFromSections(state.sections, isRTL);
  }, [state.sections, fieldValueManager, state.tempValueStrAndroid, isRTL]);
  const inputMode = reactExports.useMemo(() => {
    if (selectedSectionIndexes == null) {
      return "text";
    }
    if (state.sections[selectedSectionIndexes.startIndex].contentType === "letter") {
      return "text";
    }
    return "numeric";
  }, [selectedSectionIndexes, state.sections]);
  const inputHasFocus = inputRef.current && inputRef.current === getActiveElement(document);
  const areAllSectionsEmpty = valueManager.areValuesEqual(utils, state.value, valueManager.emptyValue);
  const shouldShowPlaceholder = !inputHasFocus && areAllSectionsEmpty;
  reactExports.useImperativeHandle(unstableFieldRef, () => ({
    getSections: () => state.sections,
    getActiveSectionIndex: () => {
      var _selectionStart2, _selectionEnd, _inputRef$current;
      const browserStartIndex = (_selectionStart2 = inputRef.current.selectionStart) != null ? _selectionStart2 : 0;
      const browserEndIndex = (_selectionEnd = inputRef.current.selectionEnd) != null ? _selectionEnd : 0;
      const isInputReadOnly = !!((_inputRef$current = inputRef.current) != null && _inputRef$current.readOnly);
      if (browserStartIndex === 0 && browserEndIndex === 0 || isInputReadOnly) {
        return null;
      }
      const nextSectionIndex = browserStartIndex <= state.sections[0].startInInput ? 1 : state.sections.findIndex((section) => section.startInInput - section.startSeparator.length > browserStartIndex);
      return nextSectionIndex === -1 ? state.sections.length - 1 : nextSectionIndex - 1;
    },
    setSelectedSections: (activeSectionIndex) => setSelectedSections(activeSectionIndex)
  }));
  const handleClearValue = useEventCallback((event, ...args) => {
    var _inputRef$current2;
    event.preventDefault();
    onClear == null || onClear(event, ...args);
    clearValue();
    inputRef == null || (_inputRef$current2 = inputRef.current) == null || _inputRef$current2.focus();
    setSelectedSections(0);
  });
  return _extends$1({
    placeholder,
    autoComplete: "off",
    disabled: Boolean(disabled)
  }, otherForwardedProps, {
    value: shouldShowPlaceholder ? "" : valueStr,
    inputMode,
    readOnly,
    onClick: handleInputClick,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur,
    onPaste: handleInputPaste,
    onChange: handleInputChange,
    onKeyDown: handleInputKeyDown,
    onMouseUp: handleInputMouseUp,
    onClear: handleClearValue,
    error: inputError,
    ref: handleRef,
    clearable: Boolean(clearable && !areAllSectionsEmpty && !readOnly && !disabled)
  });
};
const useOpenState = ({
  open,
  onOpen,
  onClose
}) => {
  const isControllingOpenProp = reactExports.useRef(typeof open === "boolean").current;
  const [openState, setIsOpenState] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (isControllingOpenProp) {
      if (typeof open !== "boolean") {
        throw new Error("You must not mix controlling and uncontrolled mode for `open` prop");
      }
      setIsOpenState(open);
    }
  }, [isControllingOpenProp, open]);
  const setIsOpen = reactExports.useCallback((newIsOpen) => {
    if (!isControllingOpenProp) {
      setIsOpenState(newIsOpen);
    }
    if (newIsOpen && onOpen) {
      onOpen();
    }
    if (!newIsOpen && onClose) {
      onClose();
    }
  }, [isControllingOpenProp, onOpen, onClose]);
  return {
    isOpen: openState,
    setIsOpen
  };
};
const shouldPublishValue = (params) => {
  const {
    action,
    hasChanged,
    dateState,
    isControlled
  } = params;
  const isCurrentValueTheDefaultValue = !isControlled && !dateState.hasBeenModifiedSinceMount;
  if (action.name === "setValueFromField") {
    return true;
  }
  if (action.name === "setValueFromAction") {
    if (isCurrentValueTheDefaultValue && ["accept", "today", "clear"].includes(action.pickerAction)) {
      return true;
    }
    return hasChanged(dateState.lastPublishedValue);
  }
  if (action.name === "setValueFromView" && action.selectionState !== "shallow") {
    if (isCurrentValueTheDefaultValue) {
      return true;
    }
    return hasChanged(dateState.lastPublishedValue);
  }
  if (action.name === "setValueFromShortcut") {
    if (isCurrentValueTheDefaultValue) {
      return true;
    }
    return hasChanged(dateState.lastPublishedValue);
  }
  return false;
};
const shouldCommitValue = (params) => {
  const {
    action,
    hasChanged,
    dateState,
    isControlled,
    closeOnSelect
  } = params;
  const isCurrentValueTheDefaultValue = !isControlled && !dateState.hasBeenModifiedSinceMount;
  if (action.name === "setValueFromAction") {
    if (isCurrentValueTheDefaultValue && ["accept", "today", "clear"].includes(action.pickerAction)) {
      return true;
    }
    return hasChanged(dateState.lastCommittedValue);
  }
  if (action.name === "setValueFromView" && action.selectionState === "finish" && closeOnSelect) {
    if (isCurrentValueTheDefaultValue) {
      return true;
    }
    return hasChanged(dateState.lastCommittedValue);
  }
  if (action.name === "setValueFromShortcut") {
    return action.changeImportance === "accept" && hasChanged(dateState.lastCommittedValue);
  }
  return false;
};
const shouldClosePicker = (params) => {
  const {
    action,
    closeOnSelect
  } = params;
  if (action.name === "setValueFromAction") {
    return true;
  }
  if (action.name === "setValueFromView") {
    return action.selectionState === "finish" && closeOnSelect;
  }
  if (action.name === "setValueFromShortcut") {
    return action.changeImportance === "accept";
  }
  return false;
};
const usePickerValue = ({
  props,
  valueManager,
  valueType,
  wrapperVariant,
  validator
}) => {
  const {
    onAccept,
    onChange: onChange3,
    value: inValue,
    defaultValue: inDefaultValue,
    closeOnSelect = wrapperVariant === "desktop",
    selectedSections: selectedSectionsProp,
    onSelectedSectionsChange,
    timezone: timezoneProp
  } = props;
  const {
    current: defaultValue
  } = reactExports.useRef(inDefaultValue);
  const {
    current: isControlled
  } = reactExports.useRef(inValue !== void 0);
  const utils = useUtils();
  const adapter = useLocalizationContext();
  const [selectedSections, setSelectedSections] = useControlled({
    controlled: selectedSectionsProp,
    default: null,
    name: "usePickerValue",
    state: "selectedSections"
  });
  const {
    isOpen,
    setIsOpen
  } = useOpenState(props);
  const [dateState, setDateState] = reactExports.useState(() => {
    let initialValue;
    if (inValue !== void 0) {
      initialValue = inValue;
    } else if (defaultValue !== void 0) {
      initialValue = defaultValue;
    } else {
      initialValue = valueManager.emptyValue;
    }
    return {
      draft: initialValue,
      lastPublishedValue: initialValue,
      lastCommittedValue: initialValue,
      lastControlledValue: inValue,
      hasBeenModifiedSinceMount: false
    };
  });
  const {
    timezone,
    handleValueChange
  } = useValueWithTimezone({
    timezone: timezoneProp,
    value: inValue,
    defaultValue,
    onChange: onChange3,
    valueManager
  });
  useValidation(_extends$1({}, props, {
    value: dateState.draft,
    timezone
  }), validator, valueManager.isSameError, valueManager.defaultErrorState);
  const updateDate = useEventCallback((action) => {
    const updaterParams = {
      action,
      dateState,
      hasChanged: (comparison) => !valueManager.areValuesEqual(utils, action.value, comparison),
      isControlled,
      closeOnSelect
    };
    const shouldPublish = shouldPublishValue(updaterParams);
    const shouldCommit = shouldCommitValue(updaterParams);
    const shouldClose = shouldClosePicker(updaterParams);
    setDateState((prev) => _extends$1({}, prev, {
      draft: action.value,
      lastPublishedValue: shouldPublish ? action.value : prev.lastPublishedValue,
      lastCommittedValue: shouldCommit ? action.value : prev.lastCommittedValue,
      hasBeenModifiedSinceMount: true
    }));
    if (shouldPublish) {
      const validationError = action.name === "setValueFromField" ? action.context.validationError : validator({
        adapter,
        value: action.value,
        props: _extends$1({}, props, {
          value: action.value,
          timezone
        })
      });
      const context = {
        validationError
      };
      if (action.name === "setValueFromShortcut" && action.shortcut != null) {
        context.shortcut = action.shortcut;
      }
      handleValueChange(action.value, context);
    }
    if (shouldCommit && onAccept) {
      onAccept(action.value);
    }
    if (shouldClose) {
      setIsOpen(false);
    }
  });
  if (inValue !== void 0 && (dateState.lastControlledValue === void 0 || !valueManager.areValuesEqual(utils, dateState.lastControlledValue, inValue))) {
    const isUpdateComingFromPicker = valueManager.areValuesEqual(utils, dateState.draft, inValue);
    setDateState((prev) => _extends$1({}, prev, {
      lastControlledValue: inValue
    }, isUpdateComingFromPicker ? {} : {
      lastCommittedValue: inValue,
      lastPublishedValue: inValue,
      draft: inValue,
      hasBeenModifiedSinceMount: true
    }));
  }
  const handleClear = useEventCallback(() => {
    updateDate({
      value: valueManager.emptyValue,
      name: "setValueFromAction",
      pickerAction: "clear"
    });
  });
  const handleAccept = useEventCallback(() => {
    updateDate({
      value: dateState.lastPublishedValue,
      name: "setValueFromAction",
      pickerAction: "accept"
    });
  });
  const handleDismiss = useEventCallback(() => {
    updateDate({
      value: dateState.lastPublishedValue,
      name: "setValueFromAction",
      pickerAction: "dismiss"
    });
  });
  const handleCancel = useEventCallback(() => {
    updateDate({
      value: dateState.lastCommittedValue,
      name: "setValueFromAction",
      pickerAction: "cancel"
    });
  });
  const handleSetToday = useEventCallback(() => {
    updateDate({
      value: valueManager.getTodayValue(utils, timezone, valueType),
      name: "setValueFromAction",
      pickerAction: "today"
    });
  });
  const handleOpen = useEventCallback(() => setIsOpen(true));
  const handleClose = useEventCallback(() => setIsOpen(false));
  const handleChange = useEventCallback((newValue, selectionState = "partial") => updateDate({
    name: "setValueFromView",
    value: newValue,
    selectionState
  }));
  const handleSelectShortcut = useEventCallback((newValue, changeImportance, shortcut) => updateDate({
    name: "setValueFromShortcut",
    value: newValue,
    changeImportance: changeImportance != null ? changeImportance : "accept",
    shortcut
  }));
  const handleChangeFromField = useEventCallback((newValue, context) => updateDate({
    name: "setValueFromField",
    value: newValue,
    context
  }));
  const handleFieldSelectedSectionsChange = useEventCallback((newSelectedSections) => {
    setSelectedSections(newSelectedSections);
    onSelectedSectionsChange == null || onSelectedSectionsChange(newSelectedSections);
  });
  const actions = {
    onClear: handleClear,
    onAccept: handleAccept,
    onDismiss: handleDismiss,
    onCancel: handleCancel,
    onSetToday: handleSetToday,
    onOpen: handleOpen,
    onClose: handleClose
  };
  const fieldResponse = {
    value: dateState.draft,
    onChange: handleChangeFromField,
    selectedSections,
    onSelectedSectionsChange: handleFieldSelectedSectionsChange
  };
  const viewValue = reactExports.useMemo(() => valueManager.cleanValue(utils, dateState.draft), [utils, valueManager, dateState.draft]);
  const viewResponse = {
    value: viewValue,
    onChange: handleChange,
    onClose: handleClose,
    open: isOpen,
    onSelectedSectionsChange: handleFieldSelectedSectionsChange
  };
  const isValid = (testedValue) => {
    const error = validator({
      adapter,
      value: testedValue,
      props: _extends$1({}, props, {
        value: testedValue,
        timezone
      })
    });
    return !valueManager.hasError(error);
  };
  const layoutResponse = _extends$1({}, actions, {
    value: viewValue,
    onChange: handleChange,
    onSelectShortcut: handleSelectShortcut,
    isValid
  });
  return {
    open: isOpen,
    fieldProps: fieldResponse,
    viewProps: viewResponse,
    layoutProps: layoutResponse,
    actions
  };
};
function useViews({
  onChange: onChange3,
  onViewChange,
  openTo,
  view: inView,
  views,
  autoFocus,
  focusedView: inFocusedView,
  onFocusedViewChange
}) {
  var _views, _views2;
  const previousOpenTo = reactExports.useRef(openTo);
  const previousViews = reactExports.useRef(views);
  const defaultView = reactExports.useRef(views.includes(openTo) ? openTo : views[0]);
  const [view, setView] = useControlled({
    name: "useViews",
    state: "view",
    controlled: inView,
    default: defaultView.current
  });
  const defaultFocusedView = reactExports.useRef(autoFocus ? view : null);
  const [focusedView, setFocusedView] = useControlled({
    name: "useViews",
    state: "focusedView",
    controlled: inFocusedView,
    default: defaultFocusedView.current
  });
  reactExports.useEffect(() => {
    if (previousOpenTo.current && previousOpenTo.current !== openTo || previousViews.current && previousViews.current.some((previousView2) => !views.includes(previousView2))) {
      setView(views.includes(openTo) ? openTo : views[0]);
      previousViews.current = views;
      previousOpenTo.current = openTo;
    }
  }, [openTo, setView, view, views]);
  const viewIndex = views.indexOf(view);
  const previousView = (_views = views[viewIndex - 1]) != null ? _views : null;
  const nextView = (_views2 = views[viewIndex + 1]) != null ? _views2 : null;
  const handleFocusedViewChange = useEventCallback((viewToFocus, hasFocus) => {
    if (hasFocus) {
      setFocusedView(viewToFocus);
    } else {
      setFocusedView(
        (prevFocusedView) => viewToFocus === prevFocusedView ? null : prevFocusedView
        // If false the blur is due to view switching
      );
    }
    onFocusedViewChange == null || onFocusedViewChange(viewToFocus, hasFocus);
  });
  const handleChangeView = useEventCallback((newView) => {
    handleFocusedViewChange(newView, true);
    if (newView === view) {
      return;
    }
    setView(newView);
    if (onViewChange) {
      onViewChange(newView);
    }
  });
  const goToNextView = useEventCallback(() => {
    if (nextView) {
      handleChangeView(nextView);
    }
  });
  const setValueAndGoToNextView = useEventCallback((value, currentViewSelectionState, selectedView) => {
    const isSelectionFinishedOnCurrentView = currentViewSelectionState === "finish";
    const hasMoreViews = selectedView ? (
      // handles case like `DateTimePicker`, where a view might return a `finish` selection state
      // but we it's not the final view given all `views` -> overall selection state should be `partial`.
      views.indexOf(selectedView) < views.length - 1
    ) : Boolean(nextView);
    const globalSelectionState = isSelectionFinishedOnCurrentView && hasMoreViews ? "partial" : currentViewSelectionState;
    onChange3(value, globalSelectionState, selectedView);
    if (selectedView && selectedView !== view) {
      const nextViewAfterSelected = views[views.indexOf(selectedView) + 1];
      if (nextViewAfterSelected) {
        handleChangeView(nextViewAfterSelected);
      }
    } else if (isSelectionFinishedOnCurrentView) {
      goToNextView();
    }
  });
  return {
    view,
    setView: handleChangeView,
    focusedView,
    setFocusedView: handleFocusedViewChange,
    nextView,
    previousView,
    // Always return up to date default view instead of the initial one (i.e. defaultView.current)
    defaultView: views.includes(openTo) ? openTo : views[0],
    goToNextView,
    setValueAndGoToNextView
  };
}
const _excluded$g = ["className", "sx"];
const usePickerViews = ({
  props,
  propsFromPickerValue,
  additionalViewProps,
  inputRef,
  autoFocusView
}) => {
  const {
    onChange: onChange3,
    open,
    onSelectedSectionsChange,
    onClose
  } = propsFromPickerValue;
  const {
    view: inView,
    views,
    openTo,
    onViewChange,
    viewRenderers,
    timezone
  } = props;
  const propsToForwardToView = _objectWithoutPropertiesLoose(props, _excluded$g);
  const {
    view,
    setView,
    defaultView,
    focusedView,
    setFocusedView,
    setValueAndGoToNextView
  } = useViews({
    view: inView,
    views,
    openTo,
    onChange: onChange3,
    onViewChange,
    autoFocus: autoFocusView
  });
  const {
    hasUIView,
    viewModeLookup
  } = reactExports.useMemo(() => views.reduce((acc, viewForReduce) => {
    let viewMode;
    if (viewRenderers[viewForReduce] != null) {
      viewMode = "UI";
    } else {
      viewMode = "field";
    }
    acc.viewModeLookup[viewForReduce] = viewMode;
    if (viewMode === "UI") {
      acc.hasUIView = true;
    }
    return acc;
  }, {
    hasUIView: false,
    viewModeLookup: {}
  }), [viewRenderers, views]);
  const timeViewsCount = reactExports.useMemo(() => views.reduce((acc, viewForReduce) => {
    if (viewRenderers[viewForReduce] != null && isTimeView(viewForReduce)) {
      return acc + 1;
    }
    return acc;
  }, 0), [viewRenderers, views]);
  const currentViewMode = viewModeLookup[view];
  const shouldRestoreFocus = useEventCallback(() => currentViewMode === "UI");
  const [popperView, setPopperView] = reactExports.useState(currentViewMode === "UI" ? view : null);
  if (popperView !== view && viewModeLookup[view] === "UI") {
    setPopperView(view);
  }
  useEnhancedEffect(() => {
    if (currentViewMode === "field" && open) {
      onClose();
      setTimeout(() => {
        inputRef == null || inputRef.current.focus();
        onSelectedSectionsChange(view);
      });
    }
  }, [view]);
  useEnhancedEffect(() => {
    if (!open) {
      return;
    }
    let newView = view;
    if (currentViewMode === "field" && popperView != null) {
      newView = popperView;
    }
    if (newView !== defaultView && viewModeLookup[newView] === "UI" && viewModeLookup[defaultView] === "UI") {
      newView = defaultView;
    }
    if (newView !== view) {
      setView(newView);
    }
    setFocusedView(newView, true);
  }, [open]);
  const layoutProps = {
    views,
    view: popperView,
    onViewChange: setView
  };
  return {
    hasUIView,
    shouldRestoreFocus,
    layoutProps,
    renderCurrentView: () => {
      if (popperView == null) {
        return null;
      }
      const renderer = viewRenderers[popperView];
      if (renderer == null) {
        return null;
      }
      return renderer(_extends$1({}, propsToForwardToView, additionalViewProps, propsFromPickerValue, {
        views,
        timezone,
        onChange: setValueAndGoToNextView,
        view: popperView,
        onViewChange: setView,
        focusedView,
        onFocusedViewChange: setFocusedView,
        showViewSwitcher: timeViewsCount > 1,
        timeViewsCount
      }));
    }
  };
};
function getOrientation() {
  if (typeof window === "undefined") {
    return "portrait";
  }
  if (window.screen && window.screen.orientation && window.screen.orientation.angle) {
    return Math.abs(window.screen.orientation.angle) === 90 ? "landscape" : "portrait";
  }
  if (window.orientation) {
    return Math.abs(Number(window.orientation)) === 90 ? "landscape" : "portrait";
  }
  return "portrait";
}
const useIsLandscape = (views, customOrientation) => {
  const [orientation, setOrientation] = reactExports.useState(getOrientation);
  useEnhancedEffect(() => {
    const eventHandler = () => {
      setOrientation(getOrientation());
    };
    window.addEventListener("orientationchange", eventHandler);
    return () => {
      window.removeEventListener("orientationchange", eventHandler);
    };
  }, []);
  if (arrayIncludes(views, ["hours", "minutes", "seconds"])) {
    return false;
  }
  const orientationToUse = customOrientation || orientation;
  return orientationToUse === "landscape";
};
const usePickerLayoutProps = ({
  props,
  propsFromPickerValue,
  propsFromPickerViews,
  wrapperVariant
}) => {
  const {
    orientation
  } = props;
  const isLandscape = useIsLandscape(propsFromPickerViews.views, orientation);
  const layoutProps = _extends$1({}, propsFromPickerViews, propsFromPickerValue, {
    isLandscape,
    wrapperVariant,
    disabled: props.disabled,
    readOnly: props.readOnly
  });
  return {
    layoutProps
  };
};
buildWarning(["The `renderInput` prop has been removed in version 6.0 of the Date and Time Pickers.", "You can replace it with the `textField` component slot in most cases.", "For more information, please have a look at the migration guide (https://mui.com/x/migration/migration-pickers-v5/#input-renderer-required-in-v5)."]);
const usePicker = ({
  props,
  valueManager,
  valueType,
  wrapperVariant,
  inputRef,
  additionalViewProps,
  validator,
  autoFocusView
}) => {
  const pickerValueResponse = usePickerValue({
    props,
    valueManager,
    valueType,
    wrapperVariant,
    validator
  });
  const pickerViewsResponse = usePickerViews({
    props,
    inputRef,
    additionalViewProps,
    autoFocusView,
    propsFromPickerValue: pickerValueResponse.viewProps
  });
  const pickerLayoutResponse = usePickerLayoutProps({
    props,
    wrapperVariant,
    propsFromPickerValue: pickerValueResponse.layoutProps,
    propsFromPickerViews: pickerViewsResponse.layoutProps
  });
  return {
    // Picker value
    open: pickerValueResponse.open,
    actions: pickerValueResponse.actions,
    fieldProps: pickerValueResponse.fieldProps,
    // Picker views
    renderCurrentView: pickerViewsResponse.renderCurrentView,
    hasUIView: pickerViewsResponse.hasUIView,
    shouldRestoreFocus: pickerViewsResponse.shouldRestoreFocus,
    // Picker layout
    layoutProps: pickerLayoutResponse.layoutProps
  };
};
function getPickersLayoutUtilityClass(slot) {
  return generateUtilityClass("MuiPickersLayout", slot);
}
const pickersLayoutClasses = generateUtilityClasses("MuiPickersLayout", ["root", "landscape", "contentWrapper", "toolbar", "actionBar", "tabs", "shortcuts"]);
const _excluded$f = ["onAccept", "onClear", "onCancel", "onSetToday", "actions"];
function PickersActionBar(props) {
  const {
    onAccept,
    onClear,
    onCancel,
    onSetToday,
    actions
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$f);
  const localeText = useLocaleText();
  if (actions == null || actions.length === 0) {
    return null;
  }
  const buttons = actions == null ? void 0 : actions.map((actionType) => {
    switch (actionType) {
      case "clear":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
          onClick: onClear,
          children: localeText.clearButtonLabel
        }, actionType);
      case "cancel":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
          onClick: onCancel,
          children: localeText.cancelButtonLabel
        }, actionType);
      case "accept":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
          onClick: onAccept,
          children: localeText.okButtonLabel
        }, actionType);
      case "today":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
          onClick: onSetToday,
          children: localeText.todayButtonLabel
        }, actionType);
      default:
        return null;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DialogActions, _extends$1({}, other, {
    children: buttons
  }));
}
const _excluded$e = ["items", "changeImportance", "isLandscape", "onChange", "isValid"], _excluded2$4 = ["getValue"];
function PickersShortcuts(props) {
  const {
    items,
    changeImportance,
    onChange: onChange3,
    isValid
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$e);
  if (items == null || items.length === 0) {
    return null;
  }
  const resolvedItems = items.map((_ref) => {
    let {
      getValue
    } = _ref, item = _objectWithoutPropertiesLoose(_ref, _excluded2$4);
    const newValue = getValue({
      isValid
    });
    return {
      label: item.label,
      onClick: () => {
        onChange3(newValue, changeImportance, item);
      },
      disabled: !isValid(newValue)
    };
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(List, _extends$1({
    dense: true,
    sx: [{
      maxHeight: VIEW_HEIGHT,
      maxWidth: 200,
      overflow: "auto"
    }, ...Array.isArray(other.sx) ? other.sx : [other.sx]]
  }, other, {
    children: resolvedItems.map((item) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ListItem, {
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, _extends$1({}, item))
      }, item.label);
    })
  }));
}
function toolbarHasView(toolbarProps) {
  return toolbarProps.view !== null;
}
const useUtilityClasses$b = (ownerState) => {
  const {
    classes,
    isLandscape
  } = ownerState;
  const slots = {
    root: ["root", isLandscape && "landscape"],
    contentWrapper: ["contentWrapper"],
    toolbar: ["toolbar"],
    actionBar: ["actionBar"],
    tabs: ["tabs"],
    landscape: ["landscape"],
    shortcuts: ["shortcuts"]
  };
  return composeClasses(slots, getPickersLayoutUtilityClass, classes);
};
const usePickerLayout = (props) => {
  var _slots$actionBar, _slots$shortcuts;
  const {
    wrapperVariant,
    onAccept,
    onClear,
    onCancel,
    onSetToday,
    view,
    views,
    onViewChange,
    value,
    onChange: onChange3,
    onSelectShortcut,
    isValid,
    isLandscape,
    disabled,
    readOnly,
    children,
    components,
    componentsProps,
    slots: innerSlots,
    slotProps: innerSlotProps
    // TODO: Remove this "as" hack. It get introduced to mark `value` prop in PickersLayoutProps as not required.
    // The true type should be
    // - For pickers value: TDate | null
    // - For range pickers value: [TDate | null, TDate | null]
  } = props;
  const slots = innerSlots != null ? innerSlots : uncapitalizeObjectKeys(components);
  const slotProps = innerSlotProps != null ? innerSlotProps : componentsProps;
  const classes = useUtilityClasses$b(props);
  const ActionBar = (_slots$actionBar = slots == null ? void 0 : slots.actionBar) != null ? _slots$actionBar : PickersActionBar;
  const actionBarProps = useSlotProps({
    elementType: ActionBar,
    externalSlotProps: slotProps == null ? void 0 : slotProps.actionBar,
    additionalProps: {
      onAccept,
      onClear,
      onCancel,
      onSetToday,
      actions: wrapperVariant === "desktop" ? [] : ["cancel", "accept"],
      className: classes.actionBar
    },
    ownerState: _extends$1({}, props, {
      wrapperVariant
    })
  });
  const actionBar = /* @__PURE__ */ jsxRuntimeExports.jsx(ActionBar, _extends$1({}, actionBarProps));
  const Toolbar = slots == null ? void 0 : slots.toolbar;
  const toolbarProps = useSlotProps({
    elementType: Toolbar,
    externalSlotProps: slotProps == null ? void 0 : slotProps.toolbar,
    additionalProps: {
      isLandscape,
      onChange: onChange3,
      value,
      view,
      onViewChange,
      views,
      disabled,
      readOnly,
      className: classes.toolbar
    },
    ownerState: _extends$1({}, props, {
      wrapperVariant
    })
  });
  const toolbar = toolbarHasView(toolbarProps) && !!Toolbar ? /* @__PURE__ */ jsxRuntimeExports.jsx(Toolbar, _extends$1({}, toolbarProps)) : null;
  const content = children;
  const Tabs = slots == null ? void 0 : slots.tabs;
  const tabs = view && Tabs ? /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, _extends$1({
    view,
    onViewChange,
    className: classes.tabs
  }, slotProps == null ? void 0 : slotProps.tabs)) : null;
  const Shortcuts = (_slots$shortcuts = slots == null ? void 0 : slots.shortcuts) != null ? _slots$shortcuts : PickersShortcuts;
  const shortcutsProps = useSlotProps({
    elementType: Shortcuts,
    externalSlotProps: slotProps == null ? void 0 : slotProps.shortcuts,
    additionalProps: {
      isValid,
      isLandscape,
      onChange: onSelectShortcut,
      className: classes.shortcuts
    },
    ownerState: {
      isValid,
      isLandscape,
      onChange: onSelectShortcut,
      className: classes.shortcuts,
      wrapperVariant
    }
  });
  const shortcuts = view && !!Shortcuts ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shortcuts, _extends$1({}, shortcutsProps)) : null;
  return {
    toolbar,
    content,
    tabs,
    actionBar,
    shortcuts
  };
};
const useUtilityClasses$a = (ownerState) => {
  const {
    isLandscape,
    classes
  } = ownerState;
  const slots = {
    root: ["root", isLandscape && "landscape"],
    contentWrapper: ["contentWrapper"]
  };
  return composeClasses(slots, getPickersLayoutUtilityClass, classes);
};
const PickersLayoutRoot = styled("div", {
  name: "MuiPickersLayout",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => ({
  display: "grid",
  gridAutoColumns: "max-content auto max-content",
  gridAutoRows: "max-content auto max-content",
  [`& .${pickersLayoutClasses.toolbar}`]: ownerState.isLandscape ? {
    gridColumn: theme.direction === "rtl" ? 3 : 1,
    gridRow: "2 / 3"
  } : {
    gridColumn: "2 / 4",
    gridRow: 1
  },
  [`.${pickersLayoutClasses.shortcuts}`]: ownerState.isLandscape ? {
    gridColumn: "2 / 4",
    gridRow: 1
  } : {
    gridColumn: theme.direction === "rtl" ? 3 : 1,
    gridRow: "2 / 3"
  },
  [`& .${pickersLayoutClasses.actionBar}`]: {
    gridColumn: "1 / 4",
    gridRow: 3
  }
}));
PickersLayoutRoot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  as: PropTypes.elementType,
  ownerState: PropTypes.shape({
    isLandscape: PropTypes.bool.isRequired
  }).isRequired,
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
};
const PickersLayoutContentWrapper = styled("div", {
  name: "MuiPickersLayout",
  slot: "ContentWrapper",
  overridesResolver: (props, styles) => styles.contentWrapper
})({
  gridColumn: 2,
  gridRow: 2,
  display: "flex",
  flexDirection: "column"
});
const PickersLayout = function PickersLayout2(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersLayout"
  });
  const {
    toolbar,
    content,
    tabs,
    actionBar,
    shortcuts
  } = usePickerLayout(props);
  const {
    sx,
    className,
    isLandscape,
    ref,
    wrapperVariant
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses$a(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PickersLayoutRoot, {
    ref,
    sx,
    className: clsx(className, classes.root),
    ownerState,
    children: [isLandscape ? shortcuts : toolbar, isLandscape ? toolbar : shortcuts, /* @__PURE__ */ jsxRuntimeExports.jsx(PickersLayoutContentWrapper, {
      className: classes.contentWrapper,
      children: wrapperVariant === "desktop" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
        children: [content, tabs]
      }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
        children: [tabs, content]
      })
    }), actionBar]
  });
};
function useNextMonthDisabled(month, {
  disableFuture,
  maxDate,
  timezone
}) {
  const utils = useUtils();
  return reactExports.useMemo(() => {
    const now = utils.dateWithTimezone(void 0, timezone);
    const lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, maxDate) ? now : maxDate);
    return !utils.isAfter(lastEnabledMonth, month);
  }, [disableFuture, maxDate, month, utils, timezone]);
}
function usePreviousMonthDisabled(month, {
  disablePast,
  minDate,
  timezone
}) {
  const utils = useUtils();
  return reactExports.useMemo(() => {
    const now = utils.dateWithTimezone(void 0, timezone);
    const firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, minDate) ? now : minDate);
    return !utils.isBefore(firstEnabledMonth, month);
  }, [disablePast, minDate, month, utils, timezone]);
}
const DATE_VALIDATION_PROP_NAMES = ["disablePast", "disableFuture", "minDate", "maxDate", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear"];
const TIME_VALIDATION_PROP_NAMES = ["disablePast", "disableFuture", "minTime", "maxTime", "shouldDisableClock", "shouldDisableTime", "minutesStep", "ampm", "disableIgnoringDatePartForTimeValidation"];
const DATE_TIME_VALIDATION_PROP_NAMES = ["minDateTime", "maxDateTime"];
const VALIDATION_PROP_NAMES = [...DATE_VALIDATION_PROP_NAMES, ...TIME_VALIDATION_PROP_NAMES, ...DATE_TIME_VALIDATION_PROP_NAMES];
const extractValidationProps = (props) => VALIDATION_PROP_NAMES.reduce((extractedProps, propName) => {
  if (props.hasOwnProperty(propName)) {
    extractedProps[propName] = props[propName];
  }
  return extractedProps;
}, {});
const SHARED_FIELD_INTERNAL_PROP_NAMES = ["value", "defaultValue", "referenceDate", "format", "formatDensity", "onChange", "timezone", "readOnly", "onError", "shouldRespectLeadingZeros", "selectedSections", "onSelectedSectionsChange", "unstableFieldRef"];
const splitFieldInternalAndForwardedProps = (props, valueType) => {
  const forwardedProps = _extends$1({}, props);
  const internalProps = {};
  const extractProp = (propName) => {
    if (forwardedProps.hasOwnProperty(propName)) {
      internalProps[propName] = forwardedProps[propName];
      delete forwardedProps[propName];
    }
  };
  SHARED_FIELD_INTERNAL_PROP_NAMES.forEach(extractProp);
  {
    DATE_VALIDATION_PROP_NAMES.forEach(extractProp);
  }
  return {
    forwardedProps,
    internalProps
  };
};
const validateDate = ({
  props,
  value,
  adapter
}) => {
  if (value === null) {
    return null;
  }
  const {
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    disablePast,
    disableFuture,
    timezone
  } = props;
  const now = adapter.utils.dateWithTimezone(void 0, timezone);
  const minDate = applyDefaultDate(adapter.utils, props.minDate, adapter.defaultDates.minDate);
  const maxDate = applyDefaultDate(adapter.utils, props.maxDate, adapter.defaultDates.maxDate);
  switch (true) {
    case !adapter.utils.isValid(value):
      return "invalidDate";
    case Boolean(shouldDisableDate && shouldDisableDate(value)):
      return "shouldDisableDate";
    case Boolean(shouldDisableMonth && shouldDisableMonth(value)):
      return "shouldDisableMonth";
    case Boolean(shouldDisableYear && shouldDisableYear(value)):
      return "shouldDisableYear";
    case Boolean(disableFuture && adapter.utils.isAfterDay(value, now)):
      return "disableFuture";
    case Boolean(disablePast && adapter.utils.isBeforeDay(value, now)):
      return "disablePast";
    case Boolean(minDate && adapter.utils.isBeforeDay(value, minDate)):
      return "minDate";
    case Boolean(maxDate && adapter.utils.isAfterDay(value, maxDate)):
      return "maxDate";
    default:
      return null;
  }
};
function getPickersDayUtilityClass(slot) {
  return generateUtilityClass("MuiPickersDay", slot);
}
const pickersDayClasses = generateUtilityClasses("MuiPickersDay", ["root", "dayWithMargin", "dayOutsideMonth", "hiddenDaySpacingFiller", "today", "selected", "disabled"]);
const _excluded$d = ["autoFocus", "className", "day", "disabled", "disableHighlightToday", "disableMargin", "hidden", "isAnimating", "onClick", "onDaySelect", "onFocus", "onBlur", "onKeyDown", "onMouseDown", "onMouseEnter", "outsideCurrentMonth", "selected", "showDaysOutsideCurrentMonth", "children", "today", "isFirstVisibleCell", "isLastVisibleCell"];
const useUtilityClasses$9 = (ownerState) => {
  const {
    selected,
    disableMargin,
    disableHighlightToday,
    today,
    disabled,
    outsideCurrentMonth,
    showDaysOutsideCurrentMonth,
    classes
  } = ownerState;
  const isHiddenDaySpacingFiller = outsideCurrentMonth && !showDaysOutsideCurrentMonth;
  const slots = {
    root: ["root", selected && !isHiddenDaySpacingFiller && "selected", disabled && "disabled", !disableMargin && "dayWithMargin", !disableHighlightToday && today && "today", outsideCurrentMonth && showDaysOutsideCurrentMonth && "dayOutsideMonth", isHiddenDaySpacingFiller && "hiddenDaySpacingFiller"],
    hiddenDaySpacingFiller: ["hiddenDaySpacingFiller"]
  };
  return composeClasses(slots, getPickersDayUtilityClass, classes);
};
const styleArg = ({
  theme,
  ownerState
}) => _extends$1({}, theme.typography.caption, {
  width: DAY_SIZE,
  height: DAY_SIZE,
  borderRadius: "50%",
  padding: 0,
  // explicitly setting to `transparent` to avoid potentially getting impacted by change from the overridden component
  backgroundColor: "transparent",
  transition: theme.transitions.create("background-color", {
    duration: theme.transitions.duration.short
  }),
  color: (theme.vars || theme).palette.text.primary,
  "@media (pointer: fine)": {
    "&:hover": {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)
    }
  },
  "&:focus": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
    [`&.${pickersDayClasses.selected}`]: {
      willChange: "background-color",
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  [`&.${pickersDayClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText,
    backgroundColor: (theme.vars || theme).palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    "&:hover": {
      willChange: "background-color",
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  [`&.${pickersDayClasses.disabled}:not(.${pickersDayClasses.selected})`]: {
    color: (theme.vars || theme).palette.text.disabled
  },
  [`&.${pickersDayClasses.disabled}&.${pickersDayClasses.selected}`]: {
    opacity: 0.6
  }
}, !ownerState.disableMargin && {
  margin: `0 ${DAY_MARGIN}px`
}, ownerState.outsideCurrentMonth && ownerState.showDaysOutsideCurrentMonth && {
  color: (theme.vars || theme).palette.text.secondary
}, !ownerState.disableHighlightToday && ownerState.today && {
  [`&:not(.${pickersDayClasses.selected})`]: {
    border: `1px solid ${(theme.vars || theme).palette.text.secondary}`
  }
});
const overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, !ownerState.disableMargin && styles.dayWithMargin, !ownerState.disableHighlightToday && ownerState.today && styles.today, !ownerState.outsideCurrentMonth && ownerState.showDaysOutsideCurrentMonth && styles.dayOutsideMonth, ownerState.outsideCurrentMonth && !ownerState.showDaysOutsideCurrentMonth && styles.hiddenDaySpacingFiller];
};
const PickersDayRoot = styled(ButtonBase, {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver
})(styleArg);
const PickersDayFiller = styled("div", {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver
})(({
  theme,
  ownerState
}) => _extends$1({}, styleArg({
  theme,
  ownerState
}), {
  // visibility: 'hidden' does not work here as it hides the element from screen readers as well
  opacity: 0,
  pointerEvents: "none"
}));
const noop = () => {
};
const PickersDayRaw = /* @__PURE__ */ reactExports.forwardRef(function PickersDay2(inProps, forwardedRef) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersDay"
  });
  const {
    autoFocus = false,
    className,
    day,
    disabled = false,
    disableHighlightToday = false,
    disableMargin = false,
    isAnimating,
    onClick,
    onDaySelect,
    onFocus = noop,
    onBlur: onBlur3 = noop,
    onKeyDown = noop,
    onMouseDown = noop,
    onMouseEnter = noop,
    outsideCurrentMonth,
    selected = false,
    showDaysOutsideCurrentMonth = false,
    children,
    today: isToday = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$d);
  const ownerState = _extends$1({}, props, {
    autoFocus,
    disabled,
    disableHighlightToday,
    disableMargin,
    selected,
    showDaysOutsideCurrentMonth,
    today: isToday
  });
  const classes = useUtilityClasses$9(ownerState);
  const utils = useUtils();
  const ref = reactExports.useRef(null);
  const handleRef = useForkRef(ref, forwardedRef);
  useEnhancedEffect(() => {
    if (autoFocus && !disabled && !isAnimating && !outsideCurrentMonth) {
      ref.current.focus();
    }
  }, [autoFocus, disabled, isAnimating, outsideCurrentMonth]);
  const handleMouseDown = (event) => {
    onMouseDown(event);
    if (outsideCurrentMonth) {
      event.preventDefault();
    }
  };
  const handleClick = (event) => {
    if (!disabled) {
      onDaySelect(day);
    }
    if (outsideCurrentMonth) {
      event.currentTarget.focus();
    }
    if (onClick) {
      onClick(event);
    }
  };
  if (outsideCurrentMonth && !showDaysOutsideCurrentMonth) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PickersDayFiller, {
      className: clsx(classes.root, classes.hiddenDaySpacingFiller, className),
      ownerState,
      role: other.role
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PickersDayRoot, _extends$1({
    className: clsx(classes.root, className),
    ref: handleRef,
    centerRipple: true,
    disabled,
    tabIndex: selected ? 0 : -1,
    onKeyDown: (event) => onKeyDown(event, day),
    onFocus: (event) => onFocus(event, day),
    onBlur: (event) => onBlur3(event, day),
    onMouseEnter: (event) => onMouseEnter(event, day),
    onClick: handleClick,
    onMouseDown: handleMouseDown
  }, other, {
    ownerState,
    children: !children ? utils.format(day, "dayOfMonth") : children
  }));
});
const PickersDay = /* @__PURE__ */ reactExports.memo(PickersDayRaw);
const getPickersSlideTransitionUtilityClass = (slot) => generateUtilityClass("MuiPickersSlideTransition", slot);
const pickersSlideTransitionClasses = generateUtilityClasses("MuiPickersSlideTransition", ["root", "slideEnter-left", "slideEnter-right", "slideEnterActive", "slideExit", "slideExitActiveLeft-left", "slideExitActiveLeft-right"]);
const _excluded$c = ["children", "className", "reduceAnimations", "slideDirection", "transKey", "classes"];
const useUtilityClasses$8 = (ownerState) => {
  const {
    classes,
    slideDirection
  } = ownerState;
  const slots = {
    root: ["root"],
    exit: ["slideExit"],
    enterActive: ["slideEnterActive"],
    enter: [`slideEnter-${slideDirection}`],
    exitActive: [`slideExitActiveLeft-${slideDirection}`]
  };
  return composeClasses(slots, getPickersSlideTransitionUtilityClass, classes);
};
const PickersSlideTransitionRoot = styled(TransitionGroup, {
  name: "MuiPickersSlideTransition",
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root, {
    [`.${pickersSlideTransitionClasses["slideEnter-left"]}`]: styles["slideEnter-left"]
  }, {
    [`.${pickersSlideTransitionClasses["slideEnter-right"]}`]: styles["slideEnter-right"]
  }, {
    [`.${pickersSlideTransitionClasses.slideEnterActive}`]: styles.slideEnterActive
  }, {
    [`.${pickersSlideTransitionClasses.slideExit}`]: styles.slideExit
  }, {
    [`.${pickersSlideTransitionClasses["slideExitActiveLeft-left"]}`]: styles["slideExitActiveLeft-left"]
  }, {
    [`.${pickersSlideTransitionClasses["slideExitActiveLeft-right"]}`]: styles["slideExitActiveLeft-right"]
  }]
})(({
  theme
}) => {
  const slideTransition = theme.transitions.create("transform", {
    duration: theme.transitions.duration.complex,
    easing: "cubic-bezier(0.35, 0.8, 0.4, 1)"
  });
  return {
    display: "block",
    position: "relative",
    overflowX: "hidden",
    "& > *": {
      position: "absolute",
      top: 0,
      right: 0,
      left: 0
    },
    [`& .${pickersSlideTransitionClasses["slideEnter-left"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      zIndex: 1
    },
    [`& .${pickersSlideTransitionClasses["slideEnter-right"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      zIndex: 1
    },
    [`& .${pickersSlideTransitionClasses.slideEnterActive}`]: {
      transform: "translate(0%)",
      transition: slideTransition
    },
    [`& .${pickersSlideTransitionClasses.slideExit}`]: {
      transform: "translate(0%)"
    },
    [`& .${pickersSlideTransitionClasses["slideExitActiveLeft-left"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      transition: slideTransition,
      zIndex: 0
    },
    [`& .${pickersSlideTransitionClasses["slideExitActiveLeft-right"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      transition: slideTransition,
      zIndex: 0
    }
  };
});
function PickersSlideTransition(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersSlideTransition"
  });
  const {
    children,
    className,
    reduceAnimations,
    transKey
    // extracting `classes` from `other`
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$c);
  const classes = useUtilityClasses$8(props);
  const theme = useTheme();
  if (reduceAnimations) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: clsx(classes.root, className),
      children
    });
  }
  const transitionClasses = {
    exit: classes.exit,
    enterActive: classes.enterActive,
    enter: classes.enter,
    exitActive: classes.exitActive
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PickersSlideTransitionRoot, {
    className: clsx(classes.root, className),
    childFactory: (element) => /* @__PURE__ */ reactExports.cloneElement(element, {
      classNames: transitionClasses
    }),
    role: "presentation",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CSSTransition, _extends$1({
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: theme.transitions.duration.complex,
      classNames: transitionClasses
    }, other, {
      children
    }), transKey)
  });
}
const useIsDateDisabled = ({
  shouldDisableDate,
  shouldDisableMonth,
  shouldDisableYear,
  minDate,
  maxDate,
  disableFuture,
  disablePast,
  timezone
}) => {
  const adapter = useLocalizationContext();
  return reactExports.useCallback((day) => validateDate({
    adapter,
    value: day,
    props: {
      shouldDisableDate,
      shouldDisableMonth,
      shouldDisableYear,
      minDate,
      maxDate,
      disableFuture,
      disablePast,
      timezone
    }
  }) !== null, [adapter, shouldDisableDate, shouldDisableMonth, shouldDisableYear, minDate, maxDate, disableFuture, disablePast, timezone]);
};
const getDayCalendarUtilityClass = (slot) => generateUtilityClass("MuiDayCalendar", slot);
generateUtilityClasses("MuiDayCalendar", ["root", "header", "weekDayLabel", "loadingContainer", "slideTransition", "monthContainer", "weekContainer", "weekNumberLabel", "weekNumber"]);
const _excluded$b = ["parentProps", "day", "focusableDay", "selectedDays", "isDateDisabled", "currentMonthNumber", "isViewFocused"], _excluded2$3 = ["ownerState"];
const useUtilityClasses$7 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    header: ["header"],
    weekDayLabel: ["weekDayLabel"],
    loadingContainer: ["loadingContainer"],
    slideTransition: ["slideTransition"],
    monthContainer: ["monthContainer"],
    weekContainer: ["weekContainer"],
    weekNumberLabel: ["weekNumberLabel"],
    weekNumber: ["weekNumber"]
  };
  return composeClasses(slots, getDayCalendarUtilityClass, classes);
};
const weeksContainerHeight = (DAY_SIZE + DAY_MARGIN * 2) * 6;
const PickersCalendarDayRoot = styled("div", {
  name: "MuiDayCalendar",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})({});
const PickersCalendarDayHeader = styled("div", {
  name: "MuiDayCalendar",
  slot: "Header",
  overridesResolver: (_, styles) => styles.header
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});
const PickersCalendarWeekDayLabel = styled(Typography, {
  name: "MuiDayCalendar",
  slot: "WeekDayLabel",
  overridesResolver: (_, styles) => styles.weekDayLabel
})(({
  theme
}) => ({
  width: 36,
  height: 40,
  margin: "0 2px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: (theme.vars || theme).palette.text.secondary
}));
const PickersCalendarWeekNumberLabel = styled(Typography, {
  name: "MuiDayCalendar",
  slot: "WeekNumberLabel",
  overridesResolver: (_, styles) => styles.weekNumberLabel
})(({
  theme
}) => ({
  width: 36,
  height: 40,
  margin: "0 2px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.text.disabled
}));
const PickersCalendarWeekNumber = styled(Typography, {
  name: "MuiDayCalendar",
  slot: "WeekNumber",
  overridesResolver: (_, styles) => styles.weekNumber
})(({
  theme
}) => _extends$1({}, theme.typography.caption, {
  width: DAY_SIZE,
  height: DAY_SIZE,
  padding: 0,
  margin: `0 ${DAY_MARGIN}px`,
  color: theme.palette.text.disabled,
  fontSize: "0.75rem",
  alignItems: "center",
  justifyContent: "center",
  display: "inline-flex"
}));
const PickersCalendarLoadingContainer = styled("div", {
  name: "MuiDayCalendar",
  slot: "LoadingContainer",
  overridesResolver: (_, styles) => styles.loadingContainer
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: weeksContainerHeight
});
const PickersCalendarSlideTransition = styled(PickersSlideTransition, {
  name: "MuiDayCalendar",
  slot: "SlideTransition",
  overridesResolver: (_, styles) => styles.slideTransition
})({
  minHeight: weeksContainerHeight
});
const PickersCalendarWeekContainer = styled("div", {
  name: "MuiDayCalendar",
  slot: "MonthContainer",
  overridesResolver: (_, styles) => styles.monthContainer
})({
  overflow: "hidden"
});
const PickersCalendarWeek = styled("div", {
  name: "MuiDayCalendar",
  slot: "WeekContainer",
  overridesResolver: (_, styles) => styles.weekContainer
})({
  margin: `${DAY_MARGIN}px 0`,
  display: "flex",
  justifyContent: "center"
});
function WrappedDay(_ref) {
  var _ref2, _slots$day, _slotProps$day;
  let {
    parentProps,
    day,
    focusableDay,
    selectedDays,
    isDateDisabled,
    currentMonthNumber,
    isViewFocused
  } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded$b);
  const {
    disabled,
    disableHighlightToday,
    isMonthSwitchingAnimating,
    showDaysOutsideCurrentMonth,
    components,
    componentsProps,
    slots,
    slotProps,
    timezone
  } = parentProps;
  const utils = useUtils();
  const now = useNow(timezone);
  const isFocusableDay = focusableDay !== null && utils.isSameDay(day, focusableDay);
  const isSelected = selectedDays.some((selectedDay) => utils.isSameDay(selectedDay, day));
  const isToday = utils.isSameDay(day, now);
  const Day = (_ref2 = (_slots$day = slots == null ? void 0 : slots.day) != null ? _slots$day : components == null ? void 0 : components.Day) != null ? _ref2 : PickersDay;
  const _useSlotProps = useSlotProps({
    elementType: Day,
    externalSlotProps: (_slotProps$day = slotProps == null ? void 0 : slotProps.day) != null ? _slotProps$day : componentsProps == null ? void 0 : componentsProps.day,
    additionalProps: _extends$1({
      disableHighlightToday,
      showDaysOutsideCurrentMonth,
      role: "gridcell",
      isAnimating: isMonthSwitchingAnimating,
      // it is used in date range dragging logic by accessing `dataset.timestamp`
      "data-timestamp": utils.toJsDate(day).valueOf()
    }, other),
    ownerState: _extends$1({}, parentProps, {
      day,
      selected: isSelected
    })
  }), dayProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded2$3);
  const isDisabled = reactExports.useMemo(() => disabled || isDateDisabled(day), [disabled, isDateDisabled, day]);
  const outsideCurrentMonth = reactExports.useMemo(() => utils.getMonth(day) !== currentMonthNumber, [utils, day, currentMonthNumber]);
  const isFirstVisibleCell = reactExports.useMemo(() => {
    const startOfMonth = utils.startOfMonth(utils.setMonth(day, currentMonthNumber));
    if (!showDaysOutsideCurrentMonth) {
      return utils.isSameDay(day, startOfMonth);
    }
    return utils.isSameDay(day, utils.startOfWeek(startOfMonth));
  }, [currentMonthNumber, day, showDaysOutsideCurrentMonth, utils]);
  const isLastVisibleCell = reactExports.useMemo(() => {
    const endOfMonth = utils.endOfMonth(utils.setMonth(day, currentMonthNumber));
    if (!showDaysOutsideCurrentMonth) {
      return utils.isSameDay(day, endOfMonth);
    }
    return utils.isSameDay(day, utils.endOfWeek(endOfMonth));
  }, [currentMonthNumber, day, showDaysOutsideCurrentMonth, utils]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Day, _extends$1({}, dayProps, {
    day,
    disabled: isDisabled,
    autoFocus: isViewFocused && isFocusableDay,
    today: isToday,
    outsideCurrentMonth,
    isFirstVisibleCell,
    isLastVisibleCell,
    selected: isSelected,
    tabIndex: isFocusableDay ? 0 : -1,
    "aria-selected": isSelected,
    "aria-current": isToday ? "date" : void 0
  }));
}
function DayCalendar(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDayCalendar"
  });
  const {
    onFocusedDayChange,
    className,
    currentMonth,
    selectedDays,
    focusedDay,
    loading,
    onSelectedDaysChange,
    onMonthSwitchingAnimationEnd,
    readOnly,
    reduceAnimations,
    renderLoading = () => /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "..."
    }),
    slideDirection,
    TransitionProps,
    disablePast,
    disableFuture,
    minDate,
    maxDate,
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    dayOfWeekFormatter: dayOfWeekFormatterFromProps,
    hasFocus,
    onFocusedViewChange,
    gridLabelId,
    displayWeekNumber,
    fixedWeekNumber,
    autoFocus,
    timezone
  } = props;
  const now = useNow(timezone);
  const utils = useUtils();
  const classes = useUtilityClasses$7(props);
  const theme = useTheme();
  const isRTL = theme.direction === "rtl";
  const dayOfWeekFormatter = dayOfWeekFormatterFromProps || ((_day, date) => utils.format(date, "weekdayShort").charAt(0).toUpperCase());
  const isDateDisabled = useIsDateDisabled({
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    minDate,
    maxDate,
    disablePast,
    disableFuture,
    timezone
  });
  const localeText = useLocaleText();
  const [internalHasFocus, setInternalHasFocus] = useControlled({
    name: "DayCalendar",
    state: "hasFocus",
    controlled: hasFocus,
    default: autoFocus != null ? autoFocus : false
  });
  const [internalFocusedDay, setInternalFocusedDay] = reactExports.useState(() => focusedDay || now);
  const handleDaySelect = useEventCallback((day) => {
    if (readOnly) {
      return;
    }
    onSelectedDaysChange(day);
  });
  const focusDay = (day) => {
    if (!isDateDisabled(day)) {
      onFocusedDayChange(day);
      setInternalFocusedDay(day);
      onFocusedViewChange == null || onFocusedViewChange(true);
      setInternalHasFocus(true);
    }
  };
  const handleKeyDown = useEventCallback((event, day) => {
    switch (event.key) {
      case "ArrowUp":
        focusDay(utils.addDays(day, -7));
        event.preventDefault();
        break;
      case "ArrowDown":
        focusDay(utils.addDays(day, 7));
        event.preventDefault();
        break;
      case "ArrowLeft": {
        const newFocusedDayDefault = utils.addDays(day, isRTL ? 1 : -1);
        const nextAvailableMonth = utils.addMonths(day, isRTL ? 1 : -1);
        const closestDayToFocus = findClosestEnabledDate({
          utils,
          date: newFocusedDayDefault,
          minDate: isRTL ? newFocusedDayDefault : utils.startOfMonth(nextAvailableMonth),
          maxDate: isRTL ? utils.endOfMonth(nextAvailableMonth) : newFocusedDayDefault,
          isDateDisabled,
          timezone
        });
        focusDay(closestDayToFocus || newFocusedDayDefault);
        event.preventDefault();
        break;
      }
      case "ArrowRight": {
        const newFocusedDayDefault = utils.addDays(day, isRTL ? -1 : 1);
        const nextAvailableMonth = utils.addMonths(day, isRTL ? -1 : 1);
        const closestDayToFocus = findClosestEnabledDate({
          utils,
          date: newFocusedDayDefault,
          minDate: isRTL ? utils.startOfMonth(nextAvailableMonth) : newFocusedDayDefault,
          maxDate: isRTL ? newFocusedDayDefault : utils.endOfMonth(nextAvailableMonth),
          isDateDisabled,
          timezone
        });
        focusDay(closestDayToFocus || newFocusedDayDefault);
        event.preventDefault();
        break;
      }
      case "Home":
        focusDay(utils.startOfWeek(day));
        event.preventDefault();
        break;
      case "End":
        focusDay(utils.endOfWeek(day));
        event.preventDefault();
        break;
      case "PageUp":
        focusDay(utils.addMonths(day, 1));
        event.preventDefault();
        break;
      case "PageDown":
        focusDay(utils.addMonths(day, -1));
        event.preventDefault();
        break;
    }
  });
  const handleFocus = useEventCallback((event, day) => focusDay(day));
  const handleBlur = useEventCallback((event, day) => {
    if (internalHasFocus && utils.isSameDay(internalFocusedDay, day)) {
      onFocusedViewChange == null || onFocusedViewChange(false);
    }
  });
  const currentMonthNumber = utils.getMonth(currentMonth);
  const validSelectedDays = reactExports.useMemo(() => selectedDays.filter((day) => !!day).map((day) => utils.startOfDay(day)), [utils, selectedDays]);
  const transitionKey = currentMonthNumber;
  const slideNodeRef = reactExports.useMemo(() => /* @__PURE__ */ reactExports.createRef(), [transitionKey]);
  const startOfCurrentWeek = utils.startOfWeek(now);
  const focusableDay = reactExports.useMemo(() => {
    const startOfMonth = utils.startOfMonth(currentMonth);
    const endOfMonth = utils.endOfMonth(currentMonth);
    if (isDateDisabled(internalFocusedDay) || utils.isAfterDay(internalFocusedDay, endOfMonth) || utils.isBeforeDay(internalFocusedDay, startOfMonth)) {
      return findClosestEnabledDate({
        utils,
        date: internalFocusedDay,
        minDate: startOfMonth,
        maxDate: endOfMonth,
        disablePast,
        disableFuture,
        isDateDisabled,
        timezone
      });
    }
    return internalFocusedDay;
  }, [currentMonth, disableFuture, disablePast, internalFocusedDay, isDateDisabled, utils, timezone]);
  const weeksToDisplay = reactExports.useMemo(() => {
    const currentMonthWithTimezone = utils.setTimezone(currentMonth, timezone);
    const toDisplay = utils.getWeekArray(currentMonthWithTimezone);
    let nextMonth = utils.addMonths(currentMonthWithTimezone, 1);
    while (fixedWeekNumber && toDisplay.length < fixedWeekNumber) {
      const additionalWeeks = utils.getWeekArray(nextMonth);
      const hasCommonWeek = utils.isSameDay(toDisplay[toDisplay.length - 1][0], additionalWeeks[0][0]);
      additionalWeeks.slice(hasCommonWeek ? 1 : 0).forEach((week) => {
        if (toDisplay.length < fixedWeekNumber) {
          toDisplay.push(week);
        }
      });
      nextMonth = utils.addMonths(nextMonth, 1);
    }
    return toDisplay;
  }, [currentMonth, fixedWeekNumber, utils, timezone]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PickersCalendarDayRoot, {
    role: "grid",
    "aria-labelledby": gridLabelId,
    className: classes.root,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsxs(PickersCalendarDayHeader, {
      role: "row",
      className: classes.header,
      children: [displayWeekNumber && /* @__PURE__ */ jsxRuntimeExports.jsx(PickersCalendarWeekNumberLabel, {
        variant: "caption",
        role: "columnheader",
        "aria-label": localeText.calendarWeekNumberHeaderLabel,
        className: classes.weekNumberLabel,
        children: localeText.calendarWeekNumberHeaderText
      }), getWeekdays(utils, now).map((weekday, i) => {
        var _dayOfWeekFormatter;
        const day = utils.format(weekday, "weekdayShort");
        return /* @__PURE__ */ jsxRuntimeExports.jsx(PickersCalendarWeekDayLabel, {
          variant: "caption",
          role: "columnheader",
          "aria-label": utils.format(utils.addDays(startOfCurrentWeek, i), "weekday"),
          className: classes.weekDayLabel,
          children: (_dayOfWeekFormatter = dayOfWeekFormatter == null ? void 0 : dayOfWeekFormatter(day, weekday)) != null ? _dayOfWeekFormatter : day
        }, day + i.toString());
      })]
    }), loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(PickersCalendarLoadingContainer, {
      className: classes.loadingContainer,
      children: renderLoading()
    }) : /* @__PURE__ */ jsxRuntimeExports.jsx(PickersCalendarSlideTransition, _extends$1({
      transKey: transitionKey,
      onExited: onMonthSwitchingAnimationEnd,
      reduceAnimations,
      slideDirection,
      className: clsx(className, classes.slideTransition)
    }, TransitionProps, {
      nodeRef: slideNodeRef,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(PickersCalendarWeekContainer, {
        ref: slideNodeRef,
        role: "rowgroup",
        className: classes.monthContainer,
        children: weeksToDisplay.map((week, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(PickersCalendarWeek, {
          role: "row",
          className: classes.weekContainer,
          "aria-rowindex": index + 1,
          children: [displayWeekNumber && /* @__PURE__ */ jsxRuntimeExports.jsx(PickersCalendarWeekNumber, {
            className: classes.weekNumber,
            role: "rowheader",
            "aria-label": localeText.calendarWeekNumberAriaLabelText(utils.getWeekNumber(week[0])),
            children: localeText.calendarWeekNumberText(utils.getWeekNumber(week[0]))
          }), week.map((day, dayIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx(WrappedDay, {
            parentProps: props,
            day,
            selectedDays: validSelectedDays,
            focusableDay,
            onKeyDown: handleKeyDown,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onDaySelect: handleDaySelect,
            isDateDisabled,
            currentMonthNumber,
            isViewFocused: internalHasFocus,
            "aria-colindex": dayIndex + 1
          }, day.toString()))]
        }, `week-${week[0]}`))
      })
    }))]
  });
}
const createCalendarStateReducer = (reduceAnimations, disableSwitchToMonthOnDayFocus, utils) => (state, action) => {
  switch (action.type) {
    case "changeMonth":
      return _extends$1({}, state, {
        slideDirection: action.direction,
        currentMonth: action.newMonth,
        isMonthSwitchingAnimating: !reduceAnimations
      });
    case "finishMonthSwitchingAnimation":
      return _extends$1({}, state, {
        isMonthSwitchingAnimating: false
      });
    case "changeFocusedDay": {
      if (state.focusedDay != null && action.focusedDay != null && utils.isSameDay(action.focusedDay, state.focusedDay)) {
        return state;
      }
      const needMonthSwitch = action.focusedDay != null && !disableSwitchToMonthOnDayFocus && !utils.isSameMonth(state.currentMonth, action.focusedDay);
      return _extends$1({}, state, {
        focusedDay: action.focusedDay,
        isMonthSwitchingAnimating: needMonthSwitch && !reduceAnimations && !action.withoutMonthSwitchingAnimation,
        currentMonth: needMonthSwitch ? utils.startOfMonth(action.focusedDay) : state.currentMonth,
        slideDirection: action.focusedDay != null && utils.isAfterDay(action.focusedDay, state.currentMonth) ? "left" : "right"
      });
    }
    default:
      throw new Error("missing support");
  }
};
const useCalendarState = (params) => {
  const {
    value,
    referenceDate: referenceDateProp,
    defaultCalendarMonth,
    disableFuture,
    disablePast,
    disableSwitchToMonthOnDayFocus = false,
    maxDate,
    minDate,
    onMonthChange,
    reduceAnimations,
    shouldDisableDate,
    timezone
  } = params;
  const utils = useUtils();
  const reducerFn = reactExports.useRef(createCalendarStateReducer(Boolean(reduceAnimations), disableSwitchToMonthOnDayFocus, utils)).current;
  const referenceDate = reactExports.useMemo(
    () => {
      let externalReferenceDate = null;
      if (referenceDateProp) {
        externalReferenceDate = referenceDateProp;
      } else if (defaultCalendarMonth) {
        externalReferenceDate = utils.startOfMonth(defaultCalendarMonth);
      }
      return singleItemValueManager.getInitialReferenceValue({
        value,
        utils,
        timezone,
        props: params,
        referenceDate: externalReferenceDate,
        granularity: SECTION_TYPE_GRANULARITY.day
      });
    },
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  );
  const [calendarState, dispatch] = reactExports.useReducer(reducerFn, {
    isMonthSwitchingAnimating: false,
    focusedDay: referenceDate,
    currentMonth: utils.startOfMonth(referenceDate),
    slideDirection: "left"
  });
  const handleChangeMonth = reactExports.useCallback((payload) => {
    dispatch(_extends$1({
      type: "changeMonth"
    }, payload));
    if (onMonthChange) {
      onMonthChange(payload.newMonth);
    }
  }, [onMonthChange]);
  const changeMonth = reactExports.useCallback((newDate) => {
    const newDateRequested = newDate;
    if (utils.isSameMonth(newDateRequested, calendarState.currentMonth)) {
      return;
    }
    handleChangeMonth({
      newMonth: utils.startOfMonth(newDateRequested),
      direction: utils.isAfterDay(newDateRequested, calendarState.currentMonth) ? "left" : "right"
    });
  }, [calendarState.currentMonth, handleChangeMonth, utils]);
  const isDateDisabled = useIsDateDisabled({
    shouldDisableDate,
    minDate,
    maxDate,
    disableFuture,
    disablePast,
    timezone
  });
  const onMonthSwitchingAnimationEnd = reactExports.useCallback(() => {
    dispatch({
      type: "finishMonthSwitchingAnimation"
    });
  }, []);
  const changeFocusedDay = useEventCallback((newFocusedDate, withoutMonthSwitchingAnimation) => {
    if (!isDateDisabled(newFocusedDate)) {
      dispatch({
        type: "changeFocusedDay",
        focusedDay: newFocusedDate,
        withoutMonthSwitchingAnimation
      });
    }
  });
  return {
    referenceDate,
    calendarState,
    changeMonth,
    changeFocusedDay,
    isDateDisabled,
    onMonthSwitchingAnimationEnd,
    handleChangeMonth
  };
};
const _excluded$a = ["props", "getOpenDialogAriaText"], _excluded2$2 = ["ownerState"], _excluded3$1 = ["ownerState"];
const useDesktopPicker = (_ref) => {
  var _innerSlotProps$toolb, _innerSlotProps$toolb2, _slots$inputAdornment, _slots$openPickerButt, _slots$layout;
  let {
    props,
    getOpenDialogAriaText
  } = _ref, pickerParams = _objectWithoutPropertiesLoose(_ref, _excluded$a);
  const {
    slots,
    slotProps: innerSlotProps,
    className,
    sx,
    format,
    formatDensity,
    timezone,
    name,
    label,
    inputRef,
    readOnly,
    disabled,
    autoFocus,
    localeText,
    reduceAnimations
  } = props;
  const utils = useUtils();
  const internalInputRef = reactExports.useRef(null);
  const containerRef = reactExports.useRef(null);
  const labelId = useId();
  const isToolbarHidden = (_innerSlotProps$toolb = innerSlotProps == null || (_innerSlotProps$toolb2 = innerSlotProps.toolbar) == null ? void 0 : _innerSlotProps$toolb2.hidden) != null ? _innerSlotProps$toolb : false;
  const {
    open,
    actions,
    hasUIView,
    layoutProps,
    renderCurrentView,
    shouldRestoreFocus,
    fieldProps: pickerFieldProps
  } = usePicker(_extends$1({}, pickerParams, {
    props,
    inputRef: internalInputRef,
    autoFocusView: true,
    additionalViewProps: {},
    wrapperVariant: "desktop"
  }));
  const InputAdornment$1 = (_slots$inputAdornment = slots.inputAdornment) != null ? _slots$inputAdornment : InputAdornment;
  const _useSlotProps = useSlotProps({
    elementType: InputAdornment$1,
    externalSlotProps: innerSlotProps == null ? void 0 : innerSlotProps.inputAdornment,
    additionalProps: {
      position: "end"
    },
    ownerState: props
  }), inputAdornmentProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded2$2);
  const OpenPickerButton = (_slots$openPickerButt = slots.openPickerButton) != null ? _slots$openPickerButt : IconButton;
  const _useSlotProps2 = useSlotProps({
    elementType: OpenPickerButton,
    externalSlotProps: innerSlotProps == null ? void 0 : innerSlotProps.openPickerButton,
    additionalProps: {
      disabled: disabled || readOnly,
      onClick: open ? actions.onClose : actions.onOpen,
      "aria-label": getOpenDialogAriaText(pickerFieldProps.value, utils),
      edge: inputAdornmentProps.position
    },
    ownerState: props
  }), openPickerButtonProps = _objectWithoutPropertiesLoose(_useSlotProps2, _excluded3$1);
  const OpenPickerIcon = slots.openPickerIcon;
  const Field = slots.field;
  const fieldProps = useSlotProps({
    elementType: Field,
    externalSlotProps: innerSlotProps == null ? void 0 : innerSlotProps.field,
    additionalProps: _extends$1({}, pickerFieldProps, isToolbarHidden && {
      id: labelId
    }, {
      readOnly,
      disabled,
      className,
      sx,
      format,
      formatDensity,
      timezone,
      label,
      name,
      autoFocus: autoFocus && !props.open,
      focused: open ? true : void 0
    }),
    ownerState: props
  });
  if (hasUIView) {
    fieldProps.InputProps = _extends$1({}, fieldProps.InputProps, {
      ref: containerRef
    }, !props.disableOpenPicker && {
      [`${inputAdornmentProps.position}Adornment`]: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment$1, _extends$1({}, inputAdornmentProps, {
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(OpenPickerButton, _extends$1({}, openPickerButtonProps, {
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(OpenPickerIcon, _extends$1({}, innerSlotProps == null ? void 0 : innerSlotProps.openPickerIcon))
        }))
      }))
    });
  }
  const slotsForField = _extends$1({
    textField: slots.textField,
    clearIcon: slots.clearIcon,
    clearButton: slots.clearButton
  }, fieldProps.slots);
  const Layout = (_slots$layout = slots.layout) != null ? _slots$layout : PickersLayout;
  const handleInputRef = useForkRef(internalInputRef, fieldProps.inputRef, inputRef);
  let labelledById = labelId;
  if (isToolbarHidden) {
    if (label) {
      labelledById = `${labelId}-label`;
    } else {
      labelledById = void 0;
    }
  }
  const slotProps = _extends$1({}, innerSlotProps, {
    toolbar: _extends$1({}, innerSlotProps == null ? void 0 : innerSlotProps.toolbar, {
      titleId: labelId
    }),
    popper: _extends$1({
      "aria-labelledby": labelledById
    }, innerSlotProps == null ? void 0 : innerSlotProps.popper)
  });
  const renderPicker = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(LocalizationProvider, {
    localeText,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Field, _extends$1({}, fieldProps, {
      slots: slotsForField,
      slotProps,
      inputRef: handleInputRef
    })), /* @__PURE__ */ jsxRuntimeExports.jsx(PickersPopper, _extends$1({
      role: "dialog",
      placement: "bottom-start",
      anchorEl: containerRef.current
    }, actions, {
      open,
      slots,
      slotProps,
      shouldRestoreFocus,
      reduceAnimations,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, _extends$1({}, layoutProps, slotProps == null ? void 0 : slotProps.layout, {
        slots,
        slotProps,
        children: renderCurrentView()
      }))
    }))]
  });
  return {
    renderPicker
  };
};
const useDefaultizedDateField = (props) => {
  var _props$disablePast, _props$disableFuture, _props$format;
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  return _extends$1({}, props, {
    disablePast: (_props$disablePast = props.disablePast) != null ? _props$disablePast : false,
    disableFuture: (_props$disableFuture = props.disableFuture) != null ? _props$disableFuture : false,
    format: (_props$format = props.format) != null ? _props$format : utils.formats.keyboardDate,
    minDate: applyDefaultDate(utils, props.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, props.maxDate, defaultDates.maxDate)
  });
};
const useDateField = ({
  props: inProps,
  inputRef
}) => {
  const props = useDefaultizedDateField(inProps);
  const {
    forwardedProps,
    internalProps
  } = splitFieldInternalAndForwardedProps(props);
  return useField({
    inputRef,
    forwardedProps,
    internalProps,
    valueManager: singleItemValueManager,
    fieldValueManager: singleItemFieldValueManager,
    validator: validateDate
  });
};
const _excluded$9 = ["ownerState"];
const useClearableField = ({
  clearable,
  fieldProps: forwardedFieldProps,
  InputProps: ForwardedInputProps,
  onClear,
  slots,
  slotProps,
  components,
  componentsProps
}) => {
  var _ref, _slots$clearButton, _slotProps$clearButto, _ref2, _slots$clearIcon, _slotProps$clearIcon;
  const localeText = useLocaleText();
  const IconButton$1 = (_ref = (_slots$clearButton = slots == null ? void 0 : slots.clearButton) != null ? _slots$clearButton : components == null ? void 0 : components.ClearButton) != null ? _ref : IconButton;
  const _useSlotProps = useSlotProps({
    elementType: IconButton$1,
    externalSlotProps: (_slotProps$clearButto = slotProps == null ? void 0 : slotProps.clearButton) != null ? _slotProps$clearButto : componentsProps == null ? void 0 : componentsProps.clearButton,
    ownerState: {},
    className: "clearButton",
    additionalProps: {
      title: localeText.fieldClearLabel
    }
  }), iconButtonProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded$9);
  const EndClearIcon = (_ref2 = (_slots$clearIcon = slots == null ? void 0 : slots.clearIcon) != null ? _slots$clearIcon : components == null ? void 0 : components.ClearIcon) != null ? _ref2 : ClearIcon;
  const endClearIconProps = useSlotProps({
    elementType: EndClearIcon,
    externalSlotProps: (_slotProps$clearIcon = slotProps == null ? void 0 : slotProps.clearIcon) != null ? _slotProps$clearIcon : componentsProps == null ? void 0 : componentsProps.clearIcon,
    ownerState: {}
  });
  const InputProps = _extends$1({}, ForwardedInputProps, {
    endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
      children: [clearable && /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, {
        position: "end",
        sx: {
          marginRight: ForwardedInputProps != null && ForwardedInputProps.endAdornment ? -1 : -1.5
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton$1, _extends$1({}, iconButtonProps, {
          onClick: onClear,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(EndClearIcon, _extends$1({
            fontSize: "small"
          }, endClearIconProps))
        }))
      }), ForwardedInputProps == null ? void 0 : ForwardedInputProps.endAdornment]
    })
  });
  const fieldProps = _extends$1({}, forwardedFieldProps, {
    sx: [{
      "& .clearButton": {
        opacity: 1
      },
      "@media (pointer: fine)": {
        "& .clearButton": {
          opacity: 0
        },
        "&:hover, &:focus-within": {
          ".clearButton": {
            opacity: 1
          }
        }
      }
    }, ...Array.isArray(forwardedFieldProps.sx) ? forwardedFieldProps.sx : [forwardedFieldProps.sx]]
  });
  return {
    InputProps,
    fieldProps
  };
};
const _excluded$8 = ["components", "componentsProps", "slots", "slotProps", "InputProps", "inputProps"], _excluded2$1 = ["inputRef"], _excluded3 = ["ref", "onPaste", "onKeyDown", "inputMode", "readOnly", "clearable", "onClear"];
const DateField = /* @__PURE__ */ reactExports.forwardRef(function DateField2(inProps, ref) {
  var _ref, _slots$textField, _slotProps$textField;
  const themeProps = useThemeProps({
    props: inProps,
    name: "MuiDateField"
  });
  const {
    components,
    componentsProps,
    slots,
    slotProps,
    InputProps,
    inputProps
  } = themeProps, other = _objectWithoutPropertiesLoose(themeProps, _excluded$8);
  const ownerState = themeProps;
  const TextField$1 = (_ref = (_slots$textField = slots == null ? void 0 : slots.textField) != null ? _slots$textField : components == null ? void 0 : components.TextField) != null ? _ref : TextField;
  const _useSlotProps = useSlotProps({
    elementType: TextField$1,
    externalSlotProps: (_slotProps$textField = slotProps == null ? void 0 : slotProps.textField) != null ? _slotProps$textField : componentsProps == null ? void 0 : componentsProps.textField,
    externalForwardedProps: other,
    ownerState
  }), {
    inputRef: externalInputRef
  } = _useSlotProps, textFieldProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded2$1);
  textFieldProps.inputProps = _extends$1({}, inputProps, textFieldProps.inputProps);
  textFieldProps.InputProps = _extends$1({}, InputProps, textFieldProps.InputProps);
  const _useDateField = useDateField({
    props: textFieldProps,
    inputRef: externalInputRef
  }), {
    ref: inputRef,
    onPaste,
    onKeyDown,
    inputMode,
    readOnly,
    clearable,
    onClear
  } = _useDateField, fieldProps = _objectWithoutPropertiesLoose(_useDateField, _excluded3);
  const {
    InputProps: ProcessedInputProps,
    fieldProps: processedFieldProps
  } = useClearableField({
    onClear,
    clearable,
    fieldProps,
    InputProps: fieldProps.InputProps,
    slots,
    slotProps,
    components,
    componentsProps
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TextField$1, _extends$1({
    ref
  }, processedFieldProps, {
    InputProps: _extends$1({}, ProcessedInputProps, {
      readOnly
    }),
    inputProps: _extends$1({}, fieldProps.inputProps, {
      inputMode,
      onPaste,
      onKeyDown,
      ref: inputRef
    })
  }));
});
const getPickersFadeTransitionGroupUtilityClass = (slot) => generateUtilityClass("MuiPickersFadeTransitionGroup", slot);
generateUtilityClasses("MuiPickersFadeTransitionGroup", ["root"]);
const useUtilityClasses$6 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getPickersFadeTransitionGroupUtilityClass, classes);
};
const PickersFadeTransitionGroupRoot = styled(TransitionGroup, {
  name: "MuiPickersFadeTransitionGroup",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})({
  display: "block",
  position: "relative"
});
function PickersFadeTransitionGroup(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersFadeTransitionGroup"
  });
  const {
    children,
    className,
    reduceAnimations,
    transKey
  } = props;
  const classes = useUtilityClasses$6(props);
  const theme = useTheme();
  if (reduceAnimations) {
    return children;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PickersFadeTransitionGroupRoot, {
    className: clsx(classes.root, className),
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Fade, {
      appear: false,
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: {
        appear: theme.transitions.duration.enteringScreen,
        enter: theme.transitions.duration.enteringScreen,
        exit: 0
      },
      children
    }, transKey)
  });
}
function getPickersMonthUtilityClass(slot) {
  return generateUtilityClass("MuiPickersMonth", slot);
}
const pickersMonthClasses = generateUtilityClasses("MuiPickersMonth", ["root", "monthButton", "disabled", "selected"]);
const _excluded$7 = ["autoFocus", "children", "disabled", "selected", "value", "tabIndex", "onClick", "onKeyDown", "onFocus", "onBlur", "aria-current", "aria-label", "monthsPerRow"];
const useUtilityClasses$5 = (ownerState) => {
  const {
    disabled,
    selected,
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    monthButton: ["monthButton", disabled && "disabled", selected && "selected"]
  };
  return composeClasses(slots, getPickersMonthUtilityClass, classes);
};
const PickersMonthRoot = styled("div", {
  name: "MuiPickersMonth",
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root]
})(({
  ownerState
}) => ({
  flexBasis: ownerState.monthsPerRow === 3 ? "33.3%" : "25%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));
const PickersMonthButton = styled("button", {
  name: "MuiPickersMonth",
  slot: "MonthButton",
  overridesResolver: (_, styles) => [styles.monthButton, {
    [`&.${pickersMonthClasses.disabled}`]: styles.disabled
  }, {
    [`&.${pickersMonthClasses.selected}`]: styles.selected
  }]
})(({
  theme
}) => _extends$1({
  color: "unset",
  backgroundColor: "transparent",
  border: 0,
  outline: 0
}, theme.typography.subtitle1, {
  margin: "8px 0",
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: "pointer",
  "&:focus": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  "&:disabled": {
    cursor: "auto",
    pointerEvents: "none"
  },
  [`&.${pickersMonthClasses.disabled}`]: {
    color: (theme.vars || theme).palette.text.secondary
  },
  [`&.${pickersMonthClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText,
    backgroundColor: (theme.vars || theme).palette.primary.main,
    "&:focus, &:hover": {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  }
}));
const PickersMonth = /* @__PURE__ */ reactExports.memo(function PickersMonth2(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersMonth"
  });
  const {
    autoFocus,
    children,
    disabled,
    selected,
    value,
    tabIndex,
    onClick,
    onKeyDown,
    onFocus,
    onBlur: onBlur3,
    "aria-current": ariaCurrent,
    "aria-label": ariaLabel
    // We don't want to forward this prop to the root element
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$7);
  const ref = reactExports.useRef(null);
  const classes = useUtilityClasses$5(props);
  useEnhancedEffect(() => {
    if (autoFocus) {
      var _ref$current;
      (_ref$current = ref.current) == null || _ref$current.focus();
    }
  }, [autoFocus]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PickersMonthRoot, _extends$1({
    className: classes.root,
    ownerState: props
  }, other, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(PickersMonthButton, {
      ref,
      disabled,
      type: "button",
      role: "radio",
      tabIndex: disabled ? -1 : tabIndex,
      "aria-current": ariaCurrent,
      "aria-checked": selected,
      "aria-label": ariaLabel,
      onClick: (event) => onClick(event, value),
      onKeyDown: (event) => onKeyDown(event, value),
      onFocus: (event) => onFocus(event, value),
      onBlur: (event) => onBlur3(event, value),
      className: classes.monthButton,
      ownerState: props,
      children
    })
  }));
});
function getMonthCalendarUtilityClass(slot) {
  return generateUtilityClass("MuiMonthCalendar", slot);
}
generateUtilityClasses("MuiMonthCalendar", ["root"]);
const _excluded$6 = ["className", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "shouldDisableMonth", "readOnly", "disableHighlightToday", "autoFocus", "onMonthFocus", "hasFocus", "onFocusedViewChange", "monthsPerRow", "timezone", "gridLabelId"];
const useUtilityClasses$4 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getMonthCalendarUtilityClass, classes);
};
function useMonthCalendarDefaultizedProps(props, name) {
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const themeProps = useThemeProps({
    props,
    name
  });
  return _extends$1({
    disableFuture: false,
    disablePast: false
  }, themeProps, {
    minDate: applyDefaultDate(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, themeProps.maxDate, defaultDates.maxDate)
  });
}
const MonthCalendarRoot = styled("div", {
  name: "MuiMonthCalendar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "flex",
  flexWrap: "wrap",
  alignContent: "stretch",
  padding: "0 4px",
  width: DIALOG_WIDTH,
  // avoid padding increasing width over defined
  boxSizing: "border-box"
});
const MonthCalendar = /* @__PURE__ */ reactExports.forwardRef(function MonthCalendar2(inProps, ref) {
  const props = useMonthCalendarDefaultizedProps(inProps, "MuiMonthCalendar");
  const {
    className,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    disabled,
    disableFuture,
    disablePast,
    maxDate,
    minDate,
    onChange: onChange3,
    shouldDisableMonth,
    readOnly,
    disableHighlightToday,
    autoFocus = false,
    onMonthFocus,
    hasFocus,
    onFocusedViewChange,
    monthsPerRow = 3,
    timezone: timezoneProp,
    gridLabelId
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$6);
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValueWithTimezone({
    name: "MonthCalendar",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    onChange: onChange3,
    valueManager: singleItemValueManager
  });
  const now = useNow(timezone);
  const theme = useTheme$1();
  const utils = useUtils();
  const referenceDate = reactExports.useMemo(
    () => singleItemValueManager.getInitialReferenceValue({
      value,
      utils,
      props,
      timezone,
      referenceDate: referenceDateProp,
      granularity: SECTION_TYPE_GRANULARITY.month
    }),
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  );
  const ownerState = props;
  const classes = useUtilityClasses$4(ownerState);
  const todayMonth = reactExports.useMemo(() => utils.getMonth(now), [utils, now]);
  const selectedMonth = reactExports.useMemo(() => {
    if (value != null) {
      return utils.getMonth(value);
    }
    if (disableHighlightToday) {
      return null;
    }
    return utils.getMonth(referenceDate);
  }, [value, utils, disableHighlightToday, referenceDate]);
  const [focusedMonth, setFocusedMonth] = reactExports.useState(() => selectedMonth || todayMonth);
  const [internalHasFocus, setInternalHasFocus] = useControlled({
    name: "MonthCalendar",
    state: "hasFocus",
    controlled: hasFocus,
    default: autoFocus != null ? autoFocus : false
  });
  const changeHasFocus = useEventCallback((newHasFocus) => {
    setInternalHasFocus(newHasFocus);
    if (onFocusedViewChange) {
      onFocusedViewChange(newHasFocus);
    }
  });
  const isMonthDisabled = reactExports.useCallback((dateToValidate) => {
    const firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, minDate) ? now : minDate);
    const lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, maxDate) ? now : maxDate);
    const monthToValidate = utils.startOfMonth(dateToValidate);
    if (utils.isBefore(monthToValidate, firstEnabledMonth)) {
      return true;
    }
    if (utils.isAfter(monthToValidate, lastEnabledMonth)) {
      return true;
    }
    if (!shouldDisableMonth) {
      return false;
    }
    return shouldDisableMonth(monthToValidate);
  }, [disableFuture, disablePast, maxDate, minDate, now, shouldDisableMonth, utils]);
  const handleMonthSelection = useEventCallback((event, month) => {
    if (readOnly) {
      return;
    }
    const newDate = utils.setMonth(value != null ? value : referenceDate, month);
    handleValueChange(newDate);
  });
  const focusMonth = useEventCallback((month) => {
    if (!isMonthDisabled(utils.setMonth(value != null ? value : referenceDate, month))) {
      setFocusedMonth(month);
      changeHasFocus(true);
      if (onMonthFocus) {
        onMonthFocus(month);
      }
    }
  });
  reactExports.useEffect(() => {
    setFocusedMonth((prevFocusedMonth) => selectedMonth !== null && prevFocusedMonth !== selectedMonth ? selectedMonth : prevFocusedMonth);
  }, [selectedMonth]);
  const handleKeyDown = useEventCallback((event, month) => {
    const monthsInYear = 12;
    const monthsInRow = 3;
    switch (event.key) {
      case "ArrowUp":
        focusMonth((monthsInYear + month - monthsInRow) % monthsInYear);
        event.preventDefault();
        break;
      case "ArrowDown":
        focusMonth((monthsInYear + month + monthsInRow) % monthsInYear);
        event.preventDefault();
        break;
      case "ArrowLeft":
        focusMonth((monthsInYear + month + (theme.direction === "ltr" ? -1 : 1)) % monthsInYear);
        event.preventDefault();
        break;
      case "ArrowRight":
        focusMonth((monthsInYear + month + (theme.direction === "ltr" ? 1 : -1)) % monthsInYear);
        event.preventDefault();
        break;
    }
  });
  const handleMonthFocus = useEventCallback((event, month) => {
    focusMonth(month);
  });
  const handleMonthBlur = useEventCallback((event, month) => {
    if (focusedMonth === month) {
      changeHasFocus(false);
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MonthCalendarRoot, _extends$1({
    ref,
    className: clsx(classes.root, className),
    ownerState,
    role: "radiogroup",
    "aria-labelledby": gridLabelId
  }, other, {
    children: getMonthsInYear(utils, value != null ? value : referenceDate).map((month) => {
      const monthNumber = utils.getMonth(month);
      const monthText = utils.format(month, "monthShort");
      const monthLabel = utils.format(month, "month");
      const isSelected = monthNumber === selectedMonth;
      const isDisabled = disabled || isMonthDisabled(month);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(PickersMonth, {
        selected: isSelected,
        value: monthNumber,
        onClick: handleMonthSelection,
        onKeyDown: handleKeyDown,
        autoFocus: internalHasFocus && monthNumber === focusedMonth,
        disabled: isDisabled,
        tabIndex: monthNumber === focusedMonth ? 0 : -1,
        onFocus: handleMonthFocus,
        onBlur: handleMonthBlur,
        "aria-current": todayMonth === monthNumber ? "date" : void 0,
        "aria-label": monthLabel,
        monthsPerRow,
        children: monthText
      }, monthText);
    })
  }));
});
function getPickersYearUtilityClass(slot) {
  return generateUtilityClass("MuiPickersYear", slot);
}
const pickersYearClasses = generateUtilityClasses("MuiPickersYear", ["root", "yearButton", "selected", "disabled"]);
const _excluded$5 = ["autoFocus", "className", "children", "disabled", "selected", "value", "tabIndex", "onClick", "onKeyDown", "onFocus", "onBlur", "aria-current", "yearsPerRow"];
const useUtilityClasses$3 = (ownerState) => {
  const {
    disabled,
    selected,
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    yearButton: ["yearButton", disabled && "disabled", selected && "selected"]
  };
  return composeClasses(slots, getPickersYearUtilityClass, classes);
};
const PickersYearRoot = styled("div", {
  name: "MuiPickersYear",
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root]
})(({
  ownerState
}) => ({
  flexBasis: ownerState.yearsPerRow === 3 ? "33.3%" : "25%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));
const PickersYearButton = styled("button", {
  name: "MuiPickersYear",
  slot: "YearButton",
  overridesResolver: (_, styles) => [styles.yearButton, {
    [`&.${pickersYearClasses.disabled}`]: styles.disabled
  }, {
    [`&.${pickersYearClasses.selected}`]: styles.selected
  }]
})(({
  theme
}) => _extends$1({
  color: "unset",
  backgroundColor: "transparent",
  border: 0,
  outline: 0
}, theme.typography.subtitle1, {
  margin: "6px 0",
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: "pointer",
  "&:focus": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.action.active, theme.palette.action.focusOpacity)
  },
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  "&:disabled": {
    cursor: "auto",
    pointerEvents: "none"
  },
  [`&.${pickersYearClasses.disabled}`]: {
    color: (theme.vars || theme).palette.text.secondary
  },
  [`&.${pickersYearClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText,
    backgroundColor: (theme.vars || theme).palette.primary.main,
    "&:focus, &:hover": {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  }
}));
const PickersYear = /* @__PURE__ */ reactExports.memo(function PickersYear2(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersYear"
  });
  const {
    autoFocus,
    className,
    children,
    disabled,
    selected,
    value,
    tabIndex,
    onClick,
    onKeyDown,
    onFocus,
    onBlur: onBlur3,
    "aria-current": ariaCurrent
    // We don't want to forward this prop to the root element
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$5);
  const ref = reactExports.useRef(null);
  const classes = useUtilityClasses$3(props);
  reactExports.useEffect(() => {
    if (autoFocus) {
      ref.current.focus();
    }
  }, [autoFocus]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PickersYearRoot, _extends$1({
    className: clsx(classes.root, className),
    ownerState: props
  }, other, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(PickersYearButton, {
      ref,
      disabled,
      type: "button",
      role: "radio",
      tabIndex: disabled ? -1 : tabIndex,
      "aria-current": ariaCurrent,
      "aria-checked": selected,
      onClick: (event) => onClick(event, value),
      onKeyDown: (event) => onKeyDown(event, value),
      onFocus: (event) => onFocus(event, value),
      onBlur: (event) => onBlur3(event, value),
      className: classes.yearButton,
      ownerState: props,
      children
    })
  }));
});
function getYearCalendarUtilityClass(slot) {
  return generateUtilityClass("MuiYearCalendar", slot);
}
generateUtilityClasses("MuiYearCalendar", ["root"]);
const _excluded$4 = ["autoFocus", "className", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "readOnly", "shouldDisableYear", "disableHighlightToday", "onYearFocus", "hasFocus", "onFocusedViewChange", "yearsPerRow", "timezone", "gridLabelId"];
const useUtilityClasses$2 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getYearCalendarUtilityClass, classes);
};
function useYearCalendarDefaultizedProps(props, name) {
  var _themeProps$yearsPerR;
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const themeProps = useThemeProps({
    props,
    name
  });
  return _extends$1({
    disablePast: false,
    disableFuture: false
  }, themeProps, {
    yearsPerRow: (_themeProps$yearsPerR = themeProps.yearsPerRow) != null ? _themeProps$yearsPerR : 3,
    minDate: applyDefaultDate(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, themeProps.maxDate, defaultDates.maxDate)
  });
}
const YearCalendarRoot = styled("div", {
  name: "MuiYearCalendar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  overflowY: "auto",
  height: "100%",
  padding: "0 4px",
  width: DIALOG_WIDTH,
  maxHeight: MAX_CALENDAR_HEIGHT,
  // avoid padding increasing width over defined
  boxSizing: "border-box",
  position: "relative"
});
const YearCalendar = /* @__PURE__ */ reactExports.forwardRef(function YearCalendar2(inProps, ref) {
  const props = useYearCalendarDefaultizedProps(inProps, "MuiYearCalendar");
  const {
    autoFocus,
    className,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    disabled,
    disableFuture,
    disablePast,
    maxDate,
    minDate,
    onChange: onChange3,
    readOnly,
    shouldDisableYear,
    disableHighlightToday,
    onYearFocus,
    hasFocus,
    onFocusedViewChange,
    yearsPerRow,
    timezone: timezoneProp,
    gridLabelId
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$4);
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValueWithTimezone({
    name: "YearCalendar",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    onChange: onChange3,
    valueManager: singleItemValueManager
  });
  const now = useNow(timezone);
  const theme = useTheme$1();
  const utils = useUtils();
  const referenceDate = reactExports.useMemo(
    () => singleItemValueManager.getInitialReferenceValue({
      value,
      utils,
      props,
      timezone,
      referenceDate: referenceDateProp,
      granularity: SECTION_TYPE_GRANULARITY.year
    }),
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  );
  const ownerState = props;
  const classes = useUtilityClasses$2(ownerState);
  const todayYear = reactExports.useMemo(() => utils.getYear(now), [utils, now]);
  const selectedYear = reactExports.useMemo(() => {
    if (value != null) {
      return utils.getYear(value);
    }
    if (disableHighlightToday) {
      return null;
    }
    return utils.getYear(referenceDate);
  }, [value, utils, disableHighlightToday, referenceDate]);
  const [focusedYear, setFocusedYear] = reactExports.useState(() => selectedYear || todayYear);
  const [internalHasFocus, setInternalHasFocus] = useControlled({
    name: "YearCalendar",
    state: "hasFocus",
    controlled: hasFocus,
    default: autoFocus != null ? autoFocus : false
  });
  const changeHasFocus = useEventCallback((newHasFocus) => {
    setInternalHasFocus(newHasFocus);
    if (onFocusedViewChange) {
      onFocusedViewChange(newHasFocus);
    }
  });
  const isYearDisabled = reactExports.useCallback((dateToValidate) => {
    if (disablePast && utils.isBeforeYear(dateToValidate, now)) {
      return true;
    }
    if (disableFuture && utils.isAfterYear(dateToValidate, now)) {
      return true;
    }
    if (minDate && utils.isBeforeYear(dateToValidate, minDate)) {
      return true;
    }
    if (maxDate && utils.isAfterYear(dateToValidate, maxDate)) {
      return true;
    }
    if (!shouldDisableYear) {
      return false;
    }
    const yearToValidate = utils.startOfYear(dateToValidate);
    return shouldDisableYear(yearToValidate);
  }, [disableFuture, disablePast, maxDate, minDate, now, shouldDisableYear, utils]);
  const handleYearSelection = useEventCallback((event, year) => {
    if (readOnly) {
      return;
    }
    const newDate = utils.setYear(value != null ? value : referenceDate, year);
    handleValueChange(newDate);
  });
  const focusYear = useEventCallback((year) => {
    if (!isYearDisabled(utils.setYear(value != null ? value : referenceDate, year))) {
      setFocusedYear(year);
      changeHasFocus(true);
      onYearFocus == null || onYearFocus(year);
    }
  });
  reactExports.useEffect(() => {
    setFocusedYear((prevFocusedYear) => selectedYear !== null && prevFocusedYear !== selectedYear ? selectedYear : prevFocusedYear);
  }, [selectedYear]);
  const handleKeyDown = useEventCallback((event, year) => {
    switch (event.key) {
      case "ArrowUp":
        focusYear(year - yearsPerRow);
        event.preventDefault();
        break;
      case "ArrowDown":
        focusYear(year + yearsPerRow);
        event.preventDefault();
        break;
      case "ArrowLeft":
        focusYear(year + (theme.direction === "ltr" ? -1 : 1));
        event.preventDefault();
        break;
      case "ArrowRight":
        focusYear(year + (theme.direction === "ltr" ? 1 : -1));
        event.preventDefault();
        break;
    }
  });
  const handleYearFocus = useEventCallback((event, year) => {
    focusYear(year);
  });
  const handleYearBlur = useEventCallback((event, year) => {
    if (focusedYear === year) {
      changeHasFocus(false);
    }
  });
  const scrollerRef = reactExports.useRef(null);
  const handleRef = useForkRef(ref, scrollerRef);
  reactExports.useEffect(() => {
    if (autoFocus || scrollerRef.current === null) {
      return;
    }
    const tabbableButton = scrollerRef.current.querySelector('[tabindex="0"]');
    if (!tabbableButton) {
      return;
    }
    const offsetHeight = tabbableButton.offsetHeight;
    const offsetTop = tabbableButton.offsetTop;
    const clientHeight = scrollerRef.current.clientHeight;
    const scrollTop = scrollerRef.current.scrollTop;
    const elementBottom = offsetTop + offsetHeight;
    if (offsetHeight > clientHeight || offsetTop < scrollTop) {
      return;
    }
    scrollerRef.current.scrollTop = elementBottom - clientHeight / 2 - offsetHeight / 2;
  }, [autoFocus]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(YearCalendarRoot, _extends$1({
    ref: handleRef,
    className: clsx(classes.root, className),
    ownerState,
    role: "radiogroup",
    "aria-labelledby": gridLabelId
  }, other, {
    children: utils.getYearRange(minDate, maxDate).map((year) => {
      const yearNumber = utils.getYear(year);
      const isSelected = yearNumber === selectedYear;
      const isDisabled = disabled || isYearDisabled(year);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(PickersYear, {
        selected: isSelected,
        value: yearNumber,
        onClick: handleYearSelection,
        onKeyDown: handleKeyDown,
        autoFocus: internalHasFocus && yearNumber === focusedYear,
        disabled: isDisabled,
        tabIndex: yearNumber === focusedYear ? 0 : -1,
        onFocus: handleYearFocus,
        onBlur: handleYearBlur,
        "aria-current": todayYear === yearNumber ? "date" : void 0,
        yearsPerRow,
        children: utils.format(year, "year")
      }, utils.format(year, "year"));
    })
  }));
});
const getPickersCalendarHeaderUtilityClass = (slot) => generateUtilityClass("MuiPickersCalendarHeader", slot);
const pickersCalendarHeaderClasses = generateUtilityClasses("MuiPickersCalendarHeader", ["root", "labelContainer", "label", "switchViewButton", "switchViewIcon"]);
const _excluded$3 = ["slots", "slotProps", "components", "componentsProps", "currentMonth", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onMonthChange", "onViewChange", "view", "reduceAnimations", "views", "labelId", "className", "timezone"], _excluded2 = ["ownerState"];
const useUtilityClasses$1 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    labelContainer: ["labelContainer"],
    label: ["label"],
    switchViewButton: ["switchViewButton"],
    switchViewIcon: ["switchViewIcon"]
  };
  return composeClasses(slots, getPickersCalendarHeaderUtilityClass, classes);
};
const PickersCalendarHeaderRoot = styled("div", {
  name: "MuiPickersCalendarHeader",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})({
  display: "flex",
  alignItems: "center",
  marginTop: 16,
  marginBottom: 8,
  paddingLeft: 24,
  paddingRight: 12,
  // prevent jumping in safari
  maxHeight: 30,
  minHeight: 30
});
const PickersCalendarHeaderLabelContainer = styled("div", {
  name: "MuiPickersCalendarHeader",
  slot: "LabelContainer",
  overridesResolver: (_, styles) => styles.labelContainer
})(({
  theme
}) => _extends$1({
  display: "flex",
  overflow: "hidden",
  alignItems: "center",
  cursor: "pointer",
  marginRight: "auto"
}, theme.typography.body1, {
  fontWeight: theme.typography.fontWeightMedium
}));
const PickersCalendarHeaderLabel = styled("div", {
  name: "MuiPickersCalendarHeader",
  slot: "Label",
  overridesResolver: (_, styles) => styles.label
})({
  marginRight: 6
});
const PickersCalendarHeaderSwitchViewButton = styled(IconButton, {
  name: "MuiPickersCalendarHeader",
  slot: "SwitchViewButton",
  overridesResolver: (_, styles) => styles.switchViewButton
})(({
  ownerState
}) => _extends$1({
  marginRight: "auto"
}, ownerState.view === "year" && {
  [`.${pickersCalendarHeaderClasses.switchViewIcon}`]: {
    transform: "rotate(180deg)"
  }
}));
const PickersCalendarHeaderSwitchViewIcon = styled(ArrowDropDownIcon, {
  name: "MuiPickersCalendarHeader",
  slot: "SwitchViewIcon",
  overridesResolver: (_, styles) => styles.switchViewIcon
})(({
  theme
}) => ({
  willChange: "transform",
  transition: theme.transitions.create("transform"),
  transform: "rotate(0deg)"
}));
const PickersCalendarHeader = /* @__PURE__ */ reactExports.forwardRef(function PickersCalendarHeader2(inProps, ref) {
  var _ref, _slots$switchViewButt, _ref2, _slots$switchViewIcon;
  const localeText = useLocaleText();
  const utils = useUtils();
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersCalendarHeader"
  });
  const {
    slots,
    slotProps,
    components,
    currentMonth: month,
    disabled,
    disableFuture,
    disablePast,
    maxDate,
    minDate,
    onMonthChange,
    onViewChange,
    view,
    reduceAnimations,
    views,
    labelId,
    className,
    timezone
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$3);
  const ownerState = props;
  const classes = useUtilityClasses$1(props);
  const SwitchViewButton = (_ref = (_slots$switchViewButt = slots == null ? void 0 : slots.switchViewButton) != null ? _slots$switchViewButt : components == null ? void 0 : components.SwitchViewButton) != null ? _ref : PickersCalendarHeaderSwitchViewButton;
  const switchViewButtonProps = useSlotProps({
    elementType: SwitchViewButton,
    externalSlotProps: slotProps == null ? void 0 : slotProps.switchViewButton,
    additionalProps: {
      size: "small",
      "aria-label": localeText.calendarViewSwitchingButtonAriaLabel(view)
    },
    ownerState,
    className: classes.switchViewButton
  });
  const SwitchViewIcon = (_ref2 = (_slots$switchViewIcon = slots == null ? void 0 : slots.switchViewIcon) != null ? _slots$switchViewIcon : components == null ? void 0 : components.SwitchViewIcon) != null ? _ref2 : PickersCalendarHeaderSwitchViewIcon;
  const _useSlotProps = useSlotProps({
    elementType: SwitchViewIcon,
    externalSlotProps: slotProps == null ? void 0 : slotProps.switchViewIcon,
    ownerState: void 0,
    className: classes.switchViewIcon
  }), switchViewIconProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded2);
  const selectNextMonth = () => onMonthChange(utils.addMonths(month, 1), "left");
  const selectPreviousMonth = () => onMonthChange(utils.addMonths(month, -1), "right");
  const isNextMonthDisabled = useNextMonthDisabled(month, {
    disableFuture,
    maxDate,
    timezone
  });
  const isPreviousMonthDisabled = usePreviousMonthDisabled(month, {
    disablePast,
    minDate,
    timezone
  });
  const handleToggleView = () => {
    if (views.length === 1 || !onViewChange || disabled) {
      return;
    }
    if (views.length === 2) {
      onViewChange(views.find((el) => el !== view) || views[0]);
    } else {
      const nextIndexToOpen = views.indexOf(view) !== 0 ? 0 : 1;
      onViewChange(views[nextIndexToOpen]);
    }
  };
  if (views.length === 1 && views[0] === "year") {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PickersCalendarHeaderRoot, _extends$1({}, other, {
    ownerState,
    className: clsx(className, classes.root),
    ref,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsxs(PickersCalendarHeaderLabelContainer, {
      role: "presentation",
      onClick: handleToggleView,
      ownerState,
      "aria-live": "polite",
      className: classes.labelContainer,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(PickersFadeTransitionGroup, {
        reduceAnimations,
        transKey: utils.format(month, "monthAndYear"),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(PickersCalendarHeaderLabel, {
          id: labelId,
          ownerState,
          className: classes.label,
          children: utils.format(month, "monthAndYear")
        })
      }), views.length > 1 && !disabled && /* @__PURE__ */ jsxRuntimeExports.jsx(SwitchViewButton, _extends$1({}, switchViewButtonProps, {
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SwitchViewIcon, _extends$1({}, switchViewIconProps))
      }))]
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Fade, {
      in: view === "day",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(PickersArrowSwitcher, {
        slots,
        slotProps,
        onGoToPrevious: selectPreviousMonth,
        isPreviousDisabled: isPreviousMonthDisabled,
        previousLabel: localeText.previousMonth,
        onGoToNext: selectNextMonth,
        isNextDisabled: isNextMonthDisabled,
        nextLabel: localeText.nextMonth
      })
    })]
  }));
});
const PickerViewRoot = styled("div")({
  overflow: "hidden",
  width: DIALOG_WIDTH,
  maxHeight: VIEW_HEIGHT,
  display: "flex",
  flexDirection: "column",
  margin: "0 auto"
});
const getDateCalendarUtilityClass = (slot) => generateUtilityClass("MuiDateCalendar", slot);
generateUtilityClasses("MuiDateCalendar", ["root", "viewTransitionContainer"]);
const _excluded$2 = ["autoFocus", "onViewChange", "value", "defaultValue", "referenceDate", "disableFuture", "disablePast", "defaultCalendarMonth", "onChange", "onYearChange", "onMonthChange", "reduceAnimations", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear", "view", "views", "openTo", "className", "disabled", "readOnly", "minDate", "maxDate", "disableHighlightToday", "focusedView", "onFocusedViewChange", "showDaysOutsideCurrentMonth", "fixedWeekNumber", "dayOfWeekFormatter", "components", "componentsProps", "slots", "slotProps", "loading", "renderLoading", "displayWeekNumber", "yearsPerRow", "monthsPerRow", "timezone"];
const useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    viewTransitionContainer: ["viewTransitionContainer"]
  };
  return composeClasses(slots, getDateCalendarUtilityClass, classes);
};
function useDateCalendarDefaultizedProps(props, name) {
  var _themeProps$loading, _themeProps$disablePa, _themeProps$disableFu, _themeProps$openTo, _themeProps$views, _themeProps$reduceAni, _themeProps$renderLoa;
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const defaultReduceAnimations = useDefaultReduceAnimations();
  const themeProps = useThemeProps({
    props,
    name
  });
  return _extends$1({}, themeProps, {
    loading: (_themeProps$loading = themeProps.loading) != null ? _themeProps$loading : false,
    disablePast: (_themeProps$disablePa = themeProps.disablePast) != null ? _themeProps$disablePa : false,
    disableFuture: (_themeProps$disableFu = themeProps.disableFuture) != null ? _themeProps$disableFu : false,
    openTo: (_themeProps$openTo = themeProps.openTo) != null ? _themeProps$openTo : "day",
    views: (_themeProps$views = themeProps.views) != null ? _themeProps$views : ["year", "day"],
    reduceAnimations: (_themeProps$reduceAni = themeProps.reduceAnimations) != null ? _themeProps$reduceAni : defaultReduceAnimations,
    renderLoading: (_themeProps$renderLoa = themeProps.renderLoading) != null ? _themeProps$renderLoa : () => /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "..."
    }),
    minDate: applyDefaultDate(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, themeProps.maxDate, defaultDates.maxDate)
  });
}
const DateCalendarRoot = styled(PickerViewRoot, {
  name: "MuiDateCalendar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "flex",
  flexDirection: "column",
  height: VIEW_HEIGHT
});
const DateCalendarViewTransitionContainer = styled(PickersFadeTransitionGroup, {
  name: "MuiDateCalendar",
  slot: "ViewTransitionContainer",
  overridesResolver: (props, styles) => styles.viewTransitionContainer
})({});
const DateCalendar = /* @__PURE__ */ reactExports.forwardRef(function DateCalendar2(inProps, ref) {
  var _ref, _slots$calendarHeader, _slotProps$calendarHe;
  const utils = useUtils();
  const id = useId();
  const props = useDateCalendarDefaultizedProps(inProps, "MuiDateCalendar");
  const {
    autoFocus,
    onViewChange,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    disableFuture,
    disablePast,
    defaultCalendarMonth,
    onChange: onChange3,
    onYearChange,
    onMonthChange,
    reduceAnimations,
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    view: inView,
    views,
    openTo,
    className,
    disabled,
    readOnly,
    minDate,
    maxDate,
    disableHighlightToday,
    focusedView: inFocusedView,
    onFocusedViewChange,
    showDaysOutsideCurrentMonth,
    fixedWeekNumber,
    dayOfWeekFormatter,
    components,
    componentsProps,
    slots,
    slotProps,
    loading,
    renderLoading,
    displayWeekNumber,
    yearsPerRow,
    monthsPerRow,
    timezone: timezoneProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$2);
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValueWithTimezone({
    name: "DateCalendar",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    onChange: onChange3,
    valueManager: singleItemValueManager
  });
  const {
    view,
    setView,
    focusedView,
    setFocusedView,
    goToNextView,
    setValueAndGoToNextView
  } = useViews({
    view: inView,
    views,
    openTo,
    onChange: handleValueChange,
    onViewChange,
    autoFocus,
    focusedView: inFocusedView,
    onFocusedViewChange
  });
  const {
    referenceDate,
    calendarState,
    changeFocusedDay,
    changeMonth,
    handleChangeMonth,
    isDateDisabled,
    onMonthSwitchingAnimationEnd
  } = useCalendarState({
    value,
    defaultCalendarMonth,
    referenceDate: referenceDateProp,
    reduceAnimations,
    onMonthChange,
    minDate,
    maxDate,
    shouldDisableDate,
    disablePast,
    disableFuture,
    timezone
  });
  const minDateWithDisabled = disabled && value || minDate;
  const maxDateWithDisabled = disabled && value || maxDate;
  const gridLabelId = `${id}-grid-label`;
  const hasFocus = focusedView !== null;
  const CalendarHeader = (_ref = (_slots$calendarHeader = slots == null ? void 0 : slots.calendarHeader) != null ? _slots$calendarHeader : components == null ? void 0 : components.CalendarHeader) != null ? _ref : PickersCalendarHeader;
  const calendarHeaderProps = useSlotProps({
    elementType: CalendarHeader,
    externalSlotProps: (_slotProps$calendarHe = slotProps == null ? void 0 : slotProps.calendarHeader) != null ? _slotProps$calendarHe : componentsProps == null ? void 0 : componentsProps.calendarHeader,
    additionalProps: {
      views,
      view,
      currentMonth: calendarState.currentMonth,
      onViewChange: setView,
      onMonthChange: (newMonth, direction) => handleChangeMonth({
        newMonth,
        direction
      }),
      minDate: minDateWithDisabled,
      maxDate: maxDateWithDisabled,
      disabled,
      disablePast,
      disableFuture,
      reduceAnimations,
      timezone,
      labelId: gridLabelId,
      slots,
      slotProps
    },
    ownerState: props
  });
  const handleDateMonthChange = useEventCallback((newDate) => {
    const startOfMonth = utils.startOfMonth(newDate);
    const endOfMonth = utils.endOfMonth(newDate);
    const closestEnabledDate = isDateDisabled(newDate) ? findClosestEnabledDate({
      utils,
      date: newDate,
      minDate: utils.isBefore(minDate, startOfMonth) ? startOfMonth : minDate,
      maxDate: utils.isAfter(maxDate, endOfMonth) ? endOfMonth : maxDate,
      disablePast,
      disableFuture,
      isDateDisabled,
      timezone
    }) : newDate;
    if (closestEnabledDate) {
      setValueAndGoToNextView(closestEnabledDate, "finish");
      onMonthChange == null || onMonthChange(startOfMonth);
    } else {
      goToNextView();
      changeMonth(startOfMonth);
    }
    changeFocusedDay(closestEnabledDate, true);
  });
  const handleDateYearChange = useEventCallback((newDate) => {
    const startOfYear = utils.startOfYear(newDate);
    const endOfYear = utils.endOfYear(newDate);
    const closestEnabledDate = isDateDisabled(newDate) ? findClosestEnabledDate({
      utils,
      date: newDate,
      minDate: utils.isBefore(minDate, startOfYear) ? startOfYear : minDate,
      maxDate: utils.isAfter(maxDate, endOfYear) ? endOfYear : maxDate,
      disablePast,
      disableFuture,
      isDateDisabled,
      timezone
    }) : newDate;
    if (closestEnabledDate) {
      setValueAndGoToNextView(closestEnabledDate, "finish");
      onYearChange == null || onYearChange(closestEnabledDate);
    } else {
      goToNextView();
      changeMonth(startOfYear);
    }
    changeFocusedDay(closestEnabledDate, true);
  });
  const handleSelectedDayChange = useEventCallback((day) => {
    if (day) {
      return handleValueChange(mergeDateAndTime(utils, day, value != null ? value : referenceDate), "finish", view);
    }
    return handleValueChange(day, "finish", view);
  });
  reactExports.useEffect(() => {
    if (value != null && utils.isValid(value)) {
      changeMonth(value);
    }
  }, [value]);
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  const baseDateValidationProps = {
    disablePast,
    disableFuture,
    maxDate,
    minDate
  };
  const commonViewProps = {
    disableHighlightToday,
    readOnly,
    disabled,
    timezone,
    gridLabelId
  };
  const prevOpenViewRef = reactExports.useRef(view);
  reactExports.useEffect(() => {
    if (prevOpenViewRef.current === view) {
      return;
    }
    if (focusedView === prevOpenViewRef.current) {
      setFocusedView(view, true);
    }
    prevOpenViewRef.current = view;
  }, [focusedView, setFocusedView, view]);
  const selectedDays = reactExports.useMemo(() => [value], [value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DateCalendarRoot, _extends$1({
    ref,
    className: clsx(classes.root, className),
    ownerState
  }, other, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(CalendarHeader, _extends$1({}, calendarHeaderProps)), /* @__PURE__ */ jsxRuntimeExports.jsx(DateCalendarViewTransitionContainer, {
      reduceAnimations,
      className: classes.viewTransitionContainer,
      transKey: view,
      ownerState,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        children: [view === "year" && /* @__PURE__ */ jsxRuntimeExports.jsx(YearCalendar, _extends$1({}, baseDateValidationProps, commonViewProps, {
          value,
          onChange: handleDateYearChange,
          shouldDisableYear,
          hasFocus,
          onFocusedViewChange: (isViewFocused) => setFocusedView("year", isViewFocused),
          yearsPerRow,
          referenceDate
        })), view === "month" && /* @__PURE__ */ jsxRuntimeExports.jsx(MonthCalendar, _extends$1({}, baseDateValidationProps, commonViewProps, {
          hasFocus,
          className,
          value,
          onChange: handleDateMonthChange,
          shouldDisableMonth,
          onFocusedViewChange: (isViewFocused) => setFocusedView("month", isViewFocused),
          monthsPerRow,
          referenceDate
        })), view === "day" && /* @__PURE__ */ jsxRuntimeExports.jsx(DayCalendar, _extends$1({}, calendarState, baseDateValidationProps, commonViewProps, {
          onMonthSwitchingAnimationEnd,
          onFocusedDayChange: changeFocusedDay,
          reduceAnimations,
          selectedDays,
          onSelectedDaysChange: handleSelectedDayChange,
          shouldDisableDate,
          shouldDisableMonth,
          shouldDisableYear,
          hasFocus,
          onFocusedViewChange: (isViewFocused) => setFocusedView("day", isViewFocused),
          showDaysOutsideCurrentMonth,
          fixedWeekNumber,
          dayOfWeekFormatter,
          displayWeekNumber,
          components,
          componentsProps,
          slots,
          slotProps,
          loading,
          renderLoading
        }))]
      })
    })]
  }));
});
const renderDateViewCalendar = ({
  view,
  onViewChange,
  views,
  focusedView,
  onFocusedViewChange,
  value,
  defaultValue,
  referenceDate,
  onChange: onChange3,
  className,
  classes,
  disableFuture,
  disablePast,
  minDate,
  maxDate,
  shouldDisableDate,
  shouldDisableMonth,
  shouldDisableYear,
  reduceAnimations,
  onMonthChange,
  monthsPerRow,
  onYearChange,
  yearsPerRow,
  defaultCalendarMonth,
  components,
  componentsProps,
  slots,
  slotProps,
  loading,
  renderLoading,
  disableHighlightToday,
  readOnly,
  disabled,
  showDaysOutsideCurrentMonth,
  dayOfWeekFormatter,
  sx,
  autoFocus,
  fixedWeekNumber,
  displayWeekNumber,
  timezone
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(DateCalendar, {
  view,
  onViewChange,
  views: views.filter(isDatePickerView),
  focusedView: focusedView && isDatePickerView(focusedView) ? focusedView : null,
  onFocusedViewChange,
  value,
  defaultValue,
  referenceDate,
  onChange: onChange3,
  className,
  classes,
  disableFuture,
  disablePast,
  minDate,
  maxDate,
  shouldDisableDate,
  shouldDisableMonth,
  shouldDisableYear,
  reduceAnimations,
  onMonthChange,
  monthsPerRow,
  onYearChange,
  yearsPerRow,
  defaultCalendarMonth,
  components,
  componentsProps,
  slots,
  slotProps,
  loading,
  renderLoading,
  disableHighlightToday,
  readOnly,
  disabled,
  showDaysOutsideCurrentMonth,
  dayOfWeekFormatter,
  sx,
  autoFocus,
  fixedWeekNumber,
  displayWeekNumber,
  timezone
});
const DesktopDatePicker = /* @__PURE__ */ reactExports.forwardRef(function DesktopDatePicker2(inProps, ref) {
  var _defaultizedProps$yea, _defaultizedProps$slo2, _props$localeText$ope, _props$localeText;
  const localeText = useLocaleText();
  const utils = useUtils();
  const defaultizedProps = useDatePickerDefaultizedProps(inProps, "MuiDesktopDatePicker");
  const viewRenderers = _extends$1({
    day: renderDateViewCalendar,
    month: renderDateViewCalendar,
    year: renderDateViewCalendar
  }, defaultizedProps.viewRenderers);
  const props = _extends$1({}, defaultizedProps, {
    viewRenderers,
    format: resolveDateFormat(utils, defaultizedProps, false),
    yearsPerRow: (_defaultizedProps$yea = defaultizedProps.yearsPerRow) != null ? _defaultizedProps$yea : 4,
    slots: _extends$1({
      openPickerIcon: CalendarIcon,
      field: DateField
    }, defaultizedProps.slots),
    slotProps: _extends$1({}, defaultizedProps.slotProps, {
      field: (ownerState) => {
        var _defaultizedProps$slo;
        return _extends$1({}, resolveComponentProps((_defaultizedProps$slo = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo.field, ownerState), extractValidationProps(defaultizedProps), {
          ref
        });
      },
      toolbar: _extends$1({
        hidden: true
      }, (_defaultizedProps$slo2 = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo2.toolbar)
    })
  });
  const {
    renderPicker
  } = useDesktopPicker({
    props,
    valueManager: singleItemValueManager,
    valueType: "date",
    getOpenDialogAriaText: (_props$localeText$ope = (_props$localeText = props.localeText) == null ? void 0 : _props$localeText.openDatePickerDialogue) != null ? _props$localeText$ope : localeText.openDatePickerDialogue,
    validator: validateDate
  });
  return renderPicker();
});
DesktopDatePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: PropTypes.bool,
  /**
   * Class name applied to the root element.
   */
  className: PropTypes.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: PropTypes.bool,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: PropTypes.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: PropTypes.object,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter.  Deprecated, will be removed in v7: Use `date` instead.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (_day: string, date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: PropTypes.func,
  /**
   * Default calendar month displayed when `value` and `defaultValue` are empty.
   * @deprecated Consider using `referenceDate` instead.
   */
  defaultCalendarMonth: PropTypes.any,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: PropTypes.any,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: PropTypes.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: PropTypes.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: PropTypes.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: PropTypes.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: PropTypes.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: PropTypes.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: PropTypes.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: PropTypes.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType,
  /**
   * The label content.
   */
  label: PropTypes.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: PropTypes.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: PropTypes.object,
  /**
   * Maximal selectable date.
   */
  maxDate: PropTypes.any,
  /**
   * Minimal selectable date.
   */
  minDate: PropTypes.any,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: PropTypes.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: PropTypes.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: PropTypes.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: PropTypes.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: PropTypes.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: PropTypes.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: PropTypes.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: PropTypes.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: PropTypes.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: PropTypes.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: PropTypes.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: PropTypes.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: PropTypes.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: PropTypes.oneOf(["landscape", "portrait"]),
  readOnly: PropTypes.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: PropTypes.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: PropTypes.any,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: PropTypes.func,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: PropTypes.oneOfType([PropTypes.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), PropTypes.number, PropTypes.shape({
    endIndex: PropTypes.number.isRequired,
    startIndex: PropTypes.number.isRequired
  })]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (e.g. when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: PropTypes.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: PropTypes.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: PropTypes.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: PropTypes.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: PropTypes.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: PropTypes.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: PropTypes.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: PropTypes.shape({
    day: PropTypes.func,
    month: PropTypes.func,
    year: PropTypes.func
  }),
  /**
   * Available views.
   */
  views: PropTypes.arrayOf(PropTypes.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 4
   */
  yearsPerRow: PropTypes.oneOf([3, 4])
};
const _excluded$1 = ["props", "getOpenDialogAriaText"];
const useMobilePicker = (_ref) => {
  var _innerSlotProps$toolb, _innerSlotProps$toolb2, _slots$layout;
  let {
    props,
    getOpenDialogAriaText
  } = _ref, pickerParams = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  const {
    slots,
    slotProps: innerSlotProps,
    className,
    sx,
    format,
    formatDensity,
    timezone,
    name,
    label,
    inputRef,
    readOnly,
    disabled,
    localeText
  } = props;
  const utils = useUtils();
  const internalInputRef = reactExports.useRef(null);
  const labelId = useId();
  const isToolbarHidden = (_innerSlotProps$toolb = innerSlotProps == null || (_innerSlotProps$toolb2 = innerSlotProps.toolbar) == null ? void 0 : _innerSlotProps$toolb2.hidden) != null ? _innerSlotProps$toolb : false;
  const {
    open,
    actions,
    layoutProps,
    renderCurrentView,
    fieldProps: pickerFieldProps
  } = usePicker(_extends$1({}, pickerParams, {
    props,
    inputRef: internalInputRef,
    autoFocusView: true,
    additionalViewProps: {},
    wrapperVariant: "mobile"
  }));
  const Field = slots.field;
  const fieldProps = useSlotProps({
    elementType: Field,
    externalSlotProps: innerSlotProps == null ? void 0 : innerSlotProps.field,
    additionalProps: _extends$1({}, pickerFieldProps, isToolbarHidden && {
      id: labelId
    }, !(disabled || readOnly) && {
      onClick: actions.onOpen,
      onKeyDown: onSpaceOrEnter(actions.onOpen)
    }, {
      readOnly: readOnly != null ? readOnly : true,
      disabled,
      className,
      sx,
      format,
      formatDensity,
      timezone,
      label,
      name
    }),
    ownerState: props
  });
  fieldProps.inputProps = _extends$1({}, fieldProps.inputProps, {
    "aria-label": getOpenDialogAriaText(pickerFieldProps.value, utils)
  });
  const slotsForField = _extends$1({
    textField: slots.textField
  }, fieldProps.slots);
  const Layout = (_slots$layout = slots.layout) != null ? _slots$layout : PickersLayout;
  const handleInputRef = useForkRef(internalInputRef, fieldProps.inputRef, inputRef);
  let labelledById = labelId;
  if (isToolbarHidden) {
    if (label) {
      labelledById = `${labelId}-label`;
    } else {
      labelledById = void 0;
    }
  }
  const slotProps = _extends$1({}, innerSlotProps, {
    toolbar: _extends$1({}, innerSlotProps == null ? void 0 : innerSlotProps.toolbar, {
      titleId: labelId
    }),
    mobilePaper: _extends$1({
      "aria-labelledby": labelledById
    }, innerSlotProps == null ? void 0 : innerSlotProps.mobilePaper)
  });
  const renderPicker = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(LocalizationProvider, {
    localeText,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Field, _extends$1({}, fieldProps, {
      slots: slotsForField,
      slotProps,
      inputRef: handleInputRef
    })), /* @__PURE__ */ jsxRuntimeExports.jsx(PickersModalDialog, _extends$1({}, actions, {
      open,
      slots,
      slotProps,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, _extends$1({}, layoutProps, slotProps == null ? void 0 : slotProps.layout, {
        slots,
        slotProps,
        children: renderCurrentView()
      }))
    }))]
  });
  return {
    renderPicker
  };
};
const MobileDatePicker = /* @__PURE__ */ reactExports.forwardRef(function MobileDatePicker2(inProps, ref) {
  var _defaultizedProps$slo2, _props$localeText$ope, _props$localeText;
  const localeText = useLocaleText();
  const utils = useUtils();
  const defaultizedProps = useDatePickerDefaultizedProps(inProps, "MuiMobileDatePicker");
  const viewRenderers = _extends$1({
    day: renderDateViewCalendar,
    month: renderDateViewCalendar,
    year: renderDateViewCalendar
  }, defaultizedProps.viewRenderers);
  const props = _extends$1({}, defaultizedProps, {
    viewRenderers,
    format: resolveDateFormat(utils, defaultizedProps, false),
    slots: _extends$1({
      field: DateField
    }, defaultizedProps.slots),
    slotProps: _extends$1({}, defaultizedProps.slotProps, {
      field: (ownerState) => {
        var _defaultizedProps$slo;
        return _extends$1({}, resolveComponentProps((_defaultizedProps$slo = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo.field, ownerState), extractValidationProps(defaultizedProps), {
          ref
        });
      },
      toolbar: _extends$1({
        hidden: false
      }, (_defaultizedProps$slo2 = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo2.toolbar)
    })
  });
  const {
    renderPicker
  } = useMobilePicker({
    props,
    valueManager: singleItemValueManager,
    valueType: "date",
    getOpenDialogAriaText: (_props$localeText$ope = (_props$localeText = props.localeText) == null ? void 0 : _props$localeText.openDatePickerDialogue) != null ? _props$localeText$ope : localeText.openDatePickerDialogue,
    validator: validateDate
  });
  return renderPicker();
});
MobileDatePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: PropTypes.bool,
  /**
   * Class name applied to the root element.
   */
  className: PropTypes.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: PropTypes.bool,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: PropTypes.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: PropTypes.object,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter.  Deprecated, will be removed in v7: Use `date` instead.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (_day: string, date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: PropTypes.func,
  /**
   * Default calendar month displayed when `value` and `defaultValue` are empty.
   * @deprecated Consider using `referenceDate` instead.
   */
  defaultCalendarMonth: PropTypes.any,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: PropTypes.any,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: PropTypes.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: PropTypes.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: PropTypes.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: PropTypes.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: PropTypes.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: PropTypes.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: PropTypes.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: PropTypes.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType,
  /**
   * The label content.
   */
  label: PropTypes.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: PropTypes.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: PropTypes.object,
  /**
   * Maximal selectable date.
   */
  maxDate: PropTypes.any,
  /**
   * Minimal selectable date.
   */
  minDate: PropTypes.any,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: PropTypes.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: PropTypes.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: PropTypes.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: PropTypes.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: PropTypes.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: PropTypes.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: PropTypes.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: PropTypes.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: PropTypes.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: PropTypes.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: PropTypes.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: PropTypes.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: PropTypes.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: PropTypes.oneOf(["landscape", "portrait"]),
  readOnly: PropTypes.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: PropTypes.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: PropTypes.any,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: PropTypes.func,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: PropTypes.oneOfType([PropTypes.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), PropTypes.number, PropTypes.shape({
    endIndex: PropTypes.number.isRequired,
    startIndex: PropTypes.number.isRequired
  })]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (e.g. when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: PropTypes.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: PropTypes.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: PropTypes.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: PropTypes.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: PropTypes.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: PropTypes.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: PropTypes.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: PropTypes.shape({
    day: PropTypes.func,
    month: PropTypes.func,
    year: PropTypes.func
  }),
  /**
   * Available views.
   */
  views: PropTypes.arrayOf(PropTypes.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: PropTypes.oneOf([3, 4])
};
const _excluded = ["desktopModeMediaQuery"];
const DatePicker = /* @__PURE__ */ reactExports.forwardRef(function DatePicker2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDatePicker"
  });
  const {
    desktopModeMediaQuery = DEFAULT_DESKTOP_MODE_MEDIA_QUERY
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const isDesktop = useMediaQuery(desktopModeMediaQuery, {
    defaultMatches: true
  });
  if (isDesktop) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DesktopDatePicker, _extends$1({
      ref
    }, other));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MobileDatePicker, _extends$1({
    ref
  }, other));
});
const Beastoptions = [
  { value: "Chuck Testa", label: "Chuck Testa" },
  { value: "Sage Cattabriga-Alosa", label: "Sage Cattabriga-Alosa" },
  { value: "Nikola Tesla", label: "Nikola Tesla" },
  { value: "Cattabriga-Alosa", label: "Cattabriga-Alosa" },
  { value: "Nikola Alosa", label: "Nikola Alosa" }
];
const Basicoptions = [
  { value: "Arizona", label: "Arizona" },
  { value: "Colorado", label: "Colorado" },
  { value: "Idaho", label: "Idaho" },
  { value: "Montana", label: "Montana" },
  { value: "Nebraska", label: "Nebraska" },
  { value: "New Mexico", label: "New Mexico" },
  { value: "North Dakota", label: "North Dakota" },
  { value: "Utah", label: "Utah" },
  { value: "Wyoming", label: "Wyoming" },
  { value: "Alabama", label: "Alabama" },
  { value: "Arkansas", label: "Arkansas" },
  { value: "Illinois", label: "Illinois" },
  { value: "Iowa", label: "Iowa" },
  { value: "Kansas", label: "Kansas" },
  { value: "Kentucky", label: "Kentucky" },
  { value: "Louisiana", label: "Louisiana" },
  { value: "Minnesota", label: "Minnesota" },
  { value: "Mississippi", label: "Mississippi" },
  { value: "Missouri", label: "Missouri" },
  { value: "Oklahoma", label: "Oklahoma" },
  { value: "South Dakota", label: "South Dakota" },
  { value: "Texas", label: "Texas" },
  { value: "Tennessee", label: "Tennessee" },
  { value: "Wisconsin", label: "Wisconsin" }
];
const Usersoptions = [
  { value: "Firefox", label: "Firefox" },
  { value: "Chrome", label: "Chrome" },
  { value: "Safari", label: "Safari" },
  { value: "Opera", label: "Opera" },
  { value: "Internet Explorer", label: "Internet Explorer" }
];
function Nanomethod() {
  const colorPicker = React.useRef();
  React.useEffect(() => {
    if (colorPicker.current) {
      Pickr.create({
        el: ".color-picker",
        theme: "nano",
        default: "#05c3fb",
        swatches: [
          "rgba(156, 39, 176, 0.9)",
          "rgba(103, 58, 183, 0.85)",
          "rgba(63, 81, 181, 0.8)",
          "rgba(33, 150, 243, 0.75)",
          "rgba(3, 169, 244, 0.7)",
          "rgba(0, 188, 212, 0.7)",
          "rgba(0, 150, 136, 0.75)",
          "rgba(76, 175, 80, 0.8)",
          "rgba(244, 67, 54, 1)",
          "rgba(233, 30, 99, 0.95)",
          "rgba(139, 195, 74, 0.85)",
          "rgba(205, 220, 57, 0.9)",
          "rgba(255, 235, 59, 0.95)",
          "rgba(255, 193, 7, 1)"
        ],
        components: {
          // Main components
          preview: true,
          opacity: true,
          hue: false,
          // Input / output Options
          interaction: {
            hex: true,
            // rgba: true,
            // hsla: true,
            // hsva: true,
            // cmyk: true,
            input: true,
            clear: true,
            save: true
          }
        }
      });
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "App", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "color-picker", ref: colorPicker }) });
}
function Classicmethod() {
  const colorPicker = React.useRef();
  React.useEffect(() => {
    if (colorPicker.current) {
      Pickr.create({
        el: ".color-picker",
        theme: "classic",
        default: "#6c5ffc",
        swatches: [
          "rgba(244, 67, 54, 1)",
          "rgba(233, 30, 99, 0.95)",
          "rgba(156, 39, 176, 0.9)",
          "rgba(103, 58, 183, 0.85)",
          "rgba(63, 81, 181, 0.8)",
          "rgba(33, 150, 243, 0.75)",
          "rgba(3, 169, 244, 0.7)",
          "rgba(0, 188, 212, 0.7)",
          "rgba(0, 150, 136, 0.75)",
          "rgba(76, 175, 80, 0.8)",
          "rgba(139, 195, 74, 0.85)",
          "rgba(205, 220, 57, 0.9)",
          "rgba(255, 235, 59, 0.95)",
          "rgba(255, 193, 7, 1)"
        ],
        components: {
          preview: true,
          opacity: true,
          hue: true,
          interaction: {
            hex: true,
            rgba: true,
            hsva: true,
            input: true,
            clear: true,
            save: true
          }
        }
      });
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "App", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "color-picker", ref: colorPicker }) });
}
function Monolithmethod() {
  const colorPicker = React.useRef();
  React.useEffect(() => {
    if (colorPicker.current) {
      Pickr.create({
        el: ".color-picker",
        theme: "classic",
        default: "#fc5296",
        swatches: [
          "rgba(55, 35, 9, 0.5)",
          "rgba(44, 67, 54, 1)",
          "rgba(33, 30, 99, 0.95)",
          "rgba(56, 39, 176, 0.9)",
          "rgba(03, 58, 183, 0.85)",
          "rgba(163, 81, 181, 0.8)",
          "rgba(33, 150, 243, 0.75)",
          "rgba(3, 169, 244, 0.7)",
          "rgba(0, 188, 212, 0.7)",
          "rgba(0, 150, 136, 0.75)",
          "rgba(76, 175, 80, 0.8)",
          "rgba(139, 195, 74, 0.85)",
          "rgba(205, 220, 57, 0.9)",
          "rgba(255, 193, 7, 1)"
        ],
        components: {
          // Main components
          preview: true,
          opacity: true,
          hue: false,
          // Input / output Options
          interaction: {
            // hex: true,
            // rgba: true,
            // hsla: true,
            // hsva: true,
            // cmyk: true,
            input: true,
            clear: true,
            save: true
          }
        }
      });
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "App", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "color-picker", ref: colorPicker }) });
}
const Selectbox = () => {
  let [value, setValue] = reactExports.useState(["PDF - Swap Valuation"]);
  function handleChange(selected) {
    setValue(selected);
  }
  const options = [
    {
      label: "Software Side",
      options: [
        { value: "Web designer", label: "Web designer" },
        { value: "Web Developer", label: "Web Developer" },
        {
          value: "Application Developer",
          label: "Application Developer"
        },
        { value: "App Designer", label: "App Designer" }
      ]
    },
    {
      label: "Voice Side",
      options: [
        { value: "Tell Caller", label: "Tell Caller" },
        {
          value: "Recruiter",
          label: "Recruiter"
        },
        {
          value: "HR",
          label: "HR"
        },
        {
          value: "Data Entry",
          label: "Data Entry"
        },
        {
          value: "Mapping",
          label: "Mapping"
        },
        {
          value: "US Recruiter",
          label: "US Recruiter"
        }
      ]
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DualListBox,
    {
      canFilter: true,
      selected: value,
      options,
      filterCallback: (option, filterInput) => {
        if (filterInput === "") {
          return true;
        }
        let words = filterInput.split(" ");
        let res = false;
        for (let word of words) {
          res = new RegExp(word, "i").test(option.label);
          if (res === false) {
            break;
          }
        }
        return res;
      },
      onChange: handleChange
    }
  );
};
const Selectbox1 = () => {
  let [value, setValue] = reactExports.useState(["PDF - Swap Valuation"]);
  function handleChange(selected) {
    setValue(selected);
  }
  const options = [
    {
      label: "Software Side",
      options: [
        { value: "HTML5", label: "HTML5" },
        { value: "CSS3", label: "CSS3" },
        {
          value: "Angular",
          label: "Angular",
          disabled: "disabled"
        },
        { value: ".Net", label: ".Net" },
        { value: "PHP", label: "PHP" },
        {
          value: "Java",
          label: "Java"
        },
        {
          value: "Android",
          label: "Android",
          disabled: "disabled"
        },
        {
          value: "AngularJS",
          label: "AngularJS"
        },
        {
          value: "Photoshop",
          label: "Photoshop",
          disabled: "disabled"
        },
        {
          value: "Python",
          label: "Python"
        },
        {
          value: "SQL",
          label: "SQL"
        },
        {
          value: "Java Script",
          label: "Java Script"
        }
      ]
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DualListBox,
    {
      canFilter: true,
      selected: value,
      options,
      filterCallback: (option, filterInput) => {
        if (filterInput === "") {
          return true;
        }
        let words = filterInput.split(" ");
        let res = false;
        for (let word of words) {
          res = new RegExp(word, "i").test(option.label);
          if (res === false) {
            break;
          }
        }
        return res;
      },
      onChange: handleChange
    }
  );
};
function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}
function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}
function union(a, b) {
  return [...a, ...not(b, a)];
}
function TransferList1() {
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([0, 1, 2, 3]);
  const [right, setRight] = React.useState([4, 5, 6, 7]);
  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const numberOfChecked = (items) => intersection(checked, items).length;
  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };
  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };
  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };
  const customList = (title, items) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CardHeader,
      {
        sx: { px: 2, py: 1 },
        avatar: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox,
          {
            onClick: handleToggleAll(items),
            checked: numberOfChecked(items) === items.length && items.length !== 0,
            indeterminate: numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0,
            disabled: items.length === 0,
            inputProps: {
              "aria-label": "all items selected"
            }
          }
        ),
        title,
        subheader: `${numberOfChecked(items)}/${items.length} selected`
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      List,
      {
        sx: {
          width: 400,
          height: 230,
          bgcolor: "background.paper",
          overflow: "auto"
        },
        dense: true,
        component: "div",
        role: "list",
        children: [
          items.map((value) => {
            const labelId = `transfer-list-all-item-${value}-label`;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              ListItem,
              {
                role: "listitem",
                button: true,
                onClick: handleToggle(value),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ListItemIcon, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Checkbox,
                    {
                      checked: checked.indexOf(value) !== -1,
                      tabIndex: -1,
                      disableRipple: true,
                      inputProps: {
                        "aria-labelledby": labelId
                      }
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ListItemText, { id: labelId, primary: `List item ${value + 1}` })
                ]
              },
              value
            );
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ListItem, {})
        ]
      }
    )
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2, justifyContent: "center", alignItems: "center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, children: customList("Choices", left) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, direction: "column", alignItems: "center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button$1,
        {
          sx: { my: 0.5 },
          variant: "outlined",
          size: "small",
          onClick: handleCheckedRight,
          disabled: leftChecked.length === 0,
          "aria-label": "move selected right",
          children: ">"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button$1,
        {
          sx: { my: 0.5 },
          variant: "outlined",
          size: "small",
          onClick: handleCheckedLeft,
          disabled: rightChecked.length === 0,
          "aria-label": "move selected left",
          children: "<"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, children: customList("Chosen", right) })
  ] });
}
const BasicMutipleSelect = () => {
  const [selected, setSelected] = reactExports.useState([]);
  const options = [
    { value: "Audi", label: "Audi" },
    { value: "BMW", label: "BMW" },
    { value: "volkswagen", label: "volkswagen" },
    { value: "Aston Martin", label: "Aston Martin" },
    { value: "mitsubishi", label: "mitsubishi" },
    { value: "hyundai", label: "hyundai" },
    { value: "fiat", label: "fiat" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    je,
    {
      value: selected,
      onChange: setSelected,
      labelledBy: "Select",
      disableSearch: true,
      options,
      className: "formselect"
    }
  );
};
const DisabledMutipleSelect = () => {
  const optionsMultiSelect1 = [
    { key: "First", cat: "Group 1" },
    { key: "Second", cat: "Group 1" },
    { key: "Third", cat: "Group 1" },
    { key: "Fourth", cat: "Group 2" }
  ];
  const [selected, setSelected] = reactExports.useState([]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    je,
    {
      options: optionsMultiSelect1,
      value: selected,
      onChange: setSelected,
      labelledBy: "Select",
      disabled: true,
      className: "formselect"
    }
  ) });
};
function Singleselectdis() {
  const optionsGroupOptionMutipleSelect = [
    {
      value: "Month",
      label: "Month",
      options: [
        { value: "January", label: "January" },
        { value: "February", label: "February", isDisabled: "true" },
        { value: "March", label: "March" },
        { value: "April", label: "April" },
        { value: "May", label: "May", isDisabled: "true" }
      ]
    },
    { value: "Brand", label: "Brand" },
    { value: "Audi", label: "Audi" },
    { value: "BMW", label: "BMW" },
    { value: "volkswagen", label: "volkswagen" },
    { value: "Aston Martin", label: "Aston Martin" },
    { value: "mitsubishi", label: "mitsubishi" },
    { value: "hyundai", label: "hyundai" },
    { value: "fiat", label: "fiat" }
  ];
  function logChange(val) {
    console.log("Selected: " + JSON.stringify(val));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    StateManagedSelect$1,
    {
      classNamePrefix: "Search",
      name: "form-field-name",
      options: optionsGroupOptionMutipleSelect,
      onChange: logChange
    }
  ) });
}
function MultipleGroupOption() {
  const optionsGroupOptionMutipleSelect = [
    {
      value: "Month",
      label: "Month",
      options: [
        { value: "January", label: "January" },
        { value: "February", label: "February", isDisabled: "true" },
        { value: "March", label: "March" },
        { value: "April", label: "April" },
        { value: "May", label: "May", isDisabled: "true" }
      ]
    },
    { value: "Brand", label: "Brand" },
    { value: "Audi", label: "Audi" },
    {
      value: "BMW",
      label: "BMW",
      options: [
        { value: "January", label: "January" },
        { value: "February", label: "February", isDisabled: "true" },
        { value: "March", label: "March" },
        { value: "April", label: "April" },
        { value: "May", label: "May", isDisabled: "true" }
      ]
    },
    { value: "volkswagen", label: "volkswagen" },
    { value: "Aston Martin", label: "Aston Martin" },
    {
      value: "mitsubishi",
      label: "mitsubishi",
      options: [
        { value: "January", label: "January" },
        { value: "February", label: "February", isDisabled: "true" },
        { value: "March", label: "March" },
        { value: "April", label: "April" },
        { value: "May", label: "May", isDisabled: "true" }
      ]
    },
    { value: "hyundai", label: "hyundai" },
    { value: "fiat", label: "fiat" }
  ];
  function logChange(val) {
    console.log("Selected: " + JSON.stringify(val));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    StateManagedSelect$1,
    {
      classNamePrefix: "Search",
      name: "form-field-name",
      options: optionsGroupOptionMutipleSelect,
      onChange: logChange
    }
  ) });
}
function Singleselect1() {
  const objectArraysingle = [
    { value: "First", label: "First" },
    { value: "Second", label: "Second" },
    { value: "Third", label: "Third" },
    { value: "Fourth", label: "Fourth" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    StateManagedSelect$1,
    {
      options: objectArraysingle,
      isSearchable: false,
      classNamePrefix: "Search"
    }
  );
}
const MutipleSelect = () => {
  const MutipleSelectdata = [
    { value: "January", label: "January", isDisabled: "disabled" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April", isDisabled: "disabled" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July", isDisabled: "disabled" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November", isDisabled: "disabled" },
    { value: "December", label: "December" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    StateManagedSelect$1,
    {
      options: MutipleSelectdata,
      isMulti: true,
      isSearchable: false,
      classNamePrefix: "Search"
    }
  );
};
const MultipleItems = () => {
  const MultipleItemsdata = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    StateManagedSelect$1,
    {
      options: MultipleItemsdata,
      isMulti: true,
      isSearchable: false,
      classNamePrefix: "Search"
    }
  );
};
const SelectAll = () => {
  const HideSelectAlldata = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    StateManagedSelect$1,
    {
      options: HideSelectAlldata,
      isSearchable: false,
      classNamePrefix: "Search"
    }
  );
};
const SelectFilter = () => {
  const SelectFilterdata = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    StateManagedSelect$1,
    {
      options: SelectFilterdata,
      isSearchable: true,
      classNamePrefix: "Search"
    }
  );
};
class CustomisedSelector extends React.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "options", [
      { value: "January", label: "January" },
      { value: "Febuary", label: "Febuary" },
      { value: "March", label: "March" },
      { value: "April", label: "April" },
      { value: "May", label: "May", color: "#6c5ffc" },
      { value: "June", label: "June" },
      { value: "July", label: "July", color: "#05c3fb" },
      { value: "August", label: "August" },
      { value: "September", label: "September" },
      { value: "October", label: "October", color: "#498205" },
      { value: "November", label: "November" },
      { value: "December", label: "December" }
    ]);
    __publicField(this, "styles", {
      option: (provided, state) => ({
        ...provided,
        fontWeight: state.isSelected ? "bold" : "normal",
        color: "black",
        backgroundColor: state.data.color,
        fontSize: state.selectProps.myFontSize
      }),
      singleValue: (provided, state) => ({
        ...provided,
        color: state.data.color,
        fontSize: state.selectProps.myFontSize
      })
    });
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(StateManagedSelect$1, { classNamePrefix: "Search", options: this.options, styles: this.styles });
  }
}
const SlectBox = () => {
  const SlectBoxdata = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    StateManagedSelect$1,
    {
      options: SlectBoxdata,
      isSearchable: false,
      classNamePrefix: "Search"
    }
  );
};
const Disabled = () => {
  const SlectBoxdata = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    StateManagedSelect$1,
    {
      options: SlectBoxdata,
      isSearchable: false,
      classNamePrefix: "Search",
      isDisabled: true
    }
  );
};
const Multiple = () => {
  const Multipledata = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    StateManagedSelect$1,
    {
      options: Multipledata,
      isSearchable: false,
      classNamePrefix: "Search",
      isMulti: true
    }
  );
};
const MultipleSelect1 = () => {
  const MultipleSelectdata = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    StateManagedSelect$1,
    {
      options: MultipleSelectdata,
      isSearchable: false,
      classNamePrefix: "Search",
      isMulti: true
    }
  );
};
const MultipleSelect2 = () => {
  const MultipleSelect2data = [
    { value: "January", label: "January" },
    { value: "February", label: "February", isDisabled: "disabled" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May", isDisabled: "disabled" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August", isDisabled: "disabled" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    StateManagedSelect$1,
    {
      options: MultipleSelect2data,
      isSearchable: false,
      classNamePrefix: "Search",
      isMulti: true
    }
  );
};
const SearchSelect1 = () => {
  const SearchSelect1data = [
    { value: "Saab", label: "Saab" },
    { value: "Opel", label: "Opel" },
    { value: "Mercedez", label: "Mercedez" },
    { value: "Chrysler", label: "Chrysler" },
    { value: "General Motors", label: "General Motors" },
    { value: "Ford", label: "Ford" },
    { value: "Plymouth", label: "Plymouth" },
    { value: "Citroën", label: "Citroën" },
    { value: "Peugeot", label: "Peugeot" },
    { value: "Renault", label: "Renault" },
    { value: "Nissan", label: "Nissan" },
    { value: "Fiat", label: "Fiat" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    StateManagedSelect$1,
    {
      options: SearchSelect1data,
      isSearchable: true,
      classNamePrefix: "Search"
    }
  );
};
const SearchSelect2 = () => {
  const SearchSelect2data = [
    { value: "Saab", label: "Saab", isDisabled: "disabled" },
    { value: "Opel", label: "Opel" },
    { value: "Mercedez", label: "Mercedez", isDisabled: "disabled" },
    { value: "Aston Martin", label: "Aston Martin" },
    { value: "Hyundai", label: "Hyundai" },
    { value: "Mitsubishi", label: "Mitsubishi" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    StateManagedSelect$1,
    {
      options: SearchSelect2data,
      isSearchable: true,
      classNamePrefix: "Search"
    }
  );
};
const SearchSelect3 = () => {
  const SearchSelect3data = [
    { value: "Volvo", label: "Volvo" },
    { value: "Saab", label: "Saab" },
    { value: "Mercedes", label: "Mercedes" },
    { value: "BMW", label: "BMW" },
    { value: "Porche", label: "Porche" },
    { value: "Ferrari", label: "Ferrari" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    StateManagedSelect$1,
    {
      options: SearchSelect3data,
      isSearchable: true,
      classNamePrefix: "Search",
      isMulti: true
    }
  );
};
const SearchSelect4 = () => {
  const SearchSelect4data = [
    { value: "Volvo", label: "Volvo", options: [
      { value: "Mercedes", label: "Mercedes" },
      { value: "Volvo", label: "Volvo", isDisabled: "true" },
      { value: "Porche", label: "Porche" },
      { value: "BMW", label: "BMW" },
      { value: "Saab", label: "Saab", isDisabled: "true" }
    ] },
    { value: "Saab", label: "Saab" },
    { value: "Mercedes", label: "Mercedes" },
    { value: "BMW", label: "BMW" },
    { value: "Porche", label: "Porche", options: [
      { value: "Mercedes", label: "Mercedes" },
      { value: "Volvo", label: "Volvo", isDisabled: "true" },
      { value: "Porche", label: "Porche" },
      { value: "BMW", label: "BMW" },
      { value: "Saab", label: "Saab", isDisabled: "true" }
    ] },
    { value: "Ferrari", label: "Ferrari" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    StateManagedSelect$1,
    {
      options: SearchSelect4data,
      isSearchable: true,
      classNamePrefix: "Search",
      isMulti: true
    }
  );
};
function ResponsiveDatePickers() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LocalizationProvider, { dateAdapter: AdapterDayjs, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DemoContainer,
    {
      components: [
        "DatePicker",
        "MobileDatePicker",
        "DesktopDatePicker",
        "StaticDatePicker"
      ],
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DemoItem, { label: "Desktop variant", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DesktopDatePicker, { defaultValue: dayjs("2022-04-17") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DemoItem, { label: "Mobile variant", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MobileDatePicker, { defaultValue: dayjs("2022-04-17") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DemoItem, { label: "Responsive variant", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DatePicker, { defaultValue: dayjs("2022-04-17") }) })
      ]
    }
  ) });
}
registerPlugin(plugin, plugin$1);
const AdvancedForms = () => {
  const [country, setCountry] = reactExports.useState("");
  const [region, setRegion] = reactExports.useState("");
  const [files1, setFiles1] = reactExports.useState([]);
  const [files2, setFiles2] = reactExports.useState([]);
  const [filespond, setfilespond] = reactExports.useState([]);
  const [files, setFiles] = reactExports.useState([]);
  const [dates, setDates] = reactExports.useState();
  const [beastOption, setBeastOption] = reactExports.useState(null);
  const [basicOption, setBasicOption] = reactExports.useState(null);
  const [usersOption, setUsersOption] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeaders,
      {
        title: "Advanced Forms",
        home: "Home",
        name: "Forms",
        fonticonsname: "Advanced Forms"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { lg: "12", md: "12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { method: "post", className: "card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "File Upload" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", sm: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                FilePond,
                {
                  className: "basic-filepond",
                  "accepted-file-types": ["application/pdf", "image/png", "image/jpeg", "image/gif"],
                  server: "/api",
                  allowReorder: true,
                  files: files1,
                  onupdatefiles: setFiles1,
                  allowMultiple: false,
                  allowImagePreview: true,
                  maxFiles: 10,
                  name: "filepond",
                  labelIdle: 'Drag & Drop your files or <span className="filepond--label-action">Browse</span>'
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", sm: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                FilePond,
                {
                  className: "basic-filepond",
                  disabled: true,
                  "accepted-file-types": ["application/pdf", "image/png", "image/jpeg", "image/gif"],
                  server: "/api",
                  allowReorder: true,
                  files: files2,
                  onupdatefiles: setFiles2,
                  allowMultiple: false,
                  allowImagePreview: true,
                  maxFiles: 10,
                  name: "filepond",
                  labelIdle: 'Drag & Drop your files or <span className="filepond--label-action">Browse</span>'
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FilePond,
              {
                className: "mt-3 mb-5",
                allowMultiple: true,
                maxFiles: 10,
                files: filespond,
                onupdatefiles: setfilespond,
                allowReorder: true,
                labelIdle: 'Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { method: "post", className: "card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Select2 elements" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 ", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Beast" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StateManagedSelect$1,
                {
                  defaultValue: beastOption,
                  onChange: setBeastOption,
                  isSearchable: false,
                  options: Beastoptions,
                  placeholder: "Choose one",
                  classNamePrefix: "Search"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Loading Select2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StateManagedSelect$1,
                {
                  defaultValue: basicOption,
                  onChange: setBasicOption,
                  isSearchable: false,
                  isLoading: true,
                  options: Basicoptions,
                  placeholder: "Arizona",
                  classNamePrefix: "Search"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: " Select2 with search box" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StateManagedSelect$1,
                {
                  defaultValue: basicOption,
                  onChange: setBasicOption,
                  options: Basicoptions,
                  placeholder: "Arizona",
                  isSearchable: true,
                  classNamePrefix: "Search"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Users list" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StateManagedSelect$1,
                {
                  defaultValue: usersOption,
                  onChange: setUsersOption,
                  options: Usersoptions,
                  placeholder: "Firefox",
                  isSearchable: true,
                  isMulti: true,
                  classNamePrefix: "Search"
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Time Picker" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Default Time Picker:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveDatePickers, {})
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Color Picker" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: " mb-1", children: "Same way you select color in Adobe Photoshop." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pickr-container2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Nanomethod, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3  mb-1", children: "You can allow alpha transparency selection." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pickr-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Classicmethod, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 mb-1", children: "Show pallete only. If you'd like, spectrum can show the palettes you specify, and nothing else." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pickr-container1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Monolithmethod, {}) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Default Date picker" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mg-b-20 mg-sm-b-40", children: "The datepicker is tied to a standard form input field. Click on the input to open an interactive calendar in a small overlay. If a date is chosen, feedback is shown as the input's value." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "wd-200 mg-b-30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "input-group-text", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "svg",
              {
                className: "svg-icon",
                xmlns: "http://www.w3.org/2000/svg",
                height: "18",
                viewBox: "0 0 24 24",
                width: "18",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H4V5h16zM4 21V10h16v11H4z" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 5.01h16V8H4z", opacity: ".3" })
                ]
              }
            ) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DatePicker$1,
              {
                className: "form-control",
                placeholder: "Date Range",
                value: dates,
                onChange: setDates,
                multiple: true,
                numberOfMonths: 1
              }
            )
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Multiple Months " }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mg-b-20 mg-sm-b-40", children: "The datepicker is tied to a standard form input field. Click on the input to open an interactive calendar in a small overlay. If a date is chosen, feedback is shown as the input's value." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "wd-200 mg-b-30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "input-group-text", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "svg",
              {
                className: "svg-icon",
                xmlns: "http://www.w3.org/2000/svg",
                height: "18",
                viewBox: "0 0 24 24",
                width: "18",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H4V5h16zM4 21V10h16v11H4z" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 5.01h16V8H4z", opacity: ".3" })
                ]
              }
            ) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DatePicker$1,
              {
                className: "form-control",
                placeholder: "MM/DD/YYYY",
                numberOfMonths: 2,
                plugins: []
              }
            )
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: "12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Multiple Select Styles" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { lg: "6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Basic MutipleSelect" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(BasicMutipleSelect, {})
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Disabled MutipleSelect" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(DisabledMutipleSelect, {})
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Single Group Disabled MutipleSelect" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Singleselectdis, {})
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Multiple Items With Group-Option" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(MultipleGroupOption, {})
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Single Row" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Singleselect1, {})
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { lg: "6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "MutipleSelect" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(MutipleSelect, {})
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Multiple Items" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(MultipleItems, {})
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Single Select" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectAll, {})
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Search Select Filter" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectFilter, {})
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Custom Style" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CustomisedSelector, {})
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Select All Styles" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { lg: "6", md: "12", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "mb-3 row", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "col-md-12 form-label", children: "Single Select:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SlectBox, {}) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "mb-3 row", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "col-md-12 form-label", children: "Disabled Select:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Disabled, {}) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { lg: "6", md: "12", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "col-md-12 form-label", children: "Multiple Select:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Multiple, {}) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "col-md-12 form-label", children: "Disabled Select:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Disabled, {}) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { lg: "6", md: "12", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "col-md-12 form-label", children: "Multiple Select-1:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MultipleSelect1, {}) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 row ", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "col-md-12 form-label", children: "Multiple Select-2:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MultipleSelect2, {}) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "col-md-12 form-label", children: "Search Select-1:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchSelect1, {}) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { lg: "6", md: "12", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "col-md-12 form-label", children: "Search Select-2:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchSelect2, {}) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "col-md-12 form-label", children: "Search Select-3:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchSelect3, {}) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "col-md-12 form-label", children: "Search Select-4:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchSelect4, {}) })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Dual List Box" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-none border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "transfer data-transfer1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TransferList1, {}) }) }) }) }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Select Box" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormGroup, { className: "mb-5 mb-lg-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Selectbox1, {}) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormGroup, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Selectbox, {}) }) })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Country selector" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { className: "d-flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CountryDropdown,
          {
            value: country,
            onChange: (val) => setCountry(val)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button$1, { color: "", type: "submit", className: "btn btn-primary ms-1", children: "Submit" })
      ] }) })
    ] }) }) })
  ] });
};
export {
  AdvancedForms as default
};
