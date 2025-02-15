<script>
import { buildImageUrl, getConfig } from "cloudinary-build-url";
import { placeholderTypes } from "./helpers";

export default {
  name: "SfCimg",
  functional: true,
  props: {
    publicId: {
      type: String,
      required: true,
    },
    progressive: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
      validator: (value) => !!value || placeholderTypes[value],
    },
    cloud: {
      type: Object,
      required: true,
      validator: (value) => !!value.cloudName,
    },
    transformations: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: String,
      default: "lazy",
      validator: (value) => ["", "lazy", "eager"].includes(value),
    },
    alt: {
      type: String,
      required: true,
      validator: (value) => value && !!value.trim(),
    },
  },
  render(createElement, context) {
    const props = context.props;

    if (!props.publicId) {
      throw Error("PublicId is required to use this component.");
      return;
    }
    if ((!props.cloud || !props.cloud.cloudName) && !getConfig().cloudName) {
      throw Error("cloudName is required to use this component.");
      return;
    }

    const progressiveEffect = props.progressive
      ? [{ flags: "progressive" }]
      : [];

    const chaining = progressiveEffect.concat(props.transformations);
    const options = {
      cloud: props.cloud,
      transformations: {
        format: props.format || "auto",
        chaining,
      },
    };

    const placeholderEffects = placeholderTypes[props.placeholder];

    const image = new Image();

    image.onload = () => {
      context.parent.$refs.cimage.setAttribute("src", image.src);
    };

    image.src = buildImageUrl(props.publicId, options);

    return createElement(
      "img",
      {
        ...context,
        attrs: {
          ...context.attrs,
          src: placeholderEffects
            ? buildImageUrl(props.publicId, {
                cloud: props.cloud,
                transformations: {
                  chaining: chaining.concat(placeholderEffects),
                },
              })
            : image.src,
          loading: props.loading,
          alt: props.alt,
        },
        ref: "cimage",
        class: {
          ...context.class,
          "sf-cimage": true,
        },
      },
      context.children
    );
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfCimage.scss";
</style>
