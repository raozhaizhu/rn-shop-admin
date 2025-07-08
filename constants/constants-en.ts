/* -------------------------------------------------------------------------- */
/*                                   Path: /app                                */
/* -------------------------------------------------------------------------- */
import { Smartphone, Zap, ShoppingCart, Gift } from "lucide-react";

export const HOME_FEATURES = [
    {
        icon: Smartphone,
        title: "User-Friendly Interface",
        description: "Intuitive design for effortless navigation and shopping.",
    },
    {
        icon: Zap,
        title: "Lightning-Fast Search",
        description: "Find the perfect product in seconds with our powerful search engine.",
    },
    {
        icon: ShoppingCart,
        title: "Secure Checkout",
        description: "Shop with confidence using our encrypted payment system.",
    },
    {
        icon: Gift,
        title: "Exclusive Deals",
        description: "Access app-only discounts and special offers.",
    },
];

export const HOME_TESTIMONIALS = [
    {
        name: "John Doe",
        comment: "This app has revolutionized how I shop for tech. It's so convenient!",
        avatar: "/man1.png",
    },
    {
        name: "Ethan Carter",
        comment: "The exclusive deals on this app are unbelievable. I've saved so much!",
        avatar: "/man2.png",
    },
];

export const HOME_TEXTS = {
    SECTION_1_TITLE: "Explore Now",
    SECTION_1_SUBTITLE: "Shop the latest tech with our mobile app.",
    SECTION_1_BUTTON_TEXT_1: "Download Now",

    SECTION_2_TITLE: "App Features",

    SECTION_3_TITLE: "Download App Now",
    SECTION_3_SUBTITLE: "Experience the shopping at your fingertips.",
    SECTION_3_BUTTON_TEXT_1: "App Store",
    SECTION_3_BUTTON_TEXT_2: "Google Play",

    SECTION_4_TITLE: "What Our Users Say",

    SECTION_5_TITLE: "Ready to Transform Your Shopping?",
    SECTION_5_SUBTITLE: "Download App now and get 20% off your first in-app purchase!",
    SECTION_5_BUTTON_TEXT_1: "Get Started",
};
/* -------------------------------------------------------------------------- */
/*                         PATH : /components/category                        */
/* -------------------------------------------------------------------------- */
export const COMPONENT_CATEGORY_TEXTS = {
    TABLE_DIALOG_1_TITLE: "Category product list",
    TABLE_DIALOG_1_CARD_P: " in stock",

    TABLE_CELL_DROPDOWN_SPAN: "Open menu",
    TABLE_CELL_DROPDOWN_LABEL: "Actions",
    TABLE_CELL_DROPDOWN_ITEM_1: "Edit",
    TABLE_CELL_DROPDOWN_ITEM_2: "Delete",
    // DIALOG2
    TABLE_DIALOG_2_TITLE: "Are you absolutely sure?",
    TABLE_DIALOG_2_DESCRIPTION: "This action cannot be undone. This will permanently delete this category.",
    TABLE_DIALOG_2_BUTTON_1: "Cancel",
    TABLE_DIALOG_2_BUTTON_2: "Confirm Delete",
};
/* -------------------------------------------------------------------------- */
/*                         PATH : /components/footer                        */
/* -------------------------------------------------------------------------- */
export const COMPONENT_FOOTER_TEXTS = {
    LINK_1: "Rzz-Shop-Admin",
    LINK_2: "About",
    LINK_3: "Contact",
    LINK_4: "Privacy Policy",
    LINK_5: "Terms",
};
/* -------------------------------------------------------------------------- */
/*                         PATH : /components/header                        */
/* -------------------------------------------------------------------------- */
export const COMPONENT_HEADER_TEXTS = {
    SHEET_TRIGGER: "Toggle navigation menu",

    DROPDOWN_TRIGGER: "Toggle user menu",
    DROPDOWN_LABEL: "My Account",
    DROPDOWN_ITEM_1: "Logout",
    DROPDOWN_ITEM_2_TRIGGER: "Toggle theme",
    DROPDOWN_ITEM_2_CONTENT_ITEM_1: "Light",
    DROPDOWN_ITEM_2_CONTENT_ITEM_2: "Dark",
    DROPDOWN_ITEM_2_CONTENT_ITEM_3: "System",
};

