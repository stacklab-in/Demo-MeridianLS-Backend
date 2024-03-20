"use strict";(self.webpackChunk_tracking_software=self.webpackChunk_tracking_software||[]).push([[167],{32869:function(e,n,r){r.d(n,{Ds:function(){return t.Ds}});var t=r(58518);r(58764)},8167:function(e,n,r){r.r(n),r.d(n,{default:function(){return I}});var t=r(74165),i=r(15861),a=r(1413),l=r(29439),o=r(6907),s=r(12065),u=r(89164),c=r(4567),d=r(52739),v=r(13239),Z=r(64554),h=r(61889),m=r(27391),f=r(68096),x=r(50168),p=r(99321),g=r(82626),j=r(94721),P=r(30439),y=r(57088),b=r(57689),N=r(43513),C=r(32869),A=r(72791),E=r(18406),O=r(52073),T=r(99615),S=r(80184);function I(){var e,n,r,I,W,q,k,D,R,M,F,B,L,w,U,Y,H,G,_,z,J,V,K,X,Q,$,ee,ne,re,te=(0,y.K$)(),ie=(0,b.TH)(),ae=(0,b.s0)(),le=(0,C.Ds)().enqueueSnackbar,oe=null===ie||void 0===ie?void 0:ie.state,se=(0,A.useState)(!1),ue=(0,l.Z)(se,2),ce=ue[0],de=ue[1],ve=(0,A.useState)({date:"",number:"",leadId:"",inquiry:{form:{shipmentTerm:"",typeOfPacking:""}},pickupDate:"",deliveryDate:"",quotation:{},shipmentType:"",shipmentSubType:"",importerName:"",supplierName:"",exporterName:"",consigneeName:"",mawbNo:"",hawbNo:"",mblNo:"",hblNo:"",docketNo:"",carrierFlight:"",vesselName:"",airplaneNumber:"",billOfEntryNo:"",shippingBillNo:"",containerNo:"",splrNo:"",splrDate:"",overseasAgent:{companyName:"",contactPersonName:"",contactPersonNumber:"",contactPersonEmail:"",country:"",companyAddress:""},transport:{companyName:"",contactPersonName:"",contactPersonNumber:"",contactPersonEmail:"",city:"",country:"",companyAddress:""}}),Ze=(0,l.Z)(ve,2),he=Ze[0],me=Ze[1];(0,A.useEffect)((function(){de(!0),me((function(e){return(0,a.Z)((0,a.Z)({},e),{},{number:"MJ".concat((new Date).getTime()),date:(0,E.wo)(new Date),leadId:oe._id,inquiry:{number:oe.inquiry.number,date:(0,E.wo)(oe.inquiry.date),source:oe.inquiry.source,place:oe.inquiry.place,form:{shipmentTerm:oe.inquiry.form.shipmentTerm,commodity:oe.inquiry.form.commodity,typeOfPacking:oe.inquiry.form.typeOfPacking,numberOfPackages:oe.inquiry.form.numberOfPackages,grossWeight:oe.inquiry.form.grossWeight,portOfLoading:oe.inquiry.form.portOfLoading,portOfDischarge:oe.inquiry.form.portOfDischarge,pickUpAddress:oe.inquiry.form.pickUpAddress,deliveryAddress:oe.inquiry.form.deliveryAddress,dimensions:oe.inquiry.form.dimensions}},quotation:oe.quotation,carrierFlight:oe.quotation.carrier})})),setTimeout((function(){de(!1)}),2e3)}),[]);var fe=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(){var n,r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(he.deliveryDate){e.next=3;break}return le("Please enter delivery date!",{variant:"error"}),e.abrupt("return");case 3:if(he.carrierFlight){e.next=7;break}return le("Please enter carrier flight name!",{variant:"error"}),e.abrupt("return");case 7:n=localStorage.getItem(O._.keyUserToken),r=(0,E.sw)(n),T.ZP.post(T.Hv.jobcard.add,he,{headers:{Authorization:"Bearer ".concat(r)}}).then((function(e){le("Jobcard added successfully!",{variant:"success"}),ae("/dashboard/jobcard")})).catch((function(e){alert(e.message)}));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,S.jsxs)(u.Z,{maxWidth:!te.themeStretch&&"xl",children:[(0,S.jsx)(o.ql,{children:(0,S.jsx)("title",{children:"Create: JOBCARD"})}),(0,S.jsx)(c.Z,{variant:"h4",children:" Create JOB CARD "}),(0,S.jsx)(d.Z,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:ce,children:(0,S.jsx)(v.Z,{color:"inherit"})}),(0,S.jsxs)(Z.Z,{sx:{mt:5,width:1,padding:2,borderRadius:2,bgcolor:function(e){return(0,s.Fq)(e.palette.grey[500],.04)},border:function(e){return"dashed 1px ".concat(e.palette.divider)}},children:[(0,S.jsxs)(h.ZP,{container:!0,spacing:2,children:[(0,S.jsx)(h.ZP,{item:!0,xs:12,children:(0,S.jsx)(c.Z,{variant:"overline",display:"block",gutterBottom:!0,children:"SHIPMENT INFO"})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,label:"JOB NO.",disabled:!0,variant:"outlined",value:null===he||void 0===he?void 0:he.number})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{label:"JOB DATE",type:"datetime-local",value:null===he||void 0===he?void 0:he.date,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{date:e.target.value})}))},fullWidth:!0,required:!0,InputLabelProps:{shrink:!0}})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,value:null===he||void 0===he||null===(e=he.inquiry)||void 0===e?void 0:e.number,disabled:!0,label:"INQUIRY NO.",variant:"outlined"})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{label:"INQUIRY DATE",type:"datetime-local",value:null===he||void 0===he||null===(n=he.inquiry)||void 0===n?void 0:n.date,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{inquiry:(0,a.Z)((0,a.Z)({},n.inquiry),{},{date:e.target.value})})}))},fullWidth:!0,required:!0,InputLabelProps:{shrink:!0}})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsxs)(f.Z,{fullWidth:!0,children:[(0,S.jsx)(x.Z,{id:"demo-simple-select-label",children:"SHIPMENT TERM"}),(0,S.jsxs)(p.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:null===he||void 0===he||null===(r=he.inquiry)||void 0===r||null===(I=r.form)||void 0===I?void 0:I.shipmentTerm,label:"SHIPMENT TERM",onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{inquiry:(0,a.Z)((0,a.Z)({},n.inquiry),{},{form:(0,a.Z)((0,a.Z)({},n.inquiry.form),{},{shipmentTerm:e.target.value})})})}))},children:[(0,S.jsx)(g.Z,{value:"EXW",children:"EXW (Ex. Works)"}),(0,S.jsx)(g.Z,{value:"FCA",children:"FCA (Free Carrier)"}),(0,S.jsx)(g.Z,{value:"FAS",children:"FAS (Free Alongside Ship)"}),(0,S.jsx)(g.Z,{value:"FOB",children:"FOB (Free On Board)"}),(0,S.jsx)(g.Z,{value:"CFR",children:"CFR (Cost & Freight)"}),(0,S.jsx)(g.Z,{value:"CIF",children:"CIF (Cost, Insurance & Freight)"}),(0,S.jsx)(g.Z,{value:"CPT",children:"CPT (Carriage Paid To)"}),(0,S.jsx)(g.Z,{value:"CIP",children:"CIP (Carriage & Insurance Paid to)"}),(0,S.jsx)(g.Z,{value:"DAP",children:"DAP (Delivered At Place)"}),(0,S.jsx)(g.Z,{value:"DPU",children:"DPU (Delivered At Place Unloaded)"}),(0,S.jsx)(g.Z,{value:"DDP",children:"DDP (Delivered Duty Paid)"}),(0,S.jsx)(g.Z,{value:"DDP",children:"DDU (Delivered Duty UnPaid)"}),(0,S.jsx)(g.Z,{value:"C&F",children:"C&F (Cost & Freight )"})]})]})}),console.log({jobcard:he}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,value:null===he||void 0===he||null===(W=he.inquiry)||void 0===W||null===(q=W.form)||void 0===q?void 0:q.commodity,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{inquiry:(0,a.Z)((0,a.Z)({},n.inquiry),{},{form:(0,a.Z)((0,a.Z)({},n.inquiry.form),{},{commodity:e.target.value})})})}))},label:"COMMODITY",variant:"outlined"})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsxs)(f.Z,{fullWidth:!0,children:[(0,S.jsx)(x.Z,{id:"demo-simple-select-label",children:"Type of Packing"}),(0,S.jsxs)(p.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:null===he||void 0===he||null===(k=he.inquiry)||void 0===k||null===(D=k.form)||void 0===D?void 0:D.typeOfPacking,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{inquiry:(0,a.Z)((0,a.Z)({},n.inquiry),{},{form:(0,a.Z)((0,a.Z)({},n.inquiry.form),{},{typeOfPacking:e.target.value})})})}))},label:"Type of Packing",children:[(0,S.jsx)(g.Z,{value:"Wooden Box",children:"Wooden Box"}),(0,S.jsx)(g.Z,{value:"Wooden Crate Box",children:"Wooden Crate Box"}),(0,S.jsx)(g.Z,{value:"Corrugated Box",children:"Corrugated Box"}),(0,S.jsx)(g.Z,{value:"Palette",children:"Palette"}),(0,S.jsx)(g.Z,{value:"Loose",children:"Loose"}),(0,S.jsx)(g.Z,{value:"Others",children:"Others"})]})]})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,value:null===he||void 0===he||null===(R=he.inquiry)||void 0===R||null===(M=R.form)||void 0===M?void 0:M.numberOfPackages,label:"NO. OF PACKAGES",variant:"outlined"})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,value:null===he||void 0===he||null===(F=he.inquiry)||void 0===F||null===(B=F.form)||void 0===B?void 0:B.grossWeight,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{inquiry:(0,a.Z)((0,a.Z)({},n.inquiry),{},{form:(0,a.Z)((0,a.Z)({},n.inquiry.form),{},{grossWeight:e.target.value})})})}))},label:"NET / GROSS WEIGHT",variant:"outlined"})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,value:null===he||void 0===he||null===(L=he.quotation)||void 0===L?void 0:L.cbm,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{inquiry:(0,a.Z)((0,a.Z)({},n.inquiry),{},{form:(0,a.Z)((0,a.Z)({},n.inquiry.form),{},{cbm:e.target.value})})})}))},label:"CH. WEIGHT / CBM",variant:"outlined"})}),(0,S.jsxs)(h.ZP,{item:!0,xs:12,sx:{p:2},children:[(0,S.jsx)(c.Z,{sx:{ml:1},children:"Dimensions"}),(0,S.jsx)(N.ZP,{data:null===he||void 0===he||null===(w=he.inquiry)||void 0===w||null===(U=w.form)||void 0===U?void 0:U.dimensions,columns:[{name:"Qty",selector:function(e,n){return e.qty},center:"true"},{name:"Length (cm)",selector:function(e,n){return e.length},center:"true"},{name:"Breadth (cm)",selector:function(e,n){return e.breadth},center:"true"},{name:"Height (cm)",selector:function(e,n){return e.qty},center:"true"}]})]}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,value:null===he||void 0===he||null===(Y=he.inquiry)||void 0===Y||null===(H=Y.form)||void 0===H?void 0:H.portOfLoading,label:"POL",onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{inquiry:(0,a.Z)((0,a.Z)({},n.inquiry),{},{form:(0,a.Z)((0,a.Z)({},n.inquiry.form),{},{portOfLoading:e.target.value})})})}))},variant:"outlined"})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,label:"POD",value:null===he||void 0===he||null===(G=he.inquiry)||void 0===G||null===(_=G.form)||void 0===_?void 0:_.portOfDischarge,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{inquiry:(0,a.Z)((0,a.Z)({},n.inquiry),{},{form:(0,a.Z)((0,a.Z)({},n.inquiry.form),{},{portOfDischarge:e.target.value})})})}))},variant:"outlined"})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,label:"PICKUP LOCATION",value:null===he||void 0===he||null===(z=he.inquiry)||void 0===z||null===(J=z.form)||void 0===J?void 0:J.pickUpAddress,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{inquiry:(0,a.Z)((0,a.Z)({},n.inquiry),{},{form:(0,a.Z)((0,a.Z)({},n.inquiry.form),{},{pickUpAddress:e.target.value})})})}))},variant:"outlined"})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{label:"PICKUP DATE",type:"datetime-local",value:null===he||void 0===he?void 0:he.pickupDate,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{pickupDate:e.target.value})}))},fullWidth:!0,required:!0,InputLabelProps:{shrink:!0}})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,label:"DELIVERY LOCATION",value:null===he||void 0===he||null===(V=he.inquiry)||void 0===V||null===(K=V.form)||void 0===K?void 0:K.deliveryAddress,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{inquiry:(0,a.Z)((0,a.Z)({},n.inquiry),{},{form:(0,a.Z)((0,a.Z)({},n.inquiry.form),{},{deliveryAddress:e.target.value})})})}))},variant:"outlined"})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{label:"DELIVERY DATE",type:"datetime-local",value:null===he||void 0===he?void 0:he.deliveryDate,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{deliveryDate:e.target.value})}))},fullWidth:!0,required:!0,InputLabelProps:{shrink:!0}})}),(0,S.jsx)(h.ZP,{item:!0,xs:12,children:(0,S.jsx)(j.Z,{fullWidth:!0})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsxs)(f.Z,{fullWidth:!0,variant:"outlined",children:[(0,S.jsx)(x.Z,{id:"import-export-label",children:"SHIPMENT TYPE"}),(0,S.jsxs)(p.Z,{labelId:"import-export-label",label:"SHIPMENT TYPE",value:he.shipmentType,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{shipmentType:e.target.value})}))},children:[(0,S.jsx)(g.Z,{value:"IMPORT",children:"Import"}),(0,S.jsx)(g.Z,{value:"EXPORT",children:"Export"})]})]})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsxs)(f.Z,{fullWidth:!0,variant:"outlined",children:[(0,S.jsx)(x.Z,{id:"import-export-label",children:"SHIPMENT SUB TYPE"}),(0,S.jsxs)(p.Z,{labelId:"import-export-label",label:"SHIPMENT SUB TYPE",value:he.shipmentSubType,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{shipmentSubType:e.target.value})}))},children:[(0,S.jsx)(g.Z,{value:"AIR-C",children:"By AIR (Commercial)"}),(0,S.jsx)(g.Z,{value:"AIR-N",children:"By AIR (Non-Commercial)"}),(0,S.jsx)(g.Z,{value:"COURIER-C",children:"By COURIER (Commercial)"}),(0,S.jsx)(g.Z,{value:"COURIER-N",children:"By COURIER (Non-Commercial)"}),(0,S.jsx)(g.Z,{value:"SEA-LCL",children:"By SEA (LCL)"}),(0,S.jsx)(g.Z,{value:"SEA-FCL",children:"By SEA (FCL)"})]})]})}),"IMPORT"===he.shipmentType&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,label:"IMPORTER NAME",value:he.importerName,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{importerName:e.target.value})}))},variant:"outlined"})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,label:"SUPPLIER NAME",value:he.supplierName,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{supplierName:e.target.value})}))},variant:"outlined"})})]}),"EXPORT"===he.shipmentType&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,label:"EXPORTER NAME",variant:"outlined",value:he.exporterName,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{exporterName:e.target.value})}))}})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,label:"CONSIGNEE NAME",variant:"outlined",value:he.consigneeName,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{consigneeName:e.target.value})}))}})})]}),(null===he||void 0===he||null===(X=he.shipmentSubType)||void 0===X?void 0:X.startsWith("A"))&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,label:"MAWB NO.",value:he.mawbNo,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{mawbNo:e.target.value})}))},variant:"outlined"})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,value:he.hawbNo,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{hawbNo:e.target.value})}))},label:"HAWB NO.",variant:"outlined"})})]}),(null===he||void 0===he||null===(Q=he.shipmentSubType)||void 0===Q?void 0:Q.startsWith("S"))&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,label:"MBL NO.",value:he.mblNo,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{mblNo:e.target.value})}))},variant:"outlined"})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,label:"HBL NO.",value:he.hblNo,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{hblNo:e.target.value})}))},variant:"outlined"})})]}),(null===he||void 0===he||null===($=he.shipmentSubType)||void 0===$?void 0:$.startsWith("C"))&&(0,S.jsx)(h.ZP,{item:!0,xs:12,children:(0,S.jsx)(m.Z,{fullWidth:!0,label:"DOCKET NO.",value:he.docketNo,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{docketNo:e.target.value})}))},variant:"outlined"})}),(0,S.jsx)(h.ZP,{item:!0,xs:12,children:(0,S.jsx)(m.Z,{fullWidth:!0,value:he.carrierFlight,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{carrierFlight:e.target.value})}))},label:"CARRIER NAME",variant:"outlined"})}),(null===he||void 0===he?void 0:he.shipmentSubType.startsWith("A"))&&(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,value:he.airplaneNumber,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{airplaneNumber:e.target.value})}))},label:"Airplane Number",variant:"outlined"})}),(null===he||void 0===he||null===(ee=he.shipmentType)||void 0===ee?void 0:ee.startsWith("I"))&&(null===he||void 0===he||null===(ne=he.shipmentSubType)||void 0===ne?void 0:ne.includes("-C"))&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,label:"BILL OF ENTRY NO.",variant:"outlined",value:he.billOfEntryNo,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{billOfEntryNo:e.target.value})}))}})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,label:"SHIPPING BILL NO.",variant:"outlined",value:he.shippingBillNo,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{shippingBillNo:e.target.value})}))}})})]}),(null===he||void 0===he||null===(re=he.shipmentSubType)||void 0===re?void 0:re.includes("SEA"))&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,label:"CONTAINER NO./SEAL NO",variant:"outlined",value:he.containerNo,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{containerNo:e.target.value})}))}})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,value:he.vesselName,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{vesselName:e.target.value})}))},label:"VESSEL NAME",variant:"outlined"})})]}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,label:"SUPPLIER INVOICE NO.",value:he.splrNo,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{splrNo:e.target.value})}))},variant:"outlined"})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{label:"SUPPLIER INVOICE DATE",type:"datetime-local",value:null===he||void 0===he?void 0:he.splrDate,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{splrDate:e.target.value})}))},fullWidth:!0,required:!0,InputLabelProps:{shrink:!0}})}),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(h.ZP,{item:!0,xs:12,children:(0,S.jsx)(j.Z,{fullWidth:!0})}),(0,S.jsx)(h.ZP,{item:!0,xs:12,children:(0,S.jsx)(c.Z,{variant:"overline",display:"block",gutterBottom:!0,children:"OVERSEAS AGENT INFO"})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,label:" COMPANY NAME",value:he.overseasAgent.companyName,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{overseasAgent:(0,a.Z)((0,a.Z)({},n.overseasAgent),{},{companyName:e.target.value})})}))},variant:"outlined"})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,label:"CONTACT PERSON NAME",value:he.overseasAgent.contactPersonName,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{overseasAgent:(0,a.Z)((0,a.Z)({},n.overseasAgent),{},{contactPersonName:e.target.value})})}))},variant:"outlined"})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,label:"CONTACT PERSON NUMBER",value:he.overseasAgent.contactPersonNumber,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{overseasAgent:(0,a.Z)((0,a.Z)({},n.overseasAgent),{},{contactPersonNumber:e.target.value})})}))},variant:"outlined"})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,label:"CONTACT PERSON EMAIL",value:he.overseasAgent.contactPersonEmail,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{overseasAgent:(0,a.Z)((0,a.Z)({},n.overseasAgent),{},{contactPersonEmail:e.target.value})})}))},variant:"outlined"})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,label:"COUNTRY",value:he.overseasAgent.country,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{overseasAgent:(0,a.Z)((0,a.Z)({},n.overseasAgent),{},{country:e.target.value})})}))},variant:"outlined"})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,label:"COMPANY ADDRESS",value:he.overseasAgent.companyAddress,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{overseasAgent:(0,a.Z)((0,a.Z)({},n.overseasAgent),{},{companyAddress:e.target.value})})}))},variant:"outlined"})}),(0,S.jsx)(h.ZP,{item:!0,xs:12,children:(0,S.jsx)(j.Z,{fullWidth:!0})})]}),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(h.ZP,{item:!0,xs:12,children:(0,S.jsx)(c.Z,{variant:"overline",display:"block",gutterBottom:!0,children:"TRANSPORT INFO"})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,label:" COMPANY NAME",value:he.transport.companyName,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{transport:(0,a.Z)((0,a.Z)({},n.transport),{},{companyName:e.target.value})})}))},variant:"outlined"})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,label:"CONTACT PERSON NAME",value:he.transport.contactPersonName,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{transport:(0,a.Z)((0,a.Z)({},n.transport),{},{contactPersonName:e.target.value})})}))},variant:"outlined"})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,label:"CONTACT PERSON NUMBER",value:he.transport.contactPersonNumber,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{transport:(0,a.Z)((0,a.Z)({},n.transport),{},{contactPersonNumber:e.target.value})})}))},variant:"outlined"})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,label:"CONTACT PERSON EMAIL",value:he.transport.contactPersonEmail,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{transport:(0,a.Z)((0,a.Z)({},n.transport),{},{contactPersonEmail:e.target.value})})}))},variant:"outlined"})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,label:"CITY",value:he.transport.city,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{transport:(0,a.Z)((0,a.Z)({},n.transport),{},{city:e.target.value})})}))},variant:"outlined"})}),(0,S.jsx)(h.ZP,{item:!0,xs:6,children:(0,S.jsx)(m.Z,{fullWidth:!0,label:"COUNTRY",value:he.transport.country,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{transport:(0,a.Z)((0,a.Z)({},n.transport),{},{country:e.target.value})})}))},variant:"outlined"})}),(0,S.jsx)(h.ZP,{item:!0,xs:12,children:(0,S.jsx)(m.Z,{fullWidth:!0,label:"COMPANY ADDRESS",value:he.transport.companyAddress,onChange:function(e){me((function(n){return(0,a.Z)((0,a.Z)({},n),{},{transport:(0,a.Z)((0,a.Z)({},n.transport),{},{companyAddress:e.target.value})})}))},variant:"outlined"})})]}),(0,S.jsx)(h.ZP,{item:!0,xs:12,children:(0,S.jsx)(j.Z,{fullWidth:!0})})]}),(0,S.jsxs)(h.ZP,{item:!0,xs:12,display:"flex",gap:"10px",justifyContent:"flex-end",sx:{mt:2},children:[(0,S.jsx)(P.Z,{variant:"contained",color:"primary",onClick:fe,children:"Submit"}),(0,S.jsx)(P.Z,{variant:"contained",color:"error",onClick:function(){ae("/dashboard/lead_management")},children:"Cancel"})]})]})]})}},13239:function(e,n,r){r.d(n,{Z:function(){return W}});var t=r(30168),i=r(63366),a=r(87462),l=r(72791),o=r(28182),s=r(94419),u=r(52554),c=r(14036),d=r(31402),v=r(66934),Z=r(75878),h=r(21217);function m(e){return(0,h.Z)("MuiCircularProgress",e)}(0,Z.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var f,x,p,g,j,P,y,b,N=r(80184),C=["className","color","disableShrink","size","style","thickness","value","variant"],A=44,E=(0,u.F4)(j||(j=f||(f=(0,t.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),O=(0,u.F4)(P||(P=x||(x=(0,t.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),T=(0,v.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,n[r.variant],n["color".concat((0,c.Z)(r.color))]]}})((function(e){var n=e.ownerState,r=e.theme;return(0,a.Z)({display:"inline-block"},"determinate"===n.variant&&{transition:r.transitions.create("transform")},"inherit"!==n.color&&{color:(r.vars||r).palette[n.color].main})}),(function(e){return"indeterminate"===e.ownerState.variant&&(0,u.iv)(y||(y=p||(p=(0,t.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),E)})),S=(0,v.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,n){return n.svg}})({display:"block"}),I=(0,v.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,n){var r=e.ownerState;return[n.circle,n["circle".concat((0,c.Z)(r.variant))],r.disableShrink&&n.circleDisableShrink]}})((function(e){var n=e.ownerState,r=e.theme;return(0,a.Z)({stroke:"currentColor"},"determinate"===n.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===n.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var n=e.ownerState;return"indeterminate"===n.variant&&!n.disableShrink&&(0,u.iv)(b||(b=g||(g=(0,t.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),O)})),W=l.forwardRef((function(e,n){var r=(0,d.Z)({props:e,name:"MuiCircularProgress"}),t=r.className,l=r.color,u=void 0===l?"primary":l,v=r.disableShrink,Z=void 0!==v&&v,h=r.size,f=void 0===h?40:h,x=r.style,p=r.thickness,g=void 0===p?3.6:p,j=r.value,P=void 0===j?0:j,y=r.variant,b=void 0===y?"indeterminate":y,E=(0,i.Z)(r,C),O=(0,a.Z)({},r,{color:u,disableShrink:Z,size:f,thickness:g,value:P,variant:b}),W=function(e){var n=e.classes,r=e.variant,t=e.color,i=e.disableShrink,a={root:["root",r,"color".concat((0,c.Z)(t))],svg:["svg"],circle:["circle","circle".concat((0,c.Z)(r)),i&&"circleDisableShrink"]};return(0,s.Z)(a,m,n)}(O),q={},k={},D={};if("determinate"===b){var R=2*Math.PI*((A-g)/2);q.strokeDasharray=R.toFixed(3),D["aria-valuenow"]=Math.round(P),q.strokeDashoffset="".concat(((100-P)/100*R).toFixed(3),"px"),k.transform="rotate(-90deg)"}return(0,N.jsx)(T,(0,a.Z)({className:(0,o.Z)(W.root,t),style:(0,a.Z)({width:f,height:f},k,x),ownerState:O,ref:n,role:"progressbar"},D,E,{children:(0,N.jsx)(S,{className:W.svg,ownerState:O,viewBox:"".concat(22," ").concat(22," ").concat(A," ").concat(A),children:(0,N.jsx)(I,{className:W.circle,style:q,ownerState:O,cx:A,cy:A,r:(A-g)/2,fill:"none",strokeWidth:g})})}))}))}}]);
//# sourceMappingURL=167.99f02019.chunk.js.map