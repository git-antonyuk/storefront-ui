import { SfSticky } from "@storefront-ui/vue";
export default {
  title: "Components/Molecules/Sticky",
  component: SfSticky,
  decorators: [
    () => ({
      template: `
    <div style="display: flex;">
      <div style="flex: 1; margin-right: 1.25rem">
        <div style="height: 25rem; border: 1px solid #f2f2f2;"></div>
        <div style="height: 25rem; margin-top: 1.25rem; border: 1px solid #f2f2f2;"></div>
      </div>
      <div style="flex: 1">
        <story/>
      </div>
    </div>`,
    }),
  ],
};

const Template = (args, { argTypes }) => ({
  components: { SfSticky },
  props: Object.keys(argTypes),
  template: `
  <StoriesWrapper>
    <SfSticky>
      <div style="display: flex; flex: 1; align-items:center; justify-content:center; height: 18.75rem; background-color: #f2f2f2;">
        [#default slot content]
      </div>
    </SfSticky>
  </StoriesWrapper>`,
});

export const Common = Template.bind({});
Common.args = {};
