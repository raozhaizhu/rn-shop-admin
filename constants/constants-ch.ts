/* -------------------------------------------------------------------------- */
/*                                   Path: /                                   */
/* -------------------------------------------------------------------------- */
import { Smartphone, Zap, ShoppingCart, Gift } from "lucide-react";

export const HOME_FEATURES = [
    {
        icon: Smartphone,
        title: "友好的界面",
        description: "设计直观，让浏览和购物变得轻松自如。",
    },
    {
        icon: Zap,
        title: "快速的检索",
        description: "用强大的搜索引擎快速找到完美的商品。",
    },
    {
        icon: ShoppingCart,
        title: "安全的支付",
        description: "安心消费,有加密系统保护,无惧支付风险",
    },
    {
        icon: Gift,
        title: "独家的优惠",
        description: "访问APP,可获取特殊的独家优惠。",
    },
];

export const HOME_TESTIMONIALS = [
    {
        name: "John Doe",
        comment: "这个APP革新了我的购物方式,我从未有过这样丝滑的购物体验!",
        avatar: "/man1.png",
    },
    {
        name: "Ethan Carter",
        comment: "APP上的优惠真是太超值了,我简直不敢相信我省下了这么多钱。",
        avatar: "/man2.png",
    },
];

export const HOME_TEXTS = {
    SECTION_1_TITLE: "立即探索",
    SECTION_1_SUBTITLE: "访问我们的APP,探索当下最尖端的科技产品",
    SECTION_1_BUTTON_TEXT_1: "立刻下载",

    SECTION_2_TITLE: "APP功能",

    SECTION_3_TITLE: "立刻下载APP",
    SECTION_3_SUBTITLE: "纵享指尖购物体验",
    SECTION_3_BUTTON_TEXT_1: "App Store",
    SECTION_3_BUTTON_TEXT_2: "Google Play",

    SECTION_4_TITLE: "客户体验",

    SECTION_5_TITLE: "准备好革新你的购物体验了吗?",
    SECTION_5_SUBTITLE: "立刻下载APP并获得20%的初次消费优惠!",
    SECTION_5_BUTTON_TEXT_1: "立刻开始",
};

/* -------------------------------------------------------------------------- */
/*                         PATH : /components/category                        */
/* -------------------------------------------------------------------------- */
export const COMPONENT_CATEGORY_TEXTS = {
    TABLE_DIALOG_1_TITLE: "分类产品列表",
    TABLE_DIALOG_1_CARD_P: " 库存",

    TABLE_CELL_DROPDOWN_SPAN: "打开菜单",
    TABLE_CELL_DROPDOWN_LABEL: "操作",
    TABLE_CELL_DROPDOWN_ITEM_1: "编辑",
    TABLE_CELL_DROPDOWN_ITEM_2: "删除",

    TABLE_DIALOG_2_TITLE: "你确定吗？",
    TABLE_DIALOG_2_DESCRIPTION: "此操作无法撤销。这将永久删除该分类。",
    TABLE_DIALOG_2_BUTTON_1: "取消",
    TABLE_DIALOG_2_BUTTON_2: "确认删除",
};
/* -------------------------------------------------------------------------- */
/*                         PATH : /components/footer                        */
/* -------------------------------------------------------------------------- */
export const COMPONENT_FOOTER_TEXTS = {
    LINK_1: "Rzz-Shop-Admin",
    LINK_2: "关于我们",
    LINK_3: "联系",
    LINK_4: "隐私政策",
    LINK_5: "条款",
};
/* -------------------------------------------------------------------------- */
/*                         PATH : /components/header                        */
/* -------------------------------------------------------------------------- */
export const COMPONENT_HEADER_TEXTS = {
    SHEET_TRIGGER: "切换导航菜单",

    DROPDOWN_TRIGGER: "切换用户菜单",
    DROPDOWN_LABEL: "我的账户",
    DROPDOWN_ITEM_1: "退出登录",
    DROPDOWN_ITEM_2_TRIGGER: "切换主题",
    DROPDOWN_ITEM_2_CONTENT_ITEM_1: "浅色",
    DROPDOWN_ITEM_2_CONTENT_ITEM_2: "深色",
    DROPDOWN_ITEM_2_CONTENT_ITEM_3: "系统",
};

