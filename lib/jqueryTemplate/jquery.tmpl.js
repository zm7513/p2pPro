





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-Z0JAar9+DkI1NjGVdZr3GivARUgJtA0o2eHlTv7Ou2gshR5awWVf8QGsq11Ns9ZxQLEs+G5/SuARmvpOLMzulw==" rel="stylesheet" href="https://assets-cdn.github.com/assets/frameworks-95aff0b550d3fe338b645a4deebdcb1b.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-lNzEgP1glNwLm7DSpg0503kMaKt4MtkJsukGwEbLU2DI5ENasHbS6CidDlrOUprY+k+P8TqO4qUvZ/R9dlw0uQ==" rel="stylesheet" href="https://assets-cdn.github.com/assets/github-485df5876e70d5017db11c0098fce0f7.css" />
  
  
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>jquery-tmpl/jquery.tmpl.js at master · BorisMoore/jquery-tmpl</title>
    <meta name="description" content="The original official jQuery Templates plugin. This project was maintained by the jQuery team as an official jQuery plugin. It is no longer in active development, and will be superseded by JsRender. - BorisMoore/jquery-tmpl">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta property="og:image" content="https://avatars2.githubusercontent.com/u/202658?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="BorisMoore/jquery-tmpl" /><meta property="og:url" content="https://github.com/BorisMoore/jquery-tmpl" /><meta property="og:description" content="The original official jQuery Templates plugin. This project was maintained by the jQuery team as an official jQuery plugin. It is no longer in active development, and will be superseded by JsRender..." />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MzE2NDQxNDcxOjk0YTY5NzU1M2NkNjUzNTJlYTY1Y2EwNjNmZjJjYzhmMWY5MjBlZjMxYmE4MTQ3YTc2MDlkOGNiNTkwZWY5NjY=--69cf25ab4a4c2b76e855da7c6bd995cd05ee988f">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="F830:0629:17D5B6:2AEBF8:5B987E7D" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

      <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

  <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="F830:0629:17D5B6:2AEBF8:5B987E7D" /><meta name="octolytics-dimension-region_edge" content="iad" /><meta name="octolytics-dimension-region_render" content="iad" /><meta name="octolytics-actor-id" content="36730527" /><meta name="octolytics-actor-login" content="flashren" /><meta name="octolytics-actor-hash" content="5d9c15708e056da2b095bfeae0d6409901fe22a25ed21fc6997279d5c07af28f" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">

  <meta class="js-ga-set" name="userId" content="4370e63a589643bd1543b00c51a69d2e" %>

<meta class="js-ga-set" name="dimension1" content="Logged In">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="flashren">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="NzQ4MWJlMjcxZDQyMmIzMDM4Y2QzODQyYzRiZTQyOTVkNjUwMDhiYjZlMjEyNWY5MTk1YTRmMmU1OTE2YzEyNHx7InJlbW90ZV9hZGRyZXNzIjoiMTEwLjE4NC4yMjUuNjciLCJyZXF1ZXN0X2lkIjoiRjgzMDowNjI5OjE3RDVCNjoyQUVCRjg6NUI5ODdFN0QiLCJ0aW1lc3RhbXAiOjE1MzY3MjA1MjYsImhvc3QiOiJnaXRodWIuY29tIn0=">

    <meta name="enabled-features" content="DASHBOARD_V2_LAYOUT_OPT_IN,EXPLORE_DISCOVER_REPOSITORIES,UNIVERSE_BANNER,FREE_TRIALS,MARKETPLACE_INSIGHTS,MARKETPLACE_DOCKERFILE_CI_CTA,MARKETPLACE_PLAN_RESTRICTION_EDITOR,MARKETPLACE_SEARCH,MARKETPLACE_INSIGHTS_CONVERSION_PERCENTAGES,MARKETPLACE_RETARGETING,QUOTE_MARKDOWN">

  <meta name="html-safe-nonce" content="b40a8cf8f9305c96f2ad7685a945613aafed9a55">

  <meta http-equiv="x-pjax-version" content="256ac2231ed34774f644b9d7f7522d8a">
  

      <link href="https://github.com/BorisMoore/jquery-tmpl/commits/master.atom" rel="alternate" title="Recent Commits to jquery-tmpl:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/BorisMoore/jquery-tmpl git https://github.com/BorisMoore/jquery-tmpl.git">

  <meta name="octolytics-dimension-user_id" content="202658" /><meta name="octolytics-dimension-user_login" content="BorisMoore" /><meta name="octolytics-dimension-repository_id" content="547820" /><meta name="octolytics-dimension-repository_nwo" content="BorisMoore/jquery-tmpl" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="547820" /><meta name="octolytics-dimension-repository_network_root_nwo" content="BorisMoore/jquery-tmpl" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/BorisMoore/jquery-tmpl/blob/master/jquery.tmpl.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        
<header class="Header  f5" role="banner">
  <div class="d-flex flex-justify-between px-3 container-lg">
    <div class="d-flex flex-justify-between ">
      <div class="">
        <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>

      </div>

    </div>

    <div class="HeaderMenu d-flex flex-justify-between flex-auto">
      <div class="d-flex">
            <div class="">
              <div class="header-search scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="search combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="true"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" data-scope-type="Repository" data-scope-id="547820" data-scoped-search-url="/BorisMoore/jquery-tmpl/search" data-unscoped-search-url="/search" action="/BorisMoore/jquery-tmpl/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control header-search-wrapper header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search or jump to…"
          data-unscoped-placeholder="Search or jump to…"
          data-scoped-placeholder="Search or jump to…"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=uJ/LX8d49M5L3GHr35+65OSoU/zdu0xZ7CN5u7au8rzDTWE/xonW8MGrjeyEt2X3McJbosLCm5wKFPiTusX31w=="
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://assets-cdn.github.com/images/search-shortcut-hint.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              <ul class="d-none js-jump-to-suggestions-template-container">
                <li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item">
                  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center p-2 jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open" href="">
                    <div class="jump-to-octicon js-jump-to-octicon mr-2 text-center d-none">
                      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
                      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
                      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
                    </div>

                    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

                    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
                    </div>

                    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
                      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
                        In this repository
                      </span>
                      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
                        All GitHub
                      </span>
                      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
                    </div>

                    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
                      Jump to
                      <span class="d-inline-block ml-1 v-align-middle">↵</span>
                    </div>
                  </a>
                </li>
              </ul>
              <ul class="d-none js-jump-to-no-results-template-container">
                <li class="d-flex flex-justify-center flex-items-center p-3 f5 d-none">
                  <span class="text-gray">No suggested jump to results</span>
                </li>
              </ul>

              <ul id="jump-to-results" class="js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container" >
                <li class="d-flex flex-justify-center flex-items-center p-0 f5">
                  <img src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
                </li>
              </ul>
            </div>
      </label>
</form>  </div>
</div>

            </div>

          <ul class="d-flex pl-2 flex-items-center text-bold list-style-none" role="navigation">
            <li>
              <a class="js-selected-navigation-item HeaderNavlink px-2" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
                Pull requests
</a>            </li>
            <li>
              <a class="js-selected-navigation-item HeaderNavlink px-2" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
                Issues
</a>            </li>
              <li>
                <a class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
                   Marketplace
</a>              </li>
            <li>
              <a class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
                Explore
</a>            </li>
          </ul>
      </div>

      <div class="d-flex">
        
<ul class="user-nav d-flex flex-items-center list-style-none" id="user-links">
  <li class="dropdown">
    <span class="d-inline-block  px-2">
      
    <a aria-label="You have unread notifications" class="notification-indicator tooltipped tooltipped-s  js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:unread" data-channel="notification-changed:36730527" href="/notifications">
        <span class="mail-status unread"></span>
        <svg class="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.99 11.991v1H0v-1l.73-.58c.769-.769.809-2.547 1.189-4.416.77-3.767 4.077-4.996 4.077-4.996 0-.55.45-1 .999-1 .55 0 1 .45 1 1 0 0 3.387 1.229 4.156 4.996.38 1.879.42 3.657 1.19 4.417l.659.58h-.01zM6.995 15.99c1.11 0 1.999-.89 1.999-1.999H4.996c0 1.11.89 1.999 1.999 1.999z"/></svg>
