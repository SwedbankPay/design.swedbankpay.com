// Constants that can be taken out of the index.js file is put here, to keep the index.js file smaller and less confusing

export const customersList = [
    {
        id: "c1",
        firstName: "Sven",
        lastName: "Svensson",
        email: "sven.svensson@email.com",
        phone: "+47 *** ** ***",
        location: "Visby",
        status: "default"
    },
    {
        id: "c2",
        firstName: "Anna",
        lastName: "Svensson",
        email: "anna.svensson@email.com",
        phone: "+47 *** ** ***",
        location: "Stockholm",
        status: "success"
    },
    {
        id: "c3",
        firstName: "Ola",
        lastName: "Nordmann",
        email: "ola.nordmann@email.com",
        phone: "+47 *** ** ***",
        location: "Oslo",
        status: "success"
    },
    {
        id: "c4",
        firstName: "Kari",
        lastName: "Nordmann",
        email: "kari.nordmann@email.com",
        phone: "+47 *** ** ***",
        location: "Bergen",
        status: "warning"
    },
    {
        id: "c5",
        firstName: "Holger",
        lastName: "Danske",
        email: "holger.danske@email.com",
        phone: "+47 *** ** ***",
        location: "Copenhagen",
        status: "danger"
    },
    {
        id: "c6",
        firstName: "Matti",
        lastName: "Meikäläinen",
        email: "matti.meikalainen@email.com",
        phone: "+47 *** ** ***",
        location: "Lahti",
        status: "success"
    },
    {
        id: "c7",
        firstName: "Helma",
        lastName: "Egilsdóttir",
        email: "helma.egilsdottir@email.com",
        phone: "+47 *** ** ***",
        location: "Reykjavík",
        status: "default"
    }
];

export const statusText = {
    default: "New",
    success: "Delivered",
    warning: "Late",
    danger: "Missing"
};

export const customersDetailedActionList = [
    {
        name: "Edit",
        icon: "edit"
    },
    {
        name: "Delete",
        icon: "delete"
    }
];

export const customersDetailedOrders = [...Array(15)].map(() => (Math.floor(Math.random() * 1000)) + 1000); // Generates 15 random orders with value between 1000 and 2000 to display

export const customersDetailedOrdersSteps = [
    {
        title: "Check status",
        completed: true
    },
    {
        title: "Confirm status",
        ongoing: true,
        selected: true
    },
    {
        title: "Handle status"
    },
    {
        title: "Complete status"
    }
];

export const customersDetailedLatestInquiry = {
    id: "InquiryID#456",
    date: "24.10.2019",
    numMessages: 8,
    resolved: false,
    message: "This is the initial message of the inquiry. The initial message is always sent by the customer. \
    It starts an inquiry thread in which the support team can respond to and stay in contact with the customer. \
    The inquiry is marked as unresolved until the support staff marks it as resolved."
};

// Generates 15 previous inquiries to display as an example
export const customersDetailedPreviousInquiries = [...Array(15).keys()].map(i => ({
    id: `InquiryID#${i}`,
    date: `${i + 10}.${Math.floor(10 - i * 0.4) < 10 ? "0" : ""}${Math.floor(10 - i * 0.4)}.20${19 - i < 10 ? "0" : ""}${19 - i}`, // Uses simple formulas to generate different dates, to get varied dates
    numMessages: Math.floor(Math.random() * 20) + 3,
    resolved: Math.random() > 0.1,
    message: `This is the initial message of inquiry InquiryID#${i}. This message was sent ${i + 10}.${Math.floor(10 - i * 0.4) < 10 ? "0" : ""}${Math.floor(10 - i * 0.4)}.20${19 - i < 10 ? "0" : ""}${19 - i}`
}));
