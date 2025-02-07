import*as e from"react";import t from"react";import n,{css as o,ThemeProvider as a}from"styled-components";var l;function r(e,t){return e[t]}function i(e,t){return t.split(".").reduce(((e,t)=>{const n=t.match(/[^\]\\[.]+/g);if(n&&n.length>1)for(let t=0;t<n.length;t++)return e[n[t]][n[t+1]];return e[t]}),e)}function s(e=[],t,n=0){return[...e.slice(0,n),t,...e.slice(n)]}function d(e=[],t,n="id"){const o=e.slice(),a=r(t,n);return a?o.splice(o.findIndex((e=>r(e,n)===a)),1):o.splice(o.findIndex((e=>e===t)),1),o}function c(e){return e.map(((e,t)=>{const n=Object.assign(Object.assign({},e),{sortable:e.sortable||!!e.sortFunction||void 0});return e.id||(n.id=t+1),n}))}function g(e,t){return Math.ceil(e/t)}function u(e,t){return Math.min(e,t)}!function(e){e.ASC="asc",e.DESC="desc"}(l||(l={}));const p=()=>null;function b(e,t=[],n=[]){let o={},a=[...n];return t.length&&t.forEach((t=>{if(!t.when||"function"!=typeof t.when)throw new Error('"when" must be defined in the conditional style object and must be function');t.when(e)&&(o=t.style||{},t.classNames&&(a=[...a,...t.classNames]),"function"==typeof t.style&&(o=t.style(e)||{}))})),{style:o,classNames:a.join(" ")}}function m(e,t=[],n="id"){const o=r(e,n);return o?t.some((e=>r(e,n)===o)):t.some((t=>t===e))}function w(e,t){return t?e.findIndex((e=>h(e.id,t))):-1}function h(e,t){return e==t}function f(e,t){const n=!e.toggleOnSelectedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:n,rows:o,rowCount:a,mergeSelections:l}=t,r=!e.allSelected,i=!e.toggleOnSelectedRowsChange;if(l){const t=r?[...e.selectedRows,...o.filter((t=>!m(t,e.selectedRows,n)))]:e.selectedRows.filter((e=>!m(e,o,n)));return Object.assign(Object.assign({},e),{allSelected:r,selectedCount:t.length,selectedRows:t,toggleOnSelectedRowsChange:i})}return Object.assign(Object.assign({},e),{allSelected:r,selectedCount:r?a:0,selectedRows:r?o:[],toggleOnSelectedRowsChange:i})}case"SELECT_SINGLE_ROW":{const{keyField:o,row:a,isSelected:l,rowCount:r,singleSelect:i}=t;return i?l?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[a],toggleOnSelectedRowsChange:n}):l?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:d(e.selectedRows,a,o),toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===r,selectedRows:s(e.selectedRows,a),toggleOnSelectedRowsChange:n})}case"SELECT_MULTIPLE_ROWS":{const{keyField:o,selectedRows:a,totalRows:l,mergeSelections:r}=t;if(r){const t=[...e.selectedRows,...a.filter((t=>!m(t,e.selectedRows,o)))];return Object.assign(Object.assign({},e),{selectedCount:t.length,allSelected:!1,selectedRows:t,toggleOnSelectedRowsChange:n})}return Object.assign(Object.assign({},e),{selectedCount:a.length,allSelected:a.length===l,selectedRows:a,toggleOnSelectedRowsChange:n})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:n}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:n})}case"SORT_CHANGE":{const{sortDirection:o,selectedColumn:a,clearSelectedOnSort:l}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:a,sortDirection:o,currentPage:1}),l&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_PAGE":{const{page:o,paginationServer:a,visibleOnly:l,persistSelectedOnPageChange:r}=t,i=a&&r,s=a&&!r||l;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:o}),i&&{allSelected:!1}),s&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:n,page:o}=t;return Object.assign(Object.assign({},e),{currentPage:o,rowsPerPage:n})}}}const x=o`
	pointer-events: none;
	opacity: 0.4;
`,C=n.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&x};
	${({theme:e})=>e.table.style};
`,y=o`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,R=n.div`
	display: flex;
	width: 100%;
	${({$fixedHeader:e})=>e&&y};
	${({theme:e})=>e.head.style};
`,v=n.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({$dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,S=(e,...t)=>o`
		@media screen and (max-width: ${599}px) {
			${o(e,...t)}
		}
	`,E=(e,...t)=>o`
		@media screen and (max-width: ${959}px) {
			${o(e,...t)}
		}
	`,O=(e,...t)=>o`
		@media screen and (max-width: ${1280}px) {
			${o(e,...t)}
		}
	`,$=e=>(t,...n)=>o`
				@media screen and (max-width: ${e}px) {
					${o(t,...n)}
				}
			`,k=n.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:e,$headCell:t})=>e[t?"headCells":"cells"].style};
	${({$noPadding:e})=>e&&"padding: 0"};
`,P=n(k)`
	flex-grow: ${({button:e,grow:t})=>0===t||e?0:t||1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({maxWidth:e})=>e||"100%"};
	min-width: ${({minWidth:e})=>e||"100px"};
	${({width:e})=>e&&o`
			min-width: ${e};
			max-width: ${e};
		`};
	${({right:e})=>e&&"justify-content: flex-end"};
	${({button:e,center:t})=>(t||e)&&"justify-content: center"};
	${({compact:e,button:t})=>(e||t)&&"padding: 0"};

	/* handle hiding cells */
	${({hide:e})=>e&&"sm"===e&&S`
    display: none;
  `};
	${({hide:e})=>e&&"md"===e&&E`
    display: none;
  `};
	${({hide:e})=>e&&"lg"===e&&O`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&$(e)`
    display: none;
  `};