</a>
    </span>
  </li>

  <li class="dropdown">
    <details class="details-overlay details-reset d-flex px-2 flex-items-center">
      <summary class="HeaderNavlink"
         aria-label="Create new…"
         data-ga-click="Header, create new, icon:add">
        <svg class="octicon octicon-plus float-left mr-1 mt-1" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"/></svg>
        <span class="dropdown-caret mt-1"></span>
      </summary>
      <details-menu class="dropdown-menu dropdown-menu-sw">
        
<a role="menuitem" class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a role="menuitem" class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a role="menuitem" class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>


  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="BorisMoore/jquery-tmpl">This repository</span>
  </div>
    <a role="menuitem" class="dropdown-item" href="/BorisMoore/jquery-tmpl/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </details-menu>
    </details>
  </li>

  <li class="dropdown">

    <details class="details-overlay details-reset d-flex pl-2 flex-items-center">
      <summary class="HeaderNavlink name mt-1"
        aria-label="View profile and more"
        data-ga-click="Header, show menu, icon:avatar">
        <img alt="@flashren" class="avatar float-left mr-1" src="https://avatars0.githubusercontent.com/u/36730527?s=40&amp;v=4" height="20" width="20">
        <span class="dropdown-caret"></span>
      </summary>
      <details-menu class="dropdown-menu dropdown-menu-sw">
        <ul>
          <li class="header-nav-current-user css-truncate"><a role="menuitem" class="no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block" href="/flashren" data-ga-click="Header, go to profile, text:Signed in as">Signed in as <strong class="css-truncate-target">flashren</strong></a></li>
          <li class="dropdown-divider"></li>
          <li><a role="menuitem" class="dropdown-item" href="/flashren" data-ga-click="Header, go to profile, text:your profile">Your profile</a></li>
          <li><a role="menuitem" class="dropdown-item" href="/flashren?tab=repositories" data-ga-click="Header, go to repositories, text:your repositories">Your repositories</a></li>
          <li><a role="menuitem" class="dropdown-item" href="/flashren?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">Your stars</a></li>
            <li><a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, your gists, text:your gists">Your gists</a></li>
          <li class="dropdown-divider"></li>
          <li><a role="menuitem" class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a></li>
          <li><a role="menuitem" class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">Settings</a></li>
          <li>
            <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="td2ap+0g4ROfyXcyPz5D1Uk7H53tbty+OzCOgNpH0xFVeaS2IjIQkTYRS15KUndurfbJF5s1SEqarqtAA3LNbQ==" />
              <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" role="menuitem">
                Sign out
              </button>
</form>          </li>
        </ul>
      </details-menu>
    </details>
  </li>
</ul>



        <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="sr-only right-0" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="+ZiFVdIZdRNNr1xKlbQOJXIzzyUpT3HmkzydKWvzHAoZPLtEHQuEkeR3YCbg2Dqelv4Zr18U5RIyorjpssYCdg==" />
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </div>
</header>

      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">


</div>



  <div role="main" class="application-main ">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <div id="js-repo-pjax-container" data-pjax-container >
      







  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
    <div class="repohead-details-container clearfix container">

      <ul class="pagehead-actions">
  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-autosubmit="true" data-remote="true" class="js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="grTuor2h/bX1V/ux6qwiR7j1XBqn38AS1TowzthGVqCgHkbAzLKBjuqBs+zxrlF3GsoHeCTXcW0m81qsTxkv8g==" />      <input type="hidden" name="repository_id" id="repository_id" value="547820" class="form-control" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/BorisMoore/jquery-tmpl/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
            aria-label="Toggle repository notifications menu"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
                <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                Watch
            </span>
          </a>
          <a class="social-count js-social-count"
            href="/BorisMoore/jquery-tmpl/watchers"
            aria-label="134 users are watching this repository">
            134
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg class="octicon octicon-x js-menu-close" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width="12" height="16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
                  <div class="select-menu-item-text">
                    <input type="radio" name="do" id="do_included" value="included" checked="checked" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
                  <div class="select-menu-item-text">
                    <input type="radio" name="do" id="do_subscribed" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                        Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
                  <div class="select-menu-item-text">
                    <input type="radio" name="do" id="do_ignore" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg class="octicon octicon-mute v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                        Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="starred js-social-form" action="/BorisMoore/jquery-tmpl/unstar" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="xGqrJR+NK89piuJ3Ujpt8icbDTnsn6SHjgM+DZKGtOUfsq+hEiursYGpZAs7cXwKptoCjG7wDi/w2kVP85/iZA==" />
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar BorisMoore/jquery-tmpl"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/BorisMoore/jquery-tmpl/stargazers"
           aria-label="3118 users starred this repository">
          3,118
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="unstarred js-social-form" action="/BorisMoore/jquery-tmpl/star" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="wz3+zPdNyjyWwbFOdRqlXXs9rbsPiIyngi1jdwjHrcZghY0nnF9kAxLcPmWxNGYrnk5WgQ5h7goBB5Qymgmt0g==" />
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star BorisMoore/jquery-tmpl"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/BorisMoore/jquery-tmpl/stargazers"
           aria-label="3118 users starred this repository">
          3,118
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="btn-with-count" action="/BorisMoore/jquery-tmpl/fork" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="VHjs7csOrSErF4QhKyXyIH0tOvf2qKuU6H5HcfyQ55MpPskap/tkSqUR6aE+ZkFcYQfjeVRbUtiOj8K2PNsjqA==" />
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of BorisMoore/jquery-tmpl to your account"
                aria-label="Fork your own copy of BorisMoore/jquery-tmpl to your account">
              <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/BorisMoore/jquery-tmpl/network/members" class="social-count"
       aria-label="979 users forked this repository">
      979
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" href="/BorisMoore">BorisMoore</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/BorisMoore/jquery-tmpl">jquery-tmpl</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /BorisMoore/jquery-tmpl" href="/BorisMoore/jquery-tmpl">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /BorisMoore/jquery-tmpl/issues" href="/BorisMoore/jquery-tmpl/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">55</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /BorisMoore/jquery-tmpl/pulls" href="/BorisMoore/jquery-tmpl/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">5</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /BorisMoore/jquery-tmpl/projects" href="/BorisMoore/jquery-tmpl/projects">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>

    <a class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /BorisMoore/jquery-tmpl/wiki" href="/BorisMoore/jquery-tmpl/wiki">
      <svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

  <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /BorisMoore/jquery-tmpl/pulse" href="/BorisMoore/jquery-tmpl/pulse">
    <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav  ">
  <div class="repository-content ">

    
  <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/BorisMoore/jquery-tmpl/blob/b504c8afba9a0be6870a6989b20573373dff373e/jquery.tmpl.js">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:a1f151fc494cd952d48b39718cf626ee -->

  

  <div class="file-navigation">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg class="octicon octicon-x js-menu-close" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width="12" height="16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/BorisMoore/jquery-tmpl/blob/gh-pages/jquery.tmpl.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/BorisMoore/jquery-tmpl/blob/master/jquery.tmpl.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/BorisMoore/jquery-tmpl/tree/vBeta1.0.0/jquery.tmpl.js"
              data-name="vBeta1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="vBeta1.0.0">
                vBeta1.0.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/BorisMoore/jquery-tmpl/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <clipboard-copy for="blob-path" class="btn btn-sm BtnGroup-item">
        Copy path
      </clipboard-copy>
    </div>
    <div id="blob-path" class="breadcrumb">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a data-pjax="true" href="/BorisMoore/jquery-tmpl"><span>jquery-tmpl</span></a></span></span><span class="separator">/</span><strong class="final-path">jquery.tmpl.js</strong>
    </div>
  </div>


  <include-fragment src="/BorisMoore/jquery-tmpl/contributors/master/jquery.tmpl.js" class="commit-tease commit-loader">
    <div>
      Fetching contributors&hellip;
    </div>

    <div class="commit-tease-contributors">
        <img alt="" class="loader-loading float-left" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" height="16" />
      <span class="loader-error">Cannot retrieve contributors at this time</span>
    </div>