export const COMPONENT_HEADER_NAV_LINKS = [
    { href: "/admin/dashboard", label: "仪表板" },
    { href: "/admin/orders", label: "订单" },
    { href: "/admin/products", label: "产品" },
    { href: "/admin/categories", label: "分类" },
];

/* -------------------------------------------------------------------------- */
/*                         PATH : /components/multi-image-uploader                       */
/* -------------------------------------------------------------------------- */
export const COMPONENT_MULTI_IMAGE_UPLOADER_TEXTS = {
    BUTTON: "选择图片",
};
/* -------------------------------------------------------------------------- */
/*                           PATH: /admin/dashboard                           */
/* -------------------------------------------------------------------------- */

export const ADMIN_DASHBOARD_TEXTS = {
    TITLE: "仪表板总览",

    CARD_1_TITLE: "近期订单",
    CARD_2_TITLE: "各类别产品",
    CARD_3_TITLE: "最新用户",
    CARD_3_HEAD_1: "邮箱",
    CARD_3_HEAD_2: "日期",
};

/* -------------------------------------------------------------------------- */
/*                        PATH : /admin/categories                           */
/* -------------------------------------------------------------------------- */
export const ADMIN_CATEGORIES_TEXTS = {
    DIALOG_BUTTON_TEXT: "添加分类",
    DIALOG_TITLE: "创建分类",

    CARD_TITLE: "分类",
    CARD_TABLE_HEAD_1: "图片",
    CARD_TABLE_HEAD_2: "名字",
    CARD_TABLE_HEAD_3: "创建于",
    CARD_TABLE_HEAD_4: "产品",
    CARD_TABLE_HEAD_5: "编辑",
};

export const ADMIN_CATEGORIES_FORM_TEXTS = {
    FORM_FIELD_1_LABEL: "名称",
    FORM_FIELD_1_DESCRIPTION: "分类名称",
    FORM_FIELD_2_LABEL: "图片",
    FORM_FIELD_2_DESCRIPTION: "分类图片",
    BUTTON_TEXT: "提交",
};

/* -------------------------------------------------------------------------- */
/*                            PATH : /admin/orders                            */
/* -------------------------------------------------------------------------- */
export const ADMIN_ORDERS_TEXTS = {
    TITLE: "订单管理仪表板",

    TABLE_HEAD_1: "ID",
    TABLE_HEAD_2: "创建于",
    TABLE_HEAD_3: "状态",
    TABLE_HEAD_4: "描述",
    TABLE_HEAD_5: "用户",
    TABLE_HEAD_6: "Slug",
    TABLE_HEAD_7: "总价",
    TABLE_HEAD_8: "产品",
    TABLE_HEAD_9: "编辑",

    TABLE_CELL: "项目",

    DIALOG_TRIGGER: "查看产品",
    DIALOG_TITLE: "订单所含产品",
    DIALOG_SPAN: "可用数量: ",
};
/* -------------------------------------------------------------------------- */
/*                           PATH : /admin/products                           */
/* -------------------------------------------------------------------------- */
export const ADMIN_PRODUCTS_TEXTS = {
    TITLE: "产品管理",
    BUTTON: "添加产品",

    TABLE_HEAD_1: "标题",
    TABLE_HEAD_2: "分类",
    TABLE_HEAD_3: "价格",
    TABLE_HEAD_4: "最大数量",
    TABLE_HEAD_5: "首图",
    TABLE_HEAD_6: "产品图片",
    TABLE_HEAD_7: "编辑",

    DIALOG_TITLE: "删除产品",
    DIALOG_P: "请确定是否要删除 ",
    DIALOG_BUTTON: "删除",
};
export const ADMIN_PRODUCTS_FORM_TEXTS = {
    DIALOG_TITLE: "添加新产品",

    DIALOG_FORM_FIELD_1_LABEL: "标题",
    DIALOG_FORM_FIELD_2_LABEL: "分类",
    DIALOG_FORM_FIELD_3_LABEL: "价格",
    DIALOG_FORM_FIELD_4_LABEL: "最大数量",
    DIALOG_FORM_FIELD_5_LABEL: "首图",
    DIALOG_FORM_FIELD_6_LABEL: "产品图片",

    DIALOG_BUTTON: "添加产品",
};