`,D=o`
	div:first-child {
		white-space: ${({$wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({$allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,H=n(P).attrs((e=>({style:e.style})))`
	${({$renderAsCell:e})=>!e&&D};
	${({theme:e,$isDragging:t})=>t&&e.cells.draggingStyle};
	${({$cellStyle:e})=>e};
`;var F=e.memo((function({id:t,column:n,row:o,rowIndex:a,dataTag:l,isDragging:r,onDragStart:s,onDragOver:d,onDragEnd:c,onDragEnter:g,onDragLeave:u}){const{style:p,classNames:m}=b(o,n.conditionalCellStyles,["rdt_TableCell"]);return e.createElement(H,{id:t,"data-column-id":n.id,role:"cell",className:m,"data-tag":l,$cellStyle:n.style,$renderAsCell:!!n.cell,$allowOverflow:n.allowOverflow,button:n.button,center:n.center,compact:n.compact,grow:n.grow,hide:n.hide,maxWidth:n.maxWidth,minWidth:n.minWidth,right:n.right,width:n.width,$wrapCell:n.wrap,style:p,$isDragging:r,onDragStart:s,onDragOver:d,onDragEnd:c,onDragEnter:g,onDragLeave:u},!n.cell&&e.createElement("div",{"data-tag":l},function(e,t,n,o){if(!t)return null;if("string"!=typeof t&&"function"!=typeof t)throw new Error("selector must be a . delimited string eg (my.property) or function (e.g. row => row.field");return n&&"function"==typeof n?n(e,o):t&&"function"==typeof t?t(e,o):i(e,t)}(o,n.selector,n.format,a)),n.cell&&n.cell(o,a,n,t))}));var j=e.memo((function({name:t,component:n="input",componentOptions:o={style:{}},indeterminate:a=!1,checked:l=!1,disabled:r=!1,onClick:i=p}){const s=n,d="input"!==s?o.style:(e=>Object.assign(Object.assign({fontSize:"18px"},!e&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(r),c=e.useMemo((()=>function(e,...t){let n;return Object.keys(e).map((t=>e[t])).forEach(((o,a)=>{const l=e;"function"==typeof o&&(n=Object.assign(Object.assign({},l),{[Object.keys(e)[a]]:o(...t)}))})),n||e}(o,a)),[o,a]);return e.createElement(s,Object.assign({type:"checkbox",ref:e=>{e&&(e.indeterminate=a)},style:d,onClick:r?p:i,name:t,"aria-label":t,checked:l,disabled:r},c,{onChange:p}))}));const I=n(k)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function T({name:t,keyField:n,row:o,rowCount:a,selected:l,selectableRowsComponent:r,selectableRowsComponentProps:i,selectableRowsSingle:s,selectableRowDisabled:d,onSelectedRow:c}){const g=!(!d||!d(o));return e.createElement(I,{onClick:e=>e.stopPropagation(),className:"rdt_TableCell",$noPadding:!0},e.createElement(j,{name:t,component:r,componentOptions:i,checked:l,"aria-checked":l,onClick:()=>{c({type:"SELECT_SINGLE_ROW",row:o,isSelected:l,keyField:n,rowCount:a,singleSelect:s})},disabled:g}))}const L=n.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function M({disabled:t=!1,expanded:n=!1,expandableIcon:o,id:a,row:l,onToggled:r}){const i=n?o.expanded:o.collapsed;return e.createElement(L,{"aria-disabled":t,onClick:()=>r&&r(l),"data-testid":`expander-button-${a}`,disabled:t,"aria-label":n?"Collapse Row":"Expand Row",role:"button",type:"button"},i)}const A=n(k)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function _({row:t,expanded:n=!1,expandableIcon:o,id:a,onToggled:l,disabled:r=!1}){return e.createElement(A,{onClick:e=>e.stopPropagation(),$noPadding:!0},e.createElement(M,{id:a,row:t,expanded:n,expandableIcon:o,disabled:r,onToggled:l}))}const N=n.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({$extendedRowStyle:e})=>e};
`;var z=e.memo((function({data:t,ExpanderComponent:n,expanderComponentProps:o,extendedRowStyle:a,extendedClassNames:l}){const r=["rdt_ExpanderRow",...l.split(" ").filter((e=>"rdt_TableRow"!==e))].join(" ");return e.createElement(N,{className:r,$extendedRowStyle:a},e.createElement(n,Object.assign({data:t},o)))}));const W="allowRowEvents";var B,G,V;!function(e){e.LTR="ltr",e.RTL="rtl",e.AUTO="auto"}(B||(B={})),function(e){e.LEFT="left",e.RIGHT="right",e.CENTER="center"}(G||(G={})),function(e){e.SM="sm",e.MD="md",e.LG="lg"}(V||(V={}));const U=o`
	&:hover {
		${({$highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,Y=o`
	&:hover {
		cursor: pointer;
	}
`,K=n.div.attrs((e=>({style:e.style})))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.rows.style};
	${({$dense:e,theme:t})=>e&&t.rows.denseStyle};
	${({$striped:e,theme:t})=>e&&t.rows.stripedStyle};
	${({$highlightOnHover:e})=>e&&U};
	${({$pointerOnHover:e})=>e&&Y};
	${({$selected:e,theme:t})=>e&&t.rows.selectedHighlightStyle};
`;function q({columns:t=[],conditionalRowStyles:n=[],defaultExpanded:o=!1,defaultExpanderDisabled:a=!1,dense:l=!1,expandableIcon:i,expandableRows:s=!1,expandableRowsComponent:d,expandableRowsComponentProps:c,expandableRowsHideExpander:g,expandOnRowClicked:u=!1,expandOnRowDoubleClicked:m=!1,highlightOnHover:w=!1,id:f,expandableInheritConditionalStyles:x,keyField:C,onRowClicked:y=p,onRowDoubleClicked:R=p,onRowMouseEnter:v=p,onRowMouseLeave:S=p,onRowExpandToggled:E=p,onSelectedRow:O=p,pointerOnHover:$=!1,row:k,rowCount:P,rowIndex:D,selectableRowDisabled:H=null,selectableRows:j=!1,selectableRowsComponent:I,selectableRowsComponentProps:L,selectableRowsHighlight:M=!1,selectableRowsSingle:A=!1,selected:N,striped:W=!1,draggingColumnId:B,onDragStart:G,onDragOver:V,onDragEnd:U,onDragEnter:Y,onDragLeave:q}){const[J,Q]=e.useState(o);e.useEffect((()=>{Q(o)}),[o]);const X=e.useCallback((()=>{Q(!J),E(!J,k)}),[J,E,k]),Z=$||s&&(u||m),ee=e.useCallback((e=>{e.target&&"allowRowEvents"===e.target.getAttribute("data-tag")&&(y(k,e),!a&&s&&u&&X())}),[a,u,s,X,y,k]),te=e.useCallback((e=>{e.target&&"allowRowEvents"===e.target.getAttribute("data-tag")&&(R(k,e),!a&&s&&m&&X())}),[a,m,s,X,R,k]),ne=e.useCallback((e=>{v(k,e)}),[v,k]),oe=e.useCallback((e=>{S(k,e)}),[S,k]),ae=r(k,C),{style:le,classNames:re}=b(k,n,["rdt_TableRow"]),ie=M&&N,se=x?le:{},de=W&&D%2==0;return e.createElement(e.Fragment,null,e.createElement(K,{id:`row-${f}`,role:"row",$striped:de,$highlightOnHover:w,$pointerOnHover:!a&&Z,$dense:l,onClick:ee,onDoubleClick:te,onMouseEnter:ne,onMouseLeave:oe,className:re,$selected:ie,style:le},j&&e.createElement(T,{name:`select-row-${ae}`,keyField:C,row:k,rowCount:P,selected:N,selectableRowsComponent:I,selectableRowsComponentProps:L,selectableRowDisabled:H,selectableRowsSingle:A,onSelectedRow:O}),s&&!g&&e.createElement(_,{id:ae,expandableIcon:i,expanded:J,row:k,onToggled:X,disabled:a}),t.map((t=>t.omit?null:e.createElement(F,{id:`cell-${t.id}-${ae}`,key:`cell-${t.id}-${ae}`,dataTag:t.ignoreRowClick||t.button?null:"allowRowEvents",column:t,row:k,rowIndex:D,isDragging:h(B,t.id),onDragStart:G,onDragOver:V,onDragEnd:U,onDragEnter:Y,onDragLeave:q})))),s&&J&&e.createElement(z,{key:`expander-${ae}`,data:k,extendedRowStyle:se,extendedClassNames:re,ExpanderComponent:d,expanderComponentProps:c}))}const J=n.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({$sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({$sortDirection:e})=>"desc"===e&&"transform: rotate(180deg)"};
`,Q=({sortActive:e,sortDirection:n})=>t.createElement(J,{$sortActive:e,$sortDirection:n},"▲"),X=n(P)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,$isDragging:t})=>t&&e.headCells.draggingStyle};
`,Z=o`
	cursor: pointer;
	span.__rdt_custom_sort_icon__ {
		i,
		svg {
			transform: 'translate3d(0, 0, 0)';
			${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
			color: inherit;
			font-size: 18px;
			height: 18px;
			width: 18px;
			backface-visibility: hidden;
			transform-style: preserve-3d;
			transition-duration: 95ms;
			transition-property: transform;
		}

		&.asc i,
		&.asc svg {
			transform: rotate(180deg);
		}
	}

	${({sortActive:e})=>!e&&o`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`,ee=n.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&Z};
`,te=n.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var ne=e.memo((function({column:t,disabled:n,draggingColumnId:o,selectedColumn:a={},sortDirection:r,sortIcon:i,sortServer:s,pagination:d,paginationServer:c,persistSelectedOnSort:g,selectableRowsVisibleOnly:u,onSort:p,onDragStart:b,onDragOver:m,onDragEnd:w,onDragEnter:f,onDragLeave:x}){e.useEffect((()=>{"string"==typeof t.selector&&console.error(`Warning: ${t.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)}),[]);const[C,y]=e.useState(!1),R=e.useRef(null);if(e.useEffect((()=>{R.current&&y(R.current.scrollWidth>R.current.clientWidth)}),[C]),t.omit)return null;const v=()=>{if(!t.sortable&&!t.selector)return;let e=r;h(a.id,t.id)&&(e=r===l.ASC?l.DESC:l.ASC),p({type:"SORT_CHANGE",sortDirection:e,selectedColumn:t,clearSelectedOnSort:d&&c&&!g||s||u})},S=t=>e.createElement(Q,{sortActive:t,sortDirection:r}),E=()=>e.createElement("span",{className:[r,"__rdt_custom_sort_icon__"].join(" ")},i),O=!(!t.sortable||!h(a.id,t.id)),$=!t.sortable||n,k=t.sortable&&!i&&!t.right,P=t.sortable&&!i&&t.right,D=t.sortable&&i&&!t.right,H=t.sortable&&i&&t.right;return e.createElement(X,{"data-column-id":t.id,className:"rdt_TableCol",$headCell:!0,allowOverflow:t.allowOverflow,button:t.button,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,center:t.center,width:t.width,draggable:t.reorder,$isDragging:h(t.id,o),onDragStart:b,onDragOver:m,onDragEnd:w,onDragEnter:f,onDragLeave:x},t.name&&e.createElement(ee,{"data-column-id":t.id,"data-sort-id":t.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:$?void 0:v,onKeyPress:$?void 0:e=>{"Enter"===e.key&&v()},sortActive:!$&&O,disabled:$},!$&&H&&E(),!$&&P&&S(O),"string"==typeof t.name?e.createElement(te,{title:C?t.name:void 0,ref:R,"data-column-id":t.id},t.name):t.name,!$&&D&&E(),!$&&k&&S(O)))}));const oe=n(k)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function ae({headCell:t=!0,rowData:n,keyField:o,allSelected:a,mergeSelections:l,selectedRows:r,selectableRowsComponent:i,selectableRowsComponentProps:s,selectableRowDisabled:d,onSelectAllRows:c}){const g=r.length>0&&!a,u=d?n.filter((e=>!d(e))):n,p=0===u.length,b=Math.min(n.length,u.length);return e.createElement(oe,{className:"rdt_TableCol",$headCell:t,$noPadding:!0},e.createElement(j,{name:"select-all-rows",component:i,componentOptions:s,onClick:()=>{c({type:"SELECT_ALL_ROWS",rows:u,rowCount:b,mergeSelections:l,keyField:o})},checked:a,indeterminate:g,disabled:p}))}function le(t=B.AUTO){const n="object"==typeof window,[o,a]=e.useState(!1);return e.useEffect((()=>{if(n)if("auto"!==t)a("rtl"===t);else{const e=!(!window.document||!window.document.createElement),t=document.getElementsByTagName("BODY")[0],n=document.getElementsByTagName("HTML")[0],o="rtl"===t.dir||"rtl"===n.dir;a(e&&o)}}),[t,n]),o}const re=n.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,ie=n.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,se=n.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: inherit;
	z-index: 1;
	align-items: center;
	justify-content: space-between;
	display: flex;
	${({$rtl:e})=>e&&"direction: rtl"};
	${({theme:e})=>e.contextMenu.style};
	${({theme:e,$visible:t})=>t&&e.contextMenu.activeStyle};
`;function de({contextMessage:t,contextActions:n,contextComponent:o,selectedCount:a,direction:l}){const r=le(l),i=a>0;return o?e.createElement(se,{$visible:i},e.cloneElement(o,{selectedCount:a})):e.createElement(se,{$visible:i,$rtl:r},e.createElement(re,null,((e,t,n)=>{if(0===t)return null;const o=1===t?e.singular:e.plural;return n?`${t} ${e.message||""} ${o}`:`${t} ${o} ${e.message||""}`})(t,a,r)),e.createElement(ie,null,n))}const ce=n.div`
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
	${({theme:e})=>e.header.style}
`,ge=n.div`
	flex: 1 0 auto;
	color: ${({theme:e})=>e.header.fontColor};
	font-size: ${({theme:e})=>e.header.fontSize};
	font-weight: 400;
`,ue=n.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,pe=({title:t,actions:n=null,contextMessage:o,contextActions:a,contextComponent:l,selectedCount:r,direction:i,showMenu:s=!0})=>e.createElement(ce,{className:"rdt_TableHeader",role:"heading","aria-level":1},e.createElement(ge,null,t),n&&e.createElement(ue,null,n),s&&e.createElement(de,{contextMessage:o,contextActions:a,contextComponent:l,direction:i,selectedCount:r}))
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */;function be(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n}const me={left:"flex-start",right:"flex-end",center:"center"},we=n.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>me[e]};
	flex-wrap: ${({$wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,he=t=>{var{align:n="right",wrapContent:o=!0}=t,a=be(t,["align","wrapContent"]);return e.createElement(we,Object.assign({align:n,$wrapContent:o},a))},fe=n.div`
	display: flex;
	flex-direction: column;
`,xe=n.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({$responsive:e,$fixedHeader:t})=>e&&o`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${t?"auto":"hidden"};
			min-height: 0;
		`};

	${({$fixedHeader:e=!1,$fixedHeaderScrollHeight:t="100vh"})=>e&&o`
			max-height: ${t};
			-webkit-overflow-scrolling: touch;
		`};

	${({theme:e})=>e.responsiveWrapper.style};
`,Ce=n.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,ye=n.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`,Re=n(k)`
	white-space: nowrap;
	${({theme:e})=>e.expanderCell.style};
`,ve=n.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,Se=n.select`
	cursor: pointer;
	height: 24px;
	max-width: 100%;
	user-select: none;
	padding-left: 8px;
	padding-right: 24px;
	box-sizing: content-box;
	font-size: inherit;
	color: inherit;
	border: none;
	background-color: transparent;
	appearance: none;
	direction: ltr;
	flex-shrink: 0;

	&::-ms-expand {
		display: none;
	}

	&:disabled::-ms-expand {
		background: #f60;
	}

	option {
		color: initial;
	}
`,Ee=n.div`
	position: relative;
	flex-shrink: 0;
	font-size: inherit;
	color: inherit;
	margin-top: 1px;

	svg {
		top: 0;
		right: 0;
		color: inherit;
		position: absolute;
		fill: currentColor;
		width: 24px;
		height: 24px;
		display: inline-block;
		user-select: none;
		pointer-events: none;
	}
`,Oe=t=>{var{defaultValue:n,onChange:o}=t,a=be(t,["defaultValue","onChange"]);return e.createElement(Ee,null,e.createElement(Se,Object.assign({onChange:o,defaultValue:n},a)))},$e={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,clearSelectedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return t.createElement("div",null,"To add an expander pass in a component instance via ",t.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:t.createElement((()=>t.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),t.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"}))),null),expanded:t.createElement((()=>t.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),t.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"}))),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:t.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:t.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:G.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:t.createElement((()=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},t.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),t.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"}))),null),paginationIconLastPage:t.createElement((()=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},t.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),t.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}))),null),paginationIconNext:t.createElement((()=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},t.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),t.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),null),paginationIconPrevious:t.createElement((()=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},t.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),t.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:B.AUTO,onChangePage:p,onChangeRowsPerPage:p,onRowClicked:p,onRowDoubleClicked:p,onRowMouseEnter:p,onRowMouseLeave:p,onRowExpandToggled:p,onSelectedRowsChange:p,onSort:p,onColumnOrderChange:p},ke={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},Pe=n.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,De=n.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({$isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,He=n.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${S`
    width: 100%;
    justify-content: space-around;
  `};
`,Fe=n.span`
	flex-shrink: 1;
	user-select: none;
`,je=n(Fe)`
	margin: 0 24px;
`,Ie=n(Fe)`
	margin: 0 4px;
`;var Te=e.memo((function({rowsPerPage:t,rowCount:n,currentPage:o,direction:a=$e.direction,paginationRowsPerPageOptions:l=$e.paginationRowsPerPageOptions,paginationIconLastPage:r=$e.paginationIconLastPage,paginationIconFirstPage:i=$e.paginationIconFirstPage,paginationIconNext:s=$e.paginationIconNext,paginationIconPrevious:d=$e.paginationIconPrevious,paginationComponentOptions:c=$e.paginationComponentOptions,onChangeRowsPerPage:u=$e.onChangeRowsPerPage,onChangePage:p=$e.onChangePage}){const b=(()=>{const t="object"==typeof window;function n(){return{width:t?window.innerWidth:void 0,height:t?window.innerHeight:void 0}}const[o,a]=e.useState(n);return e.useEffect((()=>{if(!t)return()=>null;function e(){a(n())}return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),o})(),m=le(a),w=b.width&&b.width>599,h=g(n,t),f=o*t,x=f-t+1,C=1===o,y=o===h,R=Object.assign(Object.assign({},ke),c),v=o===h?`${x}-${n} ${R.rangeSeparatorText} ${n}`:`${x}-${f} ${R.rangeSeparatorText} ${n}`,S=e.useCallback((()=>p(o-1)),[o,p]),E=e.useCallback((()=>p(o+1)),[o,p]),O=e.useCallback((()=>p(1)),[p]),$=e.useCallback((()=>p(g(n,t))),[p,n,t]),k=e.useCallback((e=>u(Number(e.target.value),o)),[o,u]),P=l.map((t=>e.createElement("option",{key:t,value:t},t)));R.selectAllRowsItem&&P.push(e.createElement("option",{key:-1,value:n},R.selectAllRowsItemText));const D=e.createElement(Oe,{onChange:k,defaultValue:t,"aria-label":R.rowsPerPageText},P);return e.createElement(Pe,{className:"rdt_Pagination"},!R.noRowsPerPage&&w&&e.createElement(e.Fragment,null,e.createElement(Ie,null,R.rowsPerPageText),D),w&&e.createElement(je,null,v),e.createElement(He,null,e.createElement(De,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":C,onClick:O,disabled:C,$isRTL:m},i),e.createElement(De,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":C,onClick:S,disabled:C,$isRTL:m},d),!R.noRowsPerPage&&!w&&D,e.createElement(De,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":y,onClick:E,disabled:y,$isRTL:m},s),e.createElement(De,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":y,onClick:$,disabled:y,$isRTL:m},r)))}));const Le=(t,n)=>{const o=e.useRef(!0);e.useEffect((()=>{o.current?o.current=!1:t()}),n)};var Me=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===Ae}(e)}(e)};var Ae="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function _e(e,t){return!1!==t.clone&&t.isMergeableObject(e)?Ge((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function Ne(e,t,n){return e.concat(t).map((function(e){return _e(e,n)}))}function ze(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function We(e,t){try{return t in e}catch(e){return!1}}function Be(e,t,n){var o={};return n.isMergeableObject(e)&&ze(e).forEach((function(t){o[t]=_e(e[t],n)})),ze(t).forEach((function(a){(function(e,t){return We(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,a)||(We(e,a)&&n.isMergeableObject(t[a])?o[a]=function(e,t){if(!t.customMerge)return Ge;var n=t.customMerge(e);return"function"==typeof n?n:Ge}(a,n)(e[a],t[a],n):o[a]=_e(t[a],n))})),o}function Ge(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||Ne,n.isMergeableObject=n.isMergeableObject||Me,n.cloneUnlessOtherwiseSpecified=_e;var o=Array.isArray(t);return o===Array.isArray(e)?o?n.arrayMerge(e,t,n):Be(e,t,n):_e(t,n)}Ge.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return Ge(e,n,t)}),{})};var Ve=Ge;const Ue={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},Ye={default:Ue,light:Ue,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function Ke(e="default",t,n="default"){return Ye[e]||(Ye[e]=Ve(Ye[n],t||{})),Ye[e]=Ve(Ye[e],t||{}),Ye[e]}function qe(t,n,o,a){const[r,i]=e.useState((()=>c(t))),[s,d]=e.useState(""),g=e.useRef("");Le((()=>{i(c(t))}),[t]);const u=e.useCallback((e=>{var t,n,o;const{attributes:a}=e.target,l=null===(t=a.getNamedItem("data-column-id"))||void 0===t?void 0:t.value;l&&(g.current=(null===(o=null===(n=r[w(r,l)])||void 0===n?void 0:n.id)||void 0===o?void 0:o.toString())||"",d(g.current))}),[r]),p=e.useCallback((e=>{var t;const{attributes:o}=e.target,a=null===(t=o.getNamedItem("data-column-id"))||void 0===t?void 0:t.value;if(a&&g.current&&a!==g.current){const e=w(r,g.current),t=w(r,a),o=[...r];o[e]=r[t],o[t]=r[e],i(o),n(o)}}),[n,r]),b=e.useCallback((e=>{e.preventDefault()}),[]),m=e.useCallback((e=>{e.preventDefault()}),[]),h=e.useCallback((e=>{e.preventDefault(),g.current="",d("")}),[]),f=function(e=!1){return e?l.ASC:l.DESC}(a),x=e.useMemo((()=>r[w(r,null==o?void 0:o.toString())]||{}),[o,r]);return{tableColumns:r,draggingColumnId:s,handleDragStart:u,handleDragEnter:p,handleDragOver:b,handleDragLeave:m,handleDragEnd:h,defaultSortDirection:f,defaultSortColumn:x}}var Je=e.memo((function(t){const{data:n=$e.data,columns:o=$e.columns,title:s=$e.title,actions:d=$e.actions,keyField:c=$e.keyField,striped:p=$e.striped,highlightOnHover:b=$e.highlightOnHover,pointerOnHover:w=$e.pointerOnHover,dense:h=$e.dense,selectableRows:x=$e.selectableRows,selectableRowsSingle:y=$e.selectableRowsSingle,selectableRowsHighlight:S=$e.selectableRowsHighlight,selectableRowsNoSelectAll:E=$e.selectableRowsNoSelectAll,selectableRowsVisibleOnly:O=$e.selectableRowsVisibleOnly,selectableRowSelected:$=$e.selectableRowSelected,selectableRowDisabled:P=$e.selectableRowDisabled,selectableRowsComponent:D=$e.selectableRowsComponent,selectableRowsComponentProps:H=$e.selectableRowsComponentProps,onRowExpandToggled:F=$e.onRowExpandToggled,onSelectedRowsChange:j=$e.onSelectedRowsChange,expandableIcon:I=$e.expandableIcon,onChangeRowsPerPage:T=$e.onChangeRowsPerPage,onChangePage:L=$e.onChangePage,paginationServer:M=$e.paginationServer,paginationServerOptions:A=$e.paginationServerOptions,paginationTotalRows:_=$e.paginationTotalRows,paginationDefaultPage:N=$e.paginationDefaultPage,paginationResetDefaultPage:z=$e.paginationResetDefaultPage,paginationPerPage:W=$e.paginationPerPage,paginationRowsPerPageOptions:B=$e.paginationRowsPerPageOptions,paginationIconLastPage:G=$e.paginationIconLastPage,paginationIconFirstPage:V=$e.paginationIconFirstPage,paginationIconNext:U=$e.paginationIconNext,paginationIconPrevious:Y=$e.paginationIconPrevious,paginationComponent:K=$e.paginationComponent,paginationComponentOptions:J=$e.paginationComponentOptions,responsive:Q=$e.responsive,progressPending:X=$e.progressPending,progressComponent:Z=$e.progressComponent,persistTableHead:ee=$e.persistTableHead,noDataComponent:te=$e.noDataComponent,disabled:oe=$e.disabled,noTableHead:le=$e.noTableHead,noHeader:re=$e.noHeader,fixedHeader:ie=$e.fixedHeader,fixedHeaderScrollHeight:se=$e.fixedHeaderScrollHeight,pagination:de=$e.pagination,subHeader:ce=$e.subHeader,subHeaderAlign:ge=$e.subHeaderAlign,subHeaderWrap:ue=$e.subHeaderWrap,subHeaderComponent:be=$e.subHeaderComponent,noContextMenu:me=$e.noContextMenu,contextMessage:we=$e.contextMessage,contextActions:Se=$e.contextActions,contextComponent:Ee=$e.contextComponent,expandableRows:Oe=$e.expandableRows,onRowClicked:ke=$e.onRowClicked,onRowDoubleClicked:Pe=$e.onRowDoubleClicked,onRowMouseEnter:De=$e.onRowMouseEnter,onRowMouseLeave:He=$e.onRowMouseLeave,sortIcon:Fe=$e.sortIcon,onSort:je=$e.onSort,sortFunction:Ie=$e.sortFunction,sortServer:Me=$e.sortServer,expandableRowsComponent:Ae=$e.expandableRowsComponent,expandableRowsComponentProps:_e=$e.expandableRowsComponentProps,expandableRowDisabled:Ne=$e.expandableRowDisabled,expandableRowsHideExpander:ze=$e.expandableRowsHideExpander,expandOnRowClicked:We=$e.expandOnRowClicked,expandOnRowDoubleClicked:Be=$e.expandOnRowDoubleClicked,expandableRowExpanded:Ge=$e.expandableRowExpanded,expandableInheritConditionalStyles:Ue=$e.expandableInheritConditionalStyles,defaultSortFieldId:Ke=$e.defaultSortFieldId,defaultSortAsc:Je=$e.defaultSortAsc,clearSelectedRows:Qe=$e.clearSelectedRows,conditionalRowStyles:Xe=$e.conditionalRowStyles,theme:Ze=$e.theme,customStyles:et=$e.customStyles,direction:tt=$e.direction,onColumnOrderChange:nt=$e.onColumnOrderChange,className:ot}=t,{tableColumns:at,draggingColumnId:lt,handleDragStart:rt,handleDragEnter:it,handleDragOver:st,handleDragLeave:dt,handleDragEnd:ct,defaultSortDirection:gt,defaultSortColumn:ut}=qe(o,nt,Ke,Je),[{rowsPerPage:pt,currentPage:bt,selectedRows:mt,allSelected:wt,selectedCount:ht,selectedColumn:ft,sortDirection:xt,toggleOnSelectedRowsChange:Ct},yt]=e.useReducer(f,{allSelected:!1,selectedCount:0,selectedRows:[],selectedColumn:ut,toggleOnSelectedRowsChange:!1,sortDirection:gt,currentPage:N,rowsPerPage:W,selectedRowsFlag:!1,contextMessage:$e.contextMessage}),{persistSelectedOnSort:Rt=!1,persistSelectedOnPageChange:vt=!1}=A,St=!(!M||!vt&&!Rt),Et=de&&!X&&n.length>0,Ot=K||Te,$t=e.useMemo((()=>((e={},t="default",n="default")=>{const o=Ye[t]?t:n;return Ve({table:{style:{color:(a=Ye[o]).text.primary,backgroundColor:a.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:a.text.primary,backgroundColor:a.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:a.background.default,minHeight:"52px"}},head:{style:{color:a.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:a.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:a.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:a.context.background,fontSize:"18px",fontWeight:400,color:a.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:a.text.primary,backgroundColor:a.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:a.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:a.selected.text,backgroundColor:a.selected.default,borderBottomColor:a.background.default}},highlightOnHoverStyle:{color:a.highlightOnHover.text,backgroundColor:a.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:a.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:a.background.default},stripedStyle:{color:a.striped.text,backgroundColor:a.striped.default}},expanderRow:{style:{color:a.text.primary,backgroundColor:a.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:a.button.default,fill:a.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:a.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:a.button.hover},"&:focus":{outline:"none",backgroundColor:a.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:a.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:a.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:a.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:a.button.default,fill:a.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:a.button.disabled,fill:a.button.disabled},"&:hover:not(:disabled)":{backgroundColor:a.button.hover},"&:focus":{outline:"none",backgroundColor:a.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:a.text.primary,backgroundColor:a.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:a.text.primary,backgroundColor:a.background.default}}},e);var a})(et,Ze)),[et,Ze]),kt=e.useMemo((()=>Object.assign({},"auto"!==tt&&{dir:tt})),[tt]),Pt=e.useMemo((()=>{if(Me)return n;if((null==ft?void 0:ft.sortFunction)&&"function"==typeof ft.sortFunction){const e=ft.sortFunction,t=xt===l.ASC?e:(t,n)=>-1*e(t,n);return[...n].sort(t)}return function(e,t,n,o){return t?o&&"function"==typeof o?o(e.slice(0),t,n):e.slice(0).sort(((e,o)=>{let a,l;if("string"==typeof t?(a=i(e,t),l=i(o,t)):(a=t(e),l=t(o)),"asc"===n){if(a<l)return-1;if(a>l)return 1}if("desc"===n){if(a>l)return-1;if(a<l)return 1}return 0})):e}(n,null==ft?void 0:ft.selector,xt,Ie)}),[Me,ft,xt,n,Ie]),Dt=e.useMemo((()=>{if(de&&!M){const e=bt*pt,t=e-pt;return Pt.slice(t,e)}return Pt}),[bt,de,M,pt,Pt]),Ht=e.useCallback((e=>{yt(e)}),[]),Ft=e.useCallback((e=>{yt(e)}),[]),jt=e.useCallback((e=>{yt(e)}),[]),It=e.useCallback(((e,t)=>ke(e,t)),[ke]),Tt=e.useCallback(((e,t)=>Pe(e,t)),[Pe]),Lt=e.useCallback(((e,t)=>De(e,t)),[De]),Mt=e.useCallback(((e,t)=>He(e,t)),[He]),At=e.useCallback((e=>yt({type:"CHANGE_PAGE",page:e,paginationServer:M,visibleOnly:O,persistSelectedOnPageChange:vt})),[M,vt,O]),_t=e.useCallback((e=>{const t=g(_||Dt.length,e),n=u(bt,t);M||At(n),yt({type:"CHANGE_ROWS_PER_PAGE",page:n,rowsPerPage:e})}),[bt,At,M,_,Dt.length]);if(de&&!M&&Pt.length>0&&0===Dt.length){const e=g(Pt.length,pt),t=u(bt,e);At(t)}Le((()=>{j({allSelected:wt,selectedCount:ht,selectedRows:mt.slice(0)})}),[Ct]),Le((()=>{je(ft,xt,Pt.slice(0))}),[ft,xt]),Le((()=>{L(bt,_||Pt.length)}),[bt]),Le((()=>{T(pt,bt)}),[pt]),Le((()=>{At(N)}),[N,z]),Le((()=>{if(de&&M&&_>0){const e=g(_,pt),t=u(bt,e);bt!==t&&At(t)}}),[_]),e.useEffect((()=>{yt({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:Qe})}),[y,Qe]),e.useEffect((()=>{if(!$)return;const e=Pt.filter((e=>$(e))),t=y?e.slice(0,1):e;yt({type:"SELECT_MULTIPLE_ROWS",keyField:c,selectedRows:t,totalRows:Pt.length,mergeSelections:St})}),[n,$]);const Nt=O?Dt:Pt,zt=vt||y||E;return e.createElement(a,{theme:$t},!re&&(!!s||!!d)&&e.createElement(pe,{title:s,actions:d,showMenu:!me,selectedCount:ht,direction:tt,contextActions:Se,contextComponent:Ee,contextMessage:we}),ce&&e.createElement(he,{align:ge,wrapContent:ue},be),e.createElement(xe,Object.assign({$responsive:Q,$fixedHeader:ie,$fixedHeaderScrollHeight:se,className:ot},kt),e.createElement(ye,null,X&&!ee&&e.createElement(Ce,null,Z),e.createElement(C,{disabled:oe,className:"rdt_Table",role:"table"},!le&&(!!ee||Pt.length>0&&!X)&&e.createElement(R,{className:"rdt_TableHead",role:"rowgroup",$fixedHeader:ie},e.createElement(v,{className:"rdt_TableHeadRow",role:"row",$dense:h},x&&(zt?e.createElement(k,{style:{flex:"0 0 48px"}}):e.createElement(ae,{allSelected:wt,selectedRows:mt,selectableRowsComponent:D,selectableRowsComponentProps:H,selectableRowDisabled:P,rowData:Nt,keyField:c,mergeSelections:St,onSelectAllRows:Ft})),Oe&&!ze&&e.createElement(Re,null),at.map((t=>e.createElement(ne,{key:t.id,column:t,selectedColumn:ft,disabled:X||0===Pt.length,pagination:de,paginationServer:M,persistSelectedOnSort:Rt,selectableRowsVisibleOnly:O,sortDirection:xt,sortIcon:Fe,sortServer:Me,onSort:Ht,onDragStart:rt,onDragOver:st,onDragEnd:ct,onDragEnter:it,onDragLeave:dt,draggingColumnId:lt}))))),!Pt.length&&!X&&e.createElement(ve,null,te),X&&ee&&e.createElement(Ce,null,Z),!X&&Pt.length>0&&e.createElement(fe,{className:"rdt_TableBody",role:"rowgroup"},Dt.map(((t,n)=>{const o=r(t,c),a=function(e=""){return"number"!=typeof e&&(!e||0===e.length)}(o)?n:o,l=m(t,mt,c),i=!!(Oe&&Ge&&Ge(t)),s=!!(Oe&&Ne&&Ne(t));return e.createElement(q,{id:a,key:a,keyField:c,"data-row-id":a,columns:at,row:t,rowCount:Pt.length,rowIndex:n,selectableRows:x,expandableRows:Oe,expandableIcon:I,highlightOnHover:b,pointerOnHover:w,dense:h,expandOnRowClicked:We,expandOnRowDoubleClicked:Be,expandableRowsComponent:Ae,expandableRowsComponentProps:_e,expandableRowsHideExpander:ze,defaultExpanderDisabled:s,defaultExpanded:i,expandableInheritConditionalStyles:Ue,conditionalRowStyles:Xe,selected:l,selectableRowsHighlight:S,selectableRowsComponent:D,selectableRowsComponentProps:H,selectableRowDisabled:P,selectableRowsSingle:y,striped:p,onRowExpandToggled:F,onRowClicked:It,onRowDoubleClicked:Tt,onRowMouseEnter:Lt,onRowMouseLeave:Mt,onSelectedRow:jt,draggingColumnId:lt,onDragStart:rt,onDragOver:st,onDragEnd:ct,onDragEnter:it,onDragLeave:dt})})))))),Et&&e.createElement("div",null,e.createElement(Ot,{onChangePage:At,onChangeRowsPerPage:_t,rowCount:_||Pt.length,currentPage:bt,rowsPerPage:pt,direction:tt,paginationRowsPerPageOptions:B,paginationIconLastPage:G,paginationIconFirstPage:V,paginationIconNext:U,paginationIconPrevious:Y,paginationComponentOptions:J})))}));export{G as Alignment,B as Direction,V as Media,W as STOP_PROP_TAG,Ke as createTheme,Je as default,Ye as defaultThemes};
