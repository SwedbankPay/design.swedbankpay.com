import React from "react";
import CodeTags from "@components/CodeTags";

const basename = process.env.basename;

export const changeLogs = [
    {
        version: "10.7.4",
        title: "Doing the groundwork for a brighter future.",
        text: "Purely DG page maintenance; migrated tests from using Enzyme to React Testing Library. A big step into the direction of migrating to React 18."
    },
    {
        version: "10.7.3",
        title: "Minor scrollbar changes for sidebar",
        text: "Bugfix for Developer Portal"
    },
    {
        version: "10.7.2",
        title: "Special delivery!",
        text: "Added GooglePay and ClickToPay icons"
    },
    {
        version: "10.7.1",
        title: "The Bear release™ 🐻",
        text: <p>This one is almost exclusively focusing on the &quot;behind the curtains&quot;. For components, the Dropdown options were styled so you can now use both anchor links and buttons, both getting styled identically. This can help for A11y (using more appropriate tags from a semantic point of view). We also removed redundant code from the Slab component 🧹.<br />In terms of documentation, some major NPM dependencies were upgraded. React-router in particular. We also converted the class-based React components to hooks. The Table component&apos;s “Do&apos;s and Don&apos;t” got its style for mobile fixed, and a banner was added to redirect users to the latest version if they&apos;re consulting an older version (thanks Mr Bear🐻 for the help 👏). And lastly, the Lightbox z-index was fixed.</p>
    },
    {
        version: "10.7.0",
        title: "Interactive playground and documentation updates",
        text: <p>New year, new version 🚀 Regarding components we have done some minor tweaks to ensure a better user experience, this applies to Tooltip, Sidebar, Dropdown and Buttons. We have also introduced a new component preview which you can see and test out in the patterns sections <a href={`${basename}patterns/forms`}>forms</a> and <a href={`${basename}patters/login`}>login</a>. Closing in, we have upgraded a lot of our dependencies and added some documentation. Go to the complete <a href="https://github.com/SwedbankPay/design.swedbankpay.com/releases" target="_blank" rel="noopener noreferrer">changelog</a> to see the changes in detail. Enjoy!</p>
    },
    {
        version: "10.6.1",
        title: "Minor bugfix",
        text: "Fix dead anchor tags"
    },
    {
        version: "10.6.0",
        title: "A brand new Utilities page 😱",
        text: <p>Utilities section has been updated, now you can get direct access to your favorite utility classes! Some minor bugfixes has been fixed, updated our get-started section for our users and added a crisp shortcut to make your searches even faster (Ctrl/Cmd + K)🔥 Lastly, the navigation component is officially ❌deprecated❌ meaning we will not be updating or prioritize maintenance for this component. As always, you can read the thorough changelog on Github!</p>
    },
    {
        version: "10.5.1",
        title: "A quick and clean hotfix incoming!",
        text: <p>Small bugs were located post producing last version. These are now fixed! The tooltip component was before dependent on button&apos;s .less file. Not anymore! Be aware! This is kind of, not really, a breaking change, meaning your old code will still work, but you need to delete <CodeTags type="secondary" code=".btn"/> and <CodeTags type="secondary" code=".btn-link"/> classes in your tooltip component to be fully up2d8. In addition, we added back the arrow pointing up to the tooltip that are appearing, and removed the annoying border in input fields if you add postfix to it. That&apos;s all folks! Have a merry Christmas! 🎅🏼🎅🏼</p>
    },
    {
        version: "10.5.0",
        title: "Experis' Christmas gift",
        text: <p>This is an early christmas present🎁 for you guys! A new release✨! Some components received some freshness. The button components got some new styles, The slab component got reworked - The shadows should look better now, and the badge component got more ✨colorful✨💅 We have also made a lot of accessibility upgrades. Especially regarding high contrast and focus on elements.
        Bugs🐛 were squashed! The expandable component tried to take an early christmas vacation and disappeared from the component overview. It was quickly caught and returned to component jail🚨 We also removed a scrollbar from the search results because two bars does not make you scroll faster 😔
        The button has been bullying its surrounding pixels. After a stern talk it agreed to stop pushing them around. Talk about personal growth! 🏅
        That&apos;s it for now! Hope you have a great holiday!🎅🎄🤶</p>
    },
    {
        version: "10.4.1",
        title: "Hotfixes incoming 🚤",
        text: "Here is a release solely based on feedback from our users 🤝 Turns out the dropdown component wasn’t perfect after all, and it had some weird alignment behavior when placed side-by-side with other components. This is now taken care of. We also renamed the class used to style the buttons inside the dropdown menu from '.btn-elem' to '.dropdown-option'. In addition, we removed the css dependency from the button component, so it is now independent. You can now use it as you want without having to import the button styles. We also added style support for the tabs component. Now the <a> element can also have the class of active instead of the <li> and the correct style will be applied. This to ensure an out of the box support for Nuxt router. Enjoy 😊"
    },
    {
        version: "10.4.0",
        title: "New developer New component",
        text: <p>The design guide team is growing, and so is our component collection! Say hello to our brand new ✨<a href={`${basename}components/dropdown`}>Dropdown</a>✨ component. Check it out!
            We have also included several changes based on feedback from you guys, our users. Thank you for all your input, and keep’em coming!
            We have, amongst other things, added filter tags, updated status badges, updated error icons, and resolved a lot of bugs 🐛
            Head over to the complete <a href="https://github.com/SwedbankPay/design.swedbankpay.com/releases">changelog</a> to see all the specific changes.</p>
    },
    {
        version: "10.3.0",
        title: "Search bar and other treats 🍬",
        text: "Hello to all users of the design guide! In this release, various snacks are provided. First off, in the top right corner, you can see our brand-new search bar! 🔍 This little spinster gives you an alternative way to reach your destination. It is not the most sophisticated search field, but it does the trick! Some WCAG updates have also been made. For instance, the option of reduced animations based on your settings of reducing motion on your OS. Inclusion all the way! Buttons have obtained new designs for their states, and the table component has been modernized, with belonging documentation. Check the changelog to see all the changes."
    },
    {
        version: "10.2.0",
        title: "Contribution is key 🔑",
        text: <p>In this release, we have given our contribution sections an update. To have the most robust design system, we need to continuously improve ourselves, which is only doable through the help of our users. Therefore, we have updated our documentation and created two videos; one to emphasize the <a href={`${basename}get-started/introduction`}>contribution process</a>, and one video to show users how to use the new <a href={`${basename}get-started/for-developers`}>Design Guide light</a>. Check them out! This release also includes bug fixes: the pagination script is now supporting lists with seven elements or fewer, markup bug on pagination arrows, and small fixes on the color page. If you find something wrong or weird, do not hesitate to contact us through our slack channel #design-guide-general 🎉</p>
    },
    {
        version: "10.1.0",
        title: "WCAG updates",
        text: "Major WCAG update! The design guide is now accessibility-friendly based on the feedback we received from FUNKA 🎉 This version holds mostly technical updates with correct usage of aria-labels, support for zoom up to 200%, and correct placement of the Toast component in the DOM when called on. We also updated our documentation regarding alt-texts and captions. Thank you for all feedback from the last release and findings of bugs 🪲 Enjoy!"
    },
    {
        version: "10.0.0",
        title: "Design guide light 👑",
        text: <p>It´s finally here! Design guide light is live and direct! Choose what components you want, and leave the rest. Go to <a href={`${basename}get-started/for-developers`}>for developers</a> to read the updated documentation. We also updated some of the colors and the presentation is brand new! Head over to the <a href={`${basename}identity/color`}>color section</a> in Identity to see hex-codes, variables and more! ApplePay icon has also been added.</p>
    },
    {
        version: "9.1.0",
        title: "Infinite sidebar 😱 and more WCAG",
        text: "Minor alert! This version supports infinite sidebar levels without breaking the component! Read about the changes on it´s documentation page. We also support anchor-tags for arrows in our pagination component. In addition, some WCAG changes has been made. To see all details, head over to the changelog on GitHub."
    },
    {
        version: "9.0.0",
        title: "Accesibility train keeps on rollin’ 🚂",
        text: "Heads up, this one includes breaking changes making the topbar and the tooltip components more accessible. We’re also removing support for tooltips as help text containers in form input components. Instead introducing hint texts and expanding hint text to make information more accessible for everyone. More so, we added a new skip link component that will make navigation easier for keyboard users. The sidebar is improved for keyboard navigation and the the tables now support a caption element. Enjoy! "
    },
    {
        version: "8.0.1",
        title: "Patch of documentation and minor bugs",
        text: "Update of text (typos) on input field, select and logotype documentation. Bug fixes on tabs, alert icon and radio button offset.."
    },
    {
        version: "8.0.0",
        title: "WCAG kickoff, Pagination, Sheet and more",
        text: "We’re kickin’ of towards a more accessible Design Guide, starting with clearing issues related to overlays, forms and buttons. The Pagination component got an update including a new styling script, and the Sheet component got a more mobile friendly design. An updated version of the Swedbank Pay Logotype is also included. To get the full picture - head over to the detailed changelog!"
    },
    {
        version: "7.1.1",
        title: "Patch of styling and path updates",
        text: "Small updates on the visuals of Toast and Form-pattern, and more consisted path naming. We also changed the path in the documentation for logos from \"designguide/assets\" to \"img/logo\"."
    },
    {
        version: "7.1.0",
        title: "Node package upgrade and new Pattern section",
        text: "Node package upgrade incoming which supports selecting and importing specific component styling/script. Documentation wise, we added a new Pattern section to showcase best practice solutions for common product features, starting off with Login and Forms page. We also solved a bunch of forgotten GitHub issues and updated the Toast component."
    },
    {
        version: "7.0.1",
        title: "A patch of love",
        text: "Some things didn’t end up looking the way we wanted them (Safari, we're mostly looking at you). This patch will remove some styling bugs from previous release."
    },
    {
        version: "7.0.0",
        title: "Favicon, component updates and copy code feature",
        text: "You asked and we heard you, Favicon assets can now be found in the logotype section. We also redesigned a few of our components and updated the documentation. Goodbye to Tabs looking disabled on hover, Hello new fresh looking Alerts and Loaders. And you know what, you will no longer need to manually copy code from our code viewer since we have a brand new copy code button in place."
    },
    {
        version: "6.1.0",
        title: "Node package",
        text: "Boom Shakalaka! The Design Guide is now available as a node package 📦."
    },
    {
        version: "6.0.1",
        title: "Bugfixes and security updates",
        text: "Internet explorer needed a tiny touch of 'love', it's nice to be safe with new security package updates, and the main css file is smaller. Yay."
    }
];