</include-fragment>


  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/BorisMoore/jquery-tmpl/raw/master/jquery.tmpl.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/BorisMoore/jquery-tmpl/blame/master/jquery.tmpl.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/BorisMoore/jquery-tmpl/commits/master/jquery.tmpl.js">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://desktop.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form js-update-url-with-hash" action="/BorisMoore/jquery-tmpl/edit/master/jquery.tmpl.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="XLZ/OiCWG+8Mycu94GI2a/Ef49SFsogObyILdkIaXJ6m1vCTXeIysBMCtea6HOdwsgwGtUyt3SoOCSpeFB1xpQ==" />
            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
              <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
            </button>
</form>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form" action="/BorisMoore/jquery-tmpl/delete/master/jquery.tmpl.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="jXEIT8wJPs2kAuMMbGbrEHtCZqaYSoAFmkBgXL6hjW6dT7dAjSkcFSWMUIiflIuRRH10tAmeY48x3BLUOXamzw==" />
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      485 lines (450 sloc)
      <span class="file-info-divider"></span>
    18.6 KB
  </div>
</div>

    

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span>!</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * jQuery Templates Plugin 1.0.0pre</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * http://github.com/jquery/jquery-tmpl</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Requires jQuery 1.4.2</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Copyright 2011, Software Freedom Conservancy, Inc.</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Dual licensed under the MIT or GPL Version 2 licenses.</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * http://jquery.org/license</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>( <span class="pl-smi">jQuery</span>, <span class="pl-c1">undefined</span> ){</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> oldManip <span class="pl-k">=</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">domManip</span>, tmplItmAtt <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>_tmplitem<span class="pl-pds">&quot;</span></span>, htmlExpr <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[<span class="pl-k">^</span>&lt;]</span><span class="pl-k">*</span>(&lt;<span class="pl-c1">[<span class="pl-c1">\w\W</span>]</span><span class="pl-k">+</span>&gt;)<span class="pl-c1">[<span class="pl-k">^</span>&gt;]</span><span class="pl-k">*</span><span class="pl-k">$</span><span class="pl-k">|</span><span class="pl-cce">\{\{\!</span> <span class="pl-pds">/</span></span>,</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">		newTmplItems <span class="pl-k">=</span> {}, wrappedItems <span class="pl-k">=</span> {}, appendToTmplItems, topTmplItem <span class="pl-k">=</span> { key<span class="pl-k">:</span> <span class="pl-c1">0</span>, data<span class="pl-k">:</span> {} }, itemKey <span class="pl-k">=</span> <span class="pl-c1">0</span>, cloneIndex <span class="pl-k">=</span> <span class="pl-c1">0</span>, stack <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">newTmplItem</span>( <span class="pl-smi">options</span>, <span class="pl-smi">parentItem</span>, <span class="pl-smi">fn</span>, <span class="pl-smi">data</span> ) {</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Returns a template item data structure for a new rendered instance of a template (a &#39;template item&#39;).</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> The content field is a hierarchical array of strings and nested items (to be</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> removed and replaced by nodes field of dom elements, once inserted in DOM).</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> newItem <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">			data<span class="pl-k">:</span> data <span class="pl-k">||</span> (data <span class="pl-k">===</span> <span class="pl-c1">0</span> <span class="pl-k">||</span> data <span class="pl-k">===</span> <span class="pl-c1">false</span>) <span class="pl-k">?</span> data <span class="pl-k">:</span> (parentItem <span class="pl-k">?</span> <span class="pl-smi">parentItem</span>.<span class="pl-c1">data</span> <span class="pl-k">:</span> {}),</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">			_wrap<span class="pl-k">:</span> parentItem <span class="pl-k">?</span> <span class="pl-smi">parentItem</span>.<span class="pl-smi">_wrap</span> <span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">			tmpl<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">			parent<span class="pl-k">:</span> parentItem <span class="pl-k">||</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">			nodes<span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">			calls<span class="pl-k">:</span> tiCalls,</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">			nest<span class="pl-k">:</span> tiNest,</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">			wrap<span class="pl-k">:</span> tiWrap,</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">			html<span class="pl-k">:</span> tiHtml,</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">			update<span class="pl-k">:</span> tiUpdate</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> ( options ) {</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">jQuery</span>.<span class="pl-en">extend</span>( newItem, options, { nodes<span class="pl-k">:</span> [], parent<span class="pl-k">:</span> parentItem });</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> ( fn ) {</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Build the hierarchical content to be used during insertion into DOM</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">newItem</span>.<span class="pl-smi">tmpl</span> <span class="pl-k">=</span> fn;</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">newItem</span>.<span class="pl-smi">_ctnt</span> <span class="pl-k">=</span> <span class="pl-smi">newItem</span>.<span class="pl-smi">_ctnt</span> <span class="pl-k">||</span> <span class="pl-smi">newItem</span>.<span class="pl-en">tmpl</span>( jQuery, newItem );</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">newItem</span>.<span class="pl-smi">key</span> <span class="pl-k">=</span> <span class="pl-k">++</span>itemKey;</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Keep track of new template item, until it is stored as jQuery Data on DOM element</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">			(<span class="pl-smi">stack</span>.<span class="pl-c1">length</span> <span class="pl-k">?</span> wrappedItems <span class="pl-k">:</span> newTmplItems)[itemKey] <span class="pl-k">=</span> newItem;</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> newItem;</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> Override appendTo etc., in order to provide support for targeting multiple elements. (This code would disappear if integrated in jquery core).</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">jQuery</span>.<span class="pl-en">each</span>({</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">		appendTo<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>append<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">		prependTo<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>prepend<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">		insertBefore<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>before<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">		insertAfter<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>after<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">		replaceAll<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>replaceWith<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">	}, <span class="pl-k">function</span>( <span class="pl-smi">name</span>, <span class="pl-smi">original</span> ) {</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">jQuery</span>.<span class="pl-smi">fn</span>[ name ] <span class="pl-k">=</span> <span class="pl-k">function</span>( <span class="pl-smi">selector</span> ) {</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> ret <span class="pl-k">=</span> [], insert <span class="pl-k">=</span> <span class="pl-en">jQuery</span>( selector ), elems, i, l, tmplItems,</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">				parent <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">this</span>[<span class="pl-c1">0</span>].<span class="pl-c1">parentNode</span>;</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">			appendToTmplItems <span class="pl-k">=</span> newTmplItems <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( parent <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">parent</span>.<span class="pl-c1">nodeType</span> <span class="pl-k">===</span> <span class="pl-c1">11</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">parent</span>.<span class="pl-c1">childNodes</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">insert</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">1</span> ) {</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">				insert[ original ]( <span class="pl-c1">this</span>[<span class="pl-c1">0</span>] );</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">				ret <span class="pl-k">=</span> <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> ( i <span class="pl-k">=</span> <span class="pl-c1">0</span>, l <span class="pl-k">=</span> <span class="pl-smi">insert</span>.<span class="pl-c1">length</span>; i <span class="pl-k">&lt;</span> l; i<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">					cloneIndex <span class="pl-k">=</span> i;</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">					elems <span class="pl-k">=</span> (i <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> <span class="pl-c1">this</span>.<span class="pl-en">clone</span>(<span class="pl-c1">true</span>) <span class="pl-k">:</span> <span class="pl-c1">this</span>).<span class="pl-c1">get</span>();</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">jQuery</span>( insert[i] )[ original ]( elems );</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">					ret <span class="pl-k">=</span> <span class="pl-smi">ret</span>.<span class="pl-c1">concat</span>( elems );</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">				cloneIndex <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">				ret <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">pushStack</span>( ret, name, <span class="pl-smi">insert</span>.<span class="pl-smi">selector</span> );</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">			tmplItems <span class="pl-k">=</span> appendToTmplItems;</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">			appendToTmplItems <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">jQuery</span>.<span class="pl-smi">tmpl</span>.<span class="pl-c1">complete</span>( tmplItems );</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> ret;</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">jQuery</span>.<span class="pl-smi">fn</span>.<span class="pl-en">extend</span>({</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Use first wrapped element as template markup.</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Return wrapped set of template items, obtained by rendering template against data.</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">tmpl</span><span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">data</span>, <span class="pl-smi">options</span>, <span class="pl-smi">parentItem</span> ) {</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">jQuery</span>.<span class="pl-en">tmpl</span>( <span class="pl-c1">this</span>[<span class="pl-c1">0</span>], data, options, parentItem );</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Find which rendered template item the first wrapped DOM element belongs to</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">tmplItem</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">jQuery</span>.<span class="pl-en">tmplItem</span>( <span class="pl-c1">this</span>[<span class="pl-c1">0</span>] );</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Consider the first wrapped element as a template declaration, and get the compiled template or store it as a named template.</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">template</span><span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">name</span> ) {</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">jQuery</span>.<span class="pl-en">template</span>( name, <span class="pl-c1">this</span>[<span class="pl-c1">0</span>] );</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">domManip</span><span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">args</span>, <span class="pl-smi">table</span>, <span class="pl-smi">callback</span>, <span class="pl-smi">options</span> ) {</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( args[<span class="pl-c1">0</span>] <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">jQuery</span>.<span class="pl-en">isArray</span>( args[<span class="pl-c1">0</span>] )) {</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> dmArgs <span class="pl-k">=</span> <span class="pl-smi">jQuery</span>.<span class="pl-en">makeArray</span>( <span class="pl-c1">arguments</span> ), elems <span class="pl-k">=</span> args[<span class="pl-c1">0</span>], elemsLength <span class="pl-k">=</span> <span class="pl-smi">elems</span>.<span class="pl-c1">length</span>, i <span class="pl-k">=</span> <span class="pl-c1">0</span>, tmplItem;</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">while</span> ( i <span class="pl-k">&lt;</span> elemsLength <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>(tmplItem <span class="pl-k">=</span> <span class="pl-smi">jQuery</span>.<span class="pl-c1">data</span>( elems[i<span class="pl-k">++</span>], <span class="pl-s"><span class="pl-pds">&quot;</span>tmplItem<span class="pl-pds">&quot;</span></span> ))) {}</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( tmplItem <span class="pl-k">&amp;&amp;</span> cloneIndex ) {</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">					dmArgs[<span class="pl-c1">2</span>] <span class="pl-k">=</span> <span class="pl-k">function</span>( <span class="pl-smi">fragClone</span> ) {</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">						<span class="pl-c"><span class="pl-c">//</span> Handler called by oldManip when rendered template has been inserted into DOM.</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">jQuery</span>.<span class="pl-smi">tmpl</span>.<span class="pl-en">afterManip</span>( <span class="pl-c1">this</span>, fragClone, callback );</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">					};</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">oldManip</span>.<span class="pl-c1">apply</span>( <span class="pl-c1">this</span>, dmArgs );</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">oldManip</span>.<span class="pl-c1">apply</span>( <span class="pl-c1">this</span>, <span class="pl-c1">arguments</span> );</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">			cloneIndex <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">!</span>appendToTmplItems ) {</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">jQuery</span>.<span class="pl-smi">tmpl</span>.<span class="pl-c1">complete</span>( newTmplItems );</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">jQuery</span>.<span class="pl-en">extend</span>({</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Return wrapped set of template items, obtained by rendering template against data.</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">tmpl</span><span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">tmpl</span>, <span class="pl-smi">data</span>, <span class="pl-smi">options</span>, <span class="pl-smi">parentItem</span> ) {</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> ret, topLevel <span class="pl-k">=</span> <span class="pl-k">!</span>parentItem;</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( topLevel ) {</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> This is a top-level tmpl call (not from a nested template using {{tmpl}})</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">				parentItem <span class="pl-k">=</span> topTmplItem;</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">				tmpl <span class="pl-k">=</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">template</span>[tmpl] <span class="pl-k">||</span> <span class="pl-smi">jQuery</span>.<span class="pl-en">template</span>( <span class="pl-c1">null</span>, tmpl );</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">				wrappedItems <span class="pl-k">=</span> {}; <span class="pl-c"><span class="pl-c">//</span> Any wrapped items will be rebuilt, since this is top level</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> <span class="pl-k">if</span> ( <span class="pl-k">!</span>tmpl ) {</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> The template item is already associated with DOM - this is a refresh.</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> Re-evaluate rendered template for the parentItem</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">				tmpl <span class="pl-k">=</span> <span class="pl-smi">parentItem</span>.<span class="pl-smi">tmpl</span>;</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">				newTmplItems[<span class="pl-smi">parentItem</span>.<span class="pl-smi">key</span>] <span class="pl-k">=</span> parentItem;</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">parentItem</span>.<span class="pl-smi">nodes</span> <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">parentItem</span>.<span class="pl-smi">wrapped</span> ) {</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">updateWrapped</span>( parentItem, <span class="pl-smi">parentItem</span>.<span class="pl-smi">wrapped</span> );</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> Rebuild, without creating a new template item</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-en">jQuery</span>( <span class="pl-en">build</span>( parentItem, <span class="pl-c1">null</span>, <span class="pl-smi">parentItem</span>.<span class="pl-en">tmpl</span>( jQuery, parentItem ) ));</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">!</span>tmpl ) {</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> []; <span class="pl-c"><span class="pl-c">//</span> Could throw...</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">typeof</span> data <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">				data <span class="pl-k">=</span> <span class="pl-smi">data</span>.<span class="pl-c1">call</span>( parentItem <span class="pl-k">||</span> {} );</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( options <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">options</span>.<span class="pl-smi">wrapped</span> ) {</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">updateWrapped</span>( options, <span class="pl-smi">options</span>.<span class="pl-smi">wrapped</span> );</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">			ret <span class="pl-k">=</span> <span class="pl-smi">jQuery</span>.<span class="pl-en">isArray</span>( data ) <span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">jQuery</span>.<span class="pl-en">map</span>( data, <span class="pl-k">function</span>( <span class="pl-smi">dataItem</span> ) {</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> dataItem <span class="pl-k">?</span> <span class="pl-en">newTmplItem</span>( options, parentItem, tmpl, dataItem ) <span class="pl-k">:</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">				}) <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">				[ <span class="pl-en">newTmplItem</span>( options, parentItem, tmpl, data ) ];</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> topLevel <span class="pl-k">?</span> <span class="pl-en">jQuery</span>( <span class="pl-en">build</span>( parentItem, <span class="pl-c1">null</span>, ret ) ) <span class="pl-k">:</span> ret;</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Return rendered template item for an element.</span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">tmplItem</span><span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">elem</span> ) {</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> tmplItem;</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( elem <span class="pl-k">instanceof</span> jQuery ) {</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">				elem <span class="pl-k">=</span> elem[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">while</span> ( elem <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">elem</span>.<span class="pl-c1">nodeType</span> <span class="pl-k">===</span> <span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>(tmplItem <span class="pl-k">=</span> <span class="pl-smi">jQuery</span>.<span class="pl-c1">data</span>( elem, <span class="pl-s"><span class="pl-pds">&quot;</span>tmplItem<span class="pl-pds">&quot;</span></span> )) <span class="pl-k">&amp;&amp;</span> (elem <span class="pl-k">=</span> <span class="pl-smi">elem</span>.<span class="pl-c1">parentNode</span>) ) {}</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> tmplItem <span class="pl-k">||</span> topTmplItem;</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Set:</span></td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Use $.template( name, tmpl ) to cache a named template,</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> where tmpl is a template string, a script element or a jQuery instance wrapping a script element, etc.</span></td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Use $( &quot;selector&quot; ).template( name ) to provide access by name to a script block template declaration.</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Get:</span></td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Use $.template( name ) to access a cached template.</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Also $( selectorToScriptBlock ).template(), or $.template( null, templateString )</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> will return the compiled template, without adding a name reference.</span></td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> If templateString includes at least one HTML tag, $.template( templateString ) is equivalent</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> to $.template( null, templateString )</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">template</span><span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">name</span>, <span class="pl-smi">tmpl</span> ) {</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (tmpl) {</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> Compile template and associate with name</span></td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-k">typeof</span> tmpl <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> This is an HTML string being passed directly in.</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">					tmpl <span class="pl-k">=</span> <span class="pl-en">buildTmplFn</span>( tmpl );</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">if</span> ( tmpl <span class="pl-k">instanceof</span> jQuery ) {</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">					tmpl <span class="pl-k">=</span> tmpl[<span class="pl-c1">0</span>] <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">tmpl</span>.<span class="pl-c1">nodeType</span> ) {</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> If this is a template block, use cached copy, or generate tmpl function and cache.</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">					tmpl <span class="pl-k">=</span> <span class="pl-smi">jQuery</span>.<span class="pl-c1">data</span>( tmpl, <span class="pl-s"><span class="pl-pds">&quot;</span>tmpl<span class="pl-pds">&quot;</span></span> ) <span class="pl-k">||</span> <span class="pl-smi">jQuery</span>.<span class="pl-c1">data</span>( tmpl, <span class="pl-s"><span class="pl-pds">&quot;</span>tmpl<span class="pl-pds">&quot;</span></span>, <span class="pl-en">buildTmplFn</span>( <span class="pl-smi">tmpl</span>.<span class="pl-smi">innerHTML</span> ));</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> Issue: In IE, if the container element is not a script block, the innerHTML will remove quotes from attribute values whenever the value does not include white space.</span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> This means that foo=&quot;${x}&quot; will not work if the value of x includes white space: foo=&quot;${x}&quot; -&gt; foo=value of x.</span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> To correct this, include space in tag: foo=&quot;${ x }&quot; -&gt; foo=&quot;value of x&quot;</span></td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-k">typeof</span> name <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span> <span class="pl-k">?</span> (<span class="pl-smi">jQuery</span>.<span class="pl-smi">template</span>[name] <span class="pl-k">=</span> tmpl) <span class="pl-k">:</span> tmpl;</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Return named compiled template</span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> name <span class="pl-k">?</span> (<span class="pl-k">typeof</span> name <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span> <span class="pl-k">?</span> <span class="pl-smi">jQuery</span>.<span class="pl-en">template</span>( <span class="pl-c1">null</span>, name )<span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">				(<span class="pl-smi">jQuery</span>.<span class="pl-smi">template</span>[name] <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> If not in map, and not containing at least on HTML tag, treat as a selector.</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> (If integrated with core, use quickExpr.exec)</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">jQuery</span>.<span class="pl-en">template</span>( <span class="pl-c1">null</span>, <span class="pl-smi">htmlExpr</span>.<span class="pl-c1">test</span>( name ) <span class="pl-k">?</span> name <span class="pl-k">:</span> <span class="pl-en">jQuery</span>( name )))) <span class="pl-k">:</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">encode</span><span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">text</span> ) {</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Do HTML encoding replacing &lt; &gt; &amp; and &#39; and &quot; by corresponding entities.</span></td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> (<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> text).<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>&lt;<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>&amp;lt;<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>&gt;<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>&amp;gt;<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>&amp;#34;<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>&#39;<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>&amp;#39;<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">jQuery</span>.<span class="pl-en">extend</span>( <span class="pl-smi">jQuery</span>.<span class="pl-smi">tmpl</span>, {</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">		tag<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&quot;</span>tmpl<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">				_default<span class="pl-k">:</span> { $2<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>null<span class="pl-pds">&quot;</span></span> },</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">				open<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>if($notnull_1){__=__.concat($item.nest($1,$2));}<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> tmpl target parameter can be of type function, so use $1, not $1a (so not auto detection of functions)</span></td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> This means that {{tmpl foo}} treats foo as a template (which IS a function).</span></td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> Explicit parens can be used if foo is a function that returns a template: {{tmpl foo()}}.</span></td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&quot;</span>wrap<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">				_default<span class="pl-k">:</span> { $2<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>null<span class="pl-pds">&quot;</span></span> },</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">				open<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>$item.calls(__,$1,$2);__=[];<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">				close<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>call=$item.calls();__=call._.concat($item.wrap(call,__));<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&quot;</span>each<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">				_default<span class="pl-k">:</span> { $2<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>$index, $value<span class="pl-pds">&quot;</span></span> },</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">				open<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>if($notnull_1){$.each($1a,function($2){with(this){<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">				close<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>}});}<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&quot;</span>if<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">				open<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>if(($notnull_1) &amp;&amp; $1a){<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">				close<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>}<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&quot;</span>else<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">				_default<span class="pl-k">:</span> { $1<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>true<span class="pl-pds">&quot;</span></span> },</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">				open<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>}else if(($notnull_1) &amp;&amp; $1a){<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&quot;</span>html<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> Unecoded expression evaluation.</span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">				open<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>if($notnull_1){__.push($1a);}<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&quot;</span>=<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> Encoded expression evaluation. Abbreviated form is ${}.</span></td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">				_default<span class="pl-k">:</span> { $1<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>$data<span class="pl-pds">&quot;</span></span> },</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">				open<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>if($notnull_1){__.push($.encode($1a));}<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&quot;</span>!<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> Comment tag. Skipped by parser</span></td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">				open<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> This stub can be overridden, e.g. in jquery.tmplPlus for providing rendered events</span></td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">complete</span><span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">items</span> ) {</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">			newTmplItems <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Call this from code which overrides domManip, or equivalent</span></td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Manage cloning/storing template items etc.</span></td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">afterManip</span><span class="pl-k">:</span> <span class="pl-k">function</span> <span class="pl-en">afterManip</span>( <span class="pl-smi">elem</span>, <span class="pl-smi">fragClone</span>, <span class="pl-smi">callback</span> ) {</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Provides cloned fragment ready for fixup prior to and after insertion into DOM</span></td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> content <span class="pl-k">=</span> <span class="pl-smi">fragClone</span>.<span class="pl-c1">nodeType</span> <span class="pl-k">===</span> <span class="pl-c1">11</span> <span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">jQuery</span>.<span class="pl-en">makeArray</span>(<span class="pl-smi">fragClone</span>.<span class="pl-c1">childNodes</span>) <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">fragClone</span>.<span class="pl-c1">nodeType</span> <span class="pl-k">===</span> <span class="pl-c1">1</span> <span class="pl-k">?</span> [fragClone] <span class="pl-k">:</span> [];</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Return fragment to original caller (e.g. append) for DOM insertion</span></td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">callback</span>.<span class="pl-c1">call</span>( elem, fragClone );</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Fragment has been inserted:- Add inserted nodes to tmplItem data structure. Replace inserted element annotations by jQuery.data.</span></td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">storeTmplItems</span>( content );</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">			cloneIndex<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>========================== Private helper functions, used by code above ==========================</span></td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">build</span>( <span class="pl-smi">tmplItem</span>, <span class="pl-smi">nested</span>, <span class="pl-smi">content</span> ) {</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Convert hierarchical content into flat string array</span></td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> and finally return array of fragments ready for DOM insertion</span></td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> frag, ret <span class="pl-k">=</span> content <span class="pl-k">?</span> <span class="pl-smi">jQuery</span>.<span class="pl-en">map</span>( content, <span class="pl-k">function</span>( <span class="pl-smi">item</span> ) {</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> (<span class="pl-k">typeof</span> item <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> Insert template item annotations, to be converted to jQuery.data( &quot;tmplItem&quot; ) when elems are inserted into DOM.</span></td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">				(<span class="pl-smi">tmplItem</span>.<span class="pl-smi">key</span> <span class="pl-k">?</span> <span class="pl-smi">item</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"> <span class="pl-pds">/</span>(&lt;<span class="pl-c1">\w</span><span class="pl-k">+</span>)(?=<span class="pl-c1">[<span class="pl-c1">\s</span>&gt;]</span>)(?!<span class="pl-c1">[<span class="pl-k">^</span>&gt;]</span><span class="pl-k">*</span>_tmplitem)(<span class="pl-c1">[<span class="pl-k">^</span>&gt;]</span><span class="pl-k">*</span>)<span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&quot;</span>$1 <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> tmplItmAtt <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>=<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">tmplItem</span>.<span class="pl-smi">key</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span> $2<span class="pl-pds">&quot;</span></span> ) <span class="pl-k">:</span> item) <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> This is a child template item. Build nested template.</span></td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">build</span>( item, tmplItem, <span class="pl-smi">item</span>.<span class="pl-smi">_ctnt</span> );</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">		}) <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> If content is not defined, insert tmplItem directly. Not a template item. May be a string, or a string array, e.g. from {{html $item.html()}}.</span></td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">		tmplItem;</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> ( nested ) {</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> ret;</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> top-level template</span></td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">		ret <span class="pl-k">=</span> <span class="pl-smi">ret</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Support templates which have initial or final text nodes, or consist only of text</span></td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Also support HTML entities within the HTML markup.</span></td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">ret</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\s</span><span class="pl-k">*</span>(<span class="pl-c1">[<span class="pl-k">^</span>&lt;<span class="pl-c1">\s</span>][<span class="pl-k">^</span>&lt;]</span><span class="pl-k">*</span>)<span class="pl-k">?</span>(&lt;<span class="pl-c1">[<span class="pl-c1">\w\W</span>]</span><span class="pl-k">+</span>&gt;)(<span class="pl-c1">[<span class="pl-k">^</span>&gt;]</span><span class="pl-k">*</span><span class="pl-c1">[<span class="pl-k">^</span>&gt;<span class="pl-c1">\s</span>]</span>)<span class="pl-k">?</span><span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>, <span class="pl-k">function</span>( <span class="pl-smi">all</span>, <span class="pl-smi">before</span>, <span class="pl-smi">middle</span>, <span class="pl-smi">after</span>) {</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">			frag <span class="pl-k">=</span> <span class="pl-en">jQuery</span>( middle ).<span class="pl-c1">get</span>();</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">storeTmplItems</span>( frag );</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( before ) {</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">				frag <span class="pl-k">=</span> <span class="pl-en">unencode</span>( before ).<span class="pl-c1">concat</span>(frag);</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( after ) {</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">				frag <span class="pl-k">=</span> <span class="pl-smi">frag</span>.<span class="pl-c1">concat</span>(<span class="pl-en">unencode</span>( after ));</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> frag <span class="pl-k">?</span> frag <span class="pl-k">:</span> <span class="pl-en">unencode</span>( ret );</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">unencode</span>( <span class="pl-smi">text</span> ) {</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Use createElement, since createTextNode will not render HTML entities correctly</span></td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> el <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>( <span class="pl-s"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">el</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> text;</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-smi">jQuery</span>.<span class="pl-en">makeArray</span>(<span class="pl-smi">el</span>.<span class="pl-c1">childNodes</span>);</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> Generate a reusable function that will serve to render a template against data</span></td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">buildTmplFn</span>( <span class="pl-smi">markup</span> ) {</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">Function</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>jQuery<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>$item<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Use the variable __ to hold a string array while building the compiled template. (See https://github.com/jquery/jquery-tmpl/issues#issue/10).</span></td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&quot;</span>var $=jQuery,call,__=[],$data=$item.data;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Introduce the data as local variables using with(){}</span></td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&quot;</span>with($data){__.push(&#39;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Convert the template into pure JavaScript</span></td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">jQuery</span>.<span class="pl-en">trim</span>(markup)</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">				.<span class="pl-c1">replace</span>(<span class="pl-sr"> <span class="pl-pds">/</span>(<span class="pl-c1">[<span class="pl-cce">\\</span>&#39;]</span>)<span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span>$1<span class="pl-pds">&quot;</span></span> )</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">				.<span class="pl-c1">replace</span>(<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\r\t\n</span>]</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> )</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">				.<span class="pl-c1">replace</span>(<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-cce">\$\{</span>(<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\}</span>]</span><span class="pl-k">*</span>)<span class="pl-cce">\}</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&quot;</span>{{= $1}}<span class="pl-pds">&quot;</span></span> )</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">				.<span class="pl-c1">replace</span>(<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-cce">\{\{</span>(<span class="pl-cce">\/</span><span class="pl-k">?</span>)(<span class="pl-c1">\w</span><span class="pl-k">+</span><span class="pl-k">|</span><span class="pl-c1">.</span>)(?:<span class="pl-cce">\(</span>((?:<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\}</span>]</span><span class="pl-k">|</span><span class="pl-cce">\}</span>(?!<span class="pl-cce">\}</span>))<span class="pl-k">*?</span>)<span class="pl-k">?</span><span class="pl-cce">\)</span>)<span class="pl-k">?</span>(?:<span class="pl-c1">\s</span><span class="pl-k">+</span>(<span class="pl-c1">.</span><span class="pl-k">*?</span>)<span class="pl-k">?</span>)<span class="pl-k">?</span>(<span class="pl-cce">\(</span>((?:<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\}</span>]</span><span class="pl-k">|</span><span class="pl-cce">\}</span>(?!<span class="pl-cce">\}</span>))<span class="pl-k">*?</span>)<span class="pl-cce">\)</span>)<span class="pl-k">?</span><span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-cce">\}\}</span><span class="pl-pds">/</span>g</span>,</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">function</span>( <span class="pl-smi">all</span>, <span class="pl-smi">slash</span>, <span class="pl-smi">type</span>, <span class="pl-smi">fnargs</span>, <span class="pl-smi">target</span>, <span class="pl-smi">parens</span>, <span class="pl-smi">args</span> ) {</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> tag <span class="pl-k">=</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">tmpl</span>.<span class="pl-smi">tag</span>[ type ], def, expr, exprAutoFnDetect;</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( <span class="pl-k">!</span>tag ) {</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">throw</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Unknown template tag: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> type;</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">					def <span class="pl-k">=</span> <span class="pl-smi">tag</span>.<span class="pl-smi">_default</span> <span class="pl-k">||</span> [];</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( parens <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\w</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(target)) {</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">						target <span class="pl-k">+=</span> parens;</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">						parens <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( target ) {</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">						target <span class="pl-k">=</span> <span class="pl-c1">unescape</span>( target );</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">						args <span class="pl-k">=</span> args <span class="pl-k">?</span> (<span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-c1">unescape</span>( args ) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>) <span class="pl-k">:</span> (parens <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">						<span class="pl-c"><span class="pl-c">//</span> Support for target being things like a.toLowerCase();</span></td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">						<span class="pl-c"><span class="pl-c">//</span> In that case don&#39;t call with template item as &#39;this&#39; pointer. Just evaluate...</span></td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">						expr <span class="pl-k">=</span> parens <span class="pl-k">?</span> (<span class="pl-smi">target</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span>) <span class="pl-k">&gt;</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">?</span> target <span class="pl-k">+</span> <span class="pl-c1">unescape</span>( parens ) <span class="pl-k">:</span> (<span class="pl-s"><span class="pl-pds">&quot;</span>(<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> target <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>).call($item<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> args)) <span class="pl-k">:</span> target;</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">						exprAutoFnDetect <span class="pl-k">=</span> parens <span class="pl-k">?</span> expr <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>(typeof(<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> target <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>)===&#39;function&#39;?(<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> target <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>).call($item):(<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> target <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>))<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">						exprAutoFnDetect <span class="pl-k">=</span> expr <span class="pl-k">=</span> <span class="pl-smi">def</span>.<span class="pl-smi">$1</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span>null<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">					fnargs <span class="pl-k">=</span> <span class="pl-c1">unescape</span>( fnargs );</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&#39;);<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">						tag[ slash <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>close<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>open<span class="pl-pds">&quot;</span></span> ]</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">							.<span class="pl-c1">split</span>( <span class="pl-s"><span class="pl-pds">&quot;</span>$notnull_1<span class="pl-pds">&quot;</span></span> ).<span class="pl-c1">join</span>( target <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>typeof(<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> target <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>)!==&#39;undefined&#39; &amp;&amp; (<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> target <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>)!=null<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>true<span class="pl-pds">&quot;</span></span> )</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">							.<span class="pl-c1">split</span>( <span class="pl-s"><span class="pl-pds">&quot;</span>$1a<span class="pl-pds">&quot;</span></span> ).<span class="pl-c1">join</span>( exprAutoFnDetect )</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">							.<span class="pl-c1">split</span>( <span class="pl-s"><span class="pl-pds">&quot;</span>$1<span class="pl-pds">&quot;</span></span> ).<span class="pl-c1">join</span>( expr )</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">							.<span class="pl-c1">split</span>( <span class="pl-s"><span class="pl-pds">&quot;</span>$2<span class="pl-pds">&quot;</span></span> ).<span class="pl-c1">join</span>( fnargs <span class="pl-k">||</span> <span class="pl-smi">def</span>.<span class="pl-smi">$2</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> ) <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">						<span class="pl-s"><span class="pl-pds">&quot;</span>__.push(&#39;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">				}) <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&quot;</span>&#39;);}return __;<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">		);</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">updateWrapped</span>( <span class="pl-smi">options</span>, <span class="pl-smi">wrapped</span> ) {</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Build the wrapped content.</span></td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">options</span>.<span class="pl-smi">_wrap</span> <span class="pl-k">=</span> <span class="pl-en">build</span>( options, <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Suport imperative scenario in which options.wrapped can be set to a selector or an HTML string.</span></td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">jQuery</span>.<span class="pl-en">isArray</span>( wrapped ) <span class="pl-k">?</span> wrapped <span class="pl-k">:</span> [<span class="pl-smi">htmlExpr</span>.<span class="pl-c1">test</span>( wrapped ) <span class="pl-k">?</span> wrapped <span class="pl-k">:</span> <span class="pl-en">jQuery</span>( wrapped ).<span class="pl-en">html</span>()]</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">		).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">unescape</span>( <span class="pl-smi">args</span> ) {</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> args <span class="pl-k">?</span> <span class="pl-smi">args</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-cce">\\</span>&#39;<span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&quot;</span>&#39;<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\\\\</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span><span class="pl-pds">&quot;</span></span> ) <span class="pl-k">:</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">outerHtml</span>( <span class="pl-smi">elem</span> ) {</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> div <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">div</span>.<span class="pl-c1">appendChild</span>( <span class="pl-smi">elem</span>.<span class="pl-c1">cloneNode</span>(<span class="pl-c1">true</span>) );</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-smi">div</span>.<span class="pl-smi">innerHTML</span>;</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> Store template items in jQuery.data(), ensuring a unique tmplItem data data structure for each rendered template instance.</span></td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">storeTmplItems</span>( <span class="pl-smi">content</span> ) {</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> keySuffix <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>_<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> cloneIndex, elem, elems, newClonedItems <span class="pl-k">=</span> {}, i, l, m;</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">for</span> ( i <span class="pl-k">=</span> <span class="pl-c1">0</span>, l <span class="pl-k">=</span> <span class="pl-smi">content</span>.<span class="pl-c1">length</span>; i <span class="pl-k">&lt;</span> l; i<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( (elem <span class="pl-k">=</span> content[i]).<span class="pl-c1">nodeType</span> <span class="pl-k">!==</span> <span class="pl-c1">1</span> ) {</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">			elems <span class="pl-k">=</span> <span class="pl-smi">elem</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>*<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> ( m <span class="pl-k">=</span> <span class="pl-smi">elems</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>; m <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span>; m<span class="pl-k">--</span> ) {</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">processItemKey</span>( elems[m] );</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">processItemKey</span>( elem );</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span> <span class="pl-en">processItemKey</span>( <span class="pl-smi">el</span> ) {</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> pntKey, pntNode <span class="pl-k">=</span> el, pntItem, tmplItem, key;</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Ensure that each rendered template inserted into the DOM has its own template item,</span></td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( (key <span class="pl-k">=</span> <span class="pl-smi">el</span>.<span class="pl-c1">getAttribute</span>( tmplItmAtt ))) {</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">while</span> ( <span class="pl-smi">pntNode</span>.<span class="pl-c1">parentNode</span> <span class="pl-k">&amp;&amp;</span> (pntNode <span class="pl-k">=</span> <span class="pl-smi">pntNode</span>.<span class="pl-c1">parentNode</span>).<span class="pl-c1">nodeType</span> <span class="pl-k">===</span> <span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>(pntKey <span class="pl-k">=</span> <span class="pl-smi">pntNode</span>.<span class="pl-c1">getAttribute</span>( tmplItmAtt ))) { }</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( pntKey <span class="pl-k">!==</span> key ) {</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> The next ancestor with a _tmplitem expando is on a different key than this one.</span></td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> So this is a top-level element within this template item</span></td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> Set pntNode to the key of the parentNode, or to 0 if pntNode.parentNode is null, or pntNode is a fragment.</span></td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">					pntNode <span class="pl-k">=</span> <span class="pl-smi">pntNode</span>.<span class="pl-c1">parentNode</span> <span class="pl-k">?</span> (<span class="pl-smi">pntNode</span>.<span class="pl-c1">nodeType</span> <span class="pl-k">===</span> <span class="pl-c1">11</span> <span class="pl-k">?</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> (<span class="pl-smi">pntNode</span>.<span class="pl-c1">getAttribute</span>( tmplItmAtt ) <span class="pl-k">||</span> <span class="pl-c1">0</span>)) <span class="pl-k">:</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( <span class="pl-k">!</span>(tmplItem <span class="pl-k">=</span> newTmplItems[key]) ) {</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">						<span class="pl-c"><span class="pl-c">//</span> The item is for wrapped content, and was copied from the temporary parent wrappedItem.</span></td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">						tmplItem <span class="pl-k">=</span> wrappedItems[key];</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">						tmplItem <span class="pl-k">=</span> <span class="pl-en">newTmplItem</span>( tmplItem, newTmplItems[pntNode]<span class="pl-k">||</span>wrappedItems[pntNode] );</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">tmplItem</span>.<span class="pl-smi">key</span> <span class="pl-k">=</span> <span class="pl-k">++</span>itemKey;</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">						newTmplItems[itemKey] <span class="pl-k">=</span> tmplItem;</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( cloneIndex ) {</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">cloneTmplItem</span>( key );</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">el</span>.<span class="pl-c1">removeAttribute</span>( tmplItmAtt );</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> <span class="pl-k">if</span> ( cloneIndex <span class="pl-k">&amp;&amp;</span> (tmplItem <span class="pl-k">=</span> <span class="pl-smi">jQuery</span>.<span class="pl-c1">data</span>( el, <span class="pl-s"><span class="pl-pds">&quot;</span>tmplItem<span class="pl-pds">&quot;</span></span> )) ) {</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> This was a rendered element, cloned during append or appendTo etc.</span></td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> TmplItem stored in jQuery data has already been cloned in cloneCopyEvent. We must replace it with a fresh cloned tmplItem.</span></td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">cloneTmplItem</span>( <span class="pl-smi">tmplItem</span>.<span class="pl-smi">key</span> );</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">				newTmplItems[<span class="pl-smi">tmplItem</span>.<span class="pl-smi">key</span>] <span class="pl-k">=</span> tmplItem;</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">				pntNode <span class="pl-k">=</span> <span class="pl-smi">jQuery</span>.<span class="pl-c1">data</span>( <span class="pl-smi">el</span>.<span class="pl-c1">parentNode</span>, <span class="pl-s"><span class="pl-pds">&quot;</span>tmplItem<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">				pntNode <span class="pl-k">=</span> pntNode <span class="pl-k">?</span> <span class="pl-smi">pntNode</span>.<span class="pl-smi">key</span> <span class="pl-k">:</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( tmplItem ) {</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">				pntItem <span class="pl-k">=</span> tmplItem;</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> Find the template item of the parent element.</span></td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> (Using !=, not !==, since pntItem.key is number, and pntNode may be a string)</span></td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">while</span> ( pntItem <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">pntItem</span>.<span class="pl-smi">key</span> <span class="pl-k">!=</span> pntNode ) {</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> Add this element as a top-level node for this rendered template item, as well as for any</span></td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> ancestor items between this item and the item of its parent element</span></td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">pntItem</span>.<span class="pl-smi">nodes</span>.<span class="pl-c1">push</span>( el );</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">					pntItem <span class="pl-k">=</span> <span class="pl-smi">pntItem</span>.<span class="pl-c1">parent</span>;</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> Delete content built during rendering - reduce API surface area and memory use, and avoid exposing of stale data after rendering...</span></td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">delete</span> <span class="pl-smi">tmplItem</span>.<span class="pl-smi">_ctnt</span>;</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">delete</span> <span class="pl-smi">tmplItem</span>.<span class="pl-smi">_wrap</span>;</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> Store template item as jQuery data on the element</span></td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">jQuery</span>.<span class="pl-c1">data</span>( el, <span class="pl-s"><span class="pl-pds">&quot;</span>tmplItem<span class="pl-pds">&quot;</span></span>, tmplItem );</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">function</span> <span class="pl-en">cloneTmplItem</span>( <span class="pl-smi">key</span> ) {</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">				key <span class="pl-k">=</span> key <span class="pl-k">+</span> keySuffix;</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">				tmplItem <span class="pl-k">=</span> newClonedItems[key] <span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">					(newClonedItems[key] <span class="pl-k">||</span> <span class="pl-en">newTmplItem</span>( tmplItem, newTmplItems[<span class="pl-smi">tmplItem</span>.<span class="pl-c1">parent</span>.<span class="pl-smi">key</span> <span class="pl-k">+</span> keySuffix] <span class="pl-k">||</span> <span class="pl-smi">tmplItem</span>.<span class="pl-c1">parent</span> ));</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>---- Helper functions for template item ----</span></td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">tiCalls</span>( <span class="pl-smi">content</span>, <span class="pl-smi">tmpl</span>, <span class="pl-smi">data</span>, <span class="pl-smi">options</span> ) {</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> ( <span class="pl-k">!</span>content ) {</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">stack</span>.<span class="pl-c1">pop</span>();</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">stack</span>.<span class="pl-c1">push</span>({ _<span class="pl-k">:</span> content, tmpl<span class="pl-k">:</span> tmpl, item<span class="pl-k">:</span><span class="pl-c1">this</span>, data<span class="pl-k">:</span> data, options<span class="pl-k">:</span> options });</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">tiNest</span>( <span class="pl-smi">tmpl</span>, <span class="pl-smi">data</span>, <span class="pl-smi">options</span> ) {</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> nested template, using {{tmpl}} tag</span></td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-smi">jQuery</span>.<span class="pl-en">tmpl</span>( <span class="pl-smi">jQuery</span>.<span class="pl-en">template</span>( tmpl ), data, options, <span class="pl-c1">this</span> );</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">tiWrap</span>( <span class="pl-smi">call</span>, <span class="pl-smi">wrapped</span> ) {</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> nested template, using {{wrap}} tag</span></td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> options <span class="pl-k">=</span> <span class="pl-smi">call</span>.<span class="pl-c1">options</span> <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">options</span>.<span class="pl-smi">wrapped</span> <span class="pl-k">=</span> wrapped;</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Apply the template, which may incorporate wrapped content,</span></td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-smi">jQuery</span>.<span class="pl-en">tmpl</span>( <span class="pl-smi">jQuery</span>.<span class="pl-en">template</span>( <span class="pl-smi">call</span>.<span class="pl-smi">tmpl</span> ), <span class="pl-smi">call</span>.<span class="pl-c1">data</span>, options, <span class="pl-smi">call</span>.<span class="pl-smi">item</span> );</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">tiHtml</span>( <span class="pl-smi">filter</span>, <span class="pl-smi">textOnly</span> ) {</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> wrapped <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">_wrap</span>;</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-smi">jQuery</span>.<span class="pl-en">map</span>(</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">jQuery</span>( <span class="pl-smi">jQuery</span>.<span class="pl-en">isArray</span>( wrapped ) <span class="pl-k">?</span> <span class="pl-smi">wrapped</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>) <span class="pl-k">:</span> wrapped ).<span class="pl-en">filter</span>( filter <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span>*<span class="pl-pds">&quot;</span></span> ),</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">function</span>(<span class="pl-smi">e</span>) {</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> textOnly <span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">e</span>.<span class="pl-smi">innerText</span> <span class="pl-k">||</span> <span class="pl-smi">e</span>.<span class="pl-smi">textContent</span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">e</span>.<span class="pl-smi">outerHTML</span> <span class="pl-k">||</span> <span class="pl-en">outerHtml</span>(e);</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">tiUpdate</span>() {</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> coll <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">nodes</span>;</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">jQuery</span>.<span class="pl-en">tmpl</span>( <span class="pl-c1">null</span>, <span class="pl-c1">null</span>, <span class="pl-c1">null</span>, <span class="pl-c1">this</span>).<span class="pl-c1">insertBefore</span>( coll[<span class="pl-c1">0</span>] );</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">jQuery</span>( coll ).<span class="pl-c1">remove</span>();</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">})( jQuery );</td>
      </tr>
