(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{144:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return o});t(76),t(56),t(37),t(167),t(74),t(75),t(35);var n=t(0),s=t.n(n),r=t(155),l=t(154),i=t(164);a.default=function(e){var a=e.data,t=a.markdownRemark,n=a.site,o=t.html,u=t.frontmatter,c=u.title+" | "+n.siteMetadata.title,m=Object.keys(i).reduce(function(e,a){return e[a]="glossary/"+a,e},{});return s.a.createElement(r.a,null,s.a.createElement(l.a,{title:c,keywords:n.siteMetadata.keywords}),s.a.createElement("section",{className:"page-container"},s.a.createElement("h1",null,u.title),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:function(e,a){if(!a)return e;var t=n.siteMetadata.baseHref.length<=0?window.location.origin:n.siteMetadata.baseHref;return e.replace(/href="#(.*?)"/g,function(e,n){var s="#"+n.toLowerCase();if(!Object.keys(a).includes(s))return e;var r=a[s];return void 0===r?e:'href=" '+t+"/"+r+'"'})}(o,m)}})))};var o="3774379009"},152:function(e,a,t){"use strict";t.d(a,"b",function(){return c});var n=t(0),s=t.n(n),r=t(4),l=t.n(r),i=t(33),o=t.n(i);t.d(a,"a",function(){return o.a});t(153);var u=s.a.createContext({}),c=function(e){return s.a.createElement(u.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},153:function(e,a,t){var n;e.exports=(n=t(158))&&n.default||n},154:function(e,a,t){"use strict";var n=t(159),s=t(0),r=t.n(s),l=t(4),i=t.n(l),o=t(165),u=t.n(o);function c(e){var a=e.description,t=e.lang,s=e.meta,l=e.keywords,i=e.title,o=n.data.site,c=a||o.siteMetadata.description;return r.a.createElement(u.a,{htmlAttributes:{lang:t},title:i,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(s)})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},a.a=c},155:function(e,a,t){"use strict";var n=t(7),s=t.n(n),r=t(157),l=(t(160),t(161),t(0)),i=t.n(l),o=t(4),u=t.n(o),c=t(152),m=(t(162),function(e){var a=e.siteTitle;return i.a.createElement("header",{className:"app-header"},i.a.createElement(c.a,{to:"/pages/about"},i.a.createElement("h2",null,a)))});m.propTypes={siteTitle:u.a.string},m.defaultProps={siteTitle:""};var d=m,g=t(156),p=(t(163),function(e){e.siteTitle;return i.a.createElement("footer",{className:"app-footer"},i.a.createElement("div",{className:"tags"},i.a.createElement("p",{className:"tag"},"A Community Group of the",i.a.createElement("a",{href:"https://www.w3.org/",target:"_blank",rel:"noopener noreferrer"},"World Wide Web Consortium.")),i.a.createElement("p",{className:"tag"},"Developed with the support of the EU-funded ",i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.w3.org/WAI/"},"WAI-Tools ")," Project.")),i.a.createElement("div",{className:"logos"},i.a.createElement("a",{lang:"en",className:"logo-w3c",href:"https://www.w3.org/",rel:"noopener noreferrer",target:"_blank"},i.a.createElement("svg",{role:"img","aria-label":"W3C",viewBox:"0 0 68 34",height:"25",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("g",null,i.a.createElement("path",{d:"m16.117 1.006 5.759 19.58 5.759-19.58h4.17 11.444v1.946l-5.879 10.128c2.065.663 3.627 1.868 4.686 3.615 1.059 1.748 1.589 3.799 1.589 6.155 0 2.914-.775 5.363-2.324 7.348s-3.555 2.978-6.017 2.978c-1.854 0-3.469-.589-4.845-1.767-1.377-1.178-2.396-2.773-3.058-4.786l3.256-1.35c.477 1.218 1.106 2.178 1.887 2.879.781.702 1.701 1.052 2.76 1.052 1.112 0 2.052-.622 2.82-1.866.768-1.245 1.152-2.74 1.152-4.489 0-1.933-.411-3.429-1.231-4.488-.954-1.244-2.45-1.867-4.489-1.867h-1.588v-1.906l5.56-9.612h-6.712l-.382.65-8.163 27.548h-.397l-5.958-19.937-5.957 19.937h-.397l-9.53-32.168h4.17l5.759 19.58 3.892-13.185-1.906-6.395z"}),i.a.createElement("path",{d:"m64.92 1.006c-.819 0-1.554.295-2.111.861-.591.6-.92 1.376-.92 2.178s.313 1.545.887 2.128c.583.591 1.334.912 2.145.912.793 0 1.562-.321 2.161-.903.574-.557.887-1.3.887-2.136 0-.811-.321-1.57-.878-2.136-.584-.592-1.344-.904-2.171-.904zm2.643 3.065c0 .701-.271 1.351-.768 1.832-.524.507-1.174.777-1.892.777-.675 0-1.342-.278-1.84-.785s-.777-1.157-.777-1.849.287-1.368.802-1.891c.481-.49 1.131-.751 1.84-.751.726 0 1.376.271 1.883.785.49.489.752 1.147.752 1.882zm-2.559-1.807h-1.3v3.445h.65v-1.469h.642l.701 1.469h.726l-.769-1.57c.498-.102.785-.439.785-.929 0-.625-.472-.946-1.435-.946zm-.118.422c.608 0 .886.169.886.591 0 .405-.278.549-.87.549h-.549v-1.14z"}),i.a.createElement("path",{d:"m59.807.825.676 4.107-2.391 4.575s-.918-1.941-2.443-3.015c-1.285-.905-2.122-1.102-3.431-.832-1.681.347-3.587 2.357-4.419 4.835-.995 2.965-1.005 4.4-1.04 5.718-.056 2.113.277 3.362.277 3.362s-1.452-2.686-1.438-6.62c.009-2.808.451-5.354 1.75-7.867 1.143-2.209 2.842-3.535 4.35-3.691 1.559-.161 2.791.59 3.743 1.403 1 .854 2.01 2.721 2.01 2.721z"}),i.a.createElement("path",{d:"m60.102 24.063s-1.057 1.889-1.715 2.617c-.659.728-1.837 2.01-3.292 2.651s-2.218.762-3.656.624c-1.437-.138-2.772-.97-3.24-1.317s-1.664-1.369-2.34-2.322-1.733-2.859-1.733-2.859.589 1.91.958 2.721c.212.467.864 1.894 1.789 3.136.863 1.159 2.539 3.154 5.086 3.604 2.547.451 4.297-.693 4.73-.97s1.346-1.042 1.924-1.66c.603-.645 1.174-1.468 1.49-1.962.231-.36.607-1.092.607-1.092z"})))),i.a.createElement("a",{lang:"en",className:"logo-wai",href:"https://www.w3.org/WAI/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("span",{className:"wai"},i.a.createElement("span",{className:"wa"},"Web Accessibility")," ",i.a.createElement("span",{className:"i"},i.a.createElement("span",{className:"initieative"},"Initiative")," ",i.a.createElement("span",null,"WAI")))),i.a.createElement("a",{href:g.repository.url,target:"_blank",rel:"noopener noreferrer",className:"logo-github","aria-label":"link to github repository"},i.a.createElement("svg",{enableBackground:"new 0 0 512 512",id:"Layer_1",version:"1.1",width:"25",height:"25",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("g",null,i.a.createElement("path",{d:"M296.133,354.174c49.885-5.891,102.942-24.029,102.942-110.192   c0-24.49-8.624-44.448-22.67-59.869c2.266-5.89,9.515-28.114-2.734-58.947c0,0-18.139-5.898-60.759,22.669   c-18.139-4.983-38.09-8.163-56.682-8.163c-19.053,0-39.011,3.18-56.697,8.163c-43.082-28.567-61.22-22.669-61.22-22.669   c-12.241,30.833-4.983,53.057-2.718,58.947c-14.061,15.42-22.677,35.379-22.677,59.869c0,86.163,53.057,104.301,102.942,110.192   c-6.344,5.452-12.241,15.873-14.507,30.387c-12.702,5.438-45.808,15.873-65.758-18.592c0,0-11.795-21.31-34.012-22.669   c0,0-22.224-0.453-1.813,13.592c0,0,14.96,6.812,24.943,32.653c0,0,13.6,43.089,76.179,29.48v38.543   c0,5.906-4.53,12.702-15.865,10.89C96.139,438.977,32.2,354.626,32.2,255.77c0-123.807,100.216-224.022,224.03-224.022   c123.347,0,224.023,100.216,223.57,224.022c0,98.856-63.946,182.754-152.828,212.688c-11.342,2.266-15.873-4.53-15.873-10.89   V395.45C311.1,374.577,304.288,360.985,296.133,354.174L296.133,354.174z M512,256.23C512,114.73,397.263,0,256.23,0   C114.73,0,0,114.73,0,256.23C0,397.263,114.73,512,256.23,512C397.263,512,512,397.263,512,256.23L512,256.23z"}))))))});p.propTypes={siteTitle:u.a.string},p.defaultProps={siteTitle:""};var h=p,b=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={showMenu:!0},t}s()(a,e);var t=a.prototype;return t.handleHideShowMenu=function(e){this.setState(function(e){return{showMenu:!e.showMenu}})},t.getListItemFromEdges=function(e){return e.map(function(e){var a=e.node,t=a.path,n=a.context;if(!n||!n.title)return null;var s=""+n.title+t;return i.a.createElement("li",{key:s},i.a.createElement(c.a,{activeClassName:"active",to:t},n.title))})},t.render=function(){var e=this,a=this.props.children;return i.a.createElement(c.b,{query:"532816788",render:function(t){var n=t.getSiteTitle,s=t.getTopLevelNavigation,r=t.getNonRulesNavigation;return i.a.createElement("section",{className:"layout-container"},i.a.createElement("aside",{className:e.state.showMenu?"show":"hide"},i.a.createElement("button",{className:"nav-hide-show-menu btn-secondary",onClick:function(a){return e.handleHideShowMenu(a)}},"☰"),i.a.createElement("div",{className:"logo"},i.a.createElement(d,{siteTitle:n.siteMetadata.title})),i.a.createElement("nav",{className:"navigation"},i.a.createElement("ul",null,s.group.map(function(a){return e.getListItemFromEdges(a.edges)}),i.a.createElement("li",null,i.a.createElement("hr",null)),i.a.createElement("li",{key:"rules"},i.a.createElement(c.a,{to:"/rules/",activeClassName:"active"},"Rules")),i.a.createElement("li",{key:"glossary"},i.a.createElement(c.a,{to:"/glossary/",activeClassName:"active"},"Glossary")),i.a.createElement("li",null,i.a.createElement("hr",null)),r.group.map(function(a,t){var n=a.totalCount,s=a.edges,r=a.fieldValue;if(n<=0)return null;var l=r+"-"+t;return i.a.createElement("li",{key:l},i.a.createElement("p",{className:"parent-item"},r),i.a.createElement("ul",null,e.getListItemFromEdges(s)),i.a.createElement("hr",null))})))),i.a.createElement("main",null,i.a.createElement("section",null,a),i.a.createElement(h,null)))},data:r})},a}(i.a.Component);b.propTypes={children:u.a.node.isRequired};a.a=b},156:function(e){e.exports={name:"ACT-RULES-CG",description:"Accessibility conformance testing rules for HTML",version:"1.0.0",author:"WCAG ACT RULES CG",contributors:[{name:"Anne Thyme Nørregaard",url:"https://github.com/annethyme"},{name:"Audrey Maniez",url:"https://github.com/audreymaniez"},{name:"Brian Bors",url:"https://www.linkedin.com/in/brianbors/"},{name:"Bryn Anderson",url:"https://github.com/brynanders"},{name:"Carlos Duarte",url:"https://github.com/carlosapaduarte"},{name:"Dagfinn Rømen",url:"https://github.com/DagfinnRomen"},{name:"Emma Pratt Richens",url:"https://github.com/EmmaJP"},{name:"Frank Berker",url:"https://github.com/yetanothereye"},{name:"Geir Sindre Fossøy",url:"https://github.com/geirsf"},{name:"Jey Nandakumar",url:"https://github.com/jkodu"},{name:"Malin Øvrebø",url:"https: //github.com/MaliinO"},{name:"Rob Fentress",url:"https://github.com/robfentress"},{name:"Shadi Abou-Zahra",url:"https://github.com/nitedog"},{name:"Stein Erik Skotkjerra",url:"https://github.com/skotkjerra"},{name:"Wilco Fiers",url:"https://github.com/wilcofiers}"}],dependencies:{axios:"^0.18.0",fastmatter:"^2.1.1",gatsby:"^2.3.24","gatsby-image":"^2.0.39","gatsby-plugin-manifest":"^2.0.29","gatsby-plugin-offline":"^2.0.24","gatsby-plugin-prefetch-google-fonts":"^1.4.2","gatsby-plugin-react-helmet":"^3.0.12","gatsby-plugin-sass":"^2.0.10","gatsby-plugin-sharp":"^2.0.35","gatsby-remark-autolink-headers":"^2.0.15","gatsby-remark-prismjs":"^3.2.8","gatsby-source-filesystem":"^2.0.29","gatsby-transformer-remark":"^2.3.8","gatsby-transformer-sharp":"^2.1.18","gfm-code-blocks":"^1.0.0",jsonld:"^1.5.4","make-dir":"^2.1.0",ncp:"^2.0.0","node-sass":"^4.11.0","normalize.css":"^8.0.1",prismjs:"^1.16.0","prop-types":"^15.7.2",react:"^16.8.6","react-dom":"^16.8.6","react-helmet":"^5.2.0",showdown:"^1.9.0"},devDependencies:{prettier:"^1.17.0"},keywords:["WCAG","ACT Rules","Accessibility","W3C"],license:"MIT",scripts:{prebuild:"npm run get-data",build:"gatsby build",develop:"npm run get-data && gatsby develop",format:"prettier --write *.{json,md,js,jsx} './{_data,_rules,build,gatsby,pages,src,test-assets}/**/*.{json,md,js,jsx}'",start:"npm run develop",serve:"gatsby serve",test:'echo "Write tests! -> https://gatsby.dev/unit-testing"',"get-implementations":"node ./build/get-implementations","get-wcag-sc-metadata":"node ./build/get-wcag-sc-metadata","get-data":"npm run get-wcag-sc-metadata && npm run get-implementations"},homepage:"https://github.com/act-rules/act-rules.github.io",repository:{type:"git",url:"https://github.com/act-rules/act-rules.github.io"},bugs:{url:"https://github.com/act-rules/act-rules.github.io/issues"},pulls:{url:"https://github.com/act-rules/act-rules.github.io/pulls"},www:{url:"https://act-rules.github.io",baseDir:"./public"},config:{references:{wcag21:"https://raw.githubusercontent.com/w3c/wai-wcag-quickref/gh-pages/_data/wcag21.json"},implementations:{alfa:"https://raw.githubusercontent.com/w3c/earl/master/earl-reports/alfa-report.json",axe:"https://raw.githubusercontent.com/w3c/earl/master/earl-reports/axe-report.json"}}}},157:function(e){e.exports={data:{getSiteTitle:{siteMetadata:{title:"ACT RULES CG"}},getTopLevelNavigation:{group:[{fieldValue:"default",totalCount:3,edges:[{node:{path:"/pages/about/",context:{sourceInstanceName:"pages",title:"About Us",markdownType:"default"}}},{node:{path:"/pages/contribute/",context:{sourceInstanceName:"pages",title:"How to Contribute",markdownType:"default"}}},{node:{path:"/pages/license/",context:{sourceInstanceName:"pages",title:"License",markdownType:"default"}}}]}]},getNonRulesNavigation:{group:[{fieldValue:"documentation",totalCount:8,edges:[{node:{path:"/pages/design/atomic-template-empty/",context:{title:"",markdownType:"documentation"}}},{node:{path:"/pages/design/composite-template-empty/",context:{title:"",markdownType:"documentation"}}},{node:{path:"/pages/structure/accessibility-support/",context:{title:"Accessibility Support",markdownType:"documentation"}}},{node:{path:"/pages/design/definition-of-done/",context:{title:'Definition of "Done" 1.0',markdownType:"documentation"}}},{node:{path:"/pages/design/rule-design/",context:{title:"Rule Design",markdownType:"documentation"}}},{node:{path:"/pages/design/review/",context:{title:"Rule Design and Review Process",markdownType:"documentation"}}},{node:{path:"/pages/design/rule-template/",context:{title:"Rule Template",markdownType:"documentation"}}},{node:{path:"/pages/structure/terminology/",context:{title:"Terminology",markdownType:"documentation"}}}]},{fieldValue:"implementations",totalCount:4,edges:[{node:{path:"/pages/implementations/overview/",context:{title:"Overview",markdownType:"implementations"}}},{node:{path:"/pages/implementations/reporting/",context:{title:"Status & Reporting",markdownType:"implementations"}}},{node:{path:"/pages/implementations/testcases/",context:{title:"Test Cases",markdownType:"implementations"}}},{node:{path:"/pages/implementations/tools/",context:{title:"Tools",markdownType:"implementations"}}}]}]}}}},158:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),s=t.n(n),r=t(4),l=t.n(r),i=t(55),o=t(2),u=function(e){var a=e.location,t=o.default.getResourcesForPathnameSync(a.pathname);return t?s.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json)):null};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=u},159:function(e){e.exports={data:{site:{siteMetadata:{title:"ACT RULES CG",description:"Accessibility conformance testing rules for HTML",author:"WCAG ACT RULES CG"}}}}},164:function(e){e.exports={"#included-in-the-accessibility-tree":[{name:"ARIA state or property allowed",slug:"rules/5c01ea"},{name:"ARIA state or property has valid value",slug:"rules/6a7281"},{name:"Audio-only as a media alternative for text",slug:"rules/afb423"},{name:"Autocomplete valid",slug:"rules/73f2c2"},{name:"Buttons have an accessible name",slug:"rules/97a4e1"},{name:"Filename is valid accessible name",slug:"rules/9eb3f6"},{name:"Form field has accessible name",slug:"rules/e086e5"},{name:"Form field label is descriptive",slug:"rules/cc0f0a"},{name:"Heading is descriptive",slug:"rules/b49b2e"},{name:"Id attribute is unique",slug:"rules/3ea0c8"},{name:"Image button has accessible name",slug:"rules/59796f"},{name:"Image has accessible name",slug:"rules/23a2a8"},{name:"Links have an accessible name",slug:"rules/c487ae"},{name:"No keyboard trap non-standard navigation",slug:"rules/ebe86a"},{name:"Role attribute has valid value",slug:"rules/674b10"},{name:"Video as a media alternative for text",slug:"rules/ab4d13"},{name:"Video-only as a media alternative for text",slug:"rules/fd26cf"},{name:"audio elements have a transcript",slug:"rules/2eb176"},{name:"audio only has a text alternative",slug:"rules/e7aa44"},{name:"iframe has an accessible name",slug:"rules/cae760"},{name:"video only element has transcript",slug:"rules/ee13b5"}],"#semantic-role":[{name:"ARIA state or property allowed",slug:"rules/5c01ea"},{name:"Autocomplete valid",slug:"rules/73f2c2"},{name:"Buttons have an accessible name",slug:"rules/97a4e1"},{name:"Filename is valid accessible name",slug:"rules/9eb3f6"},{name:"Form field has accessible name",slug:"rules/e086e5"},{name:"Form field label is descriptive",slug:"rules/cc0f0a"},{name:"Heading is descriptive",slug:"rules/b49b2e"},{name:"Image has accessible name",slug:"rules/23a2a8"},{name:"Links have an accessible name",slug:"rules/c487ae"},{name:"Role attribute has valid value",slug:"rules/674b10"},{name:"Role has required states and properties",slug:"rules/4e8ab6"},{name:"label and name from content mismatch",slug:"rules/2ee8b8"}],"#non-empty":[{name:"ARIA state or property has valid value",slug:"rules/6a7281"},{name:"Autocomplete valid",slug:"rules/73f2c2"},{name:"Buttons have an accessible name",slug:"rules/97a4e1"},{name:"Form field has accessible name",slug:"rules/e086e5"},{name:"HTML has lang attribute",slug:"rules/b5c3f8"},{name:"HTML lang and xml:lang match",slug:"rules/5b7ae0"},{name:"Image button has accessible name",slug:"rules/59796f"},{name:"Image has accessible name",slug:"rules/23a2a8"},{name:"Links have an accessible name",slug:"rules/c487ae"},{name:"Role attribute has valid value",slug:"rules/674b10"},{name:"Role has required states and properties",slug:"rules/4e8ab6"},{name:"Valid body lang attribute",slug:"rules/de46e4"},{name:"Validity of HTML Lang attribute",slug:"rules/bf051a"},{name:"iframe has an accessible name",slug:"rules/cae760"}],"#focusable":[{name:"ARIA state or property has valid value",slug:"rules/6a7281"},{name:"No keyboard trap",slug:"rules/80af7b"},{name:"No keyboard trap non-standard navigation",slug:"rules/ebe86a"},{name:"No keyboard trap standard navigation",slug:"rules/a1b64e"}],"#accessible-name":[{name:"ARIA state or property has valid value",slug:"rules/6a7281"},{name:"Buttons have an accessible name",slug:"rules/97a4e1"},{name:"Filename is valid accessible name",slug:"rules/9eb3f6"},{name:"Form field has accessible name",slug:"rules/e086e5"},{name:"Image button has accessible name",slug:"rules/59796f"},{name:"Image has accessible name",slug:"rules/23a2a8"},{name:"Links have an accessible name",slug:"rules/c487ae"},{name:"iframe has an accessible name",slug:"rules/cae760"},{name:"label and name from content mismatch",slug:"rules/2ee8b8"}],"#non-streaming-media-element":[{name:"Audio-only as a media alternative for text",slug:"rules/afb423"},{name:"audio elements have a transcript",slug:"rules/2eb176"},{name:"audio only has a text alternative",slug:"rules/e7aa44"}],"#visible":[{name:"Audio-only as a media alternative for text",slug:"rules/afb423"},{name:"Form field label is descriptive",slug:"rules/cc0f0a"},{name:"Heading is descriptive",slug:"rules/b49b2e"},{name:"Video as a media alternative for text",slug:"rules/ab4d13"},{name:"Video element description track",slug:"rules/f196ce"},{name:"Video has audio alternative",slug:"rules/eac66b"},{name:"Video only element has description track",slug:"rules/ac7dc6"},{name:"Video-only as a media alternative for text",slug:"rules/fd26cf"},{name:"audio elements have a transcript",slug:"rules/2eb176"},{name:"audio only has a text alternative",slug:"rules/e7aa44"},{name:"video element audio described",slug:"rules/1ea59c"},{name:"video element transcript",slug:"rules/1a02b0"},{name:"video has captions",slug:"rules/f51b46"},{name:"video only element has transcript",slug:"rules/ee13b5"},{name:"video only has an accessibile alternative",slug:"rules/c3232f"},{name:"video only has audio alternative",slug:"rules/d7ba54"},{name:"video with audio has audio description",slug:"rules/1ec09b"},{name:"video with audio has audio descriptions or transcript",slug:"rules/c5a4ea"}],"#visible-on-the-page":[{name:"Autocomplete valid",slug:"rules/73f2c2"},{name:"Id attribute is unique",slug:"rules/3ea0c8"},{name:"No keyboard trap non-standard navigation",slug:"rules/ebe86a"}],"#correct-autocomplete-field":[{name:"Autocomplete valid",slug:"rules/73f2c2"}],"#appropriate-field-for-the-form-control":[{name:"Autocomplete valid",slug:"rules/73f2c2"}],"#filename":[{name:"Filename is valid accessible name",slug:"rules/9eb3f6"}],"#whitespace":[{name:"HTML Page has a title",slug:"rules/2779a5"}],"#valid-language-subtag":[{name:"HTML lang and xml:lang match",slug:"rules/5b7ae0"},{name:"Valid body lang attribute",slug:"rules/de46e4"},{name:"Validity of HTML Lang attribute",slug:"rules/bf051a"}],"#section-of-content":[{name:"Heading is descriptive",slug:"rules/b49b2e"}],"#decorative":[{name:"Image has accessible name",slug:"rules/23a2a8"}],"#standard-keyboard-navigation":[{name:"No keyboard trap non-standard navigation",slug:"rules/ebe86a"},{name:"No keyboard trap standard navigation",slug:"rules/a1b64e"}],"#implicit-role":[{name:"Role has required states and properties",slug:"rules/4e8ab6"}],"#non-streaming":[{name:"Video as a media alternative for text",slug:"rules/ab4d13"},{name:"Video element description track",slug:"rules/f196ce"},{name:"Video only element has description track",slug:"rules/ac7dc6"},{name:"Video-only as a media alternative for text",slug:"rules/fd26cf"},{name:"video element audio described",slug:"rules/1ea59c"},{name:"video element transcript",slug:"rules/1a02b0"},{name:"video has captions",slug:"rules/f51b46"},{name:"video only element has transcript",slug:"rules/ee13b5"},{name:"video only has an accessibile alternative",slug:"rules/c3232f"},{name:"video only has audio alternative",slug:"rules/d7ba54"},{name:"video with audio has audio description",slug:"rules/1ec09b"},{name:"video with audio has audio descriptions or transcript",slug:"rules/c5a4ea"}],"#visible-text-content":[{name:"label and name from content mismatch",slug:"rules/2ee8b8"}],"#audio":[{name:"video has captions",slug:"rules/f51b46"}],"#captions":[{name:"video has captions",slug:"rules/f51b46"}]}},167:function(e,a,t){var n=t(26),s=t(36);t(168)("keys",function(){return function(e){return s(n(e))}})},168:function(e,a,t){var n=t(11),s=t(18),r=t(20);e.exports=function(e,a){var t=(s.Object||{})[e]||Object[e],l={};l[e]=a(t),n(n.S+n.F*r(function(){t(1)}),"Object",l)}}}]);
//# sourceMappingURL=component---src-templates-default-js-6222e9d69c7c9cc18364.js.map