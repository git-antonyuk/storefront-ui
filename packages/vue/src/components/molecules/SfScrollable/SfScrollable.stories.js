import { SfScrollable, SfProductOption } from "@storefront-ui/vue";

const options = [
  {
    color: "red",
    label: "Red",
  },
  {
    color: "blue",
    label: "Blue",
  },
  {
    color: "green",
    label: "Green",
  },
  {
    color: "black",
    label: "Black",
  },
  {
    color: "navy",
    label: "Navy",
  },
  {
    color: "pink",
    label: "Pink",
  },
];

export default {
  title: "Components/Molecules/Scrollable",
  component: SfScrollable,
  argTypes: {
    maxContentHeight: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "",
        },
      },
    },
    showText: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "Show",
        },
      },
    },
    hideText: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "Hide",
        },
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfScrollable, SfProductOption },
  props: Object.keys(argTypes),
  data() {
    return {
      options,
    };
  },
  template: `
  <SfScrollable 
    :show-text="showText" 
    :hide-text="hideText"
    :max-content-height="maxContentHeight"
    style="max-width: 13.75rem"
    :style="style"
  >
    <SfProductOption 
      v-for="(option, key) in options" 
      :key="option.color" 
      :color="option.color" 
      :label="option.label"
      :style="{marginBottom: key < options.length - 1 ? '8px' : undefined}"/>
  </SfScrollable>`,
});

export const Common = Template.bind({});
Common.args = {
  style: "",
  showText: "View all colors",
  hideText: "Hide colors",
  maxContentHeight: "6.875rem",
};

export const WithCSSHeight = Template.bind({});
WithCSSHeight.args = {
  ...Common.args,
  maxContentHeight: "",
  style: "--max-height: 6.875rem;",
};

export const UseButtonSlot = (args, { argTypes }) => ({
  components: { SfScrollable, SfProductOption },
  props: Object.keys(argTypes),
  data() {
    return {
      options,
    };
  },
  template: `
  <SfScrollable 
    :show-text="showText" 
    :hide-text="hideText"
    :max-content-height="maxContentHeight"
    :class="{ 'sf-scrollable--is-open': !isHidden }"
    style="max-width: 13.75rem"
  >
    <SfProductOption 
      v-for="(option, key) in options" 
      :key="option.color" 
      :color="option.color" 
      :label="option.label"
      :style="{marginBottom: key < options.length - 1 ? '8px' : undefined}"/>
      <template #view-all> 
        <button  @click="isHidden = !isHidden">
          <span v-if="isHidden" >{{showText}}</span>
          <span v-else>{{hideText}}</span>
        </button>
      </template>
  </SfScrollable>`,
});
UseButtonSlot.args = { ...Common.args };