</table>

  <details class="details-reset details-overlay BlobToolbar position-absolute js-file-line-actions dropdown d-none" aria-hidden="true">
    <summary class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1" aria-label="Inline file action toolbar">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM13 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>
    </summary>
    <details-menu>
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2">
        <li><clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-lines" style="cursor:pointer;" data-original-text="Copy lines">Copy lines</clipboard-copy></li>
        <li><clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink">Copy permalink</clipboard-copy></li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/BorisMoore/jquery-tmpl/blame/b504c8afba9a0be6870a6989b20573373dff373e/jquery.tmpl.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" role="menuitem" href="/BorisMoore/jquery-tmpl/issues/new">Open new issue</a></li>
      </ul>
    </details-menu>
  </details>

  </div>

  </div>

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

        
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2018 <span title="0.19198s from unicorn-1731708435-bwxms">GitHub</span>, Inc.</li>
        <li class="mr-3"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3"><a href="https://help.github.com/articles/github-security/" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon mr-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3"><a href="https://blog.github.com" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha512-tHK+lUGou37c8/ZQ6Sr7TQrOQeIbfzdK7ihgJ8a2IqCeHP5jTA71hcRhrFMPbii4AnvUE4j80zXSU3U79ryzvg==" type="application/javascript" src="https://assets-cdn.github.com/assets/frameworks-a8e0d8b0cc36be6ad32a6595327c9d01.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-sv9bi4LCVyjjJ1/n5mInYH/MVuYY6BhhzVA+yujtQi32tOquIJaZvvFab6tUV+qKAASGyGOTFkLaFxQsj8KxlA==" type="application/javascript" src="https://assets-cdn.github.com/assets/github-2dfc1dd63dafc55f566f88e70a3e1d5c.js"></script>
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
  </div>
</div>

  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark" open>
    <summary aria-haspopup="dialog" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast">
      <button class="m-3 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

<div id="hovercard-aria-description" class="sr-only">
  Press h to open a hovercard with more details.
</div>


  </body>
</html>

