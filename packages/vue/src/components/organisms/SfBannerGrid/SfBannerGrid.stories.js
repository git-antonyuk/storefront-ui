import { SfBannerGrid, SfBanner } from "@storefront-ui/vue";
const banners = [
  {
    slot: "banner-A",
    subtitle: "Dresses",
    title: "Cocktail & Party",
    description:
      "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.",
    buttonText: "Shop now",
    image: ["/assets/storybook/Home/bannerF.jpg"],
    class: "sf-banner--slim",
  },
  {
    slot: "banner-B",
    subtitle: "Dresses",
    title: "Linen Dresses",
    image: ["/assets/storybook/Home/bannerE.jpg"],
    class: "sf-banner--slim",
    style: "padding-right: 20%",
    description:
      "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.",
  },
  {
    slot: "banner-C",
    subtitle: "T-Shirts",
    title: "The Office Life",
    buttonText: "Shop now",
    image: ["/assets/storybook/Home/bannerC.jpg"],
    class: "sf-banner--slim",
  },
  {
    slot: "banner-D",
    subtitle: "Summer Sandals",
    title: "Eco Sandals",
    buttonText: "Shop now",
    image: ["/assets/storybook/Home/bannerG.jpg"],
    class: "sf-banner--slim",
  },
];

export default {
  title: "Components/Organisms/BannerGrid",
  component: SfBannerGrid,
  argTypes: {
    bannerGrid: {
      control: {
        type: "select",
        options: [1, 2],
      },
      defaultValue: 1,
      table: {
        category: "Props",
        defaultValue: {
          summary: 1,
        },
      },
      description: "Number of grid for banners.",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfBannerGrid, SfBanner },
  props: Object.keys(argTypes),
  data() {
    return { banners };
  },
  template: `
  <SfBannerGrid
    :banner-grid="bannerGrid"
    :style="{maxWidth: '1240px', margin: 'auto'}"
  >
    <template 
      v-for="item in banners"
      v-slot:[item.slot]
    >
      <SfBanner
        :key="item.slot"
        :title="item.title"
        :subtitle="item.subtitle"
        :description="item.description" 
        :button-text="item.buttonText"
        :image="item.image"
        :class="item.class"
      />
    </template>
  </SfBannerGrid>`,
});

export const Common = Template.bind({});
Common.args = {};
