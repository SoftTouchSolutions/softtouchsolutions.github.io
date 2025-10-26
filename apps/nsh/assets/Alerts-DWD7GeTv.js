import{r as t,j as e}from"./mui-CVeSmhdP.js";import{f as U,R as v,C as r,g as c,n as o,h as d,a3 as x,B as i,b as E}from"./index-Cjmwo3Rz.js";import{N as Y}from"./Nav-Meg3AY9M.js";import{N as b}from"./NavItem-DFL1MVIS.js";import{N as j}from"./NavLink-BBjV8JOM.js";import{C as u}from"./CardTitle-_F_6FAAC.js";import{U as m,P as h,a as p}from"./PopoverBody-BuhdrHJn.js";import{T as O,a as w}from"./TabPane-rZyYhe8x.js";import"./vendor-CC_ZIGTP.js";import"./utils-ngrFHoWO.js";import"./TooltipPopoverWrapper-8trlSTf5.js";const Q=[{id:"1",color:"success",text:"alert—At vero eos et accusamus praesentium!",show:" Success"},{id:"2",color:"info",text:"alert—At vero eos et accusamus praesentium!",show:" Info"},{id:"3",color:"warning",text:"alert—At vero eos et accusamus praesentium!",show:"Warning"},{id:"4",color:"danger",text:"alert—At vero eos et accusamus praesentium!",show:"Danger"}],G=[{id:"21",class:"alert alert-success",color:"success",text:"You successfully read",show:"Well done!",linktext:" this important alert message.",text2:""},{id:"22",class:"alert alert-info",color:"info",text:"This",show:"Heads up!",linktext:" alert needs your attention,",text2:" but it's not super important."},{id:"23",class:"alert alert-warning",color:"warning",text:"Better check yourself, you're",show:"Warning! ",linktext:" not looking too good.",text2:""},{id:"24",class:"alert alert-danger",color:"danger",text:"",show:"Oh snap!",linktext:" Change a few things up",text2:" and try submitting again."}],J=[{id:"11",color:"success",class:"alert alert-success",show:"Success Message",text:"You successfully read this important alert message."},{id:"12",color:"info",class:"alert alert-info",show:"Info Message",text:"This alert needs your attention, but it's not super important."},{id:"13",color:"warning",class:"alert alert-warning",show:"Warning Message",text:"Best check yo self, you're not looking too good."},{id:"14",color:"danger",class:"alert alert-danger",show:"Danger Message",text:"Change a few things up and try submitting again."}],K=[{id:"31",color:"success",class:"alert alert-success",icon:"fa fa-check-circle-o me-2",text:" Well done! You successfully read this important alert message."},{id:"32",color:"info",class:"alert alert-info",icon:"fa fa-bell-o me-2",text:"Heads up! This alert needs your attention, but it's not super important."},{id:"33",color:"warning",class:"alert alert-warning",icon:"fa fa-exclamation me-2",text:"Warning! Better check yourself, you're not looking too good."},{id:"34",color:"danger",class:"alert alert-danger",icon:"fa fa-frown-o me-2",text:"Oh snap!Change a few things up and try submitting again."}],q=()=>{const N=t.useRef(),f=t.useRef(),y=t.useRef(),k=t.useRef(),C=t.useRef(),S=t.useRef();let n=s=>{var a;let l=(a=s.current)==null?void 0:a.innerText;navigator.clipboard.writeText(l),alert("Text copied successfully")};const[L,V]=t.useState("info"),g=s=>{L!==s&&V(s)},[A,P]=t.useState(Q);let B=s=>{const l=A.filter(a=>a.id!==s);P(l)};const[H,I]=t.useState(G);let T=s=>{const l=H.filter(a=>a.id!==s);I(l)};const[M,R]=t.useState(J);let D=s=>{const l=M.filter(a=>a.id!==s);R(l)};const[z,W]=t.useState(K);let F=s=>{const l=z.filter(a=>a.id!==s);W(l)};return e.jsxs("div",{children:[e.jsx(U,{title:"Alerts",home:"Home",name:"Elements",fonticonsname:"Alerts"}),e.jsx(v,{children:e.jsx(r,{lg:"12",children:e.jsxs(c,{children:[e.jsx(o,{children:e.jsx(u,{tag:"h3",children:"Default alerts"})}),e.jsx(d,{children:A.map(s=>e.jsxs(x,{color:s.color,className:"default-alerts",children:[e.jsx(i,{color:"",type:"button",onClick:()=>B(s.id),className:"btn-close"})," ",e.jsx("strong",{children:s.show})," ",s.text]},Math.random()))}),e.jsxs("div",{className:"html-code",children:[e.jsxs("svg",{className:"svg-icon me-2",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"})]})," ","Show Code"," "]}),e.jsxs("figure",{className:"highlight mb-0",id:"element1",children:[e.jsx("pre",{ref:N,children:e.jsx("code",{className:"language-markup mb-0",children:`
  const [alertData, setalertData] = useState(initialList);
  let handleRemove = (id) => {
    const newList = alertData.filter((list) => list.id !== id);
    setalertData(newList);
  }
              {alertData.map((item) => (
                        <Alert key={Math.random()}
                          className={item.class}
                          color={item.color}
                        >
                          {" "}
                          <strong>{item.show}</strong> {item.text}
                          <Button
                            color=""
                            type="button"
                            onClick={() => handleRemove(item.id)}
                            className="btn-close btn"
                          >
                            
                          </Button>
                        </Alert>
              ))}`})}),e.jsx("div",{className:"clipboard-icon","data-clipboard-target":"#element1",children:e.jsxs("svg",{onClick:()=>{n(N)},className:"svg-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"}),e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"})]})})]})]})})}),e.jsx(v,{children:e.jsx(r,{lg:"12",children:e.jsxs(c,{children:[e.jsx(o,{children:e.jsx(u,{tag:"h3",children:"Links in alerts"})}),e.jsx(d,{children:H.map(s=>e.jsxs(x,{className:s.class,color:s.color,children:[" ",e.jsx("strong",{children:s.show})," ",s.text,e.jsx(i,{color:"",type:"button",onClick:()=>T(s.id),className:"btn-close btn"}),e.jsx(E,{className:"alert-link",to:"#",children:s.linktext}),s.text2]},Math.random()))}),e.jsxs("div",{className:"html-code",children:[e.jsxs("svg",{className:"svg-icon me-2",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"})]})," ","Show Code"," "]}),e.jsxs("figure",{className:"highlight mb-0",id:"element3",children:[e.jsx("pre",{ref:f,children:e.jsx("code",{className:"language-markup mb-0",children:`
                const [linkalert, setlinkalert] = useState(LinkData);
                let handleRemove1 = (id) => {
                  const newList = linkalert.filter((list) => list.id !== id);
                  setlinkalert(newList);
                }
                {linkalert.map((item) => (
                        <Alert key={Math.random()}
                          className={item.class}
                          color={item.color}
                        >
                          {" "}
                          <strong>{item.show}</strong> {item.text}
                          <Button
                            color=""
                            type="button"
                            onClick={() => handleRemove1(item.id)}
                            className="btn-close btn"
                          >
                            
                          </Button>
                          <Link
      className="alert-link"
      to="#"
    >
     {item.linktext}
    </Link>
    {item.text2}
                        </Alert>
              ))}`})}),e.jsx("div",{className:"clipboard-icon","data-clipboard-target":"#element3",children:e.jsxs("svg",{onClick:()=>{n(f)},className:"svg-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"}),e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"})]})})]})]})})}),e.jsxs(v,{children:[e.jsxs(r,{md:"12",children:[e.jsxs(c,{children:[e.jsx(o,{children:e.jsx(u,{tag:"h3",children:"Tabs Alerts"})}),e.jsxs(d,{children:[e.jsxs(Y,{className:"nav nav-pills nav-with-alerts row",children:[e.jsx(b,{tag:"li",className:"col-lg-3",children:e.jsx(j,{tag:"a",onClick:()=>{g("info")},children:e.jsx("div",{className:"alert alert-info",children:"Informations"})})}),e.jsx(b,{className:"col-lg-3",children:e.jsx(j,{onClick:()=>{g("success")},children:e.jsx("div",{className:"alert alert-success",children:"Successes"})})}),e.jsx(b,{className:"col-lg-3",children:e.jsx(j,{onClick:()=>{g("warning")},children:e.jsx("div",{className:"alert alert-warning",children:"Warnings"})})}),e.jsx(b,{className:"col-lg-3",children:e.jsx(j,{onClick:()=>{g("error")},children:e.jsx("div",{className:"alert alert-danger",children:"Errors"})})})]}),e.jsxs(O,{className:"tab-content",activeTab:L,children:[e.jsx(w,{className:"tab-pane",tabId:"info",children:e.jsx("div",{className:"alert alert-info",children:e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula nec arcu at faucibus. Duis justo urna, adipiscing quis turpis non, dictum hendrerit ipsum. Fusce non viverra erat. Curabitur sit amet ante dui. Donec congue molestie mi a varius. Suspendisse potenti. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ornare quam eu ultricies bibendum. Cras ante augue, pharetra eget ultricies eu, aliquam eu velit. Phasellus mattis vitae justo pretium tempus. Duis vitae felis et sem tristique suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit"})})}),e.jsx(w,{className:"tab-pane",tabId:"success",children:e.jsx("div",{className:"alert alert-success",children:e.jsx("p",{children:"Nulla magna sapien, ullamcorper nec dolor id, gravida venenatis velit. Aliquam et malesuada metus. Sed vitae turpis pharetra nunc dignissim ultricies et sit amet lacus. Cras gravida felis mauris, a pellentesque augue interdum ac. In varius facilisis ante, nec viverra libero commodo ac. Maecenas tempus, elit nec aliquet fermentum, tellus odio auctor sapien, eu scelerisque purus turpis quis eros. Morbi id ante diam. Phasellus aliquet purus id odio mollis dignissim. Proin sagittis, risus a ullamcorper dapibus, velit enim adipiscing nulla, vel facilisis ipsum dui quis diam. Aliquam ullamcorper accumsan felis id consequat. Nullam vehicula ut mi eget porta."})})}),e.jsx(w,{className:"tab-pane",tabId:"warning",children:e.jsx("div",{className:"alert alert-warning",children:e.jsx("p",{children:"Curabitur varius euismod nisi ac lacinia. Curabitur nec urna adipiscing, fermentum augue id, commodo nisl. Quisque ut convallis est. Suspendisse tellus nisi, tempus eu nulla quis, laoreet imperdiet ante. Vivamus in lorem purus. Integer luctus elit et metus condimentum porta. Suspendisse viverra sit amet mauris vel elementum. Fusce lorem arcu, accumsan non odio vel, vestibulum pharetra odio. Sed non mollis mi, ac lacinia nunc. Cras eleifend massa velit, tincidunt tempor arcu sodales at. Nam sit amet erat enim. Mauris placerat suscipit odio, vitae gravida purus bibendum sed. Suspendisse a nunc quis libero rutrum mattis at ac metus. In ac risus eleifend, vestibulum mi eget, dapibus nulla. Nunc diam eros, convallis a sagittis non, rhoncus non nunc. Maecenas in eleifend quam."})})}),e.jsx(w,{className:"tab-pane",tabId:"error",children:e.jsx("div",{className:"alert alert-danger",children:e.jsx("p",{children:"Sed quis dapibus nunc. Proin vestibulum libero elit, gravida tincidunt mauris tincidunt blandit. Donec non ultrices neque, nec sollicitudin elit. Curabitur volutpat nulla vel mauris vestibulum, tempor ultrices quam ullamcorper. Fusce ultricies elementum pretium. In vel consectetur leo, nec rutrum velit. Fusce fermentum pulvinar nibh. Ut posuere ante sed luctus egestas. Aenean ut suscipit tortor."})})})]})]}),e.jsxs("div",{className:"html-code",children:[e.jsxs("svg",{className:"svg-icon me-2",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"})]})," ","Show Code"," "]}),e.jsxs("figure",{className:"highlight mb-0",id:"element4",children:[e.jsx("pre",{ref:y,children:e.jsx("code",{className:"language-markup mb-0",children:`
                
                
                <Nav className="nav nav-pills nav-with-alerts row">
                    <NavItem tag="li" className="col-lg-3">
                      <NavLink tag="a" onClick={() => { style("info"); }} data-bs-toggle="tab">
                        <div className="alert alert-info">Informations</div>
                      </NavLink>
                    </NavItem>
                    <NavItem className="col-lg-3">
                      <NavLink onClick={() => { style("success"); }} data-bs-toggle="tab">
                        <div className="alert alert-success">Successes</div>
                      </NavLink>
                    </NavItem>
                    <NavItem className="col-lg-3">
                      <NavLink onClick={() => { style("warning"); }} data-bs-toggle="tab">
                        <div className="alert alert-warning">Warnings</div>
                      </NavLink>
                    </NavItem>
                    <NavItem className="col-lg-3">
                      <NavLink onClick={() => { style("error"); }} data-bs-toggle="tab">
                        <div className="alert alert-danger">Errors</div>
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent className="tab-content" activeTab={Tab1}>
                    <TabPane className="tab-pane" tabId="info">
                      <div className="alert alert-info">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut vehicula nec arcu at faucibus. Duis justo
                          urna, adipiscing quis turpis non, dictum hendrerit
                          ipsum. Fusce non viverra erat. Curabitur sit amet ante
                          dui. Donec congue molestie mi a varius. Suspendisse
                          potenti. Cum sociis natoque penatibus et magnis dis
                          parturient montes, nascetur ridiculus mus. Aliquam
                          ornare quam eu ultricies bibendum. Cras ante augue,
                          pharetra eget ultricies eu, aliquam eu velit.
                          Phasellus mattis vitae justo pretium tempus. Duis
                          vitae felis et sem tristique suscipit. Lorem ipsum
                          dolor sit amet, consectetur adipiscing elit
                        </p>
                      </div>
                    </TabPane>
                    <TabPane className="tab-pane" tabId="success">
                      <div className="alert alert-success">
                        <p>
                          Nulla magna sapien, ullamcorper nec dolor id, gravida
                          venenatis velit. Aliquam et malesuada metus. Sed vitae
                          turpis pharetra nunc dignissim ultricies et sit amet
                          lacus. Cras gravida felis mauris, a pellentesque augue
                          interdum ac. In varius facilisis ante, nec viverra
                          libero commodo ac. Maecenas tempus, elit nec aliquet
                          fermentum, tellus odio auctor sapien, eu scelerisque
                          purus turpis quis eros. Morbi id ante diam. Phasellus
                          aliquet purus id odio mollis dignissim. Proin
                          sagittis, risus a ullamcorper dapibus, velit enim
                          adipiscing nulla, vel facilisis ipsum dui quis diam.
                          Aliquam ullamcorper accumsan felis id consequat.
                          Nullam vehicula ut mi eget porta.
                        </p>
                      </div>
                    </TabPane>
                    <TabPane className="tab-pane" tabId="warning">
                      <div className="alert alert-warning">
                        <p>
                          Curabitur varius euismod nisi ac lacinia. Curabitur
                          nec urna adipiscing, fermentum augue id, commodo nisl.
                          Quisque ut convallis est. Suspendisse tellus nisi,
                          tempus eu nulla quis, laoreet imperdiet ante. Vivamus
                          in lorem purus. Integer luctus elit et metus
                          condimentum porta. Suspendisse viverra sit amet mauris
                          vel elementum. Fusce lorem arcu, accumsan non odio
                          vel, vestibulum pharetra odio. Sed non mollis mi, ac
                          lacinia nunc. Cras eleifend massa velit, tincidunt
                          tempor arcu sodales at. Nam sit amet erat enim. Mauris
                          placerat suscipit odio, vitae gravida purus bibendum
                          sed. Suspendisse a nunc quis libero rutrum mattis at
                          ac metus. In ac risus eleifend, vestibulum mi eget,
                          dapibus nulla. Nunc diam eros, convallis a sagittis
                          non, rhoncus non nunc. Maecenas in eleifend quam.
                        </p>
                      </div>
                    </TabPane>
                    <TabPane className="tab-pane" tabId="error">
                      <div className="alert alert-danger">
                        <p>
                          Sed quis dapibus nunc. Proin vestibulum libero elit,
                          gravida tincidunt mauris tincidunt blandit. Donec non
                          ultrices neque, nec sollicitudin elit. Curabitur
                          volutpat nulla vel mauris vestibulum, tempor ultrices
                          quam ullamcorper. Fusce ultricies elementum pretium.
                          In vel consectetur leo, nec rutrum velit. Fusce
                          fermentum pulvinar nibh. Ut posuere ante sed luctus
                          egestas. Aenean ut suscipit tortor.
                        </p>
                      </div>
                    </TabPane>
                  </TabContent>`})}),e.jsx("div",{className:"clipboard-icon","data-clipboard-target":"#element4",children:e.jsxs("svg",{onClick:()=>{n(y)},className:"svg-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"}),e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"})]})})]})]}),e.jsxs(c,{children:[e.jsx(o,{children:e.jsx(u,{tag:"h3",children:"Alerts Popovers"})}),e.jsxs(d,{children:[e.jsx(i,{color:"",type:"button",className:"me-1 btn btn-success mt-1 mb-1",id:"Success",children:"Show success"}),e.jsxs(m,{placement:"bottom",target:"Success",children:[e.jsx(h,{tag:"h3",children:"Alert Success"}),e.jsx(p,{children:"Well done! You successfully read this important alert message.."})]}),e.jsx(i,{color:"",type:"button",className:"me-1 btn btn-info mt-1 mb-1",id:"Info",children:"Show info"}),e.jsxs(m,{placement:"top",target:"Info",children:[e.jsx(h,{tag:"h3",children:"Alert Info"}),e.jsx(p,{children:"Heads up! This alert needs your attention, but it's not super important..."})]}),e.jsx(i,{color:"",type:"button",className:"me-1 btn btn-warning mt-1 mb-1",id:"Warning",children:"Show warning"}),e.jsxs(m,{placement:"bottom",target:"Warning",children:[e.jsx(h,{tag:"h3",children:"Alert Warning"}),e.jsx(p,{children:"Warning! Best check yo self, you're not looking too good.."})]}),e.jsx(i,{color:"",type:"button",className:"me-1 btn btn-secondary mt-1 mb-1",id:"Secondary",children:"Show secondary"}),e.jsxs(m,{placement:"top",target:"Secondary",children:[e.jsx(h,{tag:"h3",children:"Alert Secondary"}),e.jsx(p,{children:"Error! Please Check u r emial id.."})]}),e.jsx(i,{color:"",type:"button",className:"me-1 btn btn-danger mt-1 mb-1",id:"Danger",children:"Show danger"}),e.jsxs(m,{placement:"bottom",target:"Danger",children:[e.jsx(h,{tag:"h3",children:"Alert Danger"}),e.jsx(p,{children:"Oh snap! Change a few things up and try submitting again.."})]}),e.jsx(i,{color:"",type:"button",className:"me-1 btn btn-primary mt-1 mb-1",id:"Primary",children:"Show primary"}),e.jsxs(m,{placement:"top",target:"Primary",children:[e.jsx(h,{tag:"h3",children:"Alert Primary"}),e.jsx(p,{children:"Cool! This alert will close in 3 seconds. The data-delay attribute is in milliseconds.."})]})]}),e.jsxs("div",{className:"html-code",children:[e.jsxs("svg",{className:"svg-icon me-2",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"})]})," ","Show Code"," "]}),e.jsxs("figure",{className:"highlight mb-0",id:"element5",children:[e.jsx("pre",{ref:k,children:e.jsx("code",{className:"language-markup mb-0",children:`<Button 
            color=""
              type="button"
              className="me-1 btn btn-success mt-1 mb-1"
              id="Success"
            >
              Show success
            </Button>
            <UncontrolledPopover
    placement="bottom"
    target="Success"
  >
    <PopoverHeader tag="h3" >
     Alert Success
    </PopoverHeader>
    <PopoverBody >
    Well done! You successfully read this important alert message..
    </PopoverBody>
  </UncontrolledPopover>`})}),e.jsx("div",{className:"clipboard-icon","data-clipboard-target":"#element5",children:e.jsxs("svg",{onClick:()=>{n(k)},className:"svg-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"}),e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"})]})})]})]})]}),e.jsx(r,{md:"12",children:e.jsxs(c,{children:[e.jsx(o,{children:e.jsx(u,{tag:"h3",children:"Alerts style"})}),e.jsx(d,{children:e.jsx(v,{children:M.map(s=>e.jsx(r,{sm:"6",md:"6",children:e.jsxs(x,{className:s.class,color:s.color,children:[" ",e.jsx("strong",{children:s.show}),e.jsx(i,{color:"",type:"button",onClick:()=>D(s.id),className:"btn-close btn"}),e.jsx("hr",{className:"message-inner-separator"}),s.text]})},Math.random()))})}),e.jsxs("div",{className:"html-code",children:[e.jsxs("svg",{className:"svg-icon me-2",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"})]})," ","Show Code"," "]}),e.jsxs("figure",{className:"highlight mb-0",id:"element6",children:[e.jsx("pre",{ref:C,children:e.jsx("code",{className:"language-markup mb-0",children:`
                 const [AlertsStyledata, setAlertsStyledata] = useState(AlertsStyle);
                 let handleRemove2 = (id) => {
                   const newList = AlertsStyledata.filter((list) => list.id !== id);
                   setAlertsStyledata(newList);
                 }
               
               {AlertsStyledata.map((item) => (
              <Col sm="6"md="6"  key={Math.random()}>
                        <Alert
                          className={item.class}
                          color={item.color}
                        >
                          {" "}
                          <strong>{item.show}</strong>
                          <Button
                            color=""
                            type="button"
                            onClick={() => handleRemove2(item.id)}
                            className="btn-close btn"
                          >
                            
                          </Button>
                          
                          <hr className="message-inner-separator" />
                           {item.text}
                        </Alert>
              </Col>
              ))}`})}),e.jsx("div",{className:"clipboard-icon","data-clipboard-target":"#element6",children:e.jsxs("svg",{onClick:()=>{n(C)},className:"svg-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"}),e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"})]})})]})]})}),e.jsx(r,{lg:"12",children:e.jsxs(c,{children:[e.jsx(o,{children:e.jsx(u,{tag:"h3",children:"Alert with icon"})}),e.jsx(d,{children:z.map(s=>e.jsxs(x,{className:s.class,color:s.color,children:[" ",e.jsx(i,{color:"",type:"button",onClick:()=>F(s.id),className:"btn-close btn"}),e.jsx("i",{className:s.icon,"aria-hidden":"true"}),s.text]},Math.random()))}),e.jsxs("div",{className:"html-code",children:[e.jsxs("svg",{className:"svg-icon me-2",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"})]})," ","Show Code"," "]}),e.jsxs("figure",{className:"highlight mb-0",id:"element7",children:[e.jsx("pre",{ref:S,children:e.jsx("code",{className:"language-markup mb-0",children:`
                const [Alertsicon, setAlertsicon] = useState(Alerticon);
                let handleRemove3 = (id) => {
                  const newList = Alertsicon.filter((list) => list.id !== id);
                  setAlertsicon(newList);
                }
                
                {Alertsicon.map((item) => (
                        <Alert key={Math.random()}
                          className={item.class}
                          color={item.color}
                        >
                          {" "}
                          <Button
                            color=""
                            type="button"
                            onClick={() => handleRemove3(item.id)}
                            className="btn-close btn"
                          >
                            
                          </Button>
                          
                          <i className={item.icon} aria-hidden="true"></i>{item.text}
                        </Alert>
              
              ))}
           `})}),e.jsx("div",{className:"clipboard-icon","data-clipboard-target":"#element7",children:e.jsxs("svg",{onClick:()=>{n(S)},className:"svg-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"}),e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"})]})})]})]})})]})]})};q.propTypes={};q.defaultProps={};export{q as default};
