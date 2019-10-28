export default {
    template: `
        <a-scene shadow="soft">
        <slot name="assets"/>
        <a-entity position="0 0 -4">
          <slot />
          </a-entity>
         <a-sky color="#ECECEC"></a-sky>
        </a-scene>
    `
}