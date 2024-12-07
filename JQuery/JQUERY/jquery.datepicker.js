<!DOCTYPE html>
<!-- saved from url=(0036)https://api.jqueryui.com/datepicker/ -->
<html class="js multiplebgs boxshadow cssgradients wf-klavikaweb-n7-active wf-sourcecodepro-n4-active wf-sourcecodepro-n7-active wf-klavikaweb-i7-active wf-active" lang="en-US"><head data-live-domain="api.jqueryui.com"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<title>Datepicker Widget | jQuery UI API Documentation</title>

	<meta name="author" content="JS Foundation - js.foundation">
	<meta name="description" content="">

	<meta name="viewport" content="width=device-width">

	<link rel="shortcut icon" href="https://api.jqueryui.com/jquery-wp-content/themes/api.jqueryui.com/i/favicon.ico">

	<link rel="stylesheet" href="./jquery.datepicker_files/base.css">
	<link rel="stylesheet" href="./jquery.datepicker_files/style.css">

	<script src="./jquery.datepicker_files/modernizr.custom.2.8.3.min.js.download"></script>

	<script src="./jquery.datepicker_files/jquery-3.7.0.js.download"></script>

	<script src="./jquery.datepicker_files/plugins.js.download"></script>
	<script src="./jquery.datepicker_files/main.js.download"></script>

	<script src="./jquery.datepicker_files/wde1aof.js.download"></script>
	<style type="text/css">.tk-klavika-web{font-family:"klavika-web",sans-serif;}.tk-source-code-pro{font-family:"source-code-pro",sans-serif;}</style><style type="text/css">@font-face{font-family:klavika-web;src:url(https://use.typekit.net/af/f3ac97/00000000000000003b9acdf9/27/l?subset_id=2&fvd=n7&v=3) format("woff2"),url(https://use.typekit.net/af/f3ac97/00000000000000003b9acdf9/27/d?subset_id=2&fvd=n7&v=3) format("woff"),url(https://use.typekit.net/af/f3ac97/00000000000000003b9acdf9/27/a?subset_id=2&fvd=n7&v=3) format("opentype");font-weight:700;font-style:normal;font-stretch:normal;font-display:auto;}@font-face{font-family:klavika-web;src:url(https://use.typekit.net/af/af9173/00000000000000003b9acdfa/27/l?subset_id=2&fvd=i7&v=3) format("woff2"),url(https://use.typekit.net/af/af9173/00000000000000003b9acdfa/27/d?subset_id=2&fvd=i7&v=3) format("woff"),url(https://use.typekit.net/af/af9173/00000000000000003b9acdfa/27/a?subset_id=2&fvd=i7&v=3) format("opentype");font-weight:700;font-style:italic;font-stretch:normal;font-display:auto;}@font-face{font-family:source-code-pro;src:url(https://use.typekit.net/af/756772/0000000000000000000179d5/27/l?subset_id=2&fvd=n7&v=3) format("woff2"),url(https://use.typekit.net/af/756772/0000000000000000000179d5/27/d?subset_id=2&fvd=n7&v=3) format("woff"),url(https://use.typekit.net/af/756772/0000000000000000000179d5/27/a?subset_id=2&fvd=n7&v=3) format("opentype");font-weight:700;font-style:normal;font-stretch:normal;font-display:auto;}@font-face{font-family:source-code-pro;src:url(https://use.typekit.net/af/3c21b3/0000000000000000000179cf/27/l?subset_id=2&fvd=n4&v=3) format("woff2"),url(https://use.typekit.net/af/3c21b3/0000000000000000000179cf/27/d?subset_id=2&fvd=n4&v=3) format("woff"),url(https://use.typekit.net/af/3c21b3/0000000000000000000179cf/27/a?subset_id=2&fvd=n4&v=3) format("opentype");font-weight:400;font-style:normal;font-stretch:normal;font-display:auto;}</style><script>try{Typekit.load();}catch(e){}</script>
	<!-- at the end of the HEAD -->
	<link rel="stylesheet" href="./jquery.datepicker_files/docsearch.min.css">
	<link rel="stylesheet" href="./jquery.datepicker_files/docsearch.css">

<link rel="https://api.w.org/" href="https://api.jqueryui.com/wp-json/">
<meta name="generator" content="WordPress 4.5.2">
<link rel="alternate" type="application/json+oembed" href="https://api.jqueryui.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fapi.jqueryui.com%2Fdatepicker%2F">
<link rel="alternate" type="text/xml+oembed" href="https://api.jqueryui.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fapi.jqueryui.com%2Fdatepicker%2F&amp;format=xml">

</head>
<body class="api jquery-ui single single-post postid-21 single-format-standard single-author singular" data-new-gr-c-s-check-loaded="14.1117.0" data-gr-ext-installed="">

<header>
	<section id="global-nav">
		<nav>
			<div class="constrain">
				<ul class="projects">
					<li class="project jquery"><a href="https://jquery.com/" title="jQuery">jQuery</a></li>
					<li class="project jquery-ui"><a href="https://jqueryui.com/" title="jQuery UI">jQuery UI</a></li>
					<li class="project jquery-mobile"><a href="https://jquerymobile.com/" title="jQuery Mobile">jQuery Mobile</a></li>
					<li class="project sizzlejs"><a href="https://sizzlejs.com/" title="Sizzle">Sizzle</a></li>
					<li class="project qunitjs"><a href="https://qunitjs.com/" title="QUnit">QUnit</a></li>
				</ul>
				<ul class="links l_tinynav1">
					<li><a href="https://plugins.jquery.com/">Plugins</a></li>
					<li class="dropdown"><a href="https://contribute.jquery.org/">Contribute</a>
						<ul>
							<li><a href="https://js.foundation/CLA">CLA</a></li>
							<li><a href="https://contribute.jquery.org/style-guide/">Style Guides</a></li>
							<li><a href="https://contribute.jquery.org/triage/">Bug Triage</a></li>
							<li><a href="https://contribute.jquery.org/code/">Code</a></li>
							<li><a href="https://contribute.jquery.org/documentation/">Documentation</a></li>
							<li><a href="https://contribute.jquery.org/web-sites/">Web Sites</a></li>
						</ul>
					</li>
					<li class="dropdown"><a href="https://js.foundation/events">Events</a>
						<ul class="wide">
						</ul>
					</li>
					<li class="dropdown"><a href="https://jquery.org/support/">Support</a>
						<ul>
							<li><a href="https://learn.jquery.com/">Learning Center</a></li>
							<li><a href="https://irc.jquery.org/">IRC/Chat</a></li>
							<li><a href="https://forum.jquery.com/">Forums</a></li>
							<li><a href="https://stackoverflow.com/tags/jquery/info">Stack Overflow</a></li>
							<li><a href="https://jquery.org/support/">Commercial Support</a></li>
						</ul>
					</li>
					<li class="dropdown"><a href="https://js.foundation/">JS Foundation</a>
						<ul>
							<li><a href="https://js.foundation/about/join">Join</a></li>
							<li><a href="https://js.foundation/about/members">Members</a></li>
							<li><a href="https://js.foundation/about/leadership">Leadership</a></li>
							<li><a href="https://js.foundation/community/code-of-conduct">Conduct</a></li>
							<li><a href="https://js.foundation/about/donate">Donate</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</nav>
	</section>
</header>

<div id="container">
	<div id="logo-events" class="constrain clearfix">
		<h2 class="logo"><a href="https://jqueryui.com/" title="jQuery UI API Documentation">jQuery UI API Documentation</a></h2>

		<aside>
			<div id="broadcast"></div>
		</aside>
	</div>

	<nav id="main" class="constrain clearfix">
		<div class="menu-top-container">
	<ul id="menu-top" class="menu l_tinynav2">
<li class="menu-item"><a href="https://jqueryui.com/demos/">Demos</a></li>
<li class="menu-item"><a href="https://jqueryui.com/download/">Download</a></li>
<li class="menu-item current"><a href="https://api.jqueryui.com/">API Documentation</a></li>
<li class="menu-item"><a href="https://jqueryui.com/themeroller/">Themes</a></li>
<li class="menu-item"><a href="https://jqueryui.com/development/">Development</a></li>
<li class="menu-item"><a href="https://jqueryui.com/support/">Support</a></li>
<li class="menu-item"><a href="https://blog.jqueryui.com/">Blog</a></li>
<li class="menu-item"><a href="https://jqueryui.com/about/">About</a></li>
	</ul><select id="tinynav2" class="tinynav tinynav2"><option>Navigate...</option><option value="https://jqueryui.com/demos/">Demos</option><option value="https://jqueryui.com/download/">Download</option><option value="https://api.jqueryui.com/">API Documentation</option><option value="https://jqueryui.com/themeroller/">Themes</option><option value="https://jqueryui.com/development/">Development</option><option value="https://jqueryui.com/support/">Support</option><option value="https://blog.jqueryui.com/">Blog</option><option value="https://jqueryui.com/about/">About</option></select>
</div>

		<form method="get" class="searchform" action="https://api.jqueryui.com/">
	<button type="submit" class="icon-search"><span class="visuallyhidden">search</span></button>
	<label>
		<span class="visuallyhidden">Search jQuery UI API Documentation</span>
		<span class="algolia-autocomplete" style="position: relative; display: inline-block; direction: ltr;"><input type="text" name="s" value="" placeholder="Search" class="ds-input" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-label="search input" aria-owns="algolia-autocomplete-listbox-0" dir="auto" style="position: relative; vertical-align: top;"><pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: &quot;Lucida Grande&quot;, Lucida, Verdana, sans-serif; font-size: 12px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: normal; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre><span class="ds-dropdown-menu" role="listbox" id="algolia-autocomplete-listbox-0" style="position: absolute; top: 100%; z-index: 100; display: none; left: 0px; right: auto;"><div class="ds-dataset-1"></div></span></span>
	</label>
</form>
	</nav>

	<div id="content-wrapper" class="clearfix row">

<div class="content-right twelve columns">
	<div id="content">
					
<article id="post-21" class="post-21 post type-post status-publish format-standard hentry category-widgets">
	<header class="entry-header">
		<h1 class="entry-title">Datepicker Widget</h1>
		<hr>
				<div class="entry-meta">
			Categories: <span class="category"><a href="https://api.jqueryui.com/category/widgets/">Widgets</a></span>		</div><!-- .entry-meta -->
			</header><!-- .entry-header -->

	<div class="entry-content">
		<article id="datepicker1" class="entry widget"><h2 class="section-title">
<span>Datepicker Widget</span><span class="version-details">version added: 1.0</span>
</h2>
<div class="entry-wrapper">
<p class="desc"><strong>Description: </strong>Select a date from a popup or inline calendar</p>
<section id="quick-nav"><header><h2>QuickNav<a href="https://api.jqueryui.com/datepicker/#entry-examples">Examples</a>
</h2></header><div class="quick-nav-section">
<h3>Options</h3>
<div><a href="https://api.jqueryui.com/datepicker/#option-altField">altField</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-altFormat">altFormat</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-appendText">appendText</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-autoSize">autoSize</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-beforeShow">beforeShow</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-beforeShowDay">beforeShowDay</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-buttonImage">buttonImage</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-buttonImageOnly">buttonImageOnly</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-buttonText">buttonText</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-calculateWeek">calculateWeek</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-changeMonth">changeMonth</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-changeYear">changeYear</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-closeText">closeText</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-constrainInput">constrainInput</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-currentText">currentText</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-dateFormat">dateFormat</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-dayNames">dayNames</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-dayNamesMin">dayNamesMin</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-dayNamesShort">dayNamesShort</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-defaultDate">defaultDate</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-duration">duration</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-firstDay">firstDay</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-gotoCurrent">gotoCurrent</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-hideIfNoPrevNext">hideIfNoPrevNext</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-isRTL">isRTL</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-maxDate">maxDate</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-minDate">minDate</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-monthNames">monthNames</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-monthNamesShort">monthNamesShort</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-navigationAsDateFormat">navigationAsDateFormat</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-nextText">nextText</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-numberOfMonths">numberOfMonths</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-onChangeMonthYear">onChangeMonthYear</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-onClose">onClose</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-onSelect">onSelect</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-onUpdateDatepicker">onUpdateDatepicker</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-prevText">prevText</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-selectOtherMonths">selectOtherMonths</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-shortYearCutoff">shortYearCutoff</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-showAnim">showAnim</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-showButtonPanel">showButtonPanel</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-showCurrentAtPos">showCurrentAtPos</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-showMonthAfterYear">showMonthAfterYear</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-showOn">showOn</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-showOptions">showOptions</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-showOtherMonths">showOtherMonths</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-showWeek">showWeek</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-stepMonths">stepMonths</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-weekHeader">weekHeader</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-yearRange">yearRange</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#option-yearSuffix">yearSuffix</a></div>
</div>
<div class="quick-nav-section">
<h3>Methods</h3>
<div><a href="https://api.jqueryui.com/datepicker/#method-destroy">destroy</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#method-dialog">dialog</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#method-getDate">getDate</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#method-hide">hide</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#method-isDisabled">isDisabled</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#method-option">option</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#method-refresh">refresh</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#method-setDate">setDate</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#method-show">show</a></div>
<div><a href="https://api.jqueryui.com/datepicker/#method-widget">widget</a></div>
</div>
<div class="quick-nav-section"><h3>Events</h3></div></section><div class="longdesc" id="entry-longdesc">
		<p>The jQuery UI Datepicker is a highly configurable plugin that adds datepicker functionality to your pages. You can customize the date format and language, restrict the selectable date ranges and add in buttons and other navigation options easily.</p>

		<p>By default, the datepicker calendar opens in a small overlay when the associated text field gains focus. For an inline calendar, simply attach the datepicker to a div or span.</p>

		<h3>Keyboard interaction</h3>
		<p>While the datepicker is open, the following key commands are available:</p>
		<ul>
			<li>
<code>PAGE UP</code>: Move to the previous month.</li>
			<li>
<code>PAGE DOWN</code>: Move to the next month.</li>
			<li>
<code>CTRL</code> + <code>PAGE UP</code>: Move to the previous year.</li>
			<li>
<code>CTRL</code> + <code>PAGE DOWN</code>: Move to the next year.</li>
			<li>
<code>CTRL</code> + <code>HOME</code>: Open the datepicker if closed.</li>
			<li>
<code>CTRL</code>/<code>COMMAND</code> + <code>HOME</code>: Move to the current month.</li>
			<li>
<code>CTRL</code>/<code>COMMAND</code> + <code>LEFT</code>: Move to the previous day.</li>
			<li>
<code>CTRL</code>/<code>COMMAND</code> + <code>RIGHT</code>: Move to the next day.</li>
			<li>
<code>CTRL</code>/<code>COMMAND</code> + <code>UP</code>: Move to the previous week.</li>
			<li>
<code>CTRL</code>/<code>COMMAND</code> + <code>DOWN</code>: Move to the next week.</li>
			<li>
<code>ENTER</code>: Select the focused date.</li>
			<li>
<code>CTRL</code>/<code>COMMAND</code> + <code>END</code>: Close the datepicker and erase the date.</li>
			<li>
<code>ESCAPE</code>: Close the datepicker without selection.</li>
		</ul>

		<h3 id="utility-functions">Utility functions</h3>

		<h4 id="utility-setDefaults">$.datepicker.setDefaults( options )</h4>
		<p>Change the default options for all date pickers.</p>
		<p>Use the <a href="https://api.jqueryui.com/datepicker/#method-option"><code>option()</code></a> method to change options for individual instances.</p>
		<div>
			<strong>Code examples:</strong>
			<p>Set all date pickers to open on focus or a click on an icon.</p>
			<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
						<div class="line n6">6</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$.datepicker.setDefaults({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">showOn</span>: <span class="hljs-string">"both"</span>,</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">buttonImageOnly</span>: <span class="hljs-literal">true</span>,</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">buttonImage</span>: <span class="hljs-string">"calendar.gif"</span>,</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">buttonText</span>: <span class="hljs-string">"Calendar"</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

			<p>Set all date pickers to have French text.</p>
			<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$.datepicker.setDefaults( $.datepicker.regional[ <span class="hljs-string">"fr"</span> ] );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

		</div>

		<h4 id="utility-formatDate">$.datepicker.formatDate( format, date, options )</h4>
		<p>Format a date into a string value with a specified format.</p>
		<p>The format can be combinations of the following:</p>
		<ul>
			<li>d - day of month (no leading zero)</li>
			<li>dd - day of month (two digit)</li>
			<li>o - day of the year (no leading zeros)</li>
			<li>oo - day of the year (three digit)</li>
			<li>D - day name short</li>
			<li>DD - day name long</li>
			<li>m - month of year (no leading zero)</li>
			<li>mm - month of year (two digit)</li>
			<li>M - month name short</li>
			<li>MM - month name long</li>
			<li>y - year (two digit)</li>
			<li>yy - year (four digit)</li>
			<li>@ - Unix timestamp (ms since 01/01/1970)</li>
			<li> ! - Windows ticks (100ns since 01/01/0001)</li>
			<li>'...' - literal text</li>
			<li>'' - single quote</li>
			<li>anything else - literal text</li>
		</ul>
		<p>There are also a number of predefined standard date formats available from <code>$.datepicker</code>:</p>
		<ul>
			<li>ATOM - 'yy-mm-dd' (Same as RFC 3339/ISO 8601)</li>
			<li>COOKIE - 'D, dd M yy'</li>
			<li>ISO_8601 - 'yy-mm-dd'</li>
			<li>RFC_822 - 'D, d M y' (See RFC 822)</li>
			<li>RFC_850 - 'DD, dd-M-y' (See RFC 850)</li>
			<li>RFC_1036 - 'D, d M y' (See RFC 1036)</li>
			<li>RFC_1123 - 'D, d M yy' (See RFC 1123)</li>
			<li>RFC_2822 - 'D, d M yy' (See RFC 2822)</li>
			<li>RSS - 'D, d M y' (Same as RFC 822)</li>
			<li>TICKS - '!'</li>
			<li>TIMESTAMP - '@'</li>
			<li>W3C - 'yy-mm-dd' (Same as ISO 8601)</li>
		</ul>
		<div>
			<strong>Code examples:</strong>
			<p>Display the date in ISO format. Produces "2007-01-26".</p>
			<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$.datepicker.formatDate( <span class="hljs-string">"yy-mm-dd"</span>, <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>( <span class="hljs-number">2007</span>, <span class="hljs-number">1</span> - <span class="hljs-number">1</span>, <span class="hljs-number">26</span> ) );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

			<p>Display the date in expanded French format. Produces "Samedi, Juillet 14, 2007".</p>
			<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
						<div class="line n6">6</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$.datepicker.formatDate( <span class="hljs-string">"DD, MM d, yy"</span>, <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>( <span class="hljs-number">2007</span>, <span class="hljs-number">7</span> - <span class="hljs-number">1</span>, <span class="hljs-number">14</span> ), {</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">dayNamesShort</span>: $.datepicker.regional[ <span class="hljs-string">"fr"</span> ].dayNamesShort,</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">dayNames</span>: $.datepicker.regional[ <span class="hljs-string">"fr"</span> ].dayNames,</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">monthNamesShort</span>: $.datepicker.regional[ <span class="hljs-string">"fr"</span> ].monthNamesShort,</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">monthNames</span>: $.datepicker.regional[ <span class="hljs-string">"fr"</span> ].monthNames</code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

		</div>

		<h4 id="utility-parseDate">$.datepicker.parseDate( format, value, options )</h4>
		<p>Extract a date from a string value with a specified format.</p>
		<p>The format can be combinations of the following:</p>
		<ul>
			<li>d - day of month (no leading zero)</li>
			<li>dd - day of month (two digit)</li>
			<li>o - day of year (no leading zeros)</li>
			<li>oo - day of year (three digit)</li>
			<li>D - day name short</li>
			<li>DD - day name long</li>
			<li>m - month of year (no leading zero)</li>
			<li>mm - month of year (two digit)</li>
			<li>M - month name short</li>
			<li>MM - month name long</li>
			<li>y - year (two digit)</li>
			<li>yy - year (four digit)</li>
			<li>@ - Unix timestamp (ms since 01/01/1970)</li>
			<li> ! - Windows ticks (100ns since 01/01/0001)</li>
			<li>'...' - literal text</li>
			<li>'' - single quote</li>
			<li>anything else - literal text</li>
		</ul>
		<p>A number of exceptions may be thrown:</p>
		<ul>
			<li>'Invalid arguments' if either format or value is null</li>
			<li>'Missing number at position nn' if format indicated a numeric value that is not then found</li>
			<li>'Unknown name at position nn' if format indicated day or month name that is not then found</li>
			<li>'Unexpected literal at position nn' if format indicated a literal value that is not then found</li>
			<li>'Invalid date' if the date is invalid, such as '31/02/2007'</li>
		</ul>
		<div>
			<strong>Code examples:</strong>
			<p>Extract a date in ISO format.</p>
			<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$.datepicker.parseDate( <span class="hljs-string">"yy-mm-dd"</span>, <span class="hljs-string">"2007-01-26"</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

			<p>Extract a date in expanded French format.</p>
			<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
						<div class="line n6">6</div>
					
						<div class="line n7">7</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$.datepicker.parseDate( <span class="hljs-string">"DD, MM d, yy"</span>, <span class="hljs-string">"Samedi, Juillet 14, 2007"</span>, {</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">shortYearCutoff</span>: <span class="hljs-number">20</span>,</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">dayNamesShort</span>: $.datepicker.regional[ <span class="hljs-string">"fr"</span> ].dayNamesShort,</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">dayNames</span>: $.datepicker.regional[ <span class="hljs-string">"fr"</span> ].dayNames,</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">monthNamesShort</span>: $.datepicker.regional[ <span class="hljs-string">"fr"</span> ].monthNamesShort,</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">monthNames</span>: $.datepicker.regional[ <span class="hljs-string">"fr"</span> ].monthNames</code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

		</div>

		<h4 id="utility-iso8601Week">$.datepicker.iso8601Week( date )</h4>
		<p>Determine the week of the year for a given date: 1 to 53.</p>
		<p>This function uses the ISO 8601 definition of a week: weeks start on a Monday and the first week of the year contains January 4. This means that up to three days from the previous year may be included in the of first week of the current year, and that up to three days from the current year may be included in the last week of the previous year.</p>
		<p>This function is the default implementation for the <a href="https://api.jqueryui.com/datepicker/#option-calculateWeek"><code>calculateWeek</code></a> option.</p>
		<div>
			<strong>Code examples:</strong>
			<p>Find the week of the year for a date.</p>
			<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$.datepicker.iso8601Week( <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>( <span class="hljs-number">2007</span>, <span class="hljs-number">1</span> - <span class="hljs-number">1</span>, <span class="hljs-number">26</span> ) );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

		</div>

		<h4 id="utility-noWeekends">$.datepicker.noWeekends</h4>
		<p>Set as beforeShowDay function to prevent selection of weekends.</p>
		<p>We can provide the <code>noWeekends()</code> function into the <a href="https://api.jqueryui.com/datepicker/#option-beforeShowDay"><code>beforeShowDay</code></a> option which will calculate all the weekdays and provide an array of <code>true</code>/<code>false</code> values indicating whether a date is selectable.</p>
		<div>
			<strong>Code examples:</strong>
			<p>Set the DatePicker so no weekend is selectable</p>
			<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">"#datepicker"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">beforeShowDay</span>: $.datepicker.noWeekends</code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

		</div>

		<h3>Localization</h3>
		<p>Datepicker provides support for localizing its content to cater for different languages and date formats. Each localization is contained within its own file with the language code appended to the name, e.g., <code>jquery.ui.datepicker-fr.js</code> for French. The desired localization file should be included after the main datepicker code. Each localization file adds its options to the set of available localizations and automatically applies them as defaults for all instances. Localization files can be found at <a href="https://github.com/jquery/jquery-ui/tree/master/ui/i18n">https://github.com/jquery/jquery-ui/tree/master/ui/i18n</a>.</p>
		<p>The <code>$.datepicker.regional</code> attribute holds an array of localizations, indexed by language code, with <code>""</code> referring to the default (English). Each entry is an object with the following attributes: <code>closeText</code>, <code>prevText</code>, <code>nextText</code>, <code>currentText</code>, <code>monthNames</code>, <code>monthNamesShort</code>, <code>dayNames</code>, <code>dayNamesShort</code>, <code>dayNamesMin</code>, <code>weekHeader</code>, <code>dateFormat</code>, <code>firstDay</code>, <code>isRTL</code>, <code>showMonthAfterYear</code>, and <code>yearSuffix</code>.</p>
		<p>You can restore the default localizations with:</p>
		<code>$.datepicker.setDefaults( $.datepicker.regional[ "" ] );</code>
		<p>And can then override an individual datepicker for a specific locale:</p>
		<code>$( selector ).datepicker( $.datepicker.regional[ "fr" ] );</code>

		<div>
	<h3 id="theming">Theming</h3>

	<p>The datepicker widget uses the <a href="https://api.jqueryui.com/theming/css-framework/">jQuery UI CSS framework</a> to style its look and feel. If datepicker specific styling is needed, the following CSS class names can be used for overrides or as keys for the <a href="https://api.jqueryui.com/datepicker/#option-classes"><code>classes</code> option</a>:</p>
</div>

		<ul>
			<li>
				<code>ui-datepicker</code>: The outer container of the datepicker. If the datepicker is inline, this element will additionally have a <code>ui-datepicker-inline</code> class. If the <a href="https://api.jqueryui.com/datepicker/#option-isRTL"><code>isRTL</code></a> option is set, this element will additionally have a class of <code>ui-datepicker-rtl</code>.
				<ul>
					<li>
						<code>ui-datepicker-header</code>: The container for the datepicker's header.
						<ul>
							<li>
<code>ui-datepicker-prev</code>: The control used to select previous months.</li>
							<li>
<code>ui-datepicker-next</code>: The control used to select subsequent months.</li>
							<li>
								<code>ui-datepicker-title</code>: The container for the datepicker's title containing the month and year.
								<ul>
									<li>
<code>ui-datepicker-month</code>: The textual display of the month or a <code>&lt;select&gt;</code> element if the <a href="https://api.jqueryui.com/datepicker/#option-changeMonth"><code>changeMonth</code></a> option is set.</li>
									<li>
<code>ui-datepicker-year</code>: The textual display of the year or a <code>&lt;select&gt;</code> element if the <a href="https://api.jqueryui.com/datepicker/#option-changeYear"><code>changeYear</code></a> option is set.</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<code>ui-datepicker-calendar</code>: The table that contains the calendar itself.
						<ul>
							<li>
<code>ui-datepicker-week-end</code>: Cells containing weekend days.</li>
							<li>
<code>ui-datepicker-other-month</code>: Cells containing days that occur in a month other than the currently selected month.</li>
							<li>
<code>ui-datepicker-unselectable</code>: Cells containing days that are not selectable by the user.</li>
							<li>
<code>ui-datepicker-current-day</code>: The cell containing the selected day.</li>
							<li>
<code>ui-datepicker-today</code>: The cell containing today's date.</li>
						</ul>
					</li>
					<li>
						<code>ui-datepicker-buttonpane</code>: The buttonpane that is used when the <a href="https://api.jqueryui.com/datepicker/#option-showButtonPanel"><code>showButtonPanel</code></a> option is set.
						<ul>
							<li>
<code>ui-datepicker-current</code>: The button used to select today's date.</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>

		<p>If the <a href="https://api.jqueryui.com/datepicker/#option-numberOfMonths"><code>numberOfMonths</code></a> option is used to display multiple months at once, a number of additional classes are used:</p>

		<ul>
			<li>
				<code>ui-datepicker-multi</code>: The outermost container of a multiple month datepicker. This element can additionally have a <code>ui-datepicker-multi-2</code>, <code>ui-datepicker-multi-3</code>, or <code>ui-datepicker-multi-4</code> class name depending on the number of months to display.
				<ul>
					<li>
<code>ui-datepicker-group</code>: Individual pickers within the group. This element will additionally have a <code>ui-datepicker-group-first</code>, <code>ui-datepicker-group-middle</code>, or <code>ui-datepicker-group-last</code> class name depending on its position within the group.</li>
				</ul>
			</li>
		</ul>

		<h3>Dependencies</h3>
		<ul>
			<li><a href="https://api.jqueryui.com/category/ui-core/">UI Core</a></li>
			<li>
<a href="https://api.jqueryui.com/category/effects-core/">Effects Core</a> (optional; for use with the <a href="https://api.jqueryui.com/datepicker/#option-showAnim"><code>showAnim</code></a> option)</li>
		</ul>
	</div>
<h3>Additional Notes:</h3>
<div class="longdesc"><ul>
<li>
			This widget requires some functional CSS, otherwise it won't work. If you build a custom theme, use the widget's specific CSS file as a starting point.
		</li>
<li>
			This widget manipulates its element's value programmatically, therefore a native <code>change</code> event may not be fired when the element's value changes.
		</li>
<li>
		Creating a datepicker on an <code>&lt;input type="date"&gt;</code> is not supported due to a UI conflict with the native picker.
	</li>
</ul></div>
<section id="options"><header><h2>Options</h2></header><div id="option-altField" class="api-item first-item">
<h3>altField&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Selector">Selector</a> or <a href="http://api.jquery.com/Types/#jQuery">jQuery</a> or <a href="http://api.jquery.com/Types/#Element">Element</a>
</div>
<div class="default">
<strong>Default: </strong><code>""</code>
</div>
<div>An input element that is to be updated with the selected date from the datepicker. Use the <a href="https://api.jqueryui.com/datepicker/#option-altFormat"><code>altFormat</code></a> option to change the format of the date within this field. Leave as blank for no alternate field.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>altField</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">altField</span>: <span class="hljs-string">"#actualDate"</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>altField</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> altField = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"altField"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"altField"</span>, <span class="hljs-string">"#actualDate"</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-altFormat" class="api-item">
<h3>altFormat&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#String">String</a>
</div>
<div class="default">
<strong>Default: </strong><code>""</code>
</div>
<div>The <a href="https://api.jqueryui.com/datepicker/#option-dateFormat"><code>dateFormat</code></a> to be used for the <a href="https://api.jqueryui.com/datepicker/#option-altField"><code>altField</code></a> option. This allows one date format to be shown to the user for selection purposes, while a different format is actually sent behind the scenes. For a full list of the possible formats see the <a href="https://api.jqueryui.com/datepicker/#utility-formatDate"><code>formatDate</code></a> function</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>altFormat</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">altFormat</span>: <span class="hljs-string">"yy-mm-dd"</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>altFormat</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> altFormat = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"altFormat"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"altFormat"</span>, <span class="hljs-string">"yy-mm-dd"</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-appendText" class="api-item">
<h3>appendText&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#String">String</a>
</div>
<div class="default">
<strong>Default: </strong><code>""</code>
</div>
<div>The text to display after each date field, e.g., to show the required format.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>appendText</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">appendText</span>: <span class="hljs-string">"(yyyy-mm-dd)"</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>appendText</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> appendText = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"appendText"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"appendText"</span>, <span class="hljs-string">"(yyyy-mm-dd)"</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-autoSize" class="api-item">
<h3>autoSize&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Boolean">Boolean</a>
</div>
<div class="default">
<strong>Default: </strong><code>false</code>
</div>
<div>Set to <code>true</code> to automatically resize the input field to accommodate dates in the current <a href="https://api.jqueryui.com/datepicker/#option-dateFormat"><code>dateFormat</code></a>.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>autoSize</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">autoSize</span>: <span class="hljs-literal">true</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>autoSize</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> autoSize = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"autoSize"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"autoSize"</span>, <span class="hljs-literal">true</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-beforeShow" class="api-item">
<h3>beforeShow&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Function">Function</a>( <a href="http://api.jquery.com/Types/#Element">Element</a> input, <a href="http://api.jquery.com/Types/#Object">Object</a> inst )</div>
<div class="default">
<strong>Default: </strong><code>null</code>
</div>
<div>A function that takes an input field and current datepicker instance and returns an options object to update the datepicker with. It is called just before the datepicker is displayed.</div>
</div>
<div id="option-beforeShowDay" class="api-item">
<h3>beforeShowDay&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Function">Function</a>( <a href="http://api.jquery.com/Types/#Date">Date</a> date )</div>
<div class="default">
<strong>Default: </strong><code>null</code>
</div>
<div>A function that takes a date as a parameter and must return an array with:
				<ul>
					<li>
<code>[0]</code>: <code>true</code>/<code>false</code> indicating whether or not this date is selectable</li>
					<li>
<code>[1]</code>: a CSS class name to add to the date's cell or <code>""</code> for the default presentation</li>
					<li>
<code>[2]</code>: an optional popup tooltip for this date</li>
				</ul>
				The function is called for each day in the datepicker before it is displayed.</div>
</div>
<div id="option-buttonImage" class="api-item">
<h3>buttonImage&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#String">String</a>
</div>
<div class="default">
<strong>Default: </strong><code>""</code>
</div>
<div>A URL of an image to use to display the datepicker when the <a href="https://api.jqueryui.com/datepicker/#option-showOn"><code>showOn</code></a> option is set to <code>"button"</code> or <code>"both"</code>. If set, the <a href="https://api.jqueryui.com/datepicker/#option-buttonText"><code>buttonText</code></a> option becomes the <code>alt</code> value and is not directly displayed.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>buttonImage</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">buttonImage</span>: <span class="hljs-string">"/images/datepicker.gif"</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>buttonImage</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> buttonImage = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"buttonImage"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"buttonImage"</span>, <span class="hljs-string">"/images/datepicker.gif"</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-buttonImageOnly" class="api-item">
<h3>buttonImageOnly&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Boolean">Boolean</a>
</div>
<div class="default">
<strong>Default: </strong><code>false</code>
</div>
<div>Whether the button image should be rendered by itself instead of inside a button element. This option is only relevant if the <a href="https://api.jqueryui.com/datepicker/#option-buttonImage"><code>buttonImage</code></a> option has also been set.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>buttonImageOnly</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">buttonImageOnly</span>: <span class="hljs-literal">true</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>buttonImageOnly</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> buttonImageOnly = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"buttonImageOnly"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"buttonImageOnly"</span>, <span class="hljs-literal">true</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-buttonText" class="api-item">
<h3>buttonText&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#String">String</a>
</div>
<div class="default">
<strong>Default: </strong><code>"..."</code>
</div>
<div>The text to display on the trigger button. Use in conjunction with the <a href="https://api.jqueryui.com/datepicker/#option-showOn"><code>showOn</code></a> option set to <code>"button"</code> or <code>"both"</code>.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>buttonText</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">buttonText</span>: <span class="hljs-string">"Choose"</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>buttonText</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> buttonText = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"buttonText"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"buttonText"</span>, <span class="hljs-string">"Choose"</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-calculateWeek" class="api-item">
<h3>calculateWeek&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Function">Function</a>()</div>
<div class="default">
<strong>Default: </strong><code>jQuery.datepicker.iso8601Week</code>
</div>
<div>A function to calculate the week of the year for a given date. The default implementation uses the ISO 8601 definition: weeks start on a Monday; the first week of the year contains the first Thursday of the year.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>calculateWeek</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">calculateWeek</span>: myWeekCalc</code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>calculateWeek</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> calculateWeek = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"calculateWeek"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"calculateWeek"</span>, myWeekCalc );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-changeMonth" class="api-item">
<h3>changeMonth&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Boolean">Boolean</a>
</div>
<div class="default">
<strong>Default: </strong><code>false</code>
</div>
<div>Whether the month should be rendered as a dropdown instead of text.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>changeMonth</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">changeMonth</span>: <span class="hljs-literal">true</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>changeMonth</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> changeMonth = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"changeMonth"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"changeMonth"</span>, <span class="hljs-literal">true</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-changeYear" class="api-item">
<h3>changeYear&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Boolean">Boolean</a>
</div>
<div class="default">
<strong>Default: </strong><code>false</code>
</div>
<div>Whether the year should be rendered as a dropdown instead of text. Use the <a href="https://api.jqueryui.com/datepicker/#option-yearRange"><code>yearRange</code></a> option to control which years are made available for selection.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>changeYear</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">changeYear</span>: <span class="hljs-literal">true</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>changeYear</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> changeYear = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"changeYear"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"changeYear"</span>, <span class="hljs-literal">true</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-closeText" class="api-item">
<h3>closeText&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#String">String</a>
</div>
<div class="default">
<strong>Default: </strong><code>"Done"</code>
</div>
<div>The text to display for the close link. Use the <a href="https://api.jqueryui.com/datepicker/#option-showButtonPanel"><code>showButtonPanel</code></a> option to display this button.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>closeText</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">closeText</span>: <span class="hljs-string">"Close"</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>closeText</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> closeText = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"closeText"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"closeText"</span>, <span class="hljs-string">"Close"</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-constrainInput" class="api-item">
<h3>constrainInput&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Boolean">Boolean</a>
</div>
<div class="default">
<strong>Default: </strong><code>true</code>
</div>
<div>When <code>true</code>, entry in the input field is constrained to those characters allowed by the current <a href="https://api.jqueryui.com/datepicker/#option-dateFormat"><code>dateFormat</code></a> option.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>constrainInput</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">constrainInput</span>: <span class="hljs-literal">false</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>constrainInput</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> constrainInput = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"constrainInput"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"constrainInput"</span>, <span class="hljs-literal">false</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-currentText" class="api-item">
<h3>currentText&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#String">String</a>
</div>
<div class="default">
<strong>Default: </strong><code>"Today"</code>
</div>
<div>The text to display for the current day link. Use the <a href="https://api.jqueryui.com/datepicker/#option-showButtonPanel"><code>showButtonPanel</code></a> option to display this button.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>currentText</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">currentText</span>: <span class="hljs-string">"Now"</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>currentText</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> currentText = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"currentText"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"currentText"</span>, <span class="hljs-string">"Now"</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-dateFormat" class="api-item">
<h3>dateFormat&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#String">String</a>
</div>
<div class="default">
<strong>Default: </strong><code>"mm/dd/yy"</code>
</div>
<div>The format for parsed and displayed dates. For a full list of the possible formats see the <code><a href="https://api.jqueryui.com/datepicker/#utility-formatDate"><code>formatDate</code></a></code> function.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>dateFormat</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">dateFormat</span>: <span class="hljs-string">"yy-mm-dd"</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>dateFormat</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> dateFormat = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"dateFormat"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"dateFormat"</span>, <span class="hljs-string">"yy-mm-dd"</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-dayNames" class="api-item">
<h3>dayNames&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Array">Array</a>
</div>
<div class="default">
<strong>Default: </strong><code>[ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]</code>
</div>
<div>The list of long day names, starting from Sunday, for use as requested via the <a href="https://api.jqueryui.com/datepicker/#option-dateFormat"><code>dateFormat</code></a> option.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>dayNames</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">dayNames</span>: [ <span class="hljs-string">"Dimanche"</span>, <span class="hljs-string">"Lundi"</span>, <span class="hljs-string">"Mardi"</span>, <span class="hljs-string">"Mercredi"</span>, <span class="hljs-string">"Jeudi"</span>, <span class="hljs-string">"Vendredi"</span>, <span class="hljs-string">"Samedi"</span> ]</code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>dayNames</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> dayNames = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"dayNames"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"dayNames"</span>, [ <span class="hljs-string">"Dimanche"</span>, <span class="hljs-string">"Lundi"</span>, <span class="hljs-string">"Mardi"</span>, <span class="hljs-string">"Mercredi"</span>, <span class="hljs-string">"Jeudi"</span>, <span class="hljs-string">"Vendredi"</span>, <span class="hljs-string">"Samedi"</span> ] );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-dayNamesMin" class="api-item">
<h3>dayNamesMin&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Array">Array</a>
</div>
<div class="default">
<strong>Default: </strong><code>[ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ]</code>
</div>
<div>The list of minimised day names, starting from Sunday, for use as column headers within the datepicker.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>dayNamesMin</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">dayNamesMin</span>: [ <span class="hljs-string">"Di"</span>, <span class="hljs-string">"Lu"</span>, <span class="hljs-string">"Ma"</span>, <span class="hljs-string">"Me"</span>, <span class="hljs-string">"Je"</span>, <span class="hljs-string">"Ve"</span>, <span class="hljs-string">"Sa"</span> ]</code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>dayNamesMin</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> dayNamesMin = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"dayNamesMin"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"dayNamesMin"</span>, [ <span class="hljs-string">"Di"</span>, <span class="hljs-string">"Lu"</span>, <span class="hljs-string">"Ma"</span>, <span class="hljs-string">"Me"</span>, <span class="hljs-string">"Je"</span>, <span class="hljs-string">"Ve"</span>, <span class="hljs-string">"Sa"</span> ] );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-dayNamesShort" class="api-item">
<h3>dayNamesShort&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Array">Array</a>
</div>
<div class="default">
<strong>Default: </strong><code>[ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ]</code>
</div>
<div>The list of abbreviated day names, starting from Sunday, for use as requested via the <a href="https://api.jqueryui.com/datepicker/#option-dateFormat"><code>dateFormat</code></a> option.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>dayNamesShort</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">dayNamesShort</span>: [ <span class="hljs-string">"Dim"</span>, <span class="hljs-string">"Lun"</span>, <span class="hljs-string">"Mar"</span>, <span class="hljs-string">"Mer"</span>, <span class="hljs-string">"Jeu"</span>, <span class="hljs-string">"Ven"</span>, <span class="hljs-string">"Sam"</span> ]</code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>dayNamesShort</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> dayNamesShort = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"dayNamesShort"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"dayNamesShort"</span>, [ <span class="hljs-string">"Dim"</span>, <span class="hljs-string">"Lun"</span>, <span class="hljs-string">"Mar"</span>, <span class="hljs-string">"Mer"</span>, <span class="hljs-string">"Jeu"</span>, <span class="hljs-string">"Ven"</span>, <span class="hljs-string">"Sam"</span> ] );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-defaultDate" class="api-item">
<h3>defaultDate&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Date">Date</a> or <a href="http://api.jquery.com/Types/#Number">Number</a> or <a href="http://api.jquery.com/Types/#String">String</a>
</div>
<div class="default">
<strong>Default: </strong><code>null</code>
</div>
<div>Set the date to highlight on first opening if the field is blank. Specify either an actual date via a Date object or as a string in the current <a href="https://api.jqueryui.com/datepicker/#option-dateFormat"><code>dateFormat</code></a>, or a number of days from today (e.g. +7) or a string of values and periods ('y' for years, 'm' for months, 'w' for weeks, 'd' for days, e.g. '+1m +7d'), or null for today.</div>
<strong>Multiple types supported:</strong><ul>
<li>
<strong>Date</strong>: A date object containing the default date.</li>
<li>
<strong>Number</strong>: A number of days from today. For example <code>2</code> represents two days from today and <code>-1</code> represents yesterday.</li>
<li>
<strong>String</strong>: A string in the format defined by the <a href="https://api.jqueryui.com/datepicker/#option-dateFormat"><code>dateFormat</code></a> option, or a relative date. Relative dates must contain value and period pairs; valid periods are <code>"y"</code> for years, <code>"m"</code> for months, <code>"w"</code> for weeks, and <code>"d"</code> for days. For example, <code>"+1m +7d"</code> represents one month and seven days from today.</li>
</ul>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>defaultDate</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">defaultDate</span>: +<span class="hljs-number">7</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>defaultDate</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> defaultDate = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"defaultDate"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"defaultDate"</span>, +<span class="hljs-number">7</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-duration" class="api-item">
<h3>duration&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#"></a> or <a href="http://api.jquery.com/Types/#String">String</a>
</div>
<div class="default">
<strong>Default: </strong><code>"normal"</code>
</div>
<div>Control the speed at which the datepicker appears, it may be a time in milliseconds or a string representing one of the three predefined speeds ("slow", "normal", "fast").</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>duration</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">duration</span>: <span class="hljs-string">"slow"</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>duration</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> duration = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"duration"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"duration"</span>, <span class="hljs-string">"slow"</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-firstDay" class="api-item">
<h3>firstDay&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Integer">Integer</a>
</div>
<div class="default">
<strong>Default: </strong><code>0</code>
</div>
<div>Set the first day of the week: Sunday is <code>0</code>, Monday is <code>1</code>, etc.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>firstDay</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">firstDay</span>: <span class="hljs-number">1</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>firstDay</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> firstDay = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"firstDay"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"firstDay"</span>, <span class="hljs-number">1</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-gotoCurrent" class="api-item">
<h3>gotoCurrent&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Boolean">Boolean</a>
</div>
<div class="default">
<strong>Default: </strong><code>false</code>
</div>
<div>When <code>true</code>, the current day link moves to the currently selected date instead of today.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>gotoCurrent</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">gotoCurrent</span>: <span class="hljs-literal">true</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>gotoCurrent</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> gotoCurrent = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"gotoCurrent"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"gotoCurrent"</span>, <span class="hljs-literal">true</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-hideIfNoPrevNext" class="api-item">
<h3>hideIfNoPrevNext&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Boolean">Boolean</a>
</div>
<div class="default">
<strong>Default: </strong><code>false</code>
</div>
<div>Normally the previous and next links are disabled when not applicable (see the <a href="https://api.jqueryui.com/datepicker/#option-minDate"><code>minDate</code></a> and <a href="https://api.jqueryui.com/datepicker/#option-maxDate"><code>maxDate</code></a> options). You can hide them altogether by setting this attribute to <code>true</code>.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>hideIfNoPrevNext</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">hideIfNoPrevNext</span>: <span class="hljs-literal">true</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>hideIfNoPrevNext</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> hideIfNoPrevNext = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"hideIfNoPrevNext"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"hideIfNoPrevNext"</span>, <span class="hljs-literal">true</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-isRTL" class="api-item">
<h3>isRTL&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Boolean">Boolean</a>
</div>
<div class="default">
<strong>Default: </strong><code>false</code>
</div>
<div>Whether the current language is drawn from right to left.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>isRTL</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">isRTL</span>: <span class="hljs-literal">true</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>isRTL</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> isRTL = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"isRTL"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"isRTL"</span>, <span class="hljs-literal">true</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-maxDate" class="api-item">
<h3>maxDate&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Date">Date</a> or <a href="http://api.jquery.com/Types/#Number">Number</a> or <a href="http://api.jquery.com/Types/#String">String</a>
</div>
<div class="default">
<strong>Default: </strong><code>null</code>
</div>
<div>The maximum selectable date. When set to <code>null</code>, there is no maximum.</div>
<strong>Multiple types supported:</strong><ul>
<li>
<strong>Date</strong>: A date object containing the maximum date.</li>
<li>
<strong>Number</strong>: A number of days from today. For example <code>2</code> represents two days from today and <code>-1</code> represents yesterday.</li>
<li>
<strong>String</strong>: A string in the format defined by the <a href="https://api.jqueryui.com/datepicker/#option-dateFormat"><code>dateFormat</code></a> option, or a relative date. Relative dates must contain value and period pairs; valid periods are <code>"y"</code> for years, <code>"m"</code> for months, <code>"w"</code> for weeks, and <code>"d"</code> for days. For example, <code>"+1m +7d"</code> represents one month and seven days from today.</li>
</ul>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>maxDate</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">maxDate</span>: <span class="hljs-string">"+1m +1w"</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>maxDate</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> maxDate = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"maxDate"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"maxDate"</span>, <span class="hljs-string">"+1m +1w"</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-minDate" class="api-item">
<h3>minDate&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Date">Date</a> or <a href="http://api.jquery.com/Types/#Number">Number</a> or <a href="http://api.jquery.com/Types/#String">String</a>
</div>
<div class="default">
<strong>Default: </strong><code>null</code>
</div>
<div>The minimum selectable date. When set to <code>null</code>, there is no minimum.</div>
<strong>Multiple types supported:</strong><ul>
<li>
<strong>Date</strong>: A date object containing the minimum date.</li>
<li>
<strong>Number</strong>: A number of days from today. For example <code>2</code> represents two days from today and <code>-1</code> represents yesterday.</li>
<li>
<strong>String</strong>: A string in the format defined by the <a href="https://api.jqueryui.com/datepicker/#option-dateFormat"><code>dateFormat</code></a> option, or a relative date. Relative dates must contain value and period pairs; valid periods are <code>"y"</code> for years, <code>"m"</code> for months, <code>"w"</code> for weeks, and <code>"d"</code> for days. For example, <code>"+1m +7d"</code> represents one month and seven days from today.</li>
</ul>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>minDate</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2007</span>, <span class="hljs-number">1</span> - <span class="hljs-number">1</span>, <span class="hljs-number">1</span>)</code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>minDate</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> minDate = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"minDate"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"minDate"</span>, <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2007</span>, <span class="hljs-number">1</span> - <span class="hljs-number">1</span>, <span class="hljs-number">1</span>) );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-monthNames" class="api-item">
<h3>monthNames&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Array">Array</a>
</div>
<div class="default">
<strong>Default: </strong><code>[ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]</code>
</div>
<div>The list of full month names, for use as requested via the <a href="https://api.jqueryui.com/datepicker/#option-dateFormat"><code>dateFormat</code></a> option.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>monthNames</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">monthNames</span>: [ <span class="hljs-string">"Januar"</span>, <span class="hljs-string">"Februar"</span>, <span class="hljs-string">"Marts"</span>, <span class="hljs-string">"April"</span>, <span class="hljs-string">"Maj"</span>, <span class="hljs-string">"Juni"</span>, <span class="hljs-string">"Juli"</span>, <span class="hljs-string">"August"</span>, <span class="hljs-string">"September"</span>, <span class="hljs-string">"Oktober"</span>, <span class="hljs-string">"November"</span>, <span class="hljs-string">"December"</span> ]</code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>monthNames</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> monthNames = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"monthNames"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"monthNames"</span>, [ <span class="hljs-string">"Januar"</span>, <span class="hljs-string">"Februar"</span>, <span class="hljs-string">"Marts"</span>, <span class="hljs-string">"April"</span>, <span class="hljs-string">"Maj"</span>, <span class="hljs-string">"Juni"</span>, <span class="hljs-string">"Juli"</span>, <span class="hljs-string">"August"</span>, <span class="hljs-string">"September"</span>, <span class="hljs-string">"Oktober"</span>, <span class="hljs-string">"November"</span>, <span class="hljs-string">"December"</span> ] );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-monthNamesShort" class="api-item">
<h3>monthNamesShort&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Array">Array</a>
</div>
<div class="default">
<strong>Default: </strong><code>[ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]</code>
</div>
<div>The list of abbreviated month names, as used in the month header on each datepicker and as requested via the <a href="https://api.jqueryui.com/datepicker/#option-dateFormat"><code>dateFormat</code></a> option.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>monthNamesShort</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">monthNamesShort</span>: [ <span class="hljs-string">"Jan"</span>, <span class="hljs-string">"Feb"</span>, <span class="hljs-string">"Mar"</span>, <span class="hljs-string">"Apr"</span>, <span class="hljs-string">"Maj"</span>, <span class="hljs-string">"Jun"</span>, <span class="hljs-string">"Jul"</span>, <span class="hljs-string">"Aug"</span>, <span class="hljs-string">"Sep"</span>, <span class="hljs-string">"Okt"</span>, <span class="hljs-string">"Nov"</span>, <span class="hljs-string">"Dec"</span> ]</code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>monthNamesShort</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> monthNamesShort = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"monthNamesShort"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"monthNamesShort"</span>, [ <span class="hljs-string">"Jan"</span>, <span class="hljs-string">"Feb"</span>, <span class="hljs-string">"Mar"</span>, <span class="hljs-string">"Apr"</span>, <span class="hljs-string">"Maj"</span>, <span class="hljs-string">"Jun"</span>, <span class="hljs-string">"Jul"</span>, <span class="hljs-string">"Aug"</span>, <span class="hljs-string">"Sep"</span>, <span class="hljs-string">"Okt"</span>, <span class="hljs-string">"Nov"</span>, <span class="hljs-string">"Dec"</span> ] );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-navigationAsDateFormat" class="api-item">
<h3>navigationAsDateFormat&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Boolean">Boolean</a>
</div>
<div class="default">
<strong>Default: </strong><code>false</code>
</div>
<div>Whether the <a href="https://api.jqueryui.com/datepicker/#option-currentText"><code>currentText</code></a>, <a href="https://api.jqueryui.com/datepicker/#option-prevText"><code>prevText</code></a> and <a href="https://api.jqueryui.com/datepicker/#option-nextText"><code>nextText</code></a> options should be parsed as dates by the <code><a href="https://api.jqueryui.com/datepicker/#utility-formatDate"><code>formatDate</code></a></code> function, allowing them to display the target month names for example.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>navigationAsDateFormat</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">navigationAsDateFormat</span>: <span class="hljs-literal">true</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>navigationAsDateFormat</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> navigationAsDateFormat = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"navigationAsDateFormat"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"navigationAsDateFormat"</span>, <span class="hljs-literal">true</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-nextText" class="api-item">
<h3>nextText&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#String">String</a>
</div>
<div class="default">
<strong>Default: </strong><code>"Next"</code>
</div>
<div>The text to display for the next month link. With the standard ThemeRoller styling, this value is replaced by an icon.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>nextText</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">nextText</span>: <span class="hljs-string">"Later"</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>nextText</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> nextText = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"nextText"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"nextText"</span>, <span class="hljs-string">"Later"</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-numberOfMonths" class="api-item">
<h3>numberOfMonths&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Number">Number</a> or <a href="http://api.jquery.com/Types/#Array">Array</a>
</div>
<div class="default">
<strong>Default: </strong><code>1</code>
</div>
<div>The number of months to show at once.</div>
<strong>Multiple types supported:</strong><ul>
<li>
<strong>Number</strong>: The number of months to display in a single row.</li>
<li>
<strong>Array</strong>: An array defining the number of rows and columns to display.</li>
</ul>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>numberOfMonths</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">numberOfMonths</span>: [ <span class="hljs-number">2</span>, <span class="hljs-number">3</span> ]</code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>numberOfMonths</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> numberOfMonths = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"numberOfMonths"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"numberOfMonths"</span>, [ <span class="hljs-number">2</span>, <span class="hljs-number">3</span> ] );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-onChangeMonthYear" class="api-item">
<h3>onChangeMonthYear&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Function">Function</a>( <a href="http://api.jquery.com/Types/#Integer">Integer</a> year, <a href="http://api.jquery.com/Types/#Integer">Integer</a> month, <a href="http://api.jquery.com/Types/#Object">Object</a> inst )</div>
<div class="default">
<strong>Default: </strong><code>null</code>
</div>
<div>Called when the datepicker moves to a new month and/or year. The function receives the selected year, month (1-12), and the datepicker instance as parameters. <code>this</code> refers to the associated input field.</div>
</div>
<div id="option-onClose" class="api-item">
<h3>onClose&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Function">Function</a>( <a href="http://api.jquery.com/Types/#String">String</a> dateText, <a href="http://api.jquery.com/Types/#Object">Object</a> inst )</div>
<div class="default">
<strong>Default: </strong><code>null</code>
</div>
<div>Called when the datepicker is closed, whether or not a date is selected. The function receives the selected date as text (<code>""</code> if none) and the datepicker instance as parameters. <code>this</code> refers to the associated input field.</div>
</div>
<div id="option-onSelect" class="api-item">
<h3>onSelect&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Function">Function</a>( <a href="http://api.jquery.com/Types/#String">String</a> dateText, <a href="http://api.jquery.com/Types/#Object">Object</a> inst )</div>
<div class="default">
<strong>Default: </strong><code>null</code>
</div>
<div>Called when the datepicker is selected. The function receives the selected date as text and the datepicker instance as parameters. <code>this</code> refers to the associated input field.</div>
</div>
<div id="option-onUpdateDatepicker" class="api-item">
<h3>onUpdateDatepicker&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Function">Function</a>( <a href="http://api.jquery.com/Types/#Object">Object</a> inst )</div>
<div class="default">
<strong>Default: </strong><code>null</code>
</div>
<div>Called when the datepicker widget's DOM is updated. The function receives the datepicker instance as the only parameter. <code>this</code> refers to the associated input field.<span class="version-details"> (version added: 1.13)</span>
</div>
</div>
<div id="option-prevText" class="api-item">
<h3>prevText&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#String">String</a>
</div>
<div class="default">
<strong>Default: </strong><code>"Prev"</code>
</div>
<div>The text to display for the previous month link. With the standard ThemeRoller styling, this value is replaced by an icon.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>prevText</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">prevText</span>: <span class="hljs-string">"Earlier"</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>prevText</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> prevText = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"prevText"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"prevText"</span>, <span class="hljs-string">"Earlier"</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-selectOtherMonths" class="api-item">
<h3>selectOtherMonths&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Boolean">Boolean</a>
</div>
<div class="default">
<strong>Default: </strong><code>false</code>
</div>
<div>Whether days in other months shown before or after the current month are selectable. This only applies if the <a href="https://api.jqueryui.com/datepicker/#option-showOtherMonths"><code>showOtherMonths</code></a> option is set to <code>true</code>.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>selectOtherMonths</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">selectOtherMonths</span>: <span class="hljs-literal">true</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>selectOtherMonths</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> selectOtherMonths = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"selectOtherMonths"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"selectOtherMonths"</span>, <span class="hljs-literal">true</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-shortYearCutoff" class="api-item">
<h3>shortYearCutoff&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Number">Number</a> or <a href="http://api.jquery.com/Types/#String">String</a>
</div>
<div class="default">
<strong>Default: </strong><code>"+10"</code>
</div>
<div>The cutoff year for determining the century for a date (used in conjunction with <a href="https://api.jqueryui.com/datepicker/#option-dateFormat"><code>dateFormat</code></a> 'y'). Any dates entered with a year value less than or equal to the cutoff year are considered to be in the current century, while those greater than it are deemed to be in the previous century.</div>
<strong>Multiple types supported:</strong><ul>
<li>
<strong>Number</strong>: A value between <code>0</code> and <code>99</code> indicating the cutoff year.</li>
<li>
<strong>String</strong>: A relative number of years from the current year, e.g., <code>"+3"</code> or <code>"-5"</code>.</li>
</ul>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>shortYearCutoff</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">shortYearCutoff</span>: <span class="hljs-number">50</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>shortYearCutoff</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> shortYearCutoff = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"shortYearCutoff"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"shortYearCutoff"</span>, <span class="hljs-number">50</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-showAnim" class="api-item">
<h3>showAnim&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#String">String</a>
</div>
<div class="default">
<strong>Default: </strong><code>"show"</code>
</div>
<div>The name of the animation used to show and hide the datepicker. Use <code>"show"</code> (the default), <code>"slideDown"</code>, <code>"fadeIn"</code>, any of the <a href="https://api.jqueryui.com/category/effects/">jQuery UI effects</a>. Set to an empty string to disable animation.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>showAnim</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">showAnim</span>: <span class="hljs-string">"fold"</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>showAnim</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> showAnim = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"showAnim"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"showAnim"</span>, <span class="hljs-string">"fold"</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-showButtonPanel" class="api-item">
<h3>showButtonPanel&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Boolean">Boolean</a>
</div>
<div class="default">
<strong>Default: </strong><code>false</code>
</div>
<div>Whether to display a button pane underneath the calendar. The button pane contains two buttons, a Today button that links to the current day, and a Done button that closes the datepicker. The buttons' text can be customized using the <a href="https://api.jqueryui.com/datepicker/#option-currentText"><code>currentText</code></a> and <a href="https://api.jqueryui.com/datepicker/#option-closeText"><code>closeText</code></a> options respectively.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>showButtonPanel</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">showButtonPanel</span>: <span class="hljs-literal">true</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>showButtonPanel</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> showButtonPanel = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"showButtonPanel"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"showButtonPanel"</span>, <span class="hljs-literal">true</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-showCurrentAtPos" class="api-item">
<h3>showCurrentAtPos&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Number">Number</a>
</div>
<div class="default">
<strong>Default: </strong><code>0</code>
</div>
<div>When displaying multiple months via the <a href="https://api.jqueryui.com/datepicker/#option-numberOfMonths"><code>numberOfMonths</code></a> option, the <code>showCurrentAtPos</code> option defines which position to display the current month in.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>showCurrentAtPos</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">showCurrentAtPos</span>: <span class="hljs-number">3</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>showCurrentAtPos</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> showCurrentAtPos = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"showCurrentAtPos"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"showCurrentAtPos"</span>, <span class="hljs-number">3</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-showMonthAfterYear" class="api-item">
<h3>showMonthAfterYear&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Boolean">Boolean</a>
</div>
<div class="default">
<strong>Default: </strong><code>false</code>
</div>
<div>Whether to show the month after the year in the header.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>showMonthAfterYear</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">showMonthAfterYear</span>: <span class="hljs-literal">true</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>showMonthAfterYear</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> showMonthAfterYear = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"showMonthAfterYear"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"showMonthAfterYear"</span>, <span class="hljs-literal">true</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-showOn" class="api-item">
<h3>showOn&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#String">String</a>
</div>
<div class="default">
<strong>Default: </strong><code>"focus"</code>
</div>
<div>When the datepicker should appear. The datepicker can appear when the field receives focus (<code>"focus"</code>), when a button is clicked (<code>"button"</code>), or when either event occurs (<code>"both"</code>).</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>showOn</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">showOn</span>: <span class="hljs-string">"both"</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>showOn</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> showOn = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"showOn"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"showOn"</span>, <span class="hljs-string">"both"</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-showOptions" class="api-item">
<h3>showOptions&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Object">Object</a>
</div>
<div class="default">
<strong>Default: </strong><code>{}</code>
</div>
<div>If using one of the jQuery UI effects for the <a href="https://api.jqueryui.com/datepicker/#option-showAnim"><code>showAnim</code></a> option, you can provide additional properties for that animation using this option.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>showOptions</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">showOptions</span>: { <span class="hljs-attr">direction</span>: <span class="hljs-string">"up"</span> }</code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>showOptions</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> showOptions = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"showOptions"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"showOptions"</span>, { <span class="hljs-attr">direction</span>: <span class="hljs-string">"up"</span> } );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-showOtherMonths" class="api-item">
<h3>showOtherMonths&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Boolean">Boolean</a>
</div>
<div class="default">
<strong>Default: </strong><code>false</code>
</div>
<div>Whether to display dates in other months (non-selectable) at the start or end of the current month. To make these days selectable use the <a href="https://api.jqueryui.com/datepicker/#option-selectOtherMonths"><code>selectOtherMonths</code></a> option.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>showOtherMonths</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">showOtherMonths</span>: <span class="hljs-literal">true</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>showOtherMonths</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> showOtherMonths = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"showOtherMonths"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"showOtherMonths"</span>, <span class="hljs-literal">true</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-showWeek" class="api-item">
<h3>showWeek&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Boolean">Boolean</a>
</div>
<div class="default">
<strong>Default: </strong><code>false</code>
</div>
<div>When <code>true</code>, a column is added to show the week of the year. The <a href="https://api.jqueryui.com/datepicker/#option-calculateWeek"><code>calculateWeek</code></a> option determines how the week of the year is calculated. You may also want to change the <a href="https://api.jqueryui.com/datepicker/#option-firstDay"><code>firstDay</code></a> option.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>showWeek</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">showWeek</span>: <span class="hljs-literal">true</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>showWeek</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> showWeek = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"showWeek"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"showWeek"</span>, <span class="hljs-literal">true</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-stepMonths" class="api-item">
<h3>stepMonths&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#Number">Number</a>
</div>
<div class="default">
<strong>Default: </strong><code>1</code>
</div>
<div>Set how many months to move when clicking the previous/next links.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>stepMonths</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">stepMonths</span>: <span class="hljs-number">3</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>stepMonths</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> stepMonths = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"stepMonths"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"stepMonths"</span>, <span class="hljs-number">3</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-weekHeader" class="api-item">
<h3>weekHeader&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#String">String</a>
</div>
<div class="default">
<strong>Default: </strong><code>"Wk"</code>
</div>
<div>The text to display for the week of the year column heading. Use the <a href="https://api.jqueryui.com/datepicker/#option-showWeek"><code>showWeek</code></a> option to display this column.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>weekHeader</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">weekHeader</span>: <span class="hljs-string">"W"</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>weekHeader</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> weekHeader = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"weekHeader"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"weekHeader"</span>, <span class="hljs-string">"W"</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-yearRange" class="api-item">
<h3>yearRange&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#String">String</a>
</div>
<div class="default">
<strong>Default: </strong><code>"c-10:c+10"</code>
</div>
<div>The range of years displayed in the year drop-down: either relative to today's year (<code>"-nn:+nn"</code>), relative to the currently selected year (<code>"c-nn:c+nn"</code>), absolute (<code>"nnnn:nnnn"</code>), or combinations of these formats (<code>"nnnn:-nn"</code>). Note that this option only affects what appears in the drop-down, to restrict which dates may be selected use the <a href="https://api.jqueryui.com/datepicker/#option-minDate"><code>minDate</code></a> and/or <a href="https://api.jqueryui.com/datepicker/#option-maxDate"><code>maxDate</code></a> options.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>yearRange</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">yearRange</span>: <span class="hljs-string">"2002:2012"</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>yearRange</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> yearRange = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"yearRange"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"yearRange"</span>, <span class="hljs-string">"2002:2012"</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
<div id="option-yearSuffix" class="api-item">
<h3>yearSuffix&nbsp;
					</h3>
<div class="option-type">
<strong>Type: </strong><a href="http://api.jquery.com/Types/#String">String</a>
</div>
<div class="default">
<strong>Default: </strong><code>""</code>
</div>
<div>Additional text to display after the year in the month headers.</div>
<strong>Code examples:</strong><p>Initialize the datepicker with the <code>yearSuffix</code> option specified:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker({</code></div></div><div class="container"><div class="line"><code>  <span class="hljs-attr">yearSuffix</span>: <span class="hljs-string">"CE"</span></code></div></div><div class="container"><div class="line"><code>});</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<p>Get or set the <code>yearSuffix</code> option, after initialization:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-comment">// Getter</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> yearSuffix = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"yearSuffix"</span> );</code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-comment">// Setter</span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"yearSuffix"</span>, <span class="hljs-string">"CE"</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div></section><section id="methods"><header><h2>Methods</h2></header><div id="method-destroy"><div class="api-item first-item">
<h3>destroy()<span class="returns">Returns: <a href="http://api.jquery.com/Types/#jQuery">jQuery</a> (<a href="http://learn.jquery.com/jquery-ui/widget-factory/widget-method-invocation/">plugin only</a>)</span>
</h3>
<div>
		Removes the datepicker functionality completely. This will return the element back to its pre-init state.
	</div>
<ul><li><div class="null-signature">This method does not accept any arguments.</div></li></ul>
<div>
<strong>Code examples:</strong><p>Invoke the destroy method:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"destroy"</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
</div></div>
<div id="method-dialog"><div class="api-item">
<h3>dialog( date [, onSelect ] [, options ] [, pos ] )<span class="returns">Returns: <a href="http://api.jquery.com/Types/#jQuery">jQuery</a> (<a href="http://learn.jquery.com/jquery-ui/widget-factory/widget-method-invocation/">plugin only</a>)</span>
</h3>
<div>Opens the datepicker in a dialog box.</div>
<ul>
<li>
<div><strong>date</strong></div>
<div>Type: <a href="http://api.jquery.com/Types/#String">String</a> or <a href="http://api.jquery.com/Types/#Date">Date</a>
</div>
<div>The initial date.</div>
</li>
<li>
<div><strong>onSelect</strong></div>
<div>Type: <a href="http://api.jquery.com/Types/#Function">Function</a>()</div>
<div>A callback function when a date is selected. The function receives the date text and date picker instance as parameters.</div>
</li>
<li>
<div><strong>options</strong></div>
<div>Type: <a href="http://api.jquery.com/Types/#Options">Options</a>
</div>
<div>The new options for the date picker.</div>
</li>
<li>
<div><strong>pos</strong></div>
<div>Type: <a href="http://api.jquery.com/Types/#Number%5B2%5D%20or%20MouseEvent">Number[2] or MouseEvent</a>
</div>
<div>The position of the top/left of the dialog as <code>[x, y]</code> or a <code>MouseEvent</code> that contains the coordinates. If not specified the dialog is centered on the screen.</div>
</li>
</ul>
<div>
<strong>Code examples:</strong><p>Invoke the dialog method:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"dialog"</span>, <span class="hljs-string">"10/12/2012"</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
</div></div>
<div id="method-getDate"><div class="api-item">
<h3>getDate()<span class="returns">Returns: <a href="http://api.jquery.com/Types/#Date">Date</a></span>
</h3>
<div>Returns the current date for the datepicker or <code>null</code> if no date has been selected.</div>
<ul><li><div class="null-signature">This method does not accept any arguments.</div></li></ul>
<div>
<strong>Code examples:</strong><p>Invoke the getDate method:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> currentDate = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"getDate"</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
</div></div>
<div id="method-hide"><div class="api-item">
<h3>hide()<span class="returns">Returns: <a href="http://api.jquery.com/Types/#jQuery">jQuery</a> (<a href="http://learn.jquery.com/jquery-ui/widget-factory/widget-method-invocation/">plugin only</a>)</span>
</h3>
<div>Close a previously opened date picker.</div>
<ul><li><div class="null-signature">This method does not accept any arguments.</div></li></ul>
<div>
<strong>Code examples:</strong><p>Invoke the hide method:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"hide"</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
</div></div>
<div id="method-isDisabled"><div class="api-item">
<h3>isDisabled()<span class="returns">Returns: <a href="http://api.jquery.com/Types/#Boolean">Boolean</a></span>
</h3>
<div>Determine whether a date picker has been disabled.</div>
<ul><li><div class="null-signature">This method does not accept any arguments.</div></li></ul>
<div>
<strong>Code examples:</strong><p>Invoke the isDisabled method:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> isDisabled = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"isDisabled"</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
</div></div>
<div id="method-option">
<div class="api-item">
<h3>option( optionName )<span class="returns">Returns: <a href="http://api.jquery.com/Types/#Object">Object</a></span>
</h3>
<div>
			<p>Gets the value currently associated with the specified <code>optionName</code>.</p>
			<p><strong>Note:</strong> For options that have objects as their value, you can get the value of a specific key by using dot notation. For example, <code>"foo.bar"</code> would get the value of the <code>bar</code> property on the <code>foo</code> option.</p>
		</div>
<ul><li>
<div><strong>optionName</strong></div>
<div>Type: <a href="http://api.jquery.com/Types/#String">String</a>
</div>
<div>The name of the option to get.</div>
</li></ul>
<div>
<strong>Code examples:</strong><p>Invoke the  method:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> isDisabled = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"disabled"</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
</div>
<div class="api-item">
<h3>option()<span class="returns">Returns: <a href="http://api.jquery.com/Types/#PlainObject">PlainObject</a></span>
</h3>
<div>Gets an object containing key/value pairs representing the current datepicker options hash.</div>
<ul><li><div class="null-signature">This signature does not accept any arguments.</div></li></ul>
<div>
<strong>Code examples:</strong><p>Invoke the  method:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> options = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
</div>
<div class="api-item">
<h3>option( optionName, value )<span class="returns">Returns: <a href="http://api.jquery.com/Types/#jQuery">jQuery</a> (<a href="http://learn.jquery.com/jquery-ui/widget-factory/widget-method-invocation/">plugin only</a>)</span>
</h3>
<div>
			<p>Sets the value of the datepicker option associated with the specified <code>optionName</code>.</p>
			<p><strong>Note:</strong> For options that have objects as their value, you can set the value of just one property by using dot notation for <code>optionName</code>. For example, <code>"foo.bar"</code> would update only the <code>bar</code> property of the <code>foo</code> option.</p>
		</div>
<ul>
<li>
<div><strong>optionName</strong></div>
<div>Type: <a href="http://api.jquery.com/Types/#String">String</a>
</div>
<div>The name of the option to set.</div>
</li>
<li>
<div><strong>value</strong></div>
<div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
</div>
<div>A value to set for the option.</div>
</li>
</ul>
<div>
<strong>Code examples:</strong><p>Invoke the  method:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, <span class="hljs-string">"disabled"</span>, <span class="hljs-literal">true</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
</div>
<div class="api-item">
<h3>option( options )<span class="returns">Returns: <a href="http://api.jquery.com/Types/#jQuery">jQuery</a> (<a href="http://learn.jquery.com/jquery-ui/widget-factory/widget-method-invocation/">plugin only</a>)</span>
</h3>
<div>Sets one or more options for the datepicker.</div>
<ul><li>
<div><strong>options</strong></div>
<div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
</div>
<div>A map of option-value pairs to set.</div>
</li></ul>
<div>
<strong>Code examples:</strong><p>Invoke the  method:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"option"</span>, { <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> } );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
</div>
</div>
<div id="method-refresh"><div class="api-item">
<h3>refresh()<span class="returns">Returns: <a href="http://api.jquery.com/Types/#jQuery">jQuery</a> (<a href="http://learn.jquery.com/jquery-ui/widget-factory/widget-method-invocation/">plugin only</a>)</span>
</h3>
<div>Redraw the date picker, after having made some external modifications.</div>
<ul><li><div class="null-signature">This method does not accept any arguments.</div></li></ul>
<div>
<strong>Code examples:</strong><p>Invoke the refresh method:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"refresh"</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
</div></div>
<div id="method-setDate"><div class="api-item">
<h3>setDate( date )<span class="returns">Returns: <a href="http://api.jquery.com/Types/#jQuery">jQuery</a> (<a href="http://learn.jquery.com/jquery-ui/widget-factory/widget-method-invocation/">plugin only</a>)</span>
</h3>
<div>Sets the date for the datepicker. The new date may be a <code>Date</code> object or a string in the current <a href="https://api.jqueryui.com/datepicker/#option-dateFormat">date format</a> (e.g., <code>"01/26/2009"</code>), a number of days from today (e.g., <code>+7</code>) or a string of values and periods (<code>"y"</code> for years, <code>"m"</code> for months, <code>"w"</code> for weeks, <code>"d"</code> for days, e.g., <code>"+1m +7d"</code>), or <code>null</code> to clear the selected date.</div>
<ul><li>
<div><strong>date</strong></div>
<div>Type: <a href="http://api.jquery.com/Types/#String">String</a> or <a href="http://api.jquery.com/Types/#Date">Date</a>
</div>
<div>The new date.</div>
</li></ul>
<div>
<strong>Code examples:</strong><p>Invoke the setDate method:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"setDate"</span>, <span class="hljs-string">"10/12/2012"</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
</div></div>
<div id="method-show"><div class="api-item">
<h3>show()<span class="returns">Returns: <a href="http://api.jquery.com/Types/#jQuery">jQuery</a> (<a href="http://learn.jquery.com/jquery-ui/widget-factory/widget-method-invocation/">plugin only</a>)</span>
</h3>
<div>Open the date picker. If the datepicker is attached to an input, the input must be visible for the datepicker to be shown.</div>
<ul><li><div class="null-signature">This method does not accept any arguments.</div></li></ul>
<div>
<strong>Code examples:</strong><p>Invoke the show method:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code>$( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"show"</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
</div></div>
<div id="method-widget"><div class="api-item">
<h3>widget()<span class="returns">Returns: <a href="http://api.jquery.com/Types/#jQuery">jQuery</a></span>
</h3>
<div>
		Returns a <code>jQuery</code> object containing the datepicker.
	</div>
<ul><li><div class="null-signature">This method does not accept any arguments.</div></li></ul>
<div>
<strong>Code examples:</strong><p>Invoke the widget method:</p>
<div class="syntaxhighlighter javascript">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-keyword">var</span> widget = $( <span class="hljs-string">".selector"</span> ).datepicker( <span class="hljs-string">"widget"</span> );</code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>
</div></div></section><section class="entry-examples" id="entry-examples"><header><h2>Example:</h2></header><div class="entry-example" id="example-0">
<p>A simple jQuery UI Datepicker.</p>
<div class="syntaxhighlighter xml">
	<table>
		<tbody>
			<tr>
				
				<td class="gutter">
					
						<div class="line n1">1</div>
					
						<div class="line n2">2</div>
					
						<div class="line n3">3</div>
					
						<div class="line n4">4</div>
					
						<div class="line n5">5</div>
					
						<div class="line n6">6</div>
					
						<div class="line n7">7</div>
					
						<div class="line n8">8</div>
					
						<div class="line n9">9</div>
					
						<div class="line n10">10</div>
					
						<div class="line n11">11</div>
					
						<div class="line n12">12</div>
					
						<div class="line n13">13</div>
					
						<div class="line n14">14</div>
					
						<div class="line n15">15</div>
					
						<div class="line n16">16</div>
					
						<div class="line n17">17</div>
					
						<div class="line n18">18</div>
					
						<div class="line n19">19</div>
					
				</td>
				
				<td class="code">
					<pre><div class="container"><div class="line"><code><span class="hljs-meta">&lt;!doctype <span class="hljs-meta-keyword">html</span>&gt;</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-tag">&lt;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"en"</span>&gt;</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span></code></div></div><div class="container"><div class="line"><code>  <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"utf-8"</span>&gt;</span></code></div></div><div class="container"><div class="line"><code>  <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>datepicker demo<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span></code></div></div><div class="container"><div class="line"><code>  <span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css"</span>&gt;</span></code></div></div><div class="container"><div class="line"><code>  <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"//code.jquery.com/jquery-1.12.4.js"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></div></div><div class="container"><div class="line"><code>  <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"//code.jquery.com/ui/1.12.1/jquery-ui.js"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span></code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"datepicker"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript"></span></code></div></div><div class="container"><div class="line"><code>$( <span class="hljs-string">"#datepicker"</span> ).datepicker();</code></div></div><div class="container"><div class="line"><code><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></div></div><div class="container"><div class="line"><code> </code></div></div><div class="container"><div class="line"><code><span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span></code></div></div><div class="container"><div class="line"><code><span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span></code></div></div></pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<h4>Demo:</h4>
<div class="demo code-demo" data-height="300"><iframe width="100%" height="300" src="./jquery.datepicker_files/saved_resource.html"></iframe></div>
</div></section>
</div></article>	</div><!-- .entry-content -->

</article><!-- #post-21 -->
			</div>

	
<div id="sidebar" class="widget-area" role="complementary">
	<aside id="categories" class="widget">
		<h3 class="widget-title">jQuery UI 1.13</h3>
		<ul>
				<li class="cat-item cat-item-2"><a href="https://api.jqueryui.com/category/effects/">Effects</a>
</li>
	<li class="cat-item cat-item-10"><a href="https://api.jqueryui.com/category/effects-core/">Effects Core</a>
</li>
	<li class="cat-item cat-item-4"><a href="https://api.jqueryui.com/category/interactions/">Interactions</a>
</li>
	<li class="cat-item cat-item-8"><a href="https://api.jqueryui.com/category/overrides/">Method Overrides</a>
</li>
	<li class="cat-item cat-item-6"><a href="https://api.jqueryui.com/category/methods/">Methods</a>
</li>
	<li class="cat-item cat-item-7"><a href="https://api.jqueryui.com/category/selectors/">Selectors</a>
</li>
	<li class="cat-item cat-item-12"><a href="https://api.jqueryui.com/category/theming/">Theming</a>
</li>
	<li class="cat-item cat-item-9"><a href="https://api.jqueryui.com/category/ui-core/">UI Core</a>
</li>
	<li class="cat-item cat-item-5"><a href="https://api.jqueryui.com/category/utilities/">Utilities</a>
</li>
	<li class="cat-item cat-item-3 current-cat"><a href="https://api.jqueryui.com/category/widgets/">Widgets</a>
</li>
		</ul>
	</aside>

	<aside id="categories" class="widget">
		<h3 class="widget-title">Other Versions</h3>
		<ul>
			<li><a href="https://api.jqueryui.com/1.12/">jQuery UI 1.12</a></li><li><a href="https://api.jqueryui.com/1.11/">jQuery UI 1.11</a></li><li><a href="https://api.jqueryui.com/1.10/">jQuery UI 1.10</a></li><li><a href="https://api.jqueryui.com/1.9/">jQuery UI 1.9</a></li><li><a href="https://api.jqueryui.com/1.8/">jQuery UI 1.8</a></li>		</ul>
	</aside>
</div>
</div>
	</div>
</div>
<footer class="clearfix simple">
	<div class="constrain">
		<div class="row">
			<div class="six columns offset-by-three">
				<h3><span>Books</span></h3>
				<ul class="books">
					<li>
						<a href="https://www.manning.com/books/jquery-ui-in-action">
							<span><img src="./jquery.datepicker_files/jquery-ui-in-action.jpg" alt="jQuery UI in Action by TJ VanToll" width="92" height="114"></span>
							<strong>jQuery UI in Action</strong><br>
							<cite>TJ VanToll</cite>
						</a>
					</li>
					<li>
						<a href="https://www.packtpub.com/web-development/jquery-ui-themes-beginners-guide">
							<img src="./jquery.datepicker_files/jquery-ui-themes.jpg" alt="jQuery UI Themes by Adam Boduch" width="92" height="114">
							<span class="book-title">jQuery UI Themes</span>
							<cite>Adam Boduch</cite>
						</a>
					</li>
					<li>
						<a href="https://www.packtpub.com/web-development/jquery-ui-cookbook">
							<img src="./jquery.datepicker_files/jquery-ui-cookbook.jpg" alt="jQuery UI Cookbook by Adam Boduch" width="92" height="114">
							<span class="book-title">jQuery UI Cookbook</span>
							<cite>Adam Boduch</cite>
						</a>
					</li>
				</ul>
			</div>
		</div>

		
<div id="legal">
	<ul class="footer-site-links">
			<li><a class="icon-pencil" href="https://learn.jquery.com/">Learning Center</a></li>
			<li><a class="icon-group" href="https://forum.jquery.com/using-jquery-ui/">Forum</a></li>
			<li><a class="icon-wrench" href="https://api.jqueryui.com/">API</a></li>
			<li><a class="icon-twitter" href="https://twitter.com/jqueryui">Twitter</a></li>
			<li><a class="icon-comments" href="https://irc.jquery.org/">IRC</a></li>
			<li><a class="icon-github" href="https://github.com/jquery">GitHub</a></li>
	</ul>
	<p class="copyright">
		Copyright 2023 <a href="https://openjsf.org/">OpenJS Foundation</a> and jQuery contributors. All rights reserved. See <a href="https://jquery.org/license/">jQuery License</a> for more information. The <a href="https://openjsf.org/">OpenJS Foundation</a> has registered trademarks and uses trademarks. For a list of trademarks of the <a href="https://openjsf.org/">OpenJS Foundation</a>, please see our <a href="https://trademark-policy.openjsf.org/">Trademark Policy</a> and <a href="https://trademark-list.openjsf.org/">Trademark List</a>. Trademarks and logos not indicated on the <a href="https://trademark-list.openjsf.org/">list of OpenJS Foundation trademarks</a> are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them. OpenJS Foundation <a href="https://terms-of-use.openjsf.org/">Terms of Use</a>, <a href="https://privacy-policy.openjsf.org/">Privacy</a>, and <a href="https://www.linuxfoundation.org/cookies">Cookie</a> Policies also apply.
		<span class="sponsor-line"><a href="https://www.digitalocean.com/" class="do-link">Web hosting by Digital Ocean</a> | <a href="https://www.stackpath.com/" class="sp-link">CDN by StackPath</a></span>
	</p>
</div>

	</div>
</footer>

<script type="text/javascript" src="./jquery.datepicker_files/comment-reply.min.js.download"></script>
<script type="text/javascript" src="./jquery.datepicker_files/wp-embed.min.js.download"></script>
<script async="" src="./jquery.datepicker_files/docsearch.min.js.download" onload="document.querySelector(&quot;input[name=\&quot;s\&quot;]&quot;) &amp;&amp; docsearch({apiKey: &quot;2fce35e56784bbb48c78d105739190c2&quot;,
			indexName: &quot;jqueryui&quot;,
			inputSelector: &quot;input[name=\&quot;s\&quot;]&quot;,
			debug: true
		})"></script>



<div id="yt_article_summary_widget_wrapper" class="yt_article_summary_widget_wrapper" style="display: none;">
        <div id="yt_article_summary_widget" class="yt_article_summary_widget"><svg style="filter: brightness(0.8);" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-outside-1_3606_3145" maskUnits="userSpaceOnUse" x="1" y="1" width="22" height="22" fill="black">
                <rect fill="white" x="1" y="1" width="22" height="22"></rect>
                <path d="M20.6816 10.1843C20.9588 9.34066 21.0063 8.4399 20.8192 7.57245C20.6321 6.70499 20.217 5.90134 19.6157 5.24216C19.0143 4.58298 18.2478 4.09146 17.393 3.81692C16.5382 3.54238 15.6253 3.49449 14.7459 3.67805C14.1453 3.01747 13.379 2.52468 12.524 2.24931C11.669 1.97394 10.7555 1.92571 9.87559 2.10947C8.99568 2.29324 8.18039 2.70252 7.51181 3.29608C6.84323 3.88965 6.34499 4.64654 6.06725 5.49055C5.18642 5.67292 4.3699 6.08122 3.70003 6.67426C3.03017 7.26731 2.53064 8.02413 2.25182 8.86842C1.97299 9.71271 1.92474 10.6146 2.11192 11.4832C2.2991 12.3517 2.71509 13.1562 3.31795 13.8155C3.09309 14.4899 3.01633 15.2037 3.09278 15.9095C3.16924 16.6154 3.39716 17.2971 3.76139 17.9093C4.30169 18.8351 5.12567 19.568 6.11483 20.0027C7.104 20.4373 8.20738 20.5512 9.26631 20.328C9.74353 20.8568 10.3291 21.2796 10.9844 21.5684C11.6396 21.8571 12.3495 22.0053 13.0672 22.003C14.1516 22.003 15.2081 21.6635 16.0847 21.0334C16.9612 20.4034 17.6125 19.5152 17.9449 18.4968C18.649 18.3539 19.3141 18.0649 19.8962 17.6489C20.4784 17.233 20.9642 16.6997 21.3214 16.0843C21.8585 15.1598 22.0858 14.0915 21.9709 13.032C21.856 11.9724 21.4048 10.9758 20.6816 10.1843ZM13.0798 20.6968C12.191 20.6968 11.3302 20.3894 10.6473 19.828L10.7677 19.7593L14.8029 17.4593C14.9069 17.4047 14.9935 17.3225 15.0528 17.2221C15.1121 17.1216 15.1418 17.0068 15.1386 16.8905V11.2655L16.8427 12.2405C16.8517 12.2441 16.8594 12.2501 16.865 12.2579C16.8706 12.2656 16.8739 12.2748 16.8744 12.2843V16.9343C16.876 17.4289 16.7785 17.9189 16.5875 18.3761C16.3964 18.8333 16.1156 19.2488 15.7611 19.5985C15.4067 19.9482 14.9856 20.2253 14.5222 20.4138C14.0588 20.6023 13.5621 20.6984 13.0608 20.6968H13.0798ZM4.90165 17.2593C4.46164 16.5029 4.3026 15.6189 4.45188 14.7593L4.57224 14.828L8.60749 17.128C8.70379 17.1829 8.81303 17.2118 8.92423 17.2118C9.03543 17.2118 9.14467 17.1829 9.24097 17.128L14.1758 14.3218V16.253C14.1797 16.2608 14.1817 16.2694 14.1817 16.278C14.1817 16.2867 14.1797 16.2953 14.1758 16.303L10.0962 18.628C9.66403 18.8748 9.18685 19.0352 8.69188 19.0999C8.19692 19.1647 7.69387 19.1326 7.21148 19.0055C6.72909 18.8784 6.27681 18.6587 5.88048 18.3591C5.48415 18.0595 5.15154 17.6858 4.90165 17.2593ZM3.83741 8.5843C4.28764 7.82089 4.99655 7.23878 5.83919 6.94055V11.6718C5.83595 11.7857 5.86434 11.8983 5.92128 11.9975C5.97823 12.0966 6.06156 12.1785 6.16227 12.2343L11.0717 15.028L9.36766 16.003C9.34918 16.0092 9.32914 16.0092 9.31065 16.003L5.23106 13.678C4.36041 13.1812 3.72487 12.3642 3.46364 11.4059C3.20242 10.4476 3.33682 9.42624 3.83741 8.56555V8.5843ZM17.8563 11.7968L12.9278 8.9718L14.6319 8.00305C14.6403 7.99741 14.6502 7.99439 14.6604 7.99439C14.6705 7.99439 14.6805 7.99741 14.6889 8.00305L18.7685 10.328C19.3915 10.684 19.8992 11.2072 20.2325 11.8368C20.5659 12.4664 20.7111 13.1764 20.6514 13.8843C20.5916 14.5921 20.3294 15.2687 19.8951 15.8352C19.4608 16.4017 18.8724 16.8349 18.1983 17.0843V12.353C18.1946 12.2391 18.1612 12.1281 18.1013 12.0306C18.0414 11.9332 17.957 11.8527 17.8563 11.7968ZM19.554 9.2968L19.4336 9.2218L15.4047 6.9093C15.3047 6.84846 15.1896 6.81624 15.0721 6.81624C14.9547 6.81624 14.8395 6.84846 14.7396 6.9093L9.8111 9.71555V7.75305C9.8061 7.7445 9.80346 7.7348 9.80346 7.72492C9.80346 7.71505 9.8061 7.70535 9.8111 7.6968L13.897 5.37805C14.5222 5.02257 15.2371 4.85003 15.958 4.88059C16.6789 4.91115 17.3762 5.14356 17.9682 5.55064C18.5601 5.95772 19.0225 6.52265 19.301 7.17939C19.5796 7.83614 19.663 8.55755 19.5413 9.2593L19.554 9.2968ZM8.87989 12.7218L7.1695 11.753C7.15339 11.7405 7.1422 11.7228 7.13782 11.703V7.06555C7.13785 6.35289 7.34371 5.65499 7.73128 5.0536C8.11885 4.45222 8.67209 3.97224 9.32619 3.6699C9.98029 3.36756 10.7082 3.25537 11.4246 3.34647C12.141 3.43757 12.8162 3.7282 13.3712 4.1843L13.2636 4.25305L9.21563 6.55305C9.11158 6.60765 9.02504 6.68981 8.96573 6.79029C8.90642 6.89076 8.87669 7.00557 8.87989 7.1218V12.7218ZM9.80476 10.753L11.9966 9.50305L14.1948 10.753V13.253L11.9966 14.503L9.79843 13.253L9.80476 10.753Z"></path>
                </mask>
                <path d="M20.6816 10.1843C20.9588 9.34066 21.0063 8.4399 20.8192 7.57245C20.6321 6.70499 20.217 5.90134 19.6157 5.24216C19.0143 4.58298 18.2478 4.09146 17.393 3.81692C16.5382 3.54238 15.6253 3.49449 14.7459 3.67805C14.1453 3.01747 13.379 2.52468 12.524 2.24931C11.669 1.97394 10.7555 1.92571 9.87559 2.10947C8.99568 2.29324 8.18039 2.70252 7.51181 3.29608C6.84323 3.88965 6.34499 4.64654 6.06725 5.49055C5.18642 5.67292 4.3699 6.08122 3.70003 6.67426C3.03017 7.26731 2.53064 8.02413 2.25182 8.86842C1.97299 9.71271 1.92474 10.6146 2.11192 11.4832C2.2991 12.3517 2.71509 13.1562 3.31795 13.8155C3.09309 14.4899 3.01633 15.2037 3.09278 15.9095C3.16924 16.6154 3.39716 17.2971 3.76139 17.9093C4.30169 18.8351 5.12567 19.568 6.11483 20.0027C7.104 20.4373 8.20738 20.5512 9.26631 20.328C9.74353 20.8568 10.3291 21.2796 10.9844 21.5684C11.6396 21.8571 12.3495 22.0053 13.0672 22.003C14.1516 22.003 15.2081 21.6635 16.0847 21.0334C16.9612 20.4034 17.6125 19.5152 17.9449 18.4968C18.649 18.3539 19.3141 18.0649 19.8962 17.6489C20.4784 17.233 20.9642 16.6997 21.3214 16.0843C21.8585 15.1598 22.0858 14.0915 21.9709 13.032C21.856 11.9724 21.4048 10.9758 20.6816 10.1843ZM13.0798 20.6968C12.191 20.6968 11.3302 20.3894 10.6473 19.828L10.7677 19.7593L14.8029 17.4593C14.9069 17.4047 14.9935 17.3225 15.0528 17.2221C15.1121 17.1216 15.1418 17.0068 15.1386 16.8905V11.2655L16.8427 12.2405C16.8517 12.2441 16.8594 12.2501 16.865 12.2579C16.8706 12.2656 16.8739 12.2748 16.8744 12.2843V16.9343C16.876 17.4289 16.7785 17.9189 16.5875 18.3761C16.3964 18.8333 16.1156 19.2488 15.7611 19.5985C15.4067 19.9482 14.9856 20.2253 14.5222 20.4138C14.0588 20.6023 13.5621 20.6984 13.0608 20.6968H13.0798ZM4.90165 17.2593C4.46164 16.5029 4.3026 15.6189 4.45188 14.7593L4.57224 14.828L8.60749 17.128C8.70379 17.1829 8.81303 17.2118 8.92423 17.2118C9.03543 17.2118 9.14467 17.1829 9.24097 17.128L14.1758 14.3218V16.253C14.1797 16.2608 14.1817 16.2694 14.1817 16.278C14.1817 16.2867 14.1797 16.2953 14.1758 16.303L10.0962 18.628C9.66403 18.8748 9.18685 19.0352 8.69188 19.0999C8.19692 19.1647 7.69387 19.1326 7.21148 19.0055C6.72909 18.8784 6.27681 18.6587 5.88048 18.3591C5.48415 18.0595 5.15154 17.6858 4.90165 17.2593ZM3.83741 8.5843C4.28764 7.82089 4.99655 7.23878 5.83919 6.94055V11.6718C5.83595 11.7857 5.86434 11.8983 5.92128 11.9975C5.97823 12.0966 6.06156 12.1785 6.16227 12.2343L11.0717 15.028L9.36766 16.003C9.34918 16.0092 9.32914 16.0092 9.31065 16.003L5.23106 13.678C4.36041 13.1812 3.72487 12.3642 3.46364 11.4059C3.20242 10.4476 3.33682 9.42624 3.83741 8.56555V8.5843ZM17.8563 11.7968L12.9278 8.9718L14.6319 8.00305C14.6403 7.99741 14.6502 7.99439 14.6604 7.99439C14.6705 7.99439 14.6805 7.99741 14.6889 8.00305L18.7685 10.328C19.3915 10.684 19.8992 11.2072 20.2325 11.8368C20.5659 12.4664 20.7111 13.1764 20.6514 13.8843C20.5916 14.5921 20.3294 15.2687 19.8951 15.8352C19.4608 16.4017 18.8724 16.8349 18.1983 17.0843V12.353C18.1946 12.2391 18.1612 12.1281 18.1013 12.0306C18.0414 11.9332 17.957 11.8527 17.8563 11.7968ZM19.554 9.2968L19.4336 9.2218L15.4047 6.9093C15.3047 6.84846 15.1896 6.81624 15.0721 6.81624C14.9547 6.81624 14.8395 6.84846 14.7396 6.9093L9.8111 9.71555V7.75305C9.8061 7.7445 9.80346 7.7348 9.80346 7.72492C9.80346 7.71505 9.8061 7.70535 9.8111 7.6968L13.897 5.37805C14.5222 5.02257 15.2371 4.85003 15.958 4.88059C16.6789 4.91115 17.3762 5.14356 17.9682 5.55064C18.5601 5.95772 19.0225 6.52265 19.301 7.17939C19.5796 7.83614 19.663 8.55755 19.5413 9.2593L19.554 9.2968ZM8.87989 12.7218L7.1695 11.753C7.15339 11.7405 7.1422 11.7228 7.13782 11.703V7.06555C7.13785 6.35289 7.34371 5.65499 7.73128 5.0536C8.11885 4.45222 8.67209 3.97224 9.32619 3.6699C9.98029 3.36756 10.7082 3.25537 11.4246 3.34647C12.141 3.43757 12.8162 3.7282 13.3712 4.1843L13.2636 4.25305L9.21563 6.55305C9.11158 6.60765 9.02504 6.68981 8.96573 6.79029C8.90642 6.89076 8.87669 7.00557 8.87989 7.1218V12.7218ZM9.80476 10.753L11.9966 9.50305L14.1948 10.753V13.253L11.9966 14.503L9.79843 13.253L9.80476 10.753Z" fill="#828282"></path>
                <path d="M20.6816 10.1843C20.9588 9.34066 21.0063 8.4399 20.8192 7.57245C20.6321 6.70499 20.217 5.90134 19.6157 5.24216C19.0143 4.58298 18.2478 4.09146 17.393 3.81692C16.5382 3.54238 15.6253 3.49449 14.7459 3.67805C14.1453 3.01747 13.379 2.52468 12.524 2.24931C11.669 1.97394 10.7555 1.92571 9.87559 2.10947C8.99568 2.29324 8.18039 2.70252 7.51181 3.29608C6.84323 3.88965 6.34499 4.64654 6.06725 5.49055C5.18642 5.67292 4.3699 6.08122 3.70003 6.67426C3.03017 7.26731 2.53064 8.02413 2.25182 8.86842C1.97299 9.71271 1.92474 10.6146 2.11192 11.4832C2.2991 12.3517 2.71509 13.1562 3.31795 13.8155C3.09309 14.4899 3.01633 15.2037 3.09278 15.9095C3.16924 16.6154 3.39716 17.2971 3.76139 17.9093C4.30169 18.8351 5.12567 19.568 6.11483 20.0027C7.104 20.4373 8.20738 20.5512 9.26631 20.328C9.74353 20.8568 10.3291 21.2796 10.9844 21.5684C11.6396 21.8571 12.3495 22.0053 13.0672 22.003C14.1516 22.003 15.2081 21.6635 16.0847 21.0334C16.9612 20.4034 17.6125 19.5152 17.9449 18.4968C18.649 18.3539 19.3141 18.0649 19.8962 17.6489C20.4784 17.233 20.9642 16.6997 21.3214 16.0843C21.8585 15.1598 22.0858 14.0915 21.9709 13.032C21.856 11.9724 21.4048 10.9758 20.6816 10.1843ZM13.0798 20.6968C12.191 20.6968 11.3302 20.3894 10.6473 19.828L10.7677 19.7593L14.8029 17.4593C14.9069 17.4047 14.9935 17.3225 15.0528 17.2221C15.1121 17.1216 15.1418 17.0068 15.1386 16.8905V11.2655L16.8427 12.2405C16.8517 12.2441 16.8594 12.2501 16.865 12.2579C16.8706 12.2656 16.8739 12.2748 16.8744 12.2843V16.9343C16.876 17.4289 16.7785 17.9189 16.5875 18.3761C16.3964 18.8333 16.1156 19.2488 15.7611 19.5985C15.4067 19.9482 14.9856 20.2253 14.5222 20.4138C14.0588 20.6023 13.5621 20.6984 13.0608 20.6968H13.0798ZM4.90165 17.2593C4.46164 16.5029 4.3026 15.6189 4.45188 14.7593L4.57224 14.828L8.60749 17.128C8.70379 17.1829 8.81303 17.2118 8.92423 17.2118C9.03543 17.2118 9.14467 17.1829 9.24097 17.128L14.1758 14.3218V16.253C14.1797 16.2608 14.1817 16.2694 14.1817 16.278C14.1817 16.2867 14.1797 16.2953 14.1758 16.303L10.0962 18.628C9.66403 18.8748 9.18685 19.0352 8.69188 19.0999C8.19692 19.1647 7.69387 19.1326 7.21148 19.0055C6.72909 18.8784 6.27681 18.6587 5.88048 18.3591C5.48415 18.0595 5.15154 17.6858 4.90165 17.2593ZM3.83741 8.5843C4.28764 7.82089 4.99655 7.23878 5.83919 6.94055V11.6718C5.83595 11.7857 5.86434 11.8983 5.92128 11.9975C5.97823 12.0966 6.06156 12.1785 6.16227 12.2343L11.0717 15.028L9.36766 16.003C9.34918 16.0092 9.32914 16.0092 9.31065 16.003L5.23106 13.678C4.36041 13.1812 3.72487 12.3642 3.46364 11.4059C3.20242 10.4476 3.33682 9.42624 3.83741 8.56555V8.5843ZM17.8563 11.7968L12.9278 8.9718L14.6319 8.00305C14.6403 7.99741 14.6502 7.99439 14.6604 7.99439C14.6705 7.99439 14.6805 7.99741 14.6889 8.00305L18.7685 10.328C19.3915 10.684 19.8992 11.2072 20.2325 11.8368C20.5659 12.4664 20.7111 13.1764 20.6514 13.8843C20.5916 14.5921 20.3294 15.2687 19.8951 15.8352C19.4608 16.4017 18.8724 16.8349 18.1983 17.0843V12.353C18.1946 12.2391 18.1612 12.1281 18.1013 12.0306C18.0414 11.9332 17.957 11.8527 17.8563 11.7968ZM19.554 9.2968L19.4336 9.2218L15.4047 6.9093C15.3047 6.84846 15.1896 6.81624 15.0721 6.81624C14.9547 6.81624 14.8395 6.84846 14.7396 6.9093L9.8111 9.71555V7.75305C9.8061 7.7445 9.80346 7.7348 9.80346 7.72492C9.80346 7.71505 9.8061 7.70535 9.8111 7.6968L13.897 5.37805C14.5222 5.02257 15.2371 4.85003 15.958 4.88059C16.6789 4.91115 17.3762 5.14356 17.9682 5.55064C18.5601 5.95772 19.0225 6.52265 19.301 7.17939C19.5796 7.83614 19.663 8.55755 19.5413 9.2593L19.554 9.2968ZM8.87989 12.7218L7.1695 11.753C7.15339 11.7405 7.1422 11.7228 7.13782 11.703V7.06555C7.13785 6.35289 7.34371 5.65499 7.73128 5.0536C8.11885 4.45222 8.67209 3.97224 9.32619 3.6699C9.98029 3.36756 10.7082 3.25537 11.4246 3.34647C12.141 3.43757 12.8162 3.7282 13.3712 4.1843L13.2636 4.25305L9.21563 6.55305C9.11158 6.60765 9.02504 6.68981 8.96573 6.79029C8.90642 6.89076 8.87669 7.00557 8.87989 7.1218V12.7218ZM9.80476 10.753L11.9966 9.50305L14.1948 10.753V13.253L11.9966 14.503L9.79843 13.253L9.80476 10.753Z" stroke="#828282" stroke-width="0.2" mask="url(#path-1-outside-1_3606_3145)"></path>
            </svg></div>
        <div id="yt_article_summary_close_button" class="yt_article_summary_close_button">×</div>
    </div></body><grammarly-desktop-integration data-grammarly-shadow-root="true"><template shadowrootmode="open"><style>
  div.grammarly-desktop-integration {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select:none;
    user-select:none;
  }

  div.grammarly-desktop-integration:before {
    content: attr(data-content);
  }
</style><div aria-label="grammarly-integration" role="group" tabindex="-1" class="grammarly-desktop-integration" data-content="{&quot;mode&quot;:&quot;full&quot;,&quot;isActive&quot;:true,&quot;isUserDisabled&quot;:false}"></div></template></grammarly-desktop-integration></html>