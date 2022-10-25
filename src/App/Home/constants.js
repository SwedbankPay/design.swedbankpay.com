import React from "react";

export const changeLogs = [
    {
        version: "10.4.0",
        title: "New developer New component",
        text: <p>The design guide team is growing, and so is our component collection! Say hello to our brand new ✨<a href="/components/dropdown">Dropdown</a>✨ component. Check it out!
            We have also included several changes based on feedback from you guys, our users. Thank you for all your input, and keep’em coming!
            We have, amongst other things, added filter tags, updated status badges, updated error icons, and resolved a lot of bugs 🐛
            Head over to the complete changelog to see all the specific changes.</p>
    },
    {
        version: "10.3.0",
        title: "Search bar and other treats 🍬",
        text: "Hello to all users of the design guide! In this release, various snacks are provided. First off, in the top right corner, you can see our brand-new search bar! 🔍 This little spinster gives you an alternative way to reach your destination. It is not the most sophisticated search field, but it does the trick! Some WCAG updates have also been made. For instance, the option of reduced animations based on your settings of reducing motion on your OS. Inclusion all the way! Buttons have obtained new designs for their states, and the table component has been modernized, with belonging documentation. Check the changelog to see all the changes."
    },
    {
        version: "10.2.0",
        title: "Contribution is key 🔑",
        text: <p>In this release, we have given our contribution sections an update. To have the most robust design system, we need to continuously improve ourselves, which is only doable through the help of our users. Therefore, we have updated our documentation and created two videos; one to emphasize the <a href="/get-started/introduction">contribution process</a>, and one video to show users how to use the new <a href="/get-started/for-developers">Design Guide light</a>. Check them out! This release also includes bug fixes: the pagination script is now supporting lists with seven elements or fewer, markup bug on pagination arrows, and small fixes on the color page. If you find something wrong or weird, do not hesitate to contact us through our slack channel #design-guide-general 🎉</p>
    },
    {
        version: "10.1.0",
        title: "WCAG updates",
        text: "Major WCAG update! The design guide is now accessibility-friendly based on the feedback we received from FUNKA 🎉 This version holds mostly technical updates with correct usage of aria-labels, support for zoom up to 200%, and correct placement of the Toast component in the DOM when called on. We also updated our documentation regarding alt-texts and captions. Thank you for all feedback from the last release and findings of bugs 🪲 Enjoy!"
    },
    {
        version: "10.0.0",
        title: "Design guide light 👑",
        text: <p>It´s finally here! Design guide light is live and direct! Choose what components you want, and leave the rest. Go to <a href="/get-started/for-developers">for developers</a> to read the updated documentation. We also updated some of the colors and the presentation is brand new! Head over to the <a href="/identity/color">color section</a> in Identity to see hex-codes, variables and more! ApplePay icon has also been added.</p>
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
