// import Vue from 'vue';
/* tslint:disable */
import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store/store';

Vue.use(Router);
import _ from 'lodash';

var AugurAPIModule = require('@/AugurAPI').default;
var AugurAPI = new AugurAPIModule();
// import MetricsStatusCard from './components/MetricsStatusCard.vue';
// import BaseRepoActivityCard from './components/BaseRepoActivityCard.vue';
// import BaseRepoEcosystemCard  from './components/BaseRepoEcosystemCard.vue';
// import GrowthMaturityDeclineCard from './components/GrowthMaturityDeclineCard.vue';
// import RiskCard from './components/RiskCard.vue';
// import ValueCard from './components/ValueCard.vue';
// import DiversityInclusionCard from './components/DiversityInclusionCard.vue';
// import GitCard from './components/GitCard.vue';
// import OverviewCard from './components/OverviewCard.vue';
// import ExperimentalCard from './components/ExperimentalCard.vue';
// import DownloadedReposCard from './components/DownloadedReposCard.vue';
// import LoginForm from './components/LoginForm.vue';
// import AugurCards from './components/AugurCards.vue';
// import MainControls from './components/MainControls.vue';
// import AugurHeader from './components/AugurHeader.vue';
// import Tabs from './components/Tabs.vue';
// import TableView from './components/TableView.vue';

import Errors from './views/Errors.vue';
import Tables from './views/Tables.vue';
import Dashboard from './views/Dashboard.vue';
import Default from './layouts/Default.vue';
import MainSidebar from './components/layout/MainSidebar/MainSidebar.vue';
import MainNavbar from './components/layout/MainNavbar/MainNavbar.vue';
import RepoOverview from './views/RepoOverview.vue';
import GroupOverview from './views/GroupOverview.vue';
import RepoGroups from './views/RepoGroups.vue';
import Repos from './views/Repos.vue';
import SingleComparison from './views/SingleComparison.vue';
import InspectInsight from './views/InspectInsight.vue';
import RiskMetrics from "@/views/RiskMetrics.vue";
import NProgress from "nprogress";

