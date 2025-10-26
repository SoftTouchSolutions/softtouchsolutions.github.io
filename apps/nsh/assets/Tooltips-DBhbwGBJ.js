import{r as m,j as t}from"./mui-CVeSmhdP.js";import{f as N,R as s,C as o,g as p,n as d,h as g,L as a,B as l}from"./index-Cjmwo3Rz.js";import{C as h}from"./CardTitle-_F_6FAAC.js";import{U as e}from"./UncontrolledTooltip-Bfbgas9B.js";import"./vendor-CC_ZIGTP.js";import"./utils-ngrFHoWO.js";import"./TooltipPopoverWrapper-8trlSTf5.js";const b=()=>{const i=m.useRef(),r=m.useRef();let n=x=>{var c;let j=(c=x.current)==null?void 0:c.innerText;navigator.clipboard.writeText(j),alert("Text copied successfully")};return t.jsxs("div",{children:[t.jsx(N,{title:"Tooltip",home:"Home",name:"Elements",fonticonsname:"Tooltip"}),t.jsx(s,{children:t.jsxs(o,{lg:"12",children:[t.jsxs(p,{id:"Tooltip",children:[t.jsx(d,{children:t.jsx(h,{children:"Default Tooltip"})}),t.jsxs(g,{children:[t.jsx(a,{className:"form-label mb-2",children:"Static Example"}),t.jsx("div",{className:"tooltip-static-demo mb-4 border br-3",children:t.jsxs(s,{children:[t.jsx(o,{sm:"6",lg:"3",children:t.jsxs("div",{className:"tooltip bs-tooltip-top",role:"tooltip",children:[t.jsx("div",{className:"tooltip-arrow"}),t.jsx("div",{className:"tooltip-inner",children:"Tooltip on the top"})]})}),t.jsx(o,{sm:"6",lg:"3",className:" mg-t-30 mg-sm-t-0",children:t.jsxs("div",{className:"tooltip bs-tooltip-bottom",role:"tooltip",children:[t.jsx("div",{className:"tooltip-arrow"}),t.jsx("div",{className:"tooltip-inner",children:"Tooltip on the bottom"})]})}),t.jsx(o,{sm:"6",lg:"3",className:" mg-t-30 mg-lg-t-0",children:t.jsxs("div",{className:"tooltip bs-tooltip-start",role:"tooltip",children:[t.jsx("div",{className:"tooltip-arrow"}),t.jsx("div",{className:"tooltip-inner",children:"Tooltip on the right"})]})}),t.jsx(o,{sm:"6",lg:"3",className:" mg-t-30 mg-lg-t-0",children:t.jsxs("div",{className:"tooltip bs-tooltip-end",role:"tooltip",children:[t.jsx("div",{className:"tooltip-arrow"}),t.jsx("div",{className:"tooltip-inner",children:"Tooltip on the left"})]})})]})}),t.jsx(a,{className:"form-label mb-2",children:"Example"}),t.jsx("div",{className:"bg-light px-4 pt-4 pb-2 border br-3",children:t.jsxs(s,{className:"text-center",children:[t.jsxs(o,{sm:"6",lg:"3",className:" mb-3",children:[t.jsx(l,{color:"",className:"btn btn-secondary","data-bs-placement":"top","data-bs-toggle":"tooltip",id:"top",title:"Tooltip on top",type:"button",children:"Hover me"}),t.jsx(e,{placement:"top",target:"top",children:"Tooltip on Top"})]}),t.jsxs(o,{sm:"6",lg:"3",className:" mb-3",children:[t.jsx(l,{color:"",className:"btn btn-secondary","data-bs-placement":"bottom",id:"bottom","data-bs-toggle":"tooltip",title:"Tooltip on Bottom",type:"button",children:"Hover me"}),t.jsx(e,{placement:"bottom",target:"bottom",children:"Tooltip on Bottom"})]}),t.jsxs(o,{sm:"6",lg:"3",className:" mb-3",children:[t.jsx(l,{color:"",className:"btn btn-secondary","data-bs-placement":"right",id:"right","data-bs-toggle":"tooltip",title:"Tooltip on right",type:"button",children:"Hover me"}),t.jsx(e,{placement:"right",target:"right",children:"Tooltip on Right"})]}),t.jsxs(o,{sm:"6",lg:"3",className:" mb-3",children:[t.jsx(l,{color:"",className:"btn btn-secondary","data-bs-placement":"left",id:"left","data-bs-toggle":"tooltip",title:"Tooltip on left",type:"button",children:"Hover me"}),t.jsx(e,{placement:"left",target:"left",children:"Tooltip on Left"})]})]})})]}),t.jsxs("div",{className:"html-code",children:[t.jsxs("svg",{className:"svg-icon me-2",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[t.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t.jsx("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"})]})," ","Html"," "]}),t.jsxs("figure",{className:"highlight mb-0",id:"element1",children:[t.jsx("pre",{ref:i,children:t.jsx("code",{className:"language-markup mb-0",children:`
    <Row className="text-center">
    <Col sm="6" lg="3" className=" mb-3">
      <Button
        color=""
        className="btn btn-secondary"
        data-bs-placement="top"
        data-bs-toggle="tooltip"
        id="top"
        title="Tooltip on top"
        type="button"
      >
        Hover me
      </Button>
      <UncontrolledTooltip placement="top" target="top">
        Tooltip on Top
      </UncontrolledTooltip>
    </Col>
    <Col sm="6" lg="3" className=" mb-3">
      <Button
        color=""
        className="btn btn-secondary"
        data-bs-placement="bottom"
        id="bottom"
        data-bs-toggle="tooltip"
        title="Tooltip on Bottom"
        type="button"
      >
        Hover me
      </Button>
      <UncontrolledTooltip placement="bottom" target="bottom">
        Tooltip on Bottom
      </UncontrolledTooltip>
    </Col>
    <Col sm="6" lg="3" className=" mb-3">
      <Button
        color=""
        className="btn btn-secondary"
        data-bs-placement="right"
        id="right"
        data-bs-toggle="tooltip"
        title="Tooltip on right"
        type="button"
      >
        Hover me
      </Button>
      <UncontrolledTooltip placement="right" target="right">
        Tooltip on Right
      </UncontrolledTooltip>
    </Col>
    <Col sm="6" lg="3" className=" mb-3">
      <Button
        color=""
        className="btn btn-secondary"
        data-bs-placement="left"
        id="left"
        data-bs-toggle="tooltip"
        title="Tooltip on left"
        type="button"
      >
        Hover me
      </Button>
      <UncontrolledTooltip placement="left" target="left">
        Tooltip on Left
      </UncontrolledTooltip>
    </Col>
  </Row>
                `})}),t.jsx("div",{className:"clipboard-icon","data-clipboard-target":"#element1",children:t.jsxs("svg",{onClick:()=>{n(i)},className:"svg-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[t.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t.jsx("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"}),t.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"})]})})]})]}),t.jsxs(p,{id:"Tooltip1",children:[t.jsx(d,{children:t.jsx(h,{children:"Color Tooltip"})}),t.jsxs(g,{children:[t.jsx(a,{className:"form-label  mb-2",children:"Static Example"}),t.jsx("div",{className:"tooltip-static-demo mb-4 border br-3",children:t.jsxs(s,{children:[t.jsx(o,{sm:"6",lg:"3",children:t.jsxs("div",{className:"tooltip tooltip-primary bs-tooltip-top",role:"tooltip",children:[t.jsx("div",{className:"tooltip-arrow"}),t.jsx("div",{className:"tooltip-inner",children:"Tooltip on the top"})]})}),t.jsx(o,{sm:"6",lg:"3",className:" mg-t-30 mg-sm-t-0",children:t.jsxs("div",{className:"tooltip tooltip-secondary bs-tooltip-bottom",role:"tooltip",children:[t.jsx("div",{className:"tooltip-arrow"}),t.jsx("div",{className:"tooltip-inner",children:"Tooltip on the bottom"})]})}),t.jsx(o,{sm:"6",lg:"3",className:" mg-t-30 mg-lg-t-0",children:t.jsxs("div",{className:"tooltip tooltip-danger bs-tooltip-start",role:"tooltip",children:[t.jsx("div",{className:"tooltip-arrow"}),t.jsx("div",{className:"tooltip-inner",children:"Tooltip on the left"})]})}),t.jsx(o,{sm:"6",lg:"3",className:" mg-t-30 mg-lg-t-0",children:t.jsxs("div",{className:"tooltip tooltip-info bs-tooltip-end",role:"tooltip",children:[t.jsx("div",{className:"tooltip-arrow"}),t.jsx("div",{className:"tooltip-inner",children:"Tooltip on the right"})]})})]})}),t.jsx(a,{className:"form-label mb-2",children:"Example"}),t.jsx("div",{className:"bg-light px-4 pt-4 pb-2 border br-3",children:t.jsxs(s,{className:"text-center color-tooltip",children:[t.jsxs(o,{sm:"6",lg:"3",className:" mb-3",children:[t.jsx(l,{color:"",className:"btn btn-secondary",id:"colortop","data-bs-toggle":"tooltip-primary",title:"Tooltip on top",type:"button",children:"Hover me"}),t.jsx(e,{placement:"top",target:"colortop",className:"primary-tooltip",style:{background:"var(--primary-bg-color)"},children:"Tooltip on Top"})]}),t.jsxs(o,{sm:"6",lg:"3",className:" mb-3",children:[t.jsx(l,{color:"",className:"btn btn-secondary",id:"colorbottom","data-bs-toggle":"tooltip-secondary",title:"Tooltip on bottom",type:"button",children:"Hover me"}),t.jsx(e,{placement:"bottom",target:"colorbottom",className:"primary-tooltip",style:{background:"var(--primary-bg-color)"},children:"Tooltip on Bottom"})]}),t.jsxs(o,{sm:"6",lg:"3",className:" mb-3",children:[t.jsx(l,{color:"",className:"btn btn-secondary",id:"colorright","data-bs-toggle":"tooltip-danger",title:"Tooltip on right",type:"button",children:"Hover me"}),t.jsx(e,{placement:"right",target:"colorright",className:"primary-tooltip",style:{background:"var(--primary-bg-color)"},children:"Tooltip on Right"})]}),t.jsxs(o,{sm:"6",lg:"3",className:" mb-3",children:[t.jsx(l,{color:"",className:"btn btn-secondary",id:"colorleft","data-bs-placement":"left","data-bs-toggle":"tooltip-info",title:"Tooltip on left",type:"button",children:"Hover me"}),t.jsx(e,{placement:"left",target:"colorleft",className:"primary-tooltip",style:{background:"var(--primary-bg-color)"},children:"Tooltip on Left"})]})]})})]}),t.jsxs("div",{className:"html-code",children:[t.jsxs("svg",{className:"svg-icon me-2",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[t.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t.jsx("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"})]})," ","Html"," "]}),t.jsxs("figure",{className:"highlight mb-0",id:"element2",children:[t.jsx("pre",{ref:r,children:t.jsx("code",{className:"language-markup mb-0",children:`
    <Row className="text-center color-tooltip">
    <Col sm="6" lg="3" className=" mb-3">
      <Button
        color=""
        className="btn btn-secondary"
        id="colortop"
        data-bs-toggle="tooltip-primary"
        title="Tooltip on top"
        type="button"
      >
        Hover me
      </Button>
      <UncontrolledTooltip
        placement="top"
        target="colortop"
        className="primary-tooltip"
        style={{ background: "var(--primary-bg-color)" }}
      >
        Tooltip on Top
      </UncontrolledTooltip>
    </Col>
    <Col sm="6" lg="3" className=" mb-3">
      <Button
        color=""
        className="btn btn-secondary"
        id="colorbottom"
        data-bs-toggle="tooltip-secondary"
        title="Tooltip on bottom"
        type="button"
      >
        Hover me
      </Button>
      <UncontrolledTooltip
        placement="bottom"
        target="colorbottom"
        className="primary-tooltip"
        style={{ background: "var(--primary-bg-color)" }}
      >
        Tooltip on Bottom
      </UncontrolledTooltip>
    </Col>
    <Col sm="6" lg="3" className=" mb-3">
      <Button
        color=""
        className="btn btn-secondary"
        id="colorright"
        data-bs-toggle="tooltip-danger"
        title="Tooltip on right"
        type="button"
      >
        Hover me
      </Button>
      <UncontrolledTooltip
        placement="right"
        target="colorright"
        className="primary-tooltip"
        style={{ background: "var(--primary-bg-color)" }}
      >
        Tooltip on Right
      </UncontrolledTooltip>
    </Col>
    <Col sm="6" lg="3" className=" mb-3">
      <Button
        color=""
        className="btn btn-secondary"
        id="colorleft"
        data-bs-placement="left"
        data-bs-toggle="tooltip-info"
        title="Tooltip on left"
        type="button"
      >
        Hover me
      </Button>
      <UncontrolledTooltip
        placement="left"
        target="colorleft"
        className="primary-tooltip"
        style={{ background: "var(--primary-bg-color)" }}
      >
        Tooltip on Left
      </UncontrolledTooltip>
    </Col>
  </Row>
                `})}),t.jsx("div",{className:"clipboard-icon","data-clipboard-target":"#element2",children:t.jsxs("svg",{onClick:()=>{n(r)},className:"svg-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[t.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t.jsx("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"}),t.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"})]})})]})]})]})})]})};b.propTypes={};b.defaultProps={};export{b as default};