export const COMPONENT_HEADER_NAV_LINKS = [
    { href: "/admin/dashboard", label: "Dashboard" },
    { href: "/admin/orders", label: "Orders" },
    { href: "/admin/products", label: "Products" },
    { href: "/admin/categories", label: "Categories" },
];
/* -------------------------------------------------------------------------- */
/*                         PATH : /components/multi-image-uploader                       */
/* -------------------------------------------------------------------------- */
export const COMPONENT_MULTI_IMAGE_UPLOADER_TEXTS = {
    BUTTON: "Choose an image",
};
/* -------------------------------------------------------------------------- */
/*                           PATH: /app/admin/dashboard                           */
/* -------------------------------------------------------------------------- */

export const ADMIN_DASHBOARD_TEXTS = {
    TITLE: "Dashboard Overview",

    CARD_1_TITLE: "Orders Over Time",
    CARD_2_TITLE: "Products per Category",
    CARD_3_TITLE: "Latest Users",
    CARD_3_HEAD_1: "Email",
    CARD_3_HEAD_2: "Date",
};

/* -------------------------------------------------------------------------- */
/*                        PATH : /app/admin/categories                           */
/* -------------------------------------------------------------------------- */
export const ADMIN_CATEGORIES_TEXTS = {
    DIALOG_BUTTON_TEXT: "Add Category",
    DIALOG_TITLE: "Create Category",

    CARD_TITLE: "Categories",
    CARD_TABLE_HEAD_1: "Image",
    CARD_TABLE_HEAD_2: "Name",
    CARD_TABLE_HEAD_3: "Created at",
    CARD_TABLE_HEAD_4: "Products",
    CARD_TABLE_HEAD_5: "Actions",
};

export const ADMIN_CATEGORIES_FORM_TEXTS = {
    FORM_FIELD_1_LABEL: "Name",
    FORM_FIELD_1_DESCRIPTION: "Category Name",

    FORM_FIELD_2_LABEL: "Image",
    FORM_FIELD_2_DESCRIPTION: "Category Image",

    BUTTON_TEXT: "Submit",
};
/* -------------------------------------------------------------------------- */
/*                            PATH : /app/admin/orders                            */
/* -------------------------------------------------------------------------- */
export const ADMIN_ORDERS_TEXTS = {
    TITLE: "Orders Management Dashboard",

    TABLE_HEAD_1: "ID",
    TABLE_HEAD_2: "Created At",
    TABLE_HEAD_3: "Status",
    TABLE_HEAD_4: "Description",
    TABLE_HEAD_5: "User",
    TABLE_HEAD_6: "Slug",
    TABLE_HEAD_7: "Total Price",
    TABLE_HEAD_8: "Products",
    TABLE_HEAD_9: "Actions",

    TABLE_CELL: "item",

    DIALOG_TRIGGER: "View Products",
    DIALOG_TITLE: "Order Products",
    DIALOG_SPAN: "Available Quantity: ",
};
/* -------------------------------------------------------------------------- */
/*                           PATH : /app/admin/products                           */
/* -------------------------------------------------------------------------- */
export const ADMIN_PRODUCTS_TEXTS = {
    TITLE: "Products Management",
    BUTTON: "Add Product",

    TABLE_HEAD_1: "Title",
    TABLE_HEAD_2: "Category",
    TABLE_HEAD_3: "Price",
    TABLE_HEAD_4: "Max Quantity",
    TABLE_HEAD_5: "Hero Image",
    TABLE_HEAD_6: "Product Images",
    TABLE_HEAD_9: "Actions",

    DIALOG_TITLE: "Delete Product",
    DIALOG_P: "Are you sure you want to delete ",
    DIALOG_BUTTON: "Delete",
};
export const ADMIN_PRODUCTS_FORM_TEXTS = {
    DIALOG_TITLE: "Add New Product",

    DIALOG_FORM_FIELD_1_LABEL: "Title",
    DIALOG_FORM_FIELD_2_LABEL: "Category",
    DIALOG_FORM_FIELD_3_LABEL: "Price",
    DIALOG_FORM_FIELD_4_LABEL: "Max Quantity",
    DIALOG_FORM_FIELD_5_LABEL: "Hero Image",
    DIALOG_FORM_FIELD_6_LABEL: "Product Images",

    DIALOG_BUTTON: "Add Product",
};
