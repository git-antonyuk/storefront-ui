import { SfHeader } from "@storefront-ui/vue";
export default {
  title: "Components/Organisms/Header",
  component: SfHeader,
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: [
          "sf-header--has-mobile-search",
          "sf-header--has-mobile-navigation",
          "sf-header--multiline",
        ],
      },
      table: {
        category: "CSS Modifiers",
      },
    },
    logo: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    title: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    cartIcon: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: "empty_cart",
      },
    },
    wishlistIcon: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: "heart",
      },
    },
    accountIcon: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: "profile",
      },
    },
    activeIcon: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: "",
      },
    },
    searchPlaceholder: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: "Search for items",
      },
    },
    searchValue: {
      control: "number",
      table: {
        category: "Props",
      },
    },
    cartItemsQty: {
      control: "number",
      table: {
        category: "Props",
        defaultValue: 0,
      },
    },
    isSticky: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    isNavVisible: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    "click:cart": { action: "Clicked on cart", table: { category: "Events" } },
    "click:wishlist": {
      action: "Clicked on Wishlist",
      table: { category: "Events" },
    },
    "click:account": {
      action: "Clicked on Account",
      table: { category: "Events" },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfHeader },
  props: Object.keys(argTypes),
  data() {
    return {
      navigation: ["women", "man", "kids"],
      searchValue: "",
    };
  },
  template: `
  <SfHeader
    :class="classes"
    :title="title"
    :logo="logo"
    :active-icon="activeIcon"
    :search-placeholder="searchPlaceholder"
    :search-value="searchValue"
    :cart-icon="cartIcon"
    :wishlist-icon="wishlistIcon"
    :is-sticky="isSticky"
    :account-icon="accountIcon"
    :style="spacer"
    :cart-items-qty="cartItemsQty"
    :wishlist-items-qty="wishlistItemsQty"
    @click:cart="this['click:cart']"
    @click:wishlist="this['click:wishlist']"
    @click:account="this['click:account']"
    @change:search="searchValue = $event"
>
  <template #navigation>
    <SfHeaderNavigationItem
      v-for="item in navigation"
      :key="item">
      <template slot="desktop-navigation-item">
        <SfLink href="#">{{item}}</SfLink>
      </template>
    </SfHeaderNavigationItem>
  </template>
</SfHeader>`,
});

export const Common = Template.bind({});
Common.args = {
  title: "Storefront UI",
  logo: "/assets/logo.svg",
};
