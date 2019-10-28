import Layout from './components/Layout.js'
import Scene from './components/Scene.js'
import Box from './components/Box.js'
import Wall from './components/Wall.js'
import Floor from './components/Floor.js'
import Ceiling from './components/Ceiling.js'

new Vue({
    el: '#app',
    components: { Layout, Scene, Box, Wall, Floor, Ceiling },
    template: `
    <Layout>
        <Scene>
            <a-camera position="0 1.8 2" tilt-turn twoway-motion></a-camera>
            <template v-slot:assets>
            <a-assets>
                <a-asset-item id="chandelier" src="./assets/models/Artichoke_Lamp.obj"></a-asset-item>
                <a-asset-item id="chandelier-mtl" src="./assets/models/Artichoke_Lamp.mtl"></a-asset-item>
            </a-assets>
            </template>
        <!-- <Ceiling position="0 6 0"/>
        <a-entity material="color: white;emissive:yellow; emissiveIntensity: 2" class="chandelier" position="0 1 0" scale="0.023 0.023 0.023" obj-model="obj: #chandelier"></a-entity>
          <a-entity light="type: point; intensity: 0.5; color: #FFF; castShadow: true" position="0 3.8 0"></a-entity>
          <a-entity light="type: ambient; intensity: 0.5; color: #FFF"></a-entity>
          </Ceiling> -->
          <!-- <Wall color="salmon" position="0 0 -5"/> -->
     	 <!-- <Wall position="-5 0 0" rotation="0 90 0"/> -->
          <Wall position="5 0 0" rotation="0 -90 0"/>
          <a-plane 
              position="4.9 3 0"
              scale="4 2 0"
              rotation="0 -90 0"
              material="src: ./assets/images/pilt.jpg"
              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>

          </Wall>
          <Wall position="0 0 5" rotation="0 -180 0"/>
          <a-plane 
              position="0 3 4.9"
              scale="2 2 2"
              rotation="0 -180 0"
              material="src: ./assets/images/kingad1.png"
              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>
        </Wall>
         
         <Box position="1 1 0" shadow="cast: true"/>
        <!-- <Floor /> -->
        <a-entity environment="preset: goaland; dressing: mushrooms"></a-entity>
       </Scene>
    </Layout>
`
})