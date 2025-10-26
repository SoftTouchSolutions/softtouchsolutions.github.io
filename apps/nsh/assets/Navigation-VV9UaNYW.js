import{r as t,j as e}from"./mui-CVeSmhdP.js";import{f as L,R as g,C as b,g as m,n as r,h as v,c as I,D as u}from"./index-BH8F5Bwl.js";import{N as l}from"./Nav-BlskVxrg.js";import{N as a}from"./NavItem-20VLgmJg.js";import{N as s}from"./NavLink-D1pQOg5H.js";import{U as y,D as N}from"./UncontrolledDropdown-C5RMXKxY.js";import{C as h}from"./CardTitle-DfjUI6oT.js";import"./vendor-CC_ZIGTP.js";import"./utils-ngrFHoWO.js";const w=()=>{const d=t.useRef(),o=t.useRef(),x=t.useRef(),k=t.useRef(),j=t.useRef(),p=t.useRef();let c=i=>{var f;let n=(f=i.current)==null?void 0:f.innerText;navigator.clipboard.writeText(n),alert("Text copied successfully")};return e.jsxs("div",{children:[e.jsx(L,{title:"Navigation",home:"Home",name:"Elements",fonticonsname:"Navigation"}),e.jsx(g,{children:e.jsxs(b,{className:"col-12",children:[e.jsxs(m,{children:[e.jsx(r,{children:e.jsx(h,{tag:"h3",children:"Basic Nav"})}),e.jsx(v,{children:e.jsxs(l,{className:"nav1 br-7",children:[e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link ",active:!0,"aria-current":"page",href:"#",children:"Active"})}),e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link",href:"#",children:"Link"})}),e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link",href:"#",children:"Link"})}),e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link ",disabled:!0,href:"#",children:"Disabled"})})]})}),e.jsxs("div",{className:"html-code",children:[e.jsxs("svg",{className:"svg-icon me-2",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"})]})," ","Show Code"," "]}),e.jsxs("figure",{className:"highlight mb-0",id:"element1",children:[e.jsx("pre",{ref:d,children:e.jsx("code",{className:"language-markup mb-0",children:`
    <Nav className="nav1 br-7">
    <NavItem className="nav-item1">
      <NavLink
        className="nav-link "
        active
        aria-current="page"
        href="#"
      >
        Active
      </NavLink>
    </NavItem>
    <NavItem className="nav-item1">
      <NavLink className="nav-link" href="#">
        Link
      </NavLink>
    </NavItem>
    <NavItem className="nav-item1">
      <NavLink className="nav-link" href="#">
        Link
      </NavLink>
    </NavItem>
    <NavItem className="nav-item1">
      <NavLink className="nav-link " disabled href="#">
        Disabled
      </NavLink>
    </NavItem>
              </Nav>
              `})}),e.jsx("div",{className:"clipboard-icon","data-clipboard-target":"#element1",children:e.jsxs("svg",{onClick:()=>{c(d)},className:"svg-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"}),e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"})]})})]})]}),e.jsxs(m,{children:[e.jsx(r,{children:e.jsx(h,{tag:"h3",children:"Nav Vertical"})}),e.jsx(v,{children:e.jsxs(l,{vertical:!0,className:"nav1 flex-column br-7",children:[e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link",active:!0,"aria-current":"page",href:"#",children:"Active"})}),e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link",href:"#",children:"Link"})}),e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link",href:"#",children:"Link"})}),e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link",disabled:!0,href:"#",children:"Disabled"})})]})}),e.jsxs("div",{className:"html-code",children:[e.jsxs("svg",{className:"svg-icon me-2",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"})]})," ","Show Code"," "]}),e.jsxs("figure",{className:"highlight mb-0",id:"element2",children:[e.jsx("pre",{ref:o,children:e.jsxs("code",{className:"language-markup mb-0",children:[`
    <Nav vertical className="nav1 flex-column br-7">
    <NavItem className="nav-item1">
      <NavLink
        className="nav-link"
        active
        aria-current="page"
        href="#"
      >
        Active
      </NavLink>
    </NavItem>
    <NavItem className="nav-item1">
      <NavLink className="nav-link" href="#">
        Link
      </NavLink>
    </NavItem>
    <NavItem className="nav-item1">
      <NavLink className="nav-link" href="#">
        Link
      </NavLink>
    </NavItem>
    <NavItem className="nav-item1">
      <NavLink className="nav-link" disabled href="#">
        Disabled
      </NavLink>
    </NavItem>
    </Nav>
              `," "]})}),e.jsx("div",{className:"clipboard-icon","data-clipboard-target":"#element2",children:e.jsxs("svg",{onClick:()=>{c(o)},className:"svg-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"}),e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"})]})})]})]}),e.jsxs(m,{children:[e.jsx(r,{children:e.jsx(h,{tag:"h3",children:"Color Navigation"})}),e.jsx(v,{children:e.jsxs(l,{pills:!0,className:"nav nav-pills",children:[e.jsx(a,{className:"nav-item m-2",children:e.jsx(s,{className:"nav-link  px-4 py-2",active:!0,href:"#",children:"Active"})}),e.jsxs(y,{nav:!0,className:"nav-item dropdown m-2",children:[e.jsx(I,{color:"",className:"nav-link dropdown-toggle px-4 py-2","data-bs-toggle":"dropdown",role:"button","aria-expanded":"false",children:"Dropdown"}),e.jsxs(u,{className:"dropdown-menu",children:[e.jsx(N,{className:"dropdown-item",href:"#",children:"Action"}),e.jsx(N,{className:"dropdown-item",href:"#",children:"Another action"}),e.jsx(N,{className:"dropdown-item",href:"#",children:"Something else here"}),e.jsx(N,{divider:!0}),e.jsx(N,{className:"dropdown-item",href:"#",children:"Separated link"})]})]}),e.jsx(a,{className:"nav-item m-2",children:e.jsx(s,{className:"nav-link px-4 py-2",href:"#",children:"Link"})}),e.jsx(a,{className:"nav-item m-2",children:e.jsx(s,{className:"nav-link  px-4 py-2",disabled:!0,href:"#",children:"Disabled"})})]})}),e.jsxs("div",{className:"html-code",children:[e.jsxs("svg",{className:"svg-icon me-2",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"})]})," ","Show Code"," "]}),e.jsxs("figure",{className:"highlight mb-0",id:"element3",children:[e.jsx("pre",{ref:x,children:e.jsx("code",{className:"language-markup mb-0",children:`
     <Nav pills className="nav nav-pills">
     <NavItem className="nav-item m-2">
       <NavLink className="nav-link  px-4 py-2" active href="#">
         Active
       </NavLink>
     </NavItem>
     <UncontrolledDropdown nav className="nav-item dropdown m-2">
       <DropdownToggle
         color=""
         className="nav-link dropdown-toggle px-4 py-2"
         data-bs-toggle="dropdown"
         role="button"
         aria-expanded="false"
       >
         Dropdown
       </DropdownToggle>
       <DropdownMenu className="dropdown-menu">
         <DropdownItem className="dropdown-item" href="#">
           Action
         </DropdownItem>
         <DropdownItem className="dropdown-item" href="#">
           Another action
         </DropdownItem>
         <DropdownItem className="dropdown-item" href="#">
           Something else here
         </DropdownItem>
         <DropdownItem divider></DropdownItem>
         <DropdownItem className="dropdown-item" href="#">
           Separated link
         </DropdownItem>
       </DropdownMenu>
     </UncontrolledDropdown>
     <NavItem className="nav-item m-2">
       <NavLink className="nav-link px-4 py-2" href="#">
         Link
       </NavLink>
     </NavItem>
     <NavItem className="nav-item m-2">
       <NavLink className="nav-link  px-4 py-2" disabled href="#">
         Disabled
       </NavLink>
     </NavItem>
   </Nav>
   `})}),e.jsx("div",{className:"clipboard-icon","data-clipboard-target":"#element3",children:e.jsxs("svg",{onClick:()=>{c(x)},className:"svg-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"}),e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"})]})})]})]}),e.jsxs(m,{children:[e.jsx(r,{children:e.jsx(h,{tag:"h3",children:"Icon Navigation"})}),e.jsx(v,{children:e.jsxs(l,{tabs:!0,pills:!0,className:"nav-pills-circle",children:[e.jsx(a,{children:e.jsx(s,{href:"#",onClick:i=>{document.querySelectorAll(".activeFunction").forEach(n=>{n.classList.remove("active")}),i.target.classList.add("active")},className:"border py-3 px-5 m-2",children:e.jsxs("span",{className:"activeFunction nav-link-icon d-block",children:[" ",e.jsx("i",{className:"fe fe-home"})," Home"]})})}),e.jsx(a,{children:e.jsx(s,{href:"#",onClick:i=>{document.querySelectorAll(".activeFunction").forEach(n=>{n.classList.remove("active")}),i.target.classList.add("active")},className:"border py-3 px-5 m-2",children:e.jsxs("span",{className:"activeFunction nav-link-icon d-block",children:[e.jsx("i",{className:"fe fe-unlock"})," Lock"," "]})})}),e.jsx(a,{children:e.jsx(s,{href:"#",onClick:i=>{document.querySelectorAll(".activeFunction").forEach(n=>{n.classList.remove("active")}),i.target.classList.add("active")},className:"border py-3 px-5 m-2",children:e.jsxs("span",{className:"activeFunction nav-link-icon d-block",children:[e.jsx("i",{className:"fe fe-play"})," Videos"]})})}),e.jsx(a,{children:e.jsx(s,{href:"#",onClick:i=>{document.querySelectorAll(".activeFunction").forEach(n=>{n.classList.remove("active")}),i.target.classList.add("active")},className:"border py-3 px-5 m-2",children:e.jsxs("span",{className:"activeFunction nav-link-icon d-block",children:[e.jsx("i",{className:"fe fe-layers"})," Servers"]})})}),e.jsx(a,{children:e.jsx(s,{href:"#",onClick:i=>{document.querySelectorAll(".activeFunction").forEach(n=>{n.classList.remove("active")}),i.target.classList.add("active")},className:"border py-3 px-5 m-2",children:e.jsxs("span",{className:"activeFunction nav-link-icon d-block",children:[e.jsx("i",{className:"fe fe-image"})," Gallery"," "]})})})]})}),e.jsxs("div",{className:"html-code",children:[e.jsxs("svg",{className:"svg-icon me-2",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"})]})," ","Show Code"," "]}),e.jsxs("figure",{className:"highlight mb-0",id:"element5",children:[e.jsx("pre",{ref:k,children:e.jsx("code",{className:"language-markup mb-0",children:`
    <Nav tabs pills className="nav-pills-circle">
    <NavItem>
      <NavLink href="#" className="border py-3 px-5 m-2" active><span className="nav-link-icon d-block"> <i className="fe fe-home"></i> Home</span></NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#" className="border py-3 px-5 m-2"><span className="nav-link-icon d-block"><i className="fe fe-unlock"></i> Lock{" "}</span></NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#" className="border py-3 px-5 m-2"><span className="nav-link-icon d-block"><i className="fe fe-play"></i> Videos</span></NavLink>  
    </NavItem>
    <NavItem>
      <NavLink  href="#" className="border py-3 px-5 m-2"><span className="nav-link-icon d-block"><i className="fe fe-layers"></i> Servers</span></NavLink>
    </NavItem>
    <NavItem>
      <NavLink  href="#" className="border py-3 px-5 m-2"><span className="nav-link-icon d-block"><i className="fe fe-image"></i> Gallery{" "}</span></NavLink>
    </NavItem>
  </Nav>`})}),e.jsx("div",{className:"clipboard-icon","data-clipboard-target":"#element5",children:e.jsxs("svg",{onClick:()=>{c(k)},className:"svg-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"}),e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"})]})})]})]}),e.jsxs(m,{children:[e.jsx(r,{children:e.jsx(h,{tag:"h3",children:"Icon Nav Bar"})}),e.jsx(v,{children:e.jsxs(l,{tabs:!0,pills:!0,className:"nav-pills-circle",children:[e.jsx(a,{children:e.jsx(s,{href:"#",className:"border w-8 h-8 text-center br-100 m-2",active:!0,children:e.jsx("span",{className:"nav-link-icon d-block text-center mx-auto",children:e.jsx("i",{className:"fe fe-home fs-20"})})})}),e.jsx(a,{children:e.jsx(s,{href:"#",className:"border w-8 h-8 text-center br-100 m-2",children:e.jsxs("span",{className:"nav-link-icon d-block text-center mx-auto",children:[e.jsx("i",{className:"fe fe-unlock fs-20"})," "]})})}),e.jsx(a,{children:e.jsx(s,{href:"#",className:"border w-8 h-8 text-center br-100 m-2",children:e.jsx("span",{className:"nav-link-icon d-block text-center mx-auto",children:e.jsx("i",{className:"fe fe-play fs-20"})})})}),e.jsx(a,{children:e.jsx(s,{href:"#",className:"border w-8 h-8 text-center br-100 m-2",children:e.jsx("span",{className:"nav-link-icon d-block text-center mx-auto",children:e.jsx("i",{className:"fe fe-layers fs-20"})})})}),e.jsx(a,{children:e.jsx(s,{href:"#",className:"border w-8 h-8 text-center br-100 m-2",children:e.jsxs("span",{className:"nav-link-icon d-block text-center mx-auto",children:[e.jsx("i",{className:"fe fe-image fs-20"})," "]})})})]})}),e.jsxs("div",{className:"html-code",children:[e.jsxs("svg",{className:"svg-icon me-2",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"})]})," ","Show Code"," "]}),e.jsxs("figure",{className:"highlight mb-0",id:"element6",children:[e.jsx("pre",{ref:j,children:e.jsx("code",{className:"language-markup mb-0",children:`
                 <Nav tabs pills className="nav-pills-circle">
                 <NavItem>
                   <NavLink href="#" className="border w-8 h-8 text-center br-100 m-2" active><span className="nav-link-icon d-block text-center mx-auto"><i className="fe fe-home fs-20"></i></span></NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink href="#" className="border w-8 h-8 text-center br-100 m-2"><span className="nav-link-icon d-block text-center mx-auto"><i className="fe fe-unlock fs-20"></i> </span></NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink href="#" className="border w-8 h-8 text-center br-100 m-2"><span className="nav-link-icon d-block text-center mx-auto"><i className="fe fe-play fs-20"></i></span></NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink  href="#" className="border w-8 h-8 text-center br-100 m-2"><span className="nav-link-icon d-block text-center mx-auto"><i className="fe fe-layers fs-20"></i></span></NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink  href="#" className="border w-8 h-8 text-center br-100 m-2"><span className="nav-link-icon d-block text-center mx-auto"><i className="fe fe-image fs-20"></i>{" "}</span></NavLink>
                 </NavItem>
               </Nav>
`})}),e.jsx("div",{className:"clipboard-icon","data-clipboard-target":"#element6",children:e.jsxs("svg",{onClick:()=>{c(j)},className:"svg-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"}),e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"})]})})]})]}),e.jsxs(m,{children:[e.jsx(r,{children:e.jsx(h,{tag:"h3",children:"Navigation backgrounds"})}),e.jsxs(v,{children:[e.jsxs(l,{className:"nav1 bg-primary br-7",children:[e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link text-white active",href:"#",children:"Active"})}),e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link text-white",href:"#",children:"Link"})}),e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link text-white",href:"#",children:"Link"})}),e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link disabled text-white-50",href:"#",children:"Disabled"})})]}),e.jsxs(l,{className:"nav1 bg-info mt-4 br-7",children:[e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link text-white active",href:"#",children:"Active"})}),e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link text-white",href:"#",children:"Link"})}),e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link text-white",href:"#",children:"Link"})}),e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link disabled text-white-50",href:"#",children:"Disabled"})})]}),e.jsxs(l,{className:"nav1 bg-success mt-4 br-7",children:[e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link text-white active",href:"#",children:"Active"})}),e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link text-white",href:"#",children:"Link"})}),e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link text-white",href:"#",children:"Link"})}),e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link disabled text-white-50",href:"#",children:"Disabled"})})]}),e.jsxs(l,{className:"nav1 bg-danger mt-4 br-7",children:[e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link text-white active",href:"#",children:"Active"})}),e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link text-white",href:"#",children:"Link"})}),e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link text-white",href:"#",children:"Link"})}),e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link disabled text-white-50",href:"#",children:"Disabled"})})]}),e.jsxs(l,{className:"nav1 bg-secondary mt-4 br-7",children:[e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link text-white active",href:"#",children:"Active"})}),e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link text-white",href:"#",children:"Link"})}),e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link text-white",href:"#",children:"Link"})}),e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link disabled text-white-50",href:"#",children:"Disabled"})})]}),e.jsxs(l,{className:"nav1 bg-yellow mt-4 br-7",children:[e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link text-white active",href:"#",children:"Active"})}),e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link text-white",href:"#",children:"Link"})}),e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link text-white",href:"#",children:"Link"})}),e.jsx(a,{className:"nav-item1",children:e.jsx(s,{className:"nav-link disabled text-white-50",href:"#",children:"Disabled"})})]})]}),e.jsxs("div",{className:"html-code",children:[e.jsxs("svg",{className:"svg-icon me-2",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"})]})," ","Show Code"," "]}),e.jsxs("figure",{className:"highlight mb-0",id:"element7",children:[e.jsx("pre",{ref:p,children:e.jsx("code",{className:"language-markup mb-0",children:`
                <Nav className="nav1 bg-primary br-7">
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white active" href="#">
                    Active
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link disabled text-white-50" href="#">
                    Disabled
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="nav1 bg-info mt-4 br-7">
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white active" href="#">
                    Active
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link disabled text-white-50" href="#">
                    Disabled
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="nav1 bg-success mt-4 br-7">
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white active" href="#">
                    Active
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link disabled text-white-50" href="#">
                    Disabled
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="nav1 bg-danger mt-4 br-7">
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white active" href="#">
                    Active
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link disabled text-white-50" href="#">
                    Disabled
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="nav1 bg-secondary mt-4 br-7">
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white active" href="#">
                    Active
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link disabled text-white-50" href="#">
                    Disabled
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="nav1 bg-yellow mt-4 br-7">
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white active" href="#">
                    Active
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link disabled text-white-50" href="#">
                    Disabled
                  </NavLink>
                </NavItem>
              </Nav>
               `})}),e.jsx("div",{className:"clipboard-icon","data-clipboard-target":"#element7",children:e.jsxs("svg",{onClick:()=>{c(p)},className:"svg-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[e.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.jsx("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"}),e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"})]})})]})]})]})})]})};w.propTypes={};w.defaultProps={};export{w as default};