const routes = [
  {
    path: '/',
    component: Default,
    children: [
      {
        path: '',
        name: 'home',
        components: {
          sidebar: MainSidebar,
          navbar: MainNavbar,
          content: Dashboard,
        },
      },
    ],
  },
  {
    path: '/repo_groups',
    component: Default,
    children: [
      {
        path: '',
        name: 'repo_groups',
        components: {
          sidebar: MainSidebar,
          navbar: MainNavbar,
          content: RepoGroups,
        },
      },
    ],
  },
  {
    path: '/workers',
    component: Default,
    children: [
      {
        path: '',
        name: 'workers',
        components: {
          sidebar: MainSidebar,
          navbar: MainNavbar,
          content: Tables,
        },
      },
    ],
  },
  {
    path: '/repos',
    component: Default,
    children: [
      {
        path: '',
        name: 'repos',
        components: {
          sidebar: MainSidebar,
          navbar: MainNavbar,
          content: Repos,
        },
      },
    ],
  },
  {
    path: '/insights',
    component: Default,
    children: [
      {
        path: '',
        name: 'insights',
        components: {
          sidebar: MainSidebar,
          navbar: MainNavbar,
          content: Tables,
        },
      },
    ],
  },
  {
    path: '/inspect_insight/:rg_name/:repo_git/:ri_metric',
    component: Default,
    children: [
      {
        path: '',
        name: 'inspect_insight',
        components: {
          sidebar: MainSidebar,
          navbar: MainNavbar,
          content: InspectInsight,
        },
      }
    ],
  },
  {
    path: '/repo/:group/:repo',
    component: Default,
    children: [
      {
        path: 'overview',
        name: 'repo_overview',
        components: {
          sidebar: MainSidebar,
          navbar: MainNavbar,
          content: RepoOverview,
        },
      },
      {
        path: 'risk',
        name: 'repo_risk',
        components: {
          sidebar: MainSidebar,
          navbar: MainNavbar,
          content: RiskMetrics,
        },
      },
    ],
  },
  {
    path: '/repo/:group/:repo/comparedTo/:compares',
    component: Default,
    children: [
      {
        path: '',
        name: 'repo_overview_compare',
        components: {
          sidebar: MainSidebar,
          navbar: MainNavbar,
          content: SingleComparison,
        },
      },
      {
        path: 'risk',
        name: 'repo_risk_compare',
        components: {
          sidebar: MainSidebar,
          navbar: MainNavbar,
          content: RiskMetrics,
        }
      }
    ],
  },
  {
    path: '/group/:group',
    component: Default,
    children: [
      {
        path: 'overview',
        name: 'group_overview',
        components: {
          sidebar: MainSidebar,
          navbar: MainNavbar,
          content: GroupOverview,
        },
      },
    ],
  },
  {
    path: '/group/:group/comparedTo/:compares',
    component: Default,
    children: [
      {
        path: 'overview',
        name: 'group_overview_compare',
        components: {
          sidebar: MainSidebar,
          navbar: MainNavbar,
          content: SingleComparison,
        },
      },
    ],
  },
  {
    path: '/errors',
    name: 'errors',
    component: Errors,
  },
  {
    path: '*',
    redirect: '/errors',
  },
  //   {path: '/', component: Default,
  //   // children: [
  //   //   {
  //   //     path: "",
  //   //     name: "reposcard",
  //   //     components: {
  //   //       header: AugurHeader,
  //   //       content: DownloadedReposCard
  //   //     }
  //   //   },
  //   // ]
  // },
  // {path: '/login', component: LoginForm},
  // {path: '/metrics_status',
  //   component: MetricsStatusCard
  // },
  // {path: '/single/:owner?/:repo', name: 'single', props: true, canReuse: false, component: AugurCards,
  //   children: [
  //     {
  //       path: "gmd",
  //       name: "gmd",
  //       components: {
  //         header: AugurHeader,
  //         tabs: Tabs,
  //         controls: MainControls,
  //         content: GrowthMaturityDeclineCard
  //       }
  //     },
  //     {
  //       path: "diversityinclusion",
  //       name: "diversityinclusion",
  //       components: {
  //         header: AugurHeader,
  //         tabs: Tabs,
  //         controls: MainControls,
  //         content: DiversityInclusionCard
  //       }
  //     },
  //     {
  //       path: "risk",
  //       name: "risk",
  //       components: {
  //         header: AugurHeader,
  //         tabs: Tabs,
  //         controls: MainControls,
  //         content: RiskCard
  //       }
  //     },
  //     {
  //       path: "activity",
  //       name: "activity",
  //       components: {
  //         header: AugurHeader,
  //         tabs: Tabs,
  //         controls: MainControls,
  //         content: BaseRepoActivityCard
  //       }
  //     },
  //     {
  //       path: "value",
  //       name: "value",
  //       components: {
  //         header: AugurHeader,
  //         tabs: Tabs,
  //         controls: MainControls,
  //         content: ValueCard
  //       }
  //     },
  //     {
  //       path: "experimental",
  //       name: "experimental",
  //       components: {
  //         header: AugurHeader,
  //         tabs: Tabs,
  //         controls: MainControls,
  //         content: ExperimentalCard
  //       }
  //     },
  //     {
  //       path: "git",
  //       name: "git",
  //       components: {
  //         header: AugurHeader,
  //         tabs: Tabs,
  //         controls: MainControls,
  //         content: GitCard
  //       }
  //     },
  //     {
  //       path: "overview",
  //       name: "overview",
  //       components: {
  //         header: AugurHeader,
  //         tabs: Tabs,
  //         controls: MainControls,
  //         content: OverviewCard
  //       }
  //     },
  //   ]
  // },
  // // {path: '/:tab/:domain/:owner/:repo/comparedto/:comparedowner/:comparedrepo', component: AugurCards, name: 'gitsinglecompare'},
  // {path: '/compare/:owner?/:repo/comparedto/:comparedowner/:comparedrepo', component: AugurCards, name: 'singlecompare', props: true, canReuse: false,
  //   children: [
  //     {
  //       path: "gmd",
  //       name: "gmdcompare",
  //       components: {
  //         header: AugurHeader,
  //         tabs: Tabs,
  //         controls: MainControls,
  //         content: GrowthMaturityDeclineCard
  //       }
  //     },
  //     {
  //       path: "diversityinclusion",
  //       name: "diversityinclusioncompare",
  //       components: {
  //         header: AugurHeader,
  //         tabs: Tabs,
  //         controls: MainControls,
  //         content: DiversityInclusionCard
  //       }
  //     },
  //     {
  //       path: "risk",
  //       name: "riskcompare",
  //       components: {
  //         header: AugurHeader,
  //         tabs: Tabs,
  //         controls: MainControls,
  //         content: RiskCard
  //       }
  //     },
  //     {
  //       path: "value",
  //       name: "valuecompare",
  //       components: {
  //         header: AugurHeader,
  //         tabs: Tabs,
  //         controls: MainControls,
  //         content: ValueCard
  //       }
  //     },
  //     {
  //       path: "activity",
  //       name: "activitycompare",
  //       components: {
  //         header: AugurHeader,
  //         tabs: Tabs,
  //         controls: MainControls,
  //         content: BaseRepoActivityCard
  //       }
  //     },
  //     {
  //       path: "experimental",
  //       name: "experimentalcompare",
  //       components: {
  //         header: AugurHeader,
  //         tabs: Tabs,
  //         controls: MainControls,
  //         content: ExperimentalCard
  //       }
  //     },
  //     {
  //       path: "git",
  //       name: "gitcompare",
  //       components: {
  //         header: AugurHeader,
  //         tabs: Tabs,
  //         controls: MainControls,
  //         content: GitCard
  //       }
  //     },
  //   ]
  // },
  // {path: '/groupcompare/:groupid', component: AugurCards, name: 'group', props: true, canReuse: false,
  //   children: [
  //     {
  //       path: "gmd",
  //       name: "gmdgroup",
  //       components: {
  //         header: AugurHeader,
  //         tabs: Tabs,
  //         controls: MainControls,
  //         content: GrowthMaturityDeclineCard
  //       }
  //     },
  //     {
  //       path: "diversityinclusion",
  //       name: "diversityinclusiongroup",
  //       components: {
  //         header: AugurHeader,
  //         tabs: Tabs,
  //         controls: MainControls,
  //         content: DiversityInclusionCard
  //       }
  //     },
  //     {
  //       path: "risk",
  //       name: "riskgroup",
  //       components: {
  //         header: AugurHeader,
  //         tabs: Tabs,
  //         controls: MainControls,
  //         content: RiskCard
  //       }
  //     },
  //     {
  //       path: "value",
  //       name: "valuegroup",
  //       components: {
  //         header: AugurHeader,
  //         tabs: Tabs,
  //         controls: MainControls,
  //         content: ValueCard
  //       }
  //     },
  //     {
  //       path: "activity",
  //       name: "activitygroup",
  //       components: {
  //         header: AugurHeader,
  //         tabs: Tabs,
  //         controls: MainControls,
  //         content: BaseRepoActivityCard
  //       }
  //     },
  //     {
  //       path: "experimental",
  //       name: "experimentalgroup",
  //       components: {
  //         header: AugurHeader,
  //         tabs: Tabs,
  //         controls: MainControls,
  //         content: ExperimentalCard
  //       }
  //     },
  //     {
  //       path: "git",
  //       name: "gitgroup",
  //       components: {
  //         header: AugurHeader,
  //         tabs: Tabs,
  //         controls: MainControls,
  //         content: GitCard
  //       }
  //     },
  //     {
  //       path: "overview",
  //       name: "overviewgroup",
  //       components: {
  //         header: AugurHeader,
  //         tabs: Tabs,
  //         controls: MainControls,
  //         content: OverviewCard
  //       }
  //     },
  // ]
  // },
];
// let downloadedRepos = [], repos = {}, projects = [];
// console.log(window)
// console.log(AugurAPI)
// AugurAPI.getDownloadedGitRepos().then((data: any) => {

//   repos = _.groupBy(data, 'project_name');
//   projects = Object.keys(repos);

// });
// const routes = routerOptions.map(route => {
//   // let route1 = Object.assign({}, route);
//   return {
//     route,
//     component: () => require(`@/components/${route.component}.vue`)
//   }
// })


export default new Router({
  // routes,
  routes,
  mode: 'history',
});
