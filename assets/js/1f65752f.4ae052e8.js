/*! For license information please see 1f65752f.4ae052e8.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[374520],{577798:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var i=t(824246),r=t(511151);const l={id:"ui-options-examples",title:"ui:options Examples",description:"The input props that can be specified under ui:options for different pickers"},o=void 0,s={id:"features/software-templates/ui-options-examples",title:"ui:options Examples",description:"The input props that can be specified under ui:options for different pickers",source:"@site/../docs/features/software-templates/ui-options-examples.md",sourceDirName:"features/software-templates",slug:"/features/software-templates/ui-options-examples",permalink:"/docs/features/software-templates/ui-options-examples",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-templates/ui-options-examples.md",tags:[],version:"current",frontMatter:{id:"ui-options-examples",title:"ui:options Examples",description:"The input props that can be specified under ui:options for different pickers"}},a={},c=[{value:"EntityPicker",id:"entitypicker",level:2},{value:"<code>allowArbitraryValues</code>",id:"allowarbitraryvalues",level:3},{value:"<code>allowedKinds</code>",id:"allowedkinds",level:3},{value:"<code>catalogFilter</code>",id:"catalogfilter",level:3},{value:"<code>defaultKind</code>",id:"defaultkind",level:3},{value:"<code>defaultNamespace</code>",id:"defaultnamespace",level:3},{value:"MultiEntityPicker",id:"multientitypicker",level:2},{value:"<code>allowArbitraryValues</code>",id:"allowarbitraryvalues-1",level:3},{value:"<code>catalogFilter</code>",id:"catalogfilter-1",level:3},{value:"<code>defaultKind</code>",id:"defaultkind-1",level:3},{value:"<code>defaultNamespace</code>",id:"defaultnamespace-1",level:3},{value:"<code>OwnerPicker</code>",id:"ownerpicker",level:2},{value:"<code>allowArbitraryValues</code>",id:"allowarbitraryvalues-2",level:3},{value:"<code>allowedKinds</code>",id:"allowedkinds-1",level:3},{value:"<code>catalogFilter</code>",id:"catalogfilter-2",level:3},{value:"<code>defaultNamespace</code>",id:"defaultnamespace-2",level:3},{value:"RepoUrlPicker",id:"repourlpicker",level:2},{value:"<code>allowedHosts</code>",id:"allowedhosts",level:3},{value:"<code>allowedOrganizations</code>",id:"allowedorganizations",level:3},{value:"<code>allowedProjects</code>",id:"allowedprojects",level:3},{value:"<code>allowedRepos</code>",id:"allowedrepos",level:3},{value:"<code>allowedOwners</code>",id:"allowedowners",level:3},{value:"<code>requestUserCredentials</code>",id:"requestusercredentials",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"entitypicker",children:"EntityPicker"}),"\n",(0,i.jsxs)(n.p,{children:["The input props that can be specified under ",(0,i.jsx)(n.code,{children:"ui:options"})," for the ",(0,i.jsx)(n.code,{children:"EntityPicker"})," field extension."]}),"\n",(0,i.jsx)(n.h3,{id:"allowarbitraryvalues",children:(0,i.jsx)(n.code,{children:"allowArbitraryValues"})}),"\n",(0,i.jsx)(n.p,{children:"Whether to allow arbitrary user input. Defaults to true."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"allowArbitraryValues"})," provides input validation when selecting an entity as the values you enter will correspond to a valid entity."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Adding a valid entity with ",(0,i.jsx)(n.code,{children:"allowArbitraryValues"})," as ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"entity:\n  title: Entity\n  type: string\n  description: Entity of the component\n  ui:field: EntityPicker\n  ui:options:\n    allowArbitraryValues: false\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Adding an arbitrary entity with ",(0,i.jsx)(n.code,{children:"allowArbitraryValues"})," as ",(0,i.jsx)(n.code,{children:"true"})," (default value)"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"entity:\n  title: Entity\n  type: string\n  description: Entity of the component\n  ui:field: EntityPicker\n  ui:options:\n    allowArbitraryValues: true\n"})}),"\n",(0,i.jsx)(n.h3,{id:"allowedkinds",children:(0,i.jsx)(n.code,{children:"allowedKinds"})}),"\n",(0,i.jsxs)(n.p,{children:["DEPRECATED: Use ",(0,i.jsx)(n.code,{children:"catalogFilter"})," instead."]}),"\n",(0,i.jsx)(n.h3,{id:"catalogfilter",children:(0,i.jsx)(n.code,{children:"catalogFilter"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"catalogFilter"})," supports filtering options by any field(s) of an entity."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Get all entities of kind ",(0,i.jsx)(n.code,{children:"Group"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"entity:\n  title: Entity\n  type: string\n  description: Entity of the component\n  ui:field: EntityPicker\n  ui:options:\n    catalogFilter:\n      - kind: Group\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Get entities of kind ",(0,i.jsx)(n.code,{children:"Group"})," and spec.type ",(0,i.jsx)(n.code,{children:"team"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"entity:\n  title: Entity\n  type: string\n  description: Entity of the component\n  ui:field: EntityPicker\n  ui:options:\n    catalogFilter:\n      - kind: Group\n        spec.type: team\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For the full details on the spec.* values see ",(0,i.jsx)(n.a,{href:"/docs/features/software-catalog/descriptor-format#kind-group",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"defaultkind",children:(0,i.jsx)(n.code,{children:"defaultKind"})}),"\n",(0,i.jsx)(n.p,{children:"The default entity kind."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"system:\n  title: System\n  type: string\n  description: System of the component\n  ui:field: EntityPicker\n  ui:options:\n    catalogFilter:\n      kind: System\n    defaultKind: System\n"})}),"\n",(0,i.jsx)(n.h3,{id:"defaultnamespace",children:(0,i.jsx)(n.code,{children:"defaultNamespace"})}),"\n",(0,i.jsxs)(n.p,{children:["The ID of a namespace that the entity belongs to. The default value is ",(0,i.jsx)(n.code,{children:"default"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Listing all entities in the ",(0,i.jsx)(n.code,{children:"default"})," namespace (default value)"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"entity:\n  title: Entity\n  type: string\n  description: Entity of the component\n  ui:field: EntityPicker\n  ui:options:\n    defaultNamespace: default\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Listing all entities in the ",(0,i.jsx)(n.code,{children:"payment"})," namespace"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"entity:\n  title: Entity\n  type: string\n  description: Entity of the component\n  ui:field: EntityPicker\n  ui:options:\n    defaultNamespace: payment\n"})}),"\n",(0,i.jsx)(n.h2,{id:"multientitypicker",children:"MultiEntityPicker"}),"\n",(0,i.jsxs)(n.p,{children:["The input props that can be specified under ",(0,i.jsx)(n.code,{children:"ui:options"})," for the ",(0,i.jsx)(n.code,{children:"MultiEntityPicker"})," field extension."]}),"\n",(0,i.jsx)(n.h3,{id:"allowarbitraryvalues-1",children:(0,i.jsx)(n.code,{children:"allowArbitraryValues"})}),"\n",(0,i.jsx)(n.p,{children:"Whether to allow arbitrary user input. Defaults to true."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"allowArbitraryValues"})," provides input validation when selecting an entity as the values you enter will correspond to a valid entity."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Adding a valid entity with ",(0,i.jsx)(n.code,{children:"allowArbitraryValues"})," as ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"entity:\n  title: Entities\n  type: array\n  description: Entities of the component\n  ui:field: MultiEntityPicker\n  ui:options:\n    allowArbitraryValues: false\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Adding an arbitrary entity with ",(0,i.jsx)(n.code,{children:"allowArbitraryValues"})," as ",(0,i.jsx)(n.code,{children:"true"})," (default value)"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"entity:\n  title: Entities\n  type: array\n  description: Entities of the component\n  ui:field: MultiEntityPicker\n  ui:options:\n    allowArbitraryValues: true\n"})}),"\n",(0,i.jsx)(n.h3,{id:"catalogfilter-1",children:(0,i.jsx)(n.code,{children:"catalogFilter"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"catalogFilter"})," supports filtering options by any field(s) of an entity."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Get all entities of kind ",(0,i.jsx)(n.code,{children:"Group"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"entity:\n  title: Entities\n  type: array\n  description: Entities of the component\n  ui:field: MultiEntityPicker\n  ui:options:\n    catalogFilter:\n      - kind: Group\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Get entities of kind ",(0,i.jsx)(n.code,{children:"Group"})," and spec.type ",(0,i.jsx)(n.code,{children:"team"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"entity:\n  title: Entities\n  type: array\n  description: Entities of the component\n  ui:field: MultiEntityPicker\n  ui:options:\n    catalogFilter:\n      - kind: Group\n        spec.type: team\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For the full details on the spec.* values see ",(0,i.jsx)(n.a,{href:"/docs/features/software-catalog/descriptor-format#kind-group",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"defaultkind-1",children:(0,i.jsx)(n.code,{children:"defaultKind"})}),"\n",(0,i.jsx)(n.p,{children:"The default entity kind."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"system:\n  title: System\n  type: array\n  description: Systems of the component\n  ui:field: MultiEntityPicker\n  ui:options:\n    catalogFilter:\n      kind: System\n    defaultKind: System\n"})}),"\n",(0,i.jsx)(n.h3,{id:"defaultnamespace-1",children:(0,i.jsx)(n.code,{children:"defaultNamespace"})}),"\n",(0,i.jsxs)(n.p,{children:["The ID of a namespace that the entity belongs to. The default value is ",(0,i.jsx)(n.code,{children:"default"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Listing all entities in the ",(0,i.jsx)(n.code,{children:"default"})," namespace (default value)"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"entity:\n  title: Entity\n  type: array\n  description: Entities of the component\n  ui:field: MultiEntityPicker\n  ui:options:\n    defaultNamespace: default\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Listing all entities in the ",(0,i.jsx)(n.code,{children:"payment"})," namespace"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"entity:\n  title: Entity\n  type: array\n  description: Entities of the component\n  ui:field: MultiEntityPicker\n  ui:options:\n    defaultNamespace: payment\n"})}),"\n",(0,i.jsx)(n.h2,{id:"ownerpicker",children:(0,i.jsx)(n.code,{children:"OwnerPicker"})}),"\n",(0,i.jsxs)(n.p,{children:["The input props that can be specified under ",(0,i.jsx)(n.code,{children:"ui:options"})," for the ",(0,i.jsx)(n.code,{children:"OwnerPicker"})," field extension."]}),"\n",(0,i.jsx)(n.h3,{id:"allowarbitraryvalues-2",children:(0,i.jsx)(n.code,{children:"allowArbitraryValues"})}),"\n",(0,i.jsx)(n.p,{children:"Whether to allow arbitrary user input. Defaults to true."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"allowArbitraryValues"})," provides input validation when selecting an owner as the values you enter will correspond to a valid owner."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Adding a valid owner with ",(0,i.jsx)(n.code,{children:"allowArbitraryValues"})," as ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"owner:\n  title: Owner\n  type: string\n  description: Owner of the component\n  ui:field: OwnerPicker\n  ui:options:\n    allowArbitraryValues: false\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Adding an arbitrary owner with ",(0,i.jsx)(n.code,{children:"allowArbitraryValues"})," as ",(0,i.jsx)(n.code,{children:"true"})," (default value)"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"owner:\n  title: Owner\n  type: string\n  description: Owner of the component\n  ui:field: OwnerPicker\n  ui:options:\n    allowArbitraryValues: true\n"})}),"\n",(0,i.jsx)(n.h3,{id:"allowedkinds-1",children:(0,i.jsx)(n.code,{children:"allowedKinds"})}),"\n",(0,i.jsxs)(n.p,{children:["DEPRECATED: Use ",(0,i.jsx)(n.code,{children:"catalogFilter"})," instead."]}),"\n",(0,i.jsx)(n.h3,{id:"catalogfilter-2",children:(0,i.jsx)(n.code,{children:"catalogFilter"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"catalogFilter"})," supports filtering options by any field(s) of an entity."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Get all entities of kind ",(0,i.jsx)(n.code,{children:"Group"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"owner:\n  title: Owner\n  type: string\n  description: Owner of the component\n  ui:field: OwnerPicker\n  ui:options:\n    catalogFilter:\n      - kind: Group\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Get entities of kind ",(0,i.jsx)(n.code,{children:"Group"})," and spec.type ",(0,i.jsx)(n.code,{children:"team"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"owner:\n  title: Owner\n  type: string\n  description: Owner of the component\n  ui:field: OwnerPicker\n  ui:options:\n    catalogFilter:\n      - kind: Group\n        spec.type: team\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For the full details on the spec.* values see ",(0,i.jsx)(n.a,{href:"/docs/features/software-catalog/descriptor-format#kind-group",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"defaultnamespace-2",children:(0,i.jsx)(n.code,{children:"defaultNamespace"})}),"\n",(0,i.jsxs)(n.p,{children:["The ID of a namespace that the owner belongs to. The default value is ",(0,i.jsx)(n.code,{children:"default"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Listing owners in the ",(0,i.jsx)(n.code,{children:"default"})," namespace (default value)"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"owner:\n  title: Owner\n  type: string\n  description: Owner of the component\n  ui:field: OwnerPicker\n  ui:options:\n    catalogFilter:\n      - kind: Group\n    defaultNamespace: default\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Listing owners in the ",(0,i.jsx)(n.code,{children:"payment"})," namespace"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"owner:\n  title: Owner\n  type: string\n  description: Owner of the component\n  ui:field: OwnerPicker\n  ui:options:\n    catalogFilter:\n      - kind: Group\n    defaultNamespace: payment\n"})}),"\n",(0,i.jsx)(n.h2,{id:"repourlpicker",children:"RepoUrlPicker"}),"\n",(0,i.jsxs)(n.p,{children:["The input props that can be specified under ",(0,i.jsx)(n.code,{children:"ui:options"})," for the ",(0,i.jsx)(n.code,{children:"RepoUrlPicker"})," field extension."]}),"\n",(0,i.jsx)(n.h3,{id:"allowedhosts",children:(0,i.jsx)(n.code,{children:"allowedHosts"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"allowedHosts"})," part should be set to where you wish to enable this template\nto publish to. And it can be any host that is listed in your integrations'\nconfig in ",(0,i.jsx)(n.code,{children:"app-config.yaml"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Publish only to repositories from ",(0,i.jsx)(n.code,{children:"github.com"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"repoUrl:\n  title: Repository Location\n  type: string\n  ui:field: RepoUrlPicker\n  ui:options:\n    allowedHosts:\n      - github.com\n"})}),"\n",(0,i.jsx)(n.h3,{id:"allowedorganizations",children:(0,i.jsx)(n.code,{children:"allowedOrganizations"})}),"\n",(0,i.jsx)(n.p,{children:"List of allowed organizations in the given SCM platform. You can restrict the template to publish to a set of organizations."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Publish only to repositories from organization ",(0,i.jsx)(n.code,{children:"my_organization"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"repoUrl:\n  title: Repository Location\n  type: string\n  ui:field: RepoUrlPicker\n  ui:options:\n    allowedOrganizations:\n      - my_organization\n"})}),"\n",(0,i.jsx)(n.h3,{id:"allowedprojects",children:(0,i.jsx)(n.code,{children:"allowedProjects"})}),"\n",(0,i.jsx)(n.p,{children:"List of allowed projects in the given SCM platform. You can restrict the template to publish to a set of projects."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Publish only to repositories from project ",(0,i.jsx)(n.code,{children:"project_1"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"repoUrl:\n  title: Repository Location\n  type: string\n  ui:field: RepoUrlPicker\n  ui:options:\n    allowedProjects:\n      - project_1\n"})}),"\n",(0,i.jsx)(n.h3,{id:"allowedrepos",children:(0,i.jsx)(n.code,{children:"allowedRepos"})}),"\n",(0,i.jsx)(n.p,{children:"List of allowed repos in the given SCM platform. You can restrict the template to publish to a set of repository names."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Publish to only ",(0,i.jsx)(n.code,{children:"repo_1"})," and ",(0,i.jsx)(n.code,{children:"repo_2"})," repositories"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"repoUrl:\n  title: Repository Location\n  type: string\n  ui:field: RepoUrlPicker\n  ui:options:\n    allowedRepos:\n      - repo_1\n      - repo_2\n"})}),"\n",(0,i.jsx)(n.h3,{id:"allowedowners",children:(0,i.jsx)(n.code,{children:"allowedOwners"})}),"\n",(0,i.jsxs)(n.p,{children:["List of allowed owners in the given SCM platform. You can restrict the template to publish to repositories owned by specific users/groups by setting the ",(0,i.jsx)(n.code,{children:"allowedOwners"})," option."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Publish to only repositories from owner ",(0,i.jsx)(n.code,{children:"owner_1"})," and ",(0,i.jsx)(n.code,{children:"owner_2"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"repoUrl:\n  title: Repository Location\n  type: string\n  ui:field: RepoUrlPicker\n  ui:options:\n    allowedOwners:\n      - owner_1\n      - owner_2\n"})}),"\n",(0,i.jsx)(n.h3,{id:"requestusercredentials",children:(0,i.jsx)(n.code,{children:"requestUserCredentials"})}),"\n",(0,i.jsx)(n.p,{children:"If defined will request user credentials to auth against the given SCM platform."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"repoUrl:\n  title: Repository Location\n  type: string\n  ui:field: RepoUrlPicker\n  ui:options:\n    requestUserCredentials:\n      secretsKey: USER_OAUTH_TOKEN\n      additionalScopes:\n        github:\n          - workflow:write\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"secretsKey"})," is the key used within the template secrets context to store the credential and ",(0,i.jsx)(n.code,{children:"additionalScopes"})," is any additional permission scopes to request."]}),"\n",(0,i.jsxs)(n.p,{children:["The supported ",(0,i.jsx)(n.code,{children:"additionalScopes"})," values are ",(0,i.jsx)(n.code,{children:"gerrit"}),", ",(0,i.jsx)(n.code,{children:"github"}),", ",(0,i.jsx)(n.code,{children:"gitlab"}),", ",(0,i.jsx)(n.code,{children:"bitbucket"}),", and ",(0,i.jsx)(n.code,{children:"azure"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},371426:(e,n,t)=>{var i=t(827378),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var i,l={},c=null,d=null;for(i in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,i)&&!a.hasOwnProperty(i)&&(l[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===l[i]&&(l[i]=n[i]);return{$$typeof:r,type:e,key:c,ref:d,props:l,_owner:s.current}}n.Fragment=l,n.jsx=c,n.jsxs=c},541535:(e,n)=>{var t=Symbol.for("react.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,x={};function j(e,n,t){this.props=e,this.context=n,this.refs=x,this.updater=t||f}function m(){}function g(e,n,t){this.props=e,this.context=n,this.refs=x,this.updater=t||f}j.prototype.isReactComponent={},j.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=j.prototype;var w=g.prototype=new m;w.constructor=g,y(w,j.prototype),w.isPureReactComponent=!0;var v=Array.isArray,b=Object.prototype.hasOwnProperty,k={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function _(e,n,i){var r,l={},o=null,s=null;if(null!=n)for(r in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(o=""+n.key),n)b.call(n,r)&&!E.hasOwnProperty(r)&&(l[r]=n[r]);var a=arguments.length-2;if(1===a)l.children=i;else if(1<a){for(var c=Array(a),d=0;d<a;d++)c[d]=arguments[d+2];l.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===l[r]&&(l[r]=a[r]);return{$$typeof:t,type:e,key:o,ref:s,props:l,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var S=/\/+/g;function O(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function R(e,n,r,l,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var a=!1;if(null===e)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case t:case i:a=!0}}if(a)return o=o(a=e),e=""===l?"."+O(a,0):l,v(o)?(r="",null!=e&&(r=e.replace(S,"$&/")+"/"),R(o,n,r,"",(function(e){return e}))):null!=o&&(P(o)&&(o=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(S,"$&/")+"/")+e)),n.push(o)),1;if(a=0,l=""===l?".":l+":",v(e))for(var c=0;c<e.length;c++){var d=l+O(s=e[c],c);a+=R(s,n,r,d,o)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),c=0;!(s=e.next()).done;)a+=R(s=s.value,n,r,d=l+O(s,c++),o);else if("object"===s)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function N(e,n,t){if(null==e)return e;var i=[],r=0;return R(e,i,"","",(function(e){return n.call(t,e,r++)})),i}function A(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var C={current:null},F={transition:null},T={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:F,ReactCurrentOwner:k};n.Children={map:N,forEach:function(e,n,t){N(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return N(e,(function(){n++})),n},toArray:function(e){return N(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=j,n.Fragment=r,n.Profiler=o,n.PureComponent=g,n.StrictMode=l,n.Suspense=d,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,n.cloneElement=function(e,n,i){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=y({},e.props),l=e.key,o=e.ref,s=e._owner;if(null!=n){if(void 0!==n.ref&&(o=n.ref,s=k.current),void 0!==n.key&&(l=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in n)b.call(n,c)&&!E.hasOwnProperty(c)&&(r[c]=void 0===n[c]&&void 0!==a?a[c]:n[c])}var c=arguments.length-2;if(1===c)r.children=i;else if(1<c){a=Array(c);for(var d=0;d<c;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:t,type:e.type,key:l,ref:o,props:r,_owner:s}},n.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},n.createElement=_,n.createFactory=function(e){var n=_.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:c,render:e}},n.isValidElement=P,n.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:A}},n.memo=function(e,n){return{$$typeof:u,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=F.transition;F.transition={};try{e()}finally{F.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return C.current.useCallback(e,n)},n.useContext=function(e){return C.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return C.current.useDeferredValue(e)},n.useEffect=function(e,n){return C.current.useEffect(e,n)},n.useId=function(){return C.current.useId()},n.useImperativeHandle=function(e,n,t){return C.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return C.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return C.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return C.current.useMemo(e,n)},n.useReducer=function(e,n,t){return C.current.useReducer(e,n,t)},n.useRef=function(e){return C.current.useRef(e)},n.useState=function(e){return C.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return C.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return C.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var i=t(667294);const r={},l=i.createContext(r);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);