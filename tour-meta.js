// Written by tools/static-demo/build-site.mjs: the roles, the day the data was captured, the base.
window.__TOUR__ = {
 "base": "/demo/",
 "asOf": "2026-11-11",
 "capturedLabel": "11 November 2026",
 "capturedShort": "11 Nov 2026",
 "agency": "9 people, 4 clients and 3 months of history",
 "logo": "/demo/_files/identity/wordmark.png",
 "agencyName": "Sunline Creative",
 "facts": {
  "people": 9,
  "clients": 4,
  "months": 3
 },
 "groups": [
  {
   "label": "Leadership",
   "slugs": [
    "admin",
    "office-admin"
   ]
  },
  {
   "label": "Finance & people",
   "slugs": [
    "accountant",
    "hr"
   ]
  },
  {
   "label": "Delivery",
   "slugs": [
    "team-leader",
    "member"
   ]
  }
 ],
 "preload": {
  "js": [
   "assets/app-BIgwCrqg.js",
   "assets/dist-BR7hDOvj.js",
   "assets/main-BSvbeCRL.js"
  ],
  "css": [
   "assets/app-DHRVERbB.css",
   "assets/main-CZu8L9or.css"
  ]
 },
 "roles": [
  {
   "slug": "admin",
   "role": "admin",
   "label": "Administrator",
   "personName": "Nadia Haddad",
   "personTitle": "Managing Director",
   "home": "/board/marketing",
   "card": {
    "family": "ink",
    "start": true,
    "access": "Sees everything",
    "see": [
     "Boards, projects, clients and pipeline",
     "Finance, payroll and the month-end close",
     "All of Insights and the Control panel"
    ],
    "screens": [
     [
      "Pulse",
      "/insights/pulse"
     ],
     [
      "P&L",
      "/financials/profit-loss"
     ],
     [
      "Boards",
      "/board/marketing"
     ],
     [
      "Control panel",
      "/control-panel"
     ]
    ]
   },
   "preload": [
    "assets/Login-CrkIbdL7.js",
    "assets/dist-BR7hDOvj.js",
    "assets/main-BSvbeCRL.js",
    "assets/Form-D6sO7jts.js",
    "assets/app-BIgwCrqg.js",
    "assets/AuthLayout-ZL29YuYD.js",
    "assets/Mark-BFH4CkA5.js"
   ]
  },
  {
   "slug": "office-admin",
   "role": "office_admin",
   "label": "Office administrator",
   "personName": "Omar Fathy",
   "personTitle": "Operations Manager",
   "home": "/board/marketing",
   "card": {
    "family": "owed",
    "access": "Everything but the Control panel",
    "see": [
     "Boards, clients and the pipeline",
     "Finance, payroll, people and leave",
     "All of Insights"
    ],
    "screens": [
     [
      "Boards",
      "/board/marketing"
     ],
     [
      "Payroll",
      "/financials/payroll"
     ],
     [
      "Leave",
      "/leave"
     ],
     [
      "Pulse",
      "/insights/pulse"
     ]
    ]
   },
   "preload": [
    "assets/Login-CrkIbdL7.js",
    "assets/dist-BR7hDOvj.js",
    "assets/main-BSvbeCRL.js",
    "assets/Form-D6sO7jts.js",
    "assets/app-BIgwCrqg.js",
    "assets/AuthLayout-ZL29YuYD.js",
    "assets/Mark-BFH4CkA5.js"
   ]
  },
  {
   "slug": "accountant",
   "role": "accountant",
   "label": "Accountant",
   "personName": "Laila Mansour",
   "personTitle": "Finance Manager",
   "home": "/my-space",
   "card": {
    "family": "money",
    "access": "Money only",
    "see": [
     "Invoices, collections and bills",
     "Month-end close and the P&L",
     "Profit and client insights"
    ],
    "screens": [
     [
      "Invoices",
      "/financials/invoices"
     ],
     [
      "P&L",
      "/financials/profit-loss"
     ],
     [
      "Cash flow",
      "/financials/cash-flow"
     ],
     [
      "Payroll",
      "/financials/payroll"
     ]
    ]
   },
   "preload": [
    "assets/Login-CrkIbdL7.js",
    "assets/dist-BR7hDOvj.js",
    "assets/main-BSvbeCRL.js",
    "assets/Form-D6sO7jts.js",
    "assets/app-BIgwCrqg.js",
    "assets/AuthLayout-ZL29YuYD.js",
    "assets/Mark-BFH4CkA5.js"
   ]
  },
  {
   "slug": "hr",
   "role": "hr",
   "label": "HR",
   "personName": "Rana Saleh",
   "personTitle": "HR Manager",
   "home": "/my-space",
   "card": {
    "family": "people",
    "access": "People only",
    "see": [
     "The directory and employee records",
     "Leave and team capacity",
     "People and capacity insights"
    ],
    "screens": [
     [
      "People",
      "/hr"
     ],
     [
      "Leave",
      "/leave"
     ],
     [
      "Capacity",
      "/insights/capacity"
     ]
    ]
   },
   "preload": [
    "assets/Login-CrkIbdL7.js",
    "assets/dist-BR7hDOvj.js",
    "assets/main-BSvbeCRL.js",
    "assets/Form-D6sO7jts.js",
    "assets/app-BIgwCrqg.js",
    "assets/AuthLayout-ZL29YuYD.js",
    "assets/Mark-BFH4CkA5.js"
   ]
  },
  {
   "slug": "team-leader",
   "role": "team_leader",
   "label": "Team leader",
   "personName": "Karim Adel",
   "personTitle": "Head of Client Services",
   "home": "/board/marketing",
   "card": {
    "family": "pipe",
    "access": "Own department",
    "see": [
     "Boards, projects and tasks",
     "Clients and the pipeline",
     "Capacity and delivery insights"
    ],
    "screens": [
     [
      "Boards",
      "/board/marketing"
     ],
     [
      "Pipeline",
      "/crm/pipeline"
     ],
     [
      "Delivery",
      "/insights/delivery"
     ],
     [
      "Capacity",
      "/insights/capacity"
     ]
    ]
   },
   "preload": [
    "assets/Login-CrkIbdL7.js",
    "assets/dist-BR7hDOvj.js",
    "assets/main-BSvbeCRL.js",
    "assets/Form-D6sO7jts.js",
    "assets/app-BIgwCrqg.js",
    "assets/AuthLayout-ZL29YuYD.js",
    "assets/Mark-BFH4CkA5.js"
   ]
  },
  {
   "slug": "member",
   "role": "member",
   "label": "Member",
   "personName": "Sara Nabil",
   "personTitle": "Account Manager",
   "home": "/board/marketing",
   "card": {
    "family": "time",
    "access": "Own work",
    "see": [
     "The boards and your tasks",
     "My Space, time and leave",
     "Your own capacity"
    ],
    "screens": [
     [
      "Boards",
      "/board/marketing"
     ],
     [
      "My Space",
      "/my-space"
     ],
     [
      "Leave",
      "/leave"
     ]
    ]
   },
   "preload": [
    "assets/Login-CrkIbdL7.js",
    "assets/dist-BR7hDOvj.js",
    "assets/main-BSvbeCRL.js",
    "assets/Form-D6sO7jts.js",
    "assets/app-BIgwCrqg.js",
    "assets/AuthLayout-ZL29YuYD.js",
    "assets/Mark-BFH4CkA5.js"
   ]
  }
 ]
};
